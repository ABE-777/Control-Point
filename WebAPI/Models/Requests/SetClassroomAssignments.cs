using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;
using WebAPI.Data.DTOs;

namespace WebAPI.Models.Requests
{
    public class SetClassroomAssignments
    {
        [Required]
        public int SchoolId { get; set; }

        public List<ClassroomTeacherPair> ClassroomAssignments { get; set; }
    }
}
