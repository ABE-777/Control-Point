using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using System;
using WebAPI.Security;

namespace WebAPI.Controllers
{
    [Route("api/FileServer/[action]")]
    public class FileServerController : BaseController
    {
        private string fileStoragePath;

        public FileServerController(ILogger<BaseController> logger, IHostingEnvironment env, IUserIdentity _userIdentity) : base(logger, _userIdentity)
        {
            fileStoragePath = env.ContentRootPath + "/Files/";
        }

        [HttpGet]
        [Authorize(Policy = "SchoolAdmin")]
        public IActionResult GetFile(string fileName)
        {
            try
            {
                var fileContents = System.IO.File.ReadAllBytes(fileStoragePath + fileName);

                const string contentType = "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet";
                HttpContext.Response.ContentType = contentType;
                HttpContext.Response.Headers.Add("Access-Control-Expose-Headers", "Content-Disposition");

                var fileContentResult = new FileContentResult(fileContents, contentType)
                {
                    FileDownloadName = fileName
                };

                return fileContentResult;
            }
            catch(Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }
    }
}
