using System.Net.Http;
using WebCreek.Framework.Auth0.Models;
using static WebCreek.Framework.SettingsManager.SettingsManager;
using Newtonsoft.Json;
using Newtonsoft.Json.Linq;
using WebCreek.Framework.Auth0.ManagementAPI.TokenFactory;
using System.Text;
using WebCreek.Framework.Models;
using System.Collections.Generic;
using System.Linq;
using System;
using RestSharp;
using System.Net;

namespace WebCreek.Framework.Auth0.ManagementAPI.ManagementAPIClient
{
    public class ManagementApiClient : HttpClient
    {
        private string domain = GetSetting("Auth0", "Domain");
        private string baseManagementApiUrl => "https://" + domain + "/api/v2/";
        private string baseManagementApiUrlUsers => baseManagementApiUrl + "users/";
        private string ManagementApiToken => ManagementApiTokenFactory.GetToken();

        public ManagementApiClient()
        {
            DefaultRequestHeaders.Add("Authorization", $"Bearer {ManagementApiToken}");
        }

        /// <summary>
        /// Sends request to Auth0 to retreive all registered users
        /// </summary>
        //============================================================
        //Revision History
        //Date        Author          Description
        //07/11/2017  IvanK             Created
        //============================================================
        public Auth0User[] GetUsers()
        {
            string queryString = "?include_totals=true&page=";
            int pageNo = 0;
            var usersCollection = new List<Auth0User>();
            string responseString = GetAsync(baseManagementApiUrl + "users" + queryString + pageNo).Result.Content.ReadAsStringAsync().Result;
            dynamic response = JsonConvert.DeserializeObject(responseString);
            var usersSectionObject = response.users;
            usersCollection.AddRange(JsonConvert.DeserializeObject<Auth0User[]>(usersSectionObject.ToString()));

            while (response.length == response.limit)
            {
                pageNo++;
                responseString = GetAsync(baseManagementApiUrl + "users" + queryString + pageNo).Result.Content.ReadAsStringAsync().Result;
                response = JsonConvert.DeserializeObject(responseString);
                usersSectionObject = response.users;
                usersCollection.AddRange(JsonConvert.DeserializeObject<Auth0User[]>(usersSectionObject.ToString()));
            }
            return usersCollection.ToArray<Auth0User>();
        }

        /// <summary>
        /// Sends request to Auth0 to retreive single user record by his e-mail address
        /// </summary>
        //============================================================
        //Revision History
        //Date        Author          Description
        //07/25/2017  IvanK             Created
        //============================================================
        public Auth0User GetUserByEmail(string email, int retryCount = 20)
        {
            Auth0User[] usersFound = { };
            while (usersFound.Length == 0 || retryCount == 0)
            {
                // need to set up indexes after creating new user in auth0
                System.Threading.Thread.Sleep(2500);
                usersFound = JsonConvert.DeserializeObject<Auth0User[]>(GetAsync(baseManagementApiUrl + "users" + "?q=email.raw:" + email).Result.Content.ReadAsStringAsync().Result);
                //if (usersFound.Length == 0)
                //    continue;
                //else
                //    return usersFound[0];
                retryCount--; 
            }
            if (usersFound.Length == 0)
            {
                return null;
            }

            return usersFound[0];
            //var response = GetAsync(baseManagementApiUrl + "users" + "?q=email.raw:" + email).Result.Content.ReadAsStringAsync().Result;
            //var user = JsonConvert.DeserializeObject<Auth0User[]>(response)[0];
            //return user;
        }

        /// <summary>
        /// Sends request to Auth0 to retreive single user record by Auth0 id
        /// </summary>
        //============================================================
        //Revision History
        //Date        Author          Description
        //12/19/2017  IvanK             Created
        //============================================================
        public Auth0UserExtended GetUserById(string id)
        {
            var response = GetAsync(baseManagementApiUrlUsers + id).Result.Content.ReadAsStringAsync().Result;
            var user = JsonConvert.DeserializeObject<Auth0UserExtended>(response);
            return user;
        }

        /// <summary>
        /// Sends request to Auth0 to create user
        /// </summary>
        //============================================================
        //Revision History
        //Date        Author          Description
        //07/11/2017  IvanK             Created
        //20/11/2017  IvanK             Modified - Removed unnecessary data submitted to Auth0
        //============================================================
        public Auth0User CreateUser(IHasEmail newUser, bool verifyUserEmailOnCreate = false)
        {
            var content = new StringContent(JsonConvert.SerializeObject(new
            {
                connection = "Username-Password-Authentication",
                email = newUser.Email,
                password = GetSetting("Auth0", "ManagementAPI", "DefaultUserPassword"),
                email_verified = false,
                verify_email = verifyUserEmailOnCreate,
            }), Encoding.UTF8, "application/json");
            var response = JsonConvert.DeserializeObject<Auth0User>(PostAsync(baseManagementApiUrl + "users", content).Result.Content.ReadAsStringAsync().Result);
            return response;
        }

        /// <summary>
        /// Authenticates user by email and password
        /// </summary>
        /// <param name="email">Must be users email</param>
        /// <param name="password">Must be users password</param>
        /// <returns>Returns object with token data if authenticated successfully</returns>
        public IRestResponse AuthenticateUser(string email, string password)
        {
            var client = new RestClient("https://" + domain + "/oauth/token");
            var request = new RestRequest(Method.POST);
            request.AddHeader("content-type", "application/json");
            request.AddParameter("application/json", "{\"grant_type\":\"http://auth0.com/oauth/grant-type/password-realm\"," +
                "\"username\": \"" + email + "\"," +
                "\"password\": \"" + password + "\",\"audience\": \"" +
                GetSetting("Auth0", "AuthenticationApi", "ApiIdentifier") +
                "\", \"scope\": \"read:sample\", \"client_id\": \"" + GetSetting("Auth0", "AuthenticationApi", "ClientId") +
                "\", \"client_secret\": \"" + GetSetting("Auth0", "AuthenticationApi", "ClientSecret") +
                "\", \"realm\": \"Username-Password-Authentication\"}", ParameterType.RequestBody);
            IRestResponse response = client.Execute(request);

            return response;
        }

        /// <summary>
        /// Edits users password
        /// </summary>
        /// <param name="email">Must be users email</param>
        /// <param name="password">Must be password to set to users account</param>
        public IRestResponse EditUsersPassword(string email, string password)
        {
            var result = GetUserByEmail(email);

            var client = new RestClient(baseManagementApiUrl + "users/" + result.UserId);
            var request = new RestRequest(Method.PATCH);
            request.AddHeader("content-type", "application/json");
            request.AddHeader("Authorization", "Bearer " + ManagementApiToken);
            request.AddParameter("application/json", "{\"password\": \"" + password + "\",\"connection\": \"Username-Password-Authentication\"}", ParameterType.RequestBody);
            IRestResponse response = client.Execute(request);

            return response;
        }

        /// <summary>
        /// Sends request to Auth0 to delete user by user's id
        /// </summary>
        //============================================================
        //Revision History
        //Date        Author          Description
        //07/11/2017  IvanK             Created
        //============================================================
        public void DeleteUser(string userId)
        {
            var res = DeleteAsync(baseManagementApiUrl + $"users/{userId}").Result;
        }

        /// <summary>
        /// Sends request to user to verify e-mail
        /// </summary>
        /// <param name="userEmail">User's e-mail address</param>
        //============================================================
        //Revision History
        //Date        Author          Description
        //07/25/2017  IvanK             Created
        //============================================================
        public void RequestVerifyEmail(string userId, string redirectUrl = null)
        {
            //var content_ticket = new StringContent(JsonConvert.SerializeObject(new
            //{
            //    user_id    = userId,
            //    //result_url = redirectUrl
            //}), Encoding.UTF8, "application/json");
            //var res_ticket = PostAsync(baseManagementApiUrl + "tickets/email-verification", content_ticket).Result;

            var content_job = new StringContent(JsonConvert.SerializeObject(new
            {
                user_id = userId,

            }), Encoding.UTF8, "application/json");
            var res_job = PostAsync(baseManagementApiUrl + "jobs/verification-email", content_job).Result;
        }

        public async System.Threading.Tasks.Task<string> UpdateUserProfilePictureAsync(string path, string userId)
        {
            HttpResponseMessage response = null;

            try
            {
                var contentUser = new
                {
                    user_metadata = new
                    {
                        picture = path
                    }
                };
                var json = new StringContent(JsonConvert.SerializeObject(contentUser), Encoding.UTF8, "application/json");
                var url = new Uri(baseManagementApiUrlUsers + "auth0|" + userId);
                using (var client = new HttpClient())
                {
                    var request = new HttpRequestMessage(new HttpMethod("PATCH"), url);
                    request.Content = json;
                    request.Headers.Add("Authorization", "Bearer " + ManagementApiToken);



                    response = await client.SendAsync(request);


                }
            }
            catch (HttpRequestException ex)
            {
                return ex.ToString();
            }

            return response.ToString();
        }
    }
}