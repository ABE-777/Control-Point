using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace WebAPI.Models.Responses
{
    public class InactiveStudentModel
    {
        public int Id { get; set; }
        public string Classroom { get; set; }

        public string ExternalId { get; set; }

        public string Name { get; set; }

        public string Grade { get; set; }

        public string ParentGuardian { get; set; }

        public string Status { get; set; }
    }
}
