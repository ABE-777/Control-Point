using System;
using System.Collections.Generic;
using System.Text;

namespace WebCreek.Framework.Attributes
{
    /// <summary>
    /// Attributes used for Data Factory, lets the data factory know the class contains query objects
    /// </summary>
    [AttributeUsage(AttributeTargets.Class)]
    public class DataFactoryAttribute : Attribute
    {
    }

    /// <summary>
    /// Attribute used for data factory to signify method is a query method
    /// </summary>
    [AttributeUsage(AttributeTargets.Method)]
    public class DataMethodAttribute : Attribute
    {
       
    }

    /// <summary>
    /// Signifies attribute should not be included in a csv request
    /// </summary>
    [AttributeUsage(AttributeTargets.Property)]
    public class NonExported : Attribute
    {

    }
}
