CREATE TABLE [dbo].[SchoolPersonal] (
    [Id]       INT NOT NULL,
    [SchoolId] INT NULL,
    [IsMainAdmin] BIT NULL DEFAULT null, 
    CONSTRAINT [PK_SchoolPersonal] PRIMARY KEY CLUSTERED ([Id] ASC),
    CONSTRAINT [FK_SchoolPersonal_School] FOREIGN KEY ([SchoolId]) REFERENCES [dbo].[School] ([Id]),
    CONSTRAINT [FK_SchoolPersonal_User] FOREIGN KEY ([Id]) REFERENCES [dbo].[User] ([Id])
);





