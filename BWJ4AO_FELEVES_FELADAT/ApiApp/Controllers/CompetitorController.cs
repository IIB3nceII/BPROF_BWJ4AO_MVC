using Logic;
using Microsoft.AspNetCore.Mvc;
using Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ApiApp.Controllers
{
      [ApiController]
      [Route("{controller}")]
      public class CompetitorController : ControllerBase
      {
            CompetitorLogic logic;

            public CompetitorController(CompetitorLogic logic)
            {
                  this.logic = logic;
            }

            [HttpDelete("{uid}")]
            public void DeleteCompetitor(string uid)
            {
                  logic.Delete(uid);
            }

            [HttpGet("{uid}")]
            public Competitor GetCompetitor(string uid)
            {
                  return logic.Find(uid);
            }

            [HttpGet]
            public IEnumerable<Competitor> GetAllCompetitor()
            {
                  return logic.List();
            }

            [HttpPost]
            public void AddCompetitor([FromBody] Competitor item)
            {
                  logic.Add(item);
            }

            [HttpPut("{oldid}")]
            public void UpdateCompetitor(string oldid, [FromBody] Competitor item)
            {
                  logic.Update(oldid, item);
            }
      }
}
