export class Classroom {
  id: number;
  name: string;
  teacherId: number;
  schoolId: number;

  constructor(id: number = 0, name: string = null, teacherId: number = 0,
              schoolId: number = 0) {
    this.id = id;
    this.name = name;
    this.teacherId = teacherId;
    this.schoolId = schoolId;
  }
}
