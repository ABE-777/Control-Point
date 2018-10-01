import { User } from "./user.model";

export class SchoolEdit {
  id: number;
  schoolName: string;
  districtId: number;
  stateId: number;
  schoolAdmins: User[];
  mainAdminId: number;
  previousAdminId: number;
  statusId: number;
}
