using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace WebAPI.Data.DTOs
{
    public class UserAccount : UserRecord
    {
        public List<Role> Roles { get; set; }

        public Classroom CurrentClassroom { get; set; }

        public List<Classroom> Classrooms { get; set; }
    }
}
