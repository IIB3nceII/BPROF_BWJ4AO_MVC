using Models;
using Repository;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace Logic
{
      public class SponsorLogic
      {
            IRepository<Competitor> comprepo;
            IRepository<Category> categrepo;
            IRepository<Sponsor> sponsrepo;

            public SponsorLogic(IRepository<Competitor> comprepo, IRepository<Category> categrepo, IRepository<Sponsor> sponsrepo)
            {
                  this.comprepo = comprepo;
                  this.categrepo = categrepo;
                  this.sponsrepo = sponsrepo;
            }

            public void Add(Sponsor s)
            {
                  this.sponsrepo.AddNewItem(s);
            }

            public void Delete(string id)
            {
                  this.sponsrepo.Delete(id);
            }

            public IQueryable<Sponsor> List()
            {
                  return sponsrepo.ListAll();
            }

            public Sponsor Find(string id)
            {
                  return sponsrepo.FindOne(id);
            }

            public void Update(string id, Sponsor s)
            {
                  sponsrepo.UpdateData(id, s);
            }

            public IQueryable<Sponsor> ListByCompetitor(string id)
            {
                  var q = from x in sponsrepo.ListAll()
                          where x.CompetitorId == id
                          select x;

                  return q.AsQueryable();
            }
      }
}
