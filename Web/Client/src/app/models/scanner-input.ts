export class ScannerInput {
  studentId: number;
  parentId: number;

  constructor(studentId?: number, parentId?: number) {
    this.studentId = studentId;
    this.parentId = parentId;
  }
}
