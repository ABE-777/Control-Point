using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using WebAPI.Data;

namespace WebAPI.Helpers.HubModels
{
    public class ScannedStudent
    {
        public int FlightNumber { get; set; }
        public int CardId { get; set; }
        public int StudentId { get; set; }
        public string Name { get; set; }
        public Lane Lane { get; set; }
        public string ParentLicense { get; set; }
        public int ParentId { get; set; }
        public string ParentName { get; set; }
        public int FligthId { get; set; }
        public int? TeacherId { get; set; }

    }
}
