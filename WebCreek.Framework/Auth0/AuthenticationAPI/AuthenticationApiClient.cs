using System.Net.Http;
using Newtonsoft.Json;
using System.Text;
using static WebCreek.Framework.SettingsManager.SettingsManager;
using WebCreek.Framework.Utility;
using System;
using WebCreek.Framework.Auth0.Models;

namespace WebCreek.Framework.Auth0.AuthenticationAPI.AuthenticationAPIClient
{
    public class AuthenticationApiClient : HttpClient
    {
        private string domainUrl = GetSetting("Auth0", "Domain");
        private string baseAuthenticationApiUrl => "https://" + domainUrl + "/dbconnections/";
        private string clientId = GetSetting("Auth0", "AuthenticationApi", "ClientId");

        /// <summary>
        /// Sends request to user to change password
        /// </summary>
        /// <param name="userEmail">User's e-mail address</param>
        //============================================================
        //Revision History
        //Date        Author          Description
        //07/20/2017  IvanK             Created
        //============================================================
        public void RequestChangePassword(string userEmail)
        {
            var content = new StringContent(JsonConvert.SerializeObject(new
            {
                client_id = clientId,
                email = userEmail,
                connection = "Username-Password-Authentication",
            }), Encoding.UTF8, "application/json");
            var res = PostAsync(baseAuthenticationApiUrl + "change_password", content).Result;
        }

        public Auth0Info GetUserInfo(string authorization)
        {
            string url = "https://" + domainUrl + "/userInfo";
            string response = string.Empty;
            HttpClient client = new HttpClient();

            client.DefaultRequestHeaders.Add("Authorization", authorization);

            response = client.GetAsync(url).Result.Content.ReadAsStringAsync().Result;

            return JsonConvert.DeserializeObject<Auth0Info>(response);
        }

        public static Auth0Info GetCurrentUser(string authorization, BaseAppSettings settings)
        {
            try
            {
                if (authorization != null)
                {
                    string url = "https://" + settings.Auth0.DomainURL + "/userInfo";
                    string response = string.Empty;
                    HttpClient client = new HttpClient();
                    client.DefaultRequestHeaders.Add("Authorization", authorization);

                    var task = client.GetAsync(url).Result.Content.ReadAsStringAsync();
                    task.Wait();
                    response = task.Result;

                    return JsonConvert.DeserializeObject<Auth0Info>(response);
                }
                else
                {
                    return null;
                }
            }
            catch (Exception)
            {
                return null;
            }

        }

    }
    
}