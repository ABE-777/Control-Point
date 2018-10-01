using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using WebAPI.Data;
using WebAPI.Helpers.HubModels;

namespace WebAPI.Helpers.HubAdministrator
{
    public class ScannerManager
    {
        public int SchoolId { get; private set; }
        public int CarPerLane { get; set; }
        public ScannerType LaneLogistic { get; set; }

        public List<Lane> Lanes { get; set; }
        public List<Flight> Flights { get; set; }

        private int FlightNumber { get; set; }

        public string Status { get; set; }
        public string CloseLaneStatus { get; set; }
        public int CloseFlightId { get; set; }
        //only for single scanner
        private int currentLaneNumber;
        private int curentLaneId;
        private bool isMoveRemoveCard;

        public List<ScannerFlight> ScannerFlights { get; set; }


        public ScannerManager(int _schoolId, int userId, DataSeed ds)
        {
            SchoolId = _schoolId;
            var school = ds.GetSchoolById(SchoolId);
            //set school config
            CarPerLane = school.CarsPerLaneCount;
            LaneLogistic = (ScannerType)school.LaneLogisticTypeId;
            Lanes = ds.GetLanesBySchoolId(_schoolId);
            currentLaneNumber = 0;
            curentLaneId = 0;
            CloseLaneStatus = "";
            CloseFlightId = 0;
            isMoveRemoveCard = false;

            Flights = ds.GetFlightsBySchoolId(_schoolId);
            ScannerFlights = new List<ScannerFlight>();
            SetCurrentFlight(ds, userId);
        }

        private void SetCurrentFlight(DataSeed ds, int userId)
        {
            if (Flights == null || Flights.Count() == 0)
            {
                FlightNumber = ds.GetLastFlightNumberFromArchive(SchoolId) + 1;
                return;
                //CreateNewFlight(1, ds, userId);
            }
            else
            {
                var openFlights = Flights.Where(p => p.StatusId == (int)Enums.FlightStatus.Open).ToList();
                if (openFlights != null)
                {
                    foreach (var item in openFlights)
                    {
                        var lanes2Fights = ds.GetLanes2FlightsByFlightId(SchoolId, item.Id, userId);
                        for (int i = 0; i < lanes2Fights.Count(); i++)
                        {
                            var l2fObj = lanes2Fights.ElementAt(i);
                            if (l2fObj.StatusId == (int)Enums.LaneStatus.Closed)
                            {
                                lanes2Fights.Remove(l2fObj);
                                i--;
                            }
                            else
                            {
                                ScannerFlights.Add(new ScannerFlight
                                {
                                    FlightId = item.Id,
                                    FlightNumber = item.Number,
                                    Flight2LaneId = l2fObj.Id,
                                    LaneId = l2fObj.LaneId,
                                    LaneStatusId = l2fObj.StatusId,
                                    CountCarsInLane = ds.GetCountCardsByLane2FlightId(l2fObj.Id)
                                });
                            }
                        }
                    }

                }               
                FlightNumber = ds.GetFlightNumber(SchoolId)+1;
            }
        }

        public void CreateNewFlight(DataSeed ds, int userId)
        {
            var flight = new Flight
            {
                Date = DateTime.Today,
                Number = FlightNumber,
                StatusId = (int)Enums.FlightStatus.Open,
                SchoolId = SchoolId
            };
            flight.Id = ds.CreateFlight(flight);
            Flights.Add(flight);
            var lanes2Fights = ds.GetLanes2FlightsByFlightId(SchoolId, flight.Id, userId);
            foreach (var item in lanes2Fights)
            {
                ScannerFlights.Add(new ScannerFlight {
                                                    FlightId = flight.Id,
                                                    FlightNumber = flight.Number,
                                                    Flight2LaneId =item.Id,
                                                    LaneId =item.LaneId,
                                                    LaneStatusId =item.StatusId,
                                                    CountCarsInLane = ds.GetCountCardsByLane2FlightId(item.Id)
                });
            }

            FlightNumber++;
        }

        public ScannedStudent AddScannedStudenToFlight(ScannerInput card, int userId, int schoolId)
        {
			ScannedStudent result = null;
			CloseLaneStatus = "";
            CloseFlightId = 0;
            var scannedStudent = new ScannedStudent();
			using (var ds = new DataSeed()) {
				var student = ds.GetStudentByIdForDismissal(card.StudentId, schoolId);
				if (student == null)
				{
					Status = "Barcode not found";
					return null;
				}
				var parent = ds.GetParentById(card.ParentId);
				if (parent == null)
				{
					Status = "Barcode not found";
					return null;
				}
				var parentName = ds.StudentAlredyScanned(card.StudentId, SchoolId);
				if (parentName != null)
				{
					Status = "This student was picked up by " + parentName;
					return null;
				}

				scannedStudent.ParentId = parent.Id;
				scannedStudent.ParentLicense = parent.DriverLicense;
				scannedStudent.StudentId = student.Id;
				scannedStudent.ParentName = parent.Name;
				scannedStudent.Name = student.Name;

				var dismissal = new Dismissal
				{
					StudentId = student.Id,
					ParentId = parent.Id,
					ScanTime = DateTime.Now,
					UserId = userId
				};

				if (ScannerFlights == null || ScannerFlights.Count() == 0)
				{
					CreateNewFlight(ds, dismissal.UserId);
				}

				if (LaneLogistic == ScannerType.MultipleScanner)
				{
					var laneId = Lanes.FirstOrDefault(l => l.UserId == dismissal.UserId).Id;
					result = AddStudentToLane(ds, dismissal, laneId, scannedStudent);
				}
				else if (LaneLogistic == ScannerType.SingleScanner)
				{
					if (curentLaneId == 0)
					{
						result = AddStudentAltemating(ds, dismissal, scannedStudent);  // default single scanner
					}
					else
					{
						result = AddStudentToLane(ds, dismissal, curentLaneId, scannedStudent);
					}
				}
			};

            return result;
        }
        //Altemating
        private ScannedStudent AddStudentAltemating(DataSeed ds, Dismissal dismissal, ScannedStudent scannedStudent)
        {
            isMoveRemoveCard = false;
            var laneId = Lanes.ElementAt(currentLaneNumber).Id;
            var lane2FlightObj = ScannerFlights.FirstOrDefault(sf => sf.LaneId == laneId);

            lane2FlightObj = CheckIsLane(ds, dismissal.UserId, laneId, lane2FlightObj);

            if (!ds.IsCarExistInPrevLane(lane2FlightObj.Flight2LaneId, scannedStudent.ParentLicense))
            {
                currentLaneNumber = currentLaneNumber >= (Lanes.Count() - 1) ? 0 : (currentLaneNumber + 1);
                laneId = Lanes.ElementAt(currentLaneNumber).Id;
                lane2FlightObj = ScannerFlights.FirstOrDefault(sf => sf.LaneId == laneId);
               
            }
            else {
                lane2FlightObj.CountCarsInLane -= 1;
            }

            lane2FlightObj = CheckIsLane(ds, dismissal.UserId, laneId, lane2FlightObj);

            //check isLanefull
            if (CountCarInLane(ds, dismissal.UserId, lane2FlightObj, scannedStudent.ParentLicense))
            {
                lane2FlightObj = ScannerFlights.FirstOrDefault(sf => sf.LaneId == laneId);
            }

            dismissal.FlightLaneId = lane2FlightObj.Flight2LaneId;
            lane2FlightObj.CountCarsInLane += 1;
            dismissal.CarNumber = lane2FlightObj.CountCarsInLane;
            scannedStudent.CardId = ds.AddStudentToDismissal(dismissal);            
            scannedStudent.FlightNumber = lane2FlightObj.FlightNumber;
            scannedStudent.FligthId = lane2FlightObj.FlightId;
            if (scannedStudent.CardId == 0)
            {
                lane2FlightObj.CountCarsInLane -= 1;
                Status = "Barcode did not save. Please, try to scanne again!";
                return null;
            }
            scannedStudent.Lane = Lanes.Where(p => p.Id == lane2FlightObj.LaneId).FirstOrDefault();

            return scannedStudent;
        }

        private ScannerFlight CheckIsLane(DataSeed ds, int userId, int laneId, ScannerFlight lane2FlightObj)
        {
            if (lane2FlightObj == null)
            {
                CreateNewFlight(ds, userId);
                lane2FlightObj = ScannerFlights.FirstOrDefault(sf => sf.LaneId == laneId);
            }

            return lane2FlightObj;
        }

        //by laneId
        private ScannedStudent AddStudentToLane(DataSeed ds, Dismissal dismissal, int laneId, ScannedStudent scannedStudent)
        {
            var lane2FlightObj = ScannerFlights.FirstOrDefault(sf => sf.LaneId == laneId);
            lane2FlightObj = CheckIsLane(ds, dismissal.UserId, laneId, lane2FlightObj);
            //check isLanefull
            if (CountCarInLane(ds, dismissal.UserId, lane2FlightObj, scannedStudent.ParentLicense))
            {
                lane2FlightObj = ScannerFlights.FirstOrDefault(sf => sf.LaneId == laneId);
            }

            if (ds.IsCarExistInPrevLane(lane2FlightObj.Flight2LaneId, scannedStudent.ParentLicense))
            {                
                lane2FlightObj.CountCarsInLane -= 1;
            }

            dismissal.FlightLaneId = lane2FlightObj.Flight2LaneId;
            scannedStudent.FlightNumber = lane2FlightObj.FlightNumber;
            scannedStudent.FligthId = lane2FlightObj.FlightId;
            lane2FlightObj.CountCarsInLane += 1;
            dismissal.CarNumber = lane2FlightObj.CountCarsInLane;
            scannedStudent.CardId = ds.AddStudentToDismissal(dismissal);
            if (scannedStudent.CardId == 0)
            {
                lane2FlightObj.CountCarsInLane -= 1;
                Status = "Barcode did not save. Please, try to scanne again!";
                return null;
            }
            scannedStudent.Lane = Lanes.Where(p => p.Id == lane2FlightObj.LaneId).FirstOrDefault();
            
            return scannedStudent;
        }
        
        //need change this method
        private bool CountCarInLane(DataSeed ds, int userId, ScannerFlight lane2FlightObj, string DriverLicense)
        {
            if (ds.GetDismissalCountInLane(lane2FlightObj.Flight2LaneId, DriverLicense) >= CarPerLane)
            {
                CloseLane(lane2FlightObj.LaneId);
                // check if scannerFlight has lane with same Id, if not create new Flight
                /*******************************************/
                if (ScannerFlights.FirstOrDefault(p => p.LaneId == lane2FlightObj.LaneId) == null)
                {
                    CreateNewFlight(ds, userId);
                }
                return true;
            }
            return false;
        }

        public string ChangeScanningType(int laneId)
        {            
            if (laneId == 0)
            {
                curentLaneId = 0;
                currentLaneNumber = 0;
                return "Alternating";
            }
            curentLaneId = laneId;
            return Lanes.FirstOrDefault(l=>l.Id==laneId).Name;
        }

        public string RemoveCard(List<int> cardId, out int flightId)
        {
			string message = null;
            flightId = 0;
			int l2fId;
            bool isHasParentOtherStudent;
            using (var ds = new DataSeed()) {
				if (LaneLogistic == ScannerType.SingleScanner && curentLaneId == 0)
				{
					if (!isMoveRemoveCard)
					{
						currentLaneNumber = currentLaneNumber <= 0 ? (Lanes.Count() - 1) : (currentLaneNumber - 1);
					}
					else
					{
						isMoveRemoveCard = false;
					}
				}
				message = ds.RemoveDissmisalCard(cardId, out l2fId, out isHasParentOtherStudent);
			};

            if (l2fId != 0)
            {
                var objL2F = ScannerFlights.FirstOrDefault(p => p.Flight2LaneId == l2fId);
                if (objL2F != null)
                {
                    if (!isHasParentOtherStudent)
                    {
                        objL2F.CountCarsInLane -= 1;
                    }
                }

                if (IsFlightEmpty(objL2F.FlightId))
                {
                    int flId = objL2F.FlightId;
                    bool isDelete = false;
                    using (var ds = new DataSeed())
                    {
                        isDelete = ds.DeleteFlightById(flId);
                    }
                    if (isDelete)
                    {
                        FlightNumber--;
                        for (int i = 0; i < ScannerFlights.Count(); i++)
                        {
                            if (ScannerFlights[i].FlightId == flId)
                            {
                                ScannerFlights.RemoveAt(i);
                                i--;
                            }
                        }
                        Flight flight = Flights.FirstOrDefault(f => f.Id == flId);
                        Flights.Remove(flight);
                        flightId = flId;
                    }
                }

            }
            return message;
            
        }

        private bool IsFlightEmpty(int flightId)
        {
            var lanes = ScannerFlights.Where(f => f.FlightId == flightId && f.CountCarsInLane == 0).Select(f => f.LaneId).ToList();
            if (lanes != null && lanes.Count() == Lanes.Count())
            {
                return true;
            }
            return false;
        }

        public string ChangeLane(List<int> cardId, int laneId, int userId)
        {
			string parentName = null;
			int prevl2fId;
			using (var ds = new DataSeed()) {
				var l2fObj = ScannerFlights.FirstOrDefault(p => p.LaneId == laneId);
				l2fObj = CheckIsLane(ds, userId, laneId, l2fObj);
				if (CountCarInLane(ds, userId, l2fObj, ""))
				{
					l2fObj = ScannerFlights.FirstOrDefault(sf => sf.LaneId == laneId);
				}
				if (LaneLogistic == ScannerType.SingleScanner && curentLaneId == 0)
				{
					if (!isMoveRemoveCard)
					{
						currentLaneNumber = currentLaneNumber <= 0 ? (Lanes.Count() - 1) : (currentLaneNumber - 1);
						isMoveRemoveCard = true;
					}
					else if (isMoveRemoveCard && Lanes.ElementAt(currentLaneNumber >= (Lanes.Count() - 1) ? 0 : (currentLaneNumber + 1)).Id == laneId)
					{
						isMoveRemoveCard = false;
						currentLaneNumber = currentLaneNumber >= (Lanes.Count() - 1) ? 0 : (currentLaneNumber + 1);
					}
				}

				l2fObj.CountCarsInLane += 1;
				parentName = ds.ChangeLane(cardId, l2fObj.Flight2LaneId, l2fObj.CountCarsInLane, out prevl2fId);
			};

            if (prevl2fId != 0)
            {
                var prevObjL2F = ScannerFlights.FirstOrDefault(p => p.Flight2LaneId == prevl2fId);
                if (prevObjL2F != null)
                {
                    prevObjL2F.CountCarsInLane -= 1;
                }

            }
            return parentName;

        }

        public void CloseLane(int laneId)
        {
			ScannerFlight l2fObj = null;
			using (var ds = new DataSeed()) {

				l2fObj = ScannerFlights.FirstOrDefault(p => p.LaneId == laneId);
				if (l2fObj == null)
				{
					return;
				}
				ds.CloseLane(l2fObj.Flight2LaneId);
				ScannerFlights.Remove(l2fObj);
				if (ScannerFlights.Where(s => s.FlightId == l2fObj.FlightId).Count() == 0)
				{
					ds.ChangeFlightStatus(l2fObj.FlightId, (int)Enums.FlightStatus.Closed);
					CloseFlightId = l2fObj.FlightId;
					Flights.FirstOrDefault(f => f.Id == l2fObj.FlightId).StatusId = 2;
				}
				CloseLaneStatus = "The " + Lanes.FirstOrDefault(p => p.Id == laneId)?.Color + " Lane from Flight " + l2fObj.FlightNumber + " was closed.";
			}
		}

    }
}
