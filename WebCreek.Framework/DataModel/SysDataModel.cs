using LinqToDB;
using LinqToDB.Mapping;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace WebCreek.Framework.DataModel
{
    /// <summary>
    /// Database       : aegis_alpha
    /// Data Source    : localhost
    /// Server Version : 5.7.18-log
    /// </summary>
    /// 
    /// 
    /// /// <summary>
    /// Contains all general project non-specific database information
    /// </summary>
    //============================================================
    //Revision History
    //Date        Author          Description
    //07/20/2017  IvanK               Created
    //============================================================
    public partial class SysDB : LinqToDB.Data.DataConnection
    {
        public ITable<SysCompany> SysCompany { get { return this.GetTable<SysCompany>(); } }
        public ITable<SysDashboard> SysDashboard { get { return this.GetTable<SysDashboard>(); } }
        public ITable<SysDashboardwidget> SysDashboardwidget { get { return this.GetTable<SysDashboardwidget>(); } }
        public ITable<SysErrorlog> SysErrorlog { get { return this.GetTable<SysErrorlog>(); } }
        public ITable<SysFavorites> SysFavorites { get { return this.GetTable<SysFavorites>(); } }
        public ITable<SysImport> SysImport { get { return this.GetTable<SysImport>(); } }
        public ITable<SysImporttype> SysImporttype { get { return this.GetTable<SysImporttype>(); } }
        public ITable<SysLookup> SysLookup { get { return this.GetTable<SysLookup>(); } }
        public ITable<SysMenuitem> SysMenuitem { get { return this.GetTable<SysMenuitem>(); } }
        public ITable<SysRole> SysRole { get { return this.GetTable<SysRole>(); } }
        public ITable<SysRolemenuitem> SysRolemenuitem { get { return this.GetTable<SysRolemenuitem>(); } }
        public ITable<SysStatus> SysStatus { get { return this.GetTable<SysStatus>(); } }
        public ITable<SysUser> SysUser { get { return this.GetTable<SysUser>(); } }
        public ITable<SysUserrole> SysUserrole { get { return this.GetTable<SysUserrole>(); } }
        public ITable<SysWidget> SysWidget { get { return this.GetTable<SysWidget>(); } }



        public SysDB()
            : base("default")
        {
            InitDataContext();
        }

        public SysDB(string configuration)
            : base(configuration)
        {
            InitDataContext();
        }

        partial void InitDataContext();
    }

    [Table("sys_company")]
    public partial class SysCompany
    {
        [PrimaryKey, NotNull] public int CompanyID { get; set; } // int(11)
        [Column, NotNull] public string CompanyName { get; set; } // varchar(50)
        [Column, Nullable] public byte[] LogoImage { get; set; } // blob

        #region Associations

        /// <summary>
        /// sys_company_sys_user_BackReference
        /// </summary>
        [Association(ThisKey = "CompanyID", OtherKey = "CompanyID", CanBeNull = true, Relationship = Relationship.OneToMany, IsBackReference = true)]
        public IEnumerable<SysUser> syscompanysysusers { get; set; }

        #endregion
    }

    [Table("sys_dashboard")]
    public partial class SysDashboard
    {
        [PrimaryKey, NotNull] public int DashboardID { get; set; } // int(11)
        [Column, NotNull] public string DashboardName { get; set; } // varchar(50)

        #region Associations

        /// <summary>
        /// sys_dashboard_sys_dashboardwidget_BackReference
        /// </summary>
        [Association(ThisKey = "DashboardID", OtherKey = "DashboardID", CanBeNull = true, Relationship = Relationship.OneToMany, IsBackReference = true)]
        public IEnumerable<SysDashboardwidget> sysdashboardsysdashboardwidgets { get; set; }

        #endregion
    }

    [Table("sys_dashboardwidget")]
    public partial class SysDashboardwidget
    {
        [PrimaryKey(1), NotNull] public int DashboardID { get; set; } // int(11)
        [PrimaryKey(2), NotNull] public int WidgetID { get; set; } // int(11)
        [Column, NotNull] public int Seq { get; set; } // int(11)

        #region Associations

        /// <summary>
        /// sys_dashboard_sys_dashboardwidget
        /// </summary>
        [Association(ThisKey = "DashboardID", OtherKey = "DashboardID", CanBeNull = false, Relationship = Relationship.ManyToOne, KeyName = "sys_dashboard_sys_dashboardwidget", BackReferenceName = "sysdashboardsysdashboardwidgets")]
        public SysDashboard sysdashboardsysdashboardwidget { get; set; }

        /// <summary>
        /// sys_widget_sys_dashboardwidget
        /// </summary>
        [Association(ThisKey = "WidgetID", OtherKey = "WidgetID", CanBeNull = false, Relationship = Relationship.ManyToOne, KeyName = "sys_widget_sys_dashboardwidget", BackReferenceName = "syswidgetsysdashboardwidgets")]
        public SysWidget syswidgetsysdashboardwidget { get; set; }

        #endregion
    }

    [Table("sys_errorlog")]
    public partial class SysErrorlog
    {
        [PrimaryKey, NotNull] public int ErrorLogID { get; set; } // int(11)
        [Column, Nullable] public string UserName { get; set; } // varchar(50)
        [Column, NotNull] public DateTime LogDate { get; set; } // datetime
        [Column, NotNull] public string ErrorMessage { get; set; } // text
        [Column, Nullable] public string EnvironmentSettings { get; set; } // varchar(200)
    }

    [Table("sys_favorites")]
    public partial class SysFavorites
    {
        [PrimaryKey(1), NotNull] public int UserID { get; set; } // int(11)
        [PrimaryKey(2), NotNull] public int WidgetID { get; set; } // int(11)
        [Column, NotNull] public DateTime CreatedOn { get; set; } // datetime
        [Column, NotNull] public DateTime UpdatedOn { get; set; } // datetime
        [Column, NotNull] public string CreatedBy { get; set; } // varchar(50)
        [Column, NotNull] public string UpdatedBy { get; set; } // varchar(50)
        [Column, NotNull] public int Position { get; set; } // varchar(50)

        #region Associations

        /// <summary>
        /// sys_user_sys_favorites
        /// </summary>
        [Association(ThisKey = "UserID", OtherKey = "UserID", CanBeNull = false, Relationship = Relationship.ManyToOne, KeyName = "sys_user_sys_favorites", BackReferenceName = "sysusersysfavorites")]
        public SysUser sysusersysfavorite { get; set; }

        /// <summary>
        /// sys_widget_sys_favorites
        /// </summary>
        [Association(ThisKey = "WidgetID", OtherKey = "WidgetID", CanBeNull = false, Relationship = Relationship.ManyToOne, KeyName = "sys_widget_sys_favorites", BackReferenceName = "syswidgetsysfavorites")]
        public SysWidget syswidgetsysfavorite { get; set; }

        #endregion
    }

    [Table("sys_import")]
    public partial class SysImport
    {
        [PrimaryKey, Identity] public int ImportID { get; set; } // int(11)
        [Column, NotNull] public int ImportTypeID { get; set; } // int(11)
        [Column, Nullable] public string FileName { get; set; } // varchar(100)
        [Column, NotNull] public byte[] FileBinary { get; set; } // blob
        [Column, NotNull] public bool PctComplete { get; set; } // tinyint(1)
        [Column, NotNull] public int RowsProcessed { get; set; } // int(11)
        [Column, Nullable] public ulong? SuccessFlag { get; set; } // bit(1)
        [Column, Nullable] public string ErrorMessage { get; set; } // varchar(250)
        [Column, Nullable] public int? ErrorLogID { get; set; } // int(11)
        [Column, NotNull] public DateTime CreatedOn { get; set; } // datetime
        [Column, NotNull] public DateTime UpdatedOn { get; set; } // datetime
        [Column, NotNull] public string CreatedBy { get; set; } // varchar(50)
        [Column, NotNull] public string UpdatedBy { get; set; } // varchar(50)

        #region Associations

        /// <summary>
        /// sys_import_sys_importerror_BackReference
        /// </summary>
        [Association(ThisKey = "ImportID", OtherKey = "ImportID", CanBeNull = true, Relationship = Relationship.OneToMany, IsBackReference = true)]
        public IEnumerable<SysImporterror> sysimportsysimporterrors { get; set; }

        /// <summary>
        /// sys_importtype_sys_import
        /// </summary>
        [Association(ThisKey = "ImportTypeID", OtherKey = "ImportTypeID", CanBeNull = false, Relationship = Relationship.ManyToOne, KeyName = "sys_importtype_sys_import", BackReferenceName = "sysimporttypesysimports")]
        public SysImporttype sysimporttypesysimport { get; set; }

        #endregion
    }

    [Table("sys_importerror")]
    public partial class SysImporterror
    {
        [PrimaryKey, Identity] public int ImportErrorID { get; set; } // int(11)
        [Column, NotNull] public int ImportID { get; set; } // int(11)
        [Column, NotNull] public int RowNo { get; set; } // int(11)
        [Column, NotNull] public string ErrorMessage { get; set; } // varchar(250)

        #region Associations

        /// <summary>
        /// sys_import_sys_importerror
        /// </summary>
        [Association(ThisKey = "ImportID", OtherKey = "ImportID", CanBeNull = false, Relationship = Relationship.ManyToOne, KeyName = "sys_import_sys_importerror", BackReferenceName = "sysimportsysimporterrors")]
        public SysImport sysimportsysimporterror { get; set; }

        #endregion
    }

    [Table("sys_importtype")]
    public partial class SysImporttype
    {
        [PrimaryKey, NotNull] public int ImportTypeID { get; set; } // int(11)
        [Column, NotNull] public string Description { get; set; } // varchar(100)
        [Column, NotNull] public string ProcessName { get; set; } // varchar(50)
        [Column, Nullable] public string AllowedExtensions { get; set; } // varchar(50)
        [Column, NotNull] public ulong AllowMultipleImports { get; set; } // bit(1)

        #region Associations

        /// <summary>
        /// sys_importtype_sys_import_BackReference
        /// </summary>
        [Association(ThisKey = "ImportTypeID", OtherKey = "ImportTypeID", CanBeNull = true, Relationship = Relationship.OneToMany, IsBackReference = true)]
        public IEnumerable<SysImport> sysimporttypesysimports { get; set; }

        #endregion
    }

    [Table("sys_lookup")]
    public partial class SysLookup
    {
        [PrimaryKey, NotNull] public int LookupID { get; set; } // int(11)
        [Column, NotNull] public string LookupType { get; set; } // varchar(10)
        [Column, Nullable] public string LookupCode { get; set; } // varchar(10)
        [Column, NotNull] public string LookupValue { get; set; } // varchar(50)
    }

    [Table("sys_menuitem")]
    public partial class SysMenuitem
    {
        [PrimaryKey, NotNull] public int MenuItemID { get; set; } // int(11)
        [Column, NotNull] public string MenuTitle { get; set; } // varchar(50)
        [Column, NotNull] public string MenuDescription { get; set; } // varchar(100)
        [Column, NotNull] public string ComponentName { get; set; } // varchar(40)
        [Column, NotNull] public char Availability { get; set; } // char(1)

        #region Associations

        /// <summary>
        /// sys_menuitem_sys_rolemenuitem_BackReference
        /// </summary>
        [Association(ThisKey = "MenuItemID", OtherKey = "MenuItemID", CanBeNull = true, Relationship = Relationship.OneToMany, IsBackReference = true)]
        public IEnumerable<SysRolemenuitem> sysmenuitemsysrolemenuitems { get; set; }

        #endregion
    }

    [Table("sys_role")]
    public partial class SysRole
    {
        [PrimaryKey, NotNull] public int RoleID { get; set; } // int(11)
        [Column, NotNull] public string RoleName { get; set; } // varchar(50)

        #region Associations

        /// <summary>
        /// sys_role_sys_rolemenuitem_BackReference
        /// </summary>
        [Association(ThisKey = "RoleID", OtherKey = "RoleID", CanBeNull = true, Relationship = Relationship.OneToMany, IsBackReference = true)]
        public IEnumerable<SysRolemenuitem> sysrolesysrolemenuitems { get; set; }

        /// <summary>
        /// sys_role_sys_userrole_BackReference
        /// </summary>
        [Association(ThisKey = "RoleID", OtherKey = "RoleID", CanBeNull = true, Relationship = Relationship.OneToMany, IsBackReference = true)]
        public IEnumerable<SysUserrole> sysrolesysuserroles { get; set; }

        #endregion
    }

    [Table("sys_rolemenuitem")]
    public partial class SysRolemenuitem
    {
        [PrimaryKey(1), NotNull] public int RoleID { get; set; } // int(11)
        [PrimaryKey(2), NotNull] public int MenuItemID { get; set; } // int(11)

        #region Associations

        /// <summary>
        /// sys_menuitem_sys_rolemenuitem
        /// </summary>
        [Association(ThisKey = "MenuItemID", OtherKey = "MenuItemID", CanBeNull = false, Relationship = Relationship.ManyToOne, KeyName = "sys_menuitem_sys_rolemenuitem", BackReferenceName = "sysmenuitemsysrolemenuitems")]
        public SysMenuitem sysmenuitemsysrolemenuitem { get; set; }

        /// <summary>
        /// sys_role_sys_rolemenuitem
        /// </summary>
        [Association(ThisKey = "RoleID", OtherKey = "RoleID", CanBeNull = false, Relationship = Relationship.ManyToOne, KeyName = "sys_role_sys_rolemenuitem", BackReferenceName = "sysrolesysrolemenuitems")]
        public SysRole sysrolesysrolemenuitem { get; set; }

        #endregion
    }

    [Table("sys_status")]
    public partial class SysStatus
    {
        [PrimaryKey, NotNull] public int StatusID { get; set; } // int(11)
        [Column, NotNull] public string Description { get; set; } // varchar(40)

        #region Associations

        /// <summary>
        /// sys_status_sys_user_BackReference
        /// </summary>
        [Association(ThisKey = "StatusID", OtherKey = "StatusID", CanBeNull = true, Relationship = Relationship.OneToMany, IsBackReference = true)]
        public IEnumerable<SysUser> sysstatussysusers { get; set; }

        #endregion
    }

    [Table("sys_user")]
    public partial class SysUser
    {
        [PrimaryKey, Identity] public int UserID { get; set; } // int(11)
        [Column, NotNull] public string UserName { get; set; } // varchar(40)
        [Column, NotNull] public int StatusID { get; set; } // int(11)
        [Column, NotNull] public string LastName { get; set; } // varchar(50)
        [Column, NotNull] public string FirstName { get; set; } // varchar(50)
        [Column, NotNull] public string Email { get; set; } // varchar(100)
        [Column, NotNull] public int CompanyID { get; set; } // int(11)
        [Column, Nullable] public string Company { get; set; } // varchar(20)
        [Column, Nullable] public byte[] AvatarImage { get; set; } // blob
        [Column, NotNull] public DateTime CreatedOn { get; set; } // datetime
        [Column, NotNull] public DateTime UpdatedOn { get; set; } // datetime
        [Column, NotNull] public string CreatedBy { get; set; } // varchar(50)
        [Column, NotNull] public string UpdatedBy { get; set; } // varchar(50)

        #region Associations

        /// <summary>
        /// sys_company_sys_user
        /// </summary>
        [Association(ThisKey = "CompanyID", OtherKey = "CompanyID", CanBeNull = false, Relationship = Relationship.ManyToOne, KeyName = "sys_company_sys_user", BackReferenceName = "syscompanysysusers")]
        public SysCompany sys_company_sys_user { get; set; }

        /// <summary>
        /// sys_status_sys_user
        /// </summary>
        [Association(ThisKey = "StatusID", OtherKey = "StatusID", CanBeNull = false, Relationship = Relationship.ManyToOne, KeyName = "sys_status_sys_user", BackReferenceName = "sysstatussysusers")]
        public SysStatus sysstatussysuser { get; set; }

        /// <summary>
        /// sys_user_sys_favorites_BackReference
        /// </summary>
        [Association(ThisKey = "UserID", OtherKey = "UserID", CanBeNull = true, Relationship = Relationship.OneToMany, IsBackReference = true)]
        public IEnumerable<SysFavorites> sysusersysfavorites { get; set; }

        /// <summary>
        /// sys_user_sys_userrole_BackReference
        /// </summary>
        [Association(ThisKey = "UserID", OtherKey = "UserID", CanBeNull = true, Relationship = Relationship.OneToMany, IsBackReference = true)]
        public IEnumerable<SysUserrole> sysusersysuserroles { get; set; }

        /// <summary>
        /// sys_user_userclient_BackReference
        /// </summary>
        /// These lines are commented due to the separation of the data models
        //[Association(ThisKey = "UserID", OtherKey = "UserID", CanBeNull = true, Relationship = Relationship.OneToMany, IsBackReference = true)]
       // public IEnumerable<Userclient> sysuseruserclients { get; set; }

        #endregion
    }

    [Table("sys_userrole")]
    public partial class SysUserrole
    {
        [PrimaryKey(1), NotNull] public int UserID { get; set; } // int(11)
        [PrimaryKey(2), NotNull] public int RoleID { get; set; } // int(11)
        [Column, NotNull] public DateTime CreatedOn { get; set; } // datetime
        [Column, NotNull] public DateTime UpdatedOn { get; set; } // datetime
        [Column, NotNull] public string CreatedBy { get; set; } // varchar(50)
        [Column, NotNull] public string UpdatedBy { get; set; } // varchar(50)

        #region Associations

        /// <summary>
        /// sys_role_sys_userrole
        /// </summary>
        [Association(ThisKey = "RoleID", OtherKey = "RoleID", CanBeNull = false, Relationship = Relationship.ManyToOne, KeyName = "sys_role_sys_userrole", BackReferenceName = "sysrolesysuserroles")]
        public SysRole sysrolesysuserrole { get; set; }

        /// <summary>
        /// sys_user_sys_userrole
        /// </summary>
        [Association(ThisKey = "UserID", OtherKey = "UserID", CanBeNull = false, Relationship = Relationship.ManyToOne, KeyName = "sys_user_sys_userrole", BackReferenceName = "sysusersysuserroles")]
        public SysUser sysusersysuserrole { get; set; }

        #endregion
    }

    [Table("sys_widget")]
    public partial class SysWidget
    {
        [PrimaryKey, NotNull] public int WidgetID { get; set; } // int(11)
        [Column, Nullable] public string Description { get; set; } // varchar(100)
        [Column, NotNull] public string ComponentName { get; set; } // varchar(50)
        [Column, Nullable] public string QueryName { get; set; } // varchar(100)

        #region Associations

        /// <summary>
        /// sys_widget_sys_dashboardwidget_BackReference
        /// </summary>
        [Association(ThisKey = "WidgetID", OtherKey = "WidgetID", CanBeNull = true, Relationship = Relationship.OneToMany, IsBackReference = true)]
        public IEnumerable<SysDashboardwidget> syswidgetsysdashboardwidgets { get; set; }

        /// <summary>
        /// sys_widget_sys_favorites_BackReference
        /// </summary>
        [Association(ThisKey = "WidgetID", OtherKey = "WidgetID", CanBeNull = true, Relationship = Relationship.OneToMany, IsBackReference = true)]
        public IEnumerable<SysFavorites> syswidgetsysfavorites { get; set; }

        #endregion
    }


    public static partial class TableExtensions
    {

        public static SysCompany Find(this ITable<SysCompany> table, int CompanyID)
        {
            return table.FirstOrDefault(t =>
                t.CompanyID == CompanyID);
        }

        public static SysDashboard Find(this ITable<SysDashboard> table, int DashboardID)
        {
            return table.FirstOrDefault(t =>
                t.DashboardID == DashboardID);
        }

        public static SysDashboardwidget Find(this ITable<SysDashboardwidget> table, int DashboardID, int WidgetID)
        {
            return table.FirstOrDefault(t =>
                t.DashboardID == DashboardID &&
                t.WidgetID == WidgetID);
        }

        public static SysErrorlog Find(this ITable<SysErrorlog> table, int ErrorLogID)
        {
            return table.FirstOrDefault(t =>
                t.ErrorLogID == ErrorLogID);
        }

        public static SysFavorites Find(this ITable<SysFavorites> table, int UserID, int WidgetID)
        {
            return table.FirstOrDefault(t =>
                t.UserID == UserID &&
                t.WidgetID == WidgetID);
        }

        public static SysImport Find(this ITable<SysImport> table, int ImportID)
        {
            return table.FirstOrDefault(t =>
                t.ImportID == ImportID);
        }

        public static SysImporttype Find(this ITable<SysImporttype> table, int ImportTypeID)
        {
            return table.FirstOrDefault(t =>
                t.ImportTypeID == ImportTypeID);
        }

        public static SysLookup Find(this ITable<SysLookup> table, int LookupID)
        {
            return table.FirstOrDefault(t =>
                t.LookupID == LookupID);
        }

        public static SysMenuitem Find(this ITable<SysMenuitem> table, int MenuItemID)
        {
            return table.FirstOrDefault(t =>
                t.MenuItemID == MenuItemID);
        }

        public static SysRole Find(this ITable<SysRole> table, int RoleID)
        {
            return table.FirstOrDefault(t =>
                t.RoleID == RoleID);
        }

        public static SysRolemenuitem Find(this ITable<SysRolemenuitem> table, int RoleID, int MenuItemID)
        {
            return table.FirstOrDefault(t =>
                t.RoleID == RoleID &&
                t.MenuItemID == MenuItemID);
        }

        public static SysStatus Find(this ITable<SysStatus> table, int StatusID)
        {
            return table.FirstOrDefault(t =>
                t.StatusID == StatusID);
        }

        public static SysUser Find(this ITable<SysUser> table, int UserID)
        {
            return table.FirstOrDefault(t =>
                t.UserID == UserID);
        }

        public static SysUserrole Find(this ITable<SysUserrole> table, int UserID, int RoleID)
        {
            return table.FirstOrDefault(t =>
                t.UserID == UserID &&
                t.RoleID == RoleID);
        }

        public static SysWidget Find(this ITable<SysWidget> table, int WidgetID)
        {
            return table.FirstOrDefault(t =>
                t.WidgetID == WidgetID);
        }
    }
}