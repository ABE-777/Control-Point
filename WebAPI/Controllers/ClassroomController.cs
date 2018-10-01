using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using WebAPI.Data.DTOs;
using WebAPI.Security;

namespace WebAPI.Controllers
{
    [Produces("application/json")]
    [Route("api/Classroom/[action]")]
    public class ClassroomController : BaseController
    {        
        public ClassroomController(ILogger<BaseController> logger, IUserIdentity _userIdentity) : base(logger, _userIdentity)
        {           
        }


        [HttpGet]
        [Authorize(Policy = "SchoolAdmin")]
        public IActionResult GetClassrooms()
        {           
                var list = ds.GetClasrooms(Convert.ToInt32(GetSchoolIdForCurrentUser()));                
                if (list == null)
                {
                    return NotFound("There are no classrooms");
                }
                return Ok(list);
            
        }

        [Produces("application/json")]
        [HttpGet]
        [Authorize("SchoolAdmin")]
        public IActionResult GetUnassignedClassRooms()
        {
            var classrooms = ds.GetUnassignedClassRooms(Convert.ToInt32(GetSchoolIdForCurrentUser()));
            return Ok(classrooms);
        }


        [HttpGet]
        [Authorize(Policy = "SchoolAdmin")]
        public IActionResult GetTeachers()
        {

            var list = ds.GetTeachers(Convert.ToInt32(GetSchoolIdForCurrentUser()));
            if (list == null)
            {
                return NotFound("There is no teachers");
            }
            return Ok(list);

        }

        [HttpPut]
        [Authorize(Policy = "SchoolAdmin")]
        public IActionResult UpdateClassrooms([FromBody]List<ClassroomTeacherPair> teachers)
        {            
            if (ModelState.IsValid)
            {
                var result = ds.UpdateClassrooms(Convert.ToInt32(GetSchoolIdForCurrentUser()), teachers);

                if (result == Helpers.Enums.ObjectManipulationResult.Success)
                {
                    return Created("", teachers);
                }
                else
                {
                    return BadRequest("Classrooms don't updated!");
                }

            }
            else
            {
                return BadRequest("Model is invalid!");
            }
        }
    }
}