using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;
using Models;
using System;

namespace Data
{
      public class CompetitorDbContext : IdentityDbContext<IdentityUser>
      {
            public DbSet<Competitor> Competitors { get; set; }
            public DbSet<Category> Categories { get; set; }
            public DbSet<Sponsor> Sponsors { get; set; }

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
                            // UseSqlServer(@"data source=(LocalDB)\MSSQLLocalDB;attachdbfilename=|DataDirectory|\CompetitorDB.mdf;integrated security=True;MultipleActiveResultSets=True");
                            UseSqlServer(@"Data Source=(localdb)\MSSQLLocalDB;Initial Catalog=MrODb;Integrated Security=True;Connect Timeout=30;Encrypt=False;TrustServerCertificate=False;ApplicationIntent=ReadWrite;MultiSubnetFailover=False");
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
                        .HasForeignKey(Competitor => Competitor.CategoryId)
                        .OnDelete(DeleteBehavior.Cascade);
                  });
                  modelbuilder.Entity<Sponsor>(entity =>
                  {
                        entity
                        .HasOne(Sponsor => Sponsor.Competitor)
                        .WithMany(Competitor => Competitor.Sponsors)
                        .HasForeignKey(Sponsor => Sponsor.CompetitorId)
                        .OnDelete(DeleteBehavior.Cascade);
                  });
            }


      }
}
