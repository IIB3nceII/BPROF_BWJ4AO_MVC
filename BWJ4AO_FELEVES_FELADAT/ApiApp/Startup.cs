using Logic;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.HttpsPolicy;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;
using Models;
using Repository;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ApiApp
{
      public class Startup
      {
            public Startup(IConfiguration configuration)
            {
                  Configuration = configuration;
            }

            public IConfiguration Configuration { get; }

            public void ConfigureServices(IServiceCollection services)
            {
                  services.AddControllers();
                  services.AddTransient<CategoryLogic, CategoryLogic>();
                  services.AddTransient<CompetitorLogic, CompetitorLogic>();
                  services.AddTransient<SponsorLogic, SponsorLogic>();
                  services.AddTransient<IRepository<Category>, CategoryRepo>();
                  services.AddTransient<IRepository<Competitor>, CompetitorRepo>();
                  services.AddTransient<IRepository<Sponsor>, SponsorRepo>();
            }

            public void Configure(IApplicationBuilder app, IWebHostEnvironment env)
            {
                  if (env.IsDevelopment())
                  {
                        app.UseDeveloperExceptionPage();
                  }
                  else
                  {
                        app.UseExceptionHandler("/Error");
                        app.UseHsts();
                  }

                  app.UseHttpsRedirection();
                  app.UseStaticFiles();

                  app.UseRouting();

                  app.UseAuthorization();

                  app.UseEndpoints(endpoints =>
                  {
                        endpoints.MapControllers();
                  });
            }
      }
}
