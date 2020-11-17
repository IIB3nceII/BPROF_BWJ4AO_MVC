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
      public class Category
      {
            [Key]
            [Required]
            public CategoryType Name { get; set; }
            [Required]
            public int StartingWeight { get; set; }
            [Required]
            public int MaximumWeight { get; set; }

      }
}
