﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace AduCon.Model
{
    public class Paragraph
    {
        public int Id { get; set; }
        public int blogId { get; set; }
        public string Content { get; set; }
        public Blog Blog { get; set; }
    }
}
