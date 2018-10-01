import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from "rxjs/Observable";
import { SchoolSettings } from "../models/school-settings.model";

@Injectable()
export class SchoolConfigurationService {

  constructor(public http: HttpClient) { }
  /**
   * Check do we have active flight
   */
  checkActiveFlight(): Observable<boolean> {
    return this.http.get<boolean>('api/Flight/IsActiveFlightExist');
  }

  /**
   * Get school configuration
   */
  getSchoolSettingsForUser(): Observable<SchoolSettings> {
    return this.http.get<SchoolSettings>('/api/School/GetSettings');
  }

  /**
   * Submit school configuration
   */
  submitEditedSettings(schoolSettings: SchoolSettings) {
    return this.http.put('/api/School/SetSettings', schoolSettings)
  }

  /**
   * Erase students data base
   */
  eraseStudents() {
    return this.http.delete('/api/School/EndSchoolYear');    
  }
  
}
