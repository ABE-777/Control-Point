using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace WebAPI.Models.Requests
{
    public class EditUserModel
    {
        [Required]
        public int Id { get; set; }

        [Required]
        public string Name { get; set; }

        [Required]
        public int RoleId { get; set; }

        [Required]
        public string Email { get; set; }

        public int? ClassroomId { get; set; }

        public string ClassroomName { get; set; }
    }
}
