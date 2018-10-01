using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;
using WebAPI.Data;

namespace WebAPI.Models.Requests
{
    public class EditCreateStudentModel
    {
        
        public int Id { get; set; }

        public string ExternalId { get; set; }
        [Required(ErrorMessage = "Please enter a name")]
        public string Name { get; set; }

        public string Grade { get; set; }
       
        public StudentParent StudentParent { get; set; }
        [Required(ErrorMessage = "Please choose a classroom")]
        public Classroom Classroom { get; set; }
    }
}
