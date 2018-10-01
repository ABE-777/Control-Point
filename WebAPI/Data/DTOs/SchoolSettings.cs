using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace WebAPI.Data.DTOs
{
    public class SchoolSettings 
    {
        public int CountOfLanes { get; set; }

        public List<Lane> Lanes { get; set; }

        public int CarsPerLane { get; set; }
            
        public int? LaneLogisticTypeId { get; set; }

        public int? CardPrintingTypeId { get; set; }

        public int? ArchiveTimeTypeId { get; set; }

        public bool AllowPrintingAtHome { get; set; }

        public string Instructions { get; set; }

        public List<LaneLogisticType> LaneScanningTypes { get; set; }

        public List<ArchiveTimeType> ArchiveTimeTypes { get; set; }

        public List<CardPrintingType> CardPrintingTypes { get; set; }

        public List<User> ScannerUsers { get; set; }
    }
}
