CREATE TABLE [dbo].[Flight] (
    [Id]       INT  IDENTITY (1, 1) NOT NULL,
    [Number]   INT  NULL,
    [Date]     DATE NULL,
    [StatusId] INT  NOT NULL,
    [SchoolId] INT NOT NULL, 
    CONSTRAINT [PK_Flight] PRIMARY KEY CLUSTERED ([Id] ASC),
    CONSTRAINT [FK_Flight_FlightStatus] FOREIGN KEY ([StatusId]) REFERENCES [dbo].[FlightStatus] ([Id]),	
    CONSTRAINT [FK_Flight_School] FOREIGN KEY ([SchoolId]) REFERENCES [dbo].[School] ([Id])
);







