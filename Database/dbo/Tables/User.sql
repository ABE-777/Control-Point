CREATE TABLE [dbo].[User] (
    [Id]                    INT            IDENTITY (1, 1) NOT NULL,
    [Name]                  VARCHAR (500)  NULL,
    [Email]                 VARCHAR (1000) NULL,
    [StatusId]              INT            NULL,
    [IsInstructionsChecked] BIT            DEFAULT ((0)) NOT NULL,
    [IsPasswordSet]         BIT            DEFAULT ((0)) NOT NULL,
    [PasswordHash]          VARCHAR (1000) NULL,
    [PasswordSalt]          VARCHAR (32) NULL,
    [Auth0Id] VARCHAR(50) NULL, 
    CONSTRAINT [PK_User] PRIMARY KEY CLUSTERED ([Id] ASC),
    CONSTRAINT [FK_User_UserStatus] FOREIGN KEY ([StatusId]) REFERENCES [dbo].[UserStatus] ([Id])
);





