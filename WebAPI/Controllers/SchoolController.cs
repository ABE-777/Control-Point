using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using WebAPI.Models.Responces;
using WebAPI.Models.Requests;
using WebAPI.Data;
using Microsoft.AspNetCore.Authorization;
using static WebAPI.Helpers.Enums;
using WebAPI.Data.DTOs;
using WebAPI.Models.Responses;
using Microsoft.Extensions.Logging;
using WebCreek.Framework.Auth0.AuthenticationAPI.AuthenticationAPIClient;
using WebCreek.Framework.Auth0.Models;
using WebAPI.Security;
using WebCreek.Framework.Auth0.ManagementAPI.ManagementAPIClient;
using WebAPI.Helpers;
using Microsoft.AspNetCore.SignalR;
using WebAPI.Helpers.HubModels;

namespace WebAPI.Controllers
{
    [Produces("application/json")]
    [Route("api/School/[action]")]
    public class SchoolController : BaseController
    {       
        private readonly IHubContext<ScannerHubService> _context;

        public SchoolController(ILogger<BaseController> logger, IHubContext<ScannerHubService> context, IUserIdentity _userIdentity) : base(logger, _userIdentity)
        {
            _context = context;
        }

        // GET: api/school/getclassroomassignments
        [HttpGet]
        public GetClassroomAssignmentResponseModel GetClassroomAssignments(int id)
        {
            GetClassroomAssignmentResponseModel result = new GetClassroomAssignmentResponseModel
            {
                ClassroomAssignmentData = ds.GetClassroomAssignments(id)
            };

            if (result.ClassroomAssignmentData != null)
            {
                result.Code = 0;
                result.Message = "Information found";
            }
            else
            {
                result.Code = 0;
                result.Message = "School by id not found";
            }

            return result;
        }

        // POST: api/school/getclassroomassignments
        [HttpPost]
        public BaseResponseModel SetClassroomAssignments([FromBody]SetClassroomAssignments model)
        {
            if (ModelState.IsValid)
            {
                var schoolCreationResult = ds.SetClassroomAssignments(model.SchoolId, model.ClassroomAssignments);

                switch (schoolCreationResult)
                {
                    case ObjectManipulationResult.Success:
                        result.Code = 0;
                        result.Message = "Classrooms successfully assigned";
                        break;
                    case ObjectManipulationResult.NotFound:
                        result.Code = 0;
                        result.Message = "School by requested id not exists";
                        break;
                    case ObjectManipulationResult.ErrorOccured:
                        result.Code = -1;
                        result.Message = "Classrooms not assigned due to error";
                        break;
                }
            }
            else
            {
                result.Code = -1;
                result.Message = "Model is not valid";
            }

            return result;
        }

        // GET: api/school/getcreationdata
        [Authorize(Policy = "SuperAdmin")]
        [HttpGet]
        public SchoolCreationDataResponseModel GetCreationData()
        {
            SchoolCreationDataResponseModel result = new SchoolCreationDataResponseModel();
            result.InitData = ds.GetSchoolCreationData();

            if (result.InitData != null)
            {
                result.Code = 0;
                result.Message = "Init data successfully loaded";
            }
            else
            {
                result.Code = 0;
                result.Message = "Init data not found or error occured";
            }

            return result;
        }


        // GET: api/school/getlist
        [HttpGet]
        [Authorize(Policy = "SuperAdmin")]
        public SchoolListResponseModel GetList(string searchText)
        {
            bool IsReadyToCreate = false;

            SchoolListResponseModel result = new SchoolListResponseModel();
            List<Schools> schools = ds.GetSchools(searchText, out IsReadyToCreate);

            if (IsReadyToCreate)
            {
                result.Code = 0;
                result.Message = "Ready to create schools";

                return result;
            }

            if (schools.Count() == 0)
            {
                result.Code = 0;
                result.Message = "Schools not found";
            }
            else
            {
                result.Code = 0;
                result.Message = schools.Count() +  " school(s) found";
                result.Schools = schools;
            }

            return result;
        }

        // POST: api/school/create
        [HttpPost]
        [Authorize(Policy = "SuperAdmin")]
        public IActionResult Create([FromBody]SchoolEditionData model)
        {
            if (ModelState.IsValid)
            {
                var schoolCreationResult = ds.CreateSchool(model);

                UserRecord schoolAdmin = model.SchoolAdmins.First();

                using (var managementClient = new ManagementApiClient())
                {                    
                    var userAuth0 = managementClient.CreateUser(schoolAdmin);
                    if (userAuth0 != null)
                    {
                        managementClient.RequestVerifyEmail(userAuth0?.UserId);
                    }                    
                }

                if (schoolCreationResult == ObjectManipulationResult.Success)
                {
                    return Ok("School successfully created");
                }
                else if (schoolCreationResult == ObjectManipulationResult.Exists)
                {
                    return BadRequest("School was not created because school admin account already exists");
                }
                return BadRequest("Error occured while creating school");
            }
            return BadRequest("Model is not valid");

        }

        // PUT: api/School/changestatus/5
        [HttpPut]
        [Route("{id}")]
        [Authorize(Policy = "SuperAdmin")]
        public IActionResult ChangeStatus(int id, [FromBody]ChangeSchoolStatusRequest model)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest();
            }

            var changeStatusResult = ds.ChangeSchoolStatus(id, model.StatusId);

            switch (changeStatusResult)
            {                
                case ObjectManipulationResult.NotFound:
                    return NotFound("School not found!");
                case ObjectManipulationResult.ErrorOccured:
                    return StatusCode(500, "Error occured");
            }
            
            return Ok();
        }


        // PUT: api/School/edit/5
        [HttpPut]
        [Route("{id}")]
        [Authorize(Policy = "SuperAdmin")]
        public IActionResult Edit(int id, [FromBody]SchoolEditionData model)
        {

            if (ModelState.IsValid)
            {
                UserRecord schoolAdmin = model.SchoolAdmins.Where(sa => sa.Id == 0).FirstOrDefault();

                if(schoolAdmin != null)
                {
                    using (var managementClient = new ManagementApiClient())
                    {
                        var userAuth0 = managementClient.CreateUser(schoolAdmin);
                        if (userAuth0 != null)
                        {
                            managementClient.RequestVerifyEmail(userAuth0?.UserId);
                        }
                    }
                }

                var schoolCreationResult = ds.EditSchool(id, model);

                if (schoolCreationResult == ObjectManipulationResult.Success)
                {
                    return Ok("School information successfully edited");
                }
                else if (schoolCreationResult == ObjectManipulationResult.NotFound)
                {
                    return NotFound("School not found");
                }
                
                return BadRequest("Error occured while editing school");                
            }
            else
            {
               return BadRequest("Model is not valid");
            }
        }


        // GET: api/school/geteditiondata
        [HttpGet]
        [Authorize(Policy = "SuperAdmin")]
        public IActionResult GetEditionData(int id)
        {           
            var result = ds.GetSchoolEditionData(id);
            if (result == null)
            {
                return BadRequest("School by Id not found");
            }          

            return Ok(result);
        }

        // GET: api/School/Getsettings
        [Authorize(Policy = "SchoolAdmin")]
        [HttpGet]
        public IActionResult GetSettings()
        {

            var schoolSettings = ds.GetSchoolSettings(Convert.ToInt32(GetSchoolIdForCurrentUser()));
            if (schoolSettings != null)
            {
                return Ok(schoolSettings);
            }
            return BadRequest("School not found");
        }

        [HttpGet("{userId}")]
        [Authorize(Policy = "SchoolAdmin")]
        public IActionResult GetSchoolName(int userId)
        {
            string schoolName = ds.GetSchoolNameByUserId(userId);

            return Ok(schoolName);
        }

        // PUT: api/School/setsettings
        [HttpPut]
        [Authorize(Policy = "SchoolAdmin")]
        public IActionResult SetSettings([FromBody]EditSchoolSettingsModel settings)
        {
            if (ModelState.IsValid)
            {
                int schoolId = Convert.ToInt32(GetSchoolIdForCurrentUser());
                var schoolCreationResult = ds.SetSchoolSettings(schoolId, settings);

                switch (schoolCreationResult)
                {
                    case ObjectManipulationResult.Success:
                        //send scanners notification about change school settings
                        this._context.Clients.Group(HubRole.Scanner + schoolId.ToString()).InvokeAsync("Disconnect", "disconnect");
                        return Ok("School settings was successfully set");
                    case ObjectManipulationResult.NotFound:
                        return BadRequest("School was not found");
                    case ObjectManipulationResult.ErrorOccured:
                        return BadRequest("Error occured while setting up the school");
                }

            }
            return BadRequest("Model is not valid");

        }

        // DELETE: api/ApiWithActions/5
        [HttpDelete]
        [Route("{id}")]
        [Authorize(Policy = "SuperAdmin")]
        public BaseResponseModel Delete(int id)
        {
            var schoolCreationResult = ds.DeleteSchool(id);

            switch (schoolCreationResult)
            {
                case ObjectManipulationResult.Success:
                    result.Code = 0;
                    result.Message = "School was successfully deleted";
                    break;
                case ObjectManipulationResult.NotFound:
                    result.Code = 0;
                    result.Message = "School was not found";
                    break;
                case ObjectManipulationResult.ErrorOccured:
                    result.Code = -1;
                    result.Message = "Error occured while deleting the school";
                    break;
            }
            
            return result;
        }

        ///api/School/EndSchoolYear
        [HttpDelete]
        [Authorize(Policy = "SchoolAdmin")]
        public IActionResult EndSchoolYear()
        {
            var schoolId = Convert.ToInt32(GetSchoolIdForCurrentUser());
            if (schoolId == 0)
            {
                return BadRequest("School not found!");
            }
            var deleteResult = ds.DeleteDataFromSchool(schoolId);
            if (deleteResult == ObjectManipulationResult.Success)
            {
                return Ok();
            }
            else if (deleteResult == ObjectManipulationResult.Conflict)
            {
                return BadRequest("You still have students in open flights. Please close all active flights.");
            }
            return BadRequest("Error occured while deleting students");
        }
    }
}
