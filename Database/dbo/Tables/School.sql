CREATE TABLE [dbo].[School] (
    [Id]                 INT            IDENTITY (1, 1) NOT NULL,
    [Name]               VARCHAR (1000) NULL,
    [DistrictId]         INT            NULL,
    [StatusId]           INT            NOT NULL,
    [LanesPerFlight]     INT            NULL,
    [CarsPerLaneCount]   INT            NULL,
    [LaneLogisticTypeId] INT            NULL,
    [CardPrintingTypeId] INT            NULL,
    [ArchiveTimeTypeId]  INT            NULL,
    [IsPrintingAtHome] BIT NULL DEFAULT 0, 
    [PrintingInstructions] VARCHAR(MAX) NULL, 
    CONSTRAINT [PK_School] PRIMARY KEY CLUSTERED ([Id] ASC),
    CONSTRAINT [FK_School_ArchiveTimeType] FOREIGN KEY ([ArchiveTimeTypeId]) REFERENCES [dbo].[ArchiveTimeType] ([Id]),
    CONSTRAINT [FK_School_CardPrintingType] FOREIGN KEY ([CardPrintingTypeId]) REFERENCES [dbo].[CardPrintingType] ([Id]),
    CONSTRAINT [FK_School_District] FOREIGN KEY ([DistrictId]) REFERENCES [dbo].[District] ([Id]),
    CONSTRAINT [FK_School_LaneLogisticType] FOREIGN KEY ([LaneLogisticTypeId]) REFERENCES [dbo].[LaneLogisticType] ([Id]),
    CONSTRAINT [FK_School_SchoolStatus] FOREIGN KEY ([StatusId]) REFERENCES [dbo].[SchoolStatus] ([Id])
);












