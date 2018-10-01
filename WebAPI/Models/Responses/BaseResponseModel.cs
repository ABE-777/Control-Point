using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace WebAPI.Models.Responces
{
    public class BaseResponseModel
    {
        public int Code { get; set; }

        public string Message { get; set; }
    }
}
