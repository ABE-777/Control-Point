import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs/Observable";
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import { SchoolEdit } from '../models/school-edit.model';
import { SchoolEditionData } from '../models/http-models/school-edition-data.model';

@Injectable()
export class SchoolAccountsService {

  constructor(public http: HttpClient) { }

  postJSONHeader = new HttpHeaders().set('Content-Type', 'application/json');

  getSchools(): Observable<any> {
    return this.http.get('/api/School/GetList');
  }

  getSchoolName(): Observable<string> {
    return this.http.get<string>(`/api/School/GetSchoolName/${localStorage.getItem("userId")}`);
  }

  getSchoolById(id: number): Observable<SchoolEditionData> {
    return this.http.get<SchoolEditionData>(`/api/School/GetEditionData?id=${ id }`);
  }

  getSchoolCreationData(): Observable<any> {
    return this.http.get('/api/School/GetCreationData');
  }

  submitNewSchool(school: SchoolEditionData): Observable<any> {
    return this.http.post('/api/School/Create', school );
  }

  submitEditSchool(schoolId: number, school: SchoolEditionData): Observable<any> {
    return this.http.put(`/api/School/edit/${ schoolId }`, school);
  }

  setStatus(schoolId: number, statusId: number): Observable<any> {
    return this.http.put(`/api/School/changestatus/${ schoolId }`, { "StatusId": statusId });
  }

  deleteSchool(id: number): Observable<any> {
    return this.http.delete(`/api/School/delete/${ id }`);
  }  

}
