using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace WebAPI.Data.DTOs
{
    public class Schools
    {
        public int Id { get; set; }

        public string Name { get; set; }

        public string District { get; set; }

        public string AdminName { get; set; }

        public string AdminEmail { get; set; }

        public string Status { get; set; }
    }
}
