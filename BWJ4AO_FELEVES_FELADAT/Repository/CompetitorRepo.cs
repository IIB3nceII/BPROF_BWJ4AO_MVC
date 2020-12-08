using Data;
using Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace Repository
{
      public class CompetitorRepo : IRepository<Competitor>
      {
            CompetitorDbContext cont = new CompetitorDbContext();

            public void AddNewItem(Competitor item)
            {
                  cont.Competitors.Add(item);
                  SaveAll();
            }

            public void Delete(Competitor item)
            {
                  cont.Competitors.Remove(item);
                  cont.SaveChanges();
            }

            public void Delete(string st)
            {
                  Delete(FindOne(st));
            }

            public Competitor FindOne(string st)
            {
                  var q = (from x in cont.Competitors
                           where x.CompetitorId == st
                           select x).FirstOrDefault();

                  return q;
            }

            public IQueryable<Competitor> ListAll()
            {
                  return cont.Competitors.AsQueryable();
            }

            public void SaveAll()
            {
                  cont.SaveChanges();
            }

            public void UpdateData(string st, Competitor comp)
            {
                  var old = FindOne(st);

                  old.Number = comp.Number;
                  old.Name = comp.Name;

                  SaveAll();

            }
      }
}
