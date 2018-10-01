using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace WebAPI.Data.DTOs
{
    public class StudentsToCardsDTO
    {
        public int StudentId { get; set; }
        public string StudentName { get; set; }
        public string Grade { get; set; }
        public string Instructor { get; set; }

    }
}
