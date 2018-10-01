using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace WebAPI.Models.Requests
{
    public class NewScannerUsers
    {
        public string Name { get; set; }
        public string Email { get; set; }
        public string LaneColor { get; set; }

    }
}
