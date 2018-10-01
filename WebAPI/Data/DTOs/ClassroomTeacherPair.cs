// 02.02.2018 AlexBodnar Use this model for ClassoomController ( getList and updateClassrooms and Teachers )


using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace WebAPI.Data.DTOs
{
    public class ClassroomTeacherPair
    {
        public int TeacherId { get; set; }

        public String TeacherName { get; set; }

        public int ClassroomId { get; set; }

        public string ClassroomName { get; set; }
    }
}
