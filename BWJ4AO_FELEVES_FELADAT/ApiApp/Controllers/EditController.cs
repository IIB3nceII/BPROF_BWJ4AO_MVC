using Logic;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ApiApp.Controllers
{
      [Authorize]
      [ApiController]
      [Route("{controller}")]
      public class EditController : ControllerBase
      {
            CategoryLogic categoryLogic;
            CompetitorLogic competitorLogic;
            SponsorLogic sponsorLogic;

            public EditController(CategoryLogic categoryLogic, CompetitorLogic competitorLogic, SponsorLogic sponsorLogic)
            {
                  this.categoryLogic = categoryLogic;
                  this.competitorLogic = competitorLogic;
                  this.sponsorLogic = sponsorLogic;
            }

            [HttpGet]
            public void FillDb()
            {
                  categoryLogic.FillDbWithSamples();
            }
      }
}
