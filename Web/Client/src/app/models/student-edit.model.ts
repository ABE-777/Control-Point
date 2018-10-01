import { Classroom } from "../models/classroom.model";
import { StudentParent } from "../models/studentParent.model";
export class StudentEdit {
  id: number;
  externalId: number;
  name: string;
  grade: string;
  classroom: Classroom;
  studentParent: StudentParent;
}
