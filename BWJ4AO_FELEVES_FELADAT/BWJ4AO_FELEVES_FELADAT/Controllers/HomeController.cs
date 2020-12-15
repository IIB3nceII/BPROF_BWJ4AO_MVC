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
            /*--------------------------------CATEGORY--------------------------------------*/
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
            public IActionResult ListByCategory(string id)
            {
                  return View(nameof(ListCategories), categorylogic.ListByCategory(id));
            }

            [HttpGet]
            public IActionResult EditCategory(string id)
            {
                  return View(nameof(EditCategory),categorylogic.Find(id));
            }

            [HttpPost]
            public IActionResult EditCategory(Category c)
            {
                  categorylogic.Update(c.CategoryId, c);

                  return View(nameof(ListCategories), categorylogic.List());
            }


            public IActionResult DeleteCategory(string id)
            {
                  categorylogic.Delete(id);

                  return View(nameof(ListCategories), categorylogic.List());
            }


            /*------------------------------COMPETITOR--------------------------------*/

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

            [HttpGet]
            public IActionResult ListByCompetitor(string id)
            {
                  return View(nameof(ListCompetitors), competitorlogic.ListByCompetitor(id));
            }

            [HttpGet]
            public IActionResult EditCompetitor(string id)
            {
                  return View(nameof(EditCompetitor),competitorlogic.Find(id));
            }

            [HttpPost]
            public IActionResult EditCompetitor(Competitor c)
            {
                  competitorlogic.Update(c.CompetitorId, c);

                  return View(nameof(ListCompetitors), competitorlogic.List());
            }

            public IActionResult DeleteCompetitor(string id)
            {
                  competitorlogic.Delete(id);
                  return View(nameof(ListCompetitors), competitorlogic.List());
            }

            /*------------------------------SPONSOR-------------------------------*/

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

                  return View(nameof(ListSponsors), sponsorlogic.ListBySponsor(s.SponsorId));
            }

            [HttpGet]
            public IActionResult ListSponsors()
            {
                  return View(sponsorlogic.List());
            }

            [HttpGet]
            public IActionResult ListBySponsor(string id)
            {
                  return View(nameof(ListSponsors), sponsorlogic.ListBySponsor(id));
            }

            [HttpGet]
            public IActionResult EditSponsor(string id)
            {
                  return View(nameof(EditSponsor),sponsorlogic.Find(id));
            }

            [HttpPost]
            public IActionResult EditSponsor(Sponsor s)
            {
                  sponsorlogic.Update(s.SponsorId, s);

                  return View(nameof(ListSponsors), sponsorlogic.List());
            }

            public IActionResult DeleteSponsor(string id)
            {
                  sponsorlogic.Delete(id);
                  return View(nameof(ListSponsors), sponsorlogic.List());
            }

            /*----------------------------------NON CRUD METHODS------------------------------------------*/

            public IActionResult GenerateData()
            {
                  Category c1 = new Category { CategoryId = Guid.NewGuid().ToString(), Name =CategoryType.MrOlympia,StartingWeight=110,MaximumWeight=135};
                  categorylogic.Add(c1);

                  Category c2 = new Category { CategoryId = Guid.NewGuid().ToString(), Name = CategoryType.ClassicPhysique, StartingWeight = 90, MaximumWeight = 110 };
                  categorylogic.Add(c2);

                  Category c3 = new Category { CategoryId = Guid.NewGuid().ToString(), Name = CategoryType.MensPhisyque, StartingWeight = 75, MaximumWeight = 110 };
                  categorylogic.Add(c3);

                  Category c4 = new Category { CategoryId = Guid.NewGuid().ToString(), Name = CategoryType.WomensBikini, StartingWeight = 45, MaximumWeight = 70 };
                  categorylogic.Add(c4);
                  /*----------------------------------------------------------------------------*/
                  Competitor co1 = new Competitor { CompetitorId = Guid.NewGuid().ToString(), Number = 44, Name = "Brendon Curry", Nationality = "USA", Gender = GenderType.Male, Height = 172, Weight = 120, AchivedPlace = 1, CategoryId = c1.CategoryId, };
                  competitorlogic.Add(co1);

                  Competitor co2 = new Competitor { CompetitorId = Guid.NewGuid().ToString(), Number = 12, Name = "William Bonac", Nationality = "USA", Gender = GenderType.Male, Height = 173, Weight = 116, AchivedPlace = 2, CategoryId = c1.CategoryId, };
                  competitorlogic.Add(co2);

                  Competitor co3 = new Competitor { CompetitorId = Guid.NewGuid().ToString(), Number = 10, Name = "Chris Bumstead", Nationality = "England", Gender = GenderType.Male, Height = 175, Weight = 103, AchivedPlace = 1, CategoryId = c2.CategoryId, };
                  competitorlogic.Add(co3);

                  Competitor co4 = new Competitor { CompetitorId = Guid.NewGuid().ToString(), Number = 31, Name = "Breon Ansley", Nationality = "USA", Gender = GenderType.Male, Height = 175, Weight = 98, AchivedPlace = 2, CategoryId = c2.CategoryId, };
                  competitorlogic.Add(co4);

                  Competitor co5 = new Competitor { CompetitorId = Guid.NewGuid().ToString(), Number = 17, Name = "Raymont Edmunds", Nationality = "England", Gender = GenderType.Male, Height = 175, Weight = 82, AchivedPlace = 1, CategoryId = c3.CategoryId, };
                  competitorlogic.Add(co5);

                  Competitor co6 = new Competitor { CompetitorId = Guid.NewGuid().ToString(), Number = 13, Name = "Andre Ferguson", Nationality = "England", Gender = GenderType.Male, Height = 186, Weight = 94, AchivedPlace = 2, CategoryId = c3.CategoryId, };
                  competitorlogic.Add(co6);

                  Competitor co7 = new Competitor { CompetitorId = Guid.NewGuid().ToString(), Number = 80, Name = "Elisa Pecini", Nationality = "Brazil", Gender = GenderType.Female, Height = 164, Weight = 62, AchivedPlace = 1, CategoryId = c4.CategoryId, };
                  competitorlogic.Add(co7);

                  Competitor co8 = new Competitor { CompetitorId = Guid.NewGuid().ToString(), Number = 80, Name = "Janet Layug", Nationality = "USA", Gender = GenderType.Female, Height = 166, Weight = 60, AchivedPlace = 2, CategoryId = c4.CategoryId, };
                  competitorlogic.Add(co8);

                  /*-------------------------------------------------------------------------------------------------------------------------------------------*/

                  Sponsor s1 = new Sponsor {SponsorId=Guid.NewGuid().ToString(), Name="Scitec Nutrition", Nationality="USA", Placeholder="The Scitec Guy", CompetitorId=co1.CompetitorId};
                  sponsorlogic.Add(s1);

                  Sponsor s2 = new Sponsor { SponsorId = Guid.NewGuid().ToString(), Name = "GymBeam", Nationality = "USA", Placeholder = "The GymBeam Guy", CompetitorId = co1.CompetitorId };
                  sponsorlogic.Add(s2);

                  Sponsor s3 = new Sponsor { SponsorId = Guid.NewGuid().ToString(), Name = "Biotech USA", Nationality = "Nem USA", Placeholder = "The Biotech Guy", CompetitorId = co5.CompetitorId };
                  sponsorlogic.Add(s3);

                  Sponsor s4 = new Sponsor { SponsorId = Guid.NewGuid().ToString(), Name = "Mutant", Nationality = "USA", Placeholder = "The Mutant Guy", CompetitorId = co4.CompetitorId };
                  sponsorlogic.Add(s4);



                  return RedirectToAction(nameof(Index));
            }


            public IActionResult Stat()
            {
                  Stat s = new Stat();

                  var q = (from x in categorylogic.List().ToList()
                           join k in competitorlogic.List().ToList()
                           on x.CategoryId equals k.CategoryId
                           group x by x.Name into g
                           select new
                           {
                                 _NAME = g.Key,
                                 _AVG = g.SelectMany(x => x.Competitors).Distinct().Average(k => k.Weight)
                           }).OrderByDescending(x => x._AVG).FirstOrDefault();

                  s.BiggesAvgWeight = q._NAME;


                  var mpc = (from x in competitorlogic.List().ToList()
                              join k in sponsorlogic.List().ToList()
                              on x.CompetitorId equals k.CompetitorId
                              group x by x.Name into g
                              select new
                              {
                                    _NAME = g.Key,
                                    _SPONSORCOUNT = g.SelectMany(x => x.Sponsors).Count()
                              }).OrderByDescending(x => x._SPONSORCOUNT).FirstOrDefault();

                  s.MostPopularCompetitor = mpc._NAME;

                  var winnersponsor = (from x in competitorlogic.List().ToList()
                                        join k in sponsorlogic.List().ToList()
                                        on x.CompetitorId equals k.CompetitorId
                                        where x.AchivedPlace == 1 && x.Gender == GenderType.Female
                                        group x by x.Name into g
                                        select new
                                        {
                                              _NAME = g.Key,
                                              _SPONSORS = g.SelectMany(x => x.Sponsors)
                                        }).ToList();


                  return View(s);
            }
      }
}
