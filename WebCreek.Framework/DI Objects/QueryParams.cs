using System;
using System.Collections.Generic;
using System.Text;
using Microsoft.AspNetCore.Http;
using WebCreek.Framework.Utility;
using Microsoft.AspNetCore.Mvc;

namespace WebCreek.Framework.DIObjects
{
    /// <summary>
    /// Class used to pass Query parameters from client
    /// </summary>
    //============================================================
    //Revision History
    //Date        Author          Description
    //06/28/2017  TB               Created
    //============================================================
    public class QueryParams : IQueryParams
    {
        /// <summary>
        /// Constructor, parses values from query string
        /// </summary>
        /// <param name="HttpContextAccessor"></param>
        //============================================================
        //Revision History
        //Date        Author          Description
        //06/28/2017  TB               Created
        //============================================================
        public QueryParams(IHttpContextAccessor HttpContextAccessor)
        {
            IQueryCollection qc = HttpContextAccessor.HttpContext.Request.Query;

            Take = qc.GetAsInt("take");
            Skip = qc.GetAsInt("skip");
            NeedsTotal = qc.GetAsBool("needsTotal");
            QueryName = qc["queryName"].ToString();

            Sort = qc.GetAsTyped<QuerySort>("sort");
            Filter = qc.GetAsList<QueryFilter>("filter");
        }

        public int Take { get; set; }
        public int Skip { get; set; }
        public bool NeedsTotal { get; set; }
        public string QueryName { get; set; }
        public QuerySort Sort { get; set; }
        public List<QueryFilter> Filter { get; set; }
        
    }

    public class QueryFilter
    {
        public string field { get; set; }
        public string op { get; set;}
        public string filterval { get; set; }

    }

    public class QuerySort
    {
        public bool desc { get; set; }
        public string selector { get; set; }
    }

    public interface IQueryParams
    {
        int Take { get; set; }
        int Skip { get; set; }
        bool NeedsTotal { get; set; }
        QuerySort Sort { get; set; }
        List<QueryFilter> Filter { get; set; }
        string QueryName { get; set; }
    }
}
