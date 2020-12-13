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
            public IActionResult History()
            {
                  return View();
            }
            /*-----------------------------------------------------------------------------*/
            [HttpGet]
            public IActionResult AddCategory()
            {
                  return View();
            }

            [HttpPost]
            public IActionResult AddCategory(Category c)
            {
                  c.CategoryId = Guid.NewGuid().ToString();
                  categorylogic.Add(c);

                  return RedirectToAction(nameof(ListCategories));
            }

            [HttpGet]
            public IActionResult ListCategories()
            {
                  return View(categorylogic.List());
            }

            [HttpGet]
            public IActionResult ListByCategory(string cid)
            {
                  return View(nameof(ListCategories), categorylogic.ListByCategory(cid));
            }

            [HttpGet]
            public IActionResult EditCategory(string cid)
            {
                  return View(nameof(EditCategory), categorylogic.List());
            }

            [HttpPost]
            public IActionResult EditCategory(Category c)
            {
                  categorylogic.Update(c.CategoryId, c);

                  return View(nameof(EditCategory), categorylogic.List());
            }



            /*------------------------------------------------------------------------*/

            [HttpGet]
            public IActionResult AddCompetitor(string id)
            {
                  return View(nameof(AddCompetitor),id);
            }

            [HttpPost]
            public IActionResult AddCompetitor(Competitor c)
            {
                  c.CompetitorId = Guid.NewGuid().ToString();
                  competitorlogic.Add(c);

                  return View(nameof(ListCompetitors),categorylogic.ListByCategory(c.CategoryId));
            }

            [HttpGet]
            public IActionResult ListCompetitors()
            {
                  return View(competitorlogic.List());
            }

            /*------------------------------------------------------------------------*/

            [HttpGet]
            public IActionResult AddSponsor(string id)
            {
                  return View(nameof(AddSponsor), id);
            }

            [HttpPost]
            public IActionResult AddSponsor(Sponsor s)
            {
                  s.SponsorId = Guid.NewGuid().ToString();
                  sponsorlogic.Add(s);

                  return View(nameof(ListSponsors), sponsorlogic.ListByCompetitor(s.SponsorId));
            }

            [HttpGet]
            public IActionResult ListSponsors()
            {
                  return View(sponsorlogic.List());
            }
      }
}
