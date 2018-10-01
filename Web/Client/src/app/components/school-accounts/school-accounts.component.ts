import { Component, OnInit, ViewChild } from '@angular/core';
import { SchoolAccountsService } from "../../services/school-accounts.service";
import { SchoolList } from "../../models/school-list.model";
import { SchoolEdit } from "../../models/school-edit.model";
import { LoaderService } from '../../services/loader.service';
import { ModalService } from '../../services/modal.service';
import { NotificationService } from '../../services/notification.service';
import { SearchBarComponent } from '../../modules/share-module/search-bar/search-bar.component';
import { PaginatorComponent } from '../../modules/share-module/paginator/paginator.component';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { SchoolNameService } from '../../services/school-name.service';

@Component({
  selector: 'school-accounts',
  templateUrl: 'school-accounts.component.html'
})
export class SchoolAccountsComponent implements OnInit {

  @ViewChild(PaginatorComponent) pager: PaginatorComponent;
  @ViewChild(SearchBarComponent) searchBar: SearchBarComponent;
  schoolsAccounts: SchoolList[] = [];
  filteredSchools: SchoolList[] = [];
  focusSchoolId: number;
  resetPasswordEmail: string;
  focusSchool: any;
  constructor(
    public schoolService: SchoolAccountsService,
    private loaderService: LoaderService,
    public modalService: ModalService,
    private notificationService: NotificationService,
    private authService: AuthService,
    private router: Router,
    private schoolNameService: SchoolNameService
  ) {}

  ngOnInit() {
    this.loaderService.display(true);
    window.localStorage.setItem('selectedSchool', '0');
    this.getSchools();
    this.schoolNameService.changeMessage("");
    localStorage.removeItem('selectedSchoolName');
  }

  getStatusClass(status: string): string {
    switch (status) {
      case 'Active':
        return 'success';
      case 'pending':
        return 'warning';
      case 'Suspended':
        return 'danger';
      default:
        return ''
    }
  }

  getSchools() {
    this.schoolService.getSchools().subscribe(respond => {
      this.schoolsAccounts = (respond.schools === null) ? [] : respond.schools;
      this.loaderService.display(false);

      setTimeout(() => {
        this.searchBar.search();
      })
    });
  }

  deleteSchool(id: number) {
    this.loaderService.displayMini(true);
    this.schoolService.deleteSchool(id).subscribe(() => {
      this.schoolsAccounts.splice(this.schoolsAccounts.findIndex(school => school.id === id), 1);

      this.loaderService.displayMini(false);
      this.notificationService.show(`School ${id} was deleted successfully`, true)

      setTimeout(() => {
        this.searchBar.search();
      }, 0)
    });
  }

  toggleStatus() {
    this.loaderService.displayMini(true);
    if (this.focusSchool.status !== 'Suspended') {
      // set status to suspend
      this.schoolService.setStatus(this.focusSchool.id, 2)
        .subscribe(() => {
          this.getSchools();
          this.loaderService.displayMini(false);
          this.notificationService.show('School suspended!', true);
        }, () => { this.notificationService.show('Error occured!', true, true); });
    } else {
      // set status to active
      this.schoolService.setStatus(this.focusSchool.id, 1)
        .subscribe(() => {
          this.getSchools();
          this.loaderService.displayMini(false);
          this.notificationService.show('School activated!', true);
        }, () => { this.notificationService.show('Error occured!', true, true); });
    }
  }

  gridReady(e: any) {
    if (this.schoolsAccounts) {
      this.pager.itemsTotal = this.filteredSchools.length;
      this.pager.selectedPage = e.component.pageIndex();
    }
  }

  setFilteredSchools(filteredSchools: SchoolList[]) {
    this.filteredSchools = filteredSchools;
  }

  setFocusSchoolId(id: number) {
    this.focusSchoolId = id;
  }

  setFocusSchool(school: any) {
    this.focusSchool = school;
  }

  setResetPasswordEmail(email: string) {
    this.resetPasswordEmail = email;
  }

  resetPassword() {
    this.authService.resetPassword(this.resetPasswordEmail)
      .subscribe(response => this.notificationService.show("Request for user password reset is sent to " + this.resetPasswordEmail, true),
                  err => this.notificationService.show("Error during request to reset password", true, true));
  }

  goToSchool(e: MouseEvent, schoolId: string, schoolName: string) {
    window.localStorage.setItem('selectedSchool', schoolId);
    this.router.navigateByUrl('archive');
    e.preventDefault();
    this.schoolNameService.changeMessage(schoolName);
    localStorage.setItem('selectedSchoolName', schoolName);
  }
}
