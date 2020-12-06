using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Logic;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Http;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;
using Models;
using Repository;

namespace BWJ4AO_FELEVES_FELADAT
{
      public class Startup
      {
            public void ConfigureServices(IServiceCollection services)
            {
                  services.AddTransient<CategoryLogic, CategoryLogic>();
                  services.AddTransient<CompetitorLogic, CompetitorLogic>();
                  services.AddTransient<SponsorLogic,SponsorLogic>();
                  services.AddTransient<IRepository<Category>, CategoryRepo>();
                  services.AddTransient<IRepository<Competitor>, CompetitorRepo>();
                  services.AddTransient<IRepository<Sponsor>, SponsorRepo>();

                  services.AddMvc(opt=>opt.EnableEndpointRouting=false).AddRazorRuntimeCompilation();
            }

            public void Configure(IApplicationBuilder app, IWebHostEnvironment env)
            {
                  if (env.IsDevelopment())
                  {
                        app.UseDeveloperExceptionPage();
                  }

                  app.UseRouting();

                  app.UseStaticFiles();

                  app.UseMvcWithDefaultRoute();
            }
      }
}
