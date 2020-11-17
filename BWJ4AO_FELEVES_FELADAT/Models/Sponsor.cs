using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Text;

namespace Models
{
      public class Sponsor
      {
            [Key]
            public string SponsorId { get; set; }
            public string Name { get; set; }
            public string Nationality { get; set; }
            public string Placeholder { get; set; }
            public string Type { get; set; }
            public virtual ICollection<Competitor> Competitors { get; set; }


      }
}
