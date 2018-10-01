import { Lane } from "./lane.model";
import { AssignedLane } from "./http-models/scanner-init-data.model";

export class StudentInCard {
  studentId: number;
  name: string;
  cardId: number;

  constructor(studentId: number = 0, name: string = null, cardId: number = 0) {
    this.studentId = studentId;
    this.name = name;
    this.cardId = cardId;
  }
}

export class CardWithStudents {
  students: StudentInCard[];
  lane: AssignedLane;
  parentLicense: string;
  parentName: string;
  parentId: number;
  flightNumber: number;
  isEditable: boolean;

  constructor(
    students: StudentInCard[] = [],
    lane: Lane = null,
    parentLicense: string = null,
    parentName: string = null,
    parentId: number = 0,
    flightNumber: number = 0,
    isEditable: boolean = null
  ) {
    this.students = students;
    this.lane = lane;
    this.parentLicense = parentLicense;
    this.parentName = parentName;
    this.parentId = parentId;
    this.flightNumber = flightNumber;
    this.isEditable = isEditable;
  }
}
