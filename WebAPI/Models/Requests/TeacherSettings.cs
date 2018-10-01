using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using WebAPI.Data;

namespace WebAPI.Models.Requests
{
    public class TeacherSettings
    {
        public int TeacherId { get; set; }
        public int LaneId { get; set; }
        public bool IsCarColumnVisible { get; set; }
        public bool IsGradeColumnVisible { get; set; }
        public bool IsHallwayColumnVisible { get; set; }
        public List<Lane> Lanes { get; set; }

    }
}
