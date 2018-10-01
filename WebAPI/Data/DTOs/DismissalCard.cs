using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace WebAPI.Data.DTOs
{
    public class DismissalCard
    {
        [Required]
        public int Id { get; set; }
        public bool Status { get; set; }
        [Required]
        public List<StudentForParent> Students { get; set; }
        [Required]
        public string ParentName { get; set; }
        [Required]
        public string PhoneNumber { get; set; }
        [Required]
        public string DriversLicense { get; set; }
        [Required]
        public string Relationship { get; set; }

        public int ParentUserId { get; set; }
    }
}
