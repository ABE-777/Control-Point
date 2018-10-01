CREATE TABLE [dbo].[Impersonation]
(
	[Id] INT NOT NULL PRIMARY KEY IDENTITY, 
    [ImpersonatorUserId] INT NOT NULL, 
    [ImpersonatedUserId] INT NOT NULL, 
    [ValidFrom] DATETIME NOT NULL, 
    [ValidTo] DATETIME NOT NULL, 
    [CreatedOn] DATETIME NULL, 
    [CreatedBy] VARCHAR(50) NULL, 
    [UpdatedOn] DATETIME NULL, 
    [UpdatedBy] VARCHAR(50) NULL,

	 CONSTRAINT [FK_Impersonator_User] FOREIGN KEY ([ImpersonatorUserId]) REFERENCES [dbo].[User] ([Id]),
	 	 CONSTRAINT [FK_Impersonated_User] FOREIGN KEY ([ImpersonatedUserId]) REFERENCES [dbo].[User] ([Id]),
)
