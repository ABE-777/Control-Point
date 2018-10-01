using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using WebAPI.Data;

namespace WebAPI.Models.Requests 
{
    public class EditSchoolSettingsModel
    {
        public int ArchiveTimeTypeId { get; set; }

        public int CountOfLanes { get; set; }

        public int CarsPerLane { get; set; }

        public int LaneLogisticTypeId { get; set; }

        public int CardPrintingTypeId { get; set; }

        public bool AllowPrintingAtHome { get; set; }

        public string Instructions { get; set; }

        public List<Lane> Lanes { get; set; }

        public List<NewScannerUsers> NewScannerUsers { get; set; }

    }
}
