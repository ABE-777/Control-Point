using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using System;
using WebAPI.Data;
using WebAPI.Models.Responces;
using WebAPI.Security;

namespace WebAPI.Controllers
{
   [Authorize]
    public class BaseController : Controller
    {
        public BaseResponseModel result;

        public DataSeed ds { get; set; }

        public readonly IUserIdentity userIdentity;

        private readonly ILogger<BaseController> _logger;

        public BaseController(ILogger<BaseController> logger, IUserIdentity _userIdentity)
        {
            result = new BaseResponseModel();
            ds = new DataSeed(logger);
            _logger = logger;
            userIdentity = _userIdentity;
        }

        public int? GetSchoolIdForCurrentUser()
        {
            int? schoolId;
            var headerSchoolId = HttpContext?.Request.Headers["SchoolId"];
            if (String.IsNullOrEmpty(headerSchoolId))
            {
                schoolId = userIdentity.GetSchoolId().Result;
            }
            else
            {
                schoolId = Convert.ToInt32(headerSchoolId);
            }
            return schoolId;
        }
    }
}