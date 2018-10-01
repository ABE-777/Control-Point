using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using WebAPI.Helpers.HubModels;

namespace WebAPI.Models.Responses
{
    public class ScannerInitData
    {
        public List<AssignedLane> AssignedLanes { get; set; }
        public List<ScannedStudent> ScannedStudents { get; set; }
        public string ScanningMode { get; set; }
    }

    public class AssignedLane
    {       
        public int Id { get; set; }       
        public string Name { get; set; }
        public string Color { get; set; }
    }
}
