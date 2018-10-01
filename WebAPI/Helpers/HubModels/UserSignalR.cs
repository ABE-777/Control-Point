using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using WebAPI.Helpers.HubAdministrator;
using WebAPI.Helpers.HubModels;

namespace WebAPI.Helpers
{
   
    public class UserSignalR
    {
        public string ConnectionId { get; set; }
        public int SchoolId { get; set; }
        public int UserId { get; set; }
        public ScannerManager Ssm { get; set; }
        public HubRole Role { get; set; }
        public string UserGroup { get { return Role.ToString() + SchoolId.ToString(); } }
    } 
}
