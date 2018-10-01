using System.IO;

using Newtonsoft.Json;
using Microsoft.AspNetCore.Http;

namespace WebCreek.Framework.Utility
{
    /// <summary>
    /// Helper class to assist with retrieving request elements
    /// </summary>
    //============================================================
    //Revision History
    //Date          Author          Description
    //09/01/2016    TB              Created
    //============================================================
    public class RequestReader : IRequestReader
    {
        private string _body;

        /// <summary>
        /// Constructor
        /// </summary>
        /// <param name="HttpContextAccessor">HTTP context object</param>
        //============================================================
        //Revision History
        //Date          Author          Description
        //09/01/2016    TB              Created
        //============================================================
        public RequestReader(IHttpContextAccessor HttpContextAccessor)
        {
            //read body
            using (StreamReader reader = new StreamReader(HttpContextAccessor.HttpContext.Request.Body))
            {
                _body = reader.ReadToEnd();
            }

            //get reference to headers
            Headers = HttpContextAccessor.HttpContext.Request.Headers;

            QueryString = HttpContextAccessor.HttpContext.Request.Query;
        }

        /// <summary>
        /// Converts body into object of requested type
        /// </summary>
        /// <typeparam name="T"></typeparam>
        /// <returns></returns>
        //============================================================
        //Revision History
        //Date          Author          Description
        //09/01/2016    TB              Created
        //============================================================
        public T GetTypedBody<T>()
        {
            return JsonConvert.DeserializeObject<T>(_body);
        }

        /// <summary>
        /// Headers from Request
        /// </summary>
        public IHeaderDictionary Headers { get; set; }

        public IQueryCollection QueryString { get; set; }
    }

    /// <summary>
    /// Interface for dependency injection
    /// </summary>
    //============================================================
    //Revision History
    //Date          Author          Description
    //09/01/2016    TB              Created
    //============================================================
    public interface IRequestReader
    {
        T GetTypedBody<T>();
        IHeaderDictionary Headers { get; set; }
    }
}
