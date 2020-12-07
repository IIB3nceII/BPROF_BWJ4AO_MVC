using System;
using System.Collections.Generic;
using System.Linq;
using Models;
using Logic;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;

namespace BWJ4AO_FELEVES_FELADAT.Controllers
{
      public class HomeController : Controller
      {
            CategoryLogic categorylogic;
            CompetitorLogic competitorlogic;
            SponsorLogic sponsorlogic;

            public HomeController(CategoryLogic categorylogic, CompetitorLogic competitorlogic, SponsorLogic sponsorlogic)
            {
                  this.categorylogic = categorylogic;
                  this.competitorlogic = competitorlogic;
                  this.sponsorlogic = sponsorlogic;
            }

            public IActionResult Index()
            {
                  return View();
            }

            [HttpGet]
            public IActionResult ChooseCategory()
            {
                  return View();
            }

            [HttpGet]
            public IActionResult AddCompetitor()
            {
                  return View();
            }

            [HttpPost]
            public IActionResult AddCompetitor(Competitor c)
            {
                  c.CompetitorId = Guid.NewGuid().ToString();
                  competitorlogic.Add(c);

                  return RedirectToAction(nameof(ListCompetitor));
            }

            [HttpGet]
            public IActionResult ListCompetitor()
            {
                  return View();
            }
      }
}
