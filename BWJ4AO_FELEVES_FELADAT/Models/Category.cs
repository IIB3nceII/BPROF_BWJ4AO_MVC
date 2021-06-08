using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Text;
using System.Text.Json.Serialization;

namespace Models
{
      public enum CategoryType
      {
            MrOlympia, ClassicPhysique, MensPhisyque,WomensBikini
      }
      public class Category
      {
            [Key]
            [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
            public string CategoryId { get; set; }
            // [Required]
            public CategoryType Name { get; set; }
            // [Required]
            public int StartingWeight { get; set; }
            // [Required]
            public int MaximumWeight { get; set; }
            [JsonIgnore]
            public virtual ICollection<Competitor> Competitors { get; set; }
      }
}
