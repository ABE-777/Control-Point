import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Injectable()
export class SchoolNameService {

  private schoolNameSource = new BehaviorSubject<string>("");
  currentSchoolName = this.schoolNameSource.asObservable();

  constructor() { }

  changeMessage(schoolName: string) {
    this.schoolNameSource.next(schoolName);
  }

}
