CREATE TABLE [dbo].[Users2Roles] (
    [Id]     INT IDENTITY (1, 1) NOT NULL,
    [RoleId] INT NOT NULL,
    [UserId] INT NOT NULL,
    CONSTRAINT [PK_Users2Roles] PRIMARY KEY CLUSTERED ([Id] ASC),
    CONSTRAINT [FK_Users2Roles_Role] FOREIGN KEY ([RoleId]) REFERENCES [dbo].[Role] ([Id]),
    CONSTRAINT [FK_Users2Roles_User] FOREIGN KEY ([UserId]) REFERENCES [dbo].[User] ([Id])
);

