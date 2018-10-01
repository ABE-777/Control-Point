namespace WebCreek.Framework.Models
{
    public class NewUser : IHasEmail
    {
        public string firstName;
        public string lastName;
        public string company;
        public string role;
        public object[] clients;

        public string createdBy;
        public string updatedBy;
    }
}