using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Reflection;

using WebCreek.Framework.APIContainerClasses;
using WebCreek.Framework.DIObjects;
using WebCreek.Framework.Attributes;

namespace WebCreek.Framework.Data
{
    /// <summary>
    /// Calls query method based on query name
    /// </summary>
    //============================================================
    //Revision History
    //Date        Author          Description
    //06/28/2017  TB               Created
    //============================================================
    public class DataFactory : IQueryFactory
    {
        protected Dictionary<string, MethodInfo> Methods = new Dictionary<string, MethodInfo>();

        /// <summary>
        /// Constructor
        /// </summary>
        //============================================================
        //Revision History
        //Date        Author          Description
        //06/28/2017  TB               Created
        //============================================================
        public DataFactory()
        {
            LoadTypes();
        }

        /// <summary>
        /// Looks up query method and invokes it
        /// </summary>
        /// <typeparam name="T">Return Type</typeparam>
        /// <param name="param">Query parameters</param>
        /// <returns></returns>
        //============================================================
        //Revision History
        //Date        Author          Description
        //06/28/2017  TB               Created
        //============================================================
        public T GetData<T>(IQueryParams param)
        {
            MethodInfo mi = Methods[param.QueryName];
            return (T)mi.Invoke(null, new object[] { param });
        }

        /// <summary>
        /// Builds list of methods that are registered as query methods
        /// </summary>
        //============================================================
        //Revision History
        //Date        Author          Description
        //06/28/2017  TB               Created
        //============================================================
        private void LoadTypes()
        {
            //retrieve from main assembly
            Assembly a = Assembly.GetEntryAssembly();
            LoadTypesFromAssembly(a);

            //retrieve from this assembly
            a = this.GetType().GetTypeInfo().Assembly;
            LoadTypesFromAssembly(a);

        }

        /// <summary>
        /// Loads all methods marked with the DataMethodAttribute into a collection so they can be invoked later
        /// </summary>
        /// <param name="a"></param>
        //============================================================
        //Revision History
        //Date        Author          Description
        //06/28/2017  TB               Created
        //============================================================
        private void LoadTypesFromAssembly(Assembly a)
        {
            var typesWithMyAttribute =
                from t in a.GetTypes()
                let attributes = t.GetTypeInfo().GetCustomAttributes(typeof(DataFactoryAttribute), true)
                where attributes != null && attributes.Count() > 0
                select new { Type = t, Attributes = attributes.Cast<DataFactoryAttribute>() };

            foreach (var x in typesWithMyAttribute)
            {
                var methods = x.Type.GetMethods().Where(y => y.GetCustomAttributes(typeof(DataMethodAttribute), true).Count() > 0);

                foreach (var method in methods)
                {
                    Methods.Add(method.Name, method);
                }
            }
        }

    }
}
