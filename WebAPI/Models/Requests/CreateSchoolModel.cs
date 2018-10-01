using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace WebAPI.Models.Requests
{
    public class CreateSchoolModel
    {
        [Required]
        public string Name { get; set; }

        [Required]
        public int DistrictId { get; set; }

        [Required]
        public string SchoolAdminName { get; set; }

        [Required]
        public string SchoolAdminEmail { get; set; }
    }
}
