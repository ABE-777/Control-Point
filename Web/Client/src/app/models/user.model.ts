export class User {
  id: number;
  name: string;
  email: string;
  statusId: number;
  statusName: string;
  roleId: number;
  roleName: string;
  classroomName: string;
  isMainAdmin: boolean;

  constructor(id: number = 0, name: string = null, email: string = null,
              statusId: number = 0, statusName: string = null,
              roleId: number = 0, roleName: string = null,
              classroomName: string = null) {
    this.id = id;
    this.name = name;
    this.email = email;
    this.statusId = statusId;
    this.statusName = statusName;
    this.roleId = roleId;
    this.roleName = roleName;
    this.classroomName = classroomName;
  }
}
