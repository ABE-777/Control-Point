using Newtonsoft.Json;
using Newtonsoft.Json.Converters;
using System;

namespace WebCreek.Framework.Auth0.Models
{
    /// <summary>
    /// Auth0 User model
    /// </summary>
    //============================================================
    //Revision History
    //Date        Author          Description
    //07/10/2017  IvanK             Created
    //============================================================
    public class Auth0User
    {
        [JsonProperty("email")]
        public string Email { get; set; }

        [JsonProperty("email_verified")]
        public bool IsEmailVerified { get; set; }

        [JsonProperty("user_id")]
        public string UserId { get; set; }

        [JsonProperty("picture")]
        public string PictureUrl { get; set; }

        [JsonProperty("identities")]
        public Identity[] Identities { get; set; }

        [JsonProperty("updated_at")]
        [JsonConverter(typeof(IsoDateTimeConverter))]
        public DateTime UpdatedAt { get; set; }

        [JsonProperty("created_at")]
        [JsonConverter(typeof(IsoDateTimeConverter))]
        public DateTime CreatedAt { get; set; }

        [JsonProperty("user_metadata")]
        public UserMetaData MetaData { get; set; }

        public Auth0User(string email)
        {
            Email = email;
        }
    }

    /// <summary>
    /// Auth0 User's metadata section model
    /// </summary>
    //============================================================
    //Revision History
    //Date        Author          Description
    //07/11/2017  IvanK             Created
    //07/20/2017  IvanK           Updated - blanked MetaData model
    //============================================================
    public class UserMetaData
    {

    }

    /// <summary>
    /// Auth0 User's identity section model
    /// </summary>
    //============================================================
    //Revision History
    //Date        Author          Description
    //07/11/2017  IvanK             Created
    //============================================================
    public class Identity
    {
        [JsonProperty("user_id")]
        public string UserId { get; set; }

        [JsonProperty("provider")]
        public string Provider { get; set; }

        [JsonProperty("connection")]
        public string Connection { get; set; }

        [JsonProperty("isSocial")]
        public bool IsSocial { get; set; }
    }
}