import { Component, TemplateRef } from '@angular/core';
import { SchoolConfigurationService } from "../../services/school-configuration.service";
import { SchoolSettings, NewScannerUser } from "../../models/school-settings.model";
import { Utils } from "../../utils/utils";
import { Lane } from "../../models/lane.model";
import { ModalService } from '../../services/modal.service';
import { LoaderComponent } from '../common-components/loader/loader.component';
import { LoaderService } from '../../services/loader.service';
import { NotificationService } from '../../services/notification.service';
import { Observable } from "rxjs/Observable";
import { SelectItem } from 'primeng/primeng';
import { ScannerUser } from '../../models/scanner-user.model';
import { UserManagementService } from '../../services/user-management.service';
import { forkJoin } from 'rxjs/observable/forkJoin';

@Component({
  selector: 'school-configuration',
  templateUrl: 'school-configuration.component.html'
})
export class SchoolConfigurationComponent {
  ngForHelper = Utils.numberToArray;
  trimModel = Utils.trimModel;

  schoolSettingsModel: SchoolSettings;
  filteredColorOptions: any[];
  selecterEndYearOption: string = 'erase';
  isLanesNamesUnique: boolean = true;
  isScannerPerLaneUnique: boolean = true;
  isActiveFlightExist: boolean;
  newScannerUsers: NewScannerUser[];
  existEmails: string[];
  repeatEmails: boolean[];

  // dropdown options
  scanningProceduresOptions: SelectItem[];
  cardsPrintingOptions: SelectItem[];
  timeFormatOptions: SelectItem[];
  lanesOptions: SelectItem[];
  carsPerLaneOptions: SelectItem[];
  colorsOptions: SelectItem[];
  scannerUsersOptions: SelectItem[];

  constructor(public schoolService: SchoolConfigurationService,
    public ModalService: ModalService,
    public loaderService: LoaderService,
    public notificationService: NotificationService,
    private userService: UserManagementService) {
    this.schoolSettingsModel = new SchoolSettings();
    this.schoolSettingsModel.lanes = new Array<Lane>();
    this.schoolSettingsModel.lanes[0] = new Lane();
    this.filteredColorOptions = this.colorsOptions;
  }

  ngOnInit() {
    this.getInitialData();
  }

  /**
   * Get initial data from server
   */
  getInitialData() {
    this.loaderService.loadAsync([
      this.schoolService.checkActiveFlight(),
      this.schoolService.getSchoolSettingsForUser()
    ], (res) => {
      this.isActiveFlightExist = res[0];
      this.schoolSettingsModel = res[1];
      //add mandatory settings count OfLanes and carPerLane
      this.schoolSettingsModel.countOfLanes = this.schoolSettingsModel.countOfLanes === 0 ? 1 : this.schoolSettingsModel.countOfLanes;
      this.schoolSettingsModel.carsPerLane = this.schoolSettingsModel.carsPerLane === 0 ? 5 : this.schoolSettingsModel.carsPerLane;

      this.setDropdownOptions(this.schoolSettingsModel);
      this.filterDropdownColors();
    });
  }

  /**
   * Set options for all dropdown menus
   */
  setDropdownOptions(settingModel: SchoolSettings) {
    this.colorsOptions = [
      { label: 'yellow', value: 'Yellow' },
      { label: 'purple', value: 'Purple' },
      { label: 'green', value: 'Green' },
      { label: 'orange', value: 'Orange' },
      { label: 'blue', value: 'Blue' },
      { label: 'red', value: 'Red' },
      { label: 'pink', value: 'Pink' },
      { label: 'black', value: 'Black' }
    ]    
    this.lanesOptions = [
      { label: '1 Lane', value: 1 },
      { label: '2 Lanes', value: 2 },
      { label: '3 Lanes', value: 3 },
      { label: '4 Lanes', value: 4 },
      { label: '5 Lanes', value: 5 },
      { label: '6 Lanes', value: 6 },
    ]
    this.carsPerLaneOptions = [
      { label: '5 Cars', value: 5 },
      { label: '6 Cars', value: 6 },
      { label: '7 Cars', value: 7 },
      { label: '8 Cars', value: 8 },
      { label: '9 Cars', value: 9 },
      { label: '10 Cars', value: 10 },
    ]

    this.scanningProceduresOptions = Utils.generateSelectOptions(settingModel.laneScanningTypes, 'name', 'id');
    this.cardsPrintingOptions = Utils.generateSelectOptions(settingModel.cardPrintingTypes, 'name', 'id');
    this.timeFormatOptions = Utils.generateSelectOptions(settingModel.archiveTimeTypes, 'name', 'id');
    this.scannerUsersOptions = Utils.generateSelectOptions(settingModel.scannerUsers, 'name', 'id');
    this.scannerUsersOptions.push({ value: 0, label: 'Add Scanner User' });
    this.processLanesObjects();
  }

  /**
   * Bind selected scanner user ID to all lanes
   */
  setUserToLanes($event: { originalEvent: MouseEvent, value: number }) {
    this.schoolSettingsModel.lanes.forEach(lane => {
      lane.userId = $event.value;
    })
  }

  /**
   * Push/Pop new scanner user
   * @param  {number} i - index of lane
   */
  toggleNewScannerUser($event: { originalEvent: MouseEvent, value: number }, i: number, laneColor: string) {
    console.log($event.value);
    this.newScannerUsers = this.newScannerUsers || [];
    this.schoolSettingsModel.newScannerUsers = new Array<NewScannerUser>();
    if (!$event.value) {
      this.newScannerUsers[i] = new NewScannerUser();
      this.newScannerUsers[i].laneColor = laneColor;
    } else {
      if (this.newScannerUsers[i]) {
        this.newScannerUsers[i] = null;
        this.newScannerUsers.forEach((user, index) => {          
            this.isNewUserRepeatEmail(index);         
         
        });       
      }
    }
  }

  /**
   * Validate configuartion form
   */
  schoolSettingsFormValidation(): Observable<boolean> {
    return new Observable((observer) => {

      this.isLanesNamesUnique = this.checkLaneNames();
      this.isScannerPerLaneUnique = this.checkScannerUsers();

      this.checkUserEmails(() => {
        if (!this.isLanesNamesUnique || !this.isScannerPerLaneUnique || this.existEmails.length) {
          observer.next(false);
        } else {
          observer.next(true);
        }
        observer.complete()
      });
    })
  }

  /**
   * Save configuration if form valid
   */
  saveEditSchoolSettings() {
    this.loaderService.displayMini(true);

    // push new scanner users to model
    if (this.newScannerUsers) {
      this.newScannerUsers.forEach(user => {
        user && this.schoolSettingsModel.newScannerUsers.push(user);
      })
    }

    // if printing type 'Plastic Card' then deny printing at home
    //if (this.schoolSettingsModel.cardPrintingTypeId === 1) {
    //  this.schoolSettingsModel.allowPrintingAtHome = false;
    //}

    this.schoolSettingsFormValidation().subscribe((isValid: boolean) => {
      if (isValid) {
        this.schoolService.submitEditedSettings(this.schoolSettingsModel).subscribe(response => {
          this.notificationService.show('School configuration saved successfully', true);
          this.loaderService.displayMini(false);

          setTimeout(function () {
            location.reload();
          }, 1500);
         
        });
      } else {
        this.loaderService.displayMini(false);
      }
    })
  }

  processLanesObjects() {
   
    let lanesInitedCount = this.schoolSettingsModel.lanes.length;
    if (lanesInitedCount > this.schoolSettingsModel.countOfLanes) {     
      this.schoolSettingsModel.lanes = this.schoolSettingsModel.lanes.slice(0, this.schoolSettingsModel.countOfLanes);
      if (this.newScannerUsers.length) {
        this.newScannerUsers = this.newScannerUsers.slice(0, this.schoolSettingsModel.countOfLanes);
        this.newScannerUsers.forEach((user, index) => {
          this.isNewUserRepeatEmail(index);

        });
      }
    }
    if (lanesInitedCount < this.schoolSettingsModel.countOfLanes) {
      for (let i = lanesInitedCount; i < this.schoolSettingsModel.countOfLanes; i++) {
        this.schoolSettingsModel.lanes[i] = new Lane();
      }
    }
   
    this.filterDropdownColors();
  }

  assignColorToLane(laneIndex: number, color: string) {
    this.schoolSettingsModel.lanes[laneIndex].color = color;
    this.filterDropdownColors();
  }

  filterDropdownColors() {
    this.filteredColorOptions = this.colorsOptions.filter(option => !this.schoolSettingsModel.lanes.some(lane => lane.color == option.value));
  }

  checkAllLanesHaveColorsSelected() {
    return this.schoolSettingsModel.lanes.every(lane => lane.color && (this.colorsOptions.some(colorOption => lane.color == colorOption.value)));
  }

  checkLaneNames(): boolean {
    this.schoolSettingsModel.lanes.forEach((lane) => {
      lane.name = lane.name ? lane.name : lane.color
    })

    // check if lane names is unique
    let laneNames: string[] = [];
    let isNamesUnique: boolean = true;

    this.schoolSettingsModel.lanes.forEach((lane) => {
      if (laneNames.indexOf(lane.name.toLowerCase()) === -1) {
        laneNames.push(lane.name.toLowerCase());
      } else {
        isNamesUnique = false;
      }
    });

    return isNamesUnique;
  }

  /**
   * Check is one scanner user assign only for one line for multiple scanners mode
   */
  checkScannerUsers(): boolean {
    let isScannersUnique: boolean = true;

    if (this.schoolSettingsModel.laneLogisticTypeId === 2) {
      let lanesUsers: number[] = [];

      this.schoolSettingsModel.lanes.forEach((lane) => {
        if (!lane.userId) { return };

        if (lanesUsers.indexOf(lane.userId) === -1) {
          lanesUsers.push(lane.userId);
        } else {
          isScannersUnique = false;
        }
      });
    }

    return isScannersUnique;
  }

  /**
   * Reset lanes users in settings
   */
  resetLanesUsers() {
    this.schoolSettingsModel.lanes.forEach(lane => {
      lane.userId = null;
    })

    this.newScannerUsers = [];
    this.repeatEmails = [];
  }

  /**
   * Check is new users emails unique and not exist
   */
  checkUserEmails(callback?: () => void): void {
    this.existEmails = [];
    let uniqueEmails: string[] = [];
    let existEmails: string[] = [];
    let emailCheckMethods = [];

    if (this.schoolSettingsModel.newScannerUsers && this.schoolSettingsModel.newScannerUsers.length) {
     
      this.schoolSettingsModel.newScannerUsers.forEach((user) => {
        if (uniqueEmails.indexOf(user.email) === -1) {
          uniqueEmails.push(user.email);
        } else {
          existEmails.push(user.email);
        }
      });
    } else {
      callback && callback();
      return;
    }

    // check emails on backend
    uniqueEmails.forEach((email) => {
      emailCheckMethods.push(this.userService.userEmailExist(email));
    })

    forkJoin(emailCheckMethods).subscribe((res) => {
      res.forEach((isExist, index) => {
        isExist && existEmails.push(uniqueEmails[index]);
      }); 

      this.existEmails = existEmails;

      callback && callback();
    })
  }

  isNewUserRepeatEmail(i: number) {
    this.existEmails = [];
    this.repeatEmails = [];
    let uniqueEmails: string[] = [];
    let repeatEmails: string[] = [];

    // check emails between new users
    if (this.newScannerUsers && this.newScannerUsers.length) {
      let currentUser = this.newScannerUsers[i];
      this.newScannerUsers.forEach((user, index) => {

        if (user === null || user.email === undefined || user.email === "" || user.email.length === 0) { }
        else {
          let repIndex = uniqueEmails.indexOf(user.email);
          if (repIndex === -1) {
            uniqueEmails.push(user.email);
          } else {
            repeatEmails.push(user.email);
            this.repeatEmails[index] = true;
            this.repeatEmails[repIndex] = true;
          }
        }
      });
    } else {
      return;
    }
  }

  endYear() {
    this.loaderService.displayMini(true);
    this.schoolService.eraseStudents().subscribe(
      response => this.loaderService.displayMini(false),
      err => this.ErrorHandler(err));

  }

  private ErrorHandler(err: any) {
    this.loaderService.displayMini(false);
    if (err === null) {
    }
    else {
      switch (err.status) {
        case 400: this.notificationService.show(err.error, true, true); break;
        case 409: this.notificationService.show(err.error, true, true); break;
        case 500: this.notificationService.show('Server error occured!', true, true); break;
        case 503: this.notificationService.show('Error occured while processing your request!', true, true); break;
        default: break;
      }
    }
  }
}
