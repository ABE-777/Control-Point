/*
 * 
 * ==================================================================================
 * Revision History
 * ==================================================================================
 * Rev     Date           Author           Description
 * ==================================================================================
 * 1       ???             ???             Created
 * 2     25/03/2018      AlexBodnar        Add method GetScannerLane(int userId) for scanner
 */


using LinqToDB;
using LinqToDB.Data;
using Microsoft.EntityFrameworkCore.Extensions.Internal;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Linq.Dynamic.Core;
using WebAPI.Data.DTOs;
using static WebAPI.Helpers.Enums;
using Microsoft.Extensions.Logging;
using WebAPI.Controllers;
using WebCreek.Framework.LogProvider;
using WebAPI.Models.Responses;
using WebAPI.Models.Requests;
using System.Threading.Tasks;
using WebAPI.Helpers;
using WebCreek.Framework.Auth0.ManagementAPI.ManagementAPIClient;
using WebAPI.Helpers.HubModels;
using WebAPI.Security;
using Newtonsoft.Json;
using Newtonsoft.Json.Linq;
using System.Globalization;

namespace WebAPI.Data
{
    public partial class DataSeed : IDisposable       
    {
        ControlPointDB db = new ControlPointDB();

        public void Dispose()
        {
            db.Close();
        }

        private ILogger<BaseController> logger;
        public DataSeed()
        {
        }

        public DataSeed(ILogger<BaseController> logger)
        {
            this.logger = logger;
        }

        #region Role
        public List<Role> GetRoles()
        {
            using (var db = new ControlPointDB())
            {
                var query = db.Role.Where(r => r.IsSelectable).OrderBy(r => r.Name).Select(role => role);
                return query.ToList();
            }                
        }

        public int GetRoleId(int userId)
        {
            var query = from u in db.User
                        join u2r in db.Users2Roles on u.Id equals u2r.UserId
                        join r in db.Role on u2r.RoleId equals r.Id
                        where u.Id == userId
                        select r.Id;

            return query.FirstOrDefault();
        }
        #endregion

        #region User

        public string GetRoleIdByEmail(string email)
        {
            using (var db = new ControlPointDB())
            {
                var query = from u in db.User
                            join u2r in db.Users2Roles on u.Id equals u2r.UserId
                            join r in db.Role on u2r.RoleId equals r.Id
                            where u.Email == email
                            select r.Name;

                return query.FirstOrDefault();
            }
        }

        public User GetUserById(int userId) => db.User.FirstOrDefault(user => user.Id == userId);

        public Role GetUserRole(User user)
        {
            using (var db = new ControlPointDB())
            {
                return db.Role
                    .FirstOrDefault(role => role.Id == db.Users2Roles.
                                                            FirstOrDefault(userRole => userRole.UserId == user.Id).RoleId);
            }
                
        } 

        public int? GetUserSchoolId(int userId)
        {
            return db.SchoolPersonal.Where(s => s.Id == userId).Select(s=> s.SchoolId).FirstOrDefault();
        }

        public ObjectManipulationResult CreateUser(User user, int roleId, out int userId)
        {
            userId = 0;          

            var result = (from p in db.User
                          where p.Email == user.Email
                          select p).FirstOrDefault();

            if (result != null)
            {
                userId = result.Id;
                if (result.StatusId == 2)
                    return ObjectManipulationResult.ExistPending; 
                return ObjectManipulationResult.Exists;
            }
            else
            {
                try
                {
                    db.BeginTransaction();
                    userId = Convert.ToInt32(db.InsertWithIdentity(user));
                    
                    Users2Roles ur = new Users2Roles
                    {
                        UserId = userId,
                        RoleId = roleId
                    };

                    db.Insert(ur);

                    var newUser = new NewUser()
                    {
                        Email = user.Email
                    };

                    using (var managementClient = new ManagementApiClient())
                    {
                        var userAuth0 = managementClient.CreateUser(newUser);
                        if (userAuth0 != null)
                        {
                            managementClient.RequestVerifyEmail(userAuth0?.UserId);
                        }
                    }

                    db.CommitTransaction();
                    return ObjectManipulationResult.Success;
                }
                catch (Exception e)
                {
                    db.RollbackTransaction();
                    return ObjectManipulationResult.ErrorOccured;
                }
            }
        }
        
        public EditUserModel GetUser(int id)
        {
            var query = from u in db.User
                        join u2r in db.Users2Roles on u.Id equals u2r.UserId
                        where u.Id == id
                        select new EditUserModel
                        {
                            Id = u.Id,
                            Name = u.Name,
                            RoleId = u2r.RoleId,
                            Email = u.Email
                        };

            EditUserModel editUser = query.FirstOrDefault();

            if(editUser != null)
            {
                editUser.ClassroomId = (editUser.RoleId == 4) ? db.Classroom.Where(c => c.TeacherId == id).FirstOrDefault()?.Id : null;
                editUser.ClassroomName = (editUser.RoleId == 4) ? db.Classroom.Where(c => c.TeacherId == id).FirstOrDefault()?.Name : null;
            }            

            return editUser;
        }

        public User GetUserByEmail(string email)
            => db.User.FirstOrDefault(user => user.Email == email);

        public User GetUserByAuth0Id(string auth0Id)
            => db.User.FirstOrDefault(user => user.Auth0Id == auth0Id);

        public UserInfoForHeader GetUserInfo(string email)
        {
            using (var db = new ControlPointDB())
            {
                UserInfoForHeader user = (from u in db.User
                                          join u2r in db.Users2Roles on u.Id equals u2r.UserId
                                          join r in db.Role on u2r.RoleId equals r.Id
                                          join sp in db.SchoolPersonal on u.Id equals sp.Id into ljsp
                                          from lpsp in ljsp.DefaultIfEmpty()
                                          join s in db.School on lpsp.SchoolId equals s.Id into ljs
                                          from lps in ljs.DefaultIfEmpty()
                                          where u.Email == email
                                          select new UserInfoForHeader
                                          {
                                              UserId = u.Id,
                                              Username = u.Name,
                                              Email = u.Email,
                                              Role = r.Name,
                                              SchoolName = lps.Name
                                          }).FirstOrDefault();
                return user;
            }
                
        }
       
        public UserAccount GetSchoolUserById(int id, int schoolId)
        {
            var user = db.User.Where(u => u.Id == id).
                Join(db.Users2Roles, u => u.Id, role => role.UserId, (u, role) => new { u, role })
                .Select(record
                    => new UserAccount()
                    {
                        Id = record.u.Id,
                        Name = record.u.Name,
                        Email = record.u.Email,
                        StatusId = record.u.StatusId,
                        RoleId = record.role.RoleId                       
                    }).FirstOrDefault();

            user.RoleName = db.Role.FirstOrDefault(r => r.Id == user.RoleId).Name;
            user.Roles = db.Role.Where(r => r.IsSelectable).ToList();
            user.CurrentClassroom = (user.RoleName == "Classroom Teacher") ? db.Classroom.FirstOrDefault(c => c.TeacherId == id && c.SchoolId == schoolId) : null;
            user.Classrooms = (user.RoleName == "Classroom Teacher") ? db.Classroom.Where(c => c.SchoolId == schoolId && c.TeacherId == null).ToList() : null;


            return user;
        }

        public List<UserRecord> GetUserRecords(int? schoolId)
        {
            using (var db = new ControlPointDB())
            {
                // we should not get Parents in user listing
                var users = from u in db.User
                            join u2r in db.Users2Roles on u.Id equals u2r.UserId
                            join sp in db.SchoolPersonal on u.Id equals sp.Id
                            where u2r.RoleId != 6 && sp.SchoolId == schoolId
                            from s in db.UserStatus.Where(q => q.Id == u.StatusId).DefaultIfEmpty()
                            from ur in db.Users2Roles.Where(q => q.UserId == u.Id).DefaultIfEmpty()
                            from r in db.Role.Where(q => q.Id == ur.RoleId).DefaultIfEmpty()
                            from c in db.Classroom.Where(q => q.TeacherId == u.Id).DefaultIfEmpty()
                            select new UserRecord
                            {
                                Id = u.Id,
                                Name = u.Name,
                                Email = u.Email,
                                StatusId = u.StatusId,
                                StatusName = s.Name,
                                RoleId = ur.RoleId,
                                RoleName = r.Name,
                                ClassroomName = c.Name,
                                IsMainAdmin = sp.IsMainAdmin
                            };

                return users.ToList();
            }                
        }

        public ObjectManipulationResult AddNewUser(NewUser newUser, int? schoolId)
        {
            try
            {
                if (GetUserByEmail(newUser.Email) == null)
                {
                    var userInsertResult = db.Insert(NewUser.ConvertToCPUser(newUser));

                    var targetUser = db.User.First(user => user.Email == newUser.Email);

                    var userRoleInsertResult = db.Insert(new Users2Roles { UserId = targetUser.Id, RoleId = newUser.RoleId });

                    if(newUser.RoleId != 6)
                    {
                        db.Insert(new SchoolPersonal { Id = targetUser.Id, SchoolId = schoolId ?? 0, IsMainAdmin = false });
                    }

                    if (newUser.RoleId == 4)
                    {
                        db.Classroom.Where(c => c.Name == newUser.ClassroomName && c.SchoolId == schoolId).Set(c => c.TeacherId, targetUser.Id).Update();

                    }

                    return ObjectManipulationResult.Success;
                }
                else
                {
                    return ObjectManipulationResult.Exists;
                }

            } 
            catch (Exception e)
            {

                logger.LogError((int)LoggingEvents.INSERT_ITEM, e.Message, "Add new user", newUser);
                return ObjectManipulationResult.ErrorOccured;
            }
        }

        public ObjectManipulationResult EditUserEmail(User user)
        {
            try
            {
                db.User.Where(u => u.Id == user.Id).Set(u => u.Email, user.Email).Update();
            }
            catch (Exception e)
            {
                logger.LogError((int)LoggingEvents.UPDATE_ITEM, e.Message, "Edit user Email", user);
                return ObjectManipulationResult.ErrorOccured;
            }

            return ObjectManipulationResult.Success;
        }

        public ObjectManipulationResult EditUsername(int userId, string username)
        {
            try
            {
                if (db.User.FirstOrDefault(u => u.Id == userId) != null)
                {
                    db.User.Where(u => u.Id == userId).Set(u => u.Name, username).Update();
                }
                else
                {
                    return ObjectManipulationResult.NotFound;
                }

            }
            catch (Exception e)
            {
                logger.LogError((int)LoggingEvents.UPDATE_ITEM, e.Message, "Edit username", userId);
                return ObjectManipulationResult.ErrorOccured;
            }

            return ObjectManipulationResult.Success;
        }

        public ObjectManipulationResult EditUserPassword(int userId, string email, string password)
        {
            try
            {
                if (db.User.FirstOrDefault(u => u.Id == userId) != null)
                {
                    string salt;
                    string hashedPasswpord = EncryptionService.Encrypt(password, out salt);

                    using (ManagementApiClient managementClient = new ManagementApiClient())
                    {
                        var Auth0user = managementClient.GetUserByEmail(email);

                        if (Auth0user != null)
                        {
                            db.User.Where(u => u.Id == userId).Set(u => u.PasswordHash, hashedPasswpord).Set(u => u.PasswordSalt, salt).Set(u => u.Auth0Id, Auth0user.UserId).Update();
                        }
                    }

                    return ObjectManipulationResult.Success;
                }
                else
                {
                    return ObjectManipulationResult.NotFound;
                }
            }
            catch (Exception e)
            {
                logger.LogError((int)LoggingEvents.UPDATE_ITEM, e.Message, "Edit user password", userId);
                return ObjectManipulationResult.ErrorOccured;
            }
        }

        public ObjectManipulationResult EditUser(EditUserModel editedUser, int schoolId)
        {
            db.BeginTransaction();
            try
            {
                if (db.User.FirstOrDefault(u => u.Id == editedUser.Id) != null)
                {
                    db.User.Where(p => p.Id == editedUser.Id)
                                .Set(p => p.Name, editedUser.Name)
                                .Update();

                    db.Users2Roles.Where(p => p.UserId == editedUser.Id)
                               .Set(p => p.RoleId, editedUser.RoleId)
                               .Update();

                    if (editedUser.RoleId == 4)//Role is classroom teacher
                    {
                        db.Classroom.Where(p => p.Id == editedUser.ClassroomId && p.SchoolId == schoolId)
                            .Set(p => p.TeacherId, editedUser.Id)
                               .Update();
                    }
                    db.CommitTransaction();

                    return ObjectManipulationResult.Success;
                }
                else
                {
                    return ObjectManipulationResult.NotFound;
                }
            }
            catch (Exception e)
            {
                db.RollbackTransaction();
                logger.LogError((int)LoggingEvents.UPDATE_ITEM, e.Message, "Edit user", editedUser);
                return ObjectManipulationResult.ErrorOccured;
            }
        }

        public ObjectManipulationResult DeleteUser(string email)
        {
            try
            {
                User targetUser = db.User.First(user => user.Email == email);

                int roleId = (from u in db.User
                              join u2r in db.Users2Roles on u.Id equals u2r.UserId
                              join r in db.Role on u2r.RoleId equals r.Id
                              where u.Email == email
                              select r.Id).First();

                //deleting classroom teacher
                if (roleId == 4)
                {
                    int? i = null;
                    db.Classroom
                        .Where(c => c.TeacherId == targetUser.Id)
                        .Set(c => c.TeacherId, i)
                        .Update();
                    db.BeginTransaction();
                    db.SchoolPersonal.Where(sp => sp.Id == targetUser.Id).Delete();
                    db.Users2Roles.Where(u2r => u2r.UserId == targetUser.Id).Delete();
                    db.Impersonation.Delete(s => s.ImpersonatedUserId == targetUser.Id || s.ImpersonatorUserId == targetUser.Id);
                    db.User.Where(u => u.Id == targetUser.Id).Delete();

                    db.CommitTransaction();
                }
                //deleting dismissal teacher
                if (roleId == 5)
                {
                    db.BeginTransaction();
                    db.SchoolPersonal.Where(sp => sp.Id == targetUser.Id).Delete();
                    db.Users2Roles.Where(u2r => u2r.UserId == targetUser.Id).Delete();
                    db.Impersonation.Delete(s => s.ImpersonatedUserId == targetUser.Id || s.ImpersonatorUserId == targetUser.Id);
                    db.User.Where(u => u.Id == targetUser.Id).Delete();

                    db.CommitTransaction();
                }
                //deleting scanner
                if (roleId == 3)
                {
                    db.BeginTransaction();
                    db.SchoolPersonal.Where(sp => sp.Id == targetUser.Id).Delete();
                    db.Users2Roles.Where(u2r => u2r.UserId == targetUser.Id).Delete();
                    db.Impersonation.Delete(s => s.ImpersonatedUserId == targetUser.Id || s.ImpersonatorUserId == targetUser.Id);
                    db.User.Where(u => u.Id == targetUser.Id).Delete();
                    db.CommitTransaction();
                }
                //deleting Main School Admin
                if (roleId == 2)
                {
                    //first we need to check if it is not main school admin
                    bool isMainAdmin = (from u in db.User
                                        join sp in db.SchoolPersonal on u.Id equals sp.Id
                                        where u.Id == targetUser.Id
                                        select sp.IsMainAdmin == true).First();

                    if (isMainAdmin)
                    {
                        return ObjectManipulationResult.Exists;
                    }
                    else
                    {
                        db.BeginTransaction();
                        db.SchoolPersonal.Where(sp => sp.Id == targetUser.Id).Delete();
                        db.Users2Roles.Where(u2r => u2r.UserId == targetUser.Id).Delete();
                        db.Impersonation.Delete(s => s.ImpersonatedUserId == targetUser.Id || s.ImpersonatorUserId == targetUser.Id);
                        db.User.Where(u => u.Id == targetUser.Id).Delete();
                        db.CommitTransaction();
                        return ObjectManipulationResult.Success;
                    }
                }

                return ObjectManipulationResult.Success;
            }
            catch (Exception e)
            {
                db.RollbackTransaction();
                logger.LogError((int)LoggingEvents.INSERT_ITEM, e.Message, "Delete user by email", email);
                return ObjectManipulationResult.ErrorOccured;
            }
        }

        public ObjectManipulationResult DeleteParent(int parentId, string parentEmail)
        {
            try
            {
                db.Users2Roles.Where(u2r => u2r.UserId == parentId).Delete();
                db.User.Where(u => u.Id == parentId).Delete();

                //delete From Auth0
                using (var managementClient = new ManagementApiClient())
                {
                    var Auth0user = managementClient.GetUserByEmail(parentEmail);
                    if (Auth0user != null)
                        managementClient.DeleteUser(Auth0user.UserId);
                }
                return ObjectManipulationResult.Success;
            }
            catch (Exception ex) {
                logger.LogError((int)LoggingEvents.DELETE_ITEM, ex.Message, "Delete Parent", parentEmail);
                return ObjectManipulationResult.ErrorOccured;
            }

           
        }

        public ObjectManipulationResult ImpersonateUser(TemporaryAccessModel model, string currentUsersName)
        {
            try
            {
                var impersonatorUser = GetUserByEmail(model.Email);
                var impersonatedUser = GetUserByEmail(model.ImpersonatedUserEmail);
                
                if (impersonatorUser == null)
                {
                    if (impersonatedUser != null)
                    {
                        User newUserToCreate = new User
                        {
                            Email = model.Email,
                            StatusId = 2,
                            IsInstructionsChecked = false
                        };

                        var createdUserId = db.InsertWithInt32Identity(newUserToCreate);

                        //Create user in Auth0
                        using (var managementClient = new ManagementApiClient())
                        {
                            var userAuth0 = managementClient.CreateUser(model);
                            if (userAuth0 != null)
                            {
                                managementClient.RequestVerifyEmail(userAuth0?.UserId);
                            }
                        }

                        Impersonation imp = new Impersonation
                        {
                            ImpersonatorUserId = createdUserId,
                            ImpersonatedUserId = impersonatedUser.Id,
                            ValidFrom = model.ValidFrom,
                            ValidTo = model.ValidTo,
                            CreatedBy = currentUsersName,
                            CreatedOn = DateTime.Now
                        };

                        db.Insert(imp);

                        return ObjectManipulationResult.Success;
                    }
                    else
                    {
                        return ObjectManipulationResult.NotFound;
                    }
                }
                else
                {
                    if (impersonatedUser != null)
                    {
                        var impersonation = db.Impersonation.FirstOrDefault(s => s.ImpersonatorUserId == impersonatorUser.Id && s.ImpersonatedUserId == impersonatedUser.Id);

                        if (impersonation != null)
                        {
                            impersonation.ValidFrom = model.ValidFrom;
                            impersonation.ValidTo = model.ValidTo;
                            impersonation.UpdatedBy = currentUsersName;
                            impersonation.UpdatedOn = DateTime.Now;

                            db.Update(impersonation);
                        }
                        else
                        {
                            Impersonation imp = new Impersonation
                            {
                                ImpersonatorUserId = impersonatorUser.Id,
                                ImpersonatedUserId = impersonatedUser.Id,
                                ValidFrom = model.ValidFrom,
                                ValidTo = model.ValidTo,
                                CreatedBy = currentUsersName,
                                CreatedOn = DateTime.Now
                            };

                            db.Insert(imp);
                        }

                        return ObjectManipulationResult.Success;
                    }
                    else
                    {
                        return ObjectManipulationResult.NotFound;
                    }
                }
            }
            catch (Exception e)
            {
                logger.LogError((int)LoggingEvents.INSERT_ITEM, e.Message, "Impersonate user", model);
                return ObjectManipulationResult.ErrorOccured;
            }
        }

        /// <summary>
        /// Authenticates user or if user has temporary access logins as other user
        /// </summary>
        /// <param name="email">Must be username</param>
        /// <param name="password">Must be password</param>
        /// <param name="token">Out parametr. Token value if authenticated successfully, othewise null</param>
        /// <returns>Returns message of authentication result</returns>
        public string Authenticate(string email, string password, out string token)
        {
            token = null;
            var user = db.User.FirstOrDefault(s => s.Email.Equals(email));

            if (user != null)
            {
                if (user.StatusId != 4)
                {
                    if (password == EncryptionService.Decrypt(user.PasswordHash, user.PasswordSalt))
                    {
                        var impersonationInfo = db.Impersonation.FirstOrDefault(s => s.ImpersonatorUserId.Equals(user.Id));

                        if (impersonationInfo != null)
                        {
                            //is impersonator

                            if (impersonationInfo.ValidFrom > DateTime.Now)
                            {
                                //Date is not reached
                                return "Temporary access date is not reached yet. You'll be able to authorise from " + impersonationInfo.ValidFrom ;
                            }
                            else if (DateTime.Now > impersonationInfo.ValidTo)
                            {
                                //Is expired
                                db.Impersonation.Delete(s => s.ImpersonatorUserId.Equals(user.Id));

                                //Deleting users from Auth0
                                using (ManagementApiClient managementClient = new ManagementApiClient())
                                {
                                    var Auth0user = managementClient.GetUserByEmail(email);

                                    if (Auth0user != null)
                                    {
                                        managementClient.DeleteUser(Auth0user.UserId);
                                    }
                                }

                                db.User.Delete(s => s.Email.Equals(email));
                                return "Temporary access is expired. Your user was delited from system.";
                            }
                            else
                            {
                                //Is in Date
                                using (var managementClient = new ManagementApiClient())
                                {
                                    User impersonatedUser = db.User.FirstOrDefault(s => s.Id.Equals(impersonationInfo.ImpersonatedUserId));

                                    if (impersonatedUser != null)
                                    {
                                        if (impersonatedUser.StatusId == 4)
                                        {
                                            //Impersonated user account is suspended
                                            return "Impersonated user account is suspended";
                                        }
                                        else
                                        {

                                            //Authorize user in auth0 with impersonated user credentials
                                            var result = managementClient.AuthenticateUser(impersonatedUser.Email, EncryptionService.Decrypt(impersonatedUser.PasswordHash, impersonatedUser.PasswordSalt));

                                            if (result.StatusCode == System.Net.HttpStatusCode.OK)
                                            {
                                                var jobj = (JObject)JsonConvert.DeserializeObject(result.Content);

                                                 token = "Bearer " + jobj.Children().Cast<JProperty>().Where(s => s.Name == "access_token").Select(s => s.Value).FirstOrDefault().ToString();

                                                return "Successfully authenticated";
                                            }
                                            else
                                            {
                                                //Authentication failed
                                                return "Authentication failed";
                                            }
                                        }

                                    }
                                    else
                                    {
                                        //Impersonated user not exists
                                        return "Impersonated user not exists";
                                    }
                                }
                            }
                        }
                        else
                        {
                            //is not impersonator

                            //Authorize user in auth0 with impersonated user credentials
                            using (ManagementApiClient managementClient = new ManagementApiClient())
                            {
                                var result = managementClient.AuthenticateUser(email, password);

                                if (result.StatusCode == System.Net.HttpStatusCode.OK)
                                {
                                    var content = (JObject)JsonConvert.DeserializeObject(result.Content);

                                    token = "Bearer " + content.Children().Cast<JProperty>().Where(s => s.Name == "access_token").Select(s => s.Value).FirstOrDefault().ToString();

                                    return "Successfully authenticated";
                                }
                                else
                                {
                                    //Authentication failed
                                    return "Authentication failed";
                                }
                            }
                        }
                    }
                    else
                    {
                        //Password is wrong
                        return "Password is wrong";
                    }
                }
                else
                {
                    //User is suspended
                    return "User is suspended";
                }
            }
            else
            {
                return "User not found";
            }
        }

        public List<Classroom> GetUnassignedClassRooms(int? schoolId)
        {
            return db.Classroom.Where(c => c.SchoolId == schoolId && c.TeacherId == null).OrderBy(c => c.Name).ToList();
        }

        public string GetUserEmail(int id)
        {
            return db.User.Where(u => u.Id == id).FirstOrDefault()?.Email;
        }

        public ObjectManipulationResult SetSuspendedStatus(string email)
        {
            try
            {

                int id = GetUserByEmail(email).Id;

                db.BeginTransaction();

                db.User.Where(u => u.Email == email).Set(u => u.StatusId, 4).Update();

                db.CommitTransaction();
                return ObjectManipulationResult.Success;
            }
            catch (Exception e)
            {
                db.RollbackTransaction();
                logger.LogError((int)LoggingEvents.INSERT_ITEM, e.Message, "Suspend user", email);
                return ObjectManipulationResult.ErrorOccured;
            }
        }

        public bool IsUserSchoolAdmin(string email)
        {
           return Convert.ToBoolean( (from u in db.User
                                     join sp in db.SchoolPersonal on u.Id equals sp.Id
                                     where u.Email == email
                                     select sp.IsMainAdmin).FirstOrDefault());
            
        }

        public ObjectManipulationResult SetActiveStatus(string email)
        {
            try
            {                
                db.BeginTransaction();
                db.User.Where(u => u.Email == email).Set(u => u.StatusId, 1).Update();                
                db.CommitTransaction();
                return ObjectManipulationResult.Success;
            }
            catch (Exception e)
            {
                db.RollbackTransaction();
                logger.LogError((int)LoggingEvents.INSERT_ITEM, e.Message, "Activate user", email);
                return ObjectManipulationResult.ErrorOccured;
            }
        }

        public ObjectManipulationResult ActivateUserAfterSetPassword(string email)
        {
            try
            {
                var user = db.User.FirstOrDefault(u => u.Email == email);
                if (user == null)
                    return ObjectManipulationResult.NotFound;
               
                db.User.Where(u=>u.Id==user.Id).Set(u=>u.StatusId, 1).Set(u=>u.IsPasswordSet, true).Update();
                var isUserParent = db.Users2Roles.FirstOrDefault(u => u.UserId == user.Id && u.RoleId == 6);// Role->6 Parent                                    
                if (isUserParent == null)
                    return ObjectManipulationResult.Success;
                
                db.Student.Where(u => u.ParentId == user.Id && u.StatusId==1).Set(u => u.StatusId, 2).Update();  // if 1-Pending then -> 2 - Without Cards                
                return ObjectManipulationResult.Success;
            }
            catch (Exception e)
            {                
                logger.LogError((int)LoggingEvents.INSERT_ITEM, e.Message, "Activate and Set Without Cards Status", email);
                return ObjectManipulationResult.ErrorOccured;
            }
        }
        
        public bool GetUserStatus(string email)
        {
            var user = db.User.FirstOrDefault(u => u.Email == email);
            if(user==null)
                return false;
            if (user?.StatusId == 4)  // Status "Suspended" has Id = 4
                return true;

            var schoolStatusId = (from sp in db.SchoolPersonal
                                  join sc in db.School on sp.SchoolId equals sc.Id
                                  where sp.Id == user.Id
                                  select sc.StatusId).FirstOrDefault();

            if (schoolStatusId == 2)
                return true;

            return false;
        }

        #endregion

        #region School

        public int? GetPrintingType(int? schoolId)
        {
            return db.School.Where(s => s.Id == schoolId).Select(s => s.CardPrintingTypeId).FirstOrDefault();
        }

        public string GetSchoolNameByUserId(int userId)
        {
            var query = from sp in db.SchoolPersonal
                        join s in db.School on sp.SchoolId equals s.Id
                        where sp.Id == userId
                        select s.Name;

            return query.FirstOrDefault();
        }

        public ObjectManipulationResult SetSchoolAccountsStatus(int schoolId, int statusId)
        {
            using (var db = new ControlPointDB())
            {
                var spCte = from sp in db.SchoolPersonal
                            where sp.SchoolId == schoolId
                            select sp.Id;

                var pCte = from u in db.User
                           join s in db.Student on u.Id equals s.ParentId
                           where s.SchoolId == schoolId
                           select u.Id;
                try
                {
                    db.BeginTransaction();

                    db.User.Where(u => spCte.Contains(u.Id)).Set(u => u.StatusId, statusId).Update();

                    db.User.Where(u => pCte.Contains(u.Id)).Set(u => u.StatusId, statusId).Update();

                    db.CommitTransaction();

                    return ObjectManipulationResult.Success;
                }
                catch (Exception e)
                {
                    db.RollbackTransaction();
                    logger.LogError((int)LoggingEvents.UPDATE_ITEM, e.Message, "Suspend school", schoolId);
                    return ObjectManipulationResult.ErrorOccured;
                }
            }
        }

        public School GetSchoolById(int id)
        {
            var query = (from s in db.School
                         where (s.Id == id)
                         select s).FirstOrDefault();

            return query;
        }

        public SchoolEditionData GetSchoolEditionData(int id)
        {
            SchoolEditionData schoolToEdit = new SchoolEditionData();

            var school= db.School.Where(s => s.Id == id).FirstOrDefault();

            if (school != null)
            {
                var admins = (from p in db.SchoolPersonal
                              join u in db.User on p.Id equals u.Id
                              join r in db.Users2Roles on u.Id equals r.UserId
                              where p.SchoolId == id && r.RoleId == 2
                              select new
                              {
                                  Id = u.Id,
                                  Name = u.Name,
                                  Email = u.Email,
                                  IsMainAdmin = p.IsMainAdmin
                              }).ToList();

                schoolToEdit.SchoolId = school.Id;
                schoolToEdit.SchoolName = school.Name;
                schoolToEdit.DistrictId = school.DistrictId;
                schoolToEdit.StatusId = school.StatusId;
                schoolToEdit.StateId = db.District.Where(s => s.Id == schoolToEdit.DistrictId).Select(s => s.StateId).FirstOrDefault();
                schoolToEdit.Districts = db.District.OrderBy(d => d.Name).ToList();
                schoolToEdit.States = db.State.OrderBy(s => s.Name).ToList();
                schoolToEdit.Statuses = db.SchoolStatus.ToList();

                if (admins?.Count > 0)
                {
                    schoolToEdit.MainAdminId = admins.Where(p => p.IsMainAdmin == true).FirstOrDefault().Id;
                    List<UserRecord> adminsList = new List<UserRecord>();
                    foreach (var item in admins)
                    {
                        UserRecord user = new UserRecord() { Id = item.Id, Name = item.Name, Email = item.Email };
                        adminsList.Add(user);
                    }
                    schoolToEdit.SchoolAdmins = adminsList;
                }

            }
            
            return schoolToEdit;
        }

        public SchoolCreationData GetSchoolCreationData()
        {
            return new SchoolCreationData {
                States = db.State.OrderBy(s => s.Name).ToList(),
                Districts = db.District.OrderBy(d => d.Name).ToList()
            };
        }

        public List<Schools> GetSchools(string searchText, out bool IsReadyToCreate)
        {
            IsReadyToCreate = !db.School.Any();

            if (!IsReadyToCreate)
            {
                var query = from s in db.School
                            from ss in db.SchoolStatus.Where(q => q.Id == s.StatusId).DefaultIfEmpty()
                            from sa in db.SchoolPersonal.Where(q => q.SchoolId == s.Id && q.IsMainAdmin == true).DefaultIfEmpty()
                            from us in db.User.Where(q => q.Id == sa.Id).DefaultIfEmpty()
                            from d in db.District.Where(q => q.Id == s.DistrictId).DefaultIfEmpty()
                            where (String.IsNullOrEmpty(searchText) || String.IsNullOrWhiteSpace(searchText))
                                || ((!String.IsNullOrEmpty(searchText) || !String.IsNullOrWhiteSpace(searchText)) && (s.Name.Contains(searchText) || us.Name.Contains(searchText) || d.Name.Contains(searchText)))
                            orderby s.Name descending
                            select new Schools
                            {
                                Id = s.Id,
                                Name = s.Name,
                                District = d.Name,
                                AdminName = us.Name,
                                AdminEmail = us.Email,
                                Status = ss.Name
                            };

                return query.ToList();
            }
            else
            {
                return null;
            }
        }

       

        public ClassroomAssignmentData GetClassroomAssignments(int schoolId)
        {
            if (GetSchoolById(schoolId) != null)
            {
                ClassroomAssignmentData classroomAssignmentData = new ClassroomAssignmentData
                {
                    AssignedClassrooms = (from assignedclassrooms in db.Classroom.Where(c => c.SchoolId == schoolId && c.TeacherId != null)
                                          from u in db.User.Where(us => us.Id == assignedclassrooms.TeacherId).DefaultIfEmpty()
                                          orderby u.Name
                                          select new ClassroomTeacherPair
                                          {
                                              TeacherId = assignedclassrooms.TeacherId.Value,
                                              TeacherName = u.Name,
                                              ClassroomId = assignedclassrooms.Id,
                                              ClassroomName = assignedclassrooms.Name
                                          }).ToList(),
                    NotAssignedClassrooms = db.Classroom.Where(c => c.SchoolId == schoolId && c.TeacherId == null).ToList(),
                    NotAssignedTeachers = (from sp in db.SchoolPersonal.Where(s => s.SchoolId == schoolId)
                                           join r in db.Role on "Classroom Teacher" equals r.Name
                                           from ur in db.Users2Roles.InnerJoin(ur => ur.RoleId == r.Id && ur.UserId == sp.Id)
                                           join us in db.User on sp.Id equals us.Id
                                           from c in db.Classroom.Where(q => q.TeacherId == sp.Id).DefaultIfEmpty()
                                           where us.StatusId != 0 && sp.IsMainAdmin != true && c.Name == null
                                           select new User
                                           {
                                               Id = us.Id,
                                               Name = us.Name
                                           }).ToList()
                };
                
                return classroomAssignmentData;
            }
            else
            {
                return null;
            }
        }

        public ObjectManipulationResult SetClassroomAssignments(int schoolId, List<ClassroomTeacherPair> assignedClassrooms)
        {
            try
            {
                if (GetSchoolById(schoolId) != null)
                {
                    db.BeginTransaction();

                    foreach (var classroom in assignedClassrooms)
                    {
                        db.Classroom.Where(p => p.SchoolId == schoolId && p.Id == classroom.ClassroomId)
                             .Set(p => p.TeacherId, classroom.TeacherId)
                             .Update();
                    }

                    db.CommitTransaction();
                    return ObjectManipulationResult.Success;
                }
                else
                {
                    logger.LogWarning((int)LoggingEvents.UPDATE_ITEM, "Assign classrooms to teachers: school not found", schoolId);
                    return ObjectManipulationResult.NotFound;
                }
            }
            catch (Exception e)
            {
                db.RollbackTransaction();
                logger.LogError((int)LoggingEvents.UPDATE_ITEM, e.Message, "Assign classrooms to teachers", assignedClassrooms);
                return ObjectManipulationResult.ErrorOccured;
            }
        }

        public ObjectManipulationResult ChangeSchoolStatus(int id, int StatusId)
        {
            try
            {
                if (GetSchoolById(id) != null)
                {
                    db.BeginTransaction();
                    db.School.Where(p => p.Id == id)
                            .Set(p => p.StatusId, StatusId)
                            .Update();

                    //ObjectManipulationResult res = ObjectManipulationResult.ErrorOccured;

                    //if(StatusId == 2)
                    //{
                    //    res = SetSchoolAccountsStatus(id, 4);
                    //}
                    
                    //if(StatusId == 1)
                    //{
                    //    res = SetSchoolAccountsStatus(id, 1);
                    //}

                    //if(res == ObjectManipulationResult.Success)
                    //{
                        db.CommitTransaction();
                        return ObjectManipulationResult.Success;
                    //}
                    //else
                    //{
                    //    db.RollbackTransaction();
                    //    return res;
                    //}                 
                        
                }
                else
                {
                    db.RollbackTransaction();
                    logger.LogWarning((int)LoggingEvents.UPDATE_ITEM, "Change school status", StatusId);
                    return ObjectManipulationResult.NotFound;
                }
            }
            catch (Exception e)
            {
                logger.LogError((int)LoggingEvents.UPDATE_ITEM, e.Message, "Change school status", StatusId);
                return ObjectManipulationResult.ErrorOccured;
            }
        }

        public ObjectManipulationResult CreateSchool(SchoolEditionData school)
        {
            db.BeginTransaction();

            try
            {
                var schoolAdmin = school.SchoolAdmins.First();
                var result = (from p in db.User
                              where p.Email == schoolAdmin.Email
                              select p).FirstOrDefault();

                if (result == null)
                {
                    int roleId = (from r in db.Role
                                  where r.Name == "School Admin"
                                  select r.Id).First();

                    int userId = Convert.ToInt32(db.InsertWithIdentity(new User
                    {
                        Name = schoolAdmin.Name,
                        Email = schoolAdmin.Email,
                        StatusId = 2                        
                        
                    }));

                    Users2Roles ur = new Users2Roles
                    {
                        UserId = userId,
                        RoleId = roleId
                    };

                    db.Insert(ur);

                    int schoolId = Convert.ToInt32(db.InsertWithIdentity( new School {
                        Name=school.SchoolName,
                        DistrictId=school.DistrictId,
                        StatusId = 1, // Status Active , Id = 1
                        CardPrintingTypeId = null,
                        LaneLogisticTypeId = null
                    }));

                    SchoolPersonal sa = new SchoolPersonal
                    {
                        Id = userId,
                        SchoolId = schoolId,
                        IsMainAdmin = true
                    };
                    db.Insert(sa);

                    db.CommitTransaction();
                    return ObjectManipulationResult.Success;
                }
                else
                {
                    logger.LogWarning((int)LoggingEvents.INSERT_ITEM, "Create school: school admin exists", school);
                    return ObjectManipulationResult.Exists;
                }
            }
            catch (Exception e)
            {
                db.RollbackTransaction();
                logger.LogError((int)LoggingEvents.INSERT_ITEM, e, "Create school", school);
                return ObjectManipulationResult.ErrorOccured;
            }
        }

        public ObjectManipulationResult EditSchool(int id, SchoolEditionData school)
        {
            try
            {
                if (GetSchoolById(id) != null)
                {
                    db.School.Where(p => p.Id == id)
                             .Set(p => p.Name, school.SchoolName)
                             .Set(p => p.DistrictId, school.DistrictId)
                             .Set(p => p.StatusId, school.StatusId)
                             .Update();

                    int roleId = (from r in db.Role
                                  where r.Name == "School Admin"
                                  select r.Id).First();

                    if (school.MainAdminId == 0)
                    {
                        var admin = school.SchoolAdmins.Where(p => p.Id == 0).FirstOrDefault();
                        var isUserExist = (from p in db.User
                                           where p.Email == admin.Email
                                           select p).FirstOrDefault();                       

                        int userId = 0;
                        if (isUserExist == null)
                        {
                            userId = Convert.ToInt32(db.InsertWithIdentity(new User
                            {
                                Email = admin.Email,
                                Name = admin.Name,
                                StatusId = 2
                            }));
                            db.Insert(new Users2Roles { UserId = userId, RoleId = roleId });
                        }
                        else
                        {
                            userId = isUserExist.Id;
                            var u2r = db.Users2Roles.Where(u => u.UserId == userId).FirstOrDefault();
                            u2r.RoleId = roleId;
                            db.Update(u2r);
                        }                       
                        db.Insert(new SchoolPersonal { Id = userId, SchoolId = id, IsMainAdmin = true });
                    }
                    else
                    {                       
                        var mainAdmin = db.SchoolPersonal.Where(s => s.SchoolId == id && s.Id == school.MainAdminId).FirstOrDefault();
                        mainAdmin.IsMainAdmin = true;
                        db.Update(mainAdmin);
                    }
                    if (school.PreviousAdminId != 0)
                    {
                        var prevAdmin = db.SchoolPersonal.Where(s => s.SchoolId == id && s.Id == school.PreviousAdminId).FirstOrDefault();
                        prevAdmin.IsMainAdmin = false;
                        db.Update(prevAdmin);
                    }
                    return ObjectManipulationResult.Success;
                }
                else
                {
                    logger.LogWarning((int)LoggingEvents.UPDATE_ITEM, "Edit school", school);
                    return ObjectManipulationResult.NotFound;
                }
            }
            catch (Exception e)
            {
                logger.LogError((int)LoggingEvents.UPDATE_ITEM, e.Message, "Edit school", school);
                return ObjectManipulationResult.ErrorOccured;
            }
        }

        public SchoolSettings GetSchoolSettings(int id)
        {
            var school = db.School.Where(s => s.Id == id).FirstOrDefault() ;

            if (school != null)
            {
                //move all old date from dismissal to archive
                var flights = db.Flight.Where(f => f.SchoolId == id && f.Date < DateTime.Today).ToList();
                if (flights != null && flights.Count() > 0)
                {
                    foreach (var flight in flights)
                    {
                        MoveDismissalToDismissalArchive(flight);
                    }
                }

                SchoolSettings settings = new SchoolSettings
                {
                    ArchiveTimeTypes = db.ArchiveTimeType.ToList(),
                    CardPrintingTypes = db.CardPrintingType.ToList(),
                    LaneScanningTypes = db.LaneLogisticType.ToList(),
                    Lanes = db.Lane.Where(l => l.SchoolId == id).ToList(),
                    ArchiveTimeTypeId = school.ArchiveTimeTypeId,
                    CardPrintingTypeId = school.CardPrintingTypeId,
                    CarsPerLane = school.CarsPerLaneCount,
                    CountOfLanes = school.LanesPerFlight,
                    LaneLogisticTypeId = school.LaneLogisticTypeId,
                    AllowPrintingAtHome = school.IsPrintingAtHome,
                    Instructions = school.PrintingInstructions,
                    ScannerUsers = (from sp in db.SchoolPersonal
                                    join u in db.User on sp.Id equals u.Id
                                    join u2r in db.Users2Roles on u.Id equals u2r.UserId
                                    where sp.SchoolId == id && u2r.RoleId == 3  // scanner Role == 3
                                    select u).ToList()
                };

                return settings;
            }
            else
            {
                logger.LogWarning((int)LoggingEvents.GET_ITEM, "Get school settings: school not found", id);
                return null;
            }
        }

        public ObjectManipulationResult SetSchoolSettings(int id, EditSchoolSettingsModel settings)
        {
            try
            {
                var school = GetSchoolById(id);               
                if ( school != null)
                {
                    //AlexBodnar, 05/04/2018   temporary add method for deleting flight data for prev days
                    if (!DeleteFlightDataForPrevDays(school.Id))
                    {
                        return ObjectManipulationResult.ErrorOccured;
                    }

                    school.ArchiveTimeTypeId = settings.ArchiveTimeTypeId;
                    school.CardPrintingTypeId= settings.CardPrintingTypeId;
                    school.CarsPerLaneCount = settings.CarsPerLane;
                    school.LaneLogisticTypeId = settings.LaneLogisticTypeId;
                    school.LanesPerFlight= settings.CountOfLanes;
                    school.IsPrintingAtHome= settings.AllowPrintingAtHome;
                    school.PrintingInstructions= settings.Instructions;

                    db.BeginTransaction();
                    db.Update(school);

                    (   from l in db.Lane
                        join tl in db.TeacherSetting on l.Id equals tl.DefaultLaneId
                        select tl
                    ).Delete();

                    db.Lane.Where(p => p.SchoolId == id).Delete();

                    db.CommitTransaction();

                    var userId = 0;
                    if (settings.NewScannerUsers!=null && settings.NewScannerUsers.Count() > 0)
                    {
                        if (settings.LaneLogisticTypeId == 1) // single scanner
                        {
                            var newScanner = settings.NewScannerUsers.FirstOrDefault();
                            var result = CreateUser(new User { Email = newScanner.Email, Name = newScanner.Name, StatusId = 2 }, 3, out userId); //3 - scanner Role
                            if (result == ObjectManipulationResult.Success)
                            {
                                CreateSchoolPersonal(userId, school.Id, false);
                                for (int i = 0; i < settings.Lanes.Count; i++)
                                {
                                    settings.Lanes[i].UserId = userId;
                                }
                            }                           

                        }
                        else
                        {
                            foreach (var newScanner in settings.NewScannerUsers)
                            {                                
                                var result = CreateUser(new User { Email = newScanner.Email, Name = newScanner.Name, StatusId = 2 }, 3, out userId); //3 - scanner Role
                                if (result == ObjectManipulationResult.Success)
                                {
                                    CreateSchoolPersonal(userId, school.Id, false);
                                    var lane = settings.Lanes.FirstOrDefault(l => l.Color == newScanner.LaneColor);
                                    lane.UserId = userId;
                                }
                            }
                        }
                    }

                    for (int i = 0; i < settings.Lanes.Count; i++)
                    {
                        settings.Lanes[i].SchoolId = school.Id;
                        if (settings.LaneLogisticTypeId == 1 && settings.Lanes[0].UserId!=0) //single scanner
                        {
                            settings.Lanes[i].UserId = settings.Lanes[0].UserId;
                        }
                    }
                    db.BulkCopy(settings.Lanes);
                    db.CommitTransaction();
                    return ObjectManipulationResult.Success;
                }
                else
                {
                    logger.LogWarning((int)LoggingEvents.UPDATE_ITEM, "Set school settings: school not found", settings);
                    return ObjectManipulationResult.NotFound;
                }
            }
            catch (Exception e)
            {
                db.RollbackTransaction();
                logger.LogError((int)LoggingEvents.UPDATE_ITEM, e.Message, "Set school settings", settings);
                return ObjectManipulationResult.ErrorOccured;
            }
        }

        private bool DeleteFlightDataForPrevDays(int schoolId)
        {
            try
            {
               (
                    from f in db.Flight
                    join f2l in db.Lanes2Fights on f.Id equals f2l.FlightId
                    join d in db.Dismissal on f2l.Id equals d.FlightLaneId
                    where f.SchoolId == schoolId && f.Date < DateTime.Today
                    select d
                ).Delete();

                (
                     from f in db.Flight
                     join f2l in db.Lanes2Fights on f.Id equals f2l.FlightId
                     where f.SchoolId == schoolId && f.Date < DateTime.Today
                     select f2l
                ).Delete();

                db.Flight.Where(f => f.SchoolId == schoolId && f.Date < DateTime.Today).Delete();
            }
            catch 
            {
                return false;
            }
            return true;
        }

        public bool DeleteFlightById(int flightId){

            try
            {
                (
                    from f in db.Flight
                    join f2l in db.Lanes2Fights on f.Id equals f2l.FlightId
                    join d in db.Dismissal on f2l.Id equals d.FlightLaneId
                    where f.Id == flightId
                    select d
                ).Delete();

                (
                     from f in db.Flight
                     join f2l in db.Lanes2Fights on f.Id equals f2l.FlightId
                     where f.Id == flightId
                     select f2l
                ).Delete();

                db.Flight.Where(f => f.Id == flightId).Delete();
            }
            catch (Exception ex)
            {
                return false;
            }


            return true;
        }

        public ObjectManipulationResult DeleteSchool(int id)
        {
            try
            {
                if (GetSchoolById(id) != null)
                {
                    // Deleting Archives
                    db.DismissalArchive.Delete(p => p.SchoolId == id);

                    var listOfStudentsToDelete = db.Student.Where(p => p.SchoolId == id).Select(i => i.Id).ToList();
                    db.Dismissal.Delete(p => listOfStudentsToDelete.Contains(p.StudentId));

                    //Deleting Students & Parents
                    var listOfParentsToDelete = db.Students2Parents.Where(p => listOfStudentsToDelete.Contains(p.StudentId)).Select(p=>p.ParentId).ToList();

                    db.Students2Parents.Delete(p => listOfStudentsToDelete.Contains(p.StudentId));
                    db.Parent.Delete(p => listOfParentsToDelete.Contains(p.Id));
                    db.Student.Delete(p => p.SchoolId == id);


                    //Deleting Lanes & Flights
                    var laneIdsToDelete = db.Lane.Where(p => p.SchoolId == id).Select(p => p.Id).ToList();

                    db.Lanes2Fights.Delete(p => laneIdsToDelete.Contains(p.LaneId));
                    db.Flight.Delete(p => p.SchoolId == id);
                    db.Lane.Delete(p => p.SchoolId == id);

                    //Deleting users
                    db.Classroom.Delete(p => p.SchoolId == id);
                    var listOfUsersToDelete = db.SchoolPersonal.Where(p => p.SchoolId == id).Select(i => i.Id).ToList();
                    var listOfUsersToBeDeleted = db.User.Where(p => listOfUsersToDelete.Contains(p.Id));
                    var userNames = listOfUsersToBeDeleted.Select(s => s.Email).ToList();


                    db.Impersonation.Delete(p => listOfUsersToDelete.Contains(p.ImpersonatorUserId) || listOfUsersToDelete.Contains(p.ImpersonatedUserId));
                    db.Users2Roles.Delete(p => listOfUsersToDelete.Contains(p.UserId));
                    db.SchoolPersonal.Delete(p => p.SchoolId == id);

                    listOfUsersToBeDeleted.Delete();
                  
                    //Finally deleting school
                    db.School.Where(p => p.Id == id)
                             .Delete();

                    //Deleting users from Auth0
                    using (ManagementApiClient managementClient = new ManagementApiClient())
                    {
                        foreach (var user in userNames)
                        {
                            var Auth0user = managementClient.GetUserByEmail(user);

                            if (Auth0user != null)
                            {
                                managementClient.DeleteUser(Auth0user.UserId);
                            }
                        }
                    }

                    return ObjectManipulationResult.Success;
                }
                else
                {
                    logger.LogWarning((int)LoggingEvents.DELETE_ITEM, "Delete school: school not found", id);
                    return ObjectManipulationResult.NotFound;
                }
            }
            catch(Exception e)
            {
                logger.LogError((int)LoggingEvents.DELETE_ITEM, e.Message, "Delete school", id);
                return ObjectManipulationResult.ErrorOccured;
            }
        }

        public ObjectManipulationResult DeleteDataFromSchool(int schoolId)
        {
            var status = ObjectManipulationResult.Success;
            try
            {
                var studentsList = db.Student.Where(s => s.SchoolId == schoolId).ToList();
                if (studentsList != null && studentsList.Count() > 0)
                {
                    //delete flight, flight2lane, dismissal
                    (from  d in db.Dismissal
                     join s in db.Student on d.StudentId equals s.Id
                     where s.SchoolId == schoolId
                     select d
                    ).Delete();

                    (from l2f in db.Lanes2Fights
                     join f in db.Flight on l2f.FlightId equals f.Id
                     where f.SchoolId == schoolId
                     select l2f
                     ).Delete();

                    db.Flight.Where(f => f.SchoolId == schoolId).Delete();

                    foreach (var item in studentsList)
                    {
                        if(DeleteStudent(item.Id) == ObjectManipulationResult.Conflict)
                        {
                            status = ObjectManipulationResult.Conflict;
                        }
                    }
                   
                }
            }
            catch(Exception ex)
            {
                logger.LogError((int)LoggingEvents.DELETE_ITEM, ex.Message, "Delete students from school");
                status = ObjectManipulationResult.ErrorOccured;
            }
            return status;
        }

        #endregion

        #region Student
        public List<Students> GetStudents(string searchText, int? schoolId)
        {
            var query = from s in db.Student.Where(s => s.SchoolId == schoolId).DefaultIfEmpty()
                        from ss in db.StudentStatus.Where(q => q.Id == s.StatusId).DefaultIfEmpty()
                        from cl in db.Classroom.Where(q => q.Id == s.ClassroomId).DefaultIfEmpty()
                        from u in db.User.Where(q=>q.Id == s.ParentId).DefaultIfEmpty()
                        where (String.IsNullOrEmpty(searchText) || String.IsNullOrWhiteSpace(searchText))
                            || ((!String.IsNullOrEmpty(searchText) || !String.IsNullOrWhiteSpace(searchText)) && (s.Name.Contains(searchText) || s.ExternalId.ToString().Contains(searchText) || cl.Name.Contains(searchText)))
                        orderby s.Name 
                        select new Students
                        {
                            Id = s.Id,
                            Name = s.Name,
                            ExternalId=s.ExternalId.ToString(),
                            Grade=s.Grade,
                            ClassroomName = cl.Name,
                            StudentStatus = ss.Name,
                            ParentEmail = u.Email
                        };

            return query.ToList();
        }

        public StudentListingModel  GetStudentListing(string searchText, int? schoolId)
        {


            StudentListingModel result = new StudentListingModel()
            {
                Active = (from s in db.Student.Where(s => s.SchoolId == schoolId).DefaultIfEmpty()
                          join ss in db.StudentStatus on s.StatusId equals ss.Id
                          join cl in db.Classroom on s.ClassroomId equals cl.Id
                          join u in db.User on s.ParentId equals u.Id
                          where (u.Email != null && ((String.IsNullOrEmpty(searchText) || String.IsNullOrWhiteSpace(searchText))
                             || ((!String.IsNullOrEmpty(searchText) || !String.IsNullOrWhiteSpace(searchText)) && (s.Name.Contains(searchText) || s.ExternalId.ToString().Contains(searchText) || cl.Name.Contains(searchText)))))
                         orderby s.Name
                         select new ActiveStudentModel
                         {
                             Id = s.Id,
                             Classroom = cl.Name,
                             ExternalId = s.ExternalId.ToString(),
                             Name = s.Name,
                             Email = u.Email,
                             Grade = s.Grade,
                             ParentGuardian = u.Name,
                             Status = ss.Name
                         }).ToList(),

                Inactive = (from s in db.Student.Where(s => s.SchoolId == schoolId).DefaultIfEmpty()
                            join ss in db.StudentStatus on s.StatusId equals ss.Id
                            join cl in db.Classroom on s.ClassroomId equals cl.Id
                            join u in db.User on s.ParentId equals u.Id
                            where (u.Email == null && ((String.IsNullOrEmpty(searchText) || String.IsNullOrWhiteSpace(searchText))
                             || ((!String.IsNullOrEmpty(searchText) || !String.IsNullOrWhiteSpace(searchText)) && (s.Name.Contains(searchText) || s.ExternalId.ToString().Contains(searchText) || cl.Name.Contains(searchText)))))
                            orderby s.Name
                            select new InactiveStudentModel
                            {
                                Id = s.Id,
                                Classroom = cl.Name,
                                ExternalId = s.ExternalId.ToString(),
                                Name = s.Name,
                                Grade = s.Grade,
                                ParentGuardian = u.Name,
                                Status = ss.Name
                            }).ToList()
            };
            return result;
        }

        public EditCreateStudentModel GetStudentById(int studentId)
        {
            var editStudent = (from s in db.Student.Where(q => q.Id == studentId)
                               from cl in db.Classroom.Where(q => q.Id == s.ClassroomId).DefaultIfEmpty()
                               from u in db.User.Where(q => q.Id == s.ParentId).DefaultIfEmpty()
                               where s.Id == studentId
                               select new EditCreateStudentModel
                               {
                                   Id = s.Id,
                                   Name = s.Name,
                                   ExternalId = s.ExternalId,
                                   Grade = s.Grade,
                                   Classroom = cl,
                                   StudentParent = new Models.Requests.StudentParent {Id=u.Id, Name=u.Name, Email=u.Email }
                               }
                        ).FirstOrDefault();

           return editStudent;
        }

        public ObjectManipulationResult ChangeGradeAndClassroom(ChangeGradeClassroom model)
        {
            try
            {
                if (model?.StudentsIdList == null) return ObjectManipulationResult.NotFound;
                int? classroomId = model.ClassroomId;
                if (model.ClassroomId == 0 && model.Grade != String.Empty)
                {
                    foreach (var studentId in model.StudentsIdList)
                    {
                        db.BeginTransaction();
                        db.Student.Where(p => p.Id == Convert.ToInt32(studentId))
                                 .Set(p => p.Grade, model.Grade)
                                 .Update();
                        db.CommitTransaction();
                    }
                }
                if (model.Grade == String.Empty && model.ClassroomId != 0)
                {
                    foreach (var studentId in model.StudentsIdList)
                    {
                        db.BeginTransaction();
                        db.Student.Where(p => p.Id == Convert.ToInt32(studentId))
                                 .Set(p => p.ClassroomId, model.ClassroomId)
                                 .Update();
                        db.CommitTransaction();
                    }
                }                             
                if (model.Grade != String.Empty && model.ClassroomId != 0)
                {
                    foreach (var studentId in model.StudentsIdList)
                    {
                        db.BeginTransaction();
                        db.Student.Where(p => p.Id == Convert.ToInt32(studentId))
                                 .Set(p => p.Grade, model.Grade)
                                 .Set(p => p.ClassroomId, model.ClassroomId)
                                 .Update();
                        db.CommitTransaction();
                    }
                }
            }
            catch (Exception e)
            {
                logger.LogError((int)LoggingEvents.UPDATE_ITEM, e.Message, "Change Grade and Classroom", model);
                db.RollbackTransaction();
                return ObjectManipulationResult.ErrorOccured;
            }
            return ObjectManipulationResult.Success;
        }

        public ObjectManipulationResult EditStudent(EditCreateStudentModel student, int? schoolId)
        {
            try
            {

                if (db.Student.Where(st => st.ExternalId == student.ExternalId && st.SchoolId == schoolId && st.Id !=student.Id).ToList().Count() > 0)
                {
                    return ObjectManipulationResult.Exists;
                }
                StudentParent previousParent = (from u in db.User
                                                join s in db.Student on u.Id equals s.ParentId
                                                where s.Id == student.Id
                                                select new StudentParent
                                                {
                                                    Id = u.Id,
                                                    Name = u.Name,
                                                    Email = u.Email
                                                }).First();

                bool parentChanged = false;
                int parentId = GetStudentParentIdForEdit(new User { Id = student.StudentParent.Id, Name = student.StudentParent.Name, Email = student.StudentParent.Email }, ref parentChanged);


                if (student.Classroom.Id == -1)
                {
                    student.Classroom.Id = GetOrCreateClassroomIdByName(student.Classroom.Name, Convert.ToInt32(schoolId)) ?? 0;
                }


                db.BeginTransaction();
                db.Student.Where(s => s.Id == student.Id)
                         .Set(s => s.Name, student.Name)
                         .Set(s => s.ExternalId, student.ExternalId.ToString())
                         .Set(s => s.Grade, student.Grade)
                         .Set(s => s.ClassroomId, student.Classroom.Id)
                         .Set(s => s.ParentId, parentId)
                         .Update();
                db.CommitTransaction();

                if (parentChanged)
                {
                    var students = db.Student.Where(s => s.ParentId == previousParent.Id).ToList();
                    if (!(students != null && students.Count() > 0))
                    {
                        DeleteParent(previousParent.Id, previousParent.Email);
                    }
                }
            }
            catch (Exception e)
            {
                logger.LogError((int)LoggingEvents.UPDATE_ITEM, e.Message, "Edit student", student);
                db.RollbackTransaction();
                return ObjectManipulationResult.ErrorOccured;
            }
            return ObjectManipulationResult.Success;
        }

        public ObjectManipulationResult CreateStudent(EditCreateStudentModel student, int? schoolId)
        {
            try 
            {
                int parentId = 0;
                var result = GetStudentParentId(new User { Id = student.StudentParent.Id, Name = student.StudentParent.Name, Email = student.StudentParent.Email }, out parentId);
                if (parentId != 0)
                {
                    if (db.Student.Where(st => st.ExternalId == student.ExternalId && st.SchoolId == schoolId).ToList().Count() > 0)
                    {
                        return ObjectManipulationResult.Exists;
                    }
                    if (student.Classroom.Id == -1)
                    {
                        student.Classroom.Id = GetOrCreateClassroomIdByName(student.Classroom.Name, Convert.ToInt32(schoolId)) ?? 0;
                    }
                    int studentStatus = 1;
                    if (result == ObjectManipulationResult.Exists)
                    {
                        studentStatus = 2;
                    }

                    db.BeginTransaction();
                    db.Insert(new Student
                    {
                        Name = student.Name,
                        Grade = student.Grade,
                        ExternalId = student.ExternalId.ToString(),
                        ParentId = parentId,
                        StatusId = studentStatus,
                        SchoolId = schoolId ?? 0,
                        ClassroomId = student.Classroom?.Id
                    });
                    db.CommitTransaction();

                }
                else
                {
                    return ObjectManipulationResult.ErrorOccured;
                }
            }
            catch (Exception e)
            {
                logger.LogError((int)LoggingEvents.INSERT_ITEM, e.Message, "Create student", student);
                db.RollbackTransaction();
                return ObjectManipulationResult.ErrorOccured;
            }
            return ObjectManipulationResult.Success;
        }

        public ObjectManipulationResult DeleteStudent(int id) {
            try
            {                
                var student = db.Student.Where(s => s.Id == id).FirstOrDefault();
                if (student != null)
                {
                    if(db.Dismissal.FirstOrDefault(s => s.StudentId == id) != null)
                    {
                        return ObjectManipulationResult.Conflict;
                    }
                    var stud2parentList = db.Students2Parents.Where(s => s.StudentId == id).ToList();
                    db.BeginTransaction();
                    if (stud2parentList != null && stud2parentList.Count() > 0) {                       
                        foreach (var st2p in stud2parentList)
                        {
                            db.Students2Parents.Where(s => s.StudentId == id).Delete();
                            var st2pList = db.Students2Parents.Where(sp => sp.ParentId == st2p.ParentId).ToList();
                            if (st2pList != null && st2pList.Count() == 0)
                            {
                                db.Parent.Where(p => p.Id == st2p.ParentId).Delete();
                            }
                        }
                       
                    }
                    var classroomStudents = db.Student.Where(s => s.ClassroomId == student.ClassroomId).ToList();
                    var userStudents = db.Student.Where(s => s.ParentId == student.ParentId).ToList();

                    db.Student.Where(s => s.Id == id).Delete();

                    if (classroomStudents != null && classroomStudents.Count() == 1)
                    {
                        db.Classroom.Where(cl => cl.Id == student.ClassroomId).Delete();
                    }
                    if (userStudents != null && userStudents.Count() == 1)
                    {
                        var parent = db.User.FirstOrDefault(u => u.Id == student.ParentId);
                        DeleteParent(parent.Id, parent.Email);
                    }

                    db.DismissalArchive.Where(s => s.StudentId==id).Delete();
                    db.CommitTransaction();
                    return ObjectManipulationResult.Success;
                }
                else
                {
                    return ObjectManipulationResult.NotFound;
                }
            }
            catch (Exception e)
            {
                //TODO Log here
                logger.LogError((int)LoggingEvents.DELETE_ITEM, e.Message, "Delete student", id);
                db.RollbackTransaction();
                return ObjectManipulationResult.ErrorOccured;
            }
        }

        public ObjectManipulationResult GetStudentParentId(User studentParent, out int parentId)
        {
            int userId = 0;
            var result = ObjectManipulationResult.Success;
            if (studentParent.Id == 0)
            {
                studentParent.StatusId = 2;
                // 6 - RoleId for Parents


                if (String.IsNullOrEmpty(studentParent.Email))
                {
                    try
                    {
                        db.BeginTransaction();
                        studentParent.Email = null;
                        userId = Convert.ToInt32(db.InsertWithIdentity(studentParent));

                        Users2Roles ur = new Users2Roles
                        {
                            UserId = userId,
                            RoleId = 6
                        };

                        db.Insert(ur);
                        
                        db.CommitTransaction();
                        result =  ObjectManipulationResult.Success;
                    }
                    catch (Exception e)
                    {
                        db.RollbackTransaction();
                        result = ObjectManipulationResult.ErrorOccured;
                    }
                }
                else
                {
                    result = CreateUser(studentParent, 6, out userId);
                }
            }
            else
            {
                result = EditUsername(studentParent.Id, studentParent.Name);
                if (result == ObjectManipulationResult.Success)
                {
                    userId = studentParent.Id;
                }
            }
            parentId = userId;
            return result;
        }

        public int GetStudentParentIdForEdit(User studentParent, ref bool parentChanged)
        {
            int userId = 0;
            if (studentParent.Id == 0)
            {
                studentParent.StatusId = 1;
                // 6 - RoleId for Parents
                CreateUser(studentParent, 6, out userId);
                parentChanged = true;
            }
            else
            {
                string email = GetUserEmail(studentParent.Id);
                if(email != studentParent.Email)
                {
                    if(db.User.Any(u => u.Email == studentParent.Email))
                    {
                        userId = db.User.Where(u => u.Email == email).First().Id;
                        parentChanged = true;
                    }
                    else
                    {
                        studentParent.StatusId = 1;
                        // 6 - RoleId for Parents
                        CreateUser(studentParent, 6, out userId);
                        parentChanged = true;
                    }
                }
                else 
                {
                    if(EditUsername(studentParent.Id, studentParent.Name) == ObjectManipulationResult.Success)
                    {
                        userId = studentParent.Id;
                    }                    
                }
            }
            return userId;
        }

        public async void AddOrUpdateStudentsFromFileAsync(List<Student> listStudents)
        {
            db.BeginTransaction();
            foreach (var st in listStudents)
            {
                try
                {                    
                    var studentId = (from s in db.Student
                                     where (s.ExternalId == st.ExternalId && s.SchoolId==st.SchoolId)
                                     select s.Id).FirstOrDefault();
                    if (studentId != 0)
                    {
                        await db.Student.Where(p => p.Id == studentId)
                            .Set(p => p.ExternalId, st.ExternalId)
                            .Set(p => p.Name, st.Name)
                            .Set(p => p.ClassroomId, st.ClassroomId)
                            .Set(p => p.ParentId, st.ParentId)
                            .Set(p => p.Grade, st.Grade)
                            .UpdateAsync();
                    }
                    else
                    {
                        await db.InsertAsync(st);
                    }
                    db.CommitTransaction();
                }
                catch (Exception e)
                {
                    logger.LogError((int)LoggingEvents.INSERT_ITEM, e.Message, "Add or Update students from file", listStudents);
                    db.RollbackTransaction();
                }

            }            
        }

        public List<StudentParent> GetStudentParents(int? schoolId)
        {
            var query = from u in db.User
                        join s in db.Student on u.Id equals s.ParentId
                        where s.SchoolId == schoolId
                        select new StudentParent
                        {
                            Id = u.Id,
                            Name = u.Name,
                            Email = u.Email
                        };

            return query.Distinct().ToList();
        }


        public bool IsHasStudentsAtSchool(int schoolId)
        {
            return db.Student.FirstOrDefault(s=>s.SchoolId==schoolId) == null ? false : true;
        }

        #endregion

        #region Classroom

        public List<Classroom> GetClasrooms(int schoolId)
        {
            return db.Classroom.Where(s => s.SchoolId == schoolId).OrderBy(s => s.Name).ToList();
        }

        public Classroom GetClassroomById(int classroomId, int schoolId)
        {
            if (classroomId == 0)
            {
                return null;
            }
            return db.Classroom.Where(s => s.Id == classroomId && s.SchoolId == schoolId).FirstOrDefault();
        }

        public List<ClassroomTeacherPair> GetTeachers(int schoolId)
        {
            var teachers = from sp in db.SchoolPersonal
                           join u in db.User on sp.Id equals u.Id
                           join r in db.Users2Roles on u.Id equals r.UserId
                           where sp.SchoolId == schoolId && r.RoleId == 4
                           orderby u.Name
                           let cl = (from c in db.Classroom where c.TeacherId == u.Id select c).FirstOrDefault()
                           select new ClassroomTeacherPair()
                           {
                               TeacherId = u.Id,
                               TeacherName = u.Name,
                               ClassroomId = cl == null ? 0 : cl.Id,
                               ClassroomName = cl == null ? "" : cl.Name
                           };
            return teachers.ToList();
        }

        public ObjectManipulationResult UpdateClassrooms(int schoolId, List<ClassroomTeacherPair> teachers)
        {
            try
            {
                db.BeginTransaction();
                foreach (var teacher in teachers)
                {
                    var isTeacherHasClass = db.Classroom.Where(s => s.TeacherId == teacher.TeacherId && s.SchoolId == schoolId).FirstOrDefault();
                    if (isTeacherHasClass != null)
                    {
                        isTeacherHasClass.TeacherId = null;
                        db.Update(isTeacherHasClass);
                    }
                    var classroomObj = GetClassroomById(teacher.ClassroomId, schoolId);
                    if (classroomObj != null)
                    {
                        classroomObj.TeacherId = teacher.TeacherId;
                        db.Update(classroomObj);
                    }
                }
                db.CommitTransaction();
            }
            catch (Exception e)
            {
                logger.LogError((int)LoggingEvents.UPDATE_ITEM, e.Message, "Edit classroom", teachers);
                db.RollbackTransaction();
                return ObjectManipulationResult.ErrorOccured;
            }
            return ObjectManipulationResult.Success;

        }

        public int? GetOrCreateClassroomIdByName(string name, int schoolId, int? teacherId = null)
        {
            if (name == "")
                return null;
            var classroomId = (from c in db.Classroom
                         where (c.Name == name && c.SchoolId==schoolId)
                         select c.Id).FirstOrDefault();
            if (classroomId == 0)
            {
                try
                {
                    db.BeginTransaction();                    
                    Classroom cl = new Classroom() { Name = name, SchoolId = schoolId, TeacherId = teacherId };
                    classroomId = Convert.ToInt32(db.InsertWithIdentity(cl));
                    db.CommitTransaction();
                }
                catch(Exception ex)
                {
                    db.RollbackTransaction();
                }
            }
            return classroomId;
        }

        public async void CreateOrUpdateClassroomAsync(List<Classroom> listClassrooms)
        {
            db.BeginTransaction();
            foreach (var classItem in listClassrooms)
            {
                try
                {
                    var classroomId = (from cl in db.Classroom
                                     where (cl.Name == classItem.Name)
                                     select cl.Id).FirstOrDefault();
                    if (classroomId != 0)
                    {
                       await db.Classroom.Where(p => p.Id == classroomId)
                            .Set(p => p.TeacherId, classItem.TeacherId)
                            .UpdateAsync();
                    }
                    else
                    {
                        await db.InsertAsync(classItem);
                    }
                    db.CommitTransaction();
                }
                catch (Exception e)
                {
                    logger.LogError((int)LoggingEvents.INSERT_ITEM, e.Message, "Add or Update classroom from file", listClassrooms);
                    db.RollbackTransaction();
                }
            }
        }

        #endregion

        #region Flights
        public FlightSettingsData GetFlightSetting(int schoolId)
        {
            var school = db.School.FirstOrDefault(s => s.Id == schoolId);

            return new FlightSettingsData
            {
                LaneCount = school.LanesPerFlight,
                CarsPerLane = school.CarsPerLaneCount,
                LaneLogisticType = db.LaneLogisticType.FirstOrDefault(t => t.Id == school.LaneLogisticTypeId).Name
            };
        }

        public int CreateFlight(Flight flight)
        {
            try
            {
                var flightId = db.InsertWithInt32Identity(flight);
                return flightId;
            }
            catch (Exception e)
            {
                logger.LogError((int)LoggingEvents.INSERT_ITEM, e.Message, "Create flight");
                return -1;
            }
        }

        public ObjectManipulationResult ChangeFlightStatus(int flightId, int statusId)
        {
            try
            {
                db.BeginTransaction();
                db.Flight.Where(f => f.Id == flightId).Set(s => s.StatusId, statusId).Update();
                db.CommitTransaction();
                return ObjectManipulationResult.Success;
            }
            catch (Exception e)
            {
                logger.LogError((int)LoggingEvents.UPDATE_ITEM, e.Message, "Change flight status");
                db.RollbackTransaction();
                return ObjectManipulationResult.ErrorOccured;
            }
        }

        public TeacherSettings GetFlightSettingForTeacher(int userId, int schoolId)
        {

            var lanesList = db.Lane.Where(l => l.SchoolId == schoolId).ToList();
            if (lanesList == null || lanesList.Count() == 0 )
                return null;
            var teacherSettings = db.TeacherSetting.FirstOrDefault(p => p.Id == userId) ??
                                    new TeacherSetting
                                    {
                                        Id = 0,
                                        DefaultLaneId = lanesList.FirstOrDefault().Id,
                                        IsCarVisible = true,
                                        IsGradeVisible = true,
                                        IsHallwayVisible = true
                                    };

            return new TeacherSettings
            {
                TeacherId = userId,
                LaneId = teacherSettings.DefaultLaneId,
                IsCarColumnVisible = teacherSettings.IsCarVisible,
                IsGradeColumnVisible = teacherSettings.IsGradeVisible,
                IsHallwayColumnVisible = teacherSettings.IsHallwayVisible,
                Lanes=lanesList
            };
        }

        public ObjectManipulationResult SetFlightSettingForTeacher(int userId, TeacherSettings settings)
        {
            var model = db.TeacherSetting.FirstOrDefault(p=>p.Id==userId);            
            try
            {
                if (model != null)
                {
                    model.DefaultLaneId = settings.LaneId;
                    model.IsCarVisible = settings.IsCarColumnVisible;
                    model.IsGradeVisible = settings.IsGradeColumnVisible;
                    model.IsHallwayVisible = settings.IsHallwayColumnVisible;
                    db.Update(model);
                }
                else
                {
                    model = new TeacherSetting();
                    model.Id = userId;
                    model.DefaultLaneId = settings.LaneId;
                    model.IsCarVisible = settings.IsCarColumnVisible;
                    model.IsGradeVisible = settings.IsGradeColumnVisible;
                    model.IsHallwayVisible = settings.IsHallwayColumnVisible;
                    db.Insert(model);
                }
                               
            }
            catch (Exception e)
            {
                logger.LogError((int)LoggingEvents.UPDATE_ITEM, e.Message, "Change flight status");               
                return ObjectManipulationResult.ErrorOccured;
            }
            return ObjectManipulationResult.Success;
        }

        public bool IsActiveFlightExist(int schoolId)
        {
            var flights = (from f in db.Flight 
                         where f.SchoolId==schoolId && f.Date >= DateTime.Today && f.StatusId != 4 // 4-status finished
                         select f).ToList();
            if (flights.Count()>0)
            {
                return true;
            }
            return false;
        }

        #endregion

        #region Parent

        public IEnumerable<MainParentModel> GetMainParentsList(int? schoolId)
        {
            var query = from u in db.User
                        join u2r in db.Users2Roles on u.Id equals u2r.UserId
                        join s in db.Student on u.Id equals s.ParentId
                        where u2r.RoleId == 6 && s.SchoolId == schoolId
                        select new MainParentModel
                        {
                            Id = u.Id,
                            Name = u.Name
                        };

            return query.Distinct().ToList();
        }

        public List<StudentForParent> GetStudentsForParent(int parentId)
        {
            var studentQuery = from s in db.Student
                               join cr in db.Classroom on s.ClassroomId equals cr.Id
                               where s.ParentId == parentId
                               select new StudentForParent
                               {
                                   Id = s.Id,
                                   Name = s.Name,
                                   ExternalId = s.ExternalId,
                                   Grade = s.Grade,
                                   Classroom = cr.Name,
                                   ParentId=parentId
                               };

            return studentQuery.ToList();
        }

        public List<StudentForParent> GetStudentsForAdmin(int schoolId)
        {
            var studentQuery = from s in db.Student
                               join cr in db.Classroom on s.ClassroomId equals cr.Id
                               where s.SchoolId == schoolId
                               select new StudentForParent
                               {
                                   Id = s.Id,
                                   Name = s.Name,
                                   ExternalId = s.ExternalId,
                                   Grade = s.Grade,
                                   Classroom = cr.Name,
                                   ParentId = s.ParentId
                               };

            return studentQuery.ToList();
        }

        private List<StudentForParent> GetStudentsForDismissal(int parentId)
        {
            using (var db = new ControlPointDB())
            {
                var query = from s2p in db.Students2Parents
                            join p in db.Parent on s2p.ParentId equals p.Id
                            join s in db.Student on s2p.StudentId equals s.Id
                            join sc in db.School on s.SchoolId equals sc.Id
                            where s2p.ParentId == parentId
                            select new StudentForParent
                            {
                                Id = s2p.StudentId,
                                Name = s.Name,
                                IsPrintingAtHome = sc.IsPrintingAtHome ? sc.IsPrintingAtHome : false,
                                Grade = s.Grade,
                                ExternalId = s.ExternalId,
                                SchoolName = sc.Name
                            };
                return query.ToList();
            }
        }
        
        private List<StudentForDismissal> GetStudentsForCard(int parentId) 
        {
            using (var db = new ControlPointDB())
            {
                var query = from s2p in db.Students2Parents
                            join p in db.Parent on s2p.ParentId equals p.Id
                            join s in db.Student on s2p.StudentId equals s.Id
                            join sc in db.School on s.SchoolId equals sc.Id
                            join c in db.Classroom on s.ClassroomId equals c.Id
                            join u in db.User on c.TeacherId equals u.Id into lj
                            from lu in lj.DefaultIfEmpty()
                            where s2p.ParentId == parentId
                            select new StudentForDismissal
                            {
                                Id = s2p.StudentId,
                                Name = s.Name,
                                ClassroomTeacher = lu.Name,
                                Grade = s.Grade,
                                ExternalId=s.ExternalId,
                                SchoolName=sc.Name
                            };
                return query.ToList();
            }
                            
         }

        public IOrderedEnumerable<DismissalCardForList> GetCardsForList(int? schoolId)
        {
            var dismissalQuery = from p in db.Parent
                                 join s2p in db.Students2Parents on p.Id equals s2p.ParentId
                                 join s in db.Student on s2p.StudentId equals s.Id
                                 where s.SchoolId == schoolId
                                 select new DismissalCardForList
                                 {
                                     Id = p.Id,
                                     UserId = s.ParentId,
                                     Status = (p.CardStatusId == (int)Enums.CardStatus.Unprinted) ? "Unprinted" : "Active",
                                     ParentName = p.Name,
                                     DriverLicense = p.DriverLicense,
                                     PhoneNumber = p.PhoneNumber,
                                     Relationship = s2p.Relationship,
                                     Students = GetStudentsForCard(p.Id)
                                 };

            return dismissalQuery.GroupBy(p => p.Id).Select(p => p.First()).ToList().OrderByDescending( el => el.Status);
        }
        

        public ParentInfo ReadParentInfo(int parentId)
        {
            
            var studentQuery = from s in db.Student
                                join cr in db.Classroom on s.ClassroomId equals cr.Id
                                where s.ParentId == parentId
                                select new StudentForParent
                                {
                                    Id = s.Id,
                                    Name = s.Name,
                                    Grade = s.Grade,
                                    ExternalId = s.ExternalId,
                                    Classroom = cr.Name
                                };

            var instructionsList = (from s in db.Student
                                join sc in db.School on s.SchoolId equals sc.Id
                                where s.ParentId == parentId
                                select new SchoolInstruction
                                {
                                    SchoolName = sc.Name,
                                    Instruction = sc.PrintingInstructions
                                }).Distinct().ToList();

            string instruction = "";
            if (instructionsList != null && instructionsList.Count() > 0)
            {
                foreach (var item in instructionsList)
                {
                    if (item.Instruction != null && item.Instruction != "")
                    {
                        instruction += item.SchoolName+ " Dismissal Procedure" + Environment.NewLine + item.Instruction + Environment.NewLine;
                    }
                }
            }

            var dismissalQuery = from p in db.Parent
                                 join s2p in db.Students2Parents on p.Id equals s2p.ParentId
                                 join s in db.Student on s2p.StudentId equals s.Id
                                 where s.ParentId == parentId
                                    select new DismissalCard
                                    {
                                        Id = p.Id,
                                        Status = (p.CardStatusId == (int) Enums.CardStatus.Unprinted) ? false : true,
                                        ParentName = p.Name,
                                        PhoneNumber = p.PhoneNumber,
                                        Students = GetStudentsForDismissal(p.Id),
                                        DriversLicense = p.DriverLicense,
                                        Relationship = s2p.Relationship
                                    };

            var instructionsQuery = from u in db.User
                                    where u.Id == parentId
                                    select u.IsInstructionsChecked;

            return new ParentInfo
            {
                InstructionsChecked = instructionsQuery.First() ,
                Students = studentQuery.ToList(),
                DismissalCards = dismissalQuery.GroupBy( p => p.Id).Select(p => p.First()),
                Instruction = instruction
            };            

        }

        public ObjectManipulationResult UpdateStudentName(StudentForParent model)
        {
            try
            {
                db.BeginTransaction();
                db.Student.Where(s => s.Id == model.Id).Set(s => s.Name, model.Name).Update();
                db.CommitTransaction();
                return ObjectManipulationResult.Success;
            }
            catch(Exception e)
            {
                logger.LogError((int)LoggingEvents.UPDATE_ITEM, e.Message, "Edit students name", model);
                db.RollbackTransaction();
                return ObjectManipulationResult.ErrorOccured;
            }
        }
        
        public string GetInstructions(int id)
        {
            var instructionsList = (from s in db.Student
                                    join sc in db.School on s.SchoolId equals sc.Id
                                    where s.ParentId == id
                                    select new SchoolInstruction
                                    {
                                        SchoolName = sc.Name,
                                        Instruction = sc.PrintingInstructions
                                    }).Distinct().ToList();

            string instruction = "";
            if (instructionsList != null && instructionsList.Count() > 0)
            {
                foreach (var item in instructionsList)
                {
                    if (item.Instruction != null && item.Instruction !="")
                    {
                        instruction += item.SchoolName + " Dismissal Procedure" + Environment.NewLine + item.Instruction + Environment.NewLine;
                    }
                }
            }
            return instruction;
        }

        public ObjectManipulationResult UpdateInstructionsChecked(int id)
        {
            try
            {
                db.User.Where(u => u.Id == id).Set(u => u.IsInstructionsChecked, true).Update();
                return ObjectManipulationResult.Success;
            }
            catch (Exception e)
            {
                logger.LogError((int)LoggingEvents.UPDATE_ITEM, e.Message, "Updating instructions field for the user", id);
                return ObjectManipulationResult.ErrorOccured;
            }
        }

        public Parent GetParentByLicense(string license)
            => db.Parent.Where(p => p.DriverLicense == license).FirstOrDefault();
        

        #endregion

        #region SchoolPersonal

        public void CreateSchoolPersonal(int userId, int schoolId, bool isMainAdmin)
        {
            if (userId <= 0 || schoolId <= 0)
            {
                return;
            };
            var result = (from p in db.SchoolPersonal
                          where p.Id == userId && p.SchoolId == schoolId
                          select p).FirstOrDefault();

            if (result != null)
            {
                return;
            }
            else
            {
                try
                {
                    db.BeginTransaction();
                    db.Insert(new SchoolPersonal() { Id = userId, SchoolId = schoolId, IsMainAdmin = isMainAdmin });
                    db.CommitTransaction();
                }
                catch (Exception e)
                {
                    db.RollbackTransaction();
                    return;
                }
            }
        }

        #endregion

        #region Cards
        public IEnumerable<DissmissalCardDTO> GetListOfCards(int schoolId)
        {
            var result = ((from p in db.Parent
                           join s2p in db.Students2Parents on p.Id equals s2p.ParentId
                           join s in db.Student on s2p.StudentId equals s.Id
                           where s.SchoolId == schoolId
                           select new DissmissalCardDTO
                           {
                               Id = p.Id,
                               ParentId = s2p.ParentId,
                               ParentName = p.Name,
                               IsPrinted = (p.CardStatusId != (int)Enums.CardStatus.Unprinted) ? true : false,
                               StatusId = p.CardStatusId
                           }).Distinct()).OrderBy(x => x.IsPrinted).ToList();

            result.ForEach(x => x.Students = db.Students2Parents
            .Join(db.Student,
                 card => card.StudentId,
                 student => student.Id,
                 (card, student) => new { card, student })
            .Join(db.Classroom,
                 cardsAndStudents => cardsAndStudents.student.ClassroomId,
                 classroom => classroom.Id,
                 (cardsAndStudents, classroom) => new { cardsAndStudents, classroom })
            .Join(db.User,
                 studentsWithCardsStudetsAndClassrooms => studentsWithCardsStudetsAndClassrooms.classroom.TeacherId,
                 teacher => teacher.Id,
                 (studentsWithCardsStudetsAndClassrooms, teacher) => new { studentsWithCardsStudetsAndClassrooms, teacher })
           .Where(r => r.studentsWithCardsStudetsAndClassrooms.cardsAndStudents.card.ParentId == x.ParentId)
           .Select(student => new StudentsToCardsDTO
           {
               StudentId = student.studentsWithCardsStudetsAndClassrooms.cardsAndStudents.student.Id,
               Grade = student.studentsWithCardsStudetsAndClassrooms.cardsAndStudents.student.Grade,
               StudentName = student.studentsWithCardsStudetsAndClassrooms.cardsAndStudents.student.Name,
               Instructor = student.teacher.Name
           }).ToList());

            return result;
        }

        public List<CardStatus> GetCardStatuses()
        {
            return db.CardStatus.ToList();
        }
        
        public int GetUserIdForCard(int cardId)
        {
            using (var db = new ControlPointDB())
            {
                var query = from p in db.Parent
                            join s2p in db.Students2Parents on p.Id equals s2p.ParentId
                            join s in db.Student on s2p.StudentId equals s.Id
                            where p.Id == cardId
                            select s.ParentId;

                return query.FirstOrDefault();
            }                
        }
        
        public DismissalCard GetDismissalCard(int id)
        {
            int userId = GetUserIdForCard(id);
            return QueryDbForCard(id, userId);
        }  

        public DismissalCard QueryDbForCard(int id, int userId)
        {
            var dismissalQuery = from p in db.Parent
                                 join s2p in db.Students2Parents on p.Id equals s2p.ParentId
                                 join s in db.Student on s2p.StudentId equals s.Id
                                 where p.Id == id && s.ParentId == userId                               
                                 select new DismissalCard
                                 {
                                     Id = p.Id,
                                     ParentName = p.Name,
                                     PhoneNumber = p.PhoneNumber,
                                     Students = GetStudentsForDismissal(p.Id),
                                     DriversLicense = p.DriverLicense,
                                     Relationship = s2p.Relationship,
                                     ParentUserId=s.ParentId
                                 };

            var result = dismissalQuery.GroupBy(p => p.Id).Select(p => p.First());

            return result.FirstOrDefault();
        }

        public ObjectManipulationResult UpdateDismissalCard(DismissalCard card)
        {
            try
            {
                List<StudentForParent> students = GetStudentsForDismissal(card.Id);

                db.BeginTransaction();

                db.Parent.Where(p => p.Id == card.Id)
                    .Set(p => p.Name, card.ParentName)
                    .Set(p => p.DriverLicense, card.DriversLicense)
                    .Set(p => p.PhoneNumber, card.PhoneNumber)
                    .Set(p => p.CardStatusId, 1)
                    .Update();

                foreach (var student in students)
                {
                    db.Students2Parents
                        .Where(s2p => s2p.ParentId == card.Id && s2p.StudentId == student.Id)
                        .Delete();
                    db.Student.Where(s => s.Id == student.Id).Set(s => s.StatusId, 2).Update();
                }

                foreach (var student in card.Students)
                {
                    db.Students2Parents
                        .Value(s2p => s2p.StudentId, student.Id)
                        .Value(s2p => s2p.ParentId, card.Id)
                        .Value(s2p => s2p.Relationship, card.Relationship)
                        .Insert();
                    db.Student.Where(s => s.Id == student.Id).Set(s => s.StatusId, 3).Update();
                }

                db.CommitTransaction();
                return ObjectManipulationResult.Success;
            }
            catch (Exception e)
            {
                logger.LogError((int)LoggingEvents.UPDATE_ITEM, e.Message, "Edit dismissal card", card);
                db.RollbackTransaction();
                return ObjectManipulationResult.ErrorOccured;
            }
        }

        public ObjectManipulationResult InsertDismissalCard(DismissalCard card)
        {
            try
            {
                db.BeginTransaction();

                int parentId = Convert.ToInt32(db.Parent
                    .Value(p => p.Name, card.ParentName)
                    .Value(p => p.PhoneNumber, card.PhoneNumber)
                    .Value(p => p.DriverLicense, card.DriversLicense)
                    .Value(p => p.CardStatusId, 1)
                    .InsertWithIdentity());

                foreach (var student in card.Students)
                {
                    db.Students2Parents
                        .Value(s2p => s2p.StudentId, student.Id)
                        .Value(s2p => s2p.ParentId, parentId)
                        .Value(s2p => s2p.Relationship, card.Relationship)
                        .Insert();
                    db.Student.Where(s => s.Id == student.Id).Set(s => s.StatusId, 3).Update();
                }

                db.CommitTransaction();
                return ObjectManipulationResult.Success;
            }
            catch (Exception e)
            {
                logger.LogError((int)LoggingEvents.INSERT_ITEM, e.Message, "Create dismissal card", card);
                db.RollbackTransaction();
                return ObjectManipulationResult.ErrorOccured;
            }
        }

        public ObjectManipulationResult DeleteDismissalCard(int id)
        {
            try
            {
                db.BeginTransaction();

                List<StudentForParent> students = GetStudentsForDismissal(id);

                foreach (var student in students)
                {
                    db.Students2Parents
                    .Where(s2p => s2p.StudentId == student.Id && s2p.ParentId == id)
                    .Delete();

                    if (db.Students2Parents.FirstOrDefault(st => st.StudentId == student.Id) == null)
                    {
                        db.Student.Where(s => s.Id == student.Id).Set(s => s.StatusId, 2).Update();
                    }
                }

                db.Parent.Where(p => p.Id == id).Delete();

                db.CommitTransaction();

                return ObjectManipulationResult.Success;
            }
            catch (Exception e) // \"FK_Dismissal_Parent\"
            {
                if(e.Message.Contains("\"FK_Dismissal_Parent\""))
                {
                    logger.LogError((int)LoggingEvents.DELETE_ITEM, e.Message, "Delete dismissal card", id);
                    db.RollbackTransaction();
                    return ObjectManipulationResult.Conflict;
                }
                else
                {
                    logger.LogError((int)LoggingEvents.DELETE_ITEM, e.Message, "Delete dismissal card", id);
                    db.RollbackTransaction();
                    return ObjectManipulationResult.ErrorOccured;
                }
                
            }
        }

        public ObjectManipulationResult UpdateDismissalCardPrinted(int[] ids)
        {
            try
            {
                db.BeginTransaction();

                foreach (int id in ids)
                {
                    db.Parent.Where(p => p.Id == id)
                    .Set(p => p.CardStatusId, 2)
                    .Update();
                }

                db.CommitTransaction();
                return ObjectManipulationResult.Success;
            }
            catch (Exception e)
            {
                logger.LogError((int)LoggingEvents.UPDATE_ITEM, e.Message, "Update dismissal card isPrinted field", ids);
                db.RollbackTransaction();
                return ObjectManipulationResult.ErrorOccured;
            }
        }


        public ObjectManipulationResult UpdateDismissalCardStatus(int cardId, int statusId)
        {
            try
            {
                if (db.Parent.First(c => c.Id == cardId) != null)
                {
                    db.BeginTransaction();

                    db.Parent.Where(p => p.Id == cardId)
                    .Set(p => p.CardStatusId, statusId)
                    .Update();

                    db.CommitTransaction();
                    return ObjectManipulationResult.Success;
                }
                else
                {
                    return ObjectManipulationResult.NotFound;
                }
            }
            catch (Exception e)
            {
                logger.LogError((int)LoggingEvents.UPDATE_ITEM, e.Message, "Update dismissal card status", cardId);
                db.RollbackTransaction();
                return ObjectManipulationResult.ErrorOccured;
            }
        }
        #endregion        

        #region ClassroomFlight

        public ClassroomFlightsAndSettings GetClassroomFlightsAndSetings(int userId, int schoolId)
        {
            // var schoolId = Convert.ToInt32(GetUserSchoolId(userId));
            var isSchoolConfigurationSet = db.School.FirstOrDefault(s => s.Id == schoolId)?.LanesPerFlight;
            if (isSchoolConfigurationSet == 0)
                return null;
            var result = new ClassroomFlightsAndSettings();
            result.Flights = db.Flight.Where(f => f.SchoolId == schoolId && f.Date >= DateTime.Today)
                                      .Select(f => new ClassFlight
                                      {
                                          FlightId = f.Id,
                                          Status = ((Enums.FlightStatus)f.StatusId).ToString(),
                                          FlightNumber = f.Number
                                      }).ToList();

            var teacherSettings = db.TeacherSetting.FirstOrDefault(t => t.Id == userId) ??
                new TeacherSetting
                {
                    Id = 0,
                    DefaultLaneId = db.Lane.FirstOrDefault(l => l.SchoolId == schoolId).Id,
                    IsCarVisible=true,
                    IsGradeVisible=true,
                    IsHallwayVisible=true
                };
            result.DefaultLaneColor = db.Lane.Where(l => l.Id == teacherSettings.DefaultLaneId).FirstOrDefault().Color;
            result.IsCarColumnVisible = teacherSettings.IsCarVisible;
            result.IsGradeColumnVisible = teacherSettings.IsGradeVisible;
            result.IsHallwayColumnVisible = teacherSettings.IsHallwayVisible;
            result.TeacherId = userId;
            result.ClosedFlightIntoArchive = String.Join(", ", db.DismissalArchive.Where(a => a.SchoolId == schoolId && a.FlightDate >= DateTime.Today).Select(a => a.Flight).Distinct());

            return result;
        }

        public List<ClassFlightLane> GetLanesByFlightId(int flightId)
        {
            var flightLanes = (from l2f in db.Lanes2Fights
                                      join l in db.Lane on l2f.LaneId equals l.Id
                                      where l2f.FlightId == flightId
                                      select new ClassFlightLane
                                      {
                                          LaneId = l2f.Id,
                                          Name = l.Name,
                                          Color = l.Color,
                                          Status = l2f.StatusId == 1 ? "Open" : "Closed"
                                      }).ToList();
            return flightLanes;
        }

        public List<ClassroomStudent> GetStudentsByLane(int activeLane, int userId)
        {
            var flightId = db.Lanes2Fights.FirstOrDefault(l => l.Id == activeLane).FlightId;
            var flightStatus = db.Flight.FirstOrDefault(f => f.Id == flightId).StatusId;
            var result = new List<ClassroomStudent>();
            if (flightStatus == (int)Enums.FlightStatus.Finished)
            {
                //Get from dissmisalArchive
                result = (from d in db.DismissalArchive
                         join s in db.Student on d.StudentId equals s.Id
                         where d.FlightLaneId == activeLane
                         let teacherId = db.Classroom.FirstOrDefault(t => t.Id == s.ClassroomId).TeacherId
                         select new ClassroomStudent
                         {
                             CardId = d.Id,
                             Grade = d.Grade,
                             StudentName = d.StudentName,
                             LaneId = activeLane,
                             Car = 0, // because deleted from dissmisalArchive
                             Classroom = d.ClassroomTime.Equals(DateTime.MinValue) ? false : true,
                             Hallway = d.HallwayTime.Equals(DateTime.MinValue) ? false : true,
                             TeacherId = teacherId
                         }).ToList();
            }
            else
            {
               
                //Get from Dissmssal
                result = (from d in db.Dismissal
                          join s in db.Student on d.StudentId equals s.Id
                          where d.FlightLaneId == activeLane
                          let teacherId = db.Classroom.FirstOrDefault(t => t.Id == s.ClassroomId).TeacherId                    
                          select new ClassroomStudent
                          {
                              CardId = d.Id,
                              Grade = s.Grade,
                              StudentName = s.Name,
                              LaneId = activeLane,
                              Car=d.CarNumber,
                              Classroom = d.ClassroomReleaseTime.Equals(DateTime.MinValue) ? false : true,
                              Hallway = d.HallwayReleaseTime.Equals(DateTime.MinValue) ? false : true,
                              TeacherId = teacherId
                          }).ToList();

                
            }

            return result;
        }

        public FlightSearchStudentModel GetLaneAndFlightByStudentId(int studentId)
        {
            FlightSearchStudentModel model =
                (from d in db.Dismissal
                 join l2f in db.Lanes2Fights on d.FlightLaneId equals l2f.Id
                 where d.StudentId == studentId
                 select new FlightSearchStudentModel
                 {
                     FlightId = l2f.FlightId,
                     LaneId = l2f.Id,
                     CardId = d.Id
                 }).FirstOrDefault();
            return model;
        }

        public ClassroomStudent GetClassroomCardByCardId(int cardId)
        {
            return          (from d in db.Dismissal
                             join s in db.Student on d.StudentId equals s.Id
                             where d.Id == cardId
                             let teacherId = db.Classroom.FirstOrDefault(t => t.Id == s.ClassroomId).TeacherId
                             select new ClassroomStudent
                             {
                                 CardId = d.Id,
                                 Grade = s.Grade,
                                 StudentName = s.Name,
                                 LaneId = d.FlightLaneId,
                                 Car = d.CarNumber,
                                 Classroom = d.ClassroomReleaseTime.Equals(DateTime.MinValue) ? false : true,
                                 Hallway = d.HallwayReleaseTime.Equals(DateTime.MinValue) ? false : true,
                                 TeacherId = teacherId
                             }).FirstOrDefault();
        }

        public bool LeaveClassroomTimeForStudent(int cardId, bool status)
        {
            var model = db.Dismissal.FirstOrDefault(p => p.Id == cardId);
            try
            {
                if (model == null)
                {
                    return false;
                }
                model.ClassroomReleaseTime = status ? DateTime.Now : DateTime.MinValue;
                db.Update(model);
            }
            catch (Exception e)
            {
                logger.LogError((int)LoggingEvents.UPDATE_ITEM, e.Message, "Change Classroom time for card", model);
                db.RollbackTransaction();
                return false;
            }
            return true;
        }

        public ClassroomStudent LeaveHallwayTimeForStudent(int cardId, bool status)
        {
            var model = db.Dismissal.FirstOrDefault(p => p.Id == cardId);
            try
            {
                if (model == null)
                {
                    return null;
                }
                model.HallwayReleaseTime = status ? DateTime.Now : DateTime.MinValue;
                db.Update(model);

                return MoveDismissalntoArchive(cardId, model.FlightLaneId);
            }
            catch (Exception e)
            {
                logger.LogError((int)LoggingEvents.UPDATE_ITEM, e.Message, "Change Hallway time for card", model);
                db.RollbackTransaction();
                return null;
            }           
        }

        private ClassroomStudent MoveDismissalntoArchive(int cardId, int flightLaneId)
        {
            var flight = db.Flight.FirstOrDefault(f => f.Id == db.Lanes2Fights.FirstOrDefault(l => l.Id == flightLaneId).FlightId);
            if (flight != null && flight.StatusId == 1)
            {
                return GetClassroomCardByCardId(cardId);
            }

            var dismissal = (from l2f in db.Lanes2Fights
                                 join d in db.Dismissal on l2f.Id equals d.FlightLaneId
                                 where l2f.FlightId == flight.Id && d.HallwayReleaseTime.TimeOfDay <= DateTime.MinValue.TimeOfDay
                                 select d).ToList();

            if (dismissal != null && dismissal.Count() > 0)
            {
                return GetClassroomCardByCardId(cardId); 
            }

            MoveDismissalToDismissalArchive(flight);
            return new ClassroomStudent { CardId=0, FlightId=flight.Id, FlightNumber=flight.Number} ;
        }

        #endregion

        #region Archive
        public List<DismissalArchive> GetArchive(int schoolId, DateTime endDate, string studentName, DateTime startDay, out bool IsMilitaryTimeFormat)
        {
            DeleteArchive();
            //move all old date from dismissal to archive
            var flights = db.Flight.Where(f => f.SchoolId == schoolId && f.Date < DateTime.Today).ToList();

            if (flights != null && flights.Count() > 0)
            {
                foreach (var flight in flights)
                {
                    MoveDismissalToDismissalArchive(flight);
                }                
            }
            
            var timeFormat = db.School.Where(s => s.Id == schoolId)
                .Join(db.ArchiveTimeType,
                 school => school.ArchiveTimeTypeId,
                 archive => archive.Id,
                 (school, archive) => new { school, archive }).Select(s => s.archive.Name.ToString()).FirstOrDefault();

            var result = db.DismissalArchive.Where(d => (d.SchoolId == schoolId && d.FlightDate.Date >= startDay.Date && d.FlightDate.Date <= endDate.Date) && (!String.IsNullOrEmpty(studentName) ? d.StudentName == studentName : true)).ToList();

            result.ForEach(r =>
            {
                r.ScanningTime = (String.IsNullOrEmpty(r.ScanningTime)) ? "-" : Convert.ToDateTime(r.ScanningTime).ToString("HH:mm");
                r.HallwayTime = (String.IsNullOrEmpty(r.HallwayTime)) ? "-" : Convert.ToDateTime(r.HallwayTime).ToString("HH:mm");
                r.ClassroomTime = (String.IsNullOrEmpty(r.ClassroomTime)) ? "-" : Convert.ToDateTime(r.ClassroomTime).ToString("HH:mm");
            });

            if (timeFormat == "AM/PM")
            {
                IsMilitaryTimeFormat = false;
            }
            else
            {
                IsMilitaryTimeFormat = true;
            }

            return result.OrderBy(p=>p.ArchiveDate).ToList();
        }

        public void DeleteArchive()
        {
            try
            {
                db.BeginTransaction();
                db.DismissalArchive.Where(c => c.FlightDate <= DateTime.Today.AddMonths(-1)).Delete();
                db.CommitTransaction();
            }
            catch (Exception e)
            {
                logger.LogError((int)LoggingEvents.DELETE_ITEM, e.Message, "Delete dismissal archive", DateTime.Today.AddMonths(-1));
                db.RollbackTransaction();
            }
        }

        public IQueryable<DismissalArchive> GetArchiveExportInfo(int? schoolId, DateTime archiveDate, out bool IsMilitaryTimeFormat)
        {
            DateTimeFormatInfo fi = new CultureInfo("en-US", true).DateTimeFormat;

            var timeFormat = db.School.Where(s => s.Id == schoolId)
              .Join(db.ArchiveTimeType,
               school => school.ArchiveTimeTypeId,
               archive => archive.Id,
               (school, archive) => new { school, archive }).Select(s => s.archive.Name.ToString()).FirstOrDefault();

            if (timeFormat == "AM/PM")
            {
                IsMilitaryTimeFormat = false;
            }
            else
            {
                IsMilitaryTimeFormat = true;
            }


            var query = from da in db.DismissalArchive
                        where da.SchoolId == schoolId && da.FlightDate.Date == archiveDate.Date
                        select new DismissalArchive
                        {
                            Id = da.Id,
                            ExternalId = da.ExternalId,
                            StudentName = da.StudentName,
                            Grade = da.Grade,
                            ParentName = da.ParentName,
                            Flight = da.Flight,
                            SchoolId = da.SchoolId,
                            StudentId = da.StudentId,
                            Lane = da.Lane,
                            FlightDate = da.FlightDate,
                            ClassroomTime = (String.IsNullOrEmpty(da.ClassroomTime)) ? "-" : Convert.ToDateTime(da.ClassroomTime).ToString("HH:mm"),
                            HallwayTime = (String.IsNullOrEmpty(da.HallwayTime)) ? "-" : Convert.ToDateTime(da.HallwayTime).ToString("HH:mm"), 
                            ScanningTime = (String.IsNullOrEmpty(da.ScanningTime)) ? "-" : Convert.ToDateTime(da.ScanningTime).ToString("HH:mm"),
                            ArchiveDate = da.ArchiveDate,
                            FlightLaneId = da.FlightLaneId
                        };
            
            return query;
        }

        private void MoveDismissalToDismissalArchive(Flight flight)
        {
            //d.HallwayReleaseTime.TimeOfDay <= DateTime.MinValue.TimeOfDay
            var archiveData = (from l2f in db.Lanes2Fights
                               join l in db.Lane on l2f.LaneId equals l.Id
                               join d in db.Dismissal on l2f.Id equals d.FlightLaneId
                               join s in db.Student on d.StudentId equals s.Id
                               join p in db.Parent on d.ParentId equals p.Id
                               where l2f.FlightId == flight.Id
                               select new DismissalArchive
                               {
                                   ExternalId = s.ExternalId,
                                   StudentName = s.Name,
                                   StudentId = s.Id,
                                   Grade = s.Grade,
                                   ParentName = p.Name,
                                   SchoolId = s.SchoolId,
                                   Flight = flight.Number,
                                   Lane = l.Name,
                                   FlightDate = flight.Date,
                                   ClassroomTime = (d.ClassroomReleaseTime.ToString("HH:mm:ss") != "00:00:00") ? d.ClassroomReleaseTime.ToString() : null,
                                   HallwayTime = (d.HallwayReleaseTime.ToString("HH:mm:ss") != "00:00:00") ? d.HallwayReleaseTime.ToString(): null,
                                   ScanningTime = (d.ScanTime.ToString("HH:mm:ss") != "00:00:00") ? d.ScanTime.ToString(): null,
                                   FlightLaneId = l2f.Id,
                                   ArchiveDate = DateTime.Now
                               }).ToList();

            if (archiveData != null && archiveData.Count() > 0)
            {
                foreach (var item in archiveData)
                {
                    db.Insert(item);
                    db.Dismissal.Where(d => d.StudentId == item.StudentId).Delete();
                }
            
                //delete from Lane2Flight
                db.Lanes2Fights.Where(l => l.FlightId == flight.Id).Delete();

                //delete from flght
                db.Flight.Where(f => f.Id == flight.Id).Delete();
            }
        }
       
        #endregion

        //AlexBodnar, 25/03/2018, Scanning Configuration
        #region ScannerData

        public List<Lane> GetScannerLanes(int userId)
        {
            var lanes = (from sp in db.SchoolPersonal
                         join l in db.Lane on sp.SchoolId equals l.SchoolId
                         where sp.Id == userId && l.UserId == userId
                         select l).ToList();


            return lanes;
        }
        
        public ScannerInitData GetScannerConfiguration(int userId)
        {
            var school = (from sp in db.SchoolPersonal
                          join s in db.School on sp.SchoolId equals s.Id
                          where sp.Id == userId
                          select s).FirstOrDefault();

            if (school == null) { return null; }

            var scannerData = new ScannerInitData();
            scannerData.ScanningMode = school.LaneLogisticTypeId == 1 ? "single" : "multiple"; // 1-single, 2-multiple
            scannerData.AssignedLanes = db.Lane.Where(l => l.SchoolId == school.Id && l.UserId == userId)
                                              .Select(l => new AssignedLane { Id = l.Id, Name = l.Name, Color = l.Color })
                                              .ToList();
            if (scannerData.AssignedLanes == null || scannerData.AssignedLanes.Count() == 0)
            {
                scannerData.ScannedStudents = new List<ScannedStudent>();
                return scannerData;
            }

            scannerData.ScannedStudents = (from f in db.Flight
                                          join l2f in db.Lanes2Fights on f.Id equals l2f.FlightId
                                          join l in db.Lane on l2f.LaneId equals l.Id
                                          join d in db.Dismissal on l2f.Id equals d.FlightLaneId
                                          join s in db.Student on d.StudentId equals s.Id
                                          join p in db.Parent on d.ParentId equals p.Id
                                          where f.SchoolId==school.Id && f.Date >= DateTime.Today && f.StatusId==1
                                                && l2f.StatusId==1 && l.UserId==userId && d.UserId == userId
                                          select new ScannedStudent
                                          {
                                              FlightNumber = f.Number,
                                              CardId = d.Id,
                                              Lane = l,
                                              Name = s.Name,
                                              StudentId = s.Id,
                                              ParentId = p.Id,
                                              ParentLicense = p.DriverLicense,
                                              ParentName=p.Name

                                          }).ToList();
            return scannerData;
        }

        #endregion
    }



}
