import { Component, OnInit, Input, Inject } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router/';
import { AuthService } from '../../services/auth.service';
import { UserManagementService } from '../../services/user-management.service';
import { Roles } from '../../models/roles.enum';
import { UserInfo } from '../../models/http-models/user-infomodel';
import { ParentsDashboardService } from '../../services/parents-dashboard.service';
import { LoaderService } from '../../services/loader.service';
import { FlightViewConfigurationService } from '../../services/flight-view-configuration.service';
import * as jsPDF from 'jspdf';
import { NotificationService } from '../../services/notification.service';
import { SchoolAccountsService } from '../../services/school-accounts.service';
import { SchoolNameService } from '../../services/school-name.service';
import { ChangeDetectorRef } from '@angular/core/';

@Component({
  selector: 'app-header',
  templateUrl: 'header.component.html',
  providers: [
    { provide: 'Window', useValue: window }
  ]
})
export class HeaderComponent implements OnInit{
  roles = Roles;
  userData: UserInfo = new UserInfo();
  userPic: string;
  isMenuOpen: boolean = false;
  @Input() noMenu: boolean = false;
  currentRouteUrl: string;
  showFlightViewConfigItem: boolean;
  

  constructor(private _router: Router, public authService: AuthService,
    private userService: UserManagementService,
    private parentsDashboardService: ParentsDashboardService,
    @Inject('Window') private window: Window,
    private loaderService: LoaderService,
    private flightViewConfig: FlightViewConfigurationService,
    private notificationService: NotificationService,
    private schoolAccountsService: SchoolAccountsService,
    private schoolNameService: SchoolNameService,
    private cdRef: ChangeDetectorRef
  ) {

    if (this.authService.authenticated) {
      this.getUserData();
    }
    else {
      this.authService.loggedIn$.subscribe(
        loggedIn => {
          if (loggedIn === true)
            this.getUserData()
        }
      )
    }
  }

  ngOnInit() {
    this.flightViewConfig.isFlightViewConfig.subscribe((val: boolean) => {
      this.showFlightViewConfigItem = val;
    });
    this.schoolNameService.currentSchoolName.subscribe(schoolName =>
    {
      this.userData.schoolName = schoolName;
      if (!this.cdRef['destroyed']) {
        this.cdRef.detectChanges();
      }

    });
  }

  getUserData() {
    if (localStorage.getItem('profile') && localStorage.getItem('profile') != 'undefined')
      this.userPic = JSON.parse(localStorage.getItem('profile')).picture;
    this.userService.getUserInfo().subscribe(res => {
      this.userData = res;
      if (localStorage.getItem('selectedSchoolName')) {
        this.userData.schoolName = localStorage.getItem('selectedSchoolName');
        if (!this.cdRef['destroyed']) {
          this.cdRef.detectChanges();
        }
        
      }
    });
    
  }

  changeLogo(menuState: string) {
    this.isMenuOpen = (menuState === 'open');
  }

  logout() {
    this.authService.logout(true);
  }

  // we need to create service for this. this need to be refactored
  downloadInstructions() {
    this.loaderService.displayMini(true);
    this.parentsDashboardService.getCarRidersInstructions()
      .subscribe(res => {
        if (res === null || res === "") {
          this.notificationService.show("There are no instructions for download!", true, true);
        }
        else {
          var doc = new jsPDF();
          var strArr = doc.splitTextToSize(res, 175);
          doc.text(20, 20, strArr);
          doc.save('CarRidersInstructions.pdf');         
        }
        this.loaderService.displayMini(false);
      });
  }

  goToSchoolView() {
    if (localStorage.getItem('role') === "Super Admin") {
      this.schoolNameService.changeMessage('');
      if (!this.cdRef['destroyed']) {
        this.cdRef.detectChanges();
      }
      localStorage.removeItem('selectedSchoolName');
    }    
  }

}
