import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Role } from "../models/role.model";
import { Observable } from "rxjs/Observable";
import { User } from "../models/user.model";
import { BehaviorSubject } from "rxjs/BehaviorSubject";
import { UserConfiguration } from '../models/user-configuration.model';
import { Classroom } from '../models/classroom.model';
import { EditUser } from '../models/EditUser';
import { RequestService } from './request.service';
import { UserInfo } from '../models/http-models/user-infomodel';

@Injectable()
export class UserManagementService {

  private ready: BehaviorSubject<boolean>;

  roles: Role[];

  constructor(public http: HttpClient, private requestService: RequestService) {
    this.ready = new BehaviorSubject(false);
  }

  initData() {
    this.getRoles().subscribe(roles => { this.roles = roles; this.ready.next(true) });
  }

  getRoleNameById(id: number): string {
    return this.roles.find(role => role.id == id).name;
  }

  getReadyStatus(): BehaviorSubject<boolean> {
    return this.ready;
  }

  postJSONHeader = new HttpHeaders().set('Content-Type', 'application/json');

  private getRoles(): Observable<Role[]> {
    return this.http.get<Role[]>('/api/UserManagement/GetRoles');
  }

  getUsers(): Observable<User[]> {
    return this.http.get<User[]>('/api/UserManagement/GetUsers');
  }

  getUser(id: number): any {
    return this.http.get(`/api/UserManagement/GetUser/${id}`);
  }

  getUnassignedClassrooms(): Observable<Classroom[]> {
    return this.http.get<Classroom[]>('/api/Classroom/GetUnassignedClassRooms');
  }

  submitNewUser(user: User) {
    return this.http.post('/api/UserManagement/NewUser', user )
  }

  submitEditUser(user: EditUser) {
    return this.http.post('/api/UserManagement/EditUser', user);
  }

  isUserParent(email: string, currentEmail?: string): Observable<string> {
    let isUserParent: Observable<string> = new Observable(observer => {
      if (email === currentEmail) {
         // if new user email equal old user email
        observer.next("false");
      } else {
        this.http.get(`/api/UserManagement/IsUserParent/${email}`).subscribe(res => {
          observer.next( res ? res.toString() : "Parent" );         
         observer.complete();
        })
      }
    });

    return isUserParent;
  }

  userEmailExist(email: string, currentEmail?: string): Observable<boolean> {
    let isUserEmailExist: Observable<boolean> = new Observable(observer => {
      if (email === currentEmail) {
        // if new user email equal old user email
        observer.next(false);
      } else {
        this.http.get(`/api/UserManagement/IsUserExist?userEmail=${ email }`).subscribe(res => {
          if (res === 'Exist') {
            // email invalid
            observer.next(true);
          } else {
            // email valid
            observer.next(false);
          }
          observer.complete();
        })
      }
    });

    return isUserEmailExist;
  }

  getUserInfo(): Observable<UserInfo> {
    return this.http.get<UserInfo>(`/api/UserManagement/GetUserInfo`);
  }

  getUserConfiguration(): Observable<any> {
    return this.http.get('api/UserManagement/GetUserConfiguration');
  }

  submitUserConfiguration(config: UserConfiguration) {
    return this.http.post('api/UserManagement/SetUserConfiguration', config);
  }

  deleteUserByEmail(email: string) {
    return this.http.delete(`api/UserManagement/DeleteUserByEmail/${email}`);
  }

  suspendUser(email: string) {
    return this.http.get(`api/UserManagement/SuspendUser/${email}`);
  }

  activateUser(email: string) {
    return this.http.get(`api/UserManagement/ActivateUser/${email}`);
  }

  activateUserAfterSetPassword(email: string) {
    return this.http.get(`api/UserManagement/ActivateUserAfterSetPassword/${email}`);
  }
  
  checkIfUserOrSchoolSuspended(email: string) {
    return this.http.get(`api/UserManagement/Suspended/${email}`);
  }

  //---------------------------------------------------------------
  testSuperAdmin() {
    return this.http.get('/api/UserManagement/SuperAdminTest');
  }

  testSchoolAdmin() {
    return this.http.get('/api/UserManagement/SchoolAdminTest');
  }

  testScanner() {
    return this.http.get('/api/UserManagement/ScannerTest');
  }

  testClassroomTeacher() {
    return this.http.get('/api/UserManagement/ClassroomTeacherTest');
  }

  testDismissalTeacher() {
    return this.http.get('/api/UserManagement/DismissalTeacherTest');
  }

  testParent() {
    return this.http.get('/api/UserManagement/ParentTest');
  }

  //---------------------------------------------------------------
}
