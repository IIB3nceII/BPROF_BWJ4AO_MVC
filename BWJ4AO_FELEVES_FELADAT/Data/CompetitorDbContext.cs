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
                            UseSqlServer(@"Server=tcp:benceandroid.database.windows.net,1433;Initial Catalog=androiddb;Persist Security Info=False;User ID=bence;Password=A123456!;MultipleActiveResultSets=False;Encrypt=True;TrustServerCertificate=False;Connection Timeout=30;", b => b.MigrationsAssembly("ApiApp"));
                  }
            }


            protected override void OnModelCreating(ModelBuilder modelbuilder)
            {
                  base.OnModelCreating(modelbuilder);

                  modelbuilder.Entity<IdentityRole>().HasData(
    new { Id = "341743f0-asd2–42de-afbf-59kmkkmk72cf6", Name = "Admin", NormalizedName = "ADMIN" },
    new { Id = "341743f0-dee2–42de-bbbb-59kmkkmk72cf6", Name = "Customer", NormalizedName = "CUSTOMER" }
);

                  var appUser = new IdentityUser
                  {
                        Id = "02174cf0–9412–4cfe-afbf-59f706d72cf6",
                        Email = "kathi.bela@nik.uni-obuda.hu",
                        NormalizedEmail = "kathi.bela@nik.uni-obuda.hu",
                        EmailConfirmed = true,
                        UserName = "kathi.bela@nik.uni-obuda.hu",
                        NormalizedUserName = "kathi.bela@nik.uni-obuda.hu",
                        SecurityStamp = string.Empty
                  };

                  var appUser2 = new IdentityUser
                  {
                        Id = "e2174cf0–9412–4cfe-afbf-59f706d72cf6",
                        Email = "bohos.kornel@nik.uni-obuda.hu",
                        NormalizedEmail = "bohos.kornel@nik.uni-obuda.hu",
                        EmailConfirmed = true,
                        UserName = "bohos.kornel@nik.uni-obuda.hu",
                        NormalizedUserName = "bohos.kornel@nik.uni-obuda.hu",
                        SecurityStamp = string.Empty
                  };

                  appUser.PasswordHash = new PasswordHasher<IdentityUser>().HashPassword(null, "EnnyitTudszBameg!");
                  appUser2.PasswordHash = new PasswordHasher<IdentityUser>().HashPassword(null, "Szeretemacicakat123!");


                  modelbuilder.Entity<IdentityUser>().HasData(appUser);
                  modelbuilder.Entity<IdentityUser>().HasData(appUser2);

                  modelbuilder.Entity<IdentityUserRole<string>>().HasData(new IdentityUserRole<string>
                  {
                        RoleId = "341743f0-asd2–42de-afbf-59kmkkmk72cf6",
                        UserId = "02174cf0–9412–4cfe-afbf-59f706d72cf6"
                  });

                  modelbuilder.Entity<IdentityUserRole<string>>().HasData(new IdentityUserRole<string>
                  {
                        RoleId = "341743f0-dee2–42de-bbbb-59kmkkmk72cf6",
                        UserId = "e2174cf0–9412–4cfe-afbf-59f706d72cf6"
                  });

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
