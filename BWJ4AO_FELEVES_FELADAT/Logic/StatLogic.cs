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
            public IRepository<Category> Cate { get; set; }
            public IRepository<Competitor> Com { get; set; }
            public IRepository<Sponsor> Spo { get; set; }

            public StatLogic(IRepository<Category> cate, IRepository<Competitor> com,IRepository<Sponsor> spo)
            {
                  this.Cate = cate;
                  this.Com = com;
                  this.Spo = spo;
            }

            public StatLogic(IRepository<Category> cate, IRepository<Competitor> com)
            {
                  this.Cate = cate;
                  this.Com = com;
            }

            public StatLogic()
            {

            }

            public CategoryType BiggestAvg(List<Category> c, List<Competitor> com)
            {

                  var q = (from x in com
                           group x by x.CategoryId into g
                           join k in c
                           on g.Key equals k.CategoryId
                           orderby g.Average(x => x.Weight) descending
                           select k.Name).FirstOrDefault();

                  return q;
            }

            public CategoryType HighestCompCategory(List<Category> c, List<Competitor> com)
            {
                  var q = (from x in c
                           join k in com
                           on x.CategoryId equals k.CategoryId
                           orderby k.Height descending
                           select x.Name).FirstOrDefault();


                  return q;
            }

            public CategoryType OnlyUSA(List<Category> c, List<Competitor> com)
            {
                  var bgc = (from x in com
                             where x.Nationality=="USA"
                             group x by x.CategoryId into g
                             join k in c
                             on g.Key equals k.CategoryId
                             orderby g.Count() descending
                             select k.Name).FirstOrDefault();

                  return bgc;
            }
      }
}