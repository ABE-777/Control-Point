using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using WebAPI.Helpers.HubModels;
using WebAPI.Models.Requests;
using WebAPI.Models.Responses;
using WebAPI.Security;
using static WebAPI.Helpers.Enums;

namespace WebAPI.Controllers
{
    [Produces("application/json")]
    [Route("api/Flight/[action]")]
    public class FlightController : BaseController
    {
        public FlightController(ILogger<BaseController> logger, IUserIdentity _userIdentity) : base(logger, _userIdentity)
        {
        }

        //api/Flight/GetFlightSettingsForTeacher
        [HttpGet]
        [Authorize(Policy = "Flights")]
        public IActionResult GetFlightSettingsForTeacher()
        {
            var userId = userIdentity.GetCurrentUser().Result.Id;
            if (userId == 0)
            {
                return BadRequest("You haven't permission for this!");
            }
            var settings = ds.GetFlightSettingForTeacher(userId, Convert.ToInt32(GetSchoolIdForCurrentUser()));
            return Ok(settings);
        }

        //api/Flight/SetFlightSettingsForTeacher
        [HttpPost]
        [Authorize(Policy = "Flights")]
        public IActionResult SetFlightSettingsForTeacher([FromBody] TeacherSettings settings)
        {
            var userId = userIdentity.GetCurrentUser().Result.Id;
            if (userId == 0)
            {
                return BadRequest("You haven't permission for this!");
            }
            var result = ds.SetFlightSettingForTeacher(userId, settings);
            if (result == ObjectManipulationResult.ErrorOccured)
            {
                return BadRequest("Error occured while save settings for teacher");
            }
            return Ok();
        }

        //api/Flight/GetClassroomFlightsAndSetings
        [HttpGet]
        [Authorize(Policy = "Flights")]
        public IActionResult GetClassroomFlightsAndSetings()
        {
            var user = userIdentity.GetCurrentUser().Result;
            if (user == null)
            {
                return BadRequest("You haven't permission for this informaton");
            }
            var flights = ds.GetClassroomFlightsAndSetings(user.Id, Convert.ToInt32(GetSchoolIdForCurrentUser()));
            return Ok(flights);
        }

        //api/Flight/GetLanesByFlightId/{flightId}
        [Route("{flightId}")]
        [Authorize(Policy = "Flights")]
        public IActionResult GetLanesByFlightId(int flightId)
        {
            var lanes = ds.GetLanesByFlightId(flightId);
            return Ok(lanes);
        }

        //api/Flight/GetStudentsByLane/{activeLane}
        [Route("{activeLane}")]
        [Authorize(Policy = "Flights")]
        public IActionResult GetStudentsByLane(int activeLane)
        {
            var students = ds.GetStudentsByLane(activeLane, userIdentity.GetCurrentUser().Result.Id);
            return Ok(students);
        }

        //api/Flight/GetLaneAndFlightByStudentId/{studentId}
        [HttpGet]
        [Route("{studentId}")]
        [Authorize(Policy = "Flights")]
        public IActionResult GetLaneAndFlightByStudentId(int studentId)
        {
            var result = ds.GetLaneAndFlightByStudentId(studentId);
            return Ok(result);
        }

        //for scanner Role
        //api/Flight/GetScanerLanes
        [Authorize(Policy = "Scanner")]
        public IActionResult GetScanerLanes()
        {
            var user = userIdentity.GetCurrentUser().Result;
            if (user != null)
            {
                var result = ds.GetScannerLanes(user.Id);
                if (result != null)
                {
                    return Ok(result);
                }
            }
            return BadRequest("You are currently not assigned to alane. Please contact the School Administrator.!");
        }

        //api/Flight/IsActiveFlightExist
        [Authorize(Policy = "SchoolAdmin")]
        public IActionResult IsActiveFlightExist()
        {            
            var result = ds.IsActiveFlightExist(Convert.ToInt32(GetSchoolIdForCurrentUser()));
            return Ok(result);

        }

    }
}