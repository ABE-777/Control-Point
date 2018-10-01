import { StudentForParent } from "../student-for-parent.model";

export class DismissalCard {
  id: number;
  status: boolean;
  parentName: string;
  driversLicense: string;
  phoneNumber: string;
  students: StudentForParent[];
  relationship: string;
  parentUserId: number;

  constructor(id: number = 0, parentName: string = null, parentUserId:number=0,
              driversLicense: string = null, phoneNumber: string = null,
              students: StudentForParent[] = [], relationship: string = null) {
    this.id = id;
    this.parentName = parentName;
    this.driversLicense = driversLicense;
    this.phoneNumber = phoneNumber;
    this.students = students;
    this.relationship = relationship;
    this.parentUserId = parentUserId;
  }
}
