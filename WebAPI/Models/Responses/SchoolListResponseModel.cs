﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using WebAPI.Data.DTOs;
using WebAPI.Models.Responces;

namespace WebAPI.Models.Responses
{
    public class SchoolListResponseModel : BaseResponseModel
    {
        public List<Schools> Schools { get; set; }
    }
}
