using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace WebAPI.Models.Requests
{
    public class DeleteDismissalCardModel
    {
        [Required]
        public int ParentId { get; set; }
        public List<int> StudentIds { get; set; }
    }
}
