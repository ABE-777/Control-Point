using MailKit.Net.Smtp;
using MailKit.Security;
using MimeKit;
using System;
using System.IO;
using WebCreek.Framework.Utility;
using static WebCreek.Framework.SettingsManager.SettingsManager;

namespace WebCreek.Framework.Mail
{
    public static class MailService
    {
        public static void SendMail(string fromTitle,
                      string[] toAddresses,
                      string subject,
                      string templateName,
                      string[] stringsToReplace = null,
                      string[] replacementStrings = null,
                      EmailSettings emailSettings = null)
        {
            var title             = emailSettings == null 
                                        ? GetSetting<string>("EmailAgent", "FromTitle") 
                                        : emailSettings.FromTitle;
            var from              = emailSettings == null 
                                        ? GetSetting<string>("EmailAgent", "AgentLogin") 
                                        : emailSettings.AgentLogin;
            var smtpServerUrl     = emailSettings == null 
                                        ? GetSetting<string>("EmailAgent", "SmtpServerUrl") 
                                        : emailSettings.SmtpServerUrl;
            var smtpServerTLSPort = emailSettings == null 
                                        ? GetSetting<int>("EmailAgent", "SmtpServerTLSPort") 
                                        : emailSettings.SmtpServerTLSPort;
            var smtpUseOAuth      = emailSettings == null
                                        ? GetSetting<bool>("EmailAgent", "SmtpUseOAuth")
                                        : emailSettings.SmtpUseOAuth;
            var login             = from;
            var password          = emailSettings == null
                                        ? GetSetting("EmailAgent", "AgentPassword")
                                        : emailSettings.AgentPassword;


            var message = new MimeMessage();
            message.From.Add(new MailboxAddress(title, from));


            message.Subject = subject;
            var bodyBuilder = new BodyBuilder();

            string content;

            try
            {
                content = File.ReadAllText(GetSetting<string>("ContentRootPath") + "Files/Templates/" + templateName);
            }
            catch (Exception ex)
            {
                if (ex is FileNotFoundException || ex is DirectoryNotFoundException)
                {
                    content = File.ReadAllText(GetSetting<string>("ContentRootPath") + "\\Data\\Files\\Templates\\" + templateName);
                }
                else
                {
                    throw ex;
                }
            }

            if (stringsToReplace != null && replacementStrings != null && stringsToReplace.Length > 0 && replacementStrings.Length > 0)
            {
                for (var i = 0; i < stringsToReplace.Length; i++)
                {
                    content = content.Replace(stringsToReplace[i], replacementStrings[i]);
                }
            }

            bodyBuilder.HtmlBody = content;

            message.Body = bodyBuilder.ToMessageBody();

            using (var client = new SmtpClient())
            {
                client.Connect(smtpServerUrl, smtpServerTLSPort, SecureSocketOptions.StartTls);

                if (!smtpUseOAuth)
                    client.AuthenticationMechanisms.Remove("XOAUTH2");

                client.Authenticate(login, password);

                foreach (var address in toAddresses)
                {
                    message.To.Clear();
                    message.To.Add(new MailboxAddress(address));
                    client.Send(message);
                }
                client.Disconnect(true);
            }
        }
    }
}
