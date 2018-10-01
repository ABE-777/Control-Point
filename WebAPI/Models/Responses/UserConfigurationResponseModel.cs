using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using WebAPI.Models.Responces;

namespace WebAPI.Models.Responses
{
    public class UserConfigurationResponseModel : BaseResponseModel
    {
        public string Username { get; set; }

        public string Email { get; set; }
    }
}
