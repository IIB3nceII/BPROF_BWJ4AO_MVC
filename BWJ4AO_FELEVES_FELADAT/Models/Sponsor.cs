using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Text;

namespace Models
{
      public class Sponsor
      {
            [Key]
            public string Name { get; set; }
            public string Nationality { get; set; }
            public string Placeholder { get; set; }
            public string Type { get; set; }


      }
}
