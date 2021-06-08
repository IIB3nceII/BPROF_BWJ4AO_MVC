using Logic;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ApiApp.Controllers
{
      // [Authorize]
      [ApiController]
      [Route("{controller}")]
      public class CategoryController : ControllerBase
      {
            CategoryLogic logic;

            public CategoryController(CategoryLogic logic)
            {
                  this.logic = logic;
            }

            [HttpDelete("{uid}")]
            public void DeleteCategory(string uid)
            {
                  logic.Delete(uid);
            }

            [HttpGet("{uid}")]
            public Category GetCategory(string uid)
            {
                  return logic.Find(uid);
            }

            [HttpGet]
            public IEnumerable<Category> GetAllCategory()
            {
                  return logic.List();
            }

            [HttpPost]
            public void AddCategory([FromBody] Category item)
            {
                  logic.Add(item);
            }

            [HttpPut("{oldid}")]
            public void UpdateCategory(string oldid, [FromBody] Category item)
            {
                  logic.Update(oldid, item);
            }
      }
}
