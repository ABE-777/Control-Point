using System;
using System.Collections.Generic;
using System.Text;
using System.Linq;
using LinqToDB.Data;
using System.Linq.Dynamic.Core;
using System.Reflection;

using WebCreek.Framework.DIObjects;
using WebCreek.Framework.Constants;
using WebCreek.Framework.APIContainerClasses;


namespace WebCreek.Framework.Data
{

    /// <summary>
    /// Utility Class, Applies filters and sorts from query parameters 
    /// </summary>
    //============================================================
    //Revision History
    //Date        Author          Description
    //06/28/2017  TB               Created
    //============================================================
    public static class DataHelper
    {

        /// <summary>
        /// Applies filter and sort from query parameters to query and returns DataReturn object
        /// </summary>
        /// <typeparam name="T"></typeparam>
        /// <param name="query"></param>
        /// <param name="param"></param>
        /// <returns></returns>
        //============================================================
        //Revision History
        //Date        Author          Description
        //06/28/2017  TB               Created
        //============================================================
        public static DataReturn GetData<T>(IQueryable<T> query, IQueryParams param)
        {
            DataReturn retVal = new DataReturn();

            //apply filter if there is one
            if (param.Filter != null)
            {
                query = query.Where(BuildWhereFromFilter<T>(param.Filter));
            }

            //get total if needed
            if (param.NeedsTotal)
            {
                retVal.Total = query.Count();
            }

            //apply sort if there is one
            if (param.Sort != null)
            {
                query = query.OrderBy(BuildSortString(param.Sort));
            }

            //apply paging logic if necessary
            if (param.Take > 0)
            {
                retVal.Data = query.Skip(param.Skip).Take(param.Take).Cast<object>().ToList();
            }
            else
                retVal.Data = query.Cast<object>().ToList();

            return retVal;
        }

        /// <summary>
        /// Construct dynamic where clause based on filter values and type
        /// </summary>
        /// <typeparam name="T"></typeparam>
        /// <param name="filters"></param>
        /// <returns></returns>
        //============================================================
        //Revision History
        //Date        Author          Description
        //06/28/2017  TB               Created
        //============================================================
        public static string BuildWhereFromFilter<T>(List<QueryFilter> filters)
        {
            string retVal = string.Empty;
            QueryFilter prevFilter = null;
            var groupedFilters = filters.GroupBy(filter => filter.field).ToList();
            foreach (var group in groupedFilters)
            {
                retVal += "(";
                foreach (var filter in group)
                {
                    if (prevFilter != null)
                    {
                        if (filter.op == QueryOperators.OrEqual || filter.op == QueryOperators.OrBetween)
                            retVal += " or ";
                        else retVal += " and ";
                    }
                    retVal += GetFilterVal<T>(filter);
                    prevFilter = filter;
                }
                retVal += ")";
                prevFilter = null;
                if (group != groupedFilters.Last())
                    retVal += " and ";
            }
            return retVal;
        }

        /// <summary>
        /// Builds dynamic sort string based on parameters
        /// </summary>
        /// <param name="sort"></param>
        /// <returns></returns>
        //============================================================
        //Revision History
        //Date        Author          Description
        //06/28/2017  TB               Created
        //============================================================
        public static string BuildSortString(QuerySort sort)
        {
            string sortOrder = sort.desc ? "desc" : "";

            return string.Format("{0} {1}", sort.selector, sortOrder);
        }

        /// <summary>
        /// Gets individual where clause for one filter
        /// </summary>
        /// <typeparam name="T"></typeparam>
        /// <param name="filter"></param>
        /// <returns></returns>
        //============================================================
        //Revision History
        //Date        Author          Description
        //06/28/2017  TB               Created
        //============================================================
        private static string GetFilterVal<T>(QueryFilter filter)
        {
            string filterVal = filter.filterval;
            string fieldName = filter.field.ToUpper();
            string formatStr = string.Empty;
            string charStr = string.Empty;

            //get field info for field to apply filter to
            PropertyInfo p = typeof(T).GetProperties().Where(x => x.Name.ToUpper() == fieldName).FirstOrDefault();

            fieldName = p.Name;

            //set character separator if necessary
            switch (p.PropertyType.Name)
            {
                case "String":
                case "DateTime":
                    charStr = "\"";
                    break;
            }

            //convert operator to appropriate linq syntax
            switch (filter.op)
            {
                case QueryOperators.Contains:
                    formatStr = "{0}.Contains({1}{2}{1})";
                    break;
                case QueryOperators.NotContains:
                    formatStr = "!{0}.Contains({1}{2}{1})";
                    break;
                case QueryOperators.EndsWith:
                    formatStr = "{0}.EndsWith({1}{2}{1})";
                    break;
                case QueryOperators.StartsWith:
                    formatStr = "{0}.StartsWith({1}{2}{1})";
                    break;
                case QueryOperators.OrEqual:
                case QueryOperators.Equal:
                    formatStr = "{0} == {1}{2}{1}";
                    break;
                case QueryOperators.NotEqual:
                    formatStr = "{0} != {1}{2}{1}";
                    break;
                case QueryOperators.GreaterThan:
                case QueryOperators.GreaterThanEqual:
                case QueryOperators.LessThan:
                case QueryOperators.LessThanEqual:
                    formatStr = "{0} {3} {1}{2}{1}";
                    break;
                case QueryOperators.OrBetween:
                case QueryOperators.Between:
                    var splitDate = filterVal.Split(':');
                    var startDate = splitDate[0];
                    var endDate = splitDate[1];
                    formatStr = "({0} >= {1}" + startDate + "{1} AND {0}<={1}" + endDate + "{1})";
                    break;
            }

            return string.Format(formatStr, fieldName, charStr, filterVal, filter.op);
        }



    }
}
