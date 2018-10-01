using Microsoft.AspNetCore.Authorization;
using System.Threading.Tasks;
using WebCreek.Framework.Security;

namespace WebAPI.Security.AuthorizationHandlers
{
    public class RoleClaimsHandler : AuthorizationHandler<RoleClaim>
    {
        IUserIdentity _identity;

        public RoleClaimsHandler(IUserIdentity identity)
        {
            _identity = identity;
        }

        protected override Task HandleRequirementAsync(AuthorizationHandlerContext context, RoleClaim requirement)
        {
            foreach (string role in requirement.AllowedRoles)
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
}