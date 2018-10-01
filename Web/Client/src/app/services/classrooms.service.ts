import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs/Observable";
import { Teacher } from '../models/teacher.model';

@Injectable()
export class ClassroomsService {

  constructor(public http: HttpClient) { }

  postJSONHeader = new HttpHeaders().set('Content-Type', 'application/json');

  getClassroomsList(): Observable<any> {
    return this.http.get(`/api/Classroom/GetClassrooms`);
  }

  getTeachersList(): Observable<any> {
    return this.http.get(`/api/Classroom/GetTeachers`);
  }

  updateClassrooms(teachers: Teacher[]) {
    return this.http.put(`/api/Classroom/UpdateClassrooms/`, teachers);
  }
}
