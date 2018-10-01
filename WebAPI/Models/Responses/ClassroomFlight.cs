using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace WebAPI.Models.Responses
{
    public class ClassroomFlightsAndSettings
    {
       public List<ClassFlight> Flights { get; set; }  
       public int TeacherId { get; set; } 
       public string DefaultLaneColor { get; set; }
       public bool IsCarColumnVisible { get; set; }
       public bool IsGradeColumnVisible { get; set; }
       public bool IsHallwayColumnVisible { get; set; } 
       public string ClosedFlightIntoArchive { get; set; }
    }

    public class ClassFlight
    {
        public int FlightId { get; set; }
        public string Status { get; set; }
        public int FlightNumber { get; set; }
    }

    public class ClassFlightLane
    {
        public int LaneId { get; set; }
        public string Name { get; set; }
        public string Color { get; set; }
        public string Status { get; set; }
    }
}
