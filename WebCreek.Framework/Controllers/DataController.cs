using System.Collections.Generic;
using Microsoft.AspNetCore.Mvc;
using WebCreek.Framework.APIContainerClasses;
using WebCreek.Framework.DIObjects;
using Microsoft.AspNetCore.Authorization;

namespace WebCreek.Framework.Controllers
{
    /// <summary>
    /// Controller for generic data requests
    /// </summary>
    //============================================================
    //Revision History
    //Date        Author          Description
    //06/28/2017  TB               Created
    //============================================================
    public class DataController : Controller
    {

        /// <summary>
        /// Retrieves single set of data
        /// </summary>
        /// <param name="param">Query parameters</param>
        /// <param name="factory">Data Factory to resolve query</param>
        /// <returns></returns>
        //============================================================
        //Revision History
        //Date        Author          Description
        //06/28/2017  TB               Created
        //============================================================
        [Authorize]
        [HttpGet]
        [Route("api/[controller]/[action]")]
        public DataReturn GetData([FromServices] IQueryParams param, [FromServices]IQueryFactory factory)
        {
            return factory.GetData<DataReturn>(param);
        }

        /// <summary>
        /// Retrieves data from a query returning multiple data sets
        /// </summary>
        /// <param name="param">Query parameters</param>
        /// <param name="factory">Data factory to resolve query</param>
        /// <returns></returns>
        //============================================================
        //Revision History
        //Date        Author          Description
        //06/28/2017  TB               Created
        //============================================================
        [Authorize]
        [HttpGet]
        [Route("api/[controller]/[action]")]
        public List<DataReturn> GetMultiData([FromServices] IQueryParams param, [FromServices]IQueryFactory factory)
        {
            return factory.GetData<List<DataReturn>>(param);

        }

        /// <summary>
        /// Retrieves multi data query as a CSV file
        /// </summary>
        /// <param name="param"></param>
        /// <param name="factory"></param>
        /// <returns></returns>
        //============================================================
        //Revision History
        //Date        Author          Description
        //06/28/2017  TB               Created
        //============================================================
        [Authorize]
        [HttpGet]
        [Produces("text/csv")]
        [Route("api/[controller]/getmultidata/CSV")]
        public IActionResult GetCSVMultiData([FromServices] IQueryParams param, [FromServices]IQueryFactory factory)
        {
            return Ok(factory.GetData<List<DataReturn>>(param));

        }

        /// <summary>
        /// Retrieves single data query as a CSV file
        /// </summary>
        /// <param name="param"></param>
        /// <param name="factory"></param>
        /// <returns></returns>
        //============================================================
        //Revision History
        //Date        Author          Description
        //06/28/2017  TB               Created
        //============================================================
        [Authorize]
        [HttpGet]
        [Produces("text/csv")]
        [Route("api/[controller]/getdata/CSV")]
        public IActionResult GetCSVData([FromServices] IQueryParams param, [FromServices]IQueryFactory factory)
        {
            return Ok(factory.GetData<DataReturn>(param).Data);

        }
    }
}
