using Data;
using Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace Repository
{
      public class SponsorRepo : IRepository<Sponsor>
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
                  var oldSponsor = FindOne(name);
                  oldSponsor.Name = item.Name;
                  oldSponsor.Nationality = item.Nationality;
                  oldSponsor.Placeholder = item.Placeholder;
                  oldSponsor.Type = item.Type;
                  foreach (var competitor in item.Competitors)
                  {
                        oldSponsor.Competitors.Add(competitor);
                  }

                  cont.SaveChanges();

            }
      }
}
