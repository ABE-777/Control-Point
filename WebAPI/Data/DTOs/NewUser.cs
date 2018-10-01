using System.ComponentModel.DataAnnotations;
using WebAPI.Data;
using WebCreek.Framework.Models;

namespace WebAPI.Data.DTOs
{
    public class NewUser : IHasEmail
    {
        [Required]
        [RegularExpression(@"^[A-Za-z\s]{1,}[\.]{0,1}[A-Za-z\s]{0,}$")]
        public string Name { get; set; }

        [Required]
        public int RoleId { get; set; }

        //new user could be a classroom teacher
        public string ClassroomName { get; set; }

        // we need to create new user with pending status
        public static User ConvertToCPUser(NewUser newUser)
            => new User() { Name = newUser.Name, Email = newUser.Email, StatusId = 2 };
        //{
        //    var cpUser = new User();
        //    cpUser.Name = newUser.Name;
        //    cpUser.Email = newUser.Email;
        //    cpUser.StatusId = 1;
        //    return cpUser;
        //}
    }
}
