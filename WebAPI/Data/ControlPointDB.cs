using LinqToDB;
using LinqToDB.Data;
using LinqToDB.Mapping;
using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Linq;
using System.Threading.Tasks;
using WebCreek.Framework.DataModel;
using WebCreek.Framework.Models;

namespace WebAPI.Data
{
    public partial class ControlPointDB : SysDB
    {
        public ControlPointDB() : base("default")
        {
            InitDataContext();
        }

        public ControlPointDB(string configuration)
            : base(configuration)
        {
            InitDataContext();
        }
        partial void InitDataContext();

        public ITable<ArchiveTimeType> ArchiveTimeType { get { return GetTable<ArchiveTimeType>(); } }
        public ITable<CardPrintingType> CardPrintingType { get { return GetTable<CardPrintingType>(); } }
        public ITable<CardStatus> CardStatus { get { return GetTable<CardStatus>(); } }
        public ITable<Classroom> Classroom { get { return GetTable<Classroom>(); } }
        public ITable<Dismissal> Dismissal { get { return GetTable<Dismissal>(); } }
        public ITable<DismissalArchive> DismissalArchive { get { return GetTable<DismissalArchive>(); } }
        public ITable<District> District { get { return GetTable<District>(); } }
        public ITable<Flight> Flight { get { return GetTable<Flight>(); } }
        public ITable<FlightStatus> FlightStatus { get { return GetTable<FlightStatus>(); } }
        public ITable<Impersonation> Impersonation { get { return GetTable<Impersonation>(); } }
        public ITable<Lane> Lane { get { return GetTable<Lane>(); } }
        public ITable<LaneLogisticType> LaneLogisticType { get { return GetTable<LaneLogisticType>(); } }
        public ITable<Lanes2Fights> Lanes2Fights { get { return GetTable<Lanes2Fights>(); } }
        public ITable<Parent> Parent { get { return GetTable<Parent>(); } }
        public ITable<Role> Role { get { return GetTable<Role>(); } }
        public ITable<School> School { get { return GetTable<School>(); } }
        public ITable<SchoolPersonal> SchoolPersonal { get { return GetTable<SchoolPersonal>(); } }
        public ITable<SchoolStatus> SchoolStatus { get { return GetTable<SchoolStatus>(); } }
        public ITable<State> State { get { return GetTable<State>(); } }
        public ITable<Student> Student { get { return GetTable<Student>(); } }
        public ITable<StudentStatus> StudentStatus { get { return GetTable<StudentStatus>(); } }
        public ITable<Students2Parents> Students2Parents { get { return GetTable<Students2Parents>(); } }
        public ITable<TeacherSetting> TeacherSetting { get { return GetTable<TeacherSetting>(); } }
        public ITable<User> User { get { return GetTable<User>(); } }
        public ITable<Users2Roles> Users2Roles { get { return GetTable<Users2Roles>(); } }
        public ITable<UserStatus> UserStatus { get { return GetTable<UserStatus>(); } }
    }

 

    [Table(Name = "ArchiveTimeType")]
    public class ArchiveTimeType
    {
        [PrimaryKey, Identity]
        public int Id { get; set; }

        [Column(Name = "Name")]
        public string Name { get; set; }
    }

    [Table(Name = "CardPrintingType")]
    public class CardPrintingType
    {
        [PrimaryKey, Identity]
        public int Id { get; set; }

        [Column(Name = "Name")]
        public string Name { get; set; }
    }

    
    [Table(Name = "CardStatus")]
    public class CardStatus
    {
        [PrimaryKey, Identity]
        public int Id { get; set; }

        [Column(Name = "Name")]
        public string Name { get; set; }
    }

    [Table(Name = "Classroom")]
    public class Classroom
    {
        [PrimaryKey, Identity]
        public int Id { get; set; }

        [Column(Name = "Name")]
        public string Name { get; set; }

        [Column(Name = "TeacherId")]
        public int? TeacherId { get; set; }

        [Column(Name = "SchoolId")]
        public int SchoolId { get; set; }
    }

    [Table(Name = "Dismissal")]
    public class Dismissal
    {
        [PrimaryKey, Identity]
        public int Id { get; set; }

        [Column(Name = "FlightLaneId")]
        public int FlightLaneId { get; set; }

        [Column(Name = "StudentId")]
        public int StudentId { get; set; }

        [Column(Name = "CarNumber")]
        public int CarNumber { get; set; }

        [Column(Name = "ScanTime")]
        public DateTime ScanTime { get; set; }

        [Column(Name = "ClassroomReleaseTime")]
        public DateTime ClassroomReleaseTime { get; set; }

        [Column(Name = "HallwayReleaseTime")]
        public DateTime HallwayReleaseTime { get; set; }

        [Column(Name = "ParentId")]
        public int ParentId { get; set; }

        [Column(Name = "UserId")]
        public int UserId { get; set; }
    }

    [Table(Name = "DismissalArchive")]
    public class DismissalArchive
    {
        [PrimaryKey, Identity]
        public int Id { get; set; }


        [Column(Name = "ExternalId")]
        public string ExternalId { get; set; }

        [Column(Name = "StudentId")]
        public int StudentId { get; set; }

        [Column(Name = "Flight")]
        public int Flight { get; set; }

        [Column(Name = "FlightDate")]
        public DateTime FlightDate { get; set; }

        [Column(Name = "StudentName")]
        public string StudentName { get; set; }

        [Column(Name = "Grade")]
        public string Grade { get; set; }

        [Column(Name = "ParentName")]
        public string ParentName { get; set; }

        [Column(Name = "FlightLaneId")]
        public int FlightLaneId { get; set; }

        [Column(Name = "Lane")]
        public string Lane { get; set; }

        [Column(Name = "SchoolId")]
        public int SchoolId { get; set; }

        [Column(Name = "ScanningTime")]
        public string ScanningTime { get; set; }

        [Column(Name = "ClassroomTime")]
        public string ClassroomTime { get; set; }

        [Column(Name = "HallwayTime")]
        public string HallwayTime { get; set; }

        [Column(Name = "ArchiveDate")]
        public DateTime ArchiveDate { get; set; }
    }

    [Table(Name = "District")]
    public class District
    {
        [PrimaryKey, Identity]
        public int Id { get; set; }

        [Column(Name = "Name")]
        public string Name { get; set; }

        [Column(Name = "StateId")]
        public int StateId { get; set; }
    }

    [Table(Name = "ErrorLog")]
    public class ErrorLog
    {
        [PrimaryKey, Identity]
        public int Id { get; set; }

        [Column(Name = "EventID")]
        public int EventID { get; set; }
        
        [Column(Name = "LogLevel")]
        public string LogLevel { get; set; }
        
        [Column(Name = "Message")]
        public string Message { get; set; }

        [Column(Name = "CreatedTime")]
        public DateTime CreatedTime { get; set; }        
    }

    [Table(Name = "Flight")]
    public class Flight
    {
        [PrimaryKey, Identity]
        public int Id { get; set; }

        [Column(Name = "Number")]
        public int Number { get; set; }

        [Column(Name = "Date")]
        public DateTime Date { get; set; }

        [Column(Name = "StatusId")]
        public int StatusId { get; set; }

        [Column(Name = "SchoolId")]
        public int SchoolId { get; set; }
    }

    [Table(Name = "FlightStatus")]
    public class FlightStatus
    {
        [PrimaryKey, Identity]
        public int Id { get; set; }

        [Column(Name = "Name")]
        public string Name { get; set; }
    }
    

    [Table(Name = "Impersonation")]
    public class Impersonation
    {
        [PrimaryKey, Identity]
        public int Id { get; set; }
        

        [Column(Name = "ImpersonatorUserId")]
        public int ImpersonatorUserId { get; set; }

        [Column(Name = "ImpersonatedUserId")]
        public int ImpersonatedUserId { get; set; }
        
        [Column(Name = "ValidFrom")]
        public DateTime ValidFrom { get; set; }

        [Column(Name = "ValidTo")]
        public DateTime ValidTo { get; set; }

        [Column(Name = "CreatedBy")]
        public string CreatedBy { get; set; }

        [Column(Name = "CreatedOn")]
        public DateTime CreatedOn { get; set; }

        [Column(Name = "UpdatedBy")]
        public string UpdatedBy { get; set; }

        [Column(Name = "UpdatedOn")]
        public DateTime? UpdatedOn { get; set; }
    }

    [Table(Name = "Lane")]
    public class Lane
    {
        [PrimaryKey, Identity]
        public int Id { get; set; }

        [Column(Name = "Name")]
        public string Name { get; set; }

        [Column(Name = "Color")]
        public string Color { get; set; }

        [Column(Name = "SchoolId")]
        public int SchoolId { get; set; }

        [Column(Name = "UserId")]
        public int UserId { get; set; }
    }
    
    [Table(Name = "LaneLogisticType")]
    public class LaneLogisticType
    {
        [PrimaryKey, Identity]
        public int Id { get; set; }

        [Column(Name = "Name")]
        public string Name { get; set; }
    }

    [Table(Name = "Lanes2Fights")]
    public class Lanes2Fights
    {
        [PrimaryKey, Identity]
        public int Id { get; set; }

        [Column(Name = "FlightId")]
        public int FlightId { get; set; }

        [Column(Name = "LaneId")]
        public int LaneId { get; set; }

        [Column(Name = "CreatedBy")]
        public int CreatedBy { get; set; }

        [Column(Name = "CreatedOn")]
        public DateTime CreatedOn { get; set; }

        [Column(Name = "StatusId")]
        public int StatusId { get; set; }
    }

    [Table(Name = "LaneStatus")]
    public class LaneStatus
    {
        [PrimaryKey, Identity]
        public int Id { get; set; }

        [Column(Name = "Name")]
        public string Name { get; set; }
    }

    [Table(Name = "Parent")]
    public class Parent
    {
        [PrimaryKey, Identity]
        public int Id { get; set; }

        [Column(Name = "Name")]
        public string Name { get; set; }

        [Column(Name = "DriverLicense")]
        public string DriverLicense { get; set; }

        [Column(Name = "PhoneNumber")]
        public string PhoneNumber { get; set; }

        [Column(Name = "BarcodeImage")]
        public byte[] BarcodeImage { get; set; }

        [Column(Name = "CardStatusId")]
        public int CardStatusId { get; set; }
    }

    [Table(Name = "Role")]
    public class Role
    {
        [PrimaryKey, Identity]
        public int Id { get; set; }

        [Column(Name = "Name")]
        public string Name { get; set; }

        [Column(Name = "IsSelectable")]
        public bool IsSelectable { get; set; }
    }

    [Table(Name = "School")]
    public class School
    {
        [PrimaryKey, Identity]
        public int Id { get; set; }

        [Column(Name = "Name")]
        public string Name { get; set; }

        [Column(Name = "DistrictId")]
        public int DistrictId { get; set; }

        [Column(Name = "StatusId")]
        public int StatusId { get; set; }

        [Column(Name = "LanesPerFlight")]
        public int LanesPerFlight { get; set; }

        [Column(Name = "CarsPerLaneCount")]
        public int CarsPerLaneCount { get; set; }

        [Column(Name = "LaneLogisticTypeId")]
        public int? LaneLogisticTypeId { get; set; }

        [Column(Name = "CardPrintingTypeId")]
        public int? CardPrintingTypeId { get; set; }

        [Column(Name = "ArchiveTimeTypeId")]
        public int? ArchiveTimeTypeId { get; set; }

        [Column(Name = "IsPrintingAtHome")]
        public bool IsPrintingAtHome { get; set; }

        [Column(Name = "PrintingInstructions")]
        public string PrintingInstructions { get; set; }


    }

    [Table(Name = "SchoolPersonal")]
    public class SchoolPersonal
    {
        [PrimaryKey]
        public int Id { get; set; }

        [Column(Name = "SchoolId")]
        public int SchoolId { get; set; }

        [Column(Name = "IsMainAdmin")]
        public bool? IsMainAdmin { get; set; }
    }

    [Table(Name = "State")]
    public class State
    {
        [PrimaryKey]
        public int Id { get; set; }

        [Column(Name = "Name")]
        public string Name { get; set; }
    }

    [Table(Name = "SchoolStatus")]
    public class SchoolStatus
    {
        [PrimaryKey, Identity]
        public int Id { get; set; }

        [Column(Name = "Name")]
        public string Name { get; set; }
    }

    [Table(Name = "Student")]
    public class Student
    {
        [PrimaryKey, Identity]
        public int Id { get; set; }

        [Column(Name = "ExternalId")]
        public string ExternalId { get; set; }

        [Column(Name = "Name")]
        public string Name { get; set; }

        [Column(Name = "DateOfBirth")]
        public DateTime DateOfBirth { get; set; }

        [Column(Name = "Phone")]
        public string Phone { get; set; }

        [Column(Name = "Grade")]
        public string Grade { get; set; }

        [Column(Name = "ParentId")]
        public int ParentId { get; set; }
        
        [Column(Name = "StatusId")]
        public int StatusId { get; set; }
        
        [Column(Name = "SchoolId")]
        public int SchoolId { get; set; }

        [Column(Name = "ClassroomId")]
        public int? ClassroomId { get; set; }
    }

    [Table(Name = "StudentStatus")]
    public class StudentStatus
    {
        [PrimaryKey, Identity]
        public int Id { get; set; }

        [Column(Name = "Name")]
        public string Name { get; set; }
    }

        [Table(Name = "Students2Parents")]
    public class Students2Parents
    {
        [PrimaryKey, Identity]
        public int Id { get; set; }

        [Column(Name = "StudentId")]
        public int StudentId { get; set; }

        [Column(Name = "ParentId")]
        public int ParentId { get; set; }

        [Column(Name = "Relationship")]
        public string Relationship { get; set; }
    }
    
    [Table(Name = "TeacherSetting")]
    public class TeacherSetting
    {
        [PrimaryKey]
        public int Id { get; set; }

        [Column(Name = "DefaultLaneId")]
        public int DefaultLaneId { get; set; }

        [Column(Name = "IsGradeVisible")]
        public bool IsGradeVisible { get; set; }

        [Column(Name = "IsCarVisible")]
        public bool IsCarVisible { get; set; }

        [Column(Name = "IsHallwayVisible")]
        public bool IsHallwayVisible { get; set; }
    }

    [Table(Name = "User")]
    public class User
    {
        [PrimaryKey, Identity]
        public int Id { get; set; }

        [Column(Name = "Name")]
        public string Name { get; set; }

        [Column(Name = "Email")]
        public string Email { get; set; }

        [Column(Name = "StatusId")]
        public int StatusId { get; set; }

        [Column(Name = "IsInstructionsChecked")]
        public bool IsInstructionsChecked { get; set; }

        [Column(Name = "IsPasswordSet")]
        public bool IsPasswordSet { get; set; }

        [Column(Name = "PasswordHash")]
        public string PasswordHash { get; set; }

        [Column(Name = "PasswordSalt")]
        public string PasswordSalt { get; set; }

        [Column(Name = "Auth0Id")]
        public string Auth0Id { get; set; }
    }

    [Table(Name = "Users2Roles")]
    public class Users2Roles
    {
        [PrimaryKey, Identity]
        public int Id { get; set; }

        [Column(Name = "UserId")]
        public int UserId { get; set; }

        [Column(Name = "RoleId")]
        public int RoleId { get; set; }
    }

    [Table(Name = "UserStatus")]
    public class UserStatus
    {
        [PrimaryKey, Identity]
        public int Id { get; set; }

        [Column(Name = "Name")]
        public string Name { get; set; }
    }
}