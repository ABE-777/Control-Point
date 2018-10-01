using System.ComponentModel.DataAnnotations;

namespace WebAPI.Models.Requests
{
    public class UserCredentialsModel
    {
        [Required]
        public string Email { get; set; }

        [Required]
        [DataType(DataType.Password)]
        public string Password { get; set; }
    }
}
