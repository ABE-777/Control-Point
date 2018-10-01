using Microsoft.AspNetCore.Mvc;
using System;
using LinqToDB;
using WebCreek.Framework.Auth0.ManagementAPI.ManagementAPIClient;
using WebCreek.Framework.Data;
using WebCreek.Framework.DIObjects;
using WebCreek.Framework.Models;
using WebCreek.Framework.DataModel;
using System.Linq;

namespace WebCreek.Framework.Controllers
{
    /// <summary>
    /// Controller for managing Aegis users over Auth0 Management API
    /// </summary>
    //============================================================
    //Revision History
    //Date        Author          Description
    //07/10/2017  IvanK             Created
    //============================================================
     [Route("api/UsersMaintenance/[action]")]
    public class UsersMaintenanceController
    {
        /// <summary>
        /// Retrieves Aegis users collection from Auth0 database
        /// </summary>
        //============================================================
        //Revision History
        //Date        Author          Description
        //07/10/2017  IvanK             Created
        //07/21/2017  IvanK             Modified - hooked to Aegis db
        //============================================================
        [HttpGet]
        public virtual object Users([FromServices] IQueryParams param)
        {
            using (var dbConnection = new SysDB())
            {
                var query = from user in dbConnection.SysUser
                            select new { UserID = user.UserID,
                                         UserName = user.UserName,
                                         StatusID = user.StatusID,
                                         LastName = user.LastName,
                                         FirstName = user.FirstName,
                                         Email = user.Email,

                                         //As Rodrigo said user company has to be separate varchar of user - 07.24.2017
                                         //Company = dbConnection.SysCompany
                                         //               .First(company => company.CompanyID == user.CompanyID)
                                         //                   .CompanyName,

                                         Company = user.Company,
                                         CreatedOn = user.CreatedOn,
                                         Role = dbConnection.SysRole
                                                        .First(role => role.RoleID == 
                                                            (dbConnection.SysUserrole
                                                                .First(userRole => userRole.UserID == user.UserID)
                                                                    .RoleID))
                                                                        .RoleName};
                var data = DataHelper.GetData(query, param);
                return data.Data;
            }
        }

        /// <summary>
        /// Retrieves single Aegis user entity by user's Id
        /// </summary>
        //============================================================
        //Revision History
        //Date        Author          Description
        //07/20/2017  IvanK             Created
        //============================================================
        [HttpGet]
        [Route("{id}")]
        public virtual object User(int userId, [FromServices] IQueryParams param)
        {
            using (var dbConnection = new SysDB())
            {
                var query = from user in dbConnection.SysUser
                            where user.UserID == userId
                            select new
                            {
                                UserID = user.UserID,
                                UserName = user.UserName,
                                Status = dbConnection.SysStatus
                                                        .First(status => status.StatusID == user.StatusID)
                                                            .Description,
                                LastName = user.LastName,
                                FirstName = user.FirstName,
                                Email = user.Email,
                                Company = dbConnection.SysCompany
                                                        .First(company => company.CompanyID == user.CompanyID)
                                                            .CompanyName,
                                CreatedOn = user.CreatedOn,
                                Role = dbConnection.SysRole
                                                        .First(role => role.RoleID ==
                                                            (dbConnection.SysUserrole
                                                                .First(userRole => userRole.UserID == user.UserID)
                                                                    .RoleID))
                                                                        .RoleName
                            };
                var data = DataHelper.GetData(query, param);
                return data.Data;
            }
        }

        /// <summary>
        /// Retrieves single Aegis user entity by user's Id
        /// </summary>
        //============================================================
        //Revision History
        //Date        Author          Description
        //07/20/2017  IvanK             Created
        //============================================================
        [HttpGet]
        [Route("{userId}")]
        public virtual object Auth0User(int userId, [FromServices] IQueryParams param)
        {
            using (var dbConnection = new SysDB())
            {
                var targetUserEmail = dbConnection.SysUser.First(user => user.UserID == userId).Email;
                return new ManagementApiClient().GetUserByEmail(targetUserEmail);
            }
        }


        /// <summary>
        /// Checks if user already exists in db
        /// </summary>
        //============================================================
        //Revision History
        //Date        Author          Description
        //07/21/2017  IvanK             Created
        //============================================================
        [HttpPost]
        public virtual object CheckUserExists([FromBody]NewUser newUser, [FromServices] IQueryParams param)
        {
            bool isUserExistant = false;
            using (var dbConnection = new SysDB())
            {
                isUserExistant = dbConnection.SysUser.Any(user => user.Email == newUser.Email);
            }
            return new { userExistant =  isUserExistant };
        }

        /// <summary>
        /// Creates new Aegis user in database
        /// </summary>
        //============================================================
        //Revision History
        //Date        Author          Description
        //07/11/2017  IvanK             Created
        //============================================================
        [HttpPost]
        public virtual object NewUser([FromBody]NewUser newUser)
        {
            using (var dbConnection = new SysDB())
            {

                dbConnection.Insert<SysUser>(new SysUser
                {
                    UserName = newUser.firstName + newUser.lastName,
                    FirstName = newUser.firstName,
                    LastName = newUser.lastName,

                    //TBD
                    StatusID = 0,
                    CompanyID = 1,
                    //Role = newUser.role,
                    //Clients = newUser.clients,

                    Email = newUser.Email,

                    //Need to find a way to not initialize property that have default values
                    CreatedOn = DateTime.Now,
                    UpdatedOn = DateTime.Now,

                    //TBD
                    CreatedBy = "dev",
                    UpdatedBy = "dev",
                });

                dbConnection.Insert<SysUserrole>(new SysUserrole
                {
                    UserID = dbConnection.SysUser.First(user => user.Email == newUser.Email).UserID,
                    RoleID = dbConnection.SysRole.First(role => role.RoleName == newUser.role).RoleID,

                    //Need to find a way to not initialize property that have default values
                    CreatedOn = DateTime.Now,
                    UpdatedOn = DateTime.Now,

                    //!!!
                    CreatedBy = "dev",
                    UpdatedBy = "dev",
                });
            }

            new ManagementApiClient().CreateUser(newUser);
            
            //new AuthenticationApiClient().RequestChangePassword(newUser.email);
            return new OkObjectResult("User created");
        }

        /// <summary>
        /// Edits Aegis user in Auth0 database
        /// </summary>
        //============================================================
        //Revision History
        //Date        Author          Description
        //07/20/2017  IvanK             Created
        //============================================================
        [HttpPost]
        public virtual object EditUser([FromBody]NewUser editedUser)
        {
            //Need to set clients somehow
            using (var dbConnection = new SysDB())
            {
                var targetUserId = dbConnection.GetTable<SysUser>().First(user => user.Email == editedUser.Email).UserID;
                dbConnection.GetTable<SysUser>().Where(user => user.UserID == targetUserId)
                    .Set(user => user.FirstName, user => editedUser.firstName)
                    .Set(user => user.LastName, user => editedUser.lastName)
                    .Set(user => user.UpdatedOn, user => DateTime.Now)
                    .Update();
                dbConnection.GetTable<SysUserrole>().Where(userrole => userrole.UserID == targetUserId)
                    .Set(userrole => userrole.RoleID, userrole => dbConnection.SysRole
                                                        .First(role => role.RoleName == editedUser.role).RoleID)
                    .Set(userrole => userrole.UpdatedOn, userrole => DateTime.Now)
                    .Update();
            }
            return new OkObjectResult("User updated");
        }

        /// <summary>
        /// Deletes user in Auth0 database
        /// </summary>
        //============================================================
        //Revision History
        //Date        Author          Description
        //07/12/2017  IvanK             Created
        //============================================================
        [HttpDelete]
        [Route("{userId}")]
        public virtual object DeleteUser(int userId)
        {
            string targetUserEmail = null;

            using (var dbConnection = new SysDB())
            {
                targetUserEmail = dbConnection.GetTable<SysUser>().First(user => user.UserID == userId).Email;
                dbConnection.GetTable<SysUserrole>()
                    .Where(userrole => userrole.UserID == userId)
                    .Delete();
                dbConnection.GetTable<SysUser>()
                    .Where(user => user.UserID == userId)
                    .Delete();
            }

            var targetAuth0UserId = new ManagementApiClient().GetUsers().First(auth0User => auth0User.Email == targetUserEmail).UserId;
            new ManagementApiClient().DeleteUser(targetAuth0UserId);
            return new OkObjectResult("User deleted");
        }
    }
}