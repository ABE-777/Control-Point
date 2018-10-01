using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using WebAPI.Data;

namespace WebAPI.Security
{
    public interface IUserIdentity
    {
        Task<User> GetCurrentUser();

        bool IsInRole(string role);

        Task<int?> GetSchoolId();
    }
}
