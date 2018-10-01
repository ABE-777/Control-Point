CREATE TABLE [dbo].[DismissalArchive] (
    [Id]            INT      NOT NULL IDENTITY,
	 [ExternalId]     varchar(200)      NULL,
    [StudentName]     varchar(200)      NULL,
	 [Grade]     varchar(10)      NULL,
	 [ParentName]     varchar(200)      NULL,
    [Flight]  INT      NULL,
	[SchoolId] INT NULL,
	[StudentId] INT NULL,
    [Lane]      VARCHAR(200)      NULL,
    [FlightDate]    DATE     NULL,
    [ClassroomTime] TIME (7) NULL,
    [HallwayTime]   TIME (7) NULL,
    [ScanningTime]  TIME (7) NULL,
    [ArchiveDate]   DATETIME NULL,
    [FlightLaneId] INT NULL, 
    CONSTRAINT [PK_Archive] PRIMARY KEY CLUSTERED ([Id] ASC),
     CONSTRAINT [FK_DismissalArchive_School] FOREIGN KEY ([SchoolId]) REFERENCES [dbo].[School] ([Id])
);