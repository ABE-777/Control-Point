using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;
using WebCreek.Framework.Models;

namespace WebAPI.Models.Requests
{
    public class StudentParent
    {
        public int Id { get; set; }

        [Required(ErrorMessage = "Please enter a parent name")]
        public string Name { get; set; }

        [RegularExpression(@"[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}")]
        public string Email { get; set; }

    }
}
