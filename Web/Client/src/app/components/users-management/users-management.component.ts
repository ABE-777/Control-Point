import { Component, OnInit, ViewChild } from '@angular/core';
import { UserManagementService } from "../../services/user-management.service";
import { User } from "../../models/user.model";
import { ModalService } from '../../services/modal.service';
import { LoaderService } from '../../services/loader.service';
import { SearchBarComponent } from '../../modules/share-module/search-bar/search-bar.component';
import { AuthService } from '../../services/auth.service';
import { PaginatorComponent } from '../../modules/share-module/paginator/paginator.component';
import { NotificationService } from '../../services/notification.service';

@Component({
  selector: 'user-management',
  templateUrl: 'users-management.component.html'
})
export class UsersManagementComponent implements OnInit {

  @ViewChild(PaginatorComponent) pager: PaginatorComponent;
  @ViewChild(SearchBarComponent) searchBar: SearchBarComponent;

  usersData: User[] = [];
  filteredUsers: User[] = [];
  deleteUserEmail: string;
  suspendUserEmail: string;
  temporaryAccessEmail: string;
  expirationDate: Date;
  userSuspended: boolean = false;

  constructor(public userManagementService: UserManagementService,
              public modalService: ModalService,
              private loaderService: LoaderService,
              private authService: AuthService,
              private notificationService: NotificationService) { }

  ngOnInit() {
    this.userManagementService.initData();
    this.loaderService.display(true);
    this.getUsers();
  }

  setDeleteUserEmail(email: string) {
    this.deleteUserEmail = email;
  }

  deleteUser() {
    this.loaderService.displayMini(true);
    this.userManagementService.deleteUserByEmail(this.deleteUserEmail)
      .subscribe(response => this.deleteUserHandler(), err => this.ErrorHandler(err));
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

  deleteUserHandler() {
    this.loaderService.displayMini(false);
    this.notificationService.show("User deleted!", true);
    this.getUsers();
  }

  resetPasswordForUser(userEmail: string) {
    this.authService.resetPassword(userEmail).subscribe(response =>
      this.notificationService.show("The instructions to reset password have been sent to " + userEmail + ".", true),
      err =>
        this.notificationService.show("Error occured while processing your request!", true, true)
    );
  }

  setSuspendUserInfo(email: string, id: number) {
    this.suspendUserEmail = email;
    if (id === 1) {
      this.userSuspended = false;
    }
    if (id === 4) {
      this.userSuspended = true;
    }
  }

  suspendUser() {
    this.loaderService.displayMini(true);
    if (this.userSuspended) {
      this.userManagementService.activateUser(this.suspendUserEmail)
        .subscribe(res => this.handleSuspensionResult(this.userSuspended),
        err => this.ErrorHandler(err));
    }
    else {
      this.userManagementService.suspendUser(this.suspendUserEmail)
        .subscribe(res => this.handleSuspensionResult(this.userSuspended),
        err => this.ErrorHandler(err));
    }
  }


  handleSuspensionResult(userSuspended: boolean) {
    this.loaderService.displayMini(false);
    if (userSuspended) {
      this.notificationService.show('User activated!', true);
      this.getUsers();
    }
    else {
      this.notificationService.show('User suspended!', true);
      this.getUsers();
    }
  }

  submitTemporaryAccess() {
    console.log(this.temporaryAccessEmail);
    console.log(this.expirationDate);
  }

  getUsers() {
    this.userManagementService.getReadyStatus().subscribe(status => {
      if (status) {
        this.userManagementService.getUsers().subscribe(users => {
          console.log(users);
          this.usersData = users;
          this.loaderService.display(false);
          setTimeout(() => {
            this.searchBar.search();
          }, 0)
        });
      }
    });
  }

  gridReady(e: any) {
    if (this.usersData) {
      this.pager.itemsTotal = this.filteredUsers.length;
      this.pager.selectedPage = e.component.pageIndex();
    }
  }

  setFilteredUsers(filteredUsers: User[]) {
    this.filteredUsers = filteredUsers;
  }

  getStatusClass(status: number, classroom: string, role: string): string {
    //leave only 3 statuses for user -> Pending, Active, Suspended -> new Requerment
    //if (classroom === null && role === 'Classroom Teacher') {
    //  return 'warning';
    //} else {
    switch (status) {
      case 1:
        return 'success';
      case 2:
        return 'disabled';
      case 4:
        return 'danger';
      default:
        return '';
    }
    //}    
  }

  getStatusName(status: number, classroom: string, role: string): string {
    //leave only 3 statuses for user -> pending, Active, Suspended
    //if (classroom === null && role === 'Classroom Teacher') {
    //  return 'Unassigned';
    //} else {
    switch (status) {
      case 1:
        return 'Active';
      case 2:
        return 'Pending';
      case 4:
        return 'Suspended';
      default:
        return '';
    }
    // }    
  }

  //--------------------------------------------------------------

  superAdminResponse: object;
  schoolAdminResponse: object;
  classroomTeacherResponse: object;
  dismissalTeacherResponse: object;
  scannerResponse: object;
  parentResponse: object;

  testSuperAdmin() {
    this.userManagementService.testSuperAdmin().subscribe(response => this.superAdminResponse = response);
  }

  testSchoolAdmin() {
    this.userManagementService.testSchoolAdmin().subscribe(response => this.schoolAdminResponse = response);
  }

  testClassroomTeacher() {
    this.userManagementService.testClassroomTeacher().subscribe(response => this.classroomTeacherResponse = response);
  }

  testDismissalTeacher() {
    this.userManagementService.testDismissalTeacher().subscribe(response => this.dismissalTeacherResponse = response);
  }

  testScanner() {
    this.userManagementService.testScanner().subscribe(response => this.scannerResponse = response);
  }

  testParent() {
    this.userManagementService.testParent().subscribe(response => this.parentResponse = response);
  }
}
