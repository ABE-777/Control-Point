using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace WebAPI.Data.DTOs
{
    public class DismissalCardForList
    {
        [Required]
        public int Id { get; set; }
        [Required]
        public int UserId { get; set; }
        [Required]
        public string Status { get; set; }
        [Required]
        public string ParentName { get; set; }
        [Required]
        public string DriverLicense { get; set; }
        [Required]
        public string PhoneNumber { get; set; }
        [Required]
        public string Relationship { get; set; }
        [Required]
        public List<StudentForDismissal> Students { get; set; }        
    }
}
