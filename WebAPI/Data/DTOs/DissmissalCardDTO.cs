using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace WebAPI.Data.DTOs
{
    public class DissmissalCardDTO
    {
        public int Id { get; set; }
        public int ParentId { get; set; }
        public string ParentName { get; set; }
        public List<StudentsToCardsDTO> Students { get; set; }
        public bool IsPrinted { get; set; }
        public int StatusId { get; set; }
    }
}
