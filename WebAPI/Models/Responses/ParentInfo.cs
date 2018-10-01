using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using WebAPI.Data.DTOs;

namespace WebAPI.Models.Responses
{
    public class ParentInfo
    { 
        public int UserId { get; set; }
        public bool InstructionsChecked { get; set; }
        public bool IsPrintingAtHome { get; set; }
        public string Instruction { get; set; }
        public IEnumerable<StudentForParent> Students { get; set; }
        public IEnumerable<DismissalCard> DismissalCards { get; set; }
    }
}
