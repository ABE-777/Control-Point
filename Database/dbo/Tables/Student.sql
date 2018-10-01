CREATE TABLE [dbo].[Student] (
    [Id]          INT           IDENTITY (1, 1) NOT NULL,
    [ExternalId]  VARCHAR(100)           NOT NULL,
    [Name]        VARCHAR (500) NULL,
    [DateOfBirth] DATE          NULL,
    [Phone]       VARCHAR (50)  NULL,
    [Grade]       VARCHAR (50)  NULL,
    [ClassroomId] INT           NULL,
    [StatusId]    INT           NULL,
    [SchoolId]    INT           NULL,
    [ParentId] INT NULL, 
    CONSTRAINT [PK_Students] PRIMARY KEY CLUSTERED ([Id] ASC),
    CONSTRAINT [FK_Student_Classroom] FOREIGN KEY ([ClassroomId]) REFERENCES [dbo].[Classroom] ([Id]),
    CONSTRAINT [FK_Student_School] FOREIGN KEY ([SchoolId]) REFERENCES [dbo].[School] ([Id]),
    CONSTRAINT [FK_Student_StudentStatus] FOREIGN KEY ([StatusId]) REFERENCES [dbo].[StudentStatus] ([Id]), 
    CONSTRAINT [FK_Student_User] FOREIGN KEY ([ParentId]) REFERENCES [dbo].[User]([Id])
);











