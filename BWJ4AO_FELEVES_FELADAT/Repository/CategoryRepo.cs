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
                  throw new NotImplementedException();
            }

            public void Delete(int number)
            {
                  throw new NotImplementedException();
            }

            public Category FindOne(int number)
            {
                  throw new NotImplementedException();
            }

            public IQueryable<Category> ListAll()
            {
                  throw new NotImplementedException();
            }

            public void SaveAll()
            {
                  throw new NotImplementedException();
            }

            public void UpdateData(int number, Category item)
            {
                  throw new NotImplementedException();
            }
      }
}
