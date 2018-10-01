using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using WebAPI.Data;

namespace WebAPI.Helpers.HubModels
{
    public class ScannerFlight
    {
        public int FlightId { get; set; }
        public int FlightNumber { get;set;}
        public int Flight2LaneId { get; set; }
        public int LaneId { get; set; }
        public int LaneStatusId { get; set; }
        public int CountCarsInLane { get; set; }
    }
}
