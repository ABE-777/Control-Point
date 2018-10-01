import { Component, TemplateRef } from '@angular/core';
import { Location } from '@angular/common';
import { Lane } from "../../models/lane.model";
import { TeacherSettings } from "../../models/teacher-settings.model";
import { FlightViewConfigurationService } from "../../services/flight-view-configuration.service";
import { LoaderComponent } from '../common-components/loader/loader.component';
import { LoaderService } from '../../services/loader.service';
import { NotificationService } from '../../services/notification.service';
import { Observable } from "rxjs/Observable";
import { SelectItem } from 'primeng/primeng';

@Component({
  selector: 'flight-view-configuration',
  templateUrl: 'flight-view-configuration.component.html'
})
export class FlightViewConfigurationComponent {

  teacherSettingsModel: TeacherSettings;
  lanesOptions: SelectItem[];

  isSchoolConfigSet: boolean = true;
  isAdmin: boolean = false;

  constructor(private location: Location,
    public teacherService: FlightViewConfigurationService,
    public loaderService: LoaderService,
    public notificationService: NotificationService) {
    this.teacherSettingsModel = new TeacherSettings();
    this.teacherSettingsModel.lanes = new Array<Lane>();
  }

  ngOnInit() {
    if (window.localStorage.getItem('role').indexOf("Admin") >= 0) {
      this.isAdmin = true;
    } 
    this.getInitialData();
  }

  /**
   * Get initial data from server
   */
  getInitialData() {
    this.loaderService.displayMini(true);
    this.teacherService.getFlightSettingsForTeacher().subscribe(res => {
      if (res == null) {
        this.isSchoolConfigSet = false;
      }
      else {
        this.isSchoolConfigSet = true;
        this.teacherSettingsModel = res;
        this.lanesOptions = [];
        this.teacherSettingsModel.lanes.forEach(lane => {
          this.lanesOptions.push({
            value: lane.id,
            label: lane.name,
            icon: lane.color
          })
        });
      }   
      this.loaderService.displayMini(false);
    });
  }

  submitFlightConfiguration() {
    this.loaderService.displayMini(true);
    this.teacherService.submitEditedSettings(this.teacherSettingsModel)
      .subscribe(response => this.responseStatusCodeHandler(response),
      err => this.responseStatusCodeHandler(err)
      );
  }

  /* error handler */
  responseStatusCodeHandler(err: any) {
    if (err === null) {
      this.loaderService.displayMini(false);
      this.notificationService.show('Your changes applied successfully!', true);
    }
    else {
      this.loaderService.displayMini(false);
      switch (err.status) {
        case 400: this.notificationService.show(err.message, true, true); break;
        case 500: this.notificationService.show('Server error occured!', true, true); break;
        case 503: this.notificationService.show('Error occured while processing your request!', true, true); break;
        default: break;
      }
    }
  }

  changeScanningType(par: any) {

  }

}
