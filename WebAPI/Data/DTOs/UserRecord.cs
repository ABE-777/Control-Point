using WebCreek.Framework.Models;

namespace WebAPI.Data.DTOs
{
    public class UserRecord : IHasEmail
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public int StatusId { get; set; }
        public int RoleId { get; set; }
        public string RoleName { get; set; }
        public string StatusName { get; set; }
        public string ClassroomName { get; set; }
        public bool? IsMainAdmin { get; set; }
    }
}