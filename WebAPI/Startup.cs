using Microsoft.AspNetCore.Hosting;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.AspNetCore.Builder;
using WebCreek.Framework.Base_Objects;
using WebCreek.Framework.Security;
using Microsoft.AspNetCore.Authorization;
using WebAPI.Security.AuthorizationHandlers;
using WebAPI.Security;
using Microsoft.Extensions.Logging;
using WebAPI.Helpers;

namespace WebAPI
{
    public class Startup : BaseStartup
    {
        public Startup(IHostingEnvironment env) : base(env) { }

        public override void Configure(IApplicationBuilder app, IHostingEnvironment env, ILoggerFactory loggerFactory)
        {
            base.Configure(app, env, loggerFactory);

            app.UseSignalR(routes =>
            {
                routes.MapHub<ScannerHubService>("api/BarcodeHub");
            });


            app.UseAuthentication();
            app.UseStaticHttpContext();
        }

        public override void ConfigureServices(IServiceCollection services)
        {
            services.AddScoped<IUserIdentity, UserIdentity>();
            services.AddSignalR();

            services.AddHttpContextAccessor();

            services.AddAuthorization(options =>
            {
                options.AddPolicy("SuperAdmin",
                   policy => policy.Requirements.Add(new RoleClaim("Super Admin")));

                options.AddPolicy("SchoolAdmin",
                   policy => policy.Requirements.Add(new RoleClaim("School Admin", "Super Admin")));
                
                options.AddPolicy("Scanner",
                   policy => policy.Requirements.Add(new RoleClaim("Scanner")));

                options.AddPolicy("ClassroomTeacher",
                   policy => policy.Requirements.Add(new RoleClaim("Classroom Teacher")));

                options.AddPolicy("DismissalTeacher",
                   policy => policy.Requirements.Add(new RoleClaim("Dismissal Teacher")));

                options.AddPolicy("Parent",
                   policy => policy.Requirements.Add(new RoleClaim("Parent")));

                options.AddPolicy("DismissalCards",
                   policy => policy.Requirements.Add(new RoleClaim("School Admin", "Parent", "Super Admin")));

                options.AddPolicy("Flights",
                   policy => policy.Requirements.Add(new RoleClaim("School Admin", "Classroom Teacher", "Dismissal Teacher","Super Admin")));

            });

            services.AddScoped<IAuthorizationHandler, RoleClaimsHandler>();
            base.ConfigureServices(services);
        }
    }
}
