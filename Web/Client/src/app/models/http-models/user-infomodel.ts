export class UserInfo {
    userId: number;
    username: string;
    email: string;
    role: string;
  schoolName: string;

  constructor(userId: number = 0, username: string = "", email: string = "", role: string = "", schoolName: string = "") {
    this.userId = userId;
    this.username = username;
    this.email = email;
    this.role = role;
    this.schoolName = schoolName;
  }
}
