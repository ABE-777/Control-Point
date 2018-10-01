using Microsoft.AspNetCore.Http;
using System;
using System.Collections.Generic;
using System.Text;
using WebCreek.Framework.Auth0.Models;
using WebCreek.Framework.Auth0.AuthenticationAPI;
using Microsoft.Extensions.Options;
using WebCreek.Framework.Utility;
using System.Linq;
using LinqToDB;
using WebCreek.Framework.DataModel;
using WebCreek.Framework.Data;
using WebCreek.Framework.Auth0.AuthenticationAPI.AuthenticationAPIClient;

namespace WebCreek.Framework.Security
{
    public class CurrentIdentity : ICurrentIdentity
    {
        IHttpContextAccessor context;

        public SysUser CurrentUser { get; set; }
        public Auth0Info AuthOInfo { get; set; }

        public CurrentIdentity(IHttpContextAccessor Context, IOptions<BaseAppSettings> _settings)
        {
            context = Context;

            AuthOInfo = AuthenticationApiClient.GetCurrentUser(context.HttpContext.Request.Headers["Authorization"], _settings.Value);
            try
            {
                CurrentUser = ModelHelper.GetModel<SysUser>($"Email=\"{AuthOInfo.name}\"");
            }
            catch{ }
            

        }

        public bool IsInRole(string role)
        {
            using (var db = new SysDB())
            {
                var query = from ur in db.SysUserrole
                            join r in db.SysRole on ur.RoleID equals r.RoleID
                            where ur.UserID == CurrentUser.UserID && r.RoleName == role
                            select r.RoleID;
                try
                {
                    return query.Count() > 0;
                }
                catch { return false; }
               
            }
        }

    }

    public interface ICurrentIdentity
    {
        SysUser CurrentUser { get; set; }
        Auth0Info AuthOInfo { get; set; }
        bool IsInRole(string role);
    }
}
