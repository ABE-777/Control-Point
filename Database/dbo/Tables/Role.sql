CREATE TABLE [dbo].[Role] (
    [Id]   INT           IDENTITY (1, 1) NOT NULL,
    [Name] VARCHAR (200) NULL,
    [IsSelectable] BIT NOT NULL DEFAULT 0, 
    CONSTRAINT [PK_Role] PRIMARY KEY CLUSTERED ([Id] ASC)
);

