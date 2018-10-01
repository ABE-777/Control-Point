using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using WebAPI.Data;
using static WebAPI.Helpers.Enums;
using Microsoft.Extensions.Logging;
using WebAPI.Models.Requests;
using WebAPI.Data.DTOs;
using WebAPI.Security;
using WebCreek.Framework.Auth0.ManagementAPI.ManagementAPIClient;
using WebCreek.Framework.Models;
using Microsoft.AspNetCore.Authorization;

namespace WebAPI.Controllers
{
    [Produces("application/json")]
    [Route("api/Student/[action]")]
    public class StudentController : BaseController
    {
        public StudentController(ILogger<BaseController> logger, IUserIdentity _userIdentity) : base(logger, _userIdentity)
        {
        }

        // GET: api/student/getstudents    - all list of student
        // GET: api/student/getsstudents?searchText= {text}   - for search by Name, ExternalId, ClassroomName
        [HttpGet]
        [Authorize(Policy = "Flights")]
        public IActionResult GetStudents(string searchText)
        {
            var list = ds.GetStudents(searchText, GetSchoolIdForCurrentUser());
            if (list == null)
            {
                return NotFound("There is no students");
            }
            return Ok(list);
        }

        // GET: api/student/GetStudentListing    - all list of student
        // GET: api/student/GetStudentListing?searchText= {text}   - for search by Name, ExternalId, ClassroomName
        [HttpGet]
        [Authorize(Policy = "Flights")]
        public IActionResult GetStudentListing(string searchText)
        {
            var list = ds.GetStudentListing(searchText, GetSchoolIdForCurrentUser());
            if (list == null)
            {
                return NotFound("There is no students");
            }
            return Ok(list);
        }

        //GET: api/Student/getstudentbyid/{studentId}
        [Route("{StudentId:int}")]
        [HttpGet]
        [Authorize(Policy = "SchoolAdmin")]
        public IActionResult GetStudentById(int studentId)
        {
            var st = ds.GetStudentById(studentId);
            if (st == null)
            {
                return NotFound("There is no student with this Id");
            }
            return Ok(st);
        }

        //api/student/delete/{id}
        [HttpDelete]
        [Route("{id}")]
        [Authorize(Policy = "SchoolAdmin")]
        public IActionResult Delete(int id)
        {
            var studentResult = ds.DeleteStudent(id);
            if (studentResult == ObjectManipulationResult.NotFound)
            {
                return BadRequest("Student was not found");
            }
            else if (studentResult == ObjectManipulationResult.ErrorOccured)
            { 
                return BadRequest("Error occured while deleting the student");
            }
            else if (studentResult == ObjectManipulationResult.Conflict)
            {
                return BadRequest("This student is part of an open flight. You must close that flight before you can delete them.");
            }

            return NoContent();
        }

         
        // PUT: api/Student/edit/{id}
        [HttpPut]
        [Route("{id}")]
        [Authorize(Policy = "SchoolAdmin")]
        public IActionResult Edit(int id, [FromBody]EditCreateStudentModel model)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest("You request contains invalid data!");
            }
            if (model.StudentParent == null || String.IsNullOrEmpty(model.StudentParent.Email) )
            {
                return BadRequest("Please enter a parent email!");
            }

            int? schoolId = Convert.ToInt32(GetSchoolIdForCurrentUser());

            var studentEditingResult = ds.EditStudent(model, schoolId);

            if (studentEditingResult == ObjectManipulationResult.ErrorOccured)
            {
                return BadRequest("Error occured while editing the student");
            }
            else if (studentEditingResult == ObjectManipulationResult.Exists)
            {
                return BadRequest("Student with ExternalId - " + model.ExternalId + " alredy exists!");
            }
            
            return Ok();
        }
        
        //Post: api/Student/create
        [HttpPost]
        [Authorize(Policy = "SchoolAdmin")] 
        public IActionResult Create([FromBody]EditCreateStudentModel model)
        {           
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }
            if (model.StudentParent == null || String.IsNullOrEmpty(model.StudentParent.Email))
            {
                return BadRequest("Please enter a parent email!");
            }

            if(String.IsNullOrEmpty(model.ExternalId))
            {
                model.ExternalId = Guid.NewGuid().ToString();
            }

            var studenCreattingResult = ds.CreateStudent(model, GetSchoolIdForCurrentUser());                       

            if (studenCreattingResult == ObjectManipulationResult.ErrorOccured)
            {
                return BadRequest("Error occured while creating the student");
            }
            else if (studenCreattingResult == ObjectManipulationResult.Exists)
            {
                return BadRequest("Student with ExternalId - " + model.ExternalId + " alredy exists!");
            }

            return Ok("Student created!");
        }
        
        //Post: api/Student/ChangeGradeAndClassroom
        [HttpPost]
        [Authorize(Policy = "SchoolAdmin")]
        public IActionResult ChangeGradeAndClassroom([FromBody] ChangeGradeClassroom model)
        {
            if (ModelState.IsValid)
            {
                var result = ds.ChangeGradeAndClassroom(model);
                if (result == ObjectManipulationResult.NotFound)
                {
                    return NotFound("Model is empty!");
                }
                else if (result == ObjectManipulationResult.ErrorOccured)
                {
                    return BadRequest("Error occured while updating students");
                }
                return Ok("Updated!");
            }
            else
            {
                return BadRequest(ModelState);
            }
        }

        [HttpGet]
        [Authorize(Policy = "SchoolAdmin")]
        public IActionResult GetStudentParentList()
        {
            List<StudentParent> parents = ds.GetStudentParents(Convert.ToInt32(GetSchoolIdForCurrentUser()));   
            return Ok(parents);
        }

    }
}