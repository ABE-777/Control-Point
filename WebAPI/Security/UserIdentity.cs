using Microsoft.AspNetCore.Http;
using Microsoft.Extensions.Logging;
using Microsoft.Extensions.Options;
using WebAPI.Controllers;
using WebAPI.Data;
using WebCreek.Framework.Auth0.AuthenticationAPI.AuthenticationAPIClient;
using WebCreek.Framework.Auth0.Models;
using WebCreek.Framework.Utility;
using System.Web;
using System.Security.Claims;
using WebCreek.Framework.Auth0.ManagementAPI.ManagementAPIClient;
using System;
using System.Threading.Tasks;

namespace WebAPI.Security
{
    public class UserIdentity : IUserIdentity
    {
        IHttpContextAccessor context;

        public DataSeed ds { get; set; }

        private readonly IOptions<BaseAppSettings> settings;
        
        public UserIdentity(IHttpContextAccessor _context, IOptions<BaseAppSettings> _settings, ILogger<BaseController> logger)
        {
            context = _context;
            ds = new DataSeed(logger);
            settings = _settings;

        }
        
        public bool IsInRole(string roleName)
        {
            return ds.GetUserRole(GetCurrentUser().Result).Name == roleName;
        }

        public async Task<int?> GetSchoolId()
        {
            var CurrentUser = GetCurrentUser();

            if (CurrentUser != null)
            {
                using (var ds = new DataSeed())
                {
                    return await Task.Run(() => ds.GetUserSchoolId(CurrentUser.Result.Id));
                };
            }
            else
            {
                return null;
            }
        }

        public async Task<User> GetCurrentUser()
        {
            using (var ds = new DataSeed())
            {
                var Auht0IdClaim = context.HttpContext.User.FindFirst(ClaimTypes.NameIdentifier);
                return await Task.Run(() => ds.GetUserByAuth0Id(Auht0IdClaim.Value));
            };
        }
    }
}
