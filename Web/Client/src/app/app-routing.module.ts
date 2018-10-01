import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { AuthGuard } from "./navigation-guards/auth.guard";
import { UsersManagementComponent } from "./components/users-management/users-management.component";
import { NewUserComponent } from "./components/users-management/new-user/new-user.component";
import { SchoolAccountsComponent } from './components/school-accounts/school-accounts.component';
import { EditSchoolComponent } from './components/school-accounts/edit-school/edit-school.component';
import { SchoolConfigurationComponent } from "./components/school-configuration/school-configuration.component";
import { StudentsGridComponent } from "./components/students/students-grid/students-grid.component";
import { StudentsUploadComponent } from "./components/students/students-upload/students-upload.component";
import { ClassroomsGridComponent } from './components/classrooms/classrooms-grid/classrooms-grid.component';
import { AccessDeniedComponent } from './components/access-denied/access-denied.component';
import { EditStudentComponent } from './components/students/edit-student/edit-student.component';
import { ParentsDashboardComponent } from './components/parents-dashboard/parents-dashboard.component';
import { UserConfigurationComponent } from './components/users-management/user-configuration/user-configuration.component';
import { Roles } from './models/roles.enum';
import { ArchiveComponent } from './components/archive/archive.component';
import { EntryComponent } from './components/entry/entry.component';
import { UsersUploadComponent } from './components/users-management/users-upload/users-upload.component';
import { FlightViewConfigurationComponent } from './components/flight-view-configuration/flight-view-configuration.component';

const appRoutes: Routes = [
  {
    path: '',
    component: EntryComponent,
    pathMatch: 'full',
    canActivate: [
      AuthGuard
    ],
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'access-denied',
    component: AccessDeniedComponent,
  },
  {
    path: 'forgot-password',
    component: LoginComponent,
  },
  {
    path: 'create-account',
    component: LoginComponent,
  },
  // Schools config
  {
    path: 'school-accounts',
    component: SchoolAccountsComponent,
    canActivate: [
      AuthGuard
    ],
    data: {
      expectedRoles: [Roles.superAdmin, Roles.superAdmin]
    }
  },
  {
    path: 'edit-school/:id',
    component: EditSchoolComponent,
    canActivate: [
      AuthGuard
    ],
    data: {
      expectedRoles: [Roles.superAdmin, Roles.superAdmin]
    }
  },
  {
    path: 'edit-school',
    component: EditSchoolComponent,
    canActivate: [
      AuthGuard
    ],
    data: {
      expectedRoles: [Roles.superAdmin, Roles.superAdmin]
    }
  },
  {
    path: 'school-configuration',
    component: SchoolConfigurationComponent,
    canActivate: [
      AuthGuard
    ],
    data: {
      expectedRoles: [Roles.schoolAdmin, Roles.superAdmin]
    }
  },
  // Users
  {
    path: 'users-management',
    component: UsersManagementComponent,
    canActivate: [
      AuthGuard
    ],
    data: {
      expectedRoles: [Roles.schoolAdmin, Roles.superAdmin]
    }
  },
  {
    path: 'new-user',
    component: NewUserComponent,
    canActivate: [
      AuthGuard
    ],
    data: {
      expectedRoles: [Roles.schoolAdmin, Roles.superAdmin]
    }
  },
  {
    path: 'new-user/:id',
    component: NewUserComponent,
    canActivate: [
      AuthGuard
    ],
    data: {
      expectedRoles: [Roles.schoolAdmin, Roles.superAdmin]
    }
  },
  {
    path: 'user-configuration',
    component: UserConfigurationComponent,
    canActivate: [
      AuthGuard
    ]
  },
  {
    path: 'users-upload',
    component: UsersUploadComponent,
    canActivate: [
      AuthGuard
    ],
    data: {
      expectedRoles: [Roles.schoolAdmin, Roles.superAdmin]
    }
  },
  // Students
  {
    path: 'students',
    component: StudentsGridComponent,
    canActivate: [
      AuthGuard
    ],
    data: {
      expectedRoles: [Roles.schoolAdmin, Roles.superAdmin]
    }
  },
  {
    path: 'edit-student/:id',
    component: EditStudentComponent,
    canActivate: [
      AuthGuard
    ],
    data: {
      expectedRoles: [Roles.schoolAdmin, Roles.superAdmin]
    }
  },
  {
    path: 'edit-student',
    component: EditStudentComponent,
    canActivate: [
      AuthGuard
    ],
    data: {
      expectedRoles: [Roles.schoolAdmin, Roles.superAdmin]
    }
  },
  {
    path: 'students-import',
    component: StudentsUploadComponent,
    canActivate: [
      AuthGuard
    ],
    data: {
      expectedRoles: [Roles.schoolAdmin, Roles.superAdmin]
    }
  },
  // Classrooms
  {
    path: 'classrooms',
    component: ClassroomsGridComponent,
    canActivate: [
      AuthGuard
    ],
    data: {
      expectedRoles: [Roles.schoolAdmin, Roles.superAdmin]
    }
  },
  // Teacher Flight Configuration
  {
    path: 'flight-view-configuration',
    component: FlightViewConfigurationComponent,
    canActivate: [
      AuthGuard
    ]
  },
  // Parents Dashboard
  {
    path: 'parents-dashboard',
    component: ParentsDashboardComponent,
    canActivate: [
      AuthGuard
    ],
    data: {
      expectedRoles: [Roles.parent]
    }
  },
  // Archive
  {
    path: 'archive',
    component: ArchiveComponent,
    canActivate: [AuthGuard],
    data: {
      expectedRoles: [Roles.schoolAdmin, Roles.superAdmin, Roles.classroomTeacher, Roles.dismissalTeacher]
    }
  }
  //{ path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(
      appRoutes
      //{
      //  enableTracing: true, // <-- debugging purposes only
      //}
    )
  ],
  providers: [AuthGuard],
  exports: [RouterModule]
})
export class AppRoutingModule { }
