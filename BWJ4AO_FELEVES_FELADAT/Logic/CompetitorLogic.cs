using Models;
using Repository;
using System;
using System.Linq;

namespace Logic
{
      public class CompetitorLogic
      {
            IRepository<Competitor> comprepo;
            IRepository<Category> categrepo;
            IRepository<Sponsor> sponsrepo;

            public CompetitorLogic(IRepository<Competitor> comprepo, IRepository<Category> categrepo, IRepository<Sponsor> sponsrepo)
            {
                  this.comprepo = comprepo;
                  this.categrepo = categrepo;
                  this.sponsrepo = sponsrepo;
            }

            public void Add(Competitor c)
            {
                  this.comprepo.AddNewItem(c);
            }

            public void Delete(string id)
            {
                  this.comprepo.Delete(id);
            }

            public IQueryable<Competitor> List()
            {
                  return comprepo.ListAll();
            }

            public Competitor Find(string id)
            {
                  return comprepo.FindOne(id);
            }

            public void Update(string id, Competitor c)
            {
                  comprepo.UpdateData(id, c);
            }

            public IQueryable<Competitor> ListByCategory(string id)
            {
                  var q = from x in comprepo.ListAll()
                          where x.CategoryId == id
                          select x;

                  return q.AsQueryable();
            }
      }
}
