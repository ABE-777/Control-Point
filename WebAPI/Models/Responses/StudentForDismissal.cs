using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace WebAPI.Data.DTOs
{
    public class StudentForDismissal
    {
        [Required]
        public int Id { get; set; }
        [Required]
        public string Name { get; set; }
        [Required]
        public string ExternalId { get; set; }

        public string Grade { get; set; }

        public string ClassroomTeacher { get; set; }

        public string SchoolName { get; set; }
    }
}
