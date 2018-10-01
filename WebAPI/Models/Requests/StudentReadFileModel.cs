using CsvHelper.Configuration;
using LinqToDB.Mapping;
using System;
using System.Collections.Generic;

using System.Linq;
using System.Threading.Tasks;

namespace WebAPI.Models.Requests
{
    public class StudentReadFileModel
    {        
        public string Name { get; set; }        
        public string StudentId { get; set; }      
        public string Grade { get; set; }
        public string Teacher { get; set; }
        public string ContactName { get; set; }
        public string ContactEmail { get; set; }
    }

    // this class need for reading from csv(need to add fields)
    public sealed class StudentReadFileModelMap : ClassMap<StudentReadFileModel>
    {
        public StudentReadFileModelMap()
        {
            AutoMap();
            Map(m => m.Name).Name("Name", "Name", "NAME ");
            Map(m => m.StudentId).Name("Student ID");
            Map(m => m.Grade).Name("Grade");
            //Map(m => m.ControlNY).Name("Control NY");
            //Map(m => m.Sex).Name("Sex");
            //Map(m => m.Hispanic).Name("Hispanic");
            //Map(m => m.AmerIndian).Name("Amer Indian");
            //Map(m => m.Asian).Name("Asian");
            //Map(m => m.Black).Name("Black");
            //Map(m => m.White).Name("White");
            //Map(m => m.PacificIsl).Name("Pacific Isl");
            //Map(m => m.DOB).Name("DOB");
            //Map(m => m.Phone).Name("Phone");
            //Map(m => m.PriorSNN).Name("Prior SSN");
            //Map(m => m.Instructor).Name("Instructor");
        }
    }
}
