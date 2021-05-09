using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
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
            [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
            public string CompetitorId { get; set; }
            // [Range(1,200)]
            public int Number { get; set; }
            public string Name { get; set; }
            public string Nationality { get; set; }
            public GenderType Gender { get; set; }
            public double Height { get; set; }
            // [Range(50,150)]
            public double Weight { get; set; }
            // [Range(1,30)]
            public int AchivedPlace { get; set; }
            [NotMapped]
            public virtual Category Category { get; set; }
            [NotMapped]
            public virtual ICollection<Sponsor> Sponsors { get; set; }
            public string CategoryId { get; set; }

      }
}

