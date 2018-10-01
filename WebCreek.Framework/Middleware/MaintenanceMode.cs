using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Http;
using System.Threading.Tasks;

namespace WebCreek.Framework.Middleware
{
    public class MaintenanceMode
    {
        private readonly RequestDelegate _next;

        public MaintenanceMode(RequestDelegate next)
        {
            _next = next;
        }

        public async Task Invoke(HttpContext httpContext)
        {
            if (isUploading.uploading)
            {
                if (!httpContext.Request.Path.Value.ToLower().Contains("api") || httpContext.Request.Path.Value.ToLower().Contains("api/userscontroller/getdata"))
                {
                    httpContext.Response.Headers.Add("Mode", "Available");
                    await _next(httpContext);
                    return;
                }
                httpContext.Response.StatusCode = 503;
                httpContext.Response.Headers.Add("Mode", "Maintenance");
                await httpContext.Response.WriteAsync("Not Available");
                return;
            }
            else
            {
                httpContext.Response.Headers.Add("Mode", "Available");
                await _next(httpContext);
            }
            
        }
    }

    public static class MaintenanceModeExtension
    {
        public static IApplicationBuilder UseSecurityMiddleware(this IApplicationBuilder builder)
        {
            return builder.UseMiddleware<MaintenanceMode>();
        }
    }
    public static class isUploading
    {
        public static bool uploading { get; set; }
    }
}
