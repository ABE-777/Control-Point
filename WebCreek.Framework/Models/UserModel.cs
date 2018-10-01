using System;
using System.Collections.Generic;
using System.Linq;
using WebCreek.Framework.DataModel;

namespace WebCreek.Framework.Models
{
    public class UserModel : SysUser
    {
        public List<int> UserRoles { get; set; }

        public void GetRoles(SysDB db)
        {
            var query = from ur in db.SysUserrole
                        where ur.UserID == UserID
                        select ur;

            UserRoles = query.Select(x => x.RoleID).ToList();

        }

    }
}
