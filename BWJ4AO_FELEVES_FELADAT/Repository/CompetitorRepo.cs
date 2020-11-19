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
                  cont.SaveChanges();
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
                           where x.Id == st
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
                  var oldNumber = FindOne(st);

                  oldNumber.Number = comp.Number;
                  oldNumber.Name = comp.Name;
                  oldNumber.Nationality = comp.Nationality;
                  oldNumber.Gender = comp.Gender;
                  oldNumber.Height = comp.Height;
                  oldNumber.Weight = comp.Weight;
                  oldNumber.AchivedPlace = comp.AchivedPlace;
                  oldNumber.Category = comp.Category;
                  oldNumber.Sponsor = comp.Sponsor;
                  oldNumber.CategoryId = comp.CategoryId;
                  oldNumber.SponsorId = comp.SponsorId;
                  SaveAll();

            }
      }
}
