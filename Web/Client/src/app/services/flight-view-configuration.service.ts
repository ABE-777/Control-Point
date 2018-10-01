import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from "rxjs/Observable";
import { TeacherSettings } from "../models/teacher-settings.model";
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Injectable()
export class FlightViewConfigurationService {

  public isFlightViewConfig: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

  constructor(public http: HttpClient) { }

  show(value: boolean) {
    this.isFlightViewConfig.next(value);
  }

  /**
   * Get flight view configuration for teacher
   */
  getFlightSettingsForTeacher(): Observable<TeacherSettings> {
    return this.http.get<TeacherSettings>('/api/Flight/GetFlightSettingsForTeacher');
  }

  /**
   * Submit flight view configuration for teacher
   */
  submitEditedSettings(teacherSettings: TeacherSettings) {
    return this.http.post('/api/Flight/SetFlightSettingsForTeacher', teacherSettings)
  }
  
}
