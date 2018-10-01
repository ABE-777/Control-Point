import { Component, OnInit} from '@angular/core';
import { Location } from '@angular/common';
import { UserManagementService } from "../../../services/user-management.service";
import { UserConfiguration } from '../../../models/user-configuration.model';
import { LoaderService } from '../../../services/loader.service';
import { NotificationService } from '../../../services/notification.service';
import { WhiteSpaceValidator } from '../../../directives/white-space-validation.directive';

@Component({
  selector: 'app-user-configuration',
  templateUrl: './user-configuration.component.html',
  styles: []
})

export class UserConfigurationComponent implements OnInit {

  currentPasswordVisible: boolean = false;
  newPasswordVisible: boolean = false;
  confirmPasswordVisible: boolean = false;
  userConfiguration: UserConfiguration = new UserConfiguration();
  isCurrentPasswordRequired: boolean = false;
  isNewPasswordRequired: boolean = false;
  isConfirmPasswordRequired: boolean = false;
  userName: string;

  constructor(private location: Location,
    public userManagementService: UserManagementService,
    private notificationService: NotificationService,
    private loaderService: LoaderService)
    { }

  triggerCurrentPasswordVisibility() {
    this.currentPasswordVisible = !this.currentPasswordVisible;
    this.currentPasswordVisible ? (<HTMLInputElement>document.getElementById('uc_currentPasswordInput')).type = "text"
      : (<HTMLInputElement>document.getElementById('uc_currentPasswordInput')).type = "password";    
  }

  triggerNewPasswordVisibility() {
    this.newPasswordVisible = !this.newPasswordVisible;
    this.newPasswordVisible ? (<HTMLInputElement>document.getElementById('uc_newPasswordInput')).type = "text"
      : (<HTMLInputElement>document.getElementById('uc_newPasswordInput')).type = "password";
  }

  triggerConfirmPasswordVisibility() {
    this.confirmPasswordVisible = !this.confirmPasswordVisible;
    this.confirmPasswordVisible ? (<HTMLInputElement>document.getElementById('uc_confirmPasswordInput')).type = "text"
      : (<HTMLInputElement>document.getElementById('uc_confirmPasswordInput')).type = "password";
  }

  passwordChange(val: any) {
    this.isCurrentPasswordRequired = false;
    this.isNewPasswordRequired = false;
    this.isConfirmPasswordRequired = false;
    if (val !== "" && (this.userConfiguration.newPassword !== ""
      || this.userConfiguration.newPasswordConfirmation !== ""
      || this.userConfiguration.password !== "")) {
      this.isCurrentPasswordRequired = true;
      this.isNewPasswordRequired = true;
      this.isConfirmPasswordRequired = true;
    }
  }

  goBack() {
    this.location.back();
  }

  responseStatusCodeHandler(err: any) {
    if (err === null) {
      this.loaderService.displayMini(false);
      this.notificationService.show('Your changes applied successfully!', true, false);
    }
    else {
      this.loaderService.displayMini(false);
      switch (err.status) {
        case 400: this.notificationService.show('New password does not match the confirm password!', true, true); break;
        case 403: this.notificationService.show('Your current password is incorrect!', true, true); break;
        case 409: this.notificationService.show('Conflict occured!', true, true); break;
        case 500: this.notificationService.show('Server error occured!', true, true); break;
        case 503: this.notificationService.show('Error occured while processing your request!', true, true); break;
        default: break;
      }
    }
  }

  submitUserConfiguration() {
      this.loaderService.displayMini(true);
      this.userManagementService
        .submitUserConfiguration(this.userConfiguration)
        .subscribe(result => this.responseStatusCodeHandler(result),
                   err => this.responseStatusCodeHandler(err));
  }  

  ngOnInit() {
    this.userManagementService.getUserConfiguration().subscribe(res => {
      this.userConfiguration = new UserConfiguration(res.username, res.email);
      this.userName = res.username;
    });
    
  }

}
