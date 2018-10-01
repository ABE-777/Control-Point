CREATE TABLE [dbo].[Parent] (
    [Id]            INT           NOT NULL IDENTITY,
    [Name]          VARCHAR (500) NULL,
    [DriverLicense] VARCHAR (50)  NULL,
    [PhoneNumber]   VARCHAR (50)  NULL,
    [BarcodeImage] IMAGE NULL,
	[CardStatusId] INT           NULL,
    CONSTRAINT [PK_Parent] PRIMARY KEY CLUSTERED ([Id] ASC),
    CONSTRAINT [FK_Parent_CardStatus] FOREIGN KEY ([CardStatusId]) REFERENCES [dbo].[CardStatus] ([Id]) 
);



