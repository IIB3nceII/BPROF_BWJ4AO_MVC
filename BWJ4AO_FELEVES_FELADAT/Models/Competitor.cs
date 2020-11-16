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
            public int Number { get; set; }
            [Required]
            public string Name { get; set; }
            [Required]
            public string Nationality { get; set; }
            [Required]
            public GenderType Gender { get; set; }
            public double Height { get; set; }
            [Required]
            public double Weight { get; set; }
            [Required]
            public int Category { get; set; }
            public Sponsor Sponsor { get; set; }
            public int AchivedPlace { get; set; }
      }
}

