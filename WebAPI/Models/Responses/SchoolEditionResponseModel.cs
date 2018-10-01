using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using WebAPI.Data.DTOs;
using WebAPI.Models.Responces;

namespace WebAPI.Models.Responses
{
    public class SchoolEditionResponseModel : BaseResponseModel
    {
        public SchoolEditionData EditionInitData { get; set; }
    }
}
