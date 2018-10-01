namespace WebCreek.Framework.Utility
{
    public class BaseAppSettings
    {
        public Auth0Settings Auth0 { get; set; }
        public EmailSettings SMTP  { get; set; }
    }

    public class Auth0Settings
    {
        public string DomainURL       { get; set; }
        public string ManagementAPIID { get; set; }
        public string ClientSecret    { get; set; }
        public string APIIdentifier   { get; set; }
        public string DefaultUserPwd  { get; set; }
        public string AuthAPIClientID { get; set; }
    }

    public class EmailSettings
    {
        public string SmtpServerUrl     { get; set; }
        public int    SmtpServerTLSPort { get; set; }
        public string FromTitle         { get; set; }
        public int    ServerPort        { get; set; }
        public bool   UseSSL            { get; set; }
        public bool   SmtpUseOAuth      { get; set; } = false;
        public string AgentLogin        { get; set; }
        public string AgentPassword     { get; set; }
    }



}
