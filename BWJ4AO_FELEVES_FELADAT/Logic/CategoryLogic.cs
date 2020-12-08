using Models;
using Repository;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace Logic
{
      public class CategoryLogic
      {
            IRepository<Competitor> comprepo;
            IRepository<Category> categrepo;
            IRepository<Sponsor> sponsrepo;

            public CategoryLogic(IRepository<Competitor> comprepo, IRepository<Category> categrepo, IRepository<Sponsor> sponsrepo)
            {
                  this.comprepo = comprepo;
                  this.categrepo = categrepo;
                  this.sponsrepo = sponsrepo;
            }

            public void Add(Category c)
            {
                  this.categrepo.AddNewItem(c);
            }

            public void Delete(string id)
            {
                  this.categrepo.Delete(id);
            }

            public IQueryable<Category> List()
            {
                  return categrepo.ListAll();
            }
            

            public Category Find(string id)
            {
                  return categrepo.FindOne(id);
            }

            public void Update(string id, Category c)
            {
                  categrepo.UpdateData(id, c);
            }

            public IQueryable<Competitor> ListByCategory(string id)
            {
                  return categrepo.FindOne(id).Competitors.AsQueryable();
            }
      }
}
