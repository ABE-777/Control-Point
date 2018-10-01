import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from "rxjs/Observable";
import { ParentInfo } from '../models/http-models/parent-info.model';
import { StudentForParent } from '../models/student-for-parent.model';


@Injectable()
export class ParentsDashboardService {

  constructor(private http: HttpClient) { }

  getParentInfo(): Observable<ParentInfo> {
    return this.http.get<ParentInfo>('api/Parent/GetParentInfo');
  }

  editStudentName(student: StudentForParent): Observable<any> {
    return this.http.put('api/Parent/EditStudentName', student);
  }

  getCarRidersInstructions(): Observable<string> {
    return this.http.get<string>('api/Parent/GetCarRidersInstructions');
  }

  setInstructionsChecked(): Observable<any> {
    return this.http.get('api/Parent/SetInstructionsChecked');
  }

  driverLicenseExist(license: string, currentLicense?: string): Observable<boolean> {
    let isDriverLicenseExist: Observable<boolean> = new Observable(observer => {

      if (license === currentLicense) {
        observer.next(false);
      } else {
        this.http.get(`/api/Parent/IsDriverLicenseExist/${license}`).subscribe(res => {
          if (res === 'Exist') {
            observer.next(true);
          } else {
            observer.next(false);
          }
        })
      }
    });

    return isDriverLicenseExist;
  }
}
