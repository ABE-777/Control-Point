import { Component, ViewChild, AfterViewInit } from '@angular/core';
import { Router, NavigationEnd } from "@angular/router";
import { AuthService } from "../../services/auth.service";
import { UserManagementService } from "../../services/user-management.service";
import { QueryList } from '@angular/core/src/linker/query_list';
import { NotificationService } from "../../services/notification.service";
import { LoaderService } from '../../services/loader.service';

@Component({
  templateUrl: 'login.component.html'
})
export class LoginComponent implements AfterViewInit {

  messageToDisplay: string;
  //flag to toggle login and forgot password forms
  forgotPasswordEmail: string;
  userLogin: string;
  userPassword: string;
  newPassword: string;
  userKeepLoggedIn: boolean;
  isPasswordVisible: boolean = false;
  activeRoute: string;
  @ViewChild('passwordInput') passwordInput;
  @ViewChild('leftSide') leftSide;
  @ViewChild('leftSidePic') leftSidePic;

  userEmailForPasswordSet: string;

  constructor(public router: Router, public authService: AuthService,public userManagementService: UserManagementService, public notificationService: NotificationService,
  private loaderService: LoaderService) {
    this.getRoute();
  }

  ngAfterViewInit() {}

  login() {
    this.loaderService.displayMini(true);
    this.userManagementService.checkIfUserOrSchoolSuspended(this.userLogin).subscribe(res => {
      if (res) {
        this.loaderService.displayMini(false);
        this.notificationService.show('The user or school was suspended!', true, true);
      } else {
        this.authService.login(this.userLogin, this.userPassword, this.userKeepLoggedIn, res => {

          if (res) {
            this.userManagementService.activateUser(this.userLogin).subscribe(res => {});
          }
          else
          {
            this.notificationService.show("You entered an invalid email and/or password. Please try again.", true, true);            
          }
          this.loaderService.displayMini(false);
          
        });
      }
    })
  }  

  getRoute() {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.activeRoute = event.urlAfterRedirects;

        if (event.urlAfterRedirects.includes('create-account')) {
          this.userEmailForPasswordSet = this.router.routerState.snapshot.root.queryParams['email'];
        }
      }
    });
  }

  setPassword() {    
    this.authService.setPassword(this.userEmailForPasswordSet, this.newPassword)
      .subscribe(res => {
        this.userManagementService.activateUserAfterSetPassword(this.userEmailForPasswordSet).subscribe(res => this.router.navigate(['../login']));
        this.notificationService.show("Account created successfully. Please use your email and password to log in.", true, false);
      }, err => {
        this.notificationService.show(err.error, true, true);
      }
      );
  }

  sendPasswordReset() {
    this.authService.resetPassword(this.forgotPasswordEmail)
      .subscribe(response => { this.messageToDisplay = "A password reset link has been sent to you."; this.router.navigateByUrl('/login') });
  }

  triggerPasswordVisibility() {
    this.isPasswordVisible = !this.isPasswordVisible;
    this.passwordInput.nativeElement.type = this.isPasswordVisible ? 'text' : 'password';
  }

  fixLeftSideWidth() {
    if (this.leftSidePic.nativeElement.offsetWidth !== 0)
      this.leftSide.nativeElement.style.width = this.leftSidePic.nativeElement.offsetWidth + 'px';
  }

}
