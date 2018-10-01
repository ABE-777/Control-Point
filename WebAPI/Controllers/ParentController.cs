using System;
using System.Collections.Generic;
using System.Linq;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using WebAPI.Data;
using WebAPI.Data.DTOs;
using WebAPI.Models.Requests;
using WebAPI.Models.Responses;
using WebAPI.Security;
using static WebAPI.Helpers.Enums;

namespace WebAPI.Controllers
{
    [Produces("application/json")]
    [Route("api/[controller]/[action]")]
    public class ParentController : BaseController
    {
        public ParentController(ILogger<BaseController> logger, IUserIdentity _userIdentity) : base(logger, _userIdentity)
        {
        }

        [HttpGet]
        [Route("{parentId}")]
        [Authorize(Policy = "DismissalCards")]
        public IActionResult GetStudentsForParent(int parentId)
        {
            if(parentId==0)
                parentId = userIdentity.GetCurrentUser().Result.Id;

            List<StudentForParent> students = ds.GetStudentsForParent(parentId);

            return Ok(students);
        }

        [HttpGet]
        [Authorize(Policy = "SchoolAdmin")]
        public IActionResult GetStudentsForAdmin()
        {
            List<StudentForParent> students = ds.GetStudentsForAdmin(Convert.ToInt32(GetSchoolIdForCurrentUser()));

            return Ok(students);
        }

        [HttpGet]
        [Authorize(Policy = "Parent")]
        public IActionResult GetParentInfo()
        {
            int id = userIdentity.GetCurrentUser().Result.Id;
            
            ParentInfo info = ds.ReadParentInfo(id);

            info.UserId = id;

            return Ok(info);
        }

        [HttpPut]
        [Authorize(Policy = "Parent")]
        public IActionResult EditStudentName([FromBody]StudentForParent model)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }
            var studentNameEditingResult = ds.UpdateStudentName(model);
            if(studentNameEditingResult == ObjectManipulationResult.ErrorOccured)
            {
                return BadRequest("Error occured while editing the students name!");
            }
            return Ok();
        }

        [HttpGet]
        [Authorize(Policy = "Parent")]
        public IActionResult GetCarRidersInstructions()
        {
            int id = userIdentity.GetCurrentUser().Result.Id;
            return Ok(ds.GetInstructions(id));
        }

        [HttpGet]
        [Authorize(Policy = "Parent")]
        public IActionResult SetInstructionsChecked()
        {
            int id = userIdentity.GetCurrentUser().Result.Id;

            ObjectManipulationResult res = ds.UpdateInstructionsChecked(id);

            if(res == ObjectManipulationResult.ErrorOccured)
            {
                return StatusCode(500, "Error occured!");
            }

            return Ok();
        }

        [HttpGet]
        [Route("{license}")]
        [Authorize(Policy = "Parent")]
        public IActionResult IsDriverLicenseExist(string license)
        {
            var res = ds.GetParentByLicense(license);
            if(res != null)
            {
                return Ok("Exist");
            }
            else
            {
                return Ok("NotExist");
            }
        }
    }    
}