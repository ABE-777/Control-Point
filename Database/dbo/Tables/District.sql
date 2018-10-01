CREATE TABLE [dbo].[District] (
    [Id]   INT           IDENTITY (1, 1) NOT NULL,
    [Name] VARCHAR (500) NULL,
    [StateId] INT NOT NULL, 
    CONSTRAINT [PK_District] PRIMARY KEY CLUSTERED ([Id] ASC),
	CONSTRAINT [FK_District_State] FOREIGN KEY ([StateId]) REFERENCES [dbo].[State] ([Id])
);

