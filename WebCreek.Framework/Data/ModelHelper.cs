using System;
using System.Collections.Generic;
using System.Text;
using System.Linq;
using LinqToDB;
using WebCreek.Framework.DataModel;
using System.Linq.Dynamic.Core;

namespace WebCreek.Framework.Data
{
    public static class ModelHelper
    {
        public static T GetModel<T>(string filter) where T : class
        {
            using (var db = new SysDB())
            {
                var query = from x in db.GetTable<T>()
                            select x;

                if (filter.Length > 0)
                    query = query.Where(filter);

                return query.FirstOrDefault<T>();

            }
        }

        public static List<T> GetList<T>(string filter) where T : class
        {
            using (var db = new SysDB())
            {
                var query = from x in db.GetTable<T>()
                            select x;

                if (filter.Length > 0)
                    query = query.Where(filter);

                return query.ToList<T>();

            }
        }


    }
}
