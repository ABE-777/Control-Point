using System;
using System.Collections.Generic;
using System.Text;
using System.Linq;
using WebCreek.Framework.APIContainerClasses;

namespace WebCreek.Framework.DIObjects
{
    /// <summary>
    /// Interface for Query Factory
    /// </summary>
    //============================================================
    //Revision History
    //Date        Author          Description
    //06/28/2017  TB               Created
    //============================================================
    public interface IQueryFactory
    {
       T GetData<T>(IQueryParams param);
        
    }


}
