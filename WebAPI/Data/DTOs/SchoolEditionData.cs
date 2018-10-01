using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace WebAPI.Data.DTOs
{
    public class SchoolEditionData
    {
        public int SchoolId { get; set; }
        public string SchoolName { get; set; }
        public int DistrictId { get; set; }
        public int StateId { get; set; }

        public int MainAdminId { get; set; }
        public int PreviousAdminId { get; set; }
        public int StatusId { get; set; }
        public List<UserRecord> SchoolAdmins { get; set; }


        public List<State> States { get; set; }
        public List<SchoolStatus> Statuses { get; set; }
        public List<District> Districts { get; set; }


    }
}
