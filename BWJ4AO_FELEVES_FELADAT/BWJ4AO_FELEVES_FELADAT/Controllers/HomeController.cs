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

            public IActionResult Add()
            {
                  return View();
            }

            public IActionResult Data()
            {
                  return View();
            }
      }
}
