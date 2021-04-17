using Logic;
using Microsoft.AspNetCore.Mvc;
using Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ApiApp.Controllers
{
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
            public void DeleteVideo(string uid)
            {
                  logic.Delete(uid);
            }

            [HttpGet("{uid}")]
            public Category GetVideo(string uid)
            {
                  return logic.Find(uid);
            }

            [HttpGet]
            public IEnumerable<Category> GetAllVideo()
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
