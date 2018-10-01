using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace WebAPI.Data.DTOs
{
    public class StudentForParent
    {
        [Required]
        public int Id { get; set; }
        [Required]
        public string Name { get; set; }
        [Required]
        public string ExternalId { get; set; }

        public string Grade { get; set; }

        public string Classroom { get; set; }

        public int ParentId { get; set; }

        public bool IsPrintingAtHome { get; set; }

        public string SchoolName { get; set; }
    }
}
