using System;
using System.Collections.Generic;
using System.Drawing;
using System.Globalization;
using System.IO;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using OfficeOpenXml;
using OfficeOpenXml.Style;
using WebAPI.Data;
using WebAPI.Models.Responses;
using WebAPI.Security;

namespace WebAPI.Controllers
{
    [Produces("application/json")]
    [Route("api/Dismissal/[action]")]
    public class DismissalController : BaseController
    {
        IHostingEnvironment _appEnvironment;
        private ILogger<BaseController> _logger;

        public DismissalController(IHostingEnvironment appEnvironment, ILogger<BaseController> logger, IUserIdentity _userIdentity) : base(logger, _userIdentity)
        {
            _appEnvironment = appEnvironment;
            _logger = logger;
        }


        [HttpGet]
        //[Route("{archiveDate}")]
        [Authorize(Policy = "Flights")]
        public IActionResult Archive([FromQuery]string archiveDate, [FromQuery]string studentName, [FromQuery]string startDay)
        {
            try
            {
                var endDate = Convert.ToDateTime(archiveDate).Date;
                var startDate = Convert.ToDateTime(startDay).Date;
                bool IsMilitaryTimeFormat;
                if (endDate != null && startDate != null)
                {
                    var archiveData = ds.GetArchive(Convert.ToInt32(GetSchoolIdForCurrentUser()), endDate, studentName, startDate, out IsMilitaryTimeFormat);

                    if (!IsMilitaryTimeFormat)
                    {
                        DateTimeFormatInfo fi = new CultureInfo("en-US", true).DateTimeFormat;

                        archiveData.ForEach(r =>
                        {
                            r.ScanningTime = (r.ScanningTime == "-") ? "-" : Convert.ToDateTime(r.ScanningTime).ToString("hh:mm tt", fi);
                            r.HallwayTime = (r.HallwayTime == "-") ? "-" : Convert.ToDateTime(r.HallwayTime).ToString("hh:mm tt", fi);
                            r.ClassroomTime = (r.ClassroomTime == "-") ? "-" : Convert.ToDateTime(r.ClassroomTime).ToString("hh:mm tt", fi);
                        });
                    }
                    else
                    {
                        archiveData.ForEach(r =>
                        {
                            r.ScanningTime = (r.ScanningTime ==  "-") ? "-" : Convert.ToDateTime(r.ScanningTime).ToString("HH:mm");
                            r.HallwayTime = (r.HallwayTime == "-") ? "-" : Convert.ToDateTime(r.HallwayTime).ToString("HH:mm");
                            r.ClassroomTime = (r.ClassroomTime == "-") ? "-" : Convert.ToDateTime(r.ClassroomTime).ToString("HH:mm");
                        });
                    }

                    if (archiveData.Count() > 0)
                    {
                        return Ok(archiveData);
                    }
                    else
                    {
                        return NoContent();
                    }
                }
                else
                {
                    return BadRequest("Date is not set in correct form");
                }
            }
            catch (Exception ex)
            {
                return BadRequest("Error occured");
            }
        }

        [HttpGet]
        [Route("{date}")]
        [Authorize(Policy = "Flights")]
        public IActionResult ExportArchive(string date)
        {
            DateTime ArchiveDate = DateTime.ParseExact(date, "yyyy-MM-dd", CultureInfo.InvariantCulture);


            string sContentRootFolder = _appEnvironment.ContentRootPath;
            string sFileName = @"UploadFiles/Archive.xlsx";
            bool IsMilitaryTimeFormat;
            FileInfo file = new FileInfo(Path.Combine(sContentRootFolder, sFileName));

            if (file.Exists)
            {
                file.Delete();
                file = new FileInfo(Path.Combine(sContentRootFolder, sFileName));
            }

            var model = ds.GetArchiveExportInfo(Convert.ToInt32(GetSchoolIdForCurrentUser()), ArchiveDate, out IsMilitaryTimeFormat);

            var modelByFlightByLane = model.GroupBy(fl => new { fl.Flight, fl.Lane }).OrderBy(fl => fl.Key);

            using (ExcelPackage package = new ExcelPackage(file))
            {
                try
                {
                    ExcelWorksheet worksheet = package.Workbook.Worksheets.Add("Archive");
                    worksheet.DefaultColWidth = 15;
                    worksheet.Column(1).Width = 25;
                    worksheet.Column(2).Width = 25;

                    worksheet.Column(5).Style.HorizontalAlignment = ExcelHorizontalAlignment.Left;
                    worksheet.Column(6).Style.HorizontalAlignment = ExcelHorizontalAlignment.Left;
                    worksheet.Column(7).Style.HorizontalAlignment = ExcelHorizontalAlignment.Left;

                    if (IsMilitaryTimeFormat)
                    {
                        worksheet.Column(5).Style.Numberformat.Format = "hh:mm;@";
                        worksheet.Column(6).Style.Numberformat.Format = "hh:mm;@";
                        worksheet.Column(7).Style.Numberformat.Format = "hh:mm;@";
                    }
                    else
                    {
                        worksheet.Column(5).Style.Numberformat.Format = "hh:mm AM/PM";
                        worksheet.Column(6).Style.Numberformat.Format = "hh:mm AM/PM";
                        worksheet.Column(7).Style.Numberformat.Format = "hh:mm AM/PM";
                    }

                    List<string> headers = new List<string> { "Student Name", "Student ID", "Grade", "Parent/Guardian", "Scanner Time", "Classroom Time", "Hallway Time" };
                    //add a date header
                    using (ExcelRange rng = worksheet.Cells[1, 1, 1, 7])
                    {
                        rng.Style.Border.Top.Style = ExcelBorderStyle.Thin;
                        rng.Style.Border.Left.Style = ExcelBorderStyle.Thin;
                        rng.Style.Border.Right.Style = ExcelBorderStyle.Thin;
                        rng.Style.Border.Bottom.Style = ExcelBorderStyle.Thin;
                    }
                    worksheet.Cells["A1:G1"].Merge = true;
                    worksheet.Cells[1, 1].Style.Font.Bold = true;
                    worksheet.Cells[1, 1].Style.HorizontalAlignment = ExcelHorizontalAlignment.Center;
                    worksheet.Cells[1, 1].Value = ArchiveDate.ToString("yyyy-MM-dd");
                  
                    int row = 2;

                    foreach (var group in modelByFlightByLane)
                    {
                        worksheet.Cells[row, 1, row, 7].Merge = true;
                        worksheet.Cells[row, 1].Style.HorizontalAlignment = ExcelHorizontalAlignment.Center;
                        worksheet.Cells[row, 1].Style.Font.Bold = true;
                        using (ExcelRange rng = worksheet.Cells[row, 1, row, 7])
                        {
                            rng.Style.Border.Top.Style = ExcelBorderStyle.Thick;
                            rng.Style.Border.Left.Style = ExcelBorderStyle.Thick;
                            rng.Style.Border.Right.Style = ExcelBorderStyle.Thick;
                            rng.Style.Border.Bottom.Style = ExcelBorderStyle.Thick;
                        }

                        worksheet.Cells[row, 1].Value = $"{group.Key.Lane} - Flight {group.Key.Flight}";
                        row++;
                        for (int i = 1; i <= headers.Count; ++i)
                        {
                            worksheet.Cells[row, i].Style.Font.Bold = true;
                            worksheet.Cells[row, i].Value = headers[i - 1];
                        }

                        row++;
                        using (ExcelRange rng = worksheet.Cells[row - 1, 1, row - 1 + group.Count(), 7])
                        {
                            rng.Style.Border.Top.Style = ExcelBorderStyle.Thin;
                            rng.Style.Border.Left.Style = ExcelBorderStyle.Thin;
                            rng.Style.Border.Right.Style = ExcelBorderStyle.Thin;
                            rng.Style.Border.Bottom.Style = ExcelBorderStyle.Thin;
                        }
                        foreach (var record in group)
                        {
                            worksheet.Cells[row, 1].Value = record.StudentName;
                            worksheet.Cells[row, 2].Value = record.ExternalId;
                            worksheet.Cells[row, 3].Value = record.Grade;
                            worksheet.Cells[row, 4].Value = record.ParentName;

                            if (record.ScanningTime != "-")
                            {
                                worksheet.Cells[row, 5].Value = TimeSpan.Parse(record.ScanningTime);
                            }
                            else
                            {
                                worksheet.Cells[row, 5].Value = "-";
                            }

                            if (record.ClassroomTime != "-")
                            {
                                worksheet.Cells[row, 6].Value = TimeSpan.Parse(record.ClassroomTime);
                            }
                            else
                            {
                                worksheet.Cells[row, 6].Value = "-";
                            }

                            if (record.HallwayTime != "-")
                            {
                                worksheet.Cells[row, 7].Value = TimeSpan.Parse(record.HallwayTime);
                            }
                            else
                            {
                                worksheet.Cells[row, 7].Value = "-";
                            }

                            row++;
                        }
                    }

                    package.Save(); // Save the workbook.
                }
                catch (InvalidOperationException exception)
                {
                    _logger.LogError(exception, "Method: " + HttpContext.Request.Method.ToString() + "\nPath: " + HttpContext.Request.Path.ToString());
                    return BadRequest("Can't transmit file from server to client!");
                }

                var fileContents = System.IO.File.ReadAllBytes((Path.Combine(sContentRootFolder, sFileName)));
                return new FileContentResult(fileContents, "application/octet-stream");
            }
        }

        [HttpGet]
        [Route("{date}/{name}/{startDay}")]
        [Authorize(Policy = "Flights")]
        public IActionResult ExportFilteredArchive(string date, string name, string startDay)
        {

            DateTime ArchiveDate = DateTime.ParseExact(date, "yyyy-MM-dd", CultureInfo.InvariantCulture);
            DateTime StartDate = DateTime.ParseExact(startDay, "yyyy-MM-dd", CultureInfo.InvariantCulture);

            //create file
            string sContentRootFolder = _appEnvironment.ContentRootPath;
            string sFileName = @"UploadFiles/Archive.xlsx";
            bool IsMilitaryTimeFormat;

            FileInfo file = new FileInfo(Path.Combine(sContentRootFolder, sFileName));

            if (file.Exists)
            {
                file.Delete();
                file = new FileInfo(Path.Combine(sContentRootFolder, sFileName));
            }

            var model = ds.GetArchive(Convert.ToInt32(GetSchoolIdForCurrentUser()), ArchiveDate, name, StartDate, out IsMilitaryTimeFormat);

            using (ExcelPackage package = new ExcelPackage(file))
            {
                try
                {
                    ExcelWorksheet worksheet = package.Workbook.Worksheets.Add("Archive");
                    worksheet.DefaultColWidth = 15;
                    worksheet.Column(2).Width = 25;
                    worksheet.Column(3).Width = 10;

                    worksheet.Column(5).Style.HorizontalAlignment = ExcelHorizontalAlignment.Left;
                    worksheet.Column(6).Style.HorizontalAlignment = ExcelHorizontalAlignment.Left;
                    worksheet.Column(7).Style.HorizontalAlignment = ExcelHorizontalAlignment.Left;

                    if (IsMilitaryTimeFormat)
                    {
                        worksheet.Column(5).Style.Numberformat.Format = "hh:mm;@";
                        worksheet.Column(6).Style.Numberformat.Format = "hh:mm;@";
                        worksheet.Column(7).Style.Numberformat.Format = "hh:mm;@";
                    }
                    else
                    {
                        worksheet.Column(5).Style.Numberformat.Format = "hh:mm AM/PM";
                        worksheet.Column(6).Style.Numberformat.Format = "hh:mm AM/PM";
                        worksheet.Column(7).Style.Numberformat.Format = "hh:mm AM/PM";
                    }

                    List<string> headers = new List<string> {"Date", "Flight-Lane", "Grade", "Parent/Guardian", "Scanner Time", "Classroom Time", "Hallway Time" };
                   // add a student header
                    using (ExcelRange rng = worksheet.Cells[1, 1, 1, 7])
                    {
                        rng.Style.Border.Top.Style = ExcelBorderStyle.Thin;
                        rng.Style.Border.Left.Style = ExcelBorderStyle.Thin;
                        rng.Style.Border.Right.Style = ExcelBorderStyle.Thin;
                        rng.Style.Border.Bottom.Style = ExcelBorderStyle.Thin;
                    }
                    worksheet.Cells["A1:G1"].Merge = true;
                    worksheet.Cells[1, 1].Style.Font.Bold = true;
                    worksheet.Cells[1, 1].Style.HorizontalAlignment = ExcelHorizontalAlignment.Center;
                    worksheet.Cells[1, 1].Value = name;

                    //headers in 2 row
                    using (ExcelRange rng = worksheet.Cells[2, 1, 2, 7])
                    {
                        rng.Style.Border.Top.Style = ExcelBorderStyle.Thin;
                        rng.Style.Border.Left.Style = ExcelBorderStyle.Thin;
                        rng.Style.Border.Right.Style = ExcelBorderStyle.Thin;
                        rng.Style.Border.Bottom.Style = ExcelBorderStyle.Thin;
                    }
                    for (int i = 1; i <= headers.Count; ++i)
                    {
                        worksheet.Cells[2, i].Style.Font.Bold = true;
                        worksheet.Cells[2, i].Value = headers[i - 1];
                    }

                    int row = 3;
                    if (model != null)
                    {
                        foreach (var record in model)
                        {
                            using (ExcelRange rng = worksheet.Cells[row, 1, row, 7])
                            {
                                rng.Style.Border.Top.Style = ExcelBorderStyle.Thin;
                                rng.Style.Border.Left.Style = ExcelBorderStyle.Thin;
                                rng.Style.Border.Right.Style = ExcelBorderStyle.Thin;
                                rng.Style.Border.Bottom.Style = ExcelBorderStyle.Thin;
                            }
                            worksheet.Cells[row, 1].Value = record.ArchiveDate.ToString("yyyy-MM-dd"); ;
                            worksheet.Cells[row, 2].Value = "Flight " + record.Flight + "-" + record.Lane;
                            worksheet.Cells[row, 3].Value = record.Grade;
                            worksheet.Cells[row, 4].Value = record.ParentName;

                            if (record.ScanningTime != "-")
                            {
                                worksheet.Cells[row, 5].Value = TimeSpan.Parse(record.ScanningTime);
                            }
                            else
                            {
                                worksheet.Cells[row, 5].Value = "-";
                            }

                            if (record.ClassroomTime != "-")
                            {
                                worksheet.Cells[row, 6].Value = TimeSpan.Parse(record.ClassroomTime);
                            }
                            else
                            {
                                worksheet.Cells[row, 6].Value = "-";
                            }

                            if (record.HallwayTime != "-")
                            {
                                worksheet.Cells[row, 7].Value = TimeSpan.Parse(record.HallwayTime);
                            }
                            else
                            {
                                worksheet.Cells[row, 7].Value = "-";
                            }
                            
                            row++;

                        }
                    }

                    package.Save(); // Save the workbook.
                }
                catch (InvalidOperationException exception)
                {
                    _logger.LogError(exception, "Method: " + HttpContext.Request.Method.ToString() + "\nPath: " + HttpContext.Request.Path.ToString());
                    return BadRequest("Can't transmit file from server to client!");
                }

                var fileContents = System.IO.File.ReadAllBytes((Path.Combine(sContentRootFolder, sFileName)));
                return new FileContentResult(fileContents, "application/octet-stream");
            }
        }
    }
}

