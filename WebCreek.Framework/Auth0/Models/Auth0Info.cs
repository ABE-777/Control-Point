using System;
using System.Collections.Generic;
using System.Text;

namespace WebCreek.Framework.Auth0.Models
{
    public class Auth0Info
    {
        public string sub { get; set; }
        public string name { get; set; }
        public string nickname { get; set; }
        public string picture { get; set; }
        public DateTime updatedAt { get; set; }
    }
}
