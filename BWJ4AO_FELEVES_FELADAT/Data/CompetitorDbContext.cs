using Microsoft.EntityFrameworkCore;
using Models;
using System;

namespace Data
{
      public class CompetitorDbContext : DbContext
      {
            public DbSet<Competitor> Competitors { get; set; }
            public DbSet<Competitor> Categories { get; set; }
            public DbSet<Competitor> Sponsors { get; set; }

            public CompetitorDbContext(DbContextOptions<CompetitorDbContext> opt) : base(opt)
            {

            }

            public CompetitorDbContext()
            {
                  this.Database.EnsureCreated();
            }

            protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
            {
                  if (!optionsBuilder.IsConfigured)
                  {
                        optionsBuilder.
                            UseLazyLoadingProxies().
                            UseSqlServer(@"data source=(LocalDB)\MSSQLLocalDB;attachdbfilename=|DataDirectory|\CompetitorDB.mdf;integrated security=True;MultipleActiveResultSets=True");
                  }
            }


            protected override void OnModelCreating(ModelBuilder modelbuilder)
            {
                  base.OnModelCreating(modelbuilder);

                  modelbuilder.Entity<Competitor>(entity =>
                  {
                        entity
                        .HasOne(Competitor => Competitor.Category)
                        .WithMany(Category => Category.Competitors)
                        .HasForeignKey(Competitor => Competitor.CategoryId);
                  });
                  modelbuilder.Entity<Competitor>(entity =>
                  {
                        entity
                        .HasOne(Competitor => Competitor.Sponsor)
                        .WithMany(Sponsor => Sponsor.Competitors)
                        .HasForeignKey(Competitor => Competitor.SponsorId);
                  });
            }


      }
}
