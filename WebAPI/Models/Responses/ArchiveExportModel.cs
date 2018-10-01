using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace WebAPI.Models.Responses
{
    public class ArchiveExportModel
    {
        public string StudentName { get; set; }
        public int StudentId { get; set; }
        public string Grade { get; set; }
        public string ParentName { get; set; }
        public DateTime ScannerTime { get; set; }
        public DateTime ClassroomDismissalTime { get; set; }
        public DateTime HallwayDismissalTime { get; set; }
    }
}
