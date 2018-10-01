export class UserConfiguration {
  userName: string;
  email: string;
  password: string;
  newPassword: string;
  newPasswordConfirmation: string;

  constructor(name: string = "", email: string = "") {
    this.userName = name;
    this.email = email;
  }
}
