using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace WebAPI.Data.DTOs
{
    public class ClassroomAssignmentData
    {
        public List<ClassroomTeacherPair> AssignedClassrooms { get; set; }

        public List<Classroom> NotAssignedClassrooms { get; set; }

        public List<User> NotAssignedTeachers { get; set; }
    }
}
