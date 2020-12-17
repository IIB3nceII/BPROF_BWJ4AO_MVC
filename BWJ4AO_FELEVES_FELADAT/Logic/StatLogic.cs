using Models;
using Repository;
using System;
using System.Collections.Generic;
using System.Text;
using System.Linq;

namespace Logic
{
      public class StatLogic
      {
            public CategoryType BiggestAvg(IRepository<Category> r, IRepository<Competitor> r2)
            {
                  CategoryLogic c = new CategoryLogic(r);
                  CompetitorLogic com = new CompetitorLogic(r2);

                  var q = (from x in c.List()
                           join k in com.List()
                           on x.CategoryId equals k.CategoryId
                           group x by x.Name into g
                           select new
                           {
                                 _NAME = g.Key,
                                 _AVG = g.SelectMany(x => x.Competitors).Distinct().Average(k => k.Weight)
                           }).OrderByDescending(x => x._AVG).FirstOrDefault();

                  return q._NAME;
            }

            public string MostPopularComp(IRepository<Competitor> r, IRepository<Sponsor> r2)
            {
                  CompetitorLogic c = new CompetitorLogic(r);
                  SponsorLogic s = new SponsorLogic(r2);

                  var mpc = (from x in c.List()
                             join k in s.List()
                             on x.CompetitorId equals k.CompetitorId
                             group x by x.Name into g
                             select new
                             {
                                   _NAME = g.Key,
                                   _SPONSORCOUNT = g.SelectMany(x => x.Sponsors).Count()
                             }).OrderByDescending(x => x._SPONSORCOUNT).FirstOrDefault();

                  return mpc._NAME;
            }

            public CategoryType BiggestCategory(IRepository<Category> r, IRepository<Competitor> r2)
            {
                  CategoryLogic c = new CategoryLogic(r);
                  CompetitorLogic com = new CompetitorLogic(r2);

                  var bgc = (from x in c.List()
                             join k in com.List()
                             on x.CategoryId equals k.CategoryId
                             group x by x.Name into g
                             select new
                             {
                                   _NAME = g.Key,
                                   _COUNT = g.SelectMany(x => x.Competitors).Count()
                             }).OrderByDescending(x => x._COUNT).FirstOrDefault();

                  return bgc._NAME;
            }
      }
}