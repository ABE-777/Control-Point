using System;
namespace WebCreek.Framework.Models
{
    public class UserRecord
    {
        public int UserID { get; set; }
        public string UserName { get; set; }
        public bool? Status { get; set; }
        public string LastName { get; set; }
        public string FirstName { get; set; }
        public string Email { get; set; }
        public string Company { get; set; } 
        public DateTime CreatedOn { get; set; }
        public string Role { get; set; }
    }
}
