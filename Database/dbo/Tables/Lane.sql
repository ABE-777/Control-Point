CREATE TABLE [dbo].[Lane] (
    [Id]       INT            IDENTITY (1, 1) NOT NULL,
    [Name]     VARCHAR (1000) NULL,
    [Color]    VARCHAR (50)   NULL,
    [SchoolId] INT            NULL,
    [UserId] INT NULL, 
    CONSTRAINT [PK_Lane] PRIMARY KEY CLUSTERED ([Id] ASC),
    CONSTRAINT [FK_Lane_School] FOREIGN KEY ([SchoolId]) REFERENCES [dbo].[School] ([Id])
);





