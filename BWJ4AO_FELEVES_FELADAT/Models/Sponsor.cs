using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Text;
using System.Text.Json.Serialization;

namespace Models
{
      public class Sponsor
      {
            [Key]
            [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
            public string SponsorId { get; set; }
            public string Name { get; set; }
            public string Nationality { get; set; }
            public string Placeholder { get; set; }
            public string Type { get; set; }
            public string CompetitorId { get; set; }
            [JsonIgnore]
            public virtual Competitor Competitor { get; set; }
      }
}
