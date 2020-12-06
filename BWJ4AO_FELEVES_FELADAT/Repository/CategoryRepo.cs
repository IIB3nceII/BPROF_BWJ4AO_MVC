using Data;
using Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace Repository
{
      public class CategoryRepo : IRepository<Category>
      {
            CompetitorDbContext cont = new CompetitorDbContext();

            public void AddNewItem(Category item)
            {
                  cont.Categories.Add(item);
                  SaveAll();
            }

            public void Delete(Category item)
            {
                  cont.Categories.Remove(item);
                  SaveAll();
            }

            public void Delete(string st)
            {
                  Delete(FindOne(st));
            }

            public Category FindOne(string st)
            {
                  var q = (from x in cont.Categories
                           where x.CategoryId == st
                           select x).FirstOrDefault();

                  return q;
            }

            public IQueryable<Category> ListAll()
            {
                  return cont.Categories.AsQueryable();
            }

            public void SaveAll()
            {
                  cont.SaveChanges();
            }

            public void UpdateData(string st, Category item)
            {
                  var oldCategory = FindOne(st);
                  oldCategory.Name = item.Name;
                  oldCategory.StartingWeight = item.StartingWeight;
                  oldCategory.MaximumWeight = item.MaximumWeight;
                  oldCategory.Competitors.Clear();
                  foreach (var competitor in item.Competitors)
                  {
                        oldCategory.Competitors.Add(competitor);
                  }

                  cont.SaveChanges();
            }
      }
}
