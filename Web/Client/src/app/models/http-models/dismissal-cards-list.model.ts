export class StudentsToCards {
  id: number;
  name: string;
  grade: string;
  instructor: string;
  schoolName: string;
  externalId:string;
}

export class DismissalCardForList {
  id: number;
  parentId: number;
  parentName: string;
  driverLicense: string;
  phoneNumber: string;
  relationship: string;
  students: StudentsToCards[];
  isPrinted: boolean;
  status: string;
  constructor(id: number, parentId: number, parentName: string, driverLicense: string, phoneNumber: string,
              relationship: string, students: StudentsToCards[], isPrinted: boolean, status: string) {
    this.id = id;
    this.parentId = parentId;
    this.parentName = parentName;
    this.driverLicense = driverLicense;
    this.phoneNumber = phoneNumber;
    this.relationship = relationship;
    this.students = students;
    this.isPrinted = isPrinted;
    this.status = status;
  }
}

export class CardStatuses {
  id: number;
  name: string;
}

export class DismissalCardsList {
  cards: DismissalCardForList[];
  //1-cards, 2-paper
  printingTypeId: number;
  totalPageCount: number;
  isHasStudents: boolean;
}
