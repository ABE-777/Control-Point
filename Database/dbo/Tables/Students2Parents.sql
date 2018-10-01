CREATE TABLE [dbo].[Students2Parents] (
    [Id]             INT NOT NULL IDENTITY,
    [StudentId]      INT NULL,
    [ParentId]       INT NULL,
    [Relationship] VARCHAR(255) NULL,
    PRIMARY KEY CLUSTERED ([Id] ASC),
    CONSTRAINT [FK_Students2Parents_Parent] FOREIGN KEY ([ParentId]) REFERENCES [dbo].[Parent] ([Id]),
   CONSTRAINT [FK_Students2Parents_Student] FOREIGN KEY ([StudentId]) REFERENCES [dbo].[Student] ([Id])
);




