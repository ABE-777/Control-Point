using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using WebAPI.Data.DTOs;
using Microsoft.Extensions.Logging;
using WebAPI.Models.Responses;
using WebAPI.Security;
using WebAPI.Models.Requests;
using static WebAPI.Helpers.Enums;
using Microsoft.AspNetCore.Authorization;

namespace WebAPI.Controllers
{
    [Produces("application/json")]
    [Route("api/[controller]/[action]")]
    public class CardController : BaseController
    {
        public CardController(ILogger<BaseController> logger, IUserIdentity _userIdentity) : base(logger, _userIdentity)
        {
        }

        [HttpGet]
        [Authorize(Policy = "SchoolAdmin")]
        public IActionResult GetDismissalCards()
        {
            int schoolId = Convert.ToInt32(GetSchoolIdForCurrentUser());
            var cards = ds.GetCardsForList(schoolId);
            int printingTypeId = ds.GetPrintingType(schoolId) ?? 0;
            bool isHasStudents = ds.IsHasStudentsAtSchool(schoolId);
            return Ok(new { cards, printingTypeId, isHasStudents });

        }

        [HttpGet]
        [Authorize(Policy = "DismissalCards")]
        public IActionResult GetMainParents()
        {            
            var parents = ds.GetMainParentsList(Convert.ToInt32(GetSchoolIdForCurrentUser()));
            return Ok(parents);
        }

        [HttpGet]
        [Route("{id}")]
        [Authorize(Policy = "DismissalCards")]
        public IActionResult GetDismissalCardById(int id)
        {

            DismissalCard card = null;
            
            card = ds.GetDismissalCard(id);

            if (card == null)
            {
                return NotFound("Card not found");
            }

            return Ok(card);
        }


        [HttpPut]
        [Authorize(Policy = "DismissalCards")]
        public IActionResult EditDismissalCard([FromBody]DismissalCard model)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }
            var dismissalCardEditingResult = ds.UpdateDismissalCard(model);
            if (dismissalCardEditingResult == ObjectManipulationResult.ErrorOccured)
            {
                return BadRequest("Error occured while editing the dismissal card!");
            }
            return Ok();
        }

        [HttpPut]
        [Authorize(Policy = "DismissalCards")]
        public IActionResult EditDismissalCardPrinted([FromBody]int[] ids)
        {
            var result = ds.UpdateDismissalCardPrinted(ids);
            if (result == ObjectManipulationResult.ErrorOccured)
            {
                return BadRequest("Error occured while seting the card as printed!");
            }
            return Ok();
        }

        [HttpPut]
        [Authorize(Policy = "DismissalCards")]
        public IActionResult EditDismissalCardStatus([FromBody]EditCardStatusModel model)
        {
            if (ModelState.IsValid)
            {
                var result = ds.UpdateDismissalCardStatus(model.CardId, model.StatusId);
                if (result == ObjectManipulationResult.ErrorOccured)
                {
                    return BadRequest("Error occured while seting the card as printed!");
                }
                else if (result == ObjectManipulationResult.NotFound)
                {
                    return NotFound("Card not found");
                }
                else
                {
                    return Ok();
                }
            }
            else
            {
                return BadRequest("Model is wrong");
            }
        }

        [HttpPost]
        [Authorize(Policy = "DismissalCards")]
        public IActionResult CreateDismissalCard([FromBody]DismissalCard model)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }
            var dismissalCardCreatingResult = ds.InsertDismissalCard(model);
            if (dismissalCardCreatingResult == ObjectManipulationResult.ErrorOccured)
            {
                return BadRequest("Error occured while creating the dismissal card!");
            }
            return Ok("Card created!");
        }

        [HttpDelete]
        [Route("{id}")]
        [Authorize(Policy = "DismissalCards")]
        public IActionResult DeleteDismissalCard(int id)
        {
            var dismissalCardDeletingResult = ds.DeleteDismissalCard(id);
            if (dismissalCardDeletingResult == ObjectManipulationResult.ErrorOccured)
            {
                return StatusCode(500, "Error occured!");
            }
            if (dismissalCardDeletingResult == ObjectManipulationResult.Conflict)
            {
                return StatusCode(409, "Card is in active flight!");
            }
            return NoContent();
        }
    }
}