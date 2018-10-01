CREATE TABLE [dbo].[Dismissal] (
    [Id]                   INT      IDENTITY (1, 1) NOT NULL,
    [FlightLaneId]         INT      NOT NULL,
    [StudentId]            INT      NOT NULL,
    [CarNumber]            INT      NULL,
    [ScanTime]             TIME (7) NULL,
    [ClassroomReleaseTime] TIME (7) NULL,
    [HallwayReleaseTime]   TIME (7) NULL,
    [ParentId] INT NOT NULL, 
    [UserId] INT NULL, 
    PRIMARY KEY CLUSTERED ([Id] ASC),
    CONSTRAINT [FK_Dismissal_Lanes2Fights] FOREIGN KEY ([FlightLaneId]) REFERENCES [dbo].[Lanes2Fights] ([Id]),
    CONSTRAINT [FK_Dismissal_Student] FOREIGN KEY ([StudentId]) REFERENCES [dbo].[Student] ([Id]),
	CONSTRAINT [FK_Dismissal_Parent] FOREIGN KEY ([ParentId]) REFERENCES [dbo].[Parent] ([Id])
);


