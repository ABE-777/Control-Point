using System;
using System.Collections.Generic;
using System.Text;
using LinqToDB;

namespace WebCreek.Framework.Extensions
{
    /// <summary>
    /// Extensions used in LinqDb Queries
    /// </summary>
    //============================================================
    //Revision History
    //Date        Author          Description
    //06/28/2017  TB               Created
    //============================================================
    public static class LinqDBExternals
    {
        /// <summary>
        /// Strips time from a date
        /// </summary>
        /// <param name="date"></param>
        /// <returns></returns>
        //============================================================
        //Revision History
        //Date        Author          Description
        //06/28/2017  TB               Created
        //============================================================
        [Sql.Expression("convert(date,{0} - day({0}) + 1)", PreferServerSide = true)]
        public static DateTime ClearTime(this DateTime date)
        {
            return date.Subtract(new TimeSpan(date.Day - 1, date.Hour, date.Minute, date.Second, date.Millisecond));
        }

        
    }
}
