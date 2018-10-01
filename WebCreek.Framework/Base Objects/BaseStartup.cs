using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.AspNetCore.Http;
using Newtonsoft.Json;
using LinqToDB.Data;
using Microsoft.Extensions.Logging;
using System.Reflection;
using Microsoft.Net.Http.Headers;
using LinqToDB.DataProvider;

using WebCreek.Framework.DIObjects;
using WebCreek.Framework.Data;
using WebCreek.Framework.Controllers;
using WebCreek.Framework.Middleware;
using WebCreek.Framework.Utility;
using System;
using WebCreek.Framework.Auth0;
using WebCreek.Framework.Security;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.AspNetCore.Mvc.Formatters;
using WebCreek.Framework.LogProvider;

namespace WebCreek.Framework.Base_Objects
{
    /// <summary>
    /// Common startup logic
    /// </summary>
    //============================================================
    //Revision History
    //Date          Author          Description
    //06/28/2017    TB               Created
    //============================================================
    public class BaseStartup
    {
        public IConfigurationRoot Configuration { get; }
        /// <summary>
        /// Constructor
        /// </summary>
        /// <param name="env"></param>
        //============================================================
        //Revision History
        //Date        Author          Description
        //06/28/2017  TB               Created
        //============================================================
        public BaseStartup(IHostingEnvironment env)
        {
            var builder = new ConfigurationBuilder()
                .SetBasePath(env.ContentRootPath)
                .AddJsonFile("appsettings.json", optional: false, reloadOnChange: true)
                .AddJsonFile($"appsettings.{env.EnvironmentName}.json", optional: true)
                .AddEnvironmentVariables();
            Configuration = builder.Build();
        }

        /// <summary>
        /// This method gets called by the runtime. Use this method to add services to the container.
        /// </summary>
        /// <param name="services"></param>
        //============================================================
        //Revision History
        //Date        Author          Description
        //06/28/2017  TB               Created
        //06/30/2017  AA               Updated to handle Auth0 authentication
        //============================================================
        public virtual void ConfigureServices(IServiceCollection services)
        {
            Assembly a = (new DataController()).GetType().GetTypeInfo().Assembly;

            //auth0 configuration
            string domain = $"https://{Configuration["Auth0:Domain"]}/";


            services.AddResponseCompression(options =>
            {
                options.EnableForHttps = true;
                options.MimeTypes = new[] {
                    "text/plain",
                    "text/css",
                    "application/javascript",
                    "text/html",
                    "application/xml",
                    "text/xml",
                    "application/json",
                    "text/json", };
            });
            services.AddAuthorization(options =>
            {
                options.AddPolicy("LoggedIn",
                    policy => policy.Requirements.Add(new HasScopeRequirement("read:messages", domain)));
            });

            var bearerOptions = new JwtBearerOptions
            {
                Audience = Configuration["Auth0:ApiIdentifier"],
                Authority = $"https://{Configuration["Auth0:Domain"]}/"
            };


            services.AddAuthentication(JwtBearerDefaults.AuthenticationScheme).AddJwtBearer(o =>
            {
                o.RequireHttpsMetadata = false;
                o.Audience = Configuration["Auth0:ApiIdentifier"];
                o.Authority = $"https://{Configuration["Auth0:Domain"]}/";
            });

            //build app settings object
            services.Configure<BaseAppSettings>(x =>
            {
                x.Auth0 = new Auth0Settings()
                {
                    APIIdentifier   = Configuration.GetSection("Auth0")["ApiIdentifier"],
                    DomainURL       = Configuration.GetSection("Auth0")["Domain"],
                    AuthAPIClientID = Configuration.GetSection("Auth0").GetSection("AuthenticationApi")["ClientId"],
                    ManagementAPIID = Configuration.GetSection("Auth0").GetSection("ManagementAPI")["ClientId"],
                    ClientSecret    = Configuration.GetSection("Auth0").GetSection("ManagementAPI")["ClientSecret"],
                    DefaultUserPwd  = Configuration.GetSection("Auth0").GetSection("ManagementAPI")["DefaultUserPassword"]
                };
                x.SMTP = new EmailSettings()
                {
                    SmtpServerUrl = Configuration.GetSection("EmailAgent")["SmtpServerUrl"],
                    ServerPort    = Convert.ToInt32(Configuration.GetSection("EmailAgent")["SmtpServerPort"]),
                    UseSSL        = Convert.ToBoolean(Configuration.GetSection("EmailAgent")["SmtpUseSsl"]),
                    SmtpUseOAuth  = Convert.ToBoolean(Configuration.GetSection("EmailAgent")["SmtpUseOAuth"]),
                    AgentLogin    = Configuration.GetSection("EmailAgent")["AgentAddress_Login"],
                    AgentPassword = Configuration.GetSection("EmailAgent")["AgentPassword"]
                };
            }
           );

            services.AddScoped<ICurrentIdentity, CurrentIdentity>();

            //add helper classes for dependency injection
            services.AddScoped<IRequestReader, RequestReader>();

            //API Parameters
            services.AddScoped<IQueryParams, QueryParams>();

            //Query Factory
            services.AddSingleton<IQueryFactory, DataFactory>();

            //add http context for dependency injection
            services.AddTransient<IHttpContextAccessor, HttpContextAccessor>();


            services.AddMvc(options => options.OutputFormatters.Add(new HtmlOutputFormatter()));
            //add settings container
            services.AddSingleton<IConfiguration>(Configuration);

            //settings manager gets initialized by settings specific for environment
            SettingsManager.SettingsManager.AppSettings = Configuration.AsEnumerable();
        }
        /// <summary>
        /// This method gets MysqlDataProvider
        /// </summary>
        /// <param name="app"></param>
        /// <param name="env"></param>
        /// <param name="loggerFactory"></param>
        //============================================================
        //Revision History
        //Date        Author          Description
        //07/15/2017  PM               Created
        //============================================================
        private static IDataProvider GetDataProvider()
        {
            return new LinqToDB.DataProvider.MySql.MySqlDataProvider();
        }
        /// <summary>
        /// This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        /// </summary>
        /// <param name="app"></param>
        /// <param name="env"></param>
        /// <param name="loggerFactory"></param>
        //============================================================
        //Revision History
        //Date        Author          Description
        //06/28/2017  TB               Created
        //06/30/2017  AA               Updated to handle Auth0 authentication with jwt
        //============================================================
        public virtual void Configure(IApplicationBuilder app, IHostingEnvironment env, ILoggerFactory loggerFactory)
        {
            //configure linq2db
            DataConnection.DefaultDataProvider = Configuration.GetSection("DBSettings").GetValue<string>("Provider");
            DataConnection.AddConfiguration("default", Configuration.GetSection("DBSettings").GetValue<string>("ConnectionString"), null);

            loggerFactory.AddConsole(Configuration.GetSection("Logging"));
            loggerFactory.AddContext(LogLevel.Warning, Configuration.GetSection("DBSettings").GetValue<string>("ConnectionString"));

            if (env.IsDevelopment())
                loggerFactory.AddDebug();



            app.UseAuthentication();
            app.UseMiddleware<MaintenanceMode>();
            app.UseResponseCompression();
            app.UseMvc();
            app.UsePathBase(Configuration.GetSection("Urls").GetValue<string>("Base"));
            app.UseStaticFiles();
            app.UseDefaultFiles(new DefaultFilesOptions() { DefaultFileNames = new[] { "index.html" } });

            //override mapping to keep .net core from interferring with angular routing
            app.MapWhen(context =>
            {
                var path = context.Request.Path.Value.ToLower();
                return path.Contains("/") && !path.Contains(".js") && !path.Contains("/api/") &&
                    !path.Contains(".ico");
            },
            branch =>
            {
                branch.Use((context, next) =>
                {
                    context.Request.Path = new PathString("/index.html");
                    return next();
                });

                branch.UseStaticFiles();
            });
        }


    }
}
public class HtmlOutputFormatter : StringOutputFormatter
{
    public HtmlOutputFormatter()
    {
        SupportedMediaTypes.Add("text/html");
    }
}
