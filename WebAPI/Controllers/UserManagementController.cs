using System.Collections.Generic;
using Microsoft.AspNetCore.Mvc;
using WebAPI.Data;
using Microsoft.AspNetCore.Authorization;
using WebCreek.Framework.Auth0.ManagementAPI.ManagementAPIClient;
using WebAPI.Data.DTOs;
using WebCreek.Framework.Auth0.AuthenticationAPI.AuthenticationAPIClient;
using Microsoft.Extensions.Logging;
using static WebAPI.Helpers.Enums;
using WebAPI.Models.Responces;
using WebAPI.Models.Responses;
using WebAPI.Models.Requests;
using System;
using WebAPI.Security;
using System.Net;

namespace WebAPI.Controllers
{
    [Produces("application/json")]
    [Route("api/[controller]/[action]")]
    public class UserManagementController : BaseController
    {
        public UserManagementController(ILogger<BaseController> logger, IUserIdentity _userIdentity) : base(logger, _userIdentity) { }

        [Produces("application/json")]
        [Authorize(Policy = "SchoolAdmin")]
        public List<Role> GetRoles()
            => ds.GetRoles();

        [Produces("application/json")]
        [Authorize(Policy = "SchoolAdmin")]
        public List<UserRecord> GetUsers()
        {
            return ds.GetUserRecords(Convert.ToInt32(GetSchoolIdForCurrentUser()));
        }

        [Produces("application/json")]
        [HttpGet]
        [Authorize(Policy = "SchoolAdmin")]
        public SchoolUserResponseModel GetUserById(int id, int schoolId)
        {
            SchoolUserResponseModel result = new SchoolUserResponseModel()
            {
                UserAccount = ds.GetSchoolUserById(id, schoolId)
            };

            if (result.UserAccount == null)
            {
                result.Code = 0;
                result.Message = "User not found";
            }
            else
            {
                result.Code = 0;
                result.Message = "User found";
            }

            return result;
        }

        [Produces("application/json")]
        [HttpGet]
        [Route("{id}")]
        [Authorize(Policy = "SchoolAdmin")]
        public IActionResult GetUser(int id)
        {
            EditUserModel user = ds.GetUser(id);

            if (user == null)
            {
                return NotFound();
            }

            return Ok(user);
        }

        [Produces("application/json")]
        [HttpGet]
        public UserConfigurationResponseModel GetUserConfiguration()
        {
            UserConfigurationResponseModel result = new UserConfigurationResponseModel();
            int id = userIdentity.GetCurrentUser().Result.Id;

            var user = ds.GetUserById(id);

            if (user != null)
            {
                result.Email = user.Email;
                result.Username = user.Name;

                result.Code = 0;
                result.Message = "User  found";
            }
            else
            {
                result.Code = 0;
                result.Message = "User not found";
            }

            return result;
        }


        [Produces("application/json")]
        [HttpPost]
        public IActionResult SetUserConfiguration([FromBody]SetUserConfigurationModel model)
        {
            int id = userIdentity.GetCurrentUser().Result.Id;

            if (ModelState.IsValid)
            {
                if (!String.IsNullOrEmpty(model.Password) &&
                              !String.IsNullOrWhiteSpace(model.Password) &&
                              (!String.IsNullOrEmpty(model.NewPassword) &&
                              !String.IsNullOrWhiteSpace(model.NewPassword)) &&
                              (!String.IsNullOrEmpty(model.NewPasswordConfirmation) &&
                              !String.IsNullOrWhiteSpace(model.NewPasswordConfirmation)))
                {
                    using (var managementClient = new ManagementApiClient())
                    {
                        if (managementClient.AuthenticateUser(model.Email, model.Password).StatusCode == HttpStatusCode.OK)
                        {
                            if (model.NewPassword == model.NewPasswordConfirmation)
                            {
                                if (managementClient.EditUsersPassword(model.Email, model.NewPassword).StatusCode != HttpStatusCode.OK)
                                {
                                    return new StatusCodeResult(503);
                                }                                
                            }
                            else
                            {
                                return new StatusCodeResult(400);
                            }
                        }
                        else
                        {
                            return new StatusCodeResult(403);
                        }
                    }
                }
                var result = ds.EditUsername(id, model.Username);                    

                switch (result)
                {
                    case ObjectManipulationResult.Success:
                        return new StatusCodeResult(200);
                    case ObjectManipulationResult.Exists:
                        return new StatusCodeResult(409);
                    case ObjectManipulationResult.ErrorOccured:
                        return new StatusCodeResult(500);
                    default:
                        return new StatusCodeResult(500);
                }
            }
            else
            {
                return new StatusCodeResult(400);
            }
        }

        [HttpGet]
        [Route("{email}")]
        [AllowAnonymous]
        public IActionResult CheckSetPasswordLink(string email)
        {
            if (!String.IsNullOrEmpty(email) && !String.IsNullOrWhiteSpace(email))
            {
                User user = ds.GetUserByEmail(email);

                if (user != null)
                {
                    if (user.StatusId != 4)
                    {
                        if (user.IsPasswordSet)
                        {
                            return BadRequest("Link is already used");
                        }
                        else
                        {
                            return Ok("Link is valid");
                        }
                    }
                    else
                    {
                        return BadRequest("User account is suspended");
                    }
                }
                else
                {
                    return NotFound("User not found. Link is not actual anymore");
                }
            }
            else
            {
                return BadRequest("Mail is not set");
            }
        }

        [HttpPost]
        [AllowAnonymous]
        public IActionResult SetUserPassword([FromBody]UserCredentialsModel model)
        {
            if (ModelState.IsValid)
            {
                if (!String.IsNullOrEmpty(model.Password) &&
                    !String.IsNullOrWhiteSpace(model.Password))
                {
                    User user = ds.GetUserByEmail(model.Email);

                    if (user != null)
                    {
                        if (!user.IsPasswordSet)
                        {
                            using (var managementClient = new ManagementApiClient())
                            {
                                try
                                {
                                    managementClient.EditUsersPassword(model.Email, model.Password);

                                    ds.EditUserPassword(user.Id, model.Email, model.Password);

                                    return new StatusCodeResult(200);
                                }
                                catch
                                {
                                    return StatusCode(500, "Error occured, please try again");
                                }
                            }
                        }
                        else
                        {
                            return BadRequest("The link you clicked on is invalid or has expired. Please contact the administrator.");
                        }
                    }
                    else
                    {
                        return NotFound("User not found");
                    }
                }
                else
                {
                    return BadRequest("Password field is empty");
                }
            }
            else
            {
                return BadRequest("Model is wrong");
            }
        }

        //api/UserManagement/NewUser
        [HttpPost]
        [Authorize(Policy = "SchoolAdmin")]
        public IActionResult NewUser([FromBody]NewUser user)
        {
            if (ModelState.IsValid)
            {
                switch (ds.AddNewUser(user, Convert.ToInt32(GetSchoolIdForCurrentUser())))
                {
                    case ObjectManipulationResult.Success:
                        using (var managementClient = new ManagementApiClient())
                        {
                            var userAuth0 = managementClient.CreateUser(user);
                            if (userAuth0 != null)
                            {
                                managementClient.RequestVerifyEmail(userAuth0?.UserId);
                            }
                        }
                        return StatusCode(200, "New user created successfully");
                    case ObjectManipulationResult.Exists:
                        return StatusCode(409, "User exists");
                    case ObjectManipulationResult.ErrorOccured:
                        return StatusCode(503, "Error occured");
                    default:
                        return StatusCode(503, "Error occured");
                }
            }

            return StatusCode(400, "Model is not valid");
        }

        [HttpGet]
        public IActionResult InviteUser(string email)
        {

            using (var managementClient = new ManagementApiClient())
            {
                var userAuth0 = managementClient.GetUserByEmail(email);
                if (userAuth0 == null)
                {
                    return Ok("Varify Email didn't send. Need to Invite User");
                }
                managementClient.RequestVerifyEmail(userAuth0.UserId);
                return Ok(userAuth0);
            }

        }

        [HttpPost]
        [Authorize(Policy = "SchoolAdmin")]
        public IActionResult EditUser([FromBody]EditUserModel model)
        {
            if (ModelState.IsValid)
            {
                var editResult = ds.EditUser(model, Convert.ToInt32(GetSchoolIdForCurrentUser()));

                switch (editResult)
                {
                    case ObjectManipulationResult.Success:
                        result.Code = 200;
                        result.Message = "User successfully edited";
                        break;
                    case ObjectManipulationResult.NotFound:
                        result.Code = 404;
                        result.Message = "User was not found";
                        break;
                    case ObjectManipulationResult.ErrorOccured:
                        result.Code = 500;
                        result.Message = "Error occured while editing user";
                        break;
                }

                return StatusCode(result.Code, result.Message);
            }

            return StatusCode(400, "Model is not valid");
        }

        [HttpDelete]
        [Route("{email}")]
        [Authorize(Policy = "SchoolAdmin")]
        public IActionResult DeleteUserByEmail(string email)
        {
            if (ds.IsUserSchoolAdmin(email))
            {
                return BadRequest("You will not be able to delete a School Admin.");
            }
            ObjectManipulationResult deleteResult;

            using (var managementClient = new ManagementApiClient())
            {
                try
                {
                    var DbUser = ds.GetUserByEmail(email);
                    if (DbUser != null)
                        deleteResult = ds.DeleteUser(email);
                    else
                        deleteResult = ObjectManipulationResult.Success;

                    if (deleteResult == ObjectManipulationResult.Success)
                    {
                        var Auth0user = managementClient.GetUserByEmail(email);
                        if (Auth0user != null)
                            managementClient.DeleteUser(Auth0user.UserId);
                    }

                }
                catch (IndexOutOfRangeException ie)
                {
                    deleteResult = ObjectManipulationResult.NotFound;
                }
                catch (Exception e)
                {
                    deleteResult = ObjectManipulationResult.ErrorOccured;
                }
            }

            if (deleteResult == ObjectManipulationResult.ErrorOccured)
            {
                return StatusCode(500, "Error occured while deleting this user!");
            }

            if (deleteResult == ObjectManipulationResult.Exists)
            {
                return StatusCode(409, "You can't delete main school admin!");
            }

            return NoContent();
        }

        [Route("{email}")]
        [AllowAnonymous]
        public IActionResult ResetPassword(string email)
        {
            using (var auth0Client = new AuthenticationApiClient())
            {
                auth0Client.RequestChangePassword(email);
            }
            return new StatusCodeResult(200);
        }

        //api/UserManagement/IsUserExist?userEmail=mail
        [HttpGet]
        [AllowAnonymous]
        public IActionResult IsUserExist(string userEmail)
        {
            var isUser = ds.GetUserByEmail(userEmail);
            if (isUser != null)
            {
                return Ok("Exist");
            }
            return Ok("NotExist");
        }

        //api/UserManagement/IsUserParent/email@email.com
        [HttpGet]
        [Route("{email}")]
        [Authorize(Policy = "SchoolAdmin")]
        public IActionResult IsUserParent(string email)
        {
            return Ok(ds.GetRoleIdByEmail(email));
        }

        [HttpGet]
        [Route("{email}")]
        [Authorize(Policy = "SchoolAdmin")]
        public IActionResult SuspendUser(string email)
        {
            if (ds.IsUserSchoolAdmin(email))
            {
                return BadRequest("You will not be able to suspend a School Admin.");
            }
            var result = ds.SetSuspendedStatus(email);

            if (result == ObjectManipulationResult.ErrorOccured)
            {
                return StatusCode(500, "Error occured while suspending the user!");
            }

            return Ok();
        }

        [HttpGet]
        [Route("{email}")]
        [Authorize]
        public IActionResult ActivateUser(string email)
        {
            var result = ds.SetActiveStatus(email);

            if (result == ObjectManipulationResult.ErrorOccured)
            {
                return StatusCode(500, "Error occured while activating the user!");
            }

            return Ok();
        }


        [HttpGet]
        [Route("{email}")]
        [AllowAnonymous]
        public IActionResult Suspended(string email)
        {
            return Json(ds.GetUserStatus(email));
        }


        //api/UserManagement/GetUserInfo
        [HttpGet]
        [Authorize]
        public IActionResult GetUserInfo()
        // TODO: need to refactor
        {
            string email = userIdentity?.GetCurrentUser().Result?.Email;
            var user = ds.GetUserInfo(email);
            if (user != null)
            {
                return Ok(user);
            }
            return NotFound();
        }

        //api/UserManagement/GetCurrentUser
        [HttpGet]
        [Authorize]
        public IActionResult GetCurrentUser()
        // TODO: need to refactor
        {
            var user = userIdentity.GetCurrentUser().Result;
            if (user != null)
            {
                return Ok(user);
            }
            return NotFound();
        }

        [HttpPost]
        [Authorize(Policy = "SchoolAdmin")]
        public IActionResult RequestTemporaryAccess([FromBody] TemporaryAccessModel model)
        {
            var result = ds.ImpersonateUser(model, userIdentity.GetCurrentUser().Result.Name);

            if (result == ObjectManipulationResult.Success)
            {
                return Ok("Impersonation request created successfully");
            }
            else if (result == ObjectManipulationResult.NotFound)
            {
                return NotFound("Impersonation request was not created because one of users or both not exist");
            }
            else if (result == ObjectManipulationResult.ErrorOccured)
            {
                return StatusCode(500, "Error occured while creating impersonation request");
            }
            else
            {
                return NotFound();
            }
        }

        [HttpPost]
        [AllowAnonymous]
        public IActionResult Login([FromBody] UserCredentialsModel model)
        {
            if (ModelState.IsValid)
            {
                string token;
                string authorizationResult = ds.Authenticate(model.Email, model.Password, out token);
                if (!String.IsNullOrEmpty(token) || !String.IsNullOrWhiteSpace(token))
                {
                    return Ok(new { Result = authorizationResult, Token = token });
                }
                else
                {
                    return StatusCode((int)HttpStatusCode.Forbidden, authorizationResult);
                }
            }
            else
            {
                return BadRequest("Model is not valid");
            }
        }
        
        [HttpGet]
        [Route("{email}")]
        [AllowAnonymous]
        public IActionResult ActivateUserAfterSetPassword(string email)
        {
            var result = ds.ActivateUserAfterSetPassword(email);

            if (result == ObjectManipulationResult.ErrorOccured)
            {
                return StatusCode(500, "Error occured while activating the user!");
            }
            else if (result == ObjectManipulationResult.NotFound)
            {
                return NotFound();
            }

            return Ok();
        }


    }
}