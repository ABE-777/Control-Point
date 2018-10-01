using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace WebAPI.Models.Requests
{
    public class BarcodeModel
    {
        public int CardId { get; set; }

        public int ParentId { get; set; }

        public List<int> StudentId { get; set; }

        public int LaneId { get; set; }

    }
}
