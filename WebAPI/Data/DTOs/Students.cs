using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace WebAPI.Data.DTOs
{
    public class Students
    {
        public int Id { get; set; }

        public string ExternalId { get; set; }

        public string Name { get; set; }

        public string Grade { get; set; }

        public string ClassroomName { get; set; }

        public string ParentEmail { get; set; }

        public string StudentStatus { get; set; }
    }

    public class ChangeGradeClassroom
    {
        public int ClassroomId { get; set; }
        public string Grade { get; set; }
        public List<string> StudentsIdList { get; set; }

    }
}
