using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace WebAPI.Models.Requests
{
    public class EditSchoolModel
    {
        [Required]
        public string Name { get; set; }

        [Required]
        public int DistrictId { get; set; }
        
        public string SchoolAdminName { get; set; }
        
        public string SchoolAdminEmail { get; set; }

        public int StatusId { get; set; }
    }
}
