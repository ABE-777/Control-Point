using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace WebAPI.Models.Requests
{
    public class SetUserConfigurationModel 
    {
        public string Username { get; set; }

        [Required]
        public string Email { get; set; }


        [DataType(DataType.Password)]
        public string Password { get; set; }


        [DataType(DataType.Password)]
        public string NewPassword { get; set; }

        [DataType(DataType.Password)]
        [Compare("NewPassword",ErrorMessage ="Passwords not match")]
        public string NewPasswordConfirmation { get; set; }
    }
}
