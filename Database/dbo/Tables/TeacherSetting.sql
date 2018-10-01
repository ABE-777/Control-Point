CREATE TABLE [dbo].[TeacherSetting] (
    [Id]               INT NOT NULL,
    [DefaultLaneId]    INT NULL,
    [IsGradeVisible]   BIT NULL,
    [IsCarVisible]     BIT NULL,
    [IsHallwayVisible] BIT NULL,
    CONSTRAINT [PK_TeacherSettings] PRIMARY KEY CLUSTERED ([Id] ASC),
    CONSTRAINT [FK_TeacherSetting_Lane] FOREIGN KEY ([DefaultLaneId]) REFERENCES [dbo].[Lane] ([Id]),
    CONSTRAINT [FK_TeacherSetting_User] FOREIGN KEY ([Id]) REFERENCES [dbo].[User] ([Id])
);




