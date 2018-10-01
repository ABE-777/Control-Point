using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using WebAPI.Security;

namespace WebAPI.Controllers
{
    [Produces("application/json")]
    [Route("api/[controller]/[action]")]
    public class ScannerController : BaseController
    {
        public ScannerController(ILogger<BaseController> logger, IUserIdentity _userIdentity) : base(logger, _userIdentity)
        {
        }


        //api/Scanner/GetConfiguration
        [Authorize(Policy = "Scanner")]
        public IActionResult GetConfiguration()
        {
            var user = userIdentity.GetCurrentUser().Result;
            if (user != null)
            {
               var result = ds.GetScannerConfiguration(user.Id);
              
                   return Ok(result);
                
            }
            return BadRequest("");
        }

        [Authorize(Policy = "Scanner")]
        public IActionResult GetScanerLanes()
        {
            var user = userIdentity.GetCurrentUser().Result;
            if (user != null)
            {
                var result = ds.GetScannerLanes(user.Id);
                if (result != null)
                {
                    return Ok(result);
                }
            }
            return BadRequest("You are currently not assigned to a lane. Please contact the School Administrator.!");
        }
    }
}