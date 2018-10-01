using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace WebAPI.Models.Responses
{
    public class ActiveStudentModel : InactiveStudentModel
    {
        public string Email { get; set; }
    }
}
