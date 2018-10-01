using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace WebAPI.Data.DTOs
{
    public class SchoolCreationData
    {
        public List<State> States { get; set; }

        public List<District> Districts { get; set; }
    }
}
