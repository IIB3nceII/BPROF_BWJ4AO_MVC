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
            IRepository<Category> categrepo;
            IRepository<Competitor> comprepo;
            IRepository<Sponsor> sponsrepo;

            public CategoryLogic( IRepository<Category> categrepo, IRepository<Competitor> comprepo, IRepository<Sponsor> sponsrepo)
            {
                  this.categrepo = categrepo;
                  this.comprepo = comprepo;
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

            public void AddCompetitorToCategory(Competitor comp, string id)
            {
                  Find(id).Competitors.Add(comp);
                  categrepo.SaveAll();
            }
            public void RemoveCompetitorFromCategory(Competitor comp, string id)
            {
                  Find(id).Competitors.Remove(comp);
                  comprepo.Delete(comp.CompetitorId);
                  categrepo.SaveAll();
            }

            public void FillDbWithSamples()
            {
                  Category c1 = new Category() { Name = CategoryType.ClassicPhysique };
                  Category c2 = new Category() { Name = CategoryType.MrOlympia };
                  Category c3 = new Category() { Name = CategoryType.WomensBikini };

                  Competitor v1 = new Competitor() { Number=1, Name="mintaAdat1" };
                  Competitor v2 = new Competitor() { Number = 2, Name = "mintaAdat2" };
                  Competitor v3 = new Competitor() { Number = 3, Name = "mintaAdat3" };
                  Competitor v4 = new Competitor() { Number = 4, Name = "mintaAdat4" };


                  Add(c1);
                  Add(c2);
                  Add(c2);

                  AddCompetitorToCategory(v1, c3.CategoryId);
                  AddCompetitorToCategory(v2, c2.CategoryId);
                  AddCompetitorToCategory(v3, c1.CategoryId);
                  AddCompetitorToCategory(v4, c1.CategoryId);
            }
      }
}
