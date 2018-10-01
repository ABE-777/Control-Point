using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;
using WebCreek.Framework.Models;

namespace WebAPI.Models.Requests
{
    public class TemporaryAccessModel : IHasEmail
    {
        [Required]
        public DateTime ValidFrom { get; set; }

        [Required]
        public DateTime ValidTo { get; set; }

        //This email is used to get id of the user which will be impersonate
        [Required]
        public string ImpersonatedUserEmail { get; set; }
    }
}
