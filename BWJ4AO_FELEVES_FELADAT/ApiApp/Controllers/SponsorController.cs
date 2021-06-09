using Logic;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ApiApp.Controllers
{
      [Authorize]
      [ApiController]
      [Route("{controller}")]
      public class SponsorController : ControllerBase
      {
            SponsorLogic logic;

            public SponsorController(SponsorLogic logic)
            {
                  this.logic = logic;
            }

            [HttpDelete("{uid}")]
            public void DeleteSponsor(string uid)
            {
                  logic.Delete(uid);
            }

            [HttpGet("{uid}")]
            public Sponsor GetSponsor(string uid)
            {
                  return logic.Find(uid);
            }

            [HttpGet]
            public IEnumerable<Sponsor> GetAllSponsor()
            {
                  return logic.List();
            }

            [HttpPost]
            public void AddSponsor([FromBody] Sponsor item)
            {
                  logic.Add(item);
            }

            [HttpPut("{oldid}")]
            public void UpdateSponsor(string oldid, [FromBody] Sponsor item)
            {
                  logic.Update(oldid, item);
            }
      }
}
