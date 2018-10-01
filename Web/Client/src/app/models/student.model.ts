export class Student {
  id: number;
  externalId: number;
  name: string;
  grade: string;
  classroomName: string;
  parentEmail: string;
  studentStatus: string;
}

export class ChangeCradeAndClassroom {
  grade: string;
  classroomId: number;
  studentsIdList: string[];
}
