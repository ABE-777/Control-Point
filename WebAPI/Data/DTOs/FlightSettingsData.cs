using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace WebAPI.Data.DTOs
{
    public class FlightSettingsData
    {
        public int LaneCount { get; set; }

        public int CarsPerLane { get; set; }

        public string LaneLogisticType { get; set; }
    }
}
