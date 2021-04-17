using Microsoft.AspNetCore.Identity;
using Models;
using System;
using System.Collections.Generic;
using System.IdentityModel.Tokens.Jwt;
using System.Linq;
using System.Security.Claims;
using System.Text;
using System.Threading.Tasks;

namespace Logic
{
      public class AuthLogic
      {
            UserManager<IdentityUser> _userManager;
            RoleManager<IdentityRole> _roleManager;

            public AuthLogic(UserManager<IdentityUser> userManager, RoleManager<IdentityRole> roleManager)
            {
                  this._userManager = userManager;
                  this._roleManager = roleManager;
            }

            public async Task<string> RegisterUser(RegisterViewModel model)
            {
                  var user = new IdentityUser
                  {
                        Email = model.Email,
                        UserName = model.Email,
                        SecurityStamp = Guid.NewGuid().ToString(),
                  };

                  var result = await _userManager.CreateAsync(user, model.Password);
                  if(result.Succeeded)
                  {
                        await _userManager.AddToRoleAsync(user, "Admin");
                  }
                  return user.UserName;
            }
      }
}
