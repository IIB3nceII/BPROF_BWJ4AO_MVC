using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Text;

namespace Models
{
      public enum CategoryType
      {
            MrOlympia, ClassicPhysique, MensPhisyque,WomensBikini
      }
      public class Categories
      {
            public CategoryType Name { get; set; }
            public int StartingWeight { get; set; }
            public int MaximumWeight { get; set; }

      }
}
