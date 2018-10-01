CREATE TABLE [dbo].[Classroom]
(
	[Id] INT NOT NULL PRIMARY KEY IDENTITY, 
    [Name] VARCHAR(255) NULL, 
    [TeacherId] INT NULL,
    [SchoolId] INT NULL, 
	CONSTRAINT [FK_Classroom_School] FOREIGN KEY ([SchoolId]) REFERENCES [dbo].[School]([Id]),
    CONSTRAINT [FK_Classroom_User] FOREIGN KEY ([TeacherId]) REFERENCES [dbo].[User]([Id])
)
