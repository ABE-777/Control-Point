﻿using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace WebAPI.Models.Requests
{
    public class EditCardStatusModel
    {
        [Required]
        public int CardId { get; set; }

        [Required]
        public int StatusId { get; set; }
    }
}
