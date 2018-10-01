using MailKit.Net.Smtp;
using Microsoft.AspNetCore.Mvc;
using MimeKit;
using WebCreek.Framework.APIContainerClasses;
using WebCreek.Framework.DIObjects;
using WebCreek.Framework.Models;

namespace WebCreek.Framework.Controllers
{
    
    public class ContactController : Controller
    {
        [HttpPost]
        [Route("api/[controller]/[action]")]
        public void SendContactMail([FromBody]NewContact newContact)
        {
            var message = new MimeMessage();
            message.From.Add(new MailboxAddress("Aegis", "test.agent.0001.aeg@gmail.com"));
            message.To.Add(new MailboxAddress($"{newContact.firstName} {newContact.lastName}", newContact.email));
            message.Subject = "Contact Us Aegis";
            message.Body = new TextPart("plain")
            {
                Text = "This client wants to be in contact with us: " + "\nName: " + newContact.firstName + " " + 
                        newContact.lastName + "\nEmail: " +newContact.email + "\nMessage: " + newContact.message
            };
            
            using (var client = new SmtpClient())
            {
                // For demo-purposes, accept all SSL certificates (in case the server supports STARTTLS)
                client.ServerCertificateValidationCallback = (s, c, h, e) => true;

                client.Connect("smtp.gmail.com", 465, true);

                // Note: since we don't have an OAuth2 token, disable
                // the XOAUTH2 authentication mechanism.
                client.AuthenticationMechanisms.Remove("XOAUTH2");

                // Note: only needed if the SMTP server requires authentication
                client.Authenticate("test.agent.0001.aeg@gmail.com", "strongpassword2017");

                client.Send(message);
                client.Disconnect(true);
            }

        }
    }
}
