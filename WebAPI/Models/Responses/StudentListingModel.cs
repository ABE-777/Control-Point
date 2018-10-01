using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace WebAPI.Models.Responses
{
    public class StudentListingModel
    {
        public List<InactiveStudentModel> Inactive { get; set; }

        public List<ActiveStudentModel> Active { get; set; }
    }
}
