using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.SignalR;
using WebAPI.Data;
using WebAPI.Helpers.HubAdministrator;
using WebAPI.Helpers.HubModels;

namespace WebAPI.Helpers
{
    //AlexBodnar, 15.02.2018 
    public class ScannerHubService : Hub
    {
        static List<UserSignalR> Users = new List<UserSignalR>();
        //static SchoolScannerManager ssm;        
        public override Task OnDisconnectedAsync(Exception exception)
        {
            var item = Users.FirstOrDefault(x => x.ConnectionId == Context.ConnectionId);
            if (item != null)
            {
                Groups.RemoveAsync(Context.ConnectionId, item.UserGroup);
                Users.Remove(item);
            }
            return base.OnDisconnectedAsync(exception);
        }

        public override Task OnConnectedAsync()
        {
            var id = Context.Connection.ConnectionId;
            if (!Users.Any(x => x.ConnectionId == id))
            {
                Users.Add(new UserSignalR { ConnectionId = id });
            }
            return base.OnConnectedAsync();
        }
        //for scanner role
        public async Task SetScanner(int userId)
        {
            ScannerManager manager;
			UserSignalR currentUser = null;
			int? schoolId = null;
			using (var ds = new DataSeed()) {
				schoolId = ds.GetUserSchoolId(userId);
				if (schoolId == 0)
				{
					return;
				}
				var sameUser = Users.FirstOrDefault(p => p.UserId == userId);
				if (sameUser != null)
				{
					Users.Remove(sameUser);
				}
				var schoolScanner = Users.FirstOrDefault(p => p.SchoolId == schoolId && p.Role == HubRole.Scanner);
				currentUser = Users.FirstOrDefault(p => p.ConnectionId == Context.ConnectionId);
				if (schoolScanner == null)
				{
					manager = new ScannerManager(Convert.ToInt32(schoolId), userId, ds);
				}
				else
				{
					manager = schoolScanner.Ssm;
				}
			}
			//set User data
			currentUser.SchoolId = Convert.ToInt32(schoolId);
            currentUser.UserId = userId;
            currentUser.Ssm = manager;
            currentUser.Role = HubRole.Scanner;

            await Groups.AddAsync(Context.ConnectionId, currentUser.UserGroup);
        }

        public async Task ScanCard(ScannerInput scannerInput)
        {
            var currentUser = Users.Where(p => p.ConnectionId == Context.ConnectionId).FirstOrDefault();
            if (currentUser != null)
            {                
                await AddScannedStudent(scannerInput, currentUser);                
            }

        }

        private async Task AddScannedStudent(ScannerInput scannerInput, UserSignalR currentUser)
        {
            var card = currentUser.Ssm.AddScannedStudenToFlight(scannerInput, Convert.ToInt32(currentUser.UserId), currentUser.SchoolId);
            if (card == null)
            {
                await this.Clients.Client(Context.ConnectionId).InvokeAsync("FlightNotification", currentUser.Ssm.Status);
            }
            else
            {
                if (currentUser.Ssm.CloseLaneStatus != "")
                {
                    await this.Clients.Client(Context.ConnectionId).InvokeAsync("FlightNotification", currentUser.Ssm.CloseLaneStatus);
                }
                await this.Clients.Client(Context.ConnectionId).InvokeAsync("CardData", card);
                var classStudent = new SchoolClassroomManager();
                var classCard = classStudent.GetClassroomCard(card.CardId);
                classCard.FlightId = card.FligthId;
                classCard.FlightNumber = card.FlightNumber;
                await this.Clients.Group("Teacher" + currentUser.SchoolId.ToString()).InvokeAsync("GetScannedCard", classCard);
                var closedflightId = currentUser.Ssm.CloseFlightId;
                if (closedflightId != 0)
                {
                    await this.Clients.Group("Teacher" + currentUser.SchoolId.ToString()).InvokeAsync("StatusFlight", new FlightModel { FlightId = closedflightId, Status = "Closed" });
                }
            }
           // await this.Clients.Group(currentUser.UserGroup).InvokeAsync("CurrentFlight", card.FlightNumber);
        }

        //change Lane for single scanner
        public async Task ChangeScanningType(int laneId)
        {
            var currentUser = Users.Where(p => p.ConnectionId == Context.ConnectionId).FirstOrDefault();
            if (currentUser != null)
            {
                var lane = currentUser.Ssm.ChangeScanningType(laneId);
                await this.Clients.Client(Context.ConnectionId).InvokeAsync("FlightNotification", "You switched to the " + lane + " Lane");
            }
        }

        public async Task RemoveCard(List<int> cardId)
        {
            var currentUser = Users.Where(p => p.ConnectionId == Context.ConnectionId).FirstOrDefault();            
            if (currentUser != null)
            {
                int flightId;
                var result = currentUser.Ssm.RemoveCard(cardId, out flightId);
                if (result != null)
                {
                    await this.Clients.Client(Context.ConnectionId).InvokeAsync("FlightNotification", "You removed "+ result);                    
                    await this.Clients.Group("Teacher" + currentUser.SchoolId.ToString()).InvokeAsync("RemovedCard", cardId);

                    if (flightId != 0)
                    {
                        await this.Clients.Group("Teacher" + currentUser.SchoolId.ToString()).InvokeAsync("StatusFlight", new FlightModel { FlightId = flightId, Status = "Finished" });
                    }
                }
            }

        }

        // only for single scanner
        public async Task<string> ChangeLane( List<int> cardId, int laneId)
        {
            var currentUser = Users.Where(p => p.ConnectionId == Context.ConnectionId).FirstOrDefault();
            var result = currentUser.Ssm.ChangeLane(cardId, laneId, currentUser.UserId);
            var flightData = currentUser.Ssm.ScannerFlights.FirstOrDefault(l => l.LaneId == laneId);
            if (result != null)
            {
                var laneName = currentUser.Ssm.Lanes.FirstOrDefault(l => l.Id == laneId).Name;
                await this.Clients.Client(Context.ConnectionId).InvokeAsync("FlightNotification", "You moved " + result + " to the " + laneName + " Lane");
               
                var classStudent = new SchoolClassroomManager();                
                foreach (var item in cardId)
                {
                    var classCard = classStudent.GetClassroomCard(item);
                    classCard.FlightId = flightData.FlightId;
                    classCard.FlightNumber = flightData.FlightNumber;
                    await this.Clients.Group("Teacher" + currentUser.SchoolId.ToString()).InvokeAsync("ChangedLane", classCard); 
                }
            }
            return flightData == null ? null : flightData.FlightNumber.ToString();
        }

        public async Task CloseLane(int laneId)
        {
            var currentUser = Users.Where(p => p.ConnectionId == Context.ConnectionId).FirstOrDefault();
            if (currentUser != null)
            {
                var laneColor = currentUser.Ssm.Lanes.FirstOrDefault(l => l.Id == laneId)?.Color;
                var scannerFlightObj = currentUser.Ssm.ScannerFlights.FirstOrDefault(l => l.LaneId == laneId);
                var notification = "";
                if (scannerFlightObj != null)
                {
                    var flightNumber = scannerFlightObj.FlightNumber;
                    currentUser.Ssm.CloseLane(laneId);
                    notification = "You closed the " + laneColor + " Lane from Flight " + flightNumber + ".";
                    var closedflightId = currentUser.Ssm.CloseFlightId;
                    if (closedflightId!=0)
                    {
                        await this.Clients.Group("Teacher" + currentUser.SchoolId.ToString()).InvokeAsync("StatusFlight", new FlightModel { FlightId = closedflightId, Status = "Closed" });
                    }
                }
                else
                {
                    notification = laneColor + " lane was closed before.";
                }
                await this.Clients.Client(Context.ConnectionId).InvokeAsync("FlightNotification", notification);
               
            }
        }

        //for classroom and dismissalTeacher role
        public async Task SetClassroomTeacher(int userId, string scId)
        {
            //needs to add implimintation for superAdmin -> schoolId

            int schoolId = 0;
            using (var ds = new DataSeed())
            {
                schoolId = Convert.ToInt32(ds.GetUserSchoolId(userId));
            };

            var currentUser = Users.Where(p => p.ConnectionId == Context.ConnectionId).FirstOrDefault();
            if (currentUser == null)
            {
                currentUser = new UserSignalR { ConnectionId = Context.ConnectionId, SchoolId = Convert.ToInt32(schoolId), UserId = userId, Role = HubRole.Teacher };
                Users.Add(currentUser);
            }
            else
            {
                currentUser.SchoolId = Convert.ToInt32(schoolId);
                currentUser.UserId = userId;
                currentUser.Role = HubRole.Teacher;
            }

            await Groups.AddAsync(Context.ConnectionId, currentUser.UserGroup);
            // await this.Clients.Client(currentUser.ConnectionId).InvokeAsync("SetClassroomTeacher", currentUser);
        }

        // for classroomTeacher change switch classroom
        public async Task LeaveClassroom(int cardId, bool status)
        {
            var currentUser = Users.Where(p => p.ConnectionId == Context.ConnectionId).FirstOrDefault();
            if (currentUser != null)
            {
                var changedCard = new SchoolClassroomManager().LeaveClassroomCard(cardId, status);
                await this.Clients.Group(currentUser.UserGroup).InvokeAsync("LeaveClassroom", changedCard);
            }
        }

        // for dismissalTeacher change switch hallway
        public async Task LeaveHallway(int cardId, bool status)
        {
            var currentUser = Users.Where(p => p.ConnectionId == Context.ConnectionId).FirstOrDefault();
            if (currentUser != null)
            {
                var changedCard = new SchoolClassroomManager().LeaveHallwayCard(cardId, status);
                if (changedCard != null && changedCard.CardId == 0) {
                    //delete this flight in client
                    await this.Clients.Group("Teacher" + currentUser.SchoolId.ToString()).InvokeAsync("StatusFlight", new FlightModel { FlightId = changedCard.FlightId, Status = "Finished" });
                }
                else
                {
                    await this.Clients.Group(currentUser.UserGroup).InvokeAsync("LeaveHallway", changedCard);
                }
            }
        }

    }
}
