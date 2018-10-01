using System;
using System.Collections.Generic;
using System.Globalization;
using System.IO;
using System.Linq;
using System.Threading.Tasks;
using CsvHelper;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using WebAPI.Data;
using Microsoft.Extensions.Logging;
using WebAPI.Models.Requests;
using OfficeOpenXml;
using System.Text;
using WebAPI.Security;
using Microsoft.AspNetCore.Authorization;
using static WebAPI.Helpers.Enums;

namespace WebAPI.Controllers
{
   // [Produces("application/json")]
    [Route("api/FileUpload/[action]")]
   // [Consumes("application/json","multipart/form-data")]
   [Authorize]
    public class FileUploadController : BaseController
    {
        IHostingEnvironment _appEnvironment;
        bool isReadDataFromFile;
        string readData;

        public FileUploadController(IHostingEnvironment appEnvironment, ILogger<BaseController> logger, IUserIdentity _userIdentity) : base(logger, _userIdentity)
        {
            _appEnvironment = appEnvironment;
            isReadDataFromFile = false;
            readData = "";
        }

        //api/FileUpload/StudentUpload
        [HttpPost]
        [Authorize(Policy = "SchoolAdmin")]
        public IActionResult StudentUpload(IFormFile file)
        {
            readData = "student";
            return UploadAndReadFile(file, Convert.ToInt32(GetSchoolIdForCurrentUser())).Result;
        }

        //api/FileUpload/TeacherUpload
        [HttpPost]
        [Authorize(Policy = "SchoolAdmin")]
        public IActionResult TeacherUpload(IFormFile file)
        {
            int schoolId = Convert.ToInt32(GetSchoolIdForCurrentUser());

            readData = "teacher";
            return UploadAndReadFile(file, schoolId).Result;
        }

        private async Task<IActionResult> UploadAndReadFile(IFormFile file, int schoolId)
        {
            if (file == null) return BadRequest("File is null");
            if (file.Length == 0) return BadRequest("File is empty");
            if (!file.FileName.EndsWith(".xlsx", StringComparison.Ordinal))  return BadRequest("Valid file extension should be *.xlsx");

            // path to folder Files
            string path = "/UploadFiles/" + file.FileName;
            int countPersons = 0;
            try
            {
                // save file into directory Files in parent of wwwroot directory
                // WebRootPath = null (Directory.GetParent(_appEnvironment.WebRootPath)), changed to ContentRootPath
                var fileStream = new FileStream(_appEnvironment.ContentRootPath + path, FileMode.Create);
                await file.CopyToAsync(fileStream);
                path = fileStream.Name;
                fileStream.Close();


                if (file.FileName.EndsWith(".csv", StringComparison.Ordinal))
                {
                    ReadCsvFileAsync(path);
                }
                else if (file.FileName.EndsWith(".xlsx", StringComparison.Ordinal))
                {
                    if (readData == "student")
                    {
                        var studentRecords = new List<StudentReadFileModel>();
                        var student = new StudentReadFileModel();
                        ReadExcelFile(path, student, ref studentRecords);
                        if (studentRecords.Count > 0)
                        {
                            countPersons = ConvertDataFromFileToStudentModelAsync(studentRecords, schoolId);
                        }
                        else 
                        {
                            return BadRequest("Headers on file don't valid!");
                        }
                    }
                    else if (readData == "teacher")
                    {
                        var teacherRecords = new List<TeacherReadFileModel>();
                        var teacher = new TeacherReadFileModel();
                        ReadExcelFile(path, teacher, ref teacherRecords);
                        if (teacherRecords.Count > 0)
                        {
                            countPersons = ConvertDataFromFileToClassroomModelAsync(teacherRecords, schoolId);
                           
                        }
                        else
                        {
                            return BadRequest("Headers on file don't valid!");
                        }
                    }
                }
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
            return Ok("File uploaded successfully! Uploaded " + countPersons + " users");
        }

        private /*async*/ void ReadCsvFileAsync(string path2file)
        {
            /* Dont need 
            var studentRecords = new List<StudentReadFileModel>();
            using (var csvreader = new StreamReader(path2file))
            {
                try
                {
                    var csv = new CsvReader(csvreader);
                    csv.Configuration.Delimiter = ",";
                    csv.Configuration.PrepareHeaderForMatch = header => header.Replace(" ", string.Empty);

                    csv.Configuration.RegisterClassMap<StudentReadFileModelMap>();
                    await csv.ReadAsync();
                    csv.ReadHeader();
                    var records = csv.GetRecords<StudentReadFileModel>();
                    studentRecords = records.ToList();
                    isReadDataFromFile = true;
                }
                catch (Exception e)
                {
                    isReadDataFromFile = false;
                }

                // System.IO.File.Delete(path2file);
            }
            if (isReadDataFromFile)
            {
                DeleteFile(path2file);
            }
            if (studentRecords.Count > 0)
            {
                var studentsList = ConvertDataFromFileToStudentModel(studentRecords);
                if (studentsList != null && studentsList.Count > 0)
                {
                    ds.AddOrUpdateStudentsFromFile(studentsList);
                }
            }
            */


        }

        private void ReadExcelFile<T>(string path2file, T oneRecord, ref List<T> records)
        {
            var file = new FileInfo(path2file);
            using (var package = new ExcelPackage(file)) {
                var worksheet = package.Workbook.Worksheets[1];
                var rowCount = worksheet.Dimension?.Rows;
                var colCount = worksheet.Dimension?.Columns;

                if (!rowCount.HasValue || !colCount.HasValue)
                {
                    return ;
                }
                Type type = oneRecord.GetType();
                var properties = type.GetProperties();
                int maxColumns = properties.Length;
                if (colCount.Value != maxColumns)
                {
                    return;
                }
                //second row, has headers
                for (int row = 2; row <= rowCount.Value; row++)
                {
                    var countEmptyColumns = 0;

                    dynamic newRecord = Activator.CreateInstance(type);                   
                    for (int col = 1; col <= colCount.Value; col++)
                    {
                        var str = worksheet.Cells[row, col].Value == null ? string.Empty : worksheet.Cells[row, col].Value.ToString();
                        if (str == "")
                        {
                            countEmptyColumns++;
                        }                       
                        properties[col-1].SetValue(newRecord, str);
                    }
                    if (countEmptyColumns > maxColumns-1)
                    {
                        isReadDataFromFile = true;
                        break;
                    }
                    records.Add(newRecord);
                }
                isReadDataFromFile = true;
            }
            if (isReadDataFromFile)
            {
                DeleteFile(path2file);
            }        
        }

        private int ConvertDataFromFileToStudentModelAsync(List<StudentReadFileModel> records, int schoolId)
        {
            int savedStudents = 0;
            var studentList = new List<Student>();
            try
            {   
               // CultureInfo provider = CultureInfo.InvariantCulture;
                foreach (var item in records)
                {
                    if ( 
                        !String.IsNullOrWhiteSpace(item.Name) &&
                        !String.IsNullOrWhiteSpace(item.ContactName) &&
                        !String.IsNullOrWhiteSpace(item.Grade) &&
                        !String.IsNullOrWhiteSpace(item.Teacher)  
                        )
                    {
                        int studentStatus = 1;
                        int parentId = 0;
                        var result = ds.GetStudentParentId(new User { Email = item.ContactEmail, Name = item.ContactName }, out parentId);
                        if (result == ObjectManipulationResult.Exists)
                        {
                            studentStatus = 2;
                        }
                        var student = new Student();
                        student.Name = item.Name;
                     

                         
                        //int convertNumber;  
                        //Int32.TryParse(.StudentId, out convertNumber);
                        student.ExternalId = String.IsNullOrEmpty(item.StudentId) ? Guid.NewGuid().ToString() : item.StudentId; 
                        student.Grade = item.Grade;
                        student.ClassroomId = ds.GetOrCreateClassroomIdByName(item.Teacher, schoolId);
                        student.ParentId = parentId;
                        student.SchoolId = schoolId;                        
                        student.StatusId = studentStatus; //statusId - 1(Pending) - default for new students  2-(WithoutCard), when parent exist
                        studentList.Add(student);
                        savedStudents++;
                    }                    
                }               
            }
            catch(Exception e) {  }

            if (studentList.Count > 0)
            {
                ds.AddOrUpdateStudentsFromFileAsync(studentList);               
            }
            return savedStudents;
        }

        private int ConvertDataFromFileToClassroomModelAsync(List<TeacherReadFileModel> records, int schoolId)
        {
            int savedTeachers = 0;
            try
            {                
                foreach (var item in records)
                {
                    if (
                        !String.IsNullOrWhiteSpace(item.Email) &&
                        !String.IsNullOrWhiteSpace(item.FirstName) &&
                        !String.IsNullOrWhiteSpace(item.LastName)
                        )
                    {
                        var classroom = new Classroom();
                        classroom.Name = item.FirstName + " " + item.LastName;
                        int teacherId = 0;
                        
                        var result = ds.CreateUser(
                                      new Data.User
                                      {
                                          Name = classroom.Name,
                                          Email = item.Email,
                                          StatusId = 2
                                      },
                                      4, // RoleId for teacher
                                      out teacherId
                                     );

                        switch (result)
                        {
                            case Helpers.Enums.ObjectManipulationResult.Success:
                                {
                                    classroom.TeacherId = teacherId;
                                    classroom.SchoolId = schoolId;
                                    ds.CreateSchoolPersonal(teacherId, classroom.SchoolId, false);
                                    ds.GetOrCreateClassroomIdByName(classroom.Name, schoolId, teacherId);
                                    savedTeachers++;                             
                                }
                                break;                           
                            default:
                                break;
                        }
                    }
                }
            }
            catch (Exception e)
            { }
            return savedTeachers; 
        }

        private void DeleteFile(string path2file)
        {
            if (System.IO.File.Exists(path2file))
            {
                System.IO.File.Delete(path2file);
            }
        }
    }
}

