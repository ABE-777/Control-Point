using System;
using System.Collections.Generic;
using System.Text;

namespace WebCreek.Framework.APIContainerClasses
{
    /// <summary>
    /// Object used for Response for data requests
    /// </summary>
    //============================================================
    //Revision History
    //Date        Author          Description
    //06/28/2017  TB               Created
    //============================================================
    public class DataReturn
    {
        public int Total { get; set; }
        public List<object> Data { get; set; }
        public string Name { get; set; }
    }


}
