export class StudentParent {
  id: number;
  name: string;
  email: string;

  constructor(id: number = 0, name: string = null, email: string = null) {
    this.id = id;
    this.name = name;
    this.email = email;
  }

}
