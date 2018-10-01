CREATE TABLE [dbo].[Lanes2Fights] (
    [Id]        INT IDENTITY (1, 1) NOT NULL,
    [FlightId]  INT NULL,
    [LaneId]    INT NULL,
    [CreatedBy] INT NULL,
    [CreatedOn] DATETIME NULL,
    [StatusId] INT NULL, 
    PRIMARY KEY CLUSTERED ([Id] ASC),
    CONSTRAINT [FK_Lanes2Fights_Flight] FOREIGN KEY ([FlightId]) REFERENCES [dbo].[Flight] ([Id]) ON DELETE CASCADE,
    CONSTRAINT [FK_Lanes2Fights_Lane] FOREIGN KEY ([LaneId]) REFERENCES [dbo].[Lane] ([Id]) ON DELETE CASCADE,
	CONSTRAINT [FK_Lane2Flighs_LaneStatus] FOREIGN KEY ([StatusId]) REFERENCES [dbo].[LaneStatus] ([Id])
);


