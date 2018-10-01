import { User } from "../user.model";
import { State } from "../state.model";
import { Disctrict } from "../district.model";
import { SchoolStatus } from "../school-status.model";

export class SchoolEditionData {
    schoolId: number;
    schoolName: string;
    districtId: number;
    stateId: number;

    mainAdminId: number;
    previousAdminId: number;
    statusId: number;
    schoolAdmins: User[];

    states: State[];
    statuses: SchoolStatus[];
    districts: Disctrict[];
}
