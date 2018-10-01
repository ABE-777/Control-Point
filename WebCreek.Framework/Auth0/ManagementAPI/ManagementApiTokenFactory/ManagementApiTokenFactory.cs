using System.Text;
using Newtonsoft.Json;
using System.Net.Http;
using static WebCreek.Framework.SettingsManager.SettingsManager;

namespace WebCreek.Framework.Auth0.ManagementAPI.TokenFactory
{
    /// <summary>
    /// Retrieves current token for Auth0 Maintenance API
    /// </summary>
    //============================================================
    //Revision History
    //Date        Author          Description
    //07/11/2017  IvanK             Created
    //============================================================
    public static class ManagementApiTokenFactory
    {
        static string domain = GetSetting("Auth0", "Domain");
        static string tokenSourceUrl = "https://" + domain + "/oauth/token";

        public static string GetToken()
        {
            HttpClient client = new HttpClient();
            var content = new StringContent("{\"grant_type\":\"client_credentials\"," +
                                             $"\"client_id\": \"{GetSetting("Auth0", "ManagementAPI", "ClientId")}\"," +
                                             $"\"client_secret\": \"{GetSetting("Auth0", "ManagementAPI", "ClientSecret")}\"," +
                                             $"\"audience\": \"https://{domain}/api/v2/\"}}",
                                                Encoding.UTF8,
                                                "application/json");

            dynamic res = JsonConvert.DeserializeObject(client.PostAsync(tokenSourceUrl, content).Result.Content.ReadAsStringAsync().Result);
            return res.access_token;
        }
    }
}