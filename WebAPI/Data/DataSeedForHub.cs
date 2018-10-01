using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using LinqToDB;
using WebAPI.Helpers.HubModels;

namespace WebAPI.Data
{
    public partial class DataSeed
    {
        
        public Parent GetParentById(int id)
        {
            return db.Parent.Where(p => p.Id == id).FirstOrDefault();
        }

        public List<Flight> GetFlightsBySchoolId(int schoolId)
        {
            return db.Flight.Where(p => p.SchoolId == schoolId && p.Date >= DateTime.Today).ToList();
        }

        public List<Lane> GetLanesBySchoolId(int schoolId)
        {
            return db.Lane.Where(p => p.SchoolId == schoolId).ToList();
        }

        public int? GetTeacherIdByClassroomId(int classroomId) {
            return db.Classroom.FirstOrDefault(c=>c.Id==classroomId)?.TeacherId;
        }

        public int GetLastFlightNumberFromArchive(int schoolId)
        {
            var result = db.DismissalArchive.Where(a => a.SchoolId == schoolId && a.FlightDate >= DateTime.Today).ToList(); 
            if (result != null && result.Count() > 0)
            {
                return result.Max(p => p.Flight);
            }
            return 0;
        }

        public int GetFlightNumber(int schoolId) {
            var fromArchive = GetLastFlightNumberFromArchive(schoolId);
            var flights = db.Flight.Where(a => a.SchoolId == schoolId && a.Date >= DateTime.Today);
            int fromFlights = 0;
            if (flights != null && flights.Count() > 0)
            {
                fromFlights = flights.Max(p=>p.Number);
            }

            if (fromArchive > fromFlights)
                return fromArchive;
            else
                return fromFlights;
        }

        public List<Lanes2Fights> GetLanes2FlightsByFlightId(int schoolId, int flightId, int userId)
        {
            var lanes2FlightsList = db.Lanes2Fights.Where(p => p.FlightId == flightId).OrderBy(p=>p.Id).ToList();
            var lanes = GetLanesBySchoolId(schoolId);
            if (lanes2FlightsList==null || lanes2FlightsList.Count()==0)
            {
                lanes2FlightsList = new List<Lanes2Fights>();
                foreach (var lane in lanes)
                {
                    var lane2flightObject = new Lanes2Fights { CreatedOn = DateTime.Now, FlightId = flightId, LaneId = lane.Id, StatusId=1 }; // 1 - Open
                    lane2flightObject.Id = db.InsertWithInt32Identity(lane2flightObject);
                    lanes2FlightsList.Add(lane2flightObject);
                }
            }

            return lanes2FlightsList;
        }

        public int GetCountCardsByLane2FlightId(int l2fId)
        {
            return db.Dismissal.Where(d => d.FlightLaneId == l2fId).Select(d=>d.ParentId).Distinct().Count();         
        }

        public int GetDismissalCountInLane(int laneId, string driverLicense)
        {
            //var countCars = db.Dismissal.Where(p => p.FlightLaneId == laneId).Select(p=>p.ParentId).Distinct().Count();
            var countCars = (from d in db.Dismissal 
                         join p in db.Parent on d.ParentId equals p.Id
                         where d.FlightLaneId==laneId && p.DriverLicense!=driverLicense
                         select p.DriverLicense
                        ).Distinct().Count();
            return countCars;
        }

        public bool IsCarExistInPrevLane(int flight2LaneId, string driverLicense)
        {
            var countCars = (from d in db.Dismissal
                             join p in db.Parent on d.ParentId equals p.Id
                             where d.FlightLaneId == flight2LaneId && p.DriverLicense == driverLicense
                             select p.DriverLicense
                        ).Count();
            if (countCars > 0)
            {
                return true;
            }
            return false;
        }

        public int AddStudentToDismissal(Dismissal dissmisal)
        {            
            return db.InsertWithInt32Identity(dissmisal);
        }

        public Student GetStudentByIdForDismissal(int studentId, int schoolId)
        {
            return db.Student.Where(p => p.Id == studentId && p.SchoolId==schoolId).FirstOrDefault();
        }

        public List<ScannedStudent> GetDismissalForCurrentScanerByFlight(int userId, int flightId)
        {
            var scannedStudentList = (from f in db.Flight
                                     join l2f in db.Lanes2Fights on f.Id equals l2f.FlightId
                                     join l in db.Lane on l2f.LaneId equals l.Id
                                     join d in db.Dismissal on l2f.Id equals d.FlightLaneId
                                     join s in db.Student on d.StudentId equals s.Id
                                     join p in db.Parent on d.ParentId equals p.Id
                                     where f.Id == flightId && d.UserId==userId
                                     select new ScannedStudent
                                     {
                                         FlightNumber=f.Number,
                                          CardId=d.Id,
                                          Lane=l,
                                          Name = s.Name,
                                          StudentId=s.Id,
                                          ParentId=p.Id,
                                          ParentLicense=p.DriverLicense 

                                     }).ToList();
            return scannedStudentList;

        }

        public string RemoveDissmisalCard(List<int> cardIdList, out int l2fId, out bool isHasGuardianOtherStudent)
        {
            l2fId = 0;
            isHasGuardianOtherStudent = false;
            if (cardIdList != null && cardIdList.Count() > 0)
            {
                var removedName = "";
                if (cardIdList.Count() == 1)
                {
                    var dissmisalObj = db.Dismissal.FirstOrDefault(p => p.Id == cardIdList.FirstOrDefault());
                    if (dissmisalObj != null)
                    {
                        removedName = db.Student.FirstOrDefault(s=>s.Id==dissmisalObj.StudentId)?.Name;
                        db.Delete(dissmisalObj);
                        isHasGuardianOtherStudent = db.Dismissal.FirstOrDefault(d => d.ParentId == dissmisalObj.ParentId) == null ? false : true;
                        l2fId = dissmisalObj.FlightLaneId;
                    }
                }
                else
                {
                    int parentId = 0;
                    foreach (var id in cardIdList)
                    {
                        var dissmisalObj = db.Dismissal.FirstOrDefault(p => p.Id == id);
                        if (dissmisalObj != null)
                        {                            
                            db.Delete(dissmisalObj);
                            removedName = db.Parent.FirstOrDefault(p => p.Id == dissmisalObj.ParentId)?.Name;
                            l2fId = dissmisalObj.FlightLaneId;
                            parentId = dissmisalObj.ParentId;
                        }
                    }
                    
                    isHasGuardianOtherStudent = db.Dismissal.FirstOrDefault(d => d.ParentId == parentId) == null ? false : true;
                    
                }
                return removedName;
                
            }
            return null;
        }

        public string ChangeLane(List<int> cardIdList, int l2fId, int carNumber, out int prevl2fId)
        {
            prevl2fId = 0;
            if (cardIdList != null && cardIdList.Count() > 0)
            {
                var parentName = "";
                if (cardIdList.Count() == 1)
                {
                    var dissmisalCard = db.Dismissal.FirstOrDefault(p => p.Id ==cardIdList.FirstOrDefault());
                    if (dissmisalCard != null)
                    {
                        prevl2fId = dissmisalCard.FlightLaneId;
                        dissmisalCard.FlightLaneId = l2fId;
                        dissmisalCard.CarNumber = carNumber;
                        db.Update(dissmisalCard);
                        parentName = db.Parent.FirstOrDefault(p => p.Id == dissmisalCard.ParentId)?.Name;
                    }                   
                }
                else
                {
                    foreach (var id in cardIdList)
                    {
                        var dissmisalCard = db.Dismissal.FirstOrDefault(p => p.Id == id);
                        if (dissmisalCard != null)
                        {
                            prevl2fId = dissmisalCard.FlightLaneId;
                            dissmisalCard.FlightLaneId = l2fId;
                            dissmisalCard.CarNumber = carNumber;
                            db.Update(dissmisalCard);
                            parentName = db.Parent.FirstOrDefault(p => p.Id == dissmisalCard.ParentId)?.Name;
                        }
                    }
                }
                return parentName;
            }
            return null;
        }

        public string StudentAlredyScanned(int studentId, int schoolId)
        {
            var ParentIdInDismissal = (from f in db.Flight
                                      join l2f in db.Lanes2Fights on f.Id equals l2f.FlightId
                                      join d in db.Dismissal on l2f.Id equals d.FlightLaneId
                                      where f.SchoolId == schoolId && f.Date >=DateTime.Today && d.StudentId==studentId
                                      select d.ParentId
                                      ).FirstOrDefault();
            if (ParentIdInDismissal > 0)
            {
                return db.Parent.FirstOrDefault(p=>p.Id==ParentIdInDismissal).Name;
            }
            var ParentNameInDissmissalArchive = (from da in db.DismissalArchive 
                                                     where da.SchoolId == schoolId && da.FlightDate >= DateTime.Today && da.StudentId == studentId
                                                     select da.ParentName
                                      ).FirstOrDefault();
            if (ParentNameInDissmissalArchive != null)
            {
                return ParentNameInDissmissalArchive;
            }

            return null;
        }

        public void ChangeLaneStatus(int flight2laneId)
        {
            var f2lObj = db.Lanes2Fights.FirstOrDefault(f => f.Id == flight2laneId);
            if (f2lObj != null)
            {
                f2lObj.StatusId = 2; // 2 - Status -Closed
                db.Update(f2lObj);
            }
        }

        public void CloseLane(int flight2laneId)
        {
            db.Lanes2Fights.Where(f => f.Id == flight2laneId).Set(f => f.StatusId, 2).Update(); // 2 status Close
        }
    }
}
