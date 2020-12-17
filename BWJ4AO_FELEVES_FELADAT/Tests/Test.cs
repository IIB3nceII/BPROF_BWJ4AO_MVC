using Logic;
using Models;
using Moq;
using NUnit.Framework;
using Repository;
using System;
using System.Collections.Generic;
using System.Linq;

namespace Tests
{
      [TestFixture]
      public class Test
      {
            public Mock<IRepository<Category>> categrepo;
            public Mock<IRepository<Competitor>> comprepo;
            public Mock<IRepository<Sponsor>> sponsorrepo;


            [SetUp]
            public void Setup()
            {
                  categrepo = new Mock<IRepository<Category>>();
                  comprepo = new Mock<IRepository<Competitor>>();
                  sponsorrepo = new Mock<IRepository<Sponsor>>();

                  List<Category> categs = new List<Category>()
                  {
                        new Category() { CategoryId=Guid.NewGuid().ToString(), Name=CategoryType.MrOlympia, StartingWeight=90, MaximumWeight=135 },

                        new Category() { CategoryId=Guid.NewGuid().ToString(), Name=CategoryType.ClassicPhysique, StartingWeight=80, MaximumWeight=110 },

                        new Category() { CategoryId=Guid.NewGuid().ToString(), Name=CategoryType.MensPhisyque, StartingWeight=70, MaximumWeight=100 },

                        new Category() { CategoryId=Guid.NewGuid().ToString(), Name=CategoryType.WomensBikini, StartingWeight=45, MaximumWeight=70 },
                  };

                  List<Competitor> comps = new List<Competitor>()
                  {
                        new Competitor { CompetitorId= Guid.NewGuid().ToString(), Number=1, Name="Kökény Béla", Nationality="Hungary", Gender=GenderType.Male, Height=175, Weight=93,AchivedPlace=12, CategoryId=categs.ElementAt(0).CategoryId},

                        new Competitor { CompetitorId= Guid.NewGuid().ToString(), Number=2, Name="Kökény Béci", Nationality="Hungary", Gender=GenderType.Male, Height=174, Weight=93,AchivedPlace=11, CategoryId=categs.ElementAt(1).CategoryId},

                        new Competitor { CompetitorId= Guid.NewGuid().ToString(), Number=3, Name="Kökény Béna", Nationality="Hungary", Gender=GenderType.Male, Height=176, Weight=95,AchivedPlace=8, CategoryId=categs.ElementAt(2).CategoryId},

                        new Competitor { CompetitorId= Guid.NewGuid().ToString(), Number=4, Name="Kökény Béláné", Nationality="Hungary", Gender=GenderType.Female, Height=164, Weight=53,AchivedPlace=15, CategoryId=categs.ElementAt(3).CategoryId},

                        new Competitor { CompetitorId= Guid.NewGuid().ToString(), Number=5, Name="Kökény Másik Béláné", Nationality="Hungary", Gender=GenderType.Female, Height=163, Weight=57,AchivedPlace=19, CategoryId=categs.ElementAt(3).CategoryId},
                  };

                  List<Sponsor> spons = new List<Sponsor>()
                  {
                        new Sponsor { SponsorId=Guid.NewGuid().ToString(), Name="Kokszos Karoj Nutrition", Nationality="Hungary", Placeholder="Kokszos Karoj", Type="Food Supplement", CompetitorId=comps.ElementAt(0).CompetitorId},

                        new Sponsor { SponsorId=Guid.NewGuid().ToString(), Name="Biotech Canada", Nationality="Unknown", Placeholder="Canada Dry Guy", Type="Food Supplement", CompetitorId=comps.ElementAt(1).CompetitorId},

                        new Sponsor { SponsorId=Guid.NewGuid().ToString(), Name="Zámbó Gym-i Nutrition", Nationality="Hungary", Placeholder="Ifj. Zámbó Jimmy", Type="Food Supplement", CompetitorId=comps.ElementAt(2).CompetitorId},

                        new Sponsor { SponsorId=Guid.NewGuid().ToString(), Name="Ennyit Tudsz B*meg Nutrition", Nationality="Hungary", Placeholder="Kathi Béla", Type="Food Supplement", CompetitorId=comps.ElementAt(3).CompetitorId},

                        new Sponsor { SponsorId=Guid.NewGuid().ToString(), Name="KondiBab", Nationality="Germany", Placeholder="BERECZKIII", Type="gumibogyószörp nagykereskedés", CompetitorId=comps.ElementAt(3).CompetitorId},
                  };

                  categrepo.Setup(repo=>repo.ListAll()).Returns(categs.AsQueryable());
                  comprepo.Setup(repo => repo.ListAll()).Returns(comps.AsQueryable());
                  sponsorrepo.Setup(repo => repo.ListAll()).Returns(spons.AsQueryable());
            }



            [Test]
            public void TestAddNewCategory()
            {
                  CategoryLogic c = new CategoryLogic(this.categrepo.Object);

                  Category newc = new Category()
                  {
                        CategoryId = Guid.NewGuid().ToString(),
                        Name=CategoryType.ClassicPhysique,
                        StartingWeight=87,
                        MaximumWeight=111
                  };


                  categrepo.Setup(x=>x.AddNewItem(It.IsAny<Category>()));
                  c.Add(newc);

                  categrepo.Verify(x=>x.AddNewItem(newc),Times.Once);
            }

            [Test]
            public void DeleteCategory()
            {
                  CategoryLogic c = new CategoryLogic(this.categrepo.Object);
                  Category newc = new Category()
                  {
                        CategoryId = Guid.NewGuid().ToString(),
                        Name = CategoryType.ClassicPhysique,
                        StartingWeight = 87,
                        MaximumWeight = 111
                  };

                  categrepo.Setup(x => x.Delete(It.IsAny<Category>()));
                  c.Delete(newc.CategoryId);
                  categrepo.Verify(x => x.Delete(newc.CategoryId), Times.Once);
            }

            [Test]
            public void UpdateCategory()
            {
                  CategoryLogic c = new CategoryLogic(this.categrepo.Object);
                  Category newc = new Category()
                  {
                        CategoryId = Guid.NewGuid().ToString(),
                        Name = CategoryType.ClassicPhysique,
                        StartingWeight = 87,
                        MaximumWeight = 111
                  };

                  categrepo.Setup(x => x.UpdateData(newc.CategoryId,It.IsAny<Category>()));
                  c.Update(newc.CategoryId,newc);
                  categrepo.Verify(x => x.UpdateData(newc.CategoryId,newc), Times.Once);
            }

            [Test]
            public void ListAllCategory()
            {
                  CategoryLogic c = new CategoryLogic(this.categrepo.Object);

                  List<Category> newc = new List<Category>()
                  {
                     new Category { CategoryId = Guid.NewGuid().ToString(),
                        Name = CategoryType.ClassicPhysique,
                        StartingWeight = 87,
                        MaximumWeight = 111 },

                     new Category {
                        CategoryId = Guid.NewGuid().ToString(),
                        Name = CategoryType.MensPhisyque,
                        StartingWeight = 88,
                        MaximumWeight = 112
                  }
            };

                  List<Category> expectedout = new List<Category>()
                  {
                        newc[0],newc[1]
                  };

                  categrepo.Setup(x => x.ListAll()).Returns(newc.AsQueryable());
                  var output=c.List();
                  Assert.That(output, Is.EquivalentTo(expectedout));
                  Assert.That(output.Count, Is.EqualTo(expectedout.Count));
            }

            [Test]
            public void ListOneCategory()
            {
                  CategoryLogic c = new CategoryLogic(this.categrepo.Object);

                  List<Category> newc = new List<Category>()
                  {
                     new Category { CategoryId = Guid.NewGuid().ToString(),
                        Name = CategoryType.ClassicPhysique,
                        StartingWeight = 87,
                        MaximumWeight = 111 },

                     new Category {
                        CategoryId = Guid.NewGuid().ToString(),
                        Name = CategoryType.MensPhisyque,
                        StartingWeight = 88,
                        MaximumWeight = 112}
                  };

                  Category expectedout = new Category();
                  expectedout = newc[0];

                  categrepo.Setup(x => x.FindOne(newc[0].CategoryId)).Returns(newc[0]);
                  var output = c.Find(newc[0].CategoryId);
                  Assert.That(output.CategoryId, Is.EquivalentTo(expectedout.CategoryId));
            }



            [Test]
            public void BiggestAverageWeightCategory()
            {
                  CategoryLogic c = new CategoryLogic(this.categrepo.Object);
                  CompetitorLogic com = new CompetitorLogic(this.comprepo.Object);

                  StatLogic s = new StatLogic();

                  List<Category> categlist = new List<Category>()
                  {
                        new Category() { CategoryId=Guid.NewGuid().ToString(), Name=CategoryType.MrOlympia, StartingWeight=90, MaximumWeight=135 },

                        new Category() { CategoryId=Guid.NewGuid().ToString(), Name=CategoryType.ClassicPhysique, StartingWeight=80, MaximumWeight=110 },

                        new Category() { CategoryId=Guid.NewGuid().ToString(), Name=CategoryType.MensPhisyque, StartingWeight=70, MaximumWeight=100 },

                        new Category() { CategoryId=Guid.NewGuid().ToString(), Name=CategoryType.WomensBikini, StartingWeight=45, MaximumWeight=70 },
                  };

                  List<Competitor> complist = new List<Competitor>()
                  {
                        new Competitor { CompetitorId= Guid.NewGuid().ToString(), Number=1, Name="Kökény Béla", Nationality="Hungary", Gender=GenderType.Male, Height=175, Weight=93,AchivedPlace=12, CategoryId=categlist.ElementAt(0).CategoryId},

                        new Competitor { CompetitorId= Guid.NewGuid().ToString(), Number=2, Name="Kökény Béci", Nationality="Hungary", Gender=GenderType.Male, Height=174, Weight=93,AchivedPlace=11, CategoryId=categlist.ElementAt(1).CategoryId},

                        new Competitor { CompetitorId= Guid.NewGuid().ToString(), Number=3, Name="Kökény Béna", Nationality="Hungary", Gender=GenderType.Male, Height=176, Weight=95,AchivedPlace=8, CategoryId=categlist.ElementAt(2).CategoryId},

                        new Competitor { CompetitorId= Guid.NewGuid().ToString(), Number=4, Name="Kökény Béláné", Nationality="Hungary", Gender=GenderType.Female, Height=164, Weight=53,AchivedPlace=15, CategoryId=categlist.ElementAt(3).CategoryId},

                        new Competitor { CompetitorId= Guid.NewGuid().ToString(), Number=5, Name="Kökény Másik Béláné", Nationality="Hungary", Gender=GenderType.Female, Height=163, Weight=57,AchivedPlace=19, CategoryId=categlist.ElementAt(3).CategoryId},
                  };

                  var expected = s.BiggestAvg(this.categrepo.Object, this.comprepo.Object);
            }
      }
}
