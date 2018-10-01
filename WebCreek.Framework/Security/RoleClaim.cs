using Microsoft.AspNetCore.Authorization;
using System.Threading.Tasks;

namespace WebCreek.Framework.Security
{
    public class AdminOnlyClaimHandler : AuthorizationHandler<RoleClaim>
    {
        ICurrentIdentity _identity;

        public AdminOnlyClaimHandler(ICurrentIdentity identity)
        {
            _identity = identity;
        }

        protected override Task HandleRequirementAsync(AuthorizationHandlerContext context, RoleClaim requirement)
        {
            foreach(string role in requirement.AllowedRoles)
            {
                if (_identity.IsInRole(role))
                {
                    context.Succeed(requirement);
                    break;
                }                   
                
            }            

            return Task.CompletedTask;
        }
    }

    public class RoleClaim : IAuthorizationRequirement
    {
        public RoleClaim(params string[] roles)
        {
            AllowedRoles = roles;
        }


        public string[] AllowedRoles { get; set; }
    }

}
