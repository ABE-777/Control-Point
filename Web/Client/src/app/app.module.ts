// angular
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// vendors
import { DxDataGridModule } from 'devextreme-angular';
import {
  CheckboxModule,
  DropdownModule,
  DataTableModule,
  PaginatorModule,
  CalendarModule,
  MultiSelectModule
} from 'primeng/primeng';
import { ModalModule } from 'ngx-bootstrap/modal';
import { FileUploadModule } from 'ng2-file-upload';
import { NgxBarcodeModule } from 'ngx-barcode';

// app core
import { AppComponent } from './app.component';
import { AuthService } from './services/auth.service';
import { AuthHttpInterceptor } from './services/HttpInterceptors/AuthHttpClientInterceptor';

// app modules
import { ScannerModule } from './modules/scanner/scanner.module';
import { ShareModuleModule } from './modules/share-module/share-module.module';
import { FlightsModule } from './modules/flights/flights.module';
import { DismissalCardsModule } from './modules/dismissal-cards/dismissal-cards.module';

// app components
import { EntryComponent } from './components/entry/entry.component';
import { LoginComponent } from './components/login/login.component';
import { HeaderComponent } from './components/header/header.component';
import { MainMenuComponent } from './components/header/main-menu/main-menu.component';
import { UsersManagementComponent } from './components/users-management/users-management.component';
import { NewUserComponent } from './components/users-management/new-user/new-user.component';
import { SchoolAccountsComponent } from './components/school-accounts/school-accounts.component';
import { EditSchoolComponent } from './components/school-accounts/edit-school/edit-school.component';
import { SchoolConfigurationComponent } from './components/school-configuration/school-configuration.component';
import { StudentsUploadComponent } from './components/students/students-upload/students-upload.component';
import { StudentsGridComponent } from './components/students/students-grid/students-grid.component';
import { EditStudentComponent } from './components/students/edit-student/edit-student.component';
import { ClassroomsGridComponent } from "./components/classrooms/classrooms-grid/classrooms-grid.component";
import { AccessDeniedComponent } from './components/access-denied/access-denied.component';
import { NotificationComponent } from './components/common-components/notification/notification.component';
import { LoaderComponent } from './components/common-components/loader/loader.component';
import { ParentsDashboardComponent } from './components/parents-dashboard/parents-dashboard.component';
import { UserConfigurationComponent } from './components/users-management/user-configuration/user-configuration.component';
import { ArchiveComponent } from './components/archive/archive.component';
import { FlightViewConfigurationComponent } from './components/flight-view-configuration/flight-view-configuration.component';

// app services
import { RequestService } from './services/request.service';
import { UserManagementService } from './services/user-management.service';
import { SchoolAccountsService } from './services/school-accounts.service';
import { SchoolConfigurationService } from './services/school-configuration.service';
import { FileServerService } from './services/file-server.service';
import { StudentsService } from './services/students.service';
import { ScanningHttpHubService } from './services/scanning-http-hub.service';
import { ModalService } from './services/modal.service';
import { ClassroomsService } from "./services/classrooms.service";
import { LoaderService } from './services/loader.service';
import { CreateEditItemService } from './services/create-edit-item.service';
import { NotificationService } from './services/notification.service';
import { ParentsDashboardService } from './services/parents-dashboard.service';
import { DismissalCardsService } from './services/dismissal-cards.service';
import { ArchiveService } from './services/archive.service';
import { FlightViewConfigurationService } from './services/flight-view-configuration.service';
import { ParentIdService } from './services/parent-id-service';
import { FlightTeacherService } from './services/flight-teachers.service';
import { SchoolNameService } from './services/school-name.service';

// app directives
import { IsUserExistDirective } from './directives/is-user-exist.directive';
import { UsersUploadComponent } from './components/users-management/users-upload/users-upload.component';
import { IsUserParentDirective } from './directives/is-user-parent';
import { DatePipe } from '@angular/common';


@NgModule({
  declarations: [
    AppComponent,
    NotificationComponent,
    LoaderComponent,
    LoginComponent,
    HeaderComponent,
    MainMenuComponent,
    UsersManagementComponent,
    NewUserComponent,
    UsersUploadComponent,
    SchoolAccountsComponent,
    EditSchoolComponent,
    SchoolConfigurationComponent,
    StudentsGridComponent,
    EditStudentComponent,
    StudentsUploadComponent,
    ClassroomsGridComponent,
    AccessDeniedComponent,
    IsUserExistDirective,
    ParentsDashboardComponent,
    UserConfigurationComponent,
    ArchiveComponent,
    EntryComponent,
    IsUserParentDirective,
    FlightViewConfigurationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    CheckboxModule,
    DataTableModule,
    CalendarModule,
    MultiSelectModule,
    ModalModule.forRoot(),
    DropdownModule,
    PaginatorModule,
    BrowserAnimationsModule,
    DxDataGridModule,
    FileUploadModule,
    NgxBarcodeModule,
    ScannerModule,
    FlightsModule,
    ShareModuleModule,
    DismissalCardsModule
  ],
  providers: [
    AuthService,
    NotificationService,
    RequestService,
    UserManagementService,
    SchoolAccountsService,
    SchoolConfigurationService,
    FileServerService,
    StudentsService,
    ScanningHttpHubService,
    ModalService,
    CreateEditItemService,
    ArchiveService,
    DatePipe,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthHttpInterceptor,
      multi: true
    },
    DismissalCardsService,
    ClassroomsService,
    ParentsDashboardService,
    LoaderService,
    FlightViewConfigurationService,
    ParentIdService,
    FlightTeacherService,
    SchoolNameService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
