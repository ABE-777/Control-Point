using System.Collections.Generic;

namespace WebAPI.Models.Responses
{
    public class ClassroomLane
    {
        public int LaneId { get; set; }
        public string Name { get; set; }
        public string Color { get; set; }
        public List<ClassroomStudent> Students { get; set; }
    }
}