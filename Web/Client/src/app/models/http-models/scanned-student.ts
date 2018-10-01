import { Lane } from "../lane.model";

export class ScannedStudent {
  flightNumber: number;
  cardId: number;
  studentId: number;
  name: string;
  lane: Lane;
  parentLicense: string;
  parentName: string;
  parentId: number;
  teacherId: number;
}
