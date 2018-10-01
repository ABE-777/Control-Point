using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using WebAPI.Models.Responces;
using WebAPI.Data.DTOs;

namespace WebAPI.Models.Responses
{
    public class GetClassroomAssignmentResponseModel : BaseResponseModel
    {
        public ClassroomAssignmentData ClassroomAssignmentData { get; set; }
    }
}
