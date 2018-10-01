using System.IO;
using MimeKit;
using WebCreek.Framework.Mail;
using WebCreek.Framework.Models;

namespace WebCreek.Framework.Common
{
    public static class CommonMethods
    {
        public static void InviteUser(NewUser newUser)
            => InviteUser(newUser.Email);

        public static void InviteUser(string newUserEmail)
        {
            MailService.SendMail(
                            "hedging@aegis-energy.com",
                            new string[] { newUserEmail },
                            "Aegis dashboard invitation",
                            "You are invited to Aegis dashboard. Soon you'll receive request to change your password.");
        }
        public static void DataUploadErrorMail(string numErrorRow, string numErrorColumn, string fileName, string userMail)
        {
            MailService.SendMail(
                            "hedging@aegis-energy.com",
                            new string[] { userMail },
                            "Aegis data upload process error",
                            File.ReadAllText(Directory.GetCurrentDirectory()+"/email-templates/aegis-upload--error.html").Replace("{errorMessage}", "Row: "+ numErrorRow + " Column: " + numErrorColumn).Replace("{fileName}", fileName));
        }
        public static void DataUploadDBErrorMail(string fileName, string userMail)
        {
            MailService.SendMail(
                            "hedging@aegis-energy.com",
                            new string[] { userMail },
                            "Aegis data upload process error",
                            File.ReadAllText(Directory.GetCurrentDirectory()+"/email-templates/aegis-upload--error.html").Replace("{errorMessage}", "the data upload into the database.").Replace("{fileName}", fileName));
        }
        public static void DataUploadFileErrorMail(string fileName, string userMail)
        {
            MailService.SendMail(
                            "hedging@aegis-energy.com",
                            new string[] { userMail },
                            "Aegis data upload process error",
                            File.ReadAllText(Directory.GetCurrentDirectory()+"/email-templates/aegis-upload--error.html").Replace("{errorMessage}", "the file that your tried to upload.").Replace("{fileName}", fileName));
        }
        public static void DataUploadNumColumnsErrorMail(string fileName, string userMail)
        {
            MailService.SendMail(
                            "hedging@aegis-energy.com",
                            new string[] { userMail },
                            "Aegis data upload process error",
                            File.ReadAllText(Directory.GetCurrentDirectory()+"/email-templates/aegis-upload--error.html").Replace("{errorMessage}", "the number of columns that your file has.").Replace("{fileName}", fileName));
        }
        public static void DataUploadSuccessMail(string numRows, string fileName, string userMail)
        {
            MailService.SendMail(
                            "hedging@aegis-energy.com",
                            new string[] { userMail },
                            "Aegis data upload process successful",
                            File.ReadAllText(Directory.GetCurrentDirectory()+"/email-templates/aegis-upload--successful.html").Replace("{xx}", numRows).Replace("{fileName}", fileName));
        }
    }
}