CREATE TABLE [dbo].[ErrorLog]
(
	[Id] INT NOT NULL PRIMARY KEY IDENTITY, 
    [EventID] int,  
    [LogLevel] VARCHAR(50), 
    [Message] VARCHAR(MAX), 
    [CreatedTime] DATETIME 
)
