using Data;
using Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace Repository
{
      class CategoryRepo : IRepository<Category>
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

            public void Delete(int number)
            {
                  Delete(FindOne(number));
            }

            public Category FindOne(int stw)//itt nem teljesen jó az int de a compnal az kene
            {
                  var q = (from x in cont.Categories
                           where x.StartingWeight == stw
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

            public void UpdateData(int stw, Category item)
            {
                  var oldStW = FindOne(stw);
                  oldStW.StartingWeight = item.StartingWeight;
                  oldStW.MaximumWeight = item.MaximumWeight;

                  cont.SaveChanges();
            }
      }
}
