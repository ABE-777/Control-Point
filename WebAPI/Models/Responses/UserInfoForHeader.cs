using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using WebAPI.Models.Responces;

namespace WebAPI.Models.Responses
{
    public class UserInfoForHeader
    {
        public int UserId { get; set; }

        public string Username { get; set; }

        public string Email { get; set; }
        
        public string Role { get; set; }

        public string SchoolName { get; set; }
    }
}
