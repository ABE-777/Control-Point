using Microsoft.AspNetCore.Http;
using System;
using System.Collections.Generic;
using System.Text;
using Newtonsoft.Json;

namespace WebCreek.Framework.Utility
{
    /// <summary>
    /// Extensions used to pull elements from Query String
    /// </summary>
    //============================================================
    //Revision History
    //Date        Author          Description
    //06/28/2017  TB               Created
    //============================================================
    public static class IQueryCollectionExtensions
    {
        /// <summary>
        /// Retrieves value as an integer
        /// </summary>
        /// <param name="qc"></param>
        /// <param name="fieldName"></param>
        /// <returns></returns>
        //============================================================
        //Revision History
        //Date        Author          Description
        //06/28/2017  TB               Created
        //============================================================
        public static int GetAsInt(this IQueryCollection qc,string fieldName)
        {
            int retVal = 0;

            if (qc.ContainsKey(fieldName))
                Int32.TryParse(qc[fieldName], out retVal);

            return retVal;
        }

        /// <summary>
        /// Retrieves value as a boolean
        /// </summary>
        /// <param name="qc"></param>
        /// <param name="fieldName"></param>
        /// <returns></returns>
        //============================================================
        //Revision History
        //Date        Author          Description
        //06/28/2017  TB               Created
        //============================================================
        public static bool GetAsBool(this IQueryCollection qc, string fieldName)
        {
            bool retVal = false;

            if (qc.ContainsKey(fieldName))
                bool.TryParse(qc[fieldName], out retVal);

            return retVal;
        }

        /// <summary>
        /// Retrieves value as a typed list
        /// </summary>
        /// <typeparam name="T"></typeparam>
        /// <param name="qc"></param>
        /// <param name="fieldName"></param>
        /// <returns></returns>
        //============================================================
        //Revision History
        //Date        Author          Description
        //06/28/2017  TB               Created
        //============================================================
        public static List<T> GetAsList<T>(this IQueryCollection qc,string fieldName)
        {
            try
            {
                if (qc.ContainsKey(fieldName))
                {
                    string json = qc[fieldName];

                    if (!json.StartsWith("["))
                        json = "[" + json + "]";

                    return JsonConvert.DeserializeObject<List<T>>(json);
                }
                else
                    return default(List<T>);
            }
            catch
            {
                return default(List<T>);
            }
        }

        /// <summary>
        /// Retrieves value as a typed object
        /// </summary>
        /// <typeparam name="T"></typeparam>
        /// <param name="qc"></param>
        /// <param name="fieldName"></param>
        /// <returns></returns>
        //============================================================
        //Revision History
        //Date        Author          Description
        //06/28/2017  TB               Created
        //============================================================
        public static T GetAsTyped<T>(this IQueryCollection qc, string fieldName)
        {
            try
            {
                if (qc.ContainsKey(fieldName))
                    return JsonConvert.DeserializeObject<T>(qc[fieldName]);
                else
                    return default(T);
            }
            catch
            {
                return default(T);
            }

        }
    }
}
