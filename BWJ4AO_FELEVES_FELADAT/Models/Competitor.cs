using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Text;


namespace Models
{
      public enum GenderType
      {
            Male, Female, Other
      }
      public class Competitor
      {
            [Key]
            [Required]
            [Range(1,200)]
            public int Number { get; set; }
            [Required]
            public string Name { get; set; }
            [Required]
            public string Nationality { get; set; }
            [Required]
            public GenderType Gender { get; set; }
            public double Height { get; set; }
            [Required]
            [Range(50,150)]
            public double Weight { get; set; }
            [Required]
            public virtual Category Category { get; set; }
            public virtual Sponsor Sponsor { get; set; }
            [Range(1,30)]
            public int AchivedPlace { get; set; }
      }
}

