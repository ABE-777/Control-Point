import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs/Observable";
import { StudentParent } from "../models/studentParent.model";


@Injectable()
export class StudentsService {

  constructor(public http: HttpClient) { }

  postJSONHeader = new HttpHeaders().set('Content-Type', 'application/json');

  getStudents(): Observable<any> {
    return this.http.get('/api/student/getstudents');
  }

  getStudentById(studentId: number): Observable<any> {
    return this.http.get(`/api/Student/GetStudentById/${studentId}`);
  }
  
  deleteStudent(studentId: number): Observable<any> {
    return this.http.delete(`/api/student/delete/${studentId}`);
  }

  changeGradeAndClassroom(model): Observable<any> {
    return this.http.post('/api/student/ChangeGradeAndClassroom', model);
  }

  submitEditStudent(studentId, model): Observable<any> {
    return this.http.put(`/api/Student/edit/${studentId}`, model);
  }

  submitNewStudent(model): Observable<any> {
    return this.http.post(`api/Student/create`, model);
  }

  getStudentParents(): Observable<StudentParent[]> {
    return this.http.get<StudentParent[]>('api/Student/GetStudentParentList');
  }
}
