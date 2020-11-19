using Data;
using Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace Repository
{
      class SponsorRepo : IRepository<Sponsor>
      {
            CompetitorDbContext cont = new CompetitorDbContext();

            public void AddNewItem(Sponsor item)
            {
                  cont.Sponsors.Add(item);
            }

            public void Delete(Sponsor item)
            {
                  cont.Sponsors.Remove(item);
                  SaveAll();
            }

            public void Delete(string name)
            {
                  Delete(FindOne(name));
            }

            public Sponsor FindOne(string name)
            {
                  var q = (from x in cont.Sponsors
                           where x.Name == name
                           select x).FirstOrDefault();

                  return q;
            }

            public IQueryable<Sponsor> ListAll()
            {
                  return cont.Sponsors.AsQueryable();
            }

            public void SaveAll()
            {
                  cont.SaveChanges();
            }

            public void UpdateData(string name, Sponsor item)
            {
                  var oldSp = FindOne(name);
                  oldSp.Name = item.Name;
                  oldSp.Nationality = item.Nationality;
                  oldSp.Placeholder = item.Placeholder;
                  oldSp.Type = item.Type;

                  cont.SaveChanges

            }
      }
}
