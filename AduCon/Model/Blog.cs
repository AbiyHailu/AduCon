using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace AduCon.Model
{
    public class Blog
    {
        public int Id { get; set; }
        public string Title { get; set; }
        public string PargraphIds { get; set; }
        public bool IsActive { get; set; }
    }
}
