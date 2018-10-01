using Newtonsoft.Json;

namespace WebCreek.Framework.Auth0.Models
{
    public class Auth0UserExtended
    {
        [JsonProperty("email")]
        public string Email { get; set; }

        [JsonProperty("email_verified")]
        public bool EmailVerified { get; set; }

        [JsonProperty("user_id")]
        public string UserId { get; set; }

        [JsonProperty("picture")]
        public string Picture { get; set; }

        [JsonProperty("nickname")]
        public string Nickname { get; set; }

        [JsonProperty("identities")]
        public Identity[] Identities { get; set; }

        [JsonProperty("updated_at")]
        public System.DateTimeOffset UpdatedAt { get; set; }

        [JsonProperty("created_at")]
        public System.DateTimeOffset CreatedAt { get; set; }

        [JsonProperty("name")]
        public string Name { get; set; }

        [JsonProperty("last_password_reset")]
        public System.DateTimeOffset LastPasswordReset { get; set; }

        [JsonProperty("last_ip")]
        public string LastIp { get; set; }

        [JsonProperty("last_login")]
        public System.DateTimeOffset LastLogin { get; set; }

        [JsonProperty("logins_count")]
        public long LoginsCount { get; set; }
    }
}
