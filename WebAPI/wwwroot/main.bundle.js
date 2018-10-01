webpackJsonp(["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_login_login_component__ = __webpack_require__("./src/app/components/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__navigation_guards_auth_guard__ = __webpack_require__("./src/app/navigation-guards/auth.guard.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_users_management_users_management_component__ = __webpack_require__("./src/app/components/users-management/users-management.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_users_management_new_user_new_user_component__ = __webpack_require__("./src/app/components/users-management/new-user/new-user.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_school_accounts_school_accounts_component__ = __webpack_require__("./src/app/components/school-accounts/school-accounts.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_school_accounts_edit_school_edit_school_component__ = __webpack_require__("./src/app/components/school-accounts/edit-school/edit-school.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components_school_configuration_school_configuration_component__ = __webpack_require__("./src/app/components/school-configuration/school-configuration.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__components_students_students_grid_students_grid_component__ = __webpack_require__("./src/app/components/students/students-grid/students-grid.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__components_students_students_upload_students_upload_component__ = __webpack_require__("./src/app/components/students/students-upload/students-upload.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__components_classrooms_classrooms_grid_classrooms_grid_component__ = __webpack_require__("./src/app/components/classrooms/classrooms-grid/classrooms-grid.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__components_access_denied_access_denied_component__ = __webpack_require__("./src/app/components/access-denied/access-denied.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__components_students_edit_student_edit_student_component__ = __webpack_require__("./src/app/components/students/edit-student/edit-student.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__components_parents_dashboard_parents_dashboard_component__ = __webpack_require__("./src/app/components/parents-dashboard/parents-dashboard.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__components_users_management_user_configuration_user_configuration_component__ = __webpack_require__("./src/app/components/users-management/user-configuration/user-configuration.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__models_roles_enum__ = __webpack_require__("./src/app/models/roles.enum.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__components_archive_archive_component__ = __webpack_require__("./src/app/components/archive/archive.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__components_entry_entry_component__ = __webpack_require__("./src/app/components/entry/entry.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__components_users_management_users_upload_users_upload_component__ = __webpack_require__("./src/app/components/users-management/users-upload/users-upload.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__components_flight_view_configuration_flight_view_configuration_component__ = __webpack_require__("./src/app/components/flight-view-configuration/flight-view-configuration.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





















var appRoutes = [
    {
        path: '',
        component: __WEBPACK_IMPORTED_MODULE_18__components_entry_entry_component__["a" /* EntryComponent */],
        pathMatch: 'full',
        canActivate: [
            __WEBPACK_IMPORTED_MODULE_3__navigation_guards_auth_guard__["a" /* AuthGuard */]
        ],
    },
    {
        path: 'login',
        component: __WEBPACK_IMPORTED_MODULE_2__components_login_login_component__["a" /* LoginComponent */],
    },
    {
        path: 'access-denied',
        component: __WEBPACK_IMPORTED_MODULE_12__components_access_denied_access_denied_component__["a" /* AccessDeniedComponent */],
    },
    {
        path: 'forgot-password',
        component: __WEBPACK_IMPORTED_MODULE_2__components_login_login_component__["a" /* LoginComponent */],
    },
    {
        path: 'create-account',
        component: __WEBPACK_IMPORTED_MODULE_2__components_login_login_component__["a" /* LoginComponent */],
    },
    // Schools config
    {
        path: 'school-accounts',
        component: __WEBPACK_IMPORTED_MODULE_6__components_school_accounts_school_accounts_component__["a" /* SchoolAccountsComponent */],
        canActivate: [
            __WEBPACK_IMPORTED_MODULE_3__navigation_guards_auth_guard__["a" /* AuthGuard */]
        ],
        data: {
            expectedRoles: [__WEBPACK_IMPORTED_MODULE_16__models_roles_enum__["a" /* Roles */].superAdmin, __WEBPACK_IMPORTED_MODULE_16__models_roles_enum__["a" /* Roles */].superAdmin]
        }
    },
    {
        path: 'edit-school/:id',
        component: __WEBPACK_IMPORTED_MODULE_7__components_school_accounts_edit_school_edit_school_component__["a" /* EditSchoolComponent */],
        canActivate: [
            __WEBPACK_IMPORTED_MODULE_3__navigation_guards_auth_guard__["a" /* AuthGuard */]
        ],
        data: {
            expectedRoles: [__WEBPACK_IMPORTED_MODULE_16__models_roles_enum__["a" /* Roles */].superAdmin, __WEBPACK_IMPORTED_MODULE_16__models_roles_enum__["a" /* Roles */].superAdmin]
        }
    },
    {
        path: 'edit-school',
        component: __WEBPACK_IMPORTED_MODULE_7__components_school_accounts_edit_school_edit_school_component__["a" /* EditSchoolComponent */],
        canActivate: [
            __WEBPACK_IMPORTED_MODULE_3__navigation_guards_auth_guard__["a" /* AuthGuard */]
        ],
        data: {
            expectedRoles: [__WEBPACK_IMPORTED_MODULE_16__models_roles_enum__["a" /* Roles */].superAdmin, __WEBPACK_IMPORTED_MODULE_16__models_roles_enum__["a" /* Roles */].superAdmin]
        }
    },
    {
        path: 'school-configuration',
        component: __WEBPACK_IMPORTED_MODULE_8__components_school_configuration_school_configuration_component__["a" /* SchoolConfigurationComponent */],
        canActivate: [
            __WEBPACK_IMPORTED_MODULE_3__navigation_guards_auth_guard__["a" /* AuthGuard */]
        ],
        data: {
            expectedRoles: [__WEBPACK_IMPORTED_MODULE_16__models_roles_enum__["a" /* Roles */].schoolAdmin, __WEBPACK_IMPORTED_MODULE_16__models_roles_enum__["a" /* Roles */].superAdmin]
        }
    },
    // Users
    {
        path: 'users-management',
        component: __WEBPACK_IMPORTED_MODULE_4__components_users_management_users_management_component__["a" /* UsersManagementComponent */],
        canActivate: [
            __WEBPACK_IMPORTED_MODULE_3__navigation_guards_auth_guard__["a" /* AuthGuard */]
        ],
        data: {
            expectedRoles: [__WEBPACK_IMPORTED_MODULE_16__models_roles_enum__["a" /* Roles */].schoolAdmin, __WEBPACK_IMPORTED_MODULE_16__models_roles_enum__["a" /* Roles */].superAdmin]
        }
    },
    {
        path: 'new-user',
        component: __WEBPACK_IMPORTED_MODULE_5__components_users_management_new_user_new_user_component__["a" /* NewUserComponent */],
        canActivate: [
            __WEBPACK_IMPORTED_MODULE_3__navigation_guards_auth_guard__["a" /* AuthGuard */]
        ],
        data: {
            expectedRoles: [__WEBPACK_IMPORTED_MODULE_16__models_roles_enum__["a" /* Roles */].schoolAdmin, __WEBPACK_IMPORTED_MODULE_16__models_roles_enum__["a" /* Roles */].superAdmin]
        }
    },
    {
        path: 'new-user/:id',
        component: __WEBPACK_IMPORTED_MODULE_5__components_users_management_new_user_new_user_component__["a" /* NewUserComponent */],
        canActivate: [
            __WEBPACK_IMPORTED_MODULE_3__navigation_guards_auth_guard__["a" /* AuthGuard */]
        ],
        data: {
            expectedRoles: [__WEBPACK_IMPORTED_MODULE_16__models_roles_enum__["a" /* Roles */].schoolAdmin, __WEBPACK_IMPORTED_MODULE_16__models_roles_enum__["a" /* Roles */].superAdmin]
        }
    },
    {
        path: 'user-configuration',
        component: __WEBPACK_IMPORTED_MODULE_15__components_users_management_user_configuration_user_configuration_component__["a" /* UserConfigurationComponent */],
        canActivate: [
            __WEBPACK_IMPORTED_MODULE_3__navigation_guards_auth_guard__["a" /* AuthGuard */]
        ]
    },
    {
        path: 'users-upload',
        component: __WEBPACK_IMPORTED_MODULE_19__components_users_management_users_upload_users_upload_component__["a" /* UsersUploadComponent */],
        canActivate: [
            __WEBPACK_IMPORTED_MODULE_3__navigation_guards_auth_guard__["a" /* AuthGuard */]
        ],
        data: {
            expectedRoles: [__WEBPACK_IMPORTED_MODULE_16__models_roles_enum__["a" /* Roles */].schoolAdmin, __WEBPACK_IMPORTED_MODULE_16__models_roles_enum__["a" /* Roles */].superAdmin]
        }
    },
    // Students
    {
        path: 'students',
        component: __WEBPACK_IMPORTED_MODULE_9__components_students_students_grid_students_grid_component__["a" /* StudentsGridComponent */],
        canActivate: [
            __WEBPACK_IMPORTED_MODULE_3__navigation_guards_auth_guard__["a" /* AuthGuard */]
        ],
        data: {
            expectedRoles: [__WEBPACK_IMPORTED_MODULE_16__models_roles_enum__["a" /* Roles */].schoolAdmin, __WEBPACK_IMPORTED_MODULE_16__models_roles_enum__["a" /* Roles */].superAdmin]
        }
    },
    {
        path: 'edit-student/:id',
        component: __WEBPACK_IMPORTED_MODULE_13__components_students_edit_student_edit_student_component__["a" /* EditStudentComponent */],
        canActivate: [
            __WEBPACK_IMPORTED_MODULE_3__navigation_guards_auth_guard__["a" /* AuthGuard */]
        ],
        data: {
            expectedRoles: [__WEBPACK_IMPORTED_MODULE_16__models_roles_enum__["a" /* Roles */].schoolAdmin, __WEBPACK_IMPORTED_MODULE_16__models_roles_enum__["a" /* Roles */].superAdmin]
        }
    },
    {
        path: 'edit-student',
        component: __WEBPACK_IMPORTED_MODULE_13__components_students_edit_student_edit_student_component__["a" /* EditStudentComponent */],
        canActivate: [
            __WEBPACK_IMPORTED_MODULE_3__navigation_guards_auth_guard__["a" /* AuthGuard */]
        ],
        data: {
            expectedRoles: [__WEBPACK_IMPORTED_MODULE_16__models_roles_enum__["a" /* Roles */].schoolAdmin, __WEBPACK_IMPORTED_MODULE_16__models_roles_enum__["a" /* Roles */].superAdmin]
        }
    },
    {
        path: 'students-import',
        component: __WEBPACK_IMPORTED_MODULE_10__components_students_students_upload_students_upload_component__["a" /* StudentsUploadComponent */],
        canActivate: [
            __WEBPACK_IMPORTED_MODULE_3__navigation_guards_auth_guard__["a" /* AuthGuard */]
        ],
        data: {
            expectedRoles: [__WEBPACK_IMPORTED_MODULE_16__models_roles_enum__["a" /* Roles */].schoolAdmin, __WEBPACK_IMPORTED_MODULE_16__models_roles_enum__["a" /* Roles */].superAdmin]
        }
    },
    // Classrooms
    {
        path: 'classrooms',
        component: __WEBPACK_IMPORTED_MODULE_11__components_classrooms_classrooms_grid_classrooms_grid_component__["a" /* ClassroomsGridComponent */],
        canActivate: [
            __WEBPACK_IMPORTED_MODULE_3__navigation_guards_auth_guard__["a" /* AuthGuard */]
        ],
        data: {
            expectedRoles: [__WEBPACK_IMPORTED_MODULE_16__models_roles_enum__["a" /* Roles */].schoolAdmin, __WEBPACK_IMPORTED_MODULE_16__models_roles_enum__["a" /* Roles */].superAdmin]
        }
    },
    // Teacher Flight Configuration
    {
        path: 'flight-view-configuration',
        component: __WEBPACK_IMPORTED_MODULE_20__components_flight_view_configuration_flight_view_configuration_component__["a" /* FlightViewConfigurationComponent */],
        canActivate: [
            __WEBPACK_IMPORTED_MODULE_3__navigation_guards_auth_guard__["a" /* AuthGuard */]
        ]
    },
    // Parents Dashboard
    {
        path: 'parents-dashboard',
        component: __WEBPACK_IMPORTED_MODULE_14__components_parents_dashboard_parents_dashboard_component__["a" /* ParentsDashboardComponent */],
        canActivate: [
            __WEBPACK_IMPORTED_MODULE_3__navigation_guards_auth_guard__["a" /* AuthGuard */]
        ],
        data: {
            expectedRoles: [__WEBPACK_IMPORTED_MODULE_16__models_roles_enum__["a" /* Roles */].parent]
        }
    },
    // Archive
    {
        path: 'archive',
        component: __WEBPACK_IMPORTED_MODULE_17__components_archive_archive_component__["a" /* ArchiveComponent */],
        canActivate: [__WEBPACK_IMPORTED_MODULE_3__navigation_guards_auth_guard__["a" /* AuthGuard */]],
        data: {
            expectedRoles: [__WEBPACK_IMPORTED_MODULE_16__models_roles_enum__["a" /* Roles */].schoolAdmin, __WEBPACK_IMPORTED_MODULE_16__models_roles_enum__["a" /* Roles */].superAdmin, __WEBPACK_IMPORTED_MODULE_16__models_roles_enum__["a" /* Roles */].classroomTeacher, __WEBPACK_IMPORTED_MODULE_16__models_roles_enum__["a" /* Roles */].dismissalTeacher]
        }
    }
    //{ path: '**', component: PageNotFoundComponent }
];
var AppRoutingModule = (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_router__["RouterModule"].forRoot(appRoutes
                //{
                //  enableTracing: true, // <-- debugging purposes only
                //}
                )
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_3__navigation_guards_auth_guard__["a" /* AuthGuard */]],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<app-header *ngIf=\"!isLoginPage\" [noMenu]=\"noMenu\"></app-header>\r\n<router-outlet></router-outlet>\r\n<app-loader></app-loader>\r\n<app-notification></app-notification>\r\n\r\n<div class=\"svg-sprite\">\r\n  <svg xmlns=\"http://www.w3.org/2000/svg\" ><symbol viewBox=\"0 0 210 135\" id=\"flights\" xmlns=\"http://www.w3.org/2000/svg\"><defs><style>.acls-1,.acls-2,.acls-3,.acls-4{fill:none;stroke-width:2.54px}.acls-1{stroke:#499fde;stroke-miterlimit:10}.acls-2,.acls-3,.acls-4{stroke:#faaf40;stroke-linecap:round;stroke-linejoin:round}.acls-3,.acls-4{stroke:#3a377a}.acls-4{opacity:0}.acls-5{fill:#828699}.acls-6{fill:#ec3d15}.acls-7{fill:#eff9f8}.acls-8{fill:#d8f5fc}.acls-9{fill:#8c1319}</style></defs><title>Artboard 29 copy 2</title><g id=\"aLayer_10\" data-name=\"Layer 10\"><circle class=\"acls-1\" cx=\"105\" cy=\"67.01\" r=\"59.5\"/><path class=\"acls-2\" d=\"M76.16 119.05A59.5 59.5 0 1 1 157 95.85\"/><path class=\"acls-3\" d=\"M45.51 66.48a59.49 59.49 0 1 1 119 1.06\"/><path class=\"acls-4\" d=\"M104.47 126.5a59.52 59.52 0 0 1-54.75-37.45\"/><path class=\"acls-5\" d=\"M130.13 58.65H137a.38.38 0 0 0 .39-.38 3.81 3.81 0 0 0-3.82-3.81h-4.87zM76.82 58.65h-6.89a.38.38 0 0 1-.38-.38 3.8 3.8 0 0 1 3.81-3.81h4.88z\"/><rect x=\"73.01\" y=\"79.97\" width=\"13.98\" height=\"10.83\" rx=\"2.8\" ry=\"2.8\"/><rect x=\"120.61\" y=\"79.97\" width=\"13.98\" height=\"10.83\" rx=\"2.8\" ry=\"2.8\"/><path class=\"acls-6\" d=\"M131.12 59.74c-1.16-9.53-6.42-16.53-12.93-16.53H89.3c-6.5 0-11.76 7-12.94 16.52-4.11 2.36-6.28 6.84-6.28 12 0 14.9 16.25 13.8 16.25 13.8h34.83s16.25 1.1 16.25-13.8c-.01-5.16-2.18-9.64-6.29-11.99z\"/><path class=\"acls-7\" d=\"M81.71 76.25a4.49 4.49 0 1 1 4.49-4.48 4.48 4.48 0 0 1-4.49 4.48z\"/><path class=\"acls-8\" d=\"M83.31 58a15.4 15.4 0 0 0-2.51.23c1.29-6.26 4.65-10.87 8.49-10.87h28.9c3.84 0 7.2 4.61 8.49 10.87-.43-.1-43.37-.23-43.37-.23z\"/><path class=\"acls-9\" d=\"M114.94 74.39h-22.4a1.39 1.39 0 0 1 0-2.74h22.4a1.39 1.39 0 0 1 0 2.74z\"/><path class=\"acls-7\" d=\"M125.77 76.25a4.49 4.49 0 1 1 4.48-4.48 4.48 4.48 0 0 1-4.48 4.48z\"/></g></symbol><symbol viewBox=\"0 0 32 32\" id=\"menu_archive\" xmlns=\"http://www.w3.org/2000/svg\"><defs><style>.bcls-1{fill:#cad7d8}.bcls-2{fill:#499fde}.bcls-3,.bcls-8{fill:none;stroke:#3a377a;stroke-linecap:round;stroke-linejoin:round}.bcls-3{stroke-width:1.45px}.bcls-4,.bcls-6{fill:#d8f5fc}.bcls-4{stroke:#fff;stroke-miterlimit:10;stroke-width:.53px}.bcls-5{fill:#3a377a}.bcls-7{fill:#444493}.bcls-8{stroke-width:2.35px;opacity:.5}</style></defs><title>menu_archive</title><g id=\"bLayer_9\" data-name=\"Layer 9\"><path class=\"bcls-1\" d=\"M24.19 24.76V6.46c0-1.27-.67-2.31-1.5-2.31H5.76c-.83 0-1.5 1-1.5 2.31v18.3c0 1.28.67 2.31 1.5 2.31h16.93c.83 0 1.5-1 1.5-2.31z\"/><rect class=\"bcls-2\" x=\"14.88\" y=\"6.26\" width=\"7.45\" height=\"7.92\" rx=\".79\" ry=\".79\"/><path class=\"bcls-3\" d=\"M20.61 24.15H6.28M20.61 20.17H6.28M14.22 16.2H6.28M12.88 12.23h-6.6M12.88 8.25h-6.6\"/><path class=\"bcls-4\" d=\"M27.71 29.47l-4.49-4.5\"/><path class=\"bcls-5\" d=\"M27.71 30.53a1 1 0 0 0 .75-.31 1.05 1.05 0 0 0 0-1.5L24 24.22a1.08 1.08 0 0 0-1.51 0 1.07 1.07 0 0 0 0 1.5l4.5 4.5a1.05 1.05 0 0 0 .72.31z\"/><path class=\"bcls-6\" d=\"M20.75 27.24a5.51 5.51 0 1 1 5.51-5.51 5.51 5.51 0 0 1-5.51 5.51z\"/><path class=\"bcls-7\" d=\"M20.75 17.16a4.57 4.57 0 1 1-4.57 4.57 4.58 4.58 0 0 1 4.57-4.57m0-1.88a6.45 6.45 0 1 0 6.45 6.45 6.45 6.45 0 0 0-6.45-6.45z\"/><path class=\"bcls-8\" d=\"M16.36 19.34h4.79M16.11 23.95h5.04\"/></g></symbol><symbol viewBox=\"0 0 32 32\" id=\"menu_cards\" xmlns=\"http://www.w3.org/2000/svg\"><defs><style>.ccls-1{fill:#cad7d8}.ccls-2{fill:#3a377a}</style></defs><title>menu_codes</title><g id=\"cLayer_9\" data-name=\"Layer 9\"><path class=\"ccls-1\" d=\"M28.59 23.05v-15a1.89 1.89 0 0 0-1.88-1.89H5.5a1.89 1.89 0 0 0-1.88 1.91v15a1.88 1.88 0 0 0 1.88 1.86h21.21a1.88 1.88 0 0 0 1.88-1.88z\"/><path class=\"ccls-2\" d=\"M8.46 9.51a.82.82 0 0 0-.82.81v10.47a.82.82 0 1 0 1.64 0V10.32a.82.82 0 0 0-.82-.81zM12.28 18.59a.82.82 0 0 0 .82-.82v-7.45a.82.82 0 0 0-1.64 0v7.45a.82.82 0 0 0 .82.82zM16.1 18.59a.82.82 0 0 0 .82-.82v-7.45a.82.82 0 1 0-1.63 0v7.45a.82.82 0 0 0 .81.82zM19.92 18.59a.82.82 0 0 0 .82-.82v-7.45a.82.82 0 1 0-1.63 0v7.45a.82.82 0 0 0 .81.82zM23.74 9.51a.81.81 0 0 0-.81.82v10.46a.82.82 0 1 0 1.63 0V10.32a.82.82 0 0 0-.82-.81z\"/><circle class=\"ccls-2\" cx=\"12.28\" cy=\"20.8\" r=\".84\"/><circle class=\"ccls-2\" cx=\"16.1\" cy=\"20.8\" r=\".84\"/><circle class=\"ccls-2\" cx=\"19.92\" cy=\"20.8\" r=\".84\"/></g></symbol><symbol viewBox=\"-18116 -17522 32 32\" id=\"menu_classrooms\" xmlns=\"http://www.w3.org/2000/svg\"><defs><style>.dcls-1,.cls-4,.dcls-5{fill:none}.dcls-1,.cls-4{stroke:#8c4d22;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10}.dcls-1{stroke-width:2px}.dcls-2{fill:#259356}.dcls-3{fill:#e03838}.cls-4{stroke-width:1.224px}</style></defs><g id=\"dSymbol_101_2\" data-name=\"Symbol 101 – 2\" transform=\"translate(-18136 -17841)\"><g id=\"dGroup_2565\" data-name=\"Group 2565\" transform=\"translate(-17 -125)\"><path id=\"dPath_376\" data-name=\"Path 376\" class=\"dcls-1\" d=\"M53.7 448.7s2 1.163 2 6.4\" transform=\"translate(-2 -.2)\"/><g id=\"dGroup_2392\" data-name=\"Group 2392\" transform=\"translate(42.562 447.519)\"><g id=\"dGroup_2391\" data-name=\"Group 2391\"><g id=\"dGroup_2390\" data-name=\"Group 2390\"><g id=\"dGroup_2388\" data-name=\"Group 2388\" transform=\"translate(11.457)\"><path id=\"dPath_377\" data-name=\"Path 377\" class=\"dcls-2\" d=\"M63.621 448.251a5.137 5.137 0 0 0-4.571-.332c-2.078.914-2.909 2.493-2.659 2.992s2.493 1.163 4.238.083a9.567 9.567 0 0 0 2.992-2.743z\" transform=\"translate(-56.348 -447.519)\"/></g><g id=\"dGroup_2389\" data-name=\"Group 2389\" transform=\"translate(0 4.944)\"><path id=\"dPath_378\" data-name=\"Path 378\" class=\"dcls-3\" d=\"M65.472 457.567c-2.742-5.983-8.892-4.072-9.889-2.576l-.083-.083v16.869c.748.083 1.08.748 3.158.748 3.075-.084 10.142-7.646 6.814-14.958z\" transform=\"translate(-44.748 -453.468)\"/><path id=\"dPath_379\" data-name=\"Path 379\" class=\"dcls-3\" d=\"M43.425 457.567c2.742-5.983 8.892-4.072 9.889-2.576l.083-.083v16.869c-.748.083-1.08.748-3.158.748-2.992-.084-10.139-7.646-6.814-14.958z\" transform=\"translate(-42.562 -453.468)\"/></g></g></g></g></g><path id=\"dRectangle_2981\" data-name=\"Rectangle 2981\" class=\"dcls-5\" transform=\"translate(20 319)\" d=\"M0 0h32v32H0z\"/></g></symbol><symbol viewBox=\"0 0 32 32\" id=\"menu_config\" xmlns=\"http://www.w3.org/2000/svg\"><defs><style>.ecls-1{fill:#3a377a}.ecls-2{fill:none;stroke:#499fde;stroke-miterlimit:10;stroke-width:2.2px}</style></defs><title>menu_config</title><g id=\"eLayer_9\" data-name=\"Layer 9\"><path class=\"ecls-1\" d=\"M27.9 15a.79.79 0 0 0-.76-.61 2.64 2.64 0 0 1-1.7-4.63.68.68 0 0 0 .1-.9 12.23 12.23 0 0 0-1.85-1.95.67.67 0 0 0-.91 0 2.74 2.74 0 0 1-3 .6 2.65 2.65 0 0 1-1.56-2.63.66.66 0 0 0-.57-.71A12 12 0 0 0 15 4.1a.67.67 0 0 0-.61.67 2.66 2.66 0 0 1-1.69 2.51 2.74 2.74 0 0 1-2.94-.74.68.68 0 0 0-.9-.1 12.11 12.11 0 0 0-2 1.87.67.67 0 0 0 0 .91 2.62 2.62 0 0 1 .6 3 2.76 2.76 0 0 1-2.63 1.56.65.65 0 0 0-.71.57 12.27 12.27 0 0 0-.07 2.71.8.8 0 0 0 .77.61 2.61 2.61 0 0 1 2.42 1.69 2.65 2.65 0 0 1-.73 2.94.68.68 0 0 0-.1.9 11.78 11.78 0 0 0 1.85 1.95.66.66 0 0 0 .91-.05 2.74 2.74 0 0 1 3-.6 2.65 2.65 0 0 1 1.56 2.63.66.66 0 0 0 .57.71 12.44 12.44 0 0 0 1.37.11 11.4 11.4 0 0 0 1.31 0 .67.67 0 0 0 .61-.67 2.66 2.66 0 0 1 1.69-2.51 2.74 2.74 0 0 1 2.94.74.68.68 0 0 0 .9.1 12.53 12.53 0 0 0 2-1.87.67.67 0 0 0-.05-.91 2.62 2.62 0 0 1-.6-3A2.68 2.68 0 0 1 27 18.22h.15a.66.66 0 0 0 .71-.57A12.27 12.27 0 0 0 27.9 15zm-11.97 5A4 4 0 1 1 20 16.12 4 4 0 0 1 15.93 20z\" id=\"eSettings\"/><circle class=\"ecls-2\" cx=\"16\" cy=\"16\" r=\"4.49\"/></g></symbol><symbol viewBox=\"0 0 32 32\" id=\"menu_flights\" xmlns=\"http://www.w3.org/2000/svg\"><defs><style>.fcls-1{fill:#a0a4c0}.fcls-2{fill:#828699}.fcls-3{fill:#499fde}.fcls-4{fill:#eff9f8}.fcls-5{fill:#d8f5fc}.fcls-6{fill:#235066}.fcls-7{fill:#ec3d15}.fcls-8{fill:#8c1319}</style></defs><title>menu_flights</title><g id=\"fLayer_9\" data-name=\"Layer 9\"><path class=\"fcls-1\" d=\"M19.76 12.06h2a.11.11 0 0 0 .11-.11 1.1 1.1 0 0 0-1.1-1.1h-1.4z\"/><path class=\"fcls-2\" d=\"M4.4 12.06h-2a.11.11 0 0 1-.1-.06 1.1 1.1 0 0 1 1.1-1.1h1.41z\"/><rect x=\"3.3\" y=\"18.21\" width=\"4.03\" height=\"3.12\" rx=\".81\" ry=\".81\"/><rect x=\"17.02\" y=\"18.21\" width=\"4.03\" height=\"3.12\" rx=\".81\" ry=\".81\"/><path class=\"fcls-3\" d=\"M20.05 12.38c-.34-2.75-1.85-4.77-3.73-4.77H8c-1.88 0-3.4 2-3.73 4.77a3.81 3.81 0 0 0-1.81 3.46c0 4.3 4.68 4 4.68 4h10s4.68.32 4.68-4a3.83 3.83 0 0 0-1.77-3.46z\"/><path class=\"fcls-4\" d=\"M5.81 17.14a1.3 1.3 0 1 1 1.29-1.3 1.29 1.29 0 0 1-1.29 1.3z\"/><path class=\"fcls-5\" d=\"M6.27 11.87a5.67 5.67 0 0 0-.73.06C5.92 10.13 6.89 8.8 8 8.8h8.33c1.11 0 2.08 1.33 2.45 3.13-.13-.02-12.51-.06-12.51-.06z\"/><path class=\"fcls-6\" d=\"M15.39 16.6H8.93a.4.4 0 0 1 0-.79h6.46a.4.4 0 0 1 0 .79z\"/><path class=\"fcls-4\" d=\"M18.51 17.14a1.3 1.3 0 1 1 1.29-1.3 1.3 1.3 0 0 1-1.29 1.3z\"/><path class=\"fcls-2\" d=\"M27 15.21h2.14a.13.13 0 0 0 .12-.12 1.18 1.18 0 0 0-1.19-1.18H26.6zM10.49 15.21H8.35a.12.12 0 0 1-.12-.12 1.18 1.18 0 0 1 1.18-1.18h1.51z\"/><rect x=\"9.3\" y=\"21.83\" width=\"4.34\" height=\"3.36\" rx=\".87\" ry=\".87\"/><rect x=\"24.08\" y=\"21.83\" width=\"4.34\" height=\"3.36\" rx=\".87\" ry=\".87\"/><path class=\"fcls-7\" d=\"M27.34 15.55c-.36-3-2-5.13-4-5.13h-9c-2 0-3.65 2.17-4 5.12a4.16 4.16 0 0 0-1.95 3.74c0 4.63 5 4.29 5 4.29h10.86s5.05.34 5.05-4.29a4.14 4.14 0 0 0-1.96-3.73z\"/><path class=\"fcls-4\" d=\"M12 20.67a1.39 1.39 0 1 1 1.4-1.39 1.39 1.39 0 0 1-1.4 1.39z\"/><path class=\"fcls-5\" d=\"M12.5 15a4.81 4.81 0 0 0-.78.07c.4-2 1.44-3.38 2.64-3.38h9c1.19 0 2.24 1.43 2.64 3.38-.17-.02-13.5-.07-13.5-.07z\"/><path class=\"fcls-8\" d=\"M22.32 20.09h-7a.39.39 0 0 1-.37-.42.4.4 0 0 1 .37-.43h7a.41.41 0 0 1 .37.43.4.4 0 0 1-.37.42z\"/><path class=\"fcls-4\" d=\"M25.68 20.67a1.39 1.39 0 1 1 1.39-1.39 1.39 1.39 0 0 1-1.39 1.39z\"/></g></symbol><symbol viewBox=\"0 0 32 32\" id=\"menu_scanner\" xmlns=\"http://www.w3.org/2000/svg\"><defs><style>.gcls-1{fill:#499fde}.gcls-2{fill:#6e6aa5}.gcls-3{fill:#1f154a}.gcls-4{fill:none;stroke:#6e6aa5;stroke-linecap:round;stroke-linejoin:round;stroke-width:4.24px}</style></defs><title>menu_scanner</title><g id=\"gLayer_9\" data-name=\"Layer 9\"><path class=\"gcls-1\" d=\"M26.84 3.85a8.07 8.07 0 0 1-3.19 7.22S6.87 14.6 6.26 9.16C5.9 5.91 15.3 2 26.84 3.85z\"/><path class=\"gcls-2\" d=\"M12.85 24.87a.94.94 0 0 0 .47 1.13l.82.4-8.78-1s1.81-4.81 2.41-7c1.14-4.13 2.73-5.13.39-7.07 0 0 1.67-1.87 5.21-1.37s4 2.37 4 2.37z\"/><path class=\"gcls-3\" d=\"M20.34 11.64a6.5 6.5 0 0 0-2.21 3.54.54.54 0 0 1-.77.37 2.76 2.76 0 0 1-1.31-1.35 1.68 1.68 0 0 1 .65-2.14z\"/><path class=\"gcls-4\" d=\"M7.45 25.74l5.28 2.29\"/></g></symbol><symbol viewBox=\"0 0 32 32\" id=\"menu_students\" xmlns=\"http://www.w3.org/2000/svg\"><defs><style>.hcls-1,.hcls-13,.hcls-14,.hcls-15,.hcls-5,.hcls-6{fill:none}.hcls-2{clip-path:url(#hclip-path)}.hcls-3{fill:#5f6468}.hcls-4{fill:#499fde}.hcls-5{stroke:#f2b186;stroke-width:5px}.hcls-13,.hcls-14,.hcls-15,.hcls-5,.hcls-6{stroke-linecap:round;stroke-linejoin:round}.hcls-6{stroke:#7a8084;stroke-width:3.2px}.hcls-7{fill:#f4c199}.hcls-8{fill:#eb7826}.hcls-9{fill:#efb289}.hcls-10,.hcls-11{fill:#ad4732;opacity:.5}.hcls-11{fill:#e8754d}.hcls-12{fill:#491b0d}.hcls-13,.hcls-14{stroke:#8c4d22}.hcls-14{stroke-width:.7px}.hcls-15{stroke:#eb7826;stroke-width:5.69px}</style><clipPath id=\"hclip-path\"><path class=\"hcls-1\" d=\"M0 0h32v32H0z\"/></clipPath></defs><title>menu_students</title><g class=\"hcls-2\" id=\"hLayer_9\" data-name=\"Layer 9\"><path class=\"hcls-3\" d=\"M11.09 52.74l10.48-.19a6.62 6.62 0 0 0 6.48-6.72l-2.16-15.25a8 8 0 0 0-7.83-6.65l-4.91.07c-3.63.06-6.34 2.7-7 6.49L3.5 45.4c.06 3.6 3.96 7.4 7.59 7.34z\"/><path class=\"hcls-4\" d=\"M8.77 26.64a2.74 2.74 0 0 0-3.53 1.05l-5 9.42 5.49 2.8 4.3-9.8a2.74 2.74 0 0 0-1.26-3.47zM23.23 26.64a2.74 2.74 0 0 1 3.53 1.05l5 9.42-5.49 2.8-4.27-9.8a2.74 2.74 0 0 1 1.23-3.47z\"/><path class=\"hcls-4\" d=\"M22.32 49.23l-12.7-.13a2.57 2.57 0 0 1-2.69-2.91l1-15.27c.06-.22.38-4.66 3.55-4.66l7.22.09a4.64 4.64 0 0 1 4.71 4.57l1.4 15.27a2.56 2.56 0 0 1-2.49 3.04z\"/><path class=\"hcls-5\" d=\"M16.12 22.7v4.7\"/><path class=\"hcls-6\" d=\"M21.32 26.88a19.22 19.22 0 0 0 3 11.74M10.85 26.88a19.28 19.28 0 0 1-3 11.74\"/><path class=\"hcls-7\" d=\"M5.65 11.51a11.23 11.23 0 0 0 8 13.88 11.11 11.11 0 0 0 13.61-8.26 11.32 11.32 0 0 0-7.94-14 11.25 11.25 0 0 0-13.67 8.38z\"/><path class=\"hcls-8\" d=\"M5.32 13.74s5.83 3.68 5.15-6.14c0 0-3.12-2.32-5.11.68-2.16 3.27-.04 5.46-.04 5.46z\"/><path class=\"hcls-8\" d=\"M7.2 11.07c.1.32 15.59-6.52 15.59-6.52A11.43 11.43 0 0 0 19 2.78C12.83 1.21 5.28 4.91 7.2 11.07zM27.66 14.27s-5.2 1.28-4.51-8.55c0 0 .14-3 2.83 1.3s1.68 7.25 1.68 7.25z\"/><ellipse class=\"hcls-7\" cx=\"5.96\" cy=\"16.72\" rx=\"3.05\" ry=\"3.05\"/><path class=\"hcls-9\" d=\"M6.07 18a1.31 1.31 0 0 1-.21-2.61z\"/><rect class=\"hcls-10\" x=\"14.81\" y=\"17.52\" width=\"2.38\" height=\".98\" rx=\".49\" ry=\".49\" transform=\"rotate(178.56 16.001 18.014)\"/><ellipse class=\"hcls-11\" cx=\"10.47\" cy=\"17.95\" rx=\"1.04\" ry=\".82\"/><ellipse class=\"hcls-11\" cx=\"22.11\" cy=\"17.95\" rx=\"1.04\" ry=\".82\"/><circle class=\"hcls-12\" cx=\"19.65\" cy=\"15.67\" r=\".75\"/><circle class=\"hcls-12\" cx=\"12.81\" cy=\"15.67\" r=\".75\"/><path class=\"hcls-13\" d=\"M21.71 13.68a3.74 3.74 0 0 0-1.29-.63 3 3 0 0 0-1.34.1\"/><path class=\"hcls-14\" d=\"M17.56 21.36a1.89 1.89 0 0 1-1.56.74 1.34 1.34 0 0 1-1.36-.74\"/><path class=\"hcls-13\" d=\"M11.07 12.88a2.63 2.63 0 0 1 1.07-.42 1.85 1.85 0 0 1 1 .06\"/><ellipse class=\"hcls-7\" cx=\"26.38\" cy=\"16.85\" rx=\"3.05\" ry=\"3.05\"/><path class=\"hcls-9\" d=\"M26.28 18.15a1.3 1.3 0 0 0 .21-2.6z\"/><path class=\"hcls-15\" d=\"M10.12 6.13s7.44 4.14 15.12-2.69\"/></g></symbol><symbol viewBox=\"0 0 32 32\" id=\"menu_users\" xmlns=\"http://www.w3.org/2000/svg\"><defs><style>.icls-1,.icls-11,.icls-15,.icls-16{fill:none}.icls-2{clip-path:url(#iclip-path)}.icls-3{fill:#130a2d}.icls-4{fill:#f5f4f9}.icls-5{fill:#eaac81}.icls-6{fill:#fff}.icls-7{fill:#ccc}.icls-8{fill:#1f193a}.icls-9{fill:#efba93}.icls-10{fill:#8c4d22}.icls-11,.icls-15,.icls-16{stroke:#8c4d22;stroke-linecap:round}.icls-11,.icls-16{stroke-miterlimit:10}.icls-11{stroke-width:.78px}.icls-12{fill:#efb289}.icls-13{fill:#ad4732;opacity:.8}.icls-14{fill:#491b0d}.icls-15{stroke-linejoin:round;stroke-width:.95px}.icls-16{stroke-width:5px}</style><clipPath id=\"iclip-path\"><path class=\"icls-1\" d=\"M0 0h32v32H0z\"/></clipPath></defs><title>menu_users</title><g id=\"iLayer_9\" data-name=\"Layer 9\"><g class=\"icls-2\"><path class=\"icls-3\" d=\"M26 55.48l-21.81.06a4.35 4.35 0 0 1-4.38-4.33V39a9.57 9.57 0 0 1 9.54-9.54h11.4A9.56 9.56 0 0 1 30.29 39v12.21A4.29 4.29 0 0 1 26 55.48z\"/><path class=\"icls-4\" d=\"M15.41 54.83l5.88-25.4a48.21 48.21 0 0 0-5.55-.72c-2.31-.14-6.74 1.1-6.74 1.1a184.26 184.26 0 0 0 6.41 25.02z\"/><path class=\"icls-5\" d=\"M10 29.17l-.12-16.92h10.2l.08 19.89c-.08 2.32-2.14 2.42-5.11 2.22A5.55 5.55 0 0 1 10 29.17z\"/><path class=\"icls-6\" d=\"M10 28.71s-.61 3.29 4.75 5.57c0 0-1.86-.3-3.65 3.45l-2.23-8.28a1.2 1.2 0 0 1 1.13-.74z\"/><path class=\"icls-7\" d=\"M10 28.71l5.44 5.57s-2.52-.3-4.31 3.45l-2.26-8.28z\"/><path class=\"icls-7\" d=\"M20.15 28.83l-4.74 5.44s2.14-.06 3.93 3.7l1.95-8.54z\"/><path class=\"icls-8\" d=\"M8.87 29.45l6.54 25.38-6.66-14.02 1.57-3.31-2.77-2.16 1.32-5.89zM21.29 29.43l-5.88 25.4 6.66-14.02-1.56-3.31 2.76-2.16-1.98-5.91z\"/></g><path class=\"icls-9\" d=\"M15.73 27.4h-1a6.56 6.56 0 0 1-6.91-6.78L7.94 8c0-4.61 4.93-5.82 6.53-5.81h2c3.42 0 6.18 2.43 6.15 5.37l-.12 12.93c-.02 3.85-2.38 6.92-6.77 6.91z\"/><path class=\"icls-10\" d=\"M22.09 9.72a17.3 17.3 0 0 1-.36 3.91s.41-.51 1.83 0l-.66-6.18-2.54-3.23a11.5 11.5 0 0 1 1.73 5.5z\"/><path class=\"icls-11\" d=\"M7 12.25s-3-10 8-10c10 0 7.82 10 7.82 10\"/><path class=\"icls-10\" d=\"M7.92 9.72a17 17 0 0 0 .37 3.91s-.41-.51-1.84 0l.66-6.21 2.54-3.2a11.62 11.62 0 0 0-1.73 5.5z\"/><ellipse class=\"icls-9\" cx=\"22.85\" cy=\"16.16\" rx=\"2.66\" ry=\"3.22\" transform=\"rotate(-.48 22.614 15.613)\"/><path class=\"icls-12\" d=\"M22.6 17.55a1.49 1.49 0 1 0-.06-3z\"/><path class=\"icls-13\" d=\"M14.29 16.15h1.54a.54.54 0 0 1 .54.54.54.54 0 0 1-.54.54h-1.54a.54.54 0 0 1-.54-.54.53.53 0 0 1 .54-.54z\"/><ellipse class=\"icls-9\" cx=\"7.98\" cy=\"16.16\" rx=\"3.22\" ry=\"2.66\" transform=\"rotate(-89.52 7.981 16.155)\"/><path class=\"icls-12\" d=\"M8.23 17.55a1.49 1.49 0 1 1 .06-3z\"/><path class=\"icls-6\" d=\"M14.91 24.89A3.06 3.06 0 0 0 18 21.83h-6.16a3.06 3.06 0 0 0 3.07 3.06z\"/><circle class=\"icls-14\" cx=\"17.86\" cy=\"14.97\" r=\".76\"/><path class=\"icls-15\" d=\"M10.13 12a4.13 4.13 0 0 1 1.47-.4 3.19 3.19 0 0 1 1.4.4\"/><circle class=\"icls-14\" cx=\"11.9\" cy=\"14.97\" r=\".76\"/><path class=\"icls-15\" d=\"M19.7 12a4.06 4.06 0 0 0-1.44-.51 3 3 0 0 0-1.42.25\"/><path class=\"icls-10\" d=\"M14.92 18a4 4 0 0 0-4 4h8a4 4 0 0 0-4-4z\"/><path class=\"icls-16\" d=\"M9.34 6.87s10.59.72 13-3.24\"/><path class=\"icls-10\" d=\"M7.39 5S16.46 8.13 21 4.28c0 0-.3-3-6.59-2.75S7.39 5 7.39 5z\"/></g></symbol><symbol viewBox=\"0 0 210 135\" id=\"scanner\" xmlns=\"http://www.w3.org/2000/svg\"><defs><style>.jcls-1{fill:#dceaea}.jcls-2{fill:#3a377a}.jcls-3{fill:#ec3d15}.jcls-4{fill:#e73e36;opacity:.37}.jcls-5{fill:#f4c199}.jcls-6{fill:#499fde}.jcls-7{fill:#6e6aa5}.jcls-8{fill:#1f154a}.jcls-10,.jcls-11,.jcls-9{fill:none;stroke-linecap:round;stroke-linejoin:round}.jcls-9{stroke:#6e6aa5;stroke-width:15.21px}.jcls-10,.jcls-11{stroke:#f4c199}.jcls-10{stroke-width:15.74px}.jcls-11{stroke-width:11.8px}</style></defs><title>Artboard 29 copy</title><g id=\"jLayer_10\" data-name=\"Layer 10\"><path class=\"jcls-1\" d=\"M91.83 72.39V33a5 5 0 0 0-5-4.95H31.17a5 5 0 0 0-5 4.95v39.39a5 5 0 0 0 5 5h55.7a5 5 0 0 0 5-5z\"/><path class=\"jcls-2\" d=\"M39 36.82A2.15 2.15 0 0 0 36.8 39v27.47a2.15 2.15 0 0 0 4.3 0V39a2.15 2.15 0 0 0-2.1-2.18zM49 60.67a2.15 2.15 0 0 0 2.15-2.15V39a2.15 2.15 0 0 0-4.3 0v19.52A2.15 2.15 0 0 0 49 60.67z\"/><path class=\"jcls-3\" d=\"M19.09 31.14A2.15 2.15 0 0 0 21.24 29v-4.57a1.32 1.32 0 0 1 1.31-1.32h4.57a2.15 2.15 0 0 0 0-4.3h-4.57a5.62 5.62 0 0 0-5.61 5.62V29a2.14 2.14 0 0 0 2.15 2.14zM27.12 82.32h-4.57A1.33 1.33 0 0 1 21.24 81v-4.57a2.15 2.15 0 0 0-4.3 0V81a5.62 5.62 0 0 0 5.61 5.62h4.57a2.15 2.15 0 0 0 0-4.3zM99.05 74.29a2.14 2.14 0 0 0-2.15 2.14V81a1.32 1.32 0 0 1-1.32 1.32H91a2.15 2.15 0 1 0 0 4.3h4.56A5.62 5.62 0 0 0 101.2 81v-4.57a2.14 2.14 0 0 0-2.15-2.14zM95.58 18.81H91a2.15 2.15 0 1 0 0 4.3h4.56a1.33 1.33 0 0 1 1.32 1.32V29a2.15 2.15 0 0 0 4.3 0v-4.57a5.62 5.62 0 0 0-5.6-5.62z\"/><path class=\"jcls-2\" d=\"M59 60.67a2.15 2.15 0 0 0 2.15-2.15V39a2.15 2.15 0 0 0-4.3 0v19.52A2.15 2.15 0 0 0 59 60.67zM69.06 60.67a2.15 2.15 0 0 0 2.15-2.15V39a2.15 2.15 0 1 0-4.3 0v19.52a2.15 2.15 0 0 0 2.15 2.15zM79.09 36.82A2.16 2.16 0 0 0 76.94 39v27.5a2.15 2.15 0 1 0 4.3 0V39a2.15 2.15 0 0 0-2.15-2.18z\"/><circle class=\"jcls-2\" cx=\"48.98\" cy=\"66.5\" r=\"2.22\"/><circle class=\"jcls-2\" cx=\"59.02\" cy=\"66.5\" r=\"2.22\"/><circle class=\"jcls-2\" cx=\"69.06\" cy=\"66.5\" r=\"2.22\"/><path class=\"jcls-4\" d=\"M128.26 57.48l-81.5 6.08V43.48l81.5 4.04v9.96z\"/><circle class=\"jcls-5\" cx=\"172.34\" cy=\"93.36\" r=\"21.61\"/><path class=\"jcls-6\" d=\"M102.9 40.81s-1.35 14.39 13.67 24.81c0 0 61.05 7.29 61.51-12.32.27-11.74-34.53-22.61-75.18-12.49z\"/><path class=\"jcls-7\" d=\"M159.5 111.5a3.37 3.37 0 0 1-1.32 4.32l-2.81 1.68 31-6.38s-8-16.62-10.81-24.17c-5.36-14.38-11.36-17.43-3.62-25.1 0 0-6.55-6.16-19-3.27s-13.69 9.74-13.69 9.74z\"/><path class=\"jcls-8\" d=\"M128.57 66.6s6.86 4.36 9 12a1.92 1.92 0 0 0 2.86 1.07 9.91 9.91 0 0 0 4.27-5.21c1.8-5.08-3-7.47-3-7.47z\"/><path class=\"jcls-9\" d=\"M179.05 112.92l-18.15 9.85\"/><path class=\"jcls-10\" d=\"M164.93 73.06l6.95 4.43M160.85 109.08l-3.78-7.86\"/><path class=\"jcls-11\" d=\"M147.84 93.88l-2.41-5.07\"/></g></symbol><symbol viewBox=\"0 0 210 135\" id=\"school\" xmlns=\"http://www.w3.org/2000/svg\"><defs><style>.kcls-1{fill:#499fde}.kcls-11,.kcls-15,.kcls-16,.kcls-17,.kcls-18,.kcls-19,.kcls-2,.kcls-21,.kcls-7{fill:none}.kcls-2{stroke:#417ba3;stroke-width:3.94px}.kcls-2,.kcls-7{stroke-linecap:round;stroke-linejoin:round}.kcls-3{fill:#e8cf69}.kcls-4{fill:#eb7826}.kcls-5{fill:#f7e07f}.kcls-6{fill:#fff;stroke:#1d1147;stroke-width:.86px}.kcls-11,.kcls-15,.kcls-16,.kcls-17,.kcls-18,.kcls-19,.kcls-21,.kcls-6,.kcls-8{stroke-miterlimit:10}.kcls-11,.kcls-15,.kcls-16,.kcls-17,.kcls-18,.kcls-19,.kcls-7{stroke:#362360}.kcls-7{stroke-width:1.86px}.kcls-8{fill:#291c4c;stroke:#ec3d15;stroke-width:2.63px}.kcls-9{fill:#453387}.kcls-10{fill:#ec3d15}.kcls-11{stroke-width:1.62px}.kcls-12{fill:#009342}.kcls-13{fill:#00a551}.kcls-14{fill:#00bf56}.kcls-15{stroke-width:2.83px}.kcls-16{stroke-width:1.89px}.kcls-17{stroke-width:1.08px}.kcls-18{stroke-width:2.71px}.kcls-19{stroke-width:1.55px}.kcls-20{fill:#362360}.kcls-21{stroke:#f6f6f6;stroke-width:2.58px}</style></defs><title>Artboard 29</title><g id=\"kLayer_10\" data-name=\"Layer 10\"><path class=\"kcls-1\" d=\"M105.25 7.44a3 3 0 0 1 2.46.6A7.15 7.15 0 0 0 112 9.51c3.19 0 4.71-2.43 8.2-2.43a10.46 10.46 0 0 1 6.23 2.43v12.91s-4-1.82-6.84-1.82-3.6 1.82-7.31 1.82-4.93-1.81-4.93-1.81v8.83s-.29 2-2 2-1.84-2.22-1.84-2.22V9.32a2 2 0 0 1 1.74-1.88z\"/><path class=\"kcls-2\" d=\"M105.5 8.43v21.65\"/><path class=\"kcls-3\" d=\"M161.14 109.63H49.11V62.21L68.69 44.6h76.56l15.89 17.44v47.59z\"/><path class=\"kcls-3\" d=\"M49.11 62.21h36.94v46.91H49.11z\"/><path class=\"kcls-4\" d=\"M149.1 40.93H61.9L43.32 63.78h124.36L149.1 40.93z\"/><path class=\"kcls-5\" d=\"M79.58 56.92v52.2h49.58V55.13l-23.69-23.72-25.89 25.51z\"/><circle class=\"kcls-6\" cx=\"105.04\" cy=\"66.19\" r=\"7.25\"/><path class=\"kcls-7\" d=\"M102.53 69.39l2.86-2.86v-4.26\"/><path class=\"kcls-1\" d=\"M133.4 80.43h6.33v6.33h-6.33zM148.45 80.43h6.33v6.33h-6.33zM133.4 93.2h6.33v6.33h-6.33zM148.45 93.2h6.33v6.33h-6.33zM54.48 80.43h6.33v6.33h-6.33zM69.52 80.43h6.33v6.33h-6.33zM54.48 93.2h6.33v6.33h-6.33zM69.52 93.2h6.33v6.33h-6.33z\"/><path class=\"kcls-8\" d=\"M97.51 110.94h15.15V92.83s-.09-6.4-7.62-6.4-7.53 6.47-7.53 6.47z\"/><path class=\"kcls-9\" d=\"M46.23 109.18h119.95v3.45H46.23z\"/><path class=\"kcls-10\" d=\"M101.65 30.72L75.13 56.15a2.42 2.42 0 0 0 1.68 4.17 2.43 2.43 0 0 0 1.67-.68l27-25.88 27 25.87a2.46 2.46 0 0 0 1.7.68 2.42 2.42 0 0 0 1.65-4.17l-26.48-25.42a5.56 5.56 0 0 0-4-1.55 5.51 5.51 0 0 0-3.7 1.55z\"/><path class=\"kcls-11\" d=\"M16.16 90.07A7.93 7.93 0 0 0 24.09 98h11.66\"/><circle class=\"kcls-12\" cx=\"16.74\" cy=\"86.84\" r=\"7.07\"/><circle class=\"kcls-13\" cx=\"35.75\" cy=\"79.3\" r=\"15.28\"/><path class=\"kcls-11\" d=\"M49.61 95.89a6.66 6.66 0 0 1-6.61 6.66h-7.2\"/><circle class=\"kcls-14\" cx=\"51.03\" cy=\"91.12\" r=\"8.21\"/><path class=\"kcls-15\" d=\"M35.75 79.3v35.2\"/><path class=\"kcls-11\" d=\"M35.75 88.38l-5.47-5.47M35.75 87.51l4.04-4.03\"/><circle class=\"kcls-13\" cx=\"169.75\" cy=\"90.34\" r=\"12.13\"/><path class=\"kcls-16\" d=\"M169.44 88.57v23.87\"/><path class=\"kcls-17\" d=\"M168.92 99.6l-3.66-3.67M169.44 93.94l4.49-4.49\"/><path class=\"kcls-14\" d=\"M188.81 98.92c-19.38 0-10.73-40.51 0-40.51s19.39 40.51 0 40.51z\"/><path class=\"kcls-18\" d=\"M188.37 79.02v34.21\"/><path class=\"kcls-19\" d=\"M187.63 94.82l-5.25-5.25M188.37 86.71l6.43-6.43\"/><path class=\"kcls-20\" d=\"M200.33 115.06H20.78l.16-2.81h179.39v2.81z\"/><circle class=\"kcls-10\" cx=\"104.44\" cy=\"119.05\" r=\"15\"/><path class=\"kcls-21\" d=\"M104.44 112.16v13.78M111.33 119.05H97.55\"/></g></symbol><symbol viewBox=\"0 0 210 135\" id=\"students\" xmlns=\"http://www.w3.org/2000/svg\"><defs><style>.lcls-1,.lcls-10,.lcls-11,.lcls-16,.lcls-18,.lcls-19,.lcls-22,.lcls-23,.lcls-26,.lcls-4,.lcls-6,.lcls-7{fill:none}.lcls-2{clip-path:url(#lclip-path)}.lcls-3{fill:#5f6468}.lcls-4{stroke:#f4c199;stroke-width:10.2px}.lcls-10,.lcls-11,.lcls-16,.lcls-18,.lcls-19,.lcls-20,.lcls-22,.lcls-23,.lcls-24,.lcls-4,.lcls-6,.lcls-7{stroke-linecap:round}.lcls-10,.lcls-11,.lcls-16,.lcls-4,.lcls-6,.lcls-7{stroke-linejoin:round}.lcls-5{fill:#499fde}.lcls-6{stroke:#f2b186;stroke-width:13.08px}.lcls-7{stroke:#7a8084;stroke-width:8.35px}.lcls-8{fill:#8c4d22}.lcls-9{fill:#f4c199}.lcls-10,.lcls-11,.lcls-16{stroke:#8c4d22}.lcls-10{stroke-width:16.77px}.lcls-11{stroke-width:18.29px}.lcls-12{fill:#efb289}.lcls-13,.lcls-14{fill:#ad4732;opacity:.5}.lcls-14{fill:#e8754d}.lcls-15{fill:#491b0d}.lcls-16{stroke-width:1.76px}.lcls-17{fill:#cad7d8}.lcls-18,.lcls-19,.lcls-20,.lcls-22,.lcls-23,.lcls-24{stroke:#00a551}.lcls-18,.lcls-19,.lcls-20,.lcls-22,.lcls-23,.lcls-24,.lcls-26{stroke-miterlimit:10}.lcls-18,.lcls-20{stroke-width:1.54px}.lcls-19{stroke-width:2.82px}.lcls-20,.lcls-24{fill:#fff}.lcls-21{fill:#dceaea}.lcls-22,.lcls-24{stroke-width:1.77px}.lcls-23{stroke-width:3.24px}.lcls-25{fill:#ec3d15}.lcls-26{stroke:#f6f6f6;stroke-width:2.62px}</style><clipPath id=\"lclip-path\"><path class=\"lcls-1\" d=\"M147.17 68.21c0 29.14-19.7 49.74-19.7 49.74H27.63S-7.51 5.62 78.29 1.84c58.07-2.56 68.88 37.22 68.88 66.37z\"/></clipPath></defs><title>Artboard 29 copy 4</title><g id=\"lLayer_10\" data-name=\"Layer 10\"><g class=\"lcls-2\"><path class=\"lcls-3\" d=\"M64.05 148.55l27.28-2.37A17.3 17.3 0 0 0 107 127.49l-8.37-39.38C95.66 77.49 86.47 71.38 77 72.2l-12.77 1.11c-9.44.82-16 8.18-17.09 18.19l-4.2 39.29c.82 9.46 11.66 18.58 21.11 17.76z\"/><path class=\"lcls-4\" d=\"M42.15 108.49l-3.2 13.4.51 20.84\"/><path class=\"lcls-5\" d=\"M53.29 80.94a7.16 7.16 0 0 0-9 3.36l-11.43 25.47 14.82 6.31 9.44-26.31a7.18 7.18 0 0 0-3.83-8.83z\"/><path class=\"lcls-4\" d=\"M105.81 104.08l5.02 12.82 2.37 20.71\"/><path class=\"lcls-5\" d=\"M91 78.32a7.17 7.17 0 0 1 9.39 2.09l14.83 23.65-13.8 8.29L88.4 87.6a7.19 7.19 0 0 1 2.6-9.28z\"/><path class=\"lcls-5\" d=\"M92.7 137.38l-33.13 2c-4.43.38-7.52-2.71-7.55-7.11l-.2-40c.11-.59.15-12.21 8.39-12.79l18.86-1a12.11 12.11 0 0 1 13.1 11L98.58 129a6.7 6.7 0 0 1-5.88 8.38z\"/><path class=\"lcls-6\" d=\"M71.73 69.32l.86 12.27\"/><path class=\"lcls-7\" d=\"M86 79.3a50.37 50.37 0 0 0 10 30.06M58.75 81.19A50.32 50.32 0 0 1 53 112.34\"/><circle class=\"lcls-8\" cx=\"60.81\" cy=\"38.09\" r=\"26.18\"/><circle class=\"lcls-8\" cx=\"74.8\" cy=\"34.27\" r=\"27.74\"/><ellipse class=\"lcls-9\" cx=\"71.18\" cy=\"47.28\" rx=\"29.96\" ry=\"30.01\" transform=\"rotate(-3.97 71.16 47.242)\"/><path class=\"lcls-10\" d=\"M49.77 31.59s-2.06 4.32-9 9.89\"/><path class=\"lcls-11\" d=\"M91 26.17s4.52 2.64 5.37 10.83\"/><path class=\"lcls-10\" d=\"M56.08 21.25s9 8.43 29.88 5.27M73.72 18.69s9.88 3.73 19.75 1.1\"/><ellipse class=\"lcls-9\" cx=\"97.43\" cy=\"52.27\" rx=\"7.97\" ry=\"7.98\" transform=\"rotate(-3.97 97.42 52.196)\"/><path class=\"lcls-12\" d=\"M97.39 55.69a3.42 3.42 0 0 0 .09-6.84z\"/><ellipse class=\"lcls-9\" cx=\"44.19\" cy=\"55.96\" rx=\"7.97\" ry=\"7.98\" transform=\"rotate(-3.97 44.135 55.983)\"/><path class=\"lcls-12\" d=\"M44.71 59.34a3.41 3.41 0 0 1-1-6.75z\"/><rect class=\"lcls-13\" x=\"67.2\" y=\"51.6\" width=\"6.23\" height=\"2.56\" rx=\"1.28\" ry=\"1.28\" transform=\"rotate(174.6 70.313 52.88)\"/><ellipse class=\"lcls-14\" cx=\"55.87\" cy=\"53.71\" rx=\"2.71\" ry=\"2.14\" transform=\"rotate(-3.97 55.916 53.647)\"/><ellipse class=\"lcls-14\" cx=\"86.22\" cy=\"51.61\" rx=\"2.71\" ry=\"2.14\" transform=\"rotate(-3.97 86.172 51.662)\"/><circle class=\"lcls-15\" cx=\"79.4\" cy=\"46.12\" r=\"1.81\" transform=\"rotate(-3.97 79.432 46.084)\"/><circle class=\"lcls-15\" cx=\"61.55\" cy=\"47.36\" r=\"1.81\" transform=\"translate(-3.13 4.37)\"/><path class=\"lcls-16\" d=\"M84.39 40.54a10 10 0 0 0-3.45-1.39 7.66 7.66 0 0 0-3.5.5M75 61.33a4.89 4.89 0 0 1-4 2.21c-2.86.2-3.67-1.69-3.67-1.69M56.53 40.38a6.88 6.88 0 0 1 2.69-1.28 5.11 5.11 0 0 1 2.75 0\"/></g><rect class=\"lcls-17\" x=\"95.45\" y=\"45.09\" width=\"56.84\" height=\"75.32\" rx=\"8.64\" ry=\"8.64\" transform=\"rotate(18.6 123.881 82.768)\"/><path class=\"lcls-18\" d=\"M134.27 55.47l17.68 6.14M131.59 63.21l17.68 6.14M128.9 70.95l17.68 6.14\"/><path class=\"lcls-19\" d=\"M116.04 49.12l4.85 18.39M125.82 52.52L110.6 63.93\"/><path class=\"lcls-20\" d=\"M130.67 116.27l-33.44-11.65a2.14 2.14 0 0 1-1.32-2.73l10.27-29.49a2.14 2.14 0 0 1 2.73-1.32l16.29 5.67 17.15 6a2.14 2.14 0 0 1 1.32 2.73l-10.27 29.46a2.16 2.16 0 0 1-2.73 1.33z\"/><path class=\"lcls-18\" d=\"M104.4 77.5l37.48 13.05M102.12 84.06l37.47 13.05M99.84 90.61l37.47 13.05M97.55 97.17l37.48 13.05\"/><path class=\"lcls-20\" d=\"M114.3 109.43l11-31.57\"/><rect class=\"lcls-21\" x=\"111.95\" y=\"38.32\" width=\"64.64\" height=\"85.65\" rx=\"9.83\" ry=\"9.83\" transform=\"rotate(25.96 144.259 81.153)\"/><path class=\"lcls-22\" d=\"M159.95 52.17l19.31 9.41M155.83 60.63l19.31 9.4M151.71 69.08l19.32 9.41\"/><path class=\"lcls-23\" d=\"M140.04 42.46l3.02 21.62M150.71 47.67l-18.9 10.92\"/><path class=\"lcls-24\" d=\"M147.56 121l-36.51-17.81a2.46 2.46 0 0 1-1.14-3.29l15.72-32.22a2.46 2.46 0 0 1 3.29-1.13l17.79 8.68 18.73 9.14a2.46 2.46 0 0 1 1.13 3.29l-15.72 32.21a2.46 2.46 0 0 1-3.29 1.13z\"/><path class=\"lcls-22\" d=\"M122.91 73.22l40.93 19.97M119.42 80.38l40.92 19.97M115.92 87.54l40.93 19.97M112.43 94.7l40.93 19.97\"/><path class=\"lcls-24\" d=\"M129.85 110.95l16.82-34.49\"/><circle class=\"lcls-25\" cx=\"79.31\" cy=\"115.64\" r=\"15.22\"/><path class=\"lcls-26\" d=\"M79.31 108.65v13.99M86.3 115.64H72.31\"/></g></symbol><symbol viewBox=\"0 0 210 135\" id=\"users\" xmlns=\"http://www.w3.org/2000/svg\"><defs><style>.mcls-1,.mcls-13,.mcls-16,.mcls-19,.mcls-21,.mcls-3{fill:none}.mcls-2{clip-path:url(#mclip-path)}.mcls-3{stroke:#221d42;stroke-width:20.21px}.mcls-13,.mcls-16,.mcls-19,.mcls-3{stroke-linecap:round}.mcls-16,.mcls-19,.mcls-3{stroke-linejoin:round}.mcls-4{fill:#130a2d}.mcls-5{fill:#f5f4f9}.mcls-6{fill:#eaac81}.mcls-7{fill:#fff}.mcls-8{fill:#212466}.mcls-9{fill:#1f193a}.mcls-10{fill:#efba93}.mcls-11{fill:#8c4d22}.mcls-12{fill:#efb289}.mcls-13,.mcls-16{stroke:#8c4d22}.mcls-13,.mcls-21{stroke-miterlimit:10}.mcls-13{stroke-width:1.61px}.mcls-14{fill:#ad4732;opacity:.5}.mcls-15{fill:#491b0d}.mcls-16{stroke-width:.9px}.mcls-17{fill:#e0d4e0}.mcls-18{fill:#291c4c}.mcls-19{stroke:#f4c199;stroke-width:12.96px}.mcls-20{fill:#ec3d15}.mcls-21{stroke:#f6f6f6;stroke-width:2.58px}</style><clipPath id=\"mclip-path\"><path class=\"mcls-1\" d=\"M31.79-20.63h161.49v142.34H31.79z\"/></clipPath></defs><title>Artboard 29 copy 3</title><g id=\"mLayer_10\" data-name=\"Layer 10\"><g class=\"mcls-2\"><path class=\"mcls-3\" d=\"M64.8 104.16L85.09 80M148.26 102.83L129.73 80\"/><path class=\"mcls-4\" d=\"M95.16 62.34h23.59a19.75 19.75 0 0 1 19.75 19.75v65.53a9 9 0 0 1-9 9H84.38a9 9 0 0 1-9-9V82.09a19.75 19.75 0 0 1 19.78-19.75z\"/><path class=\"mcls-5\" d=\"M107.7 114.91l12.17-52.58a99.17 99.17 0 0 0-11.49-1.49c-4.79-.3-13.95 2.27-13.95 2.27s4.82 27.62 13.27 51.8z\"/><path class=\"mcls-6\" d=\"M96.41 61.79l-.16-35h21.11l.17 41.17c-.16 4.81-4.42 5-10.57 4.6-7.47-.56-10.55-7.43-10.55-10.77z\"/><path class=\"mcls-7\" d=\"M96.44 60.84s-1.21 6.7 9.89 11.54c0 0-3.84-.63-7.55 7.14l-4.61-17.16a2.44 2.44 0 0 1 2.27-1.52z\"/><path class=\"mcls-7\" d=\"M96.44 60.84s-.19 7.91 11.26 11.54c0 0-5.21-.63-8.92 7.14l-4.61-17.16a2.44 2.44 0 0 1 2.27-1.52zM117.51 61.09s1.29 6.42-9.81 11.25c0 0 4.44-.11 8.14 7.66l4-17.67a2.11 2.11 0 0 0-2.33-1.24z\"/><path class=\"mcls-8\" d=\"M103.17 73.88l2.83 4.38a2 2 0 0 0 3.35 0l2.84-3.52a5.06 5.06 0 0 0-4.64-2.41c-3.22 0-4.38 1.55-4.38 1.55z\"/><path class=\"mcls-8\" d=\"M104.64 103l1.82-23.9s.18-2 1.22-2 1.45 2 1.45 2l2 24.39-3.43 11.39z\"/><path class=\"mcls-9\" d=\"M94.17 62.37l13.53 52.54-13.79-29.03 3.25-6.85-5.73-4.46 2.74-12.2zM119.87 62.33l-12.17 52.58 13.8-29.03-3.25-6.85 5.73-4.46-4.11-12.24z\"/><path class=\"mcls-10\" d=\"M107.93 59.21h-1.9c-8.11-.06-13-6.69-12.93-14.8l.29-34A5.44 5.44 0 0 1 98.88 5l10.46-.77a11.61 11.61 0 0 1 11.52 11.72l-.27 28.25c0 8.3-4.43 15.01-12.66 15.01z\"/><path class=\"mcls-11\" d=\"M119.19 23L119 35s-1.45-7.88 4-5.77l-.62-13-3.61-.15z\"/><ellipse class=\"mcls-10\" cx=\"121.32\" cy=\"32.57\" rx=\"5.8\" ry=\"7.03\" transform=\"rotate(-.48 121.618 32.739)\"/><path class=\"mcls-12\" d=\"M120.78 35.62a3.25 3.25 0 1 0-.13-6.5z\"/><path class=\"mcls-11\" d=\"M117 12.3s3.35-2.87-2.82-5.88h1.63s2 1.12 4.13 4.74z\"/><path class=\"mcls-11\" d=\"M115.88 16.38c0 3.58 2.23 6.49 5 6.49V12.72c0-1.69-1.41-2.8-2.53-1.94a7.06 7.06 0 0 0-2.47 5.6z\"/><path class=\"mcls-13\" d=\"M91.17 18.38C90 5.82 98.25 4.21 106.57 4.21c16.5 0 15.06 14.17 15.06 14.17\"/><path class=\"mcls-11\" d=\"M93.75 23l.15 12s1.58-7.92-3.84-5.81l.26-13.86 3.84.76zM94.94 11.54S91.27 9.28 97.79 6l.85-.92a10.85 10.85 0 0 0-7.69 6z\"/><path class=\"mcls-13\" d=\"M113.79 3.28s-3.22 5.25-9.15 1.37\"/><path class=\"mcls-11\" d=\"M108.49 4.16a6.77 6.77 0 0 0-3.21.35c-1.81 1 1.84 1.39 3.49 1.57s2.72 0 2.72-.69-1.97-1.21-3-1.23z\"/><path class=\"mcls-14\" d=\"M105.71 34.06h2.55a.89.89 0 0 1 .88.89.89.89 0 0 1-.89.89h-2.55a.89.89 0 0 1 0-1.77z\"/><ellipse class=\"mcls-10\" cx=\"93.55\" cy=\"32.57\" rx=\"7.03\" ry=\"5.8\" transform=\"rotate(-89.52 93.554 32.572)\"/><path class=\"mcls-12\" d=\"M94.09 35.62a3.25 3.25 0 0 1 .14-6.5z\"/><path class=\"mcls-7\" d=\"M107 50.06a5.88 5.88 0 0 0 5.88-5.86h-11.74a5.87 5.87 0 0 0 5.86 5.86z\"/><circle class=\"mcls-15\" cx=\"101.56\" cy=\"29.24\" r=\"1.26\"/><circle class=\"mcls-15\" cx=\"112.55\" cy=\"29.25\" r=\"1.26\"/><path class=\"mcls-16\" d=\"M98.07 24a6.79 6.79 0 0 1 2.49-.66 5.29 5.29 0 0 1 2.37.62M115.89 24a6.88 6.88 0 0 0-2.43-.86 5.2 5.2 0 0 0-2.41.43\"/><path class=\"mcls-11\" d=\"M107 36.86a7.62 7.62 0 0 0-7.63 7.61h15.24a7.62 7.62 0 0 0-7.61-7.61zM96.6 16.38c0 3.58-2.22 6.49-5 6.49V11.43c0-.91.67-1.55 1.33-1.31 2.13.76 3.67 3.28 3.67 6.26z\"/><path class=\"mcls-3\" d=\"M148.26 102.83l-19.68 18.88M64.8 104.16l21.44 17.55\"/><rect class=\"mcls-17\" x=\"87.39\" y=\"87.95\" width=\"38.92\" height=\"55.79\" rx=\"6.49\" ry=\"6.49\" transform=\"rotate(-.08 107.35 114.667)\"/><circle class=\"mcls-18\" cx=\"106.25\" cy=\"92.6\" r=\".75\"/><path class=\"mcls-19\" d=\"M126.43 116.49l-.09 10.45M88.57 116.49l-.09 10.45\"/></g><circle class=\"mcls-20\" cx=\"106.53\" cy=\"118.17\" r=\"15\"/><path class=\"mcls-21\" d=\"M106.53 111.28v13.79M113.42 118.17H99.64\"/></g></symbol></svg>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router___ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_scanning_http_hub_service__ = __webpack_require__("./src/app/services/scanning-http-hub.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_auth_service__ = __webpack_require__("./src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__models_roles_enum__ = __webpack_require__("./src/app/models/roles.enum.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var AppComponent = (function () {
    function AppComponent(_router, hubService, authService) {
        var _this = this;
        this._router = _router;
        this.hubService = hubService;
        this.authService = authService;
        this.noMenu = false;
        this.noMenuRoutes = ['/school-accounts', '/edit-school'];
        this.noMenuRoles = [__WEBPACK_IMPORTED_MODULE_4__models_roles_enum__["a" /* Roles */].parent, __WEBPACK_IMPORTED_MODULE_4__models_roles_enum__["a" /* Roles */].scanner, __WEBPACK_IMPORTED_MODULE_4__models_roles_enum__["a" /* Roles */].classroomTeacher, __WEBPACK_IMPORTED_MODULE_4__models_roles_enum__["a" /* Roles */].dismissalTeacher];
        this.title = 'app';
        this.isLoginPage = false;
        _router.events.subscribe(function (event) {
            if (event instanceof __WEBPACK_IMPORTED_MODULE_1__angular_router___["NavigationEnd"]) {
                _this.checkIsLoginPage(event.urlAfterRedirects);
                _this.checkToShowMenu(event.urlAfterRedirects);
            }
        });
        this.hubService.createHubConnection();
    }
    AppComponent.prototype.ngOnInit = function () {
    };
    AppComponent.prototype.checkIsLoginPage = function (url) {
        this.isLoginPage = (url.includes('/login') || url === '/forgot-password' || url.includes('/create-account'));
    };
    AppComponent.prototype.checkToShowMenu = function (url) {
        this.noMenu = false;
        // role checking
        if ((_a = this.authService).matchRoles.apply(_a, this.noMenuRoles)) {
            this.noMenu = true;
        }
        // route checking
        if (this.noMenuRoutes.some(function (route) { return route === url; })) {
            this.noMenu = true;
        }
        var _a;
    };
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-root',
            template: __webpack_require__("./src/app/app.component.html"),
            styles: [__webpack_require__("./src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router___["Router"], __WEBPACK_IMPORTED_MODULE_2__services_scanning_http_hub_service__["a" /* ScanningHttpHubService */], __WEBPACK_IMPORTED_MODULE_3__services_auth_service__["a" /* AuthService */]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_routing_module__ = __webpack_require__("./src/app/app-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_platform_browser_animations__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/animations.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_devextreme_angular__ = __webpack_require__("./node_modules/devextreme-angular/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_devextreme_angular___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_devextreme_angular__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_primeng_primeng__ = __webpack_require__("./node_modules/primeng/primeng.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_primeng_primeng___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_primeng_primeng__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_ngx_bootstrap_modal__ = __webpack_require__("./node_modules/ngx-bootstrap/modal/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_ng2_file_upload__ = __webpack_require__("./node_modules/ng2-file-upload/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_ng2_file_upload___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_ng2_file_upload__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_ngx_barcode__ = __webpack_require__("./node_modules/ngx-barcode/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__app_component__ = __webpack_require__("./src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__services_auth_service__ = __webpack_require__("./src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__services_HttpInterceptors_AuthHttpClientInterceptor__ = __webpack_require__("./src/app/services/HttpInterceptors/AuthHttpClientInterceptor.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__modules_scanner_scanner_module__ = __webpack_require__("./src/app/modules/scanner/scanner.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__modules_share_module_share_module_module__ = __webpack_require__("./src/app/modules/share-module/share-module.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__modules_flights_flights_module__ = __webpack_require__("./src/app/modules/flights/flights.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__modules_dismissal_cards_dismissal_cards_module__ = __webpack_require__("./src/app/modules/dismissal-cards/dismissal-cards.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__components_entry_entry_component__ = __webpack_require__("./src/app/components/entry/entry.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__components_login_login_component__ = __webpack_require__("./src/app/components/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__components_header_header_component__ = __webpack_require__("./src/app/components/header/header.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__components_header_main_menu_main_menu_component__ = __webpack_require__("./src/app/components/header/main-menu/main-menu.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__components_users_management_users_management_component__ = __webpack_require__("./src/app/components/users-management/users-management.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__components_users_management_new_user_new_user_component__ = __webpack_require__("./src/app/components/users-management/new-user/new-user.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__components_school_accounts_school_accounts_component__ = __webpack_require__("./src/app/components/school-accounts/school-accounts.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__components_school_accounts_edit_school_edit_school_component__ = __webpack_require__("./src/app/components/school-accounts/edit-school/edit-school.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__components_school_configuration_school_configuration_component__ = __webpack_require__("./src/app/components/school-configuration/school-configuration.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__components_students_students_upload_students_upload_component__ = __webpack_require__("./src/app/components/students/students-upload/students-upload.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__components_students_students_grid_students_grid_component__ = __webpack_require__("./src/app/components/students/students-grid/students-grid.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__components_students_edit_student_edit_student_component__ = __webpack_require__("./src/app/components/students/edit-student/edit-student.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__components_classrooms_classrooms_grid_classrooms_grid_component__ = __webpack_require__("./src/app/components/classrooms/classrooms-grid/classrooms-grid.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31__components_access_denied_access_denied_component__ = __webpack_require__("./src/app/components/access-denied/access-denied.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_32__components_common_components_notification_notification_component__ = __webpack_require__("./src/app/components/common-components/notification/notification.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_33__components_common_components_loader_loader_component__ = __webpack_require__("./src/app/components/common-components/loader/loader.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_34__components_parents_dashboard_parents_dashboard_component__ = __webpack_require__("./src/app/components/parents-dashboard/parents-dashboard.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_35__components_users_management_user_configuration_user_configuration_component__ = __webpack_require__("./src/app/components/users-management/user-configuration/user-configuration.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_36__components_archive_archive_component__ = __webpack_require__("./src/app/components/archive/archive.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_37__components_flight_view_configuration_flight_view_configuration_component__ = __webpack_require__("./src/app/components/flight-view-configuration/flight-view-configuration.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_38__services_request_service__ = __webpack_require__("./src/app/services/request.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_39__services_user_management_service__ = __webpack_require__("./src/app/services/user-management.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_40__services_school_accounts_service__ = __webpack_require__("./src/app/services/school-accounts.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_41__services_school_configuration_service__ = __webpack_require__("./src/app/services/school-configuration.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_42__services_file_server_service__ = __webpack_require__("./src/app/services/file-server.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_43__services_students_service__ = __webpack_require__("./src/app/services/students.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_44__services_scanning_http_hub_service__ = __webpack_require__("./src/app/services/scanning-http-hub.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_45__services_modal_service__ = __webpack_require__("./src/app/services/modal.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_46__services_classrooms_service__ = __webpack_require__("./src/app/services/classrooms.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_47__services_loader_service__ = __webpack_require__("./src/app/services/loader.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_48__services_create_edit_item_service__ = __webpack_require__("./src/app/services/create-edit-item.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_49__services_notification_service__ = __webpack_require__("./src/app/services/notification.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_50__services_parents_dashboard_service__ = __webpack_require__("./src/app/services/parents-dashboard.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_51__services_dismissal_cards_service__ = __webpack_require__("./src/app/services/dismissal-cards.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_52__services_archive_service__ = __webpack_require__("./src/app/services/archive.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_53__services_flight_view_configuration_service__ = __webpack_require__("./src/app/services/flight-view-configuration.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_54__services_parent_id_service__ = __webpack_require__("./src/app/services/parent-id-service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_55__services_flight_teachers_service__ = __webpack_require__("./src/app/services/flight-teachers.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_56__services_school_name_service__ = __webpack_require__("./src/app/services/school-name.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_57__directives_is_user_exist_directive__ = __webpack_require__("./src/app/directives/is-user-exist.directive.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_58__components_users_management_users_upload_users_upload_component__ = __webpack_require__("./src/app/components/users-management/users-upload/users-upload.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_59__directives_is_user_parent__ = __webpack_require__("./src/app/directives/is-user-parent.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_60__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
// angular







// vendors





// app core



// app modules




// app components




















// app services



















// app directives




var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_11__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_32__components_common_components_notification_notification_component__["a" /* NotificationComponent */],
                __WEBPACK_IMPORTED_MODULE_33__components_common_components_loader_loader_component__["a" /* LoaderComponent */],
                __WEBPACK_IMPORTED_MODULE_19__components_login_login_component__["a" /* LoginComponent */],
                __WEBPACK_IMPORTED_MODULE_20__components_header_header_component__["a" /* HeaderComponent */],
                __WEBPACK_IMPORTED_MODULE_21__components_header_main_menu_main_menu_component__["a" /* MainMenuComponent */],
                __WEBPACK_IMPORTED_MODULE_22__components_users_management_users_management_component__["a" /* UsersManagementComponent */],
                __WEBPACK_IMPORTED_MODULE_23__components_users_management_new_user_new_user_component__["a" /* NewUserComponent */],
                __WEBPACK_IMPORTED_MODULE_58__components_users_management_users_upload_users_upload_component__["a" /* UsersUploadComponent */],
                __WEBPACK_IMPORTED_MODULE_24__components_school_accounts_school_accounts_component__["a" /* SchoolAccountsComponent */],
                __WEBPACK_IMPORTED_MODULE_25__components_school_accounts_edit_school_edit_school_component__["a" /* EditSchoolComponent */],
                __WEBPACK_IMPORTED_MODULE_26__components_school_configuration_school_configuration_component__["a" /* SchoolConfigurationComponent */],
                __WEBPACK_IMPORTED_MODULE_28__components_students_students_grid_students_grid_component__["a" /* StudentsGridComponent */],
                __WEBPACK_IMPORTED_MODULE_29__components_students_edit_student_edit_student_component__["a" /* EditStudentComponent */],
                __WEBPACK_IMPORTED_MODULE_27__components_students_students_upload_students_upload_component__["a" /* StudentsUploadComponent */],
                __WEBPACK_IMPORTED_MODULE_30__components_classrooms_classrooms_grid_classrooms_grid_component__["a" /* ClassroomsGridComponent */],
                __WEBPACK_IMPORTED_MODULE_31__components_access_denied_access_denied_component__["a" /* AccessDeniedComponent */],
                __WEBPACK_IMPORTED_MODULE_57__directives_is_user_exist_directive__["a" /* IsUserExistDirective */],
                __WEBPACK_IMPORTED_MODULE_34__components_parents_dashboard_parents_dashboard_component__["a" /* ParentsDashboardComponent */],
                __WEBPACK_IMPORTED_MODULE_35__components_users_management_user_configuration_user_configuration_component__["a" /* UserConfigurationComponent */],
                __WEBPACK_IMPORTED_MODULE_36__components_archive_archive_component__["a" /* ArchiveComponent */],
                __WEBPACK_IMPORTED_MODULE_18__components_entry_entry_component__["a" /* EntryComponent */],
                __WEBPACK_IMPORTED_MODULE_59__directives_is_user_parent__["a" /* IsUserParentDirective */],
                __WEBPACK_IMPORTED_MODULE_37__components_flight_view_configuration_flight_view_configuration_component__["a" /* FlightViewConfigurationComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["BrowserModule"],
                __WEBPACK_IMPORTED_MODULE_2__app_routing_module__["a" /* AppRoutingModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_forms__["FormsModule"],
                __WEBPACK_IMPORTED_MODULE_4__angular_common_http__["c" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_7_primeng_primeng__["CheckboxModule"],
                __WEBPACK_IMPORTED_MODULE_7_primeng_primeng__["DataTableModule"],
                __WEBPACK_IMPORTED_MODULE_7_primeng_primeng__["CalendarModule"],
                __WEBPACK_IMPORTED_MODULE_7_primeng_primeng__["MultiSelectModule"],
                __WEBPACK_IMPORTED_MODULE_8_ngx_bootstrap_modal__["a" /* ModalModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_7_primeng_primeng__["DropdownModule"],
                __WEBPACK_IMPORTED_MODULE_7_primeng_primeng__["PaginatorModule"],
                __WEBPACK_IMPORTED_MODULE_5__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
                __WEBPACK_IMPORTED_MODULE_6_devextreme_angular__["DxDataGridModule"],
                __WEBPACK_IMPORTED_MODULE_9_ng2_file_upload__["FileUploadModule"],
                __WEBPACK_IMPORTED_MODULE_10_ngx_barcode__["a" /* NgxBarcodeModule */],
                __WEBPACK_IMPORTED_MODULE_14__modules_scanner_scanner_module__["a" /* ScannerModule */],
                __WEBPACK_IMPORTED_MODULE_16__modules_flights_flights_module__["a" /* FlightsModule */],
                __WEBPACK_IMPORTED_MODULE_15__modules_share_module_share_module_module__["a" /* ShareModuleModule */],
                __WEBPACK_IMPORTED_MODULE_17__modules_dismissal_cards_dismissal_cards_module__["a" /* DismissalCardsModule */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_12__services_auth_service__["a" /* AuthService */],
                __WEBPACK_IMPORTED_MODULE_49__services_notification_service__["a" /* NotificationService */],
                __WEBPACK_IMPORTED_MODULE_38__services_request_service__["a" /* RequestService */],
                __WEBPACK_IMPORTED_MODULE_39__services_user_management_service__["a" /* UserManagementService */],
                __WEBPACK_IMPORTED_MODULE_40__services_school_accounts_service__["a" /* SchoolAccountsService */],
                __WEBPACK_IMPORTED_MODULE_41__services_school_configuration_service__["a" /* SchoolConfigurationService */],
                __WEBPACK_IMPORTED_MODULE_42__services_file_server_service__["a" /* FileServerService */],
                __WEBPACK_IMPORTED_MODULE_43__services_students_service__["a" /* StudentsService */],
                __WEBPACK_IMPORTED_MODULE_44__services_scanning_http_hub_service__["a" /* ScanningHttpHubService */],
                __WEBPACK_IMPORTED_MODULE_45__services_modal_service__["a" /* ModalService */],
                __WEBPACK_IMPORTED_MODULE_48__services_create_edit_item_service__["a" /* CreateEditItemService */],
                __WEBPACK_IMPORTED_MODULE_52__services_archive_service__["a" /* ArchiveService */],
                __WEBPACK_IMPORTED_MODULE_60__angular_common__["DatePipe"],
                {
                    provide: __WEBPACK_IMPORTED_MODULE_4__angular_common_http__["a" /* HTTP_INTERCEPTORS */],
                    useClass: __WEBPACK_IMPORTED_MODULE_13__services_HttpInterceptors_AuthHttpClientInterceptor__["a" /* AuthHttpInterceptor */],
                    multi: true
                },
                __WEBPACK_IMPORTED_MODULE_51__services_dismissal_cards_service__["a" /* DismissalCardsService */],
                __WEBPACK_IMPORTED_MODULE_46__services_classrooms_service__["a" /* ClassroomsService */],
                __WEBPACK_IMPORTED_MODULE_50__services_parents_dashboard_service__["a" /* ParentsDashboardService */],
                __WEBPACK_IMPORTED_MODULE_47__services_loader_service__["a" /* LoaderService */],
                __WEBPACK_IMPORTED_MODULE_53__services_flight_view_configuration_service__["a" /* FlightViewConfigurationService */],
                __WEBPACK_IMPORTED_MODULE_54__services_parent_id_service__["a" /* ParentIdService */],
                __WEBPACK_IMPORTED_MODULE_55__services_flight_teachers_service__["a" /* FlightTeacherService */],
                __WEBPACK_IMPORTED_MODULE_56__services_school_name_service__["a" /* SchoolNameService */]
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_11__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/components/access-denied/access-denied.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"full-height-page full-height-page--flex-column full-height-page--center\">\r\n  <div class=\"access-denied\">\r\n    <div class=\"access-denied-header\">\r\n      <span>Access Denied</span>\r\n    </div>\r\n    <div class=\"access-denied-message\">\r\n      <span>You don't have access to this page</span>\r\n    </div>\r\n    <div class=\"access-denied-img-container\">\r\n      <img class=\"access-denied-img\" src=\"assets/images/access_denied.svg\" alt=\"access denied image\">\r\n    </div>\r\n    <div>\r\n      <button class=\"flat accent\" (click)=\"goBack()\" type=\"button\">BACK TO PREVIOUS PAGE</button>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n"

/***/ }),

/***/ "./src/app/components/access-denied/access-denied.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AccessDeniedComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AccessDeniedComponent = (function () {
    function AccessDeniedComponent(location) {
        this.location = location;
    }
    AccessDeniedComponent.prototype.goBack = function () {
        this.location.back();
    };
    AccessDeniedComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'access-denied',
            template: __webpack_require__("./src/app/components/access-denied/access-denied.component.html")
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common__["Location"]])
    ], AccessDeniedComponent);
    return AccessDeniedComponent;
}());



/***/ }),

/***/ "./src/app/components/archive/archive.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"page-container\" [ngClass]=\"{'full-height-page full-height-page--flex-column': !archiveList?.length || !filteredArchiveList?.length}\" (click)=\"handlePageContainerClick($event)\">\r\n  <div class=\"page-header archive\">\r\n    <div class=\"page-header__left\">\r\n      <div class=\"page-header__title\">Archive</div>\r\n\r\n      <div class=\"dropdown\">\r\n        <button class=\"dropdown-toggle\" type=\"button\" id=\"dropdownMenu2\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\" (click)=\"isShow=!isShow\">\r\n          <div *ngIf=\"selectedDate===startDay\"> {{selectedDate | date:'MMMM d, y' }} </div>\r\n          <div *ngIf=\"selectedDate!==startDay\"> {{startDay | date:'MMMM d, y' }}-{{selectedDate | date:'MMMM d, y' }}</div>\r\n        </button>\r\n        <div class=\"dropdown-menu\" [class.show]=\"isShow\" aria-labelledby=\"dropdownMenu2\">\r\n          <div class=\"dropdown-item\">\r\n            <div class=\"calendar-buttons\">\r\n              <button type=\"button\" [class.active]=\"isActive('btn1')\" (click)=\"setActive('btn1'); updateArchive(maxDate)\">Today</button>\r\n              <button type=\"button\" [class.active]=\"isActive('btn2')\" (click)=\"setActive('btn2'); updateArchive(yesterday)\">Yesterday</button>\r\n              <button type=\"button\" [class.active]=\"isActive('btn3')\" (click)=\"setActive('btn3'); setDateRange(15);\" [disabled]=\"!selectedStudent\">Last 15 Days</button>\r\n              <button type=\"button\" [class.active]=\"isActive('btn4')\" (click)=\"setActive('btn4'); setDateRange(30);\" [disabled]=\"!selectedStudent\">Last 30 Days</button>\r\n              <button type=\"button\" [class.active]=\"isActive('btn5')\" (click)=\"setActive('btn5');\">Specific Day</button>\r\n              <button type=\"button\" [class.active]=\"isActive('btn6')\" (click)=\"setActive('btn6'); setDateRange(0);\" [disabled]=\"!selectedStudent\">Custom Range</button>\r\n            </div>\r\n            <div *ngIf=\"!selectedStudent || isActive('btn5') || isActive('btn1') || isActive('btn2')\">\r\n              <p-calendar class=\"cp-input-calendar cp-input-calendar--minimal-input\" [(ngModel)]=\"selectedDate\" dateFormat=\"MM dd yy\" [minDate]=\"minDate\" [maxDate]=\"maxDate\" [inline]=\"true\" (onSelect)=\"setActive('btn5'); updateArchive($event);\" ></p-calendar>\r\n            </div>\r\n\r\n            <div *ngIf=\"selectedStudent && !isActive('btn5') && !isActive('btn1') && !isActive('btn2')\">\r\n              <p-calendar class=\"cp-input-calendar cp-input-calendar--minimal-input\" [(ngModel)]=\"rangeDates\" dateFormat=\"MM dd yy\" selectionMode=\"range\" [minDate]=\"minDate\" [maxDate]=\"maxDate\" [inline]=\"true\" (onSelect)=\"setActive('btn6'); dateRangeCalendar($event);\" ></p-calendar>\r\n            </div>\r\n\r\n          </div>\r\n          </div>\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"page-header__right\">\r\n      <div class=\"item\" style=\"width:250px; display:flex;\">\r\n        <p-dropdown [options]=\"students\" optionLabel=\"name\" [(ngModel)]=\"selectedStudent\" placeholder=\"Search Name\" [autoWidth]=\"false\" [filter]=\"true\" name=\"studentName\" (onChange)=\"setFilteredArchive($event)\"></p-dropdown>\r\n       </div>\r\n        <button class=\"item flat accent shadow\" [disabled]=\"!filteredArchiveList.length\" (click)=\"printArchive()\">PRINT</button>\r\n        <button class=\"item flat accent shadow\" [disabled]=\"!filteredArchiveList.length\" (click)=\"downloadArchiveList()\">EXPORT</button>\r\n      </div>\r\n    </div>\r\n\r\n  <div class=\"grid-container\" *ngIf=\"filteredArchiveList.length\">\r\n\r\n    <dx-data-grid class=\"cp-data-grid\" [dataSource]=\"filteredArchiveList\" [showBorders]=\"false\"\r\n                  [showRowLines]=\"true\" [showColumnLines]=\"false\" [loadPanel]=\"false\"\r\n                  (onContentReady)=\"gridReady($event)\">\r\n\r\n      <dxi-column dataField=\"externalId\" caption=\"ID\" sortOrder=\"asc\" [width]=\"70\"></dxi-column>\r\n      <dxi-column dataField=\"studentName\" caption=\"NAME\"></dxi-column>\r\n      <dxi-column dataField=\"grade\" caption=\"GRADE\" [width]=\"100\"></dxi-column>\r\n      <dxi-column dataField=\"flight\" dataType=\"text\" caption=\"FLIGHT\" [width]=\"100\"></dxi-column>\r\n      <dxi-column dataField=\"lane\" caption=\"LANE\"></dxi-column>\r\n      <dxi-column dataField=\"parentName\" caption=\"PARENT\"></dxi-column>\r\n      <dxi-column dataField=\"scanningTime\" caption=\"SCAN\" dataType=\"text\" [width]=\"150\" alignment=\"center\"></dxi-column>\r\n      <dxi-column dataField=\"classroomTime\" caption=\"CLASSROOM\" dataType=\"text\" [width]=\"150\" cellTemplate=\"cellTemplateClass\" alignment=\"center\"></dxi-column>\r\n      <dxi-column dataField=\"hallwayTime\" caption=\"HALLWAY\" dataType=\"text\" [width]=\"150\" cellTemplate=\"cellTemplateHall\" alignment=\"center\"></dxi-column>\r\n\r\n      <div *dxTemplate=\"let data of 'cellTemplateClass'\">\r\n        {{data.value===\"-\"? \"&mdash;\" : data.value }}\r\n      </div>\r\n\r\n      <div *dxTemplate=\"let data of 'cellTemplateHall'\">\r\n        {{data.value===\"-\"? \"&mdash;\" : data.value}}\r\n      </div>\r\n\r\n\r\n      <!-- Pagination -->\r\n      <dxo-paging [pageSize]=\"10\"></dxo-paging>\r\n      <dxo-pager [showNavigationButtons]=\"true\"></dxo-pager>\r\n    </dx-data-grid>\r\n    <app-paginator></app-paginator>\r\n  </div>\r\n\r\n  <!-- No items screen -->\r\n  <div class=\"no-items-view\" *ngIf=\"!archiveList?.length\">\r\n    <div class=\"no-items-view__image-container no-items-view__image-container--not-clickable no-items-view__image-container--increased-padding\">\r\n      <img class=\"no-items-view__image\" src=\"assets/images/archive.svg\" alt=\"new school\">\r\n    </div>\r\n    <p class=\"no-items-view__text\">No records were found, select another day or another student name.</p>\r\n  </div>\r\n\r\n  <!-- No search results screen -->\r\n  <div class=\"no-items-view\" *ngIf=\"!filteredArchiveList?.length && archiveList?.length\">\r\n    <div class=\"no-items-view__image-container no-items-view__image-container--not-clickable no-items-view__image-container--increased-padding\">\r\n      <img class=\"no-items-view__image\" src=\"assets/images/archive.svg\" alt=\"new school\">\r\n    </div>\r\n    <p class=\"no-items-view__text\">No records were found that match the specified search criteria</p>\r\n  </div>\r\n</div>\r\n\r\n<div id=\"testWrap\"></div>\r\n"

/***/ }),

/***/ "./src/app/components/archive/archive.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ArchiveComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_archive_service__ = __webpack_require__("./src/app/services/archive.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_loader_service__ = __webpack_require__("./src/app/services/loader.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__modules_share_module_paginator_paginator_component__ = __webpack_require__("./src/app/modules/share-module/paginator/paginator.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_xlsx__ = __webpack_require__("./node_modules/xlsx/xlsx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_xlsx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_xlsx__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_students_service__ = __webpack_require__("./src/app/services/students.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var ArchiveComponent = (function () {
    function ArchiveComponent(archiveService, loaderService, studentService) {
        this.archiveService = archiveService;
        this.loaderService = loaderService;
        this.studentService = studentService;
        this.isShow = false;
        this.isActive = function (buttonName) {
            return this.activeButton === buttonName;
        };
        this.archiveList = [];
        this.filteredArchiveList = [];
        this.selectedDate = new Date();
        this.maxDate = new Date();
        this.startDay = this.maxDate;
        var month = this.maxDate.getMonth();
        var prevMonth = (month === 0) ? 11 : month - 1;
        this.minDate = new Date();
        this.minDate.setMonth(prevMonth);
        this.yesterday = new Date(new Date().setDate(new Date().getDate() - 1));
        this.activeButton = 'btn5';
    }
    ArchiveComponent.prototype.ngOnInit = function () {
        this.getInitData();
    };
    // Set active button in calendar filter
    ArchiveComponent.prototype.setActive = function (buttonName) {
        if (buttonName === 'btn5' || buttonName === 'btn6') {
        }
        else {
            this.isShow = false;
        }
        this.activeButton = buttonName;
    };
    /**
     * Get initial data from server (archive list)
     */
    ArchiveComponent.prototype.getInitData = function () {
        var _this = this;
        this.updateArchive(this.selectedDate);
        this.studentService.getStudents().subscribe(function (students) {
            _this.students = students;
            _this.students.unshift(null);
            _this.selectedStudent = null;
        });
    };
    /**
     * Set items returned by search to view
     */
    ArchiveComponent.prototype.setFilteredArchive = function ($event) {
        if (this.selectedStudent === null) {
            this.selectedDate = this.maxDate;
            this.startDay = this.maxDate;
            this.activeButton = 'btn5';
        }
        if (this.selectedDate === this.startDay) {
            this.updateArchive(this.selectedDate);
        }
        else {
            this.updateArchive(this.selectedDate, this.startDay);
        }
    };
    /**
     * Get archive list from server by selected date
     */
    ArchiveComponent.prototype.getArchive = function (date, callback) {
        var _this = this;
        var studentName = this.selectedStudent == null ? "" : this.selectedStudent.name;
        this.archiveService.getArchiveList(date, studentName, this.startDay).subscribe(function (data) {
            _this.archiveList = data ? data : [];
            _this.filteredArchiveList = data ? data : [];
            callback && callback();
        });
    };
    /**
     * Update archive list by selected date
     */
    ArchiveComponent.prototype.updateArchive = function (event, startDay) {
        var _this = this;
        this.selectedDate = event;
        this.startDay = startDay ? startDay : event;
        this.isShow = false;
        this.loaderService.displayMini(true);
        this.getArchive(event, function () {
            _this.loaderService.displayMini(false);
        });
    };
    ArchiveComponent.prototype.dateRangeCalendar = function (event) {
        if (this.rangeDates[1] !== null) {
            this.startDay = this.rangeDates[0];
            this.updateArchive(this.rangeDates[1], this.rangeDates[0]);
        }
    };
    ArchiveComponent.prototype.setDateRange = function (days) {
        if (days === 15) {
            this.rangeDates = [new Date(new Date().setDate(new Date().getDate() - 15)), this.maxDate];
            this.startDay = this.rangeDates[0];
            this.updateArchive(this.maxDate, this.rangeDates[0]);
        }
        else if (days === 30) {
            this.rangeDates = [this.minDate, this.maxDate];
            this.startDay = this.rangeDates[0];
            this.updateArchive(this.maxDate, this.rangeDates[0]);
        }
        else {
            this.rangeDates = null;
        }
    };
    /**
     * Update pagination when grid ready
     */
    ArchiveComponent.prototype.gridReady = function (e) {
        if (this.archiveList) {
            this.pager.itemsTotal = this.filteredArchiveList.length;
            this.pager.selectedPage = e.component.pageIndex();
        }
    };
    /**
     * Download excel file with archive for selected date
     */
    ArchiveComponent.prototype.downloadArchiveList = function () {
        var _this = this;
        var studentName = this.selectedStudent == null ? "" : this.selectedStudent.name;
        this.loaderService.displayMini(true);
        this.archiveService.downloadArchiveList(this.selectedDate, studentName, this.startDay, function () {
            _this.loaderService.displayMini(false);
        });
    };
    /**
     * Print archive for selected date
     */
    ArchiveComponent.prototype.printArchive = function () {
        var _this = this;
        this.loaderService.displayMini(true);
        var arrayBuffer;
        var fileReader = new FileReader();
        var studentName = this.selectedStudent == null ? "" : this.selectedStudent.name;
        fileReader.onload = function () {
            arrayBuffer = this.result;
            var htmlStr = __WEBPACK_IMPORTED_MODULE_4_xlsx__["write"](__WEBPACK_IMPORTED_MODULE_4_xlsx__["read"](arrayBuffer, { type: 'array' }), { type: 'binary', bookType: 'html' });
            var popupWin;
            popupWin = window.open('', '_blank', 'top=0,left=0,height=100%,width=auto');
            popupWin.document.open();
            popupWin.document.write("\n        <html>\n          <head>\n            <title>Print tab</title>\n            <style>\n            @media print {\n              table {\n                border-collapse: collapse;\n                border: 3px solid black;\n              }\n\n              td {\n                border: 1px solid black;\n              }\n\n              td[colspan] {\n                border: 3px solid black;\n                font-weight: 600;\n                text-align: center;\n              }\n            }\n            </style>\n          </head>\n          <body onload=\"window.print();window.close()\">\n            " + htmlStr + "\n          </body>\n        </html>");
            popupWin.document.close();
        };
        this.archiveService.getArchiveListFile(this.selectedDate, studentName, this.startDay).subscribe(function (file) {
            fileReader.readAsArrayBuffer(file);
            _this.loaderService.displayMini(false);
        });
    };
    ArchiveComponent.prototype.handlePageContainerClick = function (event) {
        if (!this.getClosestElement(event.target, '.dropdown-menu')) {
            this.isShow = false;
        }
    };
    ArchiveComponent.prototype.getClosestElement = function (elem, selector) {
        if (!Element.prototype.matches) {
            Element.prototype.matches =
                Element.prototype.msMatchesSelector ||
                    Element.prototype.webkitMatchesSelector ||
                    function (s) {
                        var matches = (this.document || this.ownerDocument).querySelectorAll(s), i = matches.length;
                        while (--i >= 0 && matches.item(i) !== this) { }
                        return i > -1;
                    };
        }
        for (; elem && elem !== document; elem = elem.parentNode) {
            if (elem.matches(selector))
                return elem;
        }
        return null;
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_3__modules_share_module_paginator_paginator_component__["a" /* PaginatorComponent */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_3__modules_share_module_paginator_paginator_component__["a" /* PaginatorComponent */])
    ], ArchiveComponent.prototype, "pager", void 0);
    ArchiveComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-archive',
            template: __webpack_require__("./src/app/components/archive/archive.component.html")
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_archive_service__["a" /* ArchiveService */],
            __WEBPACK_IMPORTED_MODULE_2__services_loader_service__["a" /* LoaderService */],
            __WEBPACK_IMPORTED_MODULE_5__services_students_service__["a" /* StudentsService */]])
    ], ArchiveComponent);
    return ArchiveComponent;
}());



/***/ }),

/***/ "./src/app/components/classrooms/classrooms-grid/classrooms-grid.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"page-container\"  [ngClass]=\"{'full-height-page full-height-page--flex-column': !teachers?.length }\">\r\n  <div class=\"sub-header\">\r\n    <div class=\"jumbo-header\">Classrooms</div>\r\n  </div>\r\n\r\n  <div *ngIf=\"teachers?.length\" class=\"center-hold-container\">\r\n    <div class=\"row\">\r\n      <div class=\"col-md-2\"></div>\r\n      <div class=\"col-md-4\">\r\n        <h1>Assign</h1>\r\n      </div>\r\n      <div class=\"col-md-6\"></div>\r\n    </div>\r\n    <div class=\"row\" style=\"margin-bottom:20px; margin-top:20px; font-weight:bold;\">\r\n      <div class=\"col-md-2\"></div>\r\n      <div class=\"col-md-4\" style=\"width:100%;\">\r\n        <label>TEACHER</label>\r\n      </div>\r\n      <div class=\"col-md-4\" style=\"width:100%;\">\r\n        <label>CLASSROOM</label>\r\n      </div>\r\n      <div class=\"col-md-2\"></div>\r\n    </div>\r\n\r\n    <div class=\"row\" *ngFor=\"let teacher of teachers; let i=index\">\r\n      <div class=\"col-md-2\"></div>\r\n      <div class=\"col-md-4\" style=\"width:100%; margin:0;\">\r\n        <input class=\"white-bg\" type=\"text\" [value]=\"teacher.teacherName\" disabled name=\"teacherName\" style=\"width:100%;display: block; padding: 12px 18px; height: 48px; border: 1px solid #E8E8E8; border-radius: 8px; font-size: 14px; background-color:transparent\" />\r\n      </div>\r\n      <div class=\"col-md-4\" style=\"width:100%;\">\r\n        <p-dropdown [(options)]=\"classModel[i].filteredClassrooms\" optionLabel=\"name\" [(ngModel)]=\"selectedClass[i]\" placeholder=\"Select classroom\" (onChange)=\"onChangeClassroom($event, i)\" (onFocus)=\"setTempCurrentValue($event, i)\" [autoWidth]=\"false\" [filter]=\"true\" name=\"classroomName\" required></p-dropdown>\r\n      </div>\r\n      <div class=\"col-md-2\"><span *ngIf=\"isClassroomAssigned[i]\" style=\"color:red;\">{{message}}</span></div>\r\n    </div>\r\n\r\n\r\n    <div class=\"row\">\r\n      <div class=\"col-md-6\">\r\n\r\n      </div>\r\n      <div class=\"col-md-6\">\r\n        <div class=\"flex-column justify padding-12\">\r\n          <div class=\"align-end\">\r\n            <button type=\"button\" class=\"flat accent shadow\" [disabled]=\"isSaveButton\" (click)=\"saveData()\">SAVE</button>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n\r\n  </div>\r\n\r\n\r\n  <!-- No items screen -->\r\n  <div class=\"no-items-view\" *ngIf=\"!teachers?.length\">\r\n    <p class=\"no-items-view__text\" style=\"max-width: 325px;\">Please upload students' and classroom teachers' information first in order to link classrooms to teachers.</p>\r\n    <br>\r\n    <div class=\"no-items-view__image-container no-items-view__image-container--not-clickable\">\r\n      <img class=\"no-items-view__image\" src=\"assets/images/TeacherStudent.svg\" alt=\"new teachers\">\r\n    </div>\r\n    <button class=\"item flat accent shadow\" [routerLink]=\"['../new-user']\" style=\"margin-bottom:30px;\">ADD TEACHERS</button>\r\n    <button class=\"item flat accent shadow\" [routerLink]=\"['../edit-student']\" style=\"margin-left:0px;\">ADD STUDENTS</button>\r\n\r\n  </div>\r\n\r\n\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/components/classrooms/classrooms-grid/classrooms-grid.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ClassroomsGridComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_classrooms_service__ = __webpack_require__("./src/app/services/classrooms.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_loader_service__ = __webpack_require__("./src/app/services/loader.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__modules_share_module_paginator_paginator_component__ = __webpack_require__("./src/app/modules/share-module/paginator/paginator.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__models_ClassroomModel__ = __webpack_require__("./src/app/models/ClassroomModel.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ClassroomsGridComponent = (function () {
    function ClassroomsGridComponent(classroomsService, loaderService) {
        this.classroomsService = classroomsService;
        this.loaderService = loaderService;
        this.selectedClass = [];
        this.isSaveButton = true;
        this.dataForSave = [];
        this.message = "";
        this.isClassroomAssigned = [];
        this.classModel = [];
        this.loaderService.display(true);
    }
    ClassroomsGridComponent.prototype.ngOnInit = function () {
        this.getClassrooms();
    };
    ClassroomsGridComponent.prototype.getClassrooms = function () {
        var _this = this;
        this.classroomsService.getClassroomsList().subscribe(function (res) {
            _this.classrooms = res;
            _this.classrooms.push({ id: 0, name: "Without Classroom", teacherId: null, schoolId: 0 });
            _this.getTeachers();
        });
    };
    ClassroomsGridComponent.prototype.getTeachers = function () {
        var _this = this;
        this.classroomsService.getTeachersList().subscribe(function (res) {
            _this.teachers = res;
            var index = 0;
            _this.teachers.forEach(function (item) {
                _this.isClassroomAssigned.push(false);
                var teacherClass = _this.selectedClassroom(item.classroomId);
                _this.selectedClass.push(teacherClass);
                var selectModel = new __WEBPACK_IMPORTED_MODULE_4__models_ClassroomModel__["a" /* ClassroomModel */]();
                selectModel.index = index;
                selectModel.filteredClassrooms = _this.classrooms.filter(function (cl) { return cl.teacherId === null; });
                if (teacherClass.id !== 0) {
                    selectModel.filteredClassrooms.push(teacherClass);
                }
                _this.classModel.push(selectModel);
                index++;
            });
            _this.loaderService.display(false);
        });
    };
    ClassroomsGridComponent.prototype.selectedClassroom = function (classroomId) {
        return this.classrooms.find(function (obj) { return obj.id === classroomId; });
    };
    ClassroomsGridComponent.prototype.findTeachersById = function (teacherId) {
        return this.teachers.findIndex(function (obj) { return obj.teacherId === teacherId; });
    };
    ClassroomsGridComponent.prototype.addDataToSaveArray = function (index) {
        var teacherId = this.teachers[index].teacherId;
        var isTeacherIntoArray = this.dataForSave.findIndex(function (obj) { return obj.teacherId === teacherId; });
        if (!(isTeacherIntoArray === -1)) {
            this.dataForSave[isTeacherIntoArray].classroomId = this.teachers[index].classroomId;
            this.dataForSave[isTeacherIntoArray].classroomName = this.teachers[index].classroomName;
        }
        else {
            this.dataForSave.push(this.teachers[index]);
        }
    };
    ClassroomsGridComponent.prototype.onChangeClassroom = function (event, index) {
        var prevClass = this.selectedClassroom(this.teachers[index].classroomId);
        if (this.selectedClass[index].id === 0) {
            prevClass.teacherId = null;
            this.teachers[index].classroomId = this.selectedClass[index].id;
            this.teachers[index].classroomName = this.selectedClass[index].name;
            //push prevClass into all dopdawns
            for (var i = 0; i < this.classModel.length; i++) {
                if (index !== i) {
                    var tempFilteredClass = this.classModel[i].filteredClassrooms.slice();
                    this.classModel[i].filteredClassrooms = null;
                    tempFilteredClass.push(prevClass);
                    this.classModel[i].filteredClassrooms = tempFilteredClass;
                }
            }
        }
        else {
            //push prevClass into all dopdawns
            if (prevClass.id !== 0) {
                prevClass.teacherId = null;
                for (var i = 0; i < this.classModel.length; i++) {
                    if (index !== i) {
                        var tempFilteredClass = this.classModel[i].filteredClassrooms.slice();
                        this.classModel[i].filteredClassrooms = null;
                        tempFilteredClass.push(prevClass);
                        this.classModel[i].filteredClassrooms = tempFilteredClass;
                    }
                }
            }
            this.teachers[index].classroomId = this.selectedClass[index].id;
            this.teachers[index].classroomName = this.selectedClass[index].name;
            this.selectedClass[index].teacherId = this.teachers[index].teacherId;
            for (var i = 0; i < this.classModel.length; i++) {
                if (index !== i) {
                    var tempFilteredClass = this.classModel[i].filteredClassrooms.slice();
                    this.classModel[i].filteredClassrooms = null;
                    tempFilteredClass.splice(tempFilteredClass.indexOf(event.value), 1);
                    this.classModel[i].filteredClassrooms = tempFilteredClass;
                }
            }
        }
        this.addDataToSaveArray(index);
        this.isSaveButton = false;
    };
    ClassroomsGridComponent.prototype.setTempCurrentValue = function (event, index) {
        this.tempCurrentValue = this.selectedClass.slice();
    };
    ClassroomsGridComponent.prototype.saveData = function () {
        var _this = this;
        if (this.dataForSave.length > 0) {
            this.loaderService.display(true);
            this.classroomsService.updateClassrooms(this.dataForSave).subscribe(function (res) {
                _this.isSaveButton = true;
                _this.dataForSave = [];
                _this.isClassroomAssigned = [];
                _this.loaderService.display(false);
            });
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_3__modules_share_module_paginator_paginator_component__["a" /* PaginatorComponent */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_3__modules_share_module_paginator_paginator_component__["a" /* PaginatorComponent */])
    ], ClassroomsGridComponent.prototype, "pager", void 0);
    ClassroomsGridComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'classrooms',
            template: __webpack_require__("./src/app/components/classrooms/classrooms-grid/classrooms-grid.component.html")
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_classrooms_service__["a" /* ClassroomsService */], __WEBPACK_IMPORTED_MODULE_2__services_loader_service__["a" /* LoaderService */]])
    ], ClassroomsGridComponent);
    return ClassroomsGridComponent;
}());



/***/ }),

/***/ "./src/app/components/common-components/loader/loader.component.html":
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"showLoader || showMiniLoader\" class=\"cp-loader-container\" [ngClass]=\"{'cp-loader-container--mini': showMiniLoader}\">\r\n  <img class=\"cp-loader\" [ngClass]=\"{'cp-loader--mini': showMiniLoader}\" src=\"../assets/images/loader.gif\" alt=\"loading...\"/>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/components/common-components/loader/loader.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoaderComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_loader_service__ = __webpack_require__("./src/app/services/loader.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var LoaderComponent = (function () {
    function LoaderComponent(loaderService) {
        this.loaderService = loaderService;
    }
    LoaderComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.loaderService.status.subscribe(function (val) { _this.showLoader = val; });
        this.loaderService.statusMini.subscribe(function (val) { _this.showMiniLoader = val; });
    };
    LoaderComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-loader',
            template: __webpack_require__("./src/app/components/common-components/loader/loader.component.html")
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_loader_service__["a" /* LoaderService */]])
    ], LoaderComponent);
    return LoaderComponent;
}());



/***/ }),

/***/ "./src/app/components/common-components/notification/notification.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"cp-notify\" [ngClass]=\"{ 'is-open': ns.isOpen, 'cp-notify--warning': ns.warning }\" >\r\n  <span class=\"cp-notify__message\">{{ ns.message }}</span>\r\n  <button class=\"cp-notify__close\" (click)=\"ns.hide()\">\r\n    <i class=\"material-icons\">clear</i>\r\n  </button>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/components/common-components/notification/notification.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NotificationComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_notification_service__ = __webpack_require__("./src/app/services/notification.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var NotificationComponent = (function () {
    function NotificationComponent(ns) {
        this.ns = ns;
    }
    NotificationComponent.prototype.ngOnInit = function () {
    };
    NotificationComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-notification',
            template: __webpack_require__("./src/app/components/common-components/notification/notification.component.html")
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_notification_service__["a" /* NotificationService */]])
    ], NotificationComponent);
    return NotificationComponent;
}());



/***/ }),

/***/ "./src/app/components/entry/entry.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\r\n  entry works!\r\n</p>"

/***/ }),

/***/ "./src/app/components/entry/entry.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EntryComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_auth_service__ = __webpack_require__("./src/app/services/auth.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var EntryComponent = (function () {
    function EntryComponent(router, authService) {
        this.router = router;
        this.authService = authService;
        this.redirectToEntryPage();
    }
    EntryComponent.prototype.ngOnInit = function () {
    };
    EntryComponent.prototype.redirectToEntryPage = function () {
        this.router.navigate([this.authService.getEntryRoute()]);
    };
    EntryComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-entry',
            template: __webpack_require__("./src/app/components/entry/entry.component.html")
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["Router"], __WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */]])
    ], EntryComponent);
    return EntryComponent;
}());



/***/ }),

/***/ "./src/app/components/flight-view-configuration/flight-view-configuration.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"padding-24\" *ngIf=\"isSchoolConfigSet\">\r\n\r\n  <div>\r\n    <button class=\"flat purple icon\" [routerLink]=\"['/flights']\">BACK TO FLIGHTS<i class=\"material-icons\">arrow_back</i></button>\r\n  </div>\r\n\r\n\r\n  <div class=\"form-container w-48-perc\">\r\n    <form #flightConfigurationForm=\"ngForm\" (submit)=\"submitFlightConfiguration()\">\r\n      <h1>Flight View Setup</h1>\r\n      <div class=\"label-input-container\">\r\n        <label>DEFAULT LANE</label>\r\n        <p-dropdown [options]=\"lanesOptions\" [(ngModel)]=\"teacherSettingsModel.laneId\"\r\n                    [autoWidth]=\"false\" (onChange)=\"changeScanningType($event)\" name=\"laneId\">\r\n\r\n          <ng-template let-item pTemplate=\"selectedItem\">\r\n            <div class=\"color-palette-item lane-{{ item.icon ? item.icon.toLowerCase() : 'blank' }}\" style=\"vertical-align:middle; position:absolute;\"></div>\r\n            <span style=\"vertical-align:middle; position: absolute; left: 60px; top: 13px;\">{{item.label}}</span>\r\n          </ng-template>\r\n          <ng-template let-lane pTemplate=\"item\">\r\n            <div class=\"ui-helper-clearfix\" style=\"position: relative;height:25px;\">\r\n              <div class=\"color-palette-item lane-{{ lane.icon ? lane.icon.toLowerCase() : 'blank' }}\" style=\"width:24px;position:absolute;top:1px;left:5px\"></div>\r\n              <div style=\"font-size:14px;margin-top:4px;width: auto; position: absolute; top: 0px; left: 60px;\">{{lane.label}}</div>\r\n            </div>\r\n          </ng-template>\r\n\r\n        </p-dropdown>\r\n      </div>\r\n\r\n      <br><h1>Columns</h1>\r\n      <div class=\"label-input-container cp-prime-table--purple\">\r\n        <label>GRADE</label>\r\n        <div class=\"flex\" style=\"padding:0px 18px;\">\r\n          <div class=\"cp-switch\">\r\n            <input class=\"cp-switch__checkbox\" type=\"checkbox\" [(ngModel)]=\"teacherSettingsModel.isGradeColumnVisible\"\r\n                   name=\"isGrade\" id=\"isGrade\">\r\n            <label class=\"cp-switch__control\" for=\"isGrade\">\r\n              <span class=\"cp-switch__toggle\"><i class=\"material-icons\">done</i></span>\r\n            </label>\r\n          </div>\r\n          <label style=\"padding:0% 20%; margin-bottom:0px;\">{{teacherSettingsModel.isGradeColumnVisible ? 'Visible' : 'Hidden'}}</label>\r\n        </div>\r\n\r\n      </div>\r\n      <div class=\"label-input-container cp-prime-table--purple\">\r\n        <label>CAR</label>\r\n        <div class=\"flex\" style=\"padding:0px 18px;\">\r\n          <div class=\"cp-switch\">\r\n            <input class=\"cp-switch__checkbox\" type=\"checkbox\" [(ngModel)]=\"teacherSettingsModel.isCarColumnVisible\"\r\n                   name=\"isCar\" id=\"isCar\">\r\n            <label class=\"cp-switch__control\" for=\"isCar\">\r\n              <span class=\"cp-switch__toggle\"><i class=\"material-icons\">done</i></span>\r\n            </label>\r\n\r\n          </div>\r\n          <label style=\"padding:0% 20%; margin-bottom:0px;\">{{teacherSettingsModel.isCarColumnVisible ? 'Visible' : 'Hidden'}}</label>\r\n        </div>\r\n      </div>\r\n\r\n    </form>\r\n\r\n    <div class=\"flex-column padding-12\">\r\n      <div class=\"align-end\">\r\n        <button type=\"submit\" class=\"flat accent shadow\" [disabled]=\"\" (click)=\"submitFlightConfiguration()\"> SAVE </button>\r\n      </div>\r\n    </div>\r\n\r\n  </div>\r\n</div>\r\n\r\n<!-- No items screen -->\r\n<div *ngIf=\"!isSchoolConfigSet\" class=\"page-container\" [ngClass]=\"{'full-height-page full-height-page--flex-column': !isSchoolConfigSet }\">\r\n  <div class=\"no-items-view\">\r\n    <p class=\"no-items-view__text\" style=\"max-width: 325px;\">Lane information has been configured yet. {{isAdmin? \"Please go to School Configuration view and complete the 'Lane' section.\" : \"Please contact your School Administrator.\" }} </p>\r\n    <br>\r\n    <div class=\"no-items-view__image-container no-items-view__image-container--not-clickable\">\r\n      <img class=\"no-items-view__image\" src=\"assets/images/menu_flights.svg\" alt=\"new configurations\">\r\n    </div>\r\n    <button *ngIf=\"isAdmin\" class=\"item flat accent shadow\" [routerLink]=\"['../school-configuration']\" style=\"margin-bottom:30px;\">GO TO SCHOOL CONFIGURATION</button>\r\n\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/components/flight-view-configuration/flight-view-configuration.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FlightViewConfigurationComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__models_teacher_settings_model__ = __webpack_require__("./src/app/models/teacher-settings.model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_flight_view_configuration_service__ = __webpack_require__("./src/app/services/flight-view-configuration.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_loader_service__ = __webpack_require__("./src/app/services/loader.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_notification_service__ = __webpack_require__("./src/app/services/notification.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var FlightViewConfigurationComponent = (function () {
    function FlightViewConfigurationComponent(location, teacherService, loaderService, notificationService) {
        this.location = location;
        this.teacherService = teacherService;
        this.loaderService = loaderService;
        this.notificationService = notificationService;
        this.isSchoolConfigSet = true;
        this.isAdmin = false;
        this.teacherSettingsModel = new __WEBPACK_IMPORTED_MODULE_2__models_teacher_settings_model__["a" /* TeacherSettings */]();
        this.teacherSettingsModel.lanes = new Array();
    }
    FlightViewConfigurationComponent.prototype.ngOnInit = function () {
        if (window.localStorage.getItem('role').indexOf("Admin") >= 0) {
            this.isAdmin = true;
        }
        this.getInitialData();
    };
    /**
     * Get initial data from server
     */
    FlightViewConfigurationComponent.prototype.getInitialData = function () {
        var _this = this;
        this.loaderService.displayMini(true);
        this.teacherService.getFlightSettingsForTeacher().subscribe(function (res) {
            if (res == null) {
                _this.isSchoolConfigSet = false;
            }
            else {
                _this.isSchoolConfigSet = true;
                _this.teacherSettingsModel = res;
                _this.lanesOptions = [];
                _this.teacherSettingsModel.lanes.forEach(function (lane) {
                    _this.lanesOptions.push({
                        value: lane.id,
                        label: lane.name,
                        icon: lane.color
                    });
                });
            }
            _this.loaderService.displayMini(false);
        });
    };
    FlightViewConfigurationComponent.prototype.submitFlightConfiguration = function () {
        var _this = this;
        this.loaderService.displayMini(true);
        this.teacherService.submitEditedSettings(this.teacherSettingsModel)
            .subscribe(function (response) { return _this.responseStatusCodeHandler(response); }, function (err) { return _this.responseStatusCodeHandler(err); });
    };
    /* error handler */
    FlightViewConfigurationComponent.prototype.responseStatusCodeHandler = function (err) {
        if (err === null) {
            this.loaderService.displayMini(false);
            this.notificationService.show('Your changes applied successfully!', true);
        }
        else {
            this.loaderService.displayMini(false);
            switch (err.status) {
                case 400:
                    this.notificationService.show(err.message, true, true);
                    break;
                case 500:
                    this.notificationService.show('Server error occured!', true, true);
                    break;
                case 503:
                    this.notificationService.show('Error occured while processing your request!', true, true);
                    break;
                default: break;
            }
        }
    };
    FlightViewConfigurationComponent.prototype.changeScanningType = function (par) {
    };
    FlightViewConfigurationComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'flight-view-configuration',
            template: __webpack_require__("./src/app/components/flight-view-configuration/flight-view-configuration.component.html")
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common__["Location"],
            __WEBPACK_IMPORTED_MODULE_3__services_flight_view_configuration_service__["a" /* FlightViewConfigurationService */],
            __WEBPACK_IMPORTED_MODULE_4__services_loader_service__["a" /* LoaderService */],
            __WEBPACK_IMPORTED_MODULE_5__services_notification_service__["a" /* NotificationService */]])
    ], FlightViewConfigurationComponent);
    return FlightViewConfigurationComponent;
}());



/***/ }),

/***/ "./src/app/components/header/header.component.html":
/***/ (function(module, exports) {

module.exports = "<header class=\"main-header\">\r\n  <!-- left-content -->\r\n  <div class=\"main-header__inner-wrap\">\r\n    <app-main-menu *ngIf=\"!noMenu\" class=\"main-header__main-menu\" (stateChanged)=\"changeLogo($event)\"></app-main-menu>\r\n    <!-- logo -->\r\n    <a [routerLink]=\"['/']\" class=\"main-header__logo\">\r\n      <img src=\"assets/images/{{ isMenuOpen ? 'control-point-logo.png' : 'control-point-logo--white-letters.png' }}\" alt=\"Control Point Logo\">\r\n    </a>\r\n    <!-- /logo -->\r\n  </div>\r\n  <!-- /left-content -->\r\n\r\n  <!-- middle-content -->\r\n  <div class=\"main-header__inner-wrap main-header__inner-wrap--middle\">\r\n    <a [routerLink]=\"['/']\"><span class=\"main-header__school-title\" (click)=\"goToSchoolView()\">{{userData?.schoolName}}</span>  </a>\r\n  </div>\r\n  <!-- /middle-content -->\r\n\r\n  <!-- right-content -->\r\n  <div class=\"main-header__inner-wrap main-header__inner-wrap--right\">\r\n    <!-- user-info -->\r\n\r\n    <div class=\"btn-group\">\r\n      <div class=\"dropdown\">\r\n          <button class=\"btn dd-toggle\" data-toggle=\"dropdown\" data-flip=\"false\" aria-haspopup=\"true\" aria-expanded=\"false\">\r\n            <div class=\"main-header__user-info\">\r\n              <div class=\"main-header__user-data\">\r\n                <span class=\"main-header__user-title bold\">{{ userData?.username }}</span>\r\n                <span class=\"main-header__user-subtitle\">{{ userData?.role }}</span>\r\n              </div>\r\n              <div class=\"main-header__user-pic\">\r\n                <img [src]=\"userPic\" alt=\"User Avatar\">\r\n              </div>\r\n            </div>\r\n          </button>\r\n          <div class=\"dropdown-menu dropdown-menu-right\" aria-labelledby=\"dropdownMenuButton\">\r\n            <button class=\"dropdown-item\" type=\"button\" *ngIf=\"authService.matchRoles(roles.parent)\" (click)=\"downloadInstructions()\">Car Rider Procedures</button>\r\n            <button class=\"dropdown-item\" type=\"button\" *ngIf=\"authService.matchRoles(roles.classroomTeacher, roles.dismissalTeacher)\" [routerLink]=\"['archive']\">Archive</button>\r\n            <button class=\"dropdown-item\" type=\"button\" *ngIf=\"showFlightViewConfigItem && authService.matchRoles(roles.schoolAdmin, roles.classroomTeacher, roles.dismissalTeacher)\" [routerLink]=\"['../flight-view-configuration']\">Flight View Setup</button>\r\n            <button class=\"dropdown-item\" type=\"button\" [routerLink]=\"['../user-configuration']\">User Configuration</button>\r\n            <button class=\"dropdown-item\" type=\"button\" (click)=\"logout()\">Log Out</button>\r\n          </div>\r\n        </div>\r\n    </div>\r\n    <!-- /user-info -->\r\n  </div>\r\n  <!-- /right-content -->\r\n</header>\r\n"

/***/ }),

/***/ "./src/app/components/header/header.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HeaderComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router___ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_auth_service__ = __webpack_require__("./src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_user_management_service__ = __webpack_require__("./src/app/services/user-management.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__models_roles_enum__ = __webpack_require__("./src/app/models/roles.enum.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__models_http_models_user_infomodel__ = __webpack_require__("./src/app/models/http-models/user-infomodel.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services_parents_dashboard_service__ = __webpack_require__("./src/app/services/parents-dashboard.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__services_loader_service__ = __webpack_require__("./src/app/services/loader.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__services_flight_view_configuration_service__ = __webpack_require__("./src/app/services/flight-view-configuration.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_jspdf__ = __webpack_require__("./node_modules/jspdf/dist/jspdf.min.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_jspdf___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_jspdf__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__services_notification_service__ = __webpack_require__("./src/app/services/notification.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__services_school_accounts_service__ = __webpack_require__("./src/app/services/school-accounts.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__services_school_name_service__ = __webpack_require__("./src/app/services/school-name.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__angular_core___ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};














var HeaderComponent = (function () {
    function HeaderComponent(_router, authService, userService, parentsDashboardService, window, loaderService, flightViewConfig, notificationService, schoolAccountsService, schoolNameService, cdRef) {
        var _this = this;
        this._router = _router;
        this.authService = authService;
        this.userService = userService;
        this.parentsDashboardService = parentsDashboardService;
        this.window = window;
        this.loaderService = loaderService;
        this.flightViewConfig = flightViewConfig;
        this.notificationService = notificationService;
        this.schoolAccountsService = schoolAccountsService;
        this.schoolNameService = schoolNameService;
        this.cdRef = cdRef;
        this.roles = __WEBPACK_IMPORTED_MODULE_4__models_roles_enum__["a" /* Roles */];
        this.userData = new __WEBPACK_IMPORTED_MODULE_5__models_http_models_user_infomodel__["a" /* UserInfo */]();
        this.isMenuOpen = false;
        this.noMenu = false;
        if (this.authService.authenticated) {
            this.getUserData();
        }
        else {
            this.authService.loggedIn$.subscribe(function (loggedIn) {
                if (loggedIn === true)
                    _this.getUserData();
            });
        }
    }
    HeaderComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.flightViewConfig.isFlightViewConfig.subscribe(function (val) {
            _this.showFlightViewConfigItem = val;
        });
        this.schoolNameService.currentSchoolName.subscribe(function (schoolName) {
            _this.userData.schoolName = schoolName;
            if (!_this.cdRef['destroyed']) {
                _this.cdRef.detectChanges();
            }
        });
    };
    HeaderComponent.prototype.getUserData = function () {
        var _this = this;
        if (localStorage.getItem('profile') && localStorage.getItem('profile') != 'undefined')
            this.userPic = JSON.parse(localStorage.getItem('profile')).picture;
        this.userService.getUserInfo().subscribe(function (res) {
            _this.userData = res;
            if (localStorage.getItem('selectedSchoolName')) {
                _this.userData.schoolName = localStorage.getItem('selectedSchoolName');
                if (!_this.cdRef['destroyed']) {
                    _this.cdRef.detectChanges();
                }
            }
        });
    };
    HeaderComponent.prototype.changeLogo = function (menuState) {
        this.isMenuOpen = (menuState === 'open');
    };
    HeaderComponent.prototype.logout = function () {
        this.authService.logout(true);
    };
    // we need to create service for this. this need to be refactored
    HeaderComponent.prototype.downloadInstructions = function () {
        var _this = this;
        this.loaderService.displayMini(true);
        this.parentsDashboardService.getCarRidersInstructions()
            .subscribe(function (res) {
            if (res === null || res === "") {
                _this.notificationService.show("There are no instructions for download!", true, true);
            }
            else {
                var doc = new __WEBPACK_IMPORTED_MODULE_9_jspdf__();
                var strArr = doc.splitTextToSize(res, 175);
                doc.text(20, 20, strArr);
                doc.save('CarRidersInstructions.pdf');
            }
            _this.loaderService.displayMini(false);
        });
    };
    HeaderComponent.prototype.goToSchoolView = function () {
        if (localStorage.getItem('role') === "Super Admin") {
            this.schoolNameService.changeMessage('');
            if (!this.cdRef['destroyed']) {
                this.cdRef.detectChanges();
            }
            localStorage.removeItem('selectedSchoolName');
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Boolean)
    ], HeaderComponent.prototype, "noMenu", void 0);
    HeaderComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-header',
            template: __webpack_require__("./src/app/components/header/header.component.html"),
            providers: [
                { provide: 'Window', useValue: window }
            ]
        }),
        __param(4, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"])('Window')),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router___["Router"], __WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_3__services_user_management_service__["a" /* UserManagementService */],
            __WEBPACK_IMPORTED_MODULE_6__services_parents_dashboard_service__["a" /* ParentsDashboardService */],
            Window,
            __WEBPACK_IMPORTED_MODULE_7__services_loader_service__["a" /* LoaderService */],
            __WEBPACK_IMPORTED_MODULE_8__services_flight_view_configuration_service__["a" /* FlightViewConfigurationService */],
            __WEBPACK_IMPORTED_MODULE_10__services_notification_service__["a" /* NotificationService */],
            __WEBPACK_IMPORTED_MODULE_11__services_school_accounts_service__["a" /* SchoolAccountsService */],
            __WEBPACK_IMPORTED_MODULE_12__services_school_name_service__["a" /* SchoolNameService */],
            __WEBPACK_IMPORTED_MODULE_13__angular_core___["ChangeDetectorRef"]])
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "./src/app/components/header/main-menu/main-menu.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"main-menu\">\r\n  <button class=\"main-menu__hamburger\" #hamburger>\r\n    <span class=\"hamburger-line\"></span>\r\n  </button>\r\n  <div class=\"main-menu__wrap\" #menuWrap>\r\n    <div class=\"main-menu__panel\">\r\n      <nav class=\"main-menu__list\">\r\n        <a class=\"main-menu__link\" [routerLink]=\"['archive']\" [routerLinkActive]=\"'main-menu__link--current'\" *ngIf=\"authService.matchRoles(roles.schoolAdmin, roles.superAdmin)\">\r\n          <div class=\"main-menu__icon i-archive\"></div>\r\n          <span>Archive</span>\r\n        </a>\r\n\r\n        <a class=\"main-menu__link\" [routerLink]=\"['flights']\" [routerLinkActive]=\"'main-menu__link--current'\" *ngIf=\"authService.matchRoles(roles.schoolAdmin, roles.classroomTeacher, roles.dismissalTeacher, roles.superAdmin)\">\r\n          <div class=\"main-menu__icon i-flights\"></div>\r\n          <span>Flights</span>\r\n        </a>\r\n\r\n        <a class=\"main-menu__link\" [routerLink]=\"['scanner']\" [routerLinkActive]=\"'main-menu__link--current'\" *ngIf=\"authService.matchRoles(roles.scanner)\">\r\n          <div class=\"main-menu__icon i-scanner\"></div>\r\n          <span>Scanner Role</span>\r\n        </a>\r\n\r\n        <a class=\"main-menu__link\" [routerLink]=\"['dismissal-cards']\" [routerLinkActive]=\"'main-menu__link--current'\" *ngIf=\"authService.matchRoles(roles.schoolAdmin, roles.superAdmin)\">\r\n          <div class=\"main-menu__icon i-cards\"></div>\r\n          <span>Dismissal Cards</span>\r\n        </a>\r\n\r\n        <a class=\"main-menu__link\" [routerLink]=\"['students']\" [routerLinkActive]=\"'main-menu__link--current'\" *ngIf=\"authService.matchRoles(roles.schoolAdmin, roles.superAdmin)\">\r\n          <div class=\"main-menu__icon i-students\"></div>\r\n          <span>Students</span>\r\n        </a>\r\n\r\n        <a class=\"main-menu__link\" [routerLink]=\"['users-management']\" [routerLinkActive]=\"'main-menu__link--current'\" *ngIf=\"authService.matchRoles(roles.schoolAdmin, roles.superAdmin)\">\r\n          <div class=\"main-menu__icon i-users\"></div>\r\n          <span>Users</span>\r\n        </a>\r\n\r\n        <a class=\"main-menu__link\" [routerLink]=\"['classrooms']\" [routerLinkActive]=\"'main-menu__link--current'\" *ngIf=\"authService.matchRoles(roles.schoolAdmin, roles.superAdmin)\">\r\n          <div class=\"main-menu__icon i-classrooms\"></div>\r\n          <span>Classrooms</span>\r\n        </a>\r\n\r\n        <a class=\"main-menu__link\" [routerLink]=\"['school-configuration']\" [routerLinkActive]=\"'main-menu__link--current'\" *ngIf=\"authService.matchRoles(roles.schoolAdmin, roles.superAdmin)\">\r\n          <div class=\"main-menu__icon i-config\"></div>\r\n          <span>School Configuration</span>\r\n        </a>\r\n      </nav>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n\r\n"

/***/ }),

/***/ "./src/app/components/header/main-menu/main-menu.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MainMenuComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__models_roles_enum__ = __webpack_require__("./src/app/models/roles.enum.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_auth_service__ = __webpack_require__("./src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var MainMenuComponent = (function () {
    function MainMenuComponent(authService, route) {
        this.authService = authService;
        this.route = route;
        this.roles = __WEBPACK_IMPORTED_MODULE_1__models_roles_enum__["a" /* Roles */];
        this.stateChanged = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
    }
    ;
    MainMenuComponent.prototype.ngOnInit = function () {
        this.handleEvents();
        if (this.route.url === "/archive") {
            this.open();
        }
    };
    MainMenuComponent.prototype.handleEvents = function () {
        var _this = this;
        var self = this;
        this.hamburger.nativeElement.addEventListener('click', function () { return _this.toggle(); });
        this.menuWrap.nativeElement.addEventListener('click', function (event) {
            var target = event.target;
            if (target === this) {
                self.close();
                return;
            }
            while (target != this) {
                if (target.classList.contains('main-menu__link')) {
                    self.close();
                    return;
                }
                target = target.parentNode;
            }
        });
    };
    MainMenuComponent.prototype.open = function () {
        this.menuWrap.nativeElement.classList.add('is-visible');
        this.hamburger.nativeElement.classList.add('is-active');
        this.stateChanged.emit('open');
    };
    MainMenuComponent.prototype.close = function () {
        this.menuWrap.nativeElement.classList.remove('is-visible');
        this.hamburger.nativeElement.classList.remove('is-active');
        this.stateChanged.emit('close');
    };
    MainMenuComponent.prototype.toggle = function () {
        this.menuWrap.nativeElement.classList.toggle('is-visible');
        this.hamburger.nativeElement.classList.toggle('is-active');
        this.menuWrap.nativeElement.classList.contains('is-visible') ? this.stateChanged.emit('open') : this.stateChanged.emit('close');
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('hamburger'),
        __metadata("design:type", Object)
    ], MainMenuComponent.prototype, "hamburger", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('menuWrap'),
        __metadata("design:type", Object)
    ], MainMenuComponent.prototype, "menuWrap", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
        __metadata("design:type", Object)
    ], MainMenuComponent.prototype, "stateChanged", void 0);
    MainMenuComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-main-menu',
            template: __webpack_require__("./src/app/components/header/main-menu/main-menu.component.html")
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */], __WEBPACK_IMPORTED_MODULE_3__angular_router__["Router"]])
    ], MainMenuComponent);
    return MainMenuComponent;
}());



/***/ }),

/***/ "./src/app/components/login/login.component.html":
/***/ (function(module, exports) {

module.exports = "<div style=\"display:flex;\">\r\n  <div class=\"login\" (window:resize)=\"fixLeftSideWidth()\">\r\n    <!-- Left Side -->\r\n    <div #leftSide class=\"login__left\">\r\n      <img class=\"login__logo\" [src]=\"'../../../assets/images/control-point-logo--white-letters.png'\" alt=\"logo\" (load)=\"fixLeftSideWidth()\" />\r\n      <img #leftSidePic class=\"login__pic\" src=\"../../../assets/images/control_point_login_2.png\" alt=\"login image\" />\r\n    </div>\r\n    <!-- Right Side -->\r\n    <div class=\"login__right\">\r\n      <button *ngIf=\"activeRoute === '/forgot-password'\" class=\"flat purple icon login__back-btn\" [routerLink]=\"['/login']\">\r\n        <span>BACK TO SIGN IN</span>\r\n        <i class=\"material-icons\">arrow_back</i>\r\n      </button>\r\n\r\n      <!-- Login Form -->\r\n      <form *ngIf=\"activeRoute.includes('/login')\" class=\"cp-form login__form\" #loginForm=\"ngForm\" (submit)=\"login()\">\r\n        <header class=\"cp-form__header\">\r\n          <img class=\"login__logo-mobile\" src=\"../../../assets/images/control-point-logo--white-letters.png\" alt=\"logo\" />\r\n          <h1 class=\"cp-form__title\">Sign in to Control Point</h1>\r\n        </header>\r\n\r\n        <label class=\"cp-input-label\">EMAIL ADDRESS</label>\r\n        <input class=\"cp-text-input login__text-input\" type=\"text\" tabindex=\"1\" [(ngModel)]=\"userLogin\" placeholder=\"Enter your email\" name=\"loginInput\" required />\r\n\r\n        <div class=\"login__input-wrap\">\r\n          <label class=\"cp-input-label\">PASSWORD</label>\r\n          <a class=\"login__forgot-pswd\" [routerLink]=\"['/forgot-password']\" tabindex=\"-1\">Forgot password?</a>\r\n          <div class=\"show-password\">\r\n            <input #passwordInput class=\"cp-text-input login__text-input\" type=\"password\" tabindex=\"2\" [(ngModel)]=\"userPassword\" placeholder=\"Enter your password\" name=\"passwordInput\" required />\r\n            <button class=\"show-password__button\" type=\"button\" (click)=\"triggerPasswordVisibility()\">\r\n              <i class=\"fa fa-eye\" *ngIf=\"!isPasswordVisible\" aria-hidden=\"true\"></i>\r\n              <i class=\"fa fa-eye-slash\" *ngIf=\"isPasswordVisible\" aria-hidden=\"true\"></i>\r\n            </button>\r\n          </div>\r\n        </div>\r\n\r\n        <footer class=\"cp-form__footer\" style=\"display:block;\">\r\n          <p-checkbox class=\"cp-primeng-checkbox\" name=\"rememberMeCB\" label=\"KEEP ME LOGGED IN\" [(ngModel)]=\"userKeepLoggedIn\" binary=\"true\"></p-checkbox>\r\n          <button type=\"submit\" class=\"flat accent shadow\" [disabled]=\"loginForm.form.invalid\">SIGN IN</button>\r\n        </footer>\r\n      </form>\r\n\r\n      <!-- Forgot Password Form -->\r\n      <form *ngIf=\"activeRoute === '/forgot-password'\" class=\"cp-form login__form\" #forgotPasswordForm=\"ngForm\" (submit)=\"sendPasswordReset()\">\r\n        <header class=\"cp-form__header\">\r\n          <img class=\"login__logo-mobile\" src=\"../../../assets/images/control-point-logo--white-letters.png\" alt=\"logo\" />\r\n          <h1 class=\"cp-form__title\">Forgot your password?</h1>\r\n          <p>Please enter the email address associated with your account.</p>\r\n        </header>\r\n\r\n        <label class=\"cp-input-label\">EMAIL ADDRESS</label>\r\n        <input class=\"cp-text-input login__text-input\" type=\"text\" [(ngModel)]=\"forgotPasswordEmail\" placeholder=\"Enter your email\" name=\"emailInput\" required />\r\n\r\n        <footer class=\"cp-form__footer\">\r\n          <button type=\"submit\" class=\"flat accent shadow\" [disabled]=\"forgotPasswordForm.form.invalid\">SEND LINK</button>\r\n        </footer>\r\n      </form>\r\n\r\n      <!-- Create Account Form -->\r\n      <form *ngIf=\"activeRoute && (activeRoute.includes('/create-account'))\" class=\"cp-form login__form\" #createPassword=\"ngForm\" (submit)=\"setPassword()\">\r\n        <header class=\"cp-form__header\">\r\n          <img class=\"login__logo-mobile\" src=\"../../../assets/images/control-point-logo--white-letters.png\" alt=\"logo\" />\r\n          <h1 *ngIf=\"activeRoute.includes('/create-account')\" class=\"cp-form__title\">Create your account</h1>\r\n        </header>\r\n\r\n        <div class=\"login__input-wrap\">\r\n\r\n          <label class=\"cp-input-label\">EMAIL ADDRESS</label>\r\n          <input class=\"cp-text-input login__text-input\" type=\"text\" [(ngModel)]=\"userEmailForPasswordSet\" name=\"userEmailForPasswordSet\" disabled />\r\n\r\n          <label class=\"cp-input-label\">PASSWORD</label>\r\n          <div class=\"show-password\">\r\n            <input #passwordInput class=\"cp-text-input login__text-input\" type=\"password\" [(ngModel)]=\"newPassword\" placeholder=\"Create password\" name=\"newPassword\" required />\r\n            <button class=\"show-password__button\" type=\"button\" (click)=\"triggerPasswordVisibility()\">\r\n              <i class=\"fa fa-eye\" *ngIf=\"!isPasswordVisible\" aria-hidden=\"true\"></i>\r\n              <i class=\"fa fa-eye-slash\" *ngIf=\"isPasswordVisible\" aria-hidden=\"true\"></i>\r\n            </button>\r\n          </div>\r\n        </div>\r\n\r\n        <footer class=\"cp-form__footer\">\r\n          <button type=\"submit\" class=\"flat accent shadow\" [disabled]=\"createPassword.form.invalid\">CONTINUE</button>\r\n        </footer>\r\n      </form>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/components/login/login.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_auth_service__ = __webpack_require__("./src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_user_management_service__ = __webpack_require__("./src/app/services/user-management.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_notification_service__ = __webpack_require__("./src/app/services/notification.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_loader_service__ = __webpack_require__("./src/app/services/loader.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var LoginComponent = (function () {
    function LoginComponent(router, authService, userManagementService, notificationService, loaderService) {
        this.router = router;
        this.authService = authService;
        this.userManagementService = userManagementService;
        this.notificationService = notificationService;
        this.loaderService = loaderService;
        this.isPasswordVisible = false;
        this.getRoute();
    }
    LoginComponent.prototype.ngAfterViewInit = function () { };
    LoginComponent.prototype.login = function () {
        var _this = this;
        this.loaderService.displayMini(true);
        this.userManagementService.checkIfUserOrSchoolSuspended(this.userLogin).subscribe(function (res) {
            if (res) {
                _this.loaderService.displayMini(false);
                _this.notificationService.show('The user or school was suspended!', true, true);
            }
            else {
                _this.authService.login(_this.userLogin, _this.userPassword, _this.userKeepLoggedIn, function (res) {
                    if (res) {
                        _this.userManagementService.activateUser(_this.userLogin).subscribe(function (res) { });
                    }
                    else {
                        _this.notificationService.show("You entered an invalid email and/or password. Please try again.", true, true);
                    }
                    _this.loaderService.displayMini(false);
                });
            }
        });
    };
    LoginComponent.prototype.getRoute = function () {
        var _this = this;
        this.router.events.subscribe(function (event) {
            if (event instanceof __WEBPACK_IMPORTED_MODULE_1__angular_router__["NavigationEnd"]) {
                _this.activeRoute = event.urlAfterRedirects;
                if (event.urlAfterRedirects.includes('create-account')) {
                    _this.userEmailForPasswordSet = _this.router.routerState.snapshot.root.queryParams['email'];
                }
            }
        });
    };
    LoginComponent.prototype.setPassword = function () {
        var _this = this;
        this.authService.setPassword(this.userEmailForPasswordSet, this.newPassword)
            .subscribe(function (res) {
            _this.userManagementService.activateUserAfterSetPassword(_this.userEmailForPasswordSet).subscribe(function (res) { return _this.router.navigate(['../login']); });
            _this.notificationService.show("Account created successfully. Please use your email and password to log in.", true, false);
        }, function (err) {
            _this.notificationService.show(err.error, true, true);
        });
    };
    LoginComponent.prototype.sendPasswordReset = function () {
        var _this = this;
        this.authService.resetPassword(this.forgotPasswordEmail)
            .subscribe(function (response) { _this.messageToDisplay = "A password reset link has been sent to you."; _this.router.navigateByUrl('/login'); });
    };
    LoginComponent.prototype.triggerPasswordVisibility = function () {
        this.isPasswordVisible = !this.isPasswordVisible;
        this.passwordInput.nativeElement.type = this.isPasswordVisible ? 'text' : 'password';
    };
    LoginComponent.prototype.fixLeftSideWidth = function () {
        if (this.leftSidePic.nativeElement.offsetWidth !== 0)
            this.leftSide.nativeElement.style.width = this.leftSidePic.nativeElement.offsetWidth + 'px';
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('passwordInput'),
        __metadata("design:type", Object)
    ], LoginComponent.prototype, "passwordInput", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('leftSide'),
        __metadata("design:type", Object)
    ], LoginComponent.prototype, "leftSide", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('leftSidePic'),
        __metadata("design:type", Object)
    ], LoginComponent.prototype, "leftSidePic", void 0);
    LoginComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            template: __webpack_require__("./src/app/components/login/login.component.html")
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["Router"], __WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */], __WEBPACK_IMPORTED_MODULE_3__services_user_management_service__["a" /* UserManagementService */], __WEBPACK_IMPORTED_MODULE_4__services_notification_service__["a" /* NotificationService */],
            __WEBPACK_IMPORTED_MODULE_5__services_loader_service__["a" /* LoaderService */]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/components/parents-dashboard/parents-dashboard.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"page-container\">\r\n  <!-- Student-information -->\r\n  <div class=\"sub-header\">\r\n    <div class=\"flex justify\">\r\n      <div class=\"jumbo-header jumbo-header--sm\">Student information</div>\r\n    </div>\r\n  </div>\r\n\r\n  <div class=\"cp-cards-grid\">\r\n\r\n    <article class=\"cp-card\" *ngFor=\"let student of parentInfo?.students\">\r\n      <div class=\"dropdown cp-card__menu\">\r\n        <button class=\"btn dd-toggle\" data-toggle=\"dropdown\" data-offset=\"0%, -100%\" data-flip=\"false\" aria-haspopup=\"true\" aria-expanded=\"false\">\r\n          <span>\r\n            <i class=\"material-icons\">more_vert</i>\r\n          </span>\r\n        </button>\r\n        <div class=\"dropdown-menu dropdown-menu-right\" aria-labelledby=\"dropdownMenuButton\">\r\n          <button class=\"dropdown-item\" type=\"button\" (click)=\"modalService.openModal(editStudentNameTemp); setActiveStudent(student)\">Edit name</button>\r\n        </div>\r\n      </div>\r\n\r\n      <div class=\"cp-card__barcode\"></div>\r\n      <div class=\"cp-card__text-section\">\r\n        <b>{{ student.name }}</b>\r\n      </div>\r\n\r\n      <div class=\"cp-card__text-section\">\r\n        Grade: {{ student.grade }} · {{ student.classroom }} <br>\r\n        ID: {{ student.externalId }}\r\n      </div>\r\n    </article>\r\n  </div>\r\n\r\n  <!-- Dismissal Cards -->\r\n  <div class=\"sub-header\">\r\n    <div class=\"flex justify\">\r\n      <div class=\"jumbo-header jumbo-header--sm\">Dismissal Cards</div>\r\n      <div class=\"flex\">\r\n        <button class=\"item flat accent shadow\" type=\"submit\" [disabled]=\"!parentInfo?.dismissalCards.length\" (click)=\"print(parentInfo?.dismissalCards)\">PRINT ALL</button>\r\n        <button class=\"item flat accent shadow\" type=\"submit\" [routerLink]=\"['/dismissal-cards/create']\" routerLinkActive=\"router-link-active\">CREATE</button>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n  <div class=\"cp-cards-grid\">\r\n    <article class=\"cp-card\" *ngFor=\"let card of parentInfo?.dismissalCards; let i = index\">\r\n      <div class=\"cp-card__status\" [ngClass]=\"{'is-active': card.status}\">{{ card.status ? 'Active' : 'Unprinted' }}</div>\r\n\r\n      <div class=\"dropdown cp-card__menu\">\r\n        <button class=\"btn dd-toggle\" data-toggle=\"dropdown\" data-offset=\"0%, -100%\" data-flip=\"false\" aria-haspopup=\"true\" aria-expanded=\"false\">\r\n          <span>\r\n            <i class=\"material-icons\">more_vert</i>\r\n          </span>\r\n        </button>\r\n        <div class=\"dropdown-menu dropdown-menu-right\" aria-labelledby=\"dropdownMenuButton\">\r\n          <button class=\"dropdown-item\" type=\"button\" [routerLink]=\"['/dismissal-cards/edit', card.id]\">Edit</button>\r\n          <button class=\"dropdown-item\" type=\"button\" (click)=\"print([card], i)\">Print</button>\r\n          <button class=\"dropdown-item\" type=\"button\" (click)=\"setFocusCardId(card.id); modalService.openModal(deleteDismissalCard)\">Delete</button>\r\n        </div>\r\n      </div>\r\n\r\n      <div id=\"js-card-to-print{{i}}\" class=\"js-card-to-print\">\r\n        <div *ngFor=\"let student of card.students; let st = index\">\r\n          <ngx-barcode *ngIf=\"student.isPrintingAtHome\" id=\"student-card-{{i}}-{{st}}\" class=\"cp-card__barcode\" [ngClass]=\"{'cp-card__barcode--sm': card.students.length > 1 }\"\r\n                       [bc-value]=\"convertCardforBarcode(card, student)\"></ngx-barcode>\r\n          <div *ngIf=\"!student.isPrintingAtHome\" id=\"student-nocard-{{i}}-{{st}}\" style=\"align-items: center; color: red; margin-left:auto; margin-right:auto; justify-content: center;\" class=\"cp-card__barcode\" [ngClass]=\"{'cp-card__barcode--sm': card.students.length > 1 }\">You don't have access to see barcode</div>\r\n\r\n          <div class=\"cp-card__text-section\">\r\n            <b>{{ student.name }}</b> <br>\r\n            Student ID: {{ student.id }}\r\n          </div>\r\n\r\n        </div>\r\n\r\n        <div class=\"cp-card__text-section\">\r\n          <b>{{ card.parentName }}</b> <br>\r\n          Driver’s License: {{ card.driversLicense }} <br>\r\n          Relationship: {{ card.relationship }} <br>\r\n          Phone: {{ card.phoneNumber }}\r\n        </div>\r\n      </div>\r\n\r\n    </article>\r\n  </div>\r\n\r\n\r\n</div>\r\n\r\n<!-- Edit Student Name PopUp -->\r\n\r\n<ng-template #editStudentNameTemp>\r\n  <form class=\"cp-modal\" #editStudentNameForm=\"ngForm\">\r\n    <header class=\"cp-modal__header\">\r\n      <h5 class=\"cp-modal__title\">Edit Student Name</h5>\r\n    </header>\r\n\r\n    <div class=\"cp-modal__content\">\r\n      <input class=\"cp-text-input\" type=\"text\" name=\"studentName\"\r\n             #studentName=\"ngModel\" [(ngModel)]=\"activeStudent.name\"\r\n             minlength=\"3\" maxlength=\"50\" pattern=\"^[A-Za-z\\s]{1,}[\\.]{0,1}[A-Za-z\\s]{0,}$\"\r\n             whitespace-validator required />\r\n      <!-- studentName validation -->\r\n      <div *ngIf=\"studentName.invalid && (studentName.dirty || studentName.touched)\"\r\n           class=\"alert alert-danger\">\r\n        <div *ngIf=\"studentName?.errors.invalidWhitespace\">You can't use white-spaces as students name!</div>\r\n        <div *ngIf=\"studentName?.errors.minlength\">Student name could not contain less than 3 symbols!</div>\r\n        <div *ngIf=\"studentName?.errors.required\">Student name is required</div>\r\n        <div *ngIf=\"studentName?.errors.pattern\">Student name is invalid</div>\r\n      </div>\r\n    </div>\r\n\r\n    <footer class=\"cp-modal__footer\">\r\n      <button class=\"flat black\" (click)=\"modalService.modalRef.hide()\">CANCEL</button>\r\n      <button class=\"flat accent shadow\" [disabled]=\"editStudentNameForm.invalid || editStudentNameForm.pending\" (click)=\"editStudentName(); modalService.modalRef.hide()\">ACCEPT</button>\r\n    </footer>\r\n  </form>\r\n</ng-template>\r\n\r\n<ng-template #carRiderProcedures>\r\n  <div class=\"cp-modal__bgpurple\">\r\n    <!--<button (click)=\"modalService.modalRef.hide()\" class=\"close-thik\"></button>-->\r\n    <img src=\"../../../assets/images/car_rider.svg\" alt=\"Car Rider Procedure\" />\r\n  </div>\r\n  <div class=\"cp-modal__car-riders\">\r\n\r\n    <header class=\"cp-modal__header\">\r\n      <h5 class=\"cp-modal__title cp-car-rider-content\">Car Rider Procedures</h5>\r\n      <p-checkbox class=\"cp-primeng-checkbox cp-car-rider-content\" label=\"I’ve read the car rider procedure\" [(ngModel)]=\"isInstructionsChecked\" binary=\"true\"></p-checkbox>\r\n    </header>    \r\n\r\n    <footer class=\"cp-modal__footer\">\r\n      <button class=\"flat black cp-car-rider-button\" (click)=\"downloadInstructions()\">DOWNLOAD INSTRUCTIONS</button>\r\n      <button class=\"flat accent shadow\" [disabled]=\"!isInstructionsChecked\" (click)=\"setInstructionsChecked(); modalService.modalRef.hide()\">CONTINUE</button>\r\n    </footer>\r\n  </div>\r\n</ng-template>\r\n\r\n<ng-template #deleteDismissalCard>\r\n  <div class=\"cp-modal\">\r\n    <header class=\"cp-modal__header\">\r\n      <h5 class=\"cp-modal__title\">Delete Dismissal Card?</h5>\r\n    </header>\r\n\r\n    <p class=\"cp-modal__text\">\r\n      Are you sure you want to delete this Dismissal Card?<br />\r\n      This action can not be undone!\r\n    </p>\r\n\r\n    <footer class=\"cp-modal__footer\">\r\n      <button class=\"flat black\" (click)=\"modalService.modalRef.hide()\">CANCEL</button>\r\n      <button class=\"flat accent shadow\" (click)=\"deleteCard(); modalService.modalRef.hide()\">DELETE</button>\r\n    </footer>\r\n  </div>\r\n</ng-template>\r\n\r\n\r\n"

/***/ }),

/***/ "./src/app/components/parents-dashboard/parents-dashboard.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ParentsDashboardComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_parents_dashboard_service__ = __webpack_require__("./src/app/services/parents-dashboard.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_loader_service__ = __webpack_require__("./src/app/services/loader.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_modal_service__ = __webpack_require__("./src/app/services/modal.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_notification_service__ = __webpack_require__("./src/app/services/notification.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_dismissal_cards_service__ = __webpack_require__("./src/app/services/dismissal-cards.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_jspdf__ = __webpack_require__("./node_modules/jspdf/dist/jspdf.min.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_jspdf___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_jspdf__);
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};







var ParentsDashboardComponent = (function () {
    function ParentsDashboardComponent(parentsDashboardService, dismissalCardsService, loaderService, modalService, notificationService, window) {
        this.parentsDashboardService = parentsDashboardService;
        this.dismissalCardsService = dismissalCardsService;
        this.loaderService = loaderService;
        this.modalService = modalService;
        this.notificationService = notificationService;
        this.window = window;
        this.isInstructionsChecked = false;
    }
    ParentsDashboardComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.loaderService.display(true);
        this.parentsDashboardService.getParentInfo().subscribe(function (res) {
            _this.parentInfo = res;
            _this.loaderService.display(false);
            if (!_this.parentInfo.instructionsChecked && _this.parentInfo.instruction != "") {
                setTimeout(function () {
                    _this.modalService.openModal(_this.carRiderModal, "car-riders", "static");
                });
            }
        });
    };
    ParentsDashboardComponent.prototype.convertCardforBarcode = function (card, student) {
        // Scanner Input is studentId: number, parentId: number
        return student.id + "-" + card.id;
    };
    ParentsDashboardComponent.prototype.setActiveStudent = function (student) {
        this.activeStudent = __assign({}, student);
    };
    ParentsDashboardComponent.prototype.editStudentName = function () {
        var _this = this;
        var activeStudentIndex = null;
        this.loaderService.displayMini(true);
        this.parentInfo.students.forEach(function (student, index) {
            if (student.id === _this.activeStudent.id) {
                activeStudentIndex = index;
            }
        });
        this.parentsDashboardService.editStudentName(this.activeStudent).subscribe(function () {
            _this.parentInfo.students[activeStudentIndex] = _this.activeStudent;
            _this.loaderService.displayMini(false);
        });
    };
    ParentsDashboardComponent.prototype.deleteCard = function () {
        var _this = this;
        this.loaderService.displayMini(true);
        this.dismissalCardsService.deleteDismissalCard(this.focusCardId).subscribe(function () {
            var cardIndex;
            _this.parentInfo.dismissalCards.forEach(function (card, index) { if (card.id === _this.focusCardId) {
                cardIndex = index;
            } });
            _this.parentInfo.dismissalCards.splice(cardIndex, 1);
            _this.loaderService.displayMini(false);
            _this.notificationService.show('Dismissal Card DELETED successfully', true);
        });
    };
    ParentsDashboardComponent.prototype.isSafariBrowser = function () {
        var sBrowser, sUsrAg = navigator.userAgent;
        var isSafari = false;
        if (sUsrAg.indexOf("Chrome") > -1) {
            sBrowser = "Google Chrome";
            isSafari = false;
        }
        else if (sUsrAg.indexOf("Safari") > -1) {
            sBrowser = "Apple Safari";
            isSafari = true;
        }
        else if (sUsrAg.indexOf("Opera") > -1) {
            sBrowser = "Opera";
            isSafari = false;
        }
        else if (sUsrAg.indexOf("Firefox") > -1) {
            sBrowser = "Mozilla Firefox";
            isSafari = false;
        }
        else if (sUsrAg.indexOf("MSIE") > -1) {
            sBrowser = "Microsoft Internet Explorer";
            isSafari = false;
        }
        else {
            sBrowser = "unknown";
            isSafari = false;
        }
        return isSafari;
    };
    ParentsDashboardComponent.prototype.print = function (cards, studentIndex) {
        var addCloseWindow = "";
        if (!this.isSafariBrowser()) {
            addCloseWindow = "window.close();";
        }
        var popupWin;
        var datePrinting = new Date().toDateString();
        // set page header for printing
        // add <div class="background-header" > </div> for fxing problem with background in Firefox, EDGE
        var pageHeader = "<div class=\"row\" style=\"border: 1px solid;\">\n                <div class=\"col-4\" style=\"height:110px; padding-top: 25px;\">\n                  <div class=\"background-header\" > </div>\n                     <svg class=\"cp-image\" style=\"margin-left: 15px;\" viewBox=\"0 0 493.345 96\">\n                        <defs>\n                          <style>\n                            .cls-1 {\n                              fill: #fff;\n                            }\n                          </style>\n                        </defs>\n                        <g id=\"Group_4\" data-name=\"Group 4\" transform=\"translate(0.041 0.001)\">\n                          <path id=\"Path_1\" data-name=\"Path 1\" class=\"cls-1\" d=\"M238.307,84.919c-6.724,0-11.766-1.868-15.315-5.6-3.486-3.735-5.292-9.027-5.292-15.875a24.731,24.731,0,0,1,1.619-9.152,19.723,19.723,0,0,1,4.42-6.786,18.045,18.045,0,0,1,6.661-4.171,24.3,24.3,0,0,1,8.4-1.432,27.524,27.524,0,0,1,4.731.374,33.576,33.576,0,0,1,3.735.872,14.084,14.084,0,0,1,2.677,1.058c.685.374,1.245.623,1.556.809l-2.677,7.471a22.557,22.557,0,0,0-4.42-1.743,20.359,20.359,0,0,0-5.728-.685,13.615,13.615,0,0,0-4.171.685,9.677,9.677,0,0,0-3.611,2.3,12.5,12.5,0,0,0-2.552,4.047,17.337,17.337,0,0,0-.934,6.039,20.232,20.232,0,0,0,.623,5.292,12.679,12.679,0,0,0,1.992,4.233,9.332,9.332,0,0,0,3.673,2.8,13.019,13.019,0,0,0,5.479,1.058,20.98,20.98,0,0,0,3.611-.249c1.058-.187,1.992-.374,2.864-.56a9.931,9.931,0,0,0,2.179-.747c.623-.249,1.183-.56,1.743-.747l2.553,7.6a21.056,21.056,0,0,1-5.541,2.117A29.875,29.875,0,0,1,238.307,84.919Z\" transform=\"translate(-82.183 -15.815)\"/>\n                          <path id=\"Path_2\" data-name=\"Path 2\" class=\"cls-1\" d=\"M306.317,74.573a20.863,20.863,0,0,1-1.058,6.724,13.776,13.776,0,0,1-3.113,5.23,14.768,14.768,0,0,1-4.856,3.362,17.469,17.469,0,0,1-12.638,0,14.434,14.434,0,0,1-8.031-8.591,19.536,19.536,0,0,1-1.121-6.724,18.178,18.178,0,0,1,1.183-6.724,15.171,15.171,0,0,1,3.237-5.167,13.734,13.734,0,0,1,4.856-3.3A15.326,15.326,0,0,1,290.94,58.2a15.027,15.027,0,0,1,11.082,4.482A15.034,15.034,0,0,1,305.2,67.85,19.039,19.039,0,0,1,306.317,74.573Zm-9.027,0a11.582,11.582,0,0,0-1.619-6.475,5.791,5.791,0,0,0-9.338,0,10.956,10.956,0,0,0-1.681,6.475,11.3,11.3,0,0,0,1.681,6.537,5.7,5.7,0,0,0,9.338,0A11.951,11.951,0,0,0,297.29,74.573Z\" transform=\"translate(-103.999 -21.967)\"/>\n                          <path id=\"Path_3\" data-name=\"Path 3\" class=\"cls-1\" d=\"M333.6,60.105a46.2,46.2,0,0,1,5.852-1.245,47.885,47.885,0,0,1,7.471-.56,18.075,18.075,0,0,1,6.6,1.058,9.9,9.9,0,0,1,4.171,2.926,11.04,11.04,0,0,1,2.179,4.545,23.967,23.967,0,0,1,.685,5.852V90.362h-8.84V73.677c0-2.864-.374-4.856-1.121-6.039s-2.179-1.805-4.233-1.805c-.623,0-1.307,0-1.992.062s-1.37.125-1.93.187V90.238H333.6Z\" transform=\"translate(-125.928 -22.005)\"/>\n                          <path id=\"Path_4\" data-name=\"Path 4\" class=\"cls-1\" d=\"M387,46.132l8.84-1.432v9.214h10.646V61.26H395.84V72.28a8.544,8.544,0,0,0,1,4.482c.623,1.121,1.992,1.681,3.922,1.681a15.947,15.947,0,0,0,5.665-1l1.245,6.91a23.829,23.829,0,0,1-3.549,1.121,21,21,0,0,1-4.794.5,14.974,14.974,0,0,1-5.977-1,9.074,9.074,0,0,1-3.8-2.739,10.66,10.66,0,0,1-1.992-4.233,25.289,25.289,0,0,1-.56-5.541V46.132Z\" transform=\"translate(-146.083 -16.872)\"/>\n                          <path id=\"Path_5\" data-name=\"Path 5\" class=\"cls-1\" d=\"M446.3,66.929c-.809-.187-1.743-.436-2.8-.623A20,20,0,0,0,440.076,66c-.56,0-1.245.062-1.992.125a15.543,15.543,0,0,0-1.743.311V90.338H427.5V60.7a53.484,53.484,0,0,1,5.6-1.556,32.177,32.177,0,0,1,7.222-.747c.5,0,1.058,0,1.743.062a19.337,19.337,0,0,1,1.992.249c.685.125,1.37.249,1.992.374a9.831,9.831,0,0,1,1.743.5Z\" transform=\"translate(-161.369 -22.043)\"/>\n                          <path id=\"Path_6\" data-name=\"Path 6\" class=\"cls-1\" d=\"M492.717,74.573a20.861,20.861,0,0,1-1.058,6.724,14.269,14.269,0,0,1-3.113,5.23,14.767,14.767,0,0,1-4.856,3.362,17.469,17.469,0,0,1-12.638,0,14.434,14.434,0,0,1-8.031-8.591,19.536,19.536,0,0,1-1.121-6.724,18.178,18.178,0,0,1,1.183-6.724,15.173,15.173,0,0,1,3.237-5.167,13.734,13.734,0,0,1,4.856-3.3A15.326,15.326,0,0,1,477.34,58.2a15.027,15.027,0,0,1,11.082,4.482A15.033,15.033,0,0,1,491.6,67.85,19.037,19.037,0,0,1,492.717,74.573Zm-9.027,0a11.582,11.582,0,0,0-1.619-6.475,5.791,5.791,0,0,0-9.338,0,11.428,11.428,0,0,0-1.681,6.475,11.3,11.3,0,0,0,1.681,6.537,5.7,5.7,0,0,0,9.338,0A11.951,11.951,0,0,0,483.69,74.573Z\" transform=\"translate(-174.353 -21.967)\"/>\n                          <path id=\"Path_7\" data-name=\"Path 7\" class=\"cls-1\" d=\"M532.414,82.292a24.143,24.143,0,0,1-6.288-.809,8.988,8.988,0,0,1-3.8-2.179,7.58,7.58,0,0,1-1.93-3.362,19.343,19.343,0,0,1-.5-4.482V37.032l8.84-1.432V69.654a10.7,10.7,0,0,0,.187,2.117,4.245,4.245,0,0,0,.685,1.619,3.2,3.2,0,0,0,1.432,1.058,10.488,10.488,0,0,0,2.552.56Z\" transform=\"translate(-196.244 -13.437)\"/>\n                          <path id=\"Path_8\" data-name=\"Path 8\" class=\"cls-1\" d=\"M580.689,42.8c6.163,0,10.833,1.058,14.132,3.237s4.918,5.728,4.918,10.584c0,4.981-1.681,8.529-4.98,10.708s-8.093,3.3-14.257,3.3h-2.926V84.387H568.3V43.858a50.065,50.065,0,0,1,6.412-.809C577.016,42.862,579.008,42.8,580.689,42.8Zm.623,7.844c-.685,0-1.307,0-1.992.062-.623.062-1.245.062-1.681.125V62.722h2.926c3.237,0,5.6-.436,7.222-1.307s2.428-2.49,2.428-4.856a5.735,5.735,0,0,0-.623-2.864,4.578,4.578,0,0,0-1.805-1.805,8.722,8.722,0,0,0-2.8-.934A21.857,21.857,0,0,0,581.312,50.644Z\" transform=\"translate(-214.512 -16.155)\"/>\n                          <path id=\"Path_9\" data-name=\"Path 9\" class=\"cls-1\" d=\"M653.417,74.573a20.863,20.863,0,0,1-1.058,6.724,13.777,13.777,0,0,1-3.113,5.23,14.767,14.767,0,0,1-4.856,3.362,17.469,17.469,0,0,1-12.638,0,14.434,14.434,0,0,1-8.031-8.591,19.536,19.536,0,0,1-1.121-6.724,18.176,18.176,0,0,1,1.183-6.724,15.173,15.173,0,0,1,3.237-5.167,13.734,13.734,0,0,1,4.856-3.3A15.326,15.326,0,0,1,638.04,58.2a15.027,15.027,0,0,1,11.082,4.482A15.032,15.032,0,0,1,652.3,67.85,19.04,19.04,0,0,1,653.417,74.573Zm-9.027,0a11.582,11.582,0,0,0-1.619-6.475,5.175,5.175,0,0,0-4.669-2.366,5.382,5.382,0,0,0-4.669,2.366,10.956,10.956,0,0,0-1.681,6.475,11.3,11.3,0,0,0,1.681,6.537,5.7,5.7,0,0,0,9.338,0A11.95,11.95,0,0,0,644.39,74.573Z\" transform=\"translate(-235.007 -21.967)\"/>\n                          <path id=\"Path_10\" data-name=\"Path 10\" class=\"cls-1\" d=\"M689.784,41.73a4.889,4.889,0,0,1-1.556,3.86,5.779,5.779,0,0,1-7.471,0,4.8,4.8,0,0,1-1.556-3.86,4.889,4.889,0,0,1,1.556-3.86,5.437,5.437,0,0,1,3.735-1.37,5.749,5.749,0,0,1,3.735,1.37A4.978,4.978,0,0,1,689.784,41.73Zm-.809,40.342h-8.84V50.819h8.84Z\" transform=\"translate(-256.37 -13.777)\"/>\n                          <path id=\"Path_11\" data-name=\"Path 11\" class=\"cls-1\" d=\"M705.9,60.105a46.2,46.2,0,0,1,5.852-1.245,47.885,47.885,0,0,1,7.471-.56,18.076,18.076,0,0,1,6.6,1.058,9.9,9.9,0,0,1,4.171,2.926,11.04,11.04,0,0,1,2.179,4.545,23.969,23.969,0,0,1,.685,5.852V90.362h-8.84V73.677c0-2.864-.374-4.856-1.121-6.039s-2.179-1.805-4.233-1.805c-.623,0-1.307,0-1.992.062s-1.37.125-1.93.187V90.238H705.9Z\" transform=\"translate(-266.447 -22.005)\"/>\n                          <path id=\"Path_12\" data-name=\"Path 12\" class=\"cls-1\" d=\"M759.2,46.132l8.84-1.432v9.214h10.646V61.26H768.04V72.28a8.544,8.544,0,0,0,1,4.482c.623,1.121,1.992,1.681,3.922,1.681a15.947,15.947,0,0,0,5.665-1l1.245,6.91a23.825,23.825,0,0,1-3.549,1.121,21,21,0,0,1-4.794.5,14.974,14.974,0,0,1-5.977-1,9.074,9.074,0,0,1-3.8-2.739,10.66,10.66,0,0,1-1.992-4.233,25.289,25.289,0,0,1-.56-5.541Z\" transform=\"translate(-286.565 -16.872)\"/>\n                          <g id=\"Group_1\" data-name=\"Group 1\" transform=\"translate(-0.041 -0.001)\">\n                            <path id=\"Path_13\" data-name=\"Path 13\" class=\"cls-1\" d=\"M68.778,96a32.429,32.429,0,0,1-18.366-5.79A32.094,32.094,0,1,1,18.475,34.8a32.114,32.114,0,1,1,64,0A32.113,32.113,0,0,1,68.778,96ZM50.475,81.8a3.868,3.868,0,0,1,2.428.872,24.637,24.637,0,1,0,24.28-41.961,3.793,3.793,0,0,1-2.428-4.233,24.638,24.638,0,1,0-48.5.062,3.793,3.793,0,0,1-2.428,4.233A25.051,25.051,0,0,0,10.817,51.61,24.576,24.576,0,0,0,47.984,82.676,3.806,3.806,0,0,1,50.475,81.8Z\" transform=\"translate(0.041 0.001)\"/>\n                          </g>\n                          <path id=\"Path_14\" data-name=\"Path 14\" class=\"cls-1\" d=\"M70.839,84.874a10.4,10.4,0,1,1,0-20.794,10.25,10.25,0,0,1,8.84,5.043l7.1-4.3a18.677,18.677,0,1,0,0,19.3l-7.1-4.3A10.173,10.173,0,0,1,70.839,84.874Z\" transform=\"translate(-19.68 -21.061)\"/>\n                        </g>\n                      </svg>\n\n                </div>\n                <div class=\"col-8 text-right align-middle\" style=\"line-height: 100px; font-size: 22px; padding-right:15px;\">\n                    <div class=\"background-row\" > </div>\n                    <div style=\"margin-right: 25px; position:relative;\">\n                      <span style=\"font-weight:bold;\">Emission date:</span> " + datePrinting + "\n                  </div>\n                </div>    \n            </div>";
        var printingCard = "";
        // if print all cards need to set index of card
        if (!studentIndex) {
            studentIndex = 0;
        }
        cards.forEach(function (card) {
            //set card(guardian) header
            // added <div class="background-row" > </div> for fixing backgrounf in FF, EDGE
            var cardHeader = "\n     <div class=\"row\" style=\"border: 1px solid;\">\n        <div class=\"col-6\" style = \"margin:auto;\" >          \n          <div class=\"background-row\" > </div>\n          <div style=\"margin-left: 25px; line-height: 110px; font-size: 24px; position:relative;\" >\n            <span style=\"font-weight:bold;\" > Guardian: </span> " + card.parentName + "</div >\n        </div>\n        <div class=\"col-6 text-right align-middle\" style = \"line-height: 25px;font-size: 18px; background-color:lightgray; padding:15px;\" >\n            <div class=\"background-row\" > </div>\n           <div style=\"margin-right: 25px; position:relative;\">\n              <span style=\"font-weight:bold;\" > Driver's License: </span> " + card.driversLicense + "<br>\n              <span style=\"font-weight:bold;\" > Relationship: </span> " + card.relationship + "<br>\n              <span style=\"font-weight:bold;\" > Phone: </span> " + card.phoneNumber + "<br>\n           </div>\n        </div>\n     </div>";
            var cardBarcodes = "" + pageHeader + cardHeader;
            for (var i = 0; i < card.students.length; i++) {
                if (i !== 0 && i % 5 === 0) {
                    cardBarcodes += "<div class='newpage'><div>" + pageHeader + cardHeader;
                }
                cardBarcodes += "\n            <div class=\"row\" style=\"border: 1px solid; height:215px;\">    \n                <div class=\"col-4\" style=\"padding:20px;\">\n                  <span style=\"font-weight:bold; font-size:18px;\">Name</span><br>\n                  <span style=\"font-size:24px; margin-bottom:25px;\">" + card.students[i].name + "</span> <br><br>\n                  <span style=\"font-weight:bold; font-size:18px;\">School</span><br>\n                  <span style=\"font-size:18px;\">" + card.students[i].schoolName + "</span> \n                </div>\n                <div class=\"col-4\" style=\" padding:20px;\">\n                  <span style=\"font-weight:bold; font-size:18px;\">Grade</span><br>\n                  <span style=\"font-size:24px; margin-bottom:25px;\">" + card.students[i].grade + "</span> <br><br>\n                  <span style=\"font-weight:bold; font-size:18px;\">Student ID</span><br>\n                  <span style=\"font-size:18px;\">" + card.students[i].externalId + "</span>\n                </div>   \n              <div class=\"col-4\" style=\" padding:10px;\">  \n          ";
                // check is has access to see barcode 
                if (card.students[i].isPrintingAtHome) {
                    var barcode = document.querySelectorAll("#student-card-" + studentIndex + "-" + i)[0].innerHTML;
                    cardBarcodes += "<div style=\"height:190px; width:300px;\">\n                            " + barcode + "\n                           </div> ";
                }
                else {
                    cardBarcodes += "<div style=\"height:160px; width:280px; border: 1px solid black; margin-left:10px; margin-top:10px;\">\n                            <div class=\"barcode\">\n                              <div style=\"margin-left: 47%; padding-top:50px;\">\n                                  <img width=\"25\" height=\"25\" src=\"assets/images/icons/Print_ErrorIcon.png\" alt=\"logo\">\n                              </div>\n                \n                              <div style=\"padding-top:10px; padding-left:8px;\" >\n                                  <span> You don't have access to see barcode</span>\n                              </div>\n                            </div>\n                           </div> ";
                }
                cardBarcodes += "</div></div>";
            }
            printingCard += cardBarcodes + "<div class='newpage'><div>";
            studentIndex++;
        });
        popupWin = window.open('', '_blank', 'top=0,left=0,height=100%,width=auto');
        popupWin.document.open();
        popupWin.document.write("\n     <html>\n        <head>\n        <link rel=\"stylesheet\" href=\"https://stackpath.bootstrapcdn.com/bootstrap/4.1.1/css/bootstrap.min.css\" integrity=\"sha384-WskhaSGFgHYWDcbwN70/dfYBj47jz9qbsMId/iRN3ewGhXQFZCSftd1LZCfmhktB\" crossorigin=\"anonymous\">\n\n          <style>\n          //........Customized style.......\n          //........Cards should be printed on separate pages......\n          @media all {\n\t          .page-break\t{ display: none; }\n          }\n          @page{size:A4 portrait; margin:10mm;}\n          @media print {\n\t          .page-break\t{ display: block; page-break-before: always; }\n            .newpage { page-break-before: always }\n            .barcode svg {width:300px; height:190px;}\n            .background-row {width: 102%;\n                              height: 0;\n                              border: solid 55px #f4f4f4;\n                              top:0;\n                              left:0;\n                              position: absolute; }\n            .background-header{width: 380px;\n                              height: 0;\n                              border: solid 55px #000000;\n                              top:0;\n                              left:0;\n                              position: absolute; }\n            .cp-image{position: relative; width: 90%;}\n          </style>\n        </head>\n        <body onload=\"window.focus();window.print();" + addCloseWindow + "\">\n            " + printingCard + "            \n        </body>\n      </html>");
        popupWin.document.close();
        // set cards to active
        var cardIds = [];
        cards.forEach(function (card) { return cardIds.push(card.id); });
        this.dismissalCardsService.setDismissalCardsToActive(cardIds).subscribe(function () {
            // set cards to active on frontend
            cards.forEach(function (card) { return card.status = true; });
        });
    };
    // we need to create service for this. this need to be refactored
    ParentsDashboardComponent.prototype.downloadInstructions = function () {
        // this.loaderService.displayMini(true);
        // this.parentsDashboardService.getCarRidersInstructions()
        //  .subscribe(res => {
        var doc = new __WEBPACK_IMPORTED_MODULE_6_jspdf__();
        var strArr = doc.splitTextToSize(this.parentInfo.instruction, 175);
        doc.text(20, 20, strArr);
        doc.save('CarRidersInstructions.pdf');
        //   this.loaderService.displayMini(false);
        //  });    
    };
    ParentsDashboardComponent.prototype.setInstructionsChecked = function () {
        this.parentsDashboardService.setInstructionsChecked()
            .subscribe(function (res) {
        });
    };
    ParentsDashboardComponent.prototype.setFocusCardId = function (id) {
        this.focusCardId = id;
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('carRiderProcedures'),
        __metadata("design:type", Object)
    ], ParentsDashboardComponent.prototype, "carRiderModal", void 0);
    ParentsDashboardComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-parents-dashboard',
            template: __webpack_require__("./src/app/components/parents-dashboard/parents-dashboard.component.html"),
            providers: [
                { provide: 'Window', useValue: window }
            ]
        }),
        __param(5, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"])('Window')),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_parents_dashboard_service__["a" /* ParentsDashboardService */],
            __WEBPACK_IMPORTED_MODULE_5__services_dismissal_cards_service__["a" /* DismissalCardsService */],
            __WEBPACK_IMPORTED_MODULE_2__services_loader_service__["a" /* LoaderService */],
            __WEBPACK_IMPORTED_MODULE_3__services_modal_service__["a" /* ModalService */],
            __WEBPACK_IMPORTED_MODULE_4__services_notification_service__["a" /* NotificationService */],
            Window])
    ], ParentsDashboardComponent);
    return ParentsDashboardComponent;
}());



/***/ }),

/***/ "./src/app/components/school-accounts/edit-school/edit-school.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"page-container\">\r\n  <header class=\"page-header\">\r\n    <div class=\"page-header__left\">\r\n      <button class=\"flat purple icon\" [routerLink]=\"['/school-accounts']\">BACK TO ACCOUNTS\r\n        <i class=\"material-icons\">arrow_back</i>\r\n      </button>\r\n    </div>\r\n  </header>\r\n\r\n  <form class=\"cp-form\" #newSchoolForm=\"ngForm\" (ngSubmit)=\"submitSchool()\">\r\n      <header class=\"cp-form__header\">\r\n        <h1 class=\"cp-form__title\">{{ createEditItemService.isEditMode ? 'Edit School' : 'Create School'}}</h1>\r\n      </header>\r\n\r\n      <label class=\"cp-input-label\">SCHOOL NAME</label>\r\n      <input class=\"cp-text-input\" type=\"text\" name=\"nameInput\"\r\n             #nameInput=\"ngModel\" [(ngModel)]=\"schoolModel.schoolName\"\r\n             whitespace-validator required />\r\n      <!-- nameInput validation -->\r\n      <div *ngIf=\"nameInput.invalid && (nameInput.dirty || nameInput.touched)\"\r\n           class=\"alert alert-danger\">\r\n        <div *ngIf=\"nameInput?.errors.required\">School name is required</div>\r\n        <div *ngIf=\"nameInput?.errors.invalidWhitespace\">You can't use white spaces as school name!</div>\r\n      </div>\r\n\r\n      <label class=\"cp-input-label\">STATE</label>\r\n      <p-dropdown [options]=\"states\" [(ngModel)]=\"selectedState\" optionLabel=\"name\"\r\n        [autoWidth]=\"false\" (onChange)=\"filterDistricts($event.value, true)\" name=\"stateInput\"\r\n        #stateInput=\"ngModel\" placeholder=\"Select State\" required>\r\n      </p-dropdown>\r\n      <!-- stateInput validation -->\r\n      <div *ngIf=\"stateInput.invalid && (stateInput.dirty || stateInput.touched)\"\r\n           class=\"alert alert-danger\">\r\n       <div *ngIf=\"stateInput?.errors.required\">State is required</div>\r\n     </div>\r\n\r\n      <label class=\"cp-input-label\">DISTRICT</label>\r\n      <p-dropdown [options]=\"filteredDistricts\" [(ngModel)]=\"selectedDistrict\"\r\n        optionLabel=\"name\" [autoWidth]=\"false\" filter=\"true\" name=\"districtInput\"\r\n        #districtInput=\"ngModel\" placeholder=\"Select District\"\r\n        [disabled]=\"newSchoolForm?.controls.stateInput?.invalid\" required>\r\n      </p-dropdown>\r\n      <!-- districtInput validation -->\r\n      <div *ngIf=\"districtInput.invalid && (districtInput.dirty || districtInput.touched)\"\r\n           class=\"alert alert-danger\">\r\n        <div *ngIf=\"districtInput?.errors.required\">District is required</div>\r\n      </div>\r\n\r\n      <!-- FIELDS FOR CREATING SCHOOL ONLY -->\r\n      <div *ngIf=\"!createEditItemService.isEditMode\">\r\n        <label class=\"cp-input-label\">SCHOOL ADMIN</label>\r\n        <input class=\"cp-text-input\" type=\"text\" name=\"schoolAdminInput\"\r\n               [(ngModel)]=\"schoolModel.schoolAdmins[0].name\" minlength=\"3\" maxlength=\"256\"\r\n               #schoolAdminInput=\"ngModel\" pattern=\"^[A-Za-z\\s]{1,}[\\.]{0,1}[A-Za-z\\s]{0,}$\" required whitespace-validator />\r\n        <!-- schoolAdminInput validation -->\r\n        <div *ngIf=\"schoolAdminInput.invalid && (schoolAdminInput.dirty || schoolAdminInput.touched)\"\r\n             class=\"alert alert-danger\">\r\n          <div *ngIf=\"schoolAdminInput?.errors.invalidWhitespace\"> You can't use whitespaces as admin name!</div>\r\n          <div *ngIf=\"schoolAdminInput?.errors.required\">School admin name is required</div>\r\n          <div *ngIf=\"schoolAdminInput?.errors.minlength\">School admin name must be at least 3 characters long.</div>\r\n          <div *ngIf=\"schoolAdminInput?.errors.pattern\">School admin name is invalid!</div>\r\n        </div>\r\n\r\n        <label class=\"cp-input-label\">EMAIL</label>\r\n        <input class=\"cp-text-input\" type=\"text\" name=\"emailInput\"\r\n               [(ngModel)]=\"schoolModel.schoolAdmins[0].email\" #emailInput=\"ngModel\"\r\n               pattern=\"[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\\.[A-Za-z]{2,4}\"\r\n               [ngModelOptions]=\"{updateOn: 'blur'}\" appIsUserExist required />\r\n        <!-- emailInput validation -->\r\n        <div *ngIf=\"emailInput.invalid && (emailInput.dirty || emailInput.touched)\"\r\n             class=\"alert alert-danger\">\r\n          <div *ngIf=\"emailInput?.errors.pattern\">Email is invalid</div>\r\n          <div *ngIf=\"emailInput?.errors.required\">Email is required</div>\r\n          <div *ngIf=\"emailInput?.errors.isEmailExist\">User with email {{ emailInput.model }} already exist</div>\r\n        </div>\r\n      </div>\r\n\r\n      <!-- FIELDS FOR EDITING SCHOOL ONLY -->\r\n      <div *ngIf=\"createEditItemService.isEditMode\">\r\n        <label class=\"cp-input-label\">MAIN SCHOOL ADMIN</label>\r\n        <p-dropdown [options]=\"schoolModel.schoolAdmins\" [(ngModel)]=\"selectedAdmin\"\r\n          optionLabel=\"name\" [autoWidth]=\"false\" name=\"selectedAdmin\"\r\n          #schoolAdmin=\"ngModel\" placeholder=\"Select Admin\" required>\r\n        </p-dropdown>\r\n        <!-- schoolAdmin validation -->\r\n        <div *ngIf=\"schoolAdmin.invalid && (schoolAdmin.dirty || schoolAdmin.touched)\"\r\n             class=\"alert alert-danger\">\r\n          <div *ngIf=\"schoolAdmin?.errors.required\">School Admin is required</div>\r\n        </div>\r\n\r\n        <div *ngIf=\"!selectedAdmin.id\">\r\n          <label class=\"cp-input-label\">NEW SCHOOL ADMIN</label>\r\n          <input class=\"cp-text-input\" type=\"text\"\r\n                 name=\"newSchoolAdminInput\" #newSchoolAdminInput=\"ngModel\"\r\n                 [(ngModel)]=\"newAdmin.name\"\r\n                 minlength=\"3\" maxlength=\"256\" required\r\n                 pattern=\"^[A-Za-z\\s]{1,}[\\.]{0,1}[A-Za-z\\s]{0,}$\" />\r\n          <!-- newSchoolAdminInput validation -->\r\n          <div *ngIf=\"newSchoolAdminInput.invalid && (newSchoolAdminInput.dirty || newSchoolAdminInput.touched)\"\r\n               class=\"alert alert-danger\">\r\n            <div *ngIf=\"newSchoolAdminInput?.errors.required\">School admin name is required</div>\r\n            <div *ngIf=\"newSchoolAdminInput?.errors.pattern\">School admin name is invalid!</div>\r\n            <div *ngIf=\"newSchoolAdminInput?.errors.minlength\">School admin name must be at least 3 characters long.</div>\r\n          </div>\r\n\r\n          <label class=\"cp-input-label\">EMAIL</label>\r\n          <input class=\"cp-text-input\" type=\"text\"\r\n                 name=\"newAdminEmailInput\" #newAdminEmailInput=\"ngModel\"\r\n                 [(ngModel)]=\"newAdmin.email\" [ngModelOptions]=\"{updateOn: 'blur'}\"\r\n                 pattern=\"[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\\.[A-Za-z]{2,4}\" appIsUserExist required />\r\n          <!-- newAdminEmailInput validation -->\r\n          <div *ngIf=\"newAdminEmailInput.invalid && (newAdminEmailInput.dirty || newAdminEmailInput.touched)\"\r\n               class=\"alert alert-danger\">\r\n            <div *ngIf=\"newAdminEmailInput?.errors.pattern\">Email is invalid</div>\r\n            <div *ngIf=\"newAdminEmailInput?.errors.required\">Email is required</div>\r\n            <div *ngIf=\"newAdminEmailInput?.errors.isEmailExist\">User with email {{ newAdminEmailInput.model }} already exist</div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n\r\n      <footer class=\"cp-form__footer\">\r\n        <button type=\"submit\" class=\"flat accent shadow\" [disabled]=\"newSchoolForm.invalid || newSchoolForm.pending\">{{ createEditItemService.isEditMode ? 'SAVE' : 'CREATE'}}</button>\r\n      </footer>\r\n  </form>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/components/school-accounts/edit-school/edit-school.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EditSchoolComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_school_accounts_service__ = __webpack_require__("./src/app/services/school-accounts.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__models_http_models_school_edition_data_model__ = __webpack_require__("./src/app/models/http-models/school-edition-data.model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_create_edit_item_service__ = __webpack_require__("./src/app/services/create-edit-item.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__models_user_model__ = __webpack_require__("./src/app/models/user.model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services_notification_service__ = __webpack_require__("./src/app/services/notification.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__services_loader_service__ = __webpack_require__("./src/app/services/loader.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var EditSchoolComponent = (function () {
    function EditSchoolComponent(schoolService, route, router, createEditItemService, notificationService, loaderService) {
        this.schoolService = schoolService;
        this.route = route;
        this.router = router;
        this.createEditItemService = createEditItemService;
        this.notificationService = notificationService;
        this.loaderService = loaderService;
        this.schoolModel = new __WEBPACK_IMPORTED_MODULE_3__models_http_models_school_edition_data_model__["a" /* SchoolEditionData */]();
        this.newAdmin = new __WEBPACK_IMPORTED_MODULE_5__models_user_model__["a" /* User */]();
        this.selectedAdmin = new __WEBPACK_IMPORTED_MODULE_5__models_user_model__["a" /* User */]();
    }
    EditSchoolComponent.prototype.ngOnInit = function () {
        this.loaderService.display(true);
        this.initModel();
    };
    EditSchoolComponent.prototype.initModel = function () {
        var _this = this;
        this.schoolModel.schoolAdmins = [new __WEBPACK_IMPORTED_MODULE_5__models_user_model__["a" /* User */]()];
        this.createEditItemService.getItemId(this.route, function () {
            if (_this.createEditItemService.isEditMode) {
                _this.getSchoolById(_this.createEditItemService.itemId).subscribe(function (res) {
                    // writing school model
                    _this.schoolModel = res;
                    // settings for states and districts dropdowns
                    _this.states = res.states;
                    _this.districts = res.districts;
                    _this.selectedState = _this.states.filter(function (state) { return state.id === res.stateId; })[0];
                    _this.selectedDistrict = _this.districts.filter(function (district) { return district.id === _this.schoolModel.districtId; })[0];
                    _this.filterDistricts(_this.selectedState);
                    // adding new admin select in admins dropdown
                    _this.schoolModel.schoolAdmins.push(new __WEBPACK_IMPORTED_MODULE_5__models_user_model__["a" /* User */](0, 'Add Main School Admin'));
                    _this.schoolModel.previousAdminId = _this.schoolModel.mainAdminId;
                    // getting selected admin
                    _this.selectedAdmin = _this.schoolModel.schoolAdmins.filter(function (admin) { return admin.id === _this.schoolModel.mainAdminId; })[0];
                    _this.loaderService.display(false);
                });
            }
            else {
                _this.getSchoolCreationData().subscribe(function (res) {
                    _this.states = res.initData.states;
                    _this.districts = res.initData.districts;
                    _this.loaderService.display(false);
                });
            }
        });
    };
    EditSchoolComponent.prototype.getSchoolById = function (id) {
        return this.schoolService.getSchoolById(this.createEditItemService.itemId);
    };
    EditSchoolComponent.prototype.getSchoolCreationData = function () {
        return this.schoolService.getSchoolCreationData();
    };
    EditSchoolComponent.prototype.submitSchool = function () {
        var _this = this;
        this.loaderService.displayMini(true);
        this.schoolModel.districtId = this.selectedDistrict.id;
        if (this.createEditItemService.isEditMode) {
            // editing
            this.schoolModel.mainAdminId = this.selectedAdmin.id;
            if (this.schoolModel.previousAdminId === this.schoolModel.mainAdminId)
                this.schoolModel.previousAdminId = 0;
            if (!this.schoolModel.mainAdminId) {
                // change 'add admin' optin to new admin
                this.schoolModel.schoolAdmins.splice(-1, 1, this.newAdmin);
            }
            else {
                // remove 'add admin optin'
                this.schoolModel.schoolAdmins.pop();
            }
            this.schoolService.submitEditSchool(this.createEditItemService.itemId, this.schoolModel).subscribe(function () {
                _this.loaderService.displayMini(false);
                _this.notificationService.show("School \"" + _this.schoolModel.schoolName + "\" edited successfully", true);
                _this.router.navigateByUrl('/school-accounts');
            });
        }
        else {
            // creating
            this.schoolService.submitNewSchool(this.schoolModel).subscribe(function (response) {
                _this.loaderService.displayMini(false);
                _this.notificationService.show("School \"" + _this.schoolModel.schoolName + "\" created successfully", true);
                _this.router.navigateByUrl('/school-accounts');
            });
        }
    };
    EditSchoolComponent.prototype.filterDistricts = function (currentState, resetDistict) {
        this.filteredDistricts = this.districts.filter(function (district) { return district.stateId === currentState.id; });
        if (resetDistict)
            this.selectedDistrict = null;
    };
    EditSchoolComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'edit-school',
            template: __webpack_require__("./src/app/components/school-accounts/edit-school/edit-school.component.html")
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__services_school_accounts_service__["a" /* SchoolAccountsService */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["ActivatedRoute"],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["Router"],
            __WEBPACK_IMPORTED_MODULE_4__services_create_edit_item_service__["a" /* CreateEditItemService */],
            __WEBPACK_IMPORTED_MODULE_6__services_notification_service__["a" /* NotificationService */],
            __WEBPACK_IMPORTED_MODULE_7__services_loader_service__["a" /* LoaderService */]])
    ], EditSchoolComponent);
    return EditSchoolComponent;
}());



/***/ }),

/***/ "./src/app/components/school-accounts/school-accounts.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"page-container\" [ngClass]=\"{'full-height-page full-height-page--flex-column': !schoolsAccounts.length}\">\r\n  <div class=\"sub-header\">\r\n    <div class=\"flex justify\">\r\n      <div class=\"jumbo-header\">Accounts</div>\r\n      <div class=\"flex\">\r\n        <search-bar [data]=\"schoolsAccounts\" [filters]=\"['id', 'name', 'district', 'adminName', 'adminEmail']\" (searchEnd)=\"setFilteredSchools($event)\"></search-bar>\r\n        <button [routerLink]=\"['../edit-school']\" type=\"submit\" class=\"item flat accent shadow\">CREATE</button>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n  <div *ngIf=\"schoolsAccounts.length\" class=\"grid-container schoolsAccounts\">\r\n\r\n    <dx-data-grid class=\"cp-data-grid\" [dataSource]=\"filteredSchools\" [showBorders]=\"false\" [showRowLines]=\"true\" [showColumnLines]=\"false\" (onContentReady)=\"gridReady($event)\">\r\n\r\n      <dxi-column dataField=\"id\" caption=\"ID\"  alignment=\"left\"></dxi-column>\r\n      <dxi-column dataField=\"name\" caption=\"NAME\" cellTemplate=\"nameCell\"></dxi-column>\r\n      <dxi-column dataField=\"district\" caption=\"DISTRICT\"></dxi-column>\r\n      <dxi-column dataField=\"adminName\" caption=\"SCHOOL ADMIN\"></dxi-column>\r\n      <dxi-column dataField=\"adminEmail\" caption=\"EMAIL\"></dxi-column>\r\n      <dxi-column dataField=\"status\" caption=\"STATUS\" cellTemplate=\"statusCell\"></dxi-column>\r\n      <dxi-column cssClass=\"overflow-visible emptyCell\" cellTemplate=\"optionsCell\"  alignment=\"center\"></dxi-column>\r\n\r\n      <!-- Cells templates -->\r\n      <div *dxTemplate=\"let cell of 'nameCell'\" class=\"text-ellipsis\">\r\n        <a href=\"#\" (click)=\"goToSchool($event, cell.data.id, cell.data.name)\" class=\"cp-data-grid__link\">{{cell.data.name}}</a>\r\n      </div>\r\n\r\n      <div *dxTemplate=\"let cell of 'statusCell'\" class=\"text-ellipsis\">\r\n        <span class=\"status-field {{ getStatusClass(cell.data.status) }}\">{{cell.data.status}}</span>\r\n      </div>\r\n\r\n      <div *dxTemplate=\"let cell of 'optionsCell'\">\r\n        <div class=\"btn-group\">\r\n          <div class=\"dropdown\">\r\n            <button class=\"btn dd-toggle\" data-toggle=\"dropdown\" data-offset=\"0%, -100%\" data-flip=\"false\" aria-haspopup=\"true\" aria-expanded=\"false\">\r\n              <span>\r\n                <i class=\"material-icons\">more_vert</i>\r\n              </span>\r\n            </button>\r\n            <div class=\"dropdown-menu dropdown-menu-right\" aria-labelledby=\"dropdownMenuButton\">\r\n              <button class=\"dropdown-item\" type=\"button\" [routerLink]=\"['../edit-school/' + cell.data.id]\">Edit</button>\r\n              <button class=\"dropdown-item\" type=\"button\" (click)=\"setResetPasswordEmail(cell.data.adminEmail); modalService.openModal(resetPasswordModal)\">Reset password</button>\r\n              <button class=\"dropdown-item\" type=\"button\" (click)=\"setFocusSchool(cell.data); modalService.openModal(suspendSchoolModal)\">{{ cell.data.status !== 'Suspended' ? 'Suspend' : 'Activate' }} </button>\r\n              <button class=\"dropdown-item\" type=\"button\" (click)=\"setFocusSchoolId(cell.data.id); modalService.openModal(deleteSchoolModal)\">Delete</button>\r\n              <!-- setFocusSchoolId(cell.data.id); modalService.openModal(suspendSchoolModal)-->\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n\r\n      <dxo-paging [pageSize]=\"10\"></dxo-paging>\r\n      <dxo-pager [showNavigationButtons]=\"true\">\r\n      </dxo-pager>\r\n    </dx-data-grid>\r\n    <app-paginator></app-paginator>\r\n  </div>\r\n\r\n  <div class=\"no-items-view\" *ngIf=\"!schoolsAccounts.length\">\r\n    <a class=\"no-items-view__image-container\" [routerLink]=\"['../edit-school']\">\r\n      <img class=\"no-items-view__image\" src=\"assets/images/new-school.svg\" alt=\"new school\">\r\n    </a>\r\n    <p class=\"no-items-view__text\">Use the \"Create\" button to create a new School Account</p>\r\n  </div>\r\n</div>\r\n\r\n<!-- Delete School Modal -->\r\n<ng-template #deleteSchoolModal>\r\n  <div class=\"cp-modal\">\r\n    <header class=\"cp-modal__header\">\r\n      <h5 class=\"cp-modal__title\">Delete School?</h5>\r\n    </header>\r\n\r\n    <div class=\"cp-modal__text\">Are you sure you want to delete this school? This action cannot be undone.</div>\r\n\r\n    <footer class=\"cp-modal__footer\">\r\n      <button class=\"flat black\" (click)=\"modalService.modalRef.hide()\">CANCEL</button>\r\n      <button class=\"flat accent shadow\" (click)=\"deleteSchool(focusSchoolId); modalService.modalRef.hide()\">DELETE</button>\r\n    </footer>\r\n  </div>\r\n</ng-template>\r\n\r\n<!-- Reset password modal -->\r\n<ng-template #resetPasswordModal>\r\n  <div class=\"cp-modal\">\r\n    <header class=\"cp-modal__header\">\r\n      <h5 class=\"cp-modal__title\">Reset Password?</h5>\r\n    </header>\r\n\r\n    <div class=\"cp-modal__text\">Reset a main school admin's password with a link to their associated email address?</div>\r\n\r\n    <footer class=\"cp-modal__footer\">\r\n      <button class=\"flat black\" (click)=\"modalService.modalRef.hide()\">CANCEL</button>\r\n      <button class=\"flat accent shadow\" (click)=\"resetPassword(); modalService.modalRef.hide()\">RESET</button>\r\n    </footer>\r\n  </div>\r\n</ng-template>\r\n\r\n<ng-template #suspendSchoolModal>\r\n  <div class=\"cp-modal\">\r\n    <header class=\"cp-modal__header\">\r\n      <h5 class=\"cp-modal__title\">Suspend School?</h5>\r\n    </header>\r\n\r\n    <div class=\"cp-modal__text\">Are you sure you want to {{focusSchool.status !== 'Suspended' ? 'suspend' : 'activate'}} this school?</div>\r\n\r\n    <footer class=\"cp-modal__footer\">\r\n      <button class=\"flat black\" (click)=\"modalService.modalRef.hide()\">CANCEL</button>\r\n      <button class=\"flat accent shadow\" (click)=\"toggleStatus(); modalService.modalRef.hide()\">{{focusSchool.status !== 'Suspended' ? 'SUSPEND' : 'ACTIVATE'}}</button>\r\n    </footer>\r\n  </div>\r\n</ng-template>\r\n"

/***/ }),

/***/ "./src/app/components/school-accounts/school-accounts.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SchoolAccountsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_school_accounts_service__ = __webpack_require__("./src/app/services/school-accounts.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_loader_service__ = __webpack_require__("./src/app/services/loader.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_modal_service__ = __webpack_require__("./src/app/services/modal.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_notification_service__ = __webpack_require__("./src/app/services/notification.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__modules_share_module_search_bar_search_bar_component__ = __webpack_require__("./src/app/modules/share-module/search-bar/search-bar.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__modules_share_module_paginator_paginator_component__ = __webpack_require__("./src/app/modules/share-module/paginator/paginator.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__services_auth_service__ = __webpack_require__("./src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__services_school_name_service__ = __webpack_require__("./src/app/services/school-name.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};










var SchoolAccountsComponent = (function () {
    function SchoolAccountsComponent(schoolService, loaderService, modalService, notificationService, authService, router, schoolNameService) {
        this.schoolService = schoolService;
        this.loaderService = loaderService;
        this.modalService = modalService;
        this.notificationService = notificationService;
        this.authService = authService;
        this.router = router;
        this.schoolNameService = schoolNameService;
        this.schoolsAccounts = [];
        this.filteredSchools = [];
    }
    SchoolAccountsComponent.prototype.ngOnInit = function () {
        this.loaderService.display(true);
        window.localStorage.setItem('selectedSchool', '0');
        this.getSchools();
        this.schoolNameService.changeMessage("");
        localStorage.removeItem('selectedSchoolName');
    };
    SchoolAccountsComponent.prototype.getStatusClass = function (status) {
        switch (status) {
            case 'Active':
                return 'success';
            case 'pending':
                return 'warning';
            case 'Suspended':
                return 'danger';
            default:
                return '';
        }
    };
    SchoolAccountsComponent.prototype.getSchools = function () {
        var _this = this;
        this.schoolService.getSchools().subscribe(function (respond) {
            _this.schoolsAccounts = (respond.schools === null) ? [] : respond.schools;
            _this.loaderService.display(false);
            setTimeout(function () {
                _this.searchBar.search();
            });
        });
    };
    SchoolAccountsComponent.prototype.deleteSchool = function (id) {
        var _this = this;
        this.loaderService.displayMini(true);
        this.schoolService.deleteSchool(id).subscribe(function () {
            _this.schoolsAccounts.splice(_this.schoolsAccounts.findIndex(function (school) { return school.id === id; }), 1);
            _this.loaderService.displayMini(false);
            _this.notificationService.show("School " + id + " was deleted successfully", true);
            setTimeout(function () {
                _this.searchBar.search();
            }, 0);
        });
    };
    SchoolAccountsComponent.prototype.toggleStatus = function () {
        var _this = this;
        this.loaderService.displayMini(true);
        if (this.focusSchool.status !== 'Suspended') {
            // set status to suspend
            this.schoolService.setStatus(this.focusSchool.id, 2)
                .subscribe(function () {
                _this.getSchools();
                _this.loaderService.displayMini(false);
                _this.notificationService.show('School suspended!', true);
            }, function () { _this.notificationService.show('Error occured!', true, true); });
        }
        else {
            // set status to active
            this.schoolService.setStatus(this.focusSchool.id, 1)
                .subscribe(function () {
                _this.getSchools();
                _this.loaderService.displayMini(false);
                _this.notificationService.show('School activated!', true);
            }, function () { _this.notificationService.show('Error occured!', true, true); });
        }
    };
    SchoolAccountsComponent.prototype.gridReady = function (e) {
        if (this.schoolsAccounts) {
            this.pager.itemsTotal = this.filteredSchools.length;
            this.pager.selectedPage = e.component.pageIndex();
        }
    };
    SchoolAccountsComponent.prototype.setFilteredSchools = function (filteredSchools) {
        this.filteredSchools = filteredSchools;
    };
    SchoolAccountsComponent.prototype.setFocusSchoolId = function (id) {
        this.focusSchoolId = id;
    };
    SchoolAccountsComponent.prototype.setFocusSchool = function (school) {
        this.focusSchool = school;
    };
    SchoolAccountsComponent.prototype.setResetPasswordEmail = function (email) {
        this.resetPasswordEmail = email;
    };
    SchoolAccountsComponent.prototype.resetPassword = function () {
        var _this = this;
        this.authService.resetPassword(this.resetPasswordEmail)
            .subscribe(function (response) { return _this.notificationService.show("Request for user password reset is sent to " + _this.resetPasswordEmail, true); }, function (err) { return _this.notificationService.show("Error during request to reset password", true, true); });
    };
    SchoolAccountsComponent.prototype.goToSchool = function (e, schoolId, schoolName) {
        window.localStorage.setItem('selectedSchool', schoolId);
        this.router.navigateByUrl('archive');
        e.preventDefault();
        this.schoolNameService.changeMessage(schoolName);
        localStorage.setItem('selectedSchoolName', schoolName);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_6__modules_share_module_paginator_paginator_component__["a" /* PaginatorComponent */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_6__modules_share_module_paginator_paginator_component__["a" /* PaginatorComponent */])
    ], SchoolAccountsComponent.prototype, "pager", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_5__modules_share_module_search_bar_search_bar_component__["a" /* SearchBarComponent */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_5__modules_share_module_search_bar_search_bar_component__["a" /* SearchBarComponent */])
    ], SchoolAccountsComponent.prototype, "searchBar", void 0);
    SchoolAccountsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'school-accounts',
            template: __webpack_require__("./src/app/components/school-accounts/school-accounts.component.html")
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_school_accounts_service__["a" /* SchoolAccountsService */],
            __WEBPACK_IMPORTED_MODULE_2__services_loader_service__["a" /* LoaderService */],
            __WEBPACK_IMPORTED_MODULE_3__services_modal_service__["a" /* ModalService */],
            __WEBPACK_IMPORTED_MODULE_4__services_notification_service__["a" /* NotificationService */],
            __WEBPACK_IMPORTED_MODULE_7__services_auth_service__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_8__angular_router__["Router"],
            __WEBPACK_IMPORTED_MODULE_9__services_school_name_service__["a" /* SchoolNameService */]])
    ], SchoolAccountsComponent);
    return SchoolAccountsComponent;
}());



/***/ }),

/***/ "./src/app/components/school-configuration/school-configuration.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"page-container\">\r\n  <div class=\"page-header\">\r\n    <div class=\"page-header__left\">\r\n      <h3 class=\"page-header__title\">School Configuration</h3>\r\n    </div>\r\n    <div class=\"page-header__right\">\r\n      <button class=\"flat black\" (click)=\"ModalService.openModal(template)\">END SCHOOL YEAR</button>\r\n    </div>\r\n  </div>\r\n\r\n  <form #settingsForm=\"ngForm\" class=\"cp-form cp-form--big\">\r\n    <!-- LANES -->\r\n    <!-- Number of lanes -->\r\n    <div class=\"row\">\r\n      <div class=\"col-md-6\">\r\n        <div class=\"cp-form__header\">\r\n          <h3 class=\"cp-form__title\">Lanes</h3>\r\n        </div>\r\n\r\n        <label class=\"cp-input-label\">NUMBER OF LANES</label>\r\n        <p-dropdown [options]=\"lanesOptions\" [(ngModel)]=\"schoolSettingsModel.countOfLanes\" (onChange)=\"processLanesObjects()\" placeholder=\"Select number of lanes\"\r\n                    [autoWidth]=\"false\" name=\"laneNumberSelect\" required></p-dropdown>\r\n      </div>\r\n    </div>\r\n    <!-- Lanes name and color -->\r\n    <div class=\"row\">\r\n      <div class=\"col-md-6\" *ngFor=\"let lane of schoolSettingsModel.lanes; let i = index\">\r\n        <label class=\"cp-input-label\">LANE {{i+1}}</label>\r\n\r\n        <div class=\"flex\">\r\n          <div class=\"dropdown color-selector-drop-down\">\r\n            <button class=\"dropdown-toggle\" type=\"button\" [disabled]=\"!schoolSettingsModel.lanes.length || schoolSettingsModel.lanes.length < 1\"\r\n                    id=\"dropdownMenu2\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\r\n              <div class=\"color-palette-container\">\r\n                <div class=\"color-palette-item lane-{{ lane.color ? lane.color.toLowerCase() : 'blank' }}\"></div>\r\n              </div>\r\n            </button>\r\n            <div class=\"dropdown-menu\" aria-labelledby=\"dropdownMenu2\">\r\n              <button *ngFor=\"let colorOption of filteredColorOptions\" class=\"dropdown-item\" type=\"button\" (click)=\"assignColorToLane(i, colorOption.value)\">\r\n                <div class=\"color-palette-item lane-{{ colorOption.label }}\"></div>\r\n              </button>\r\n            </div>\r\n          </div>\r\n          <input class=\"cp-text-input margin-left-20\" type=\"text\" [(ngModel)]=\"lane.name\" value=\"lane.name\" name=\"colorInput-{{i}}\"\r\n                 (blur)=\"trimModel($event.target)\" placeholder=\"{{lane.color}}\" />\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <!-- Cars per lane and procedure -->\r\n    <div class=\"row\">\r\n      <div class=\"col-md-6\">\r\n        <label class=\"cp-input-label\">NUMBER OF CARS PER LANE</label>\r\n        <p-dropdown [options]=\"carsPerLaneOptions\" [(ngModel)]=\"schoolSettingsModel.carsPerLane\" placeholder=\"Select number of cars per lane\"\r\n                    [autoWidth]=\"false\" name=\"carPerLaneSelect\" required></p-dropdown>\r\n      </div>\r\n    </div>\r\n\r\n    <!-- LANE SCANNING PROCEDURE -->\r\n    <div class=\"row\">\r\n      <div class=\"col-md-6\">\r\n        <div class=\"cp-form__header\">\r\n          <h3 class=\"cp-form__title\">Lane Scanning Procedure</h3>\r\n        </div>\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"row\">\r\n      <div class=\"col-md-6\">\r\n        <label class=\"cp-input-label\">LANE SCANNING PROCEDURE</label>\r\n        <p-dropdown [options]=\"scanningProceduresOptions\" [(ngModel)]=\"schoolSettingsModel.laneLogisticTypeId\" placeholder=\"Select\"\r\n                    [autoWidth]=\"false\" name=\"laneScanningProcedure\" (onChange)=\"checkScannerUsers(); resetLanesUsers()\" required></p-dropdown>\r\n      </div>\r\n      <!-- only if single scanner selected -->\r\n      <div class=\"col-md-6\" *ngIf=\"schoolSettingsModel.laneLogisticTypeId === 1 && schoolSettingsModel.lanes?.length\">\r\n        <label class=\"cp-input-label\">LANE SCANNING USER</label>\r\n        <p-dropdown [options]=\"scannerUsersOptions\" placeholder=\"Select Scanner\" [(ngModel)]=\"schoolSettingsModel.lanes[0].userId\"\r\n                    [autoWidth]=\"false\" name=\"scannerUser\" (onChange)=\"setUserToLanes($event)\" [filter]=\"true\" (onChange)=\"toggleNewScannerUser($event, 0, schoolSettingsModel.lanes[0].color)\" required></p-dropdown>\r\n\r\n        <div *ngIf=\"schoolSettingsModel.lanes[0].userId === 0\">\r\n          <label class=\"cp-input-label\">NEW SCANNER NAME</label>\r\n          <input class=\"cp-text-input\" type=\"text\" placeholder=\"Enter scanner name\" [(ngModel)]=\"newScannerUsers[0].name\"\r\n                 name=\"newScannerName\" #newScannerName=\"ngModel\" pattern=\"^[A-Za-z\\s]{1,}[\\.]{0,1}[A-Za-z\\s]{0,}$\"\r\n                 minlength=\"3\" whitespace-validator required />\r\n          <!-- nameInput validation -->\r\n          <div *ngIf=\"newScannerName.invalid && (newScannerName.dirty || newScannerName.touched)\" class=\"alert alert-danger\">\r\n            <div *ngIf=\"newScannerName?.errors.minlength\">User name should not contain less then 3 symbols!</div>\r\n            <div *ngIf=\"newScannerName?.errors.required\">User name is required</div>\r\n            <div *ngIf=\"newScannerName?.errors.pattern\">User name is invalid</div>\r\n            <div *ngIf=\"newScannerName?.errors.invalidWhitespace\"> You can't use whitespaces as user name!</div>\r\n          </div>\r\n\r\n\r\n          <label class=\"cp-input-label\">EMAIL</label>\r\n          <input class=\"cp-text-input\" type=\"text\" placeholder=\"Enter scanner email address\" [(ngModel)]=\"newScannerUsers[0].email\" name=\"newScannerEmail\" #newScannerEmail=\"ngModel\" [ngModelOptions]=\"{updateOn: 'blur'}\" pattern=\"[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\\.[A-Za-z]{2,4}\" appIsUserExist required />\r\n\r\n          <!-- emailInput validation -->\r\n          <div *ngIf=\"newScannerEmail.invalid && (newScannerEmail.dirty || newScannerEmail.touched)\"\r\n               class=\"alert alert-danger\">\r\n            <div *ngIf=\"newScannerEmail?.errors.pattern\">Email is invalid</div>\r\n            <div *ngIf=\"newScannerEmail?.errors.required\">Email is required</div>\r\n            <div *ngIf=\"newScannerEmail?.errors.isEmailExist\">User with email {{ newScannerEmail.model }} already exist</div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n\r\n    <!-- only if multiple scanners selected -->\r\n    <div class=\"row\" *ngIf=\"schoolSettingsModel.laneLogisticTypeId === 2\">\r\n      <div class=\"col-md-6\" *ngFor=\"let lane of schoolSettingsModel.lanes; let i = index\">\r\n        <label class=\"cp-input-label\">\r\n          <div class=\"color-palette-item lane-{{ lane.color ? lane.color.toLowerCase() : 'blank' }}\"></div>\r\n          LANE {{i+1}} SCANNING USER\r\n        </label>\r\n\r\n        <p-dropdown [options]=\"scannerUsersOptions\" placeholder=\"Select Scanner\"\r\n                    [autoWidth]=\"false\" name=\"scannerUserByLane-{{i}}\" [(ngModel)]=\"lane.userId\" [filter]=\"true\" (onChange)=\"toggleNewScannerUser($event, i, lane.color)\" required></p-dropdown>\r\n\r\n        <div *ngIf=\"lane.userId === 0\">\r\n          <label class=\"cp-input-label\">NEW SCANNER NAME</label>\r\n          <input class=\"cp-text-input\" type=\"text\" [(ngModel)]=\"newScannerUsers[i].name\" name=\"newScannerName-{{i}}\" placeholder=\"Enter scanner name\" #newScannerName=\"ngModel\" pattern=\"^[A-Za-z\\s]{1,}[\\.]{0,1}[A-Za-z\\s]{0,}$\" whitespace-validator required />\r\n\r\n          <!-- nameInput validation -->\r\n          <div *ngIf=\"newScannerName.invalid && (newScannerName.dirty || newScannerName.touched)\" class=\"alert alert-danger\">\r\n            <div *ngIf=\"newScannerName?.errors.required\">User name is required</div>\r\n            <div *ngIf=\"newScannerName?.errors.pattern\">User name is invalid</div>\r\n            <div *ngIf=\"newScannerName?.errors.invalidWhitespace\"> You can't use whitespaces as user name!</div>\r\n          </div>\r\n\r\n          <label class=\"cp-input-label\">EMAIL</label>\r\n          <input class=\"cp-text-input\" type=\"text\" placeholder=\"Enter scanner email address\" [(ngModel)]=\"newScannerUsers[i].email\" name=\"newScannerEmail-{{i}}\" #newScannerEmail=\"ngModel\" (blur)=\"isNewUserRepeatEmail(i)\" [ngModelOptions]=\"{updateOn: 'blur'}\" pattern=\"[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\\.[A-Za-z]{2,4}\" appIsUserExist required />\r\n\r\n          <!-- emailInput validation -->\r\n          <div *ngIf=\"newScannerEmail.invalid && (newScannerEmail.dirty || newScannerEmail.touched)\"\r\n               class=\"alert alert-danger\">\r\n            <div *ngIf=\"newScannerEmail?.errors.pattern\">Email is invalid</div>\r\n            <div *ngIf=\"newScannerEmail?.errors.required\">Email is required</div>\r\n            <div *ngIf=\"newScannerEmail?.errors.isEmailExist\">User with email {{ newScannerEmail.model }} already exist</div>\r\n          </div>\r\n          <div *ngIf=\"repeatEmails && repeatEmails.length && repeatEmails[i]\" class=\"alert alert-danger\">\r\n            <div>User(s) with email(s) {{ newScannerEmail.model }} already exist</div>\r\n          </div>\r\n\r\n\r\n\r\n        </div>\r\n      </div>\r\n    </div>\r\n\r\n    <!-- ARCHIVE -->\r\n    <div class=\"row\">\r\n      <div class=\"col-md-6\">\r\n        <div class=\"cp-form__header\">\r\n          <h3 class=\"cp-form__title\">Archive</h3>\r\n        </div>\r\n\r\n        <label class=\"cp-input-label\">TIME FORMAT</label>\r\n        <p-dropdown [options]=\"timeFormatOptions\" [(ngModel)]=\"schoolSettingsModel.archiveTimeTypeId\" placeholder=\"Select time format\"\r\n                    [autoWidth]=\"false\" name=\"timeFormatSelect\" required></p-dropdown>\r\n      </div>\r\n    </div>\r\n\r\n    <!-- DISMISSAL CARD -->\r\n    <div class=\"row\">\r\n      <div class=\"col-md-6\">\r\n        <div class=\"cp-form__header\">\r\n          <h3 class=\"cp-form__title\">Dismissal Card</h3>\r\n        </div>\r\n\r\n        <label class=\"cp-input-label\">PRINT CONFIGURATION</label>\r\n        <p-dropdown [options]=\"cardsPrintingOptions\" [(ngModel)]=\"schoolSettingsModel.cardPrintingTypeId\" placeholder=\"Select dismissal card type\"\r\n                    [autoWidth]=\"false\" name=\"dismissalCardTypeSelect\" required></p-dropdown>\r\n\r\n       \r\n        <label class=\"cp-input-label\">\r\n          <p-checkbox class=\"cp-primeng-checkbox\" name=\"allowPrinting\" [(ngModel)]=\"schoolSettingsModel.allowPrintingAtHome\" binary=\"true\"></p-checkbox>\r\n          <span>SHOW BARCODE IN PARENT’S VIEW</span>\r\n        </label>\r\n      </div>\r\n\r\n      <div class=\"col-md-12\">\r\n        <label class=\"cp-input-label\">INSTRUCTIONS</label>\r\n        <textarea class=\"cp-text-input\" name=\"instructions\" rows=\"10\" cols=\"50\" placeholder=\"Custom dismissal instructions\" [(ngModel)]=\"schoolSettingsModel.instructions\"></textarea>\r\n      </div>\r\n    </div>\r\n\r\n    <!-- SAVE -->\r\n    <div class=\"row\">\r\n      <div class=\"col-md-6\"></div>\r\n\r\n      <div class=\"col-md-6\">\r\n        <div class=\"flex-column justify padding-12\">\r\n          <div class=\"align-end\">\r\n            <!-- || isActiveFlightExist -->\r\n            <button type=\"submit\" class=\"flat accent shadow\" [disabled]=\"settingsForm.form.invalid || !checkAllLanesHaveColorsSelected() || repeatEmails?.length || existEmails?.length\"\r\n                    (click)=\"saveEditSchoolSettings()\">\r\n              SAVE\r\n            </button>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n\r\n    <!-- Validation -->\r\n    <div *ngIf=\"!isLanesNamesUnique\" class=\"alert alert-danger\">\r\n      <div>Lanes names should not match</div>\r\n    </div>\r\n\r\n    <div *ngIf=\"!isScannerPerLaneUnique\" class=\"alert alert-danger\">\r\n      <div>Scanner user should be bind only for one line</div>\r\n    </div>\r\n\r\n    <div *ngIf=\"isActiveFlightExist\" class=\"alert alert-danger\">\r\n      <div>Close active lanes first before you can save settings</div>\r\n    </div>\r\n\r\n    <div *ngIf=\"existEmails?.length\" class=\"alert alert-danger\">\r\n      <div>User(s) with email(s) {{ existEmails.join(', ') }} already exist</div>\r\n    </div>\r\n\r\n\r\n  </form>\r\n</div>\r\n\r\n<ng-template #template>\r\n  <div class=\"cp-modal\">\r\n    <header class=\"cp-modal__header\">\r\n      <h5 class=\"cp-modal__title\">End school year?</h5>\r\n    </header>\r\n    <div class=\"cp-modal__content\">\r\n      <p class=\"cp-modal__text\">\r\n        Are you sure you want to end school year?\r\n        <br> This action will erase all Students, Parents'\r\n        <br> accounts, archive data and classrooms\r\n        <br> permanently.\r\n      </p>\r\n    </div>\r\n    <footer class=\"cp-modal__footer\">\r\n      <button class=\"flat black\" (click)=\"ModalService.modalRef.hide()\">CANCEL</button>\r\n      <button class=\"flat accent shadow\" (click)=\"endYear(); ModalService.modalRef.hide()\">ACCEPT</button>\r\n    </footer>\r\n  </div>\r\n</ng-template>\r\n"

/***/ }),

/***/ "./src/app/components/school-configuration/school-configuration.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SchoolConfigurationComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_school_configuration_service__ = __webpack_require__("./src/app/services/school-configuration.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__models_school_settings_model__ = __webpack_require__("./src/app/models/school-settings.model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__utils_utils__ = __webpack_require__("./src/app/utils/utils.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__models_lane_model__ = __webpack_require__("./src/app/models/lane.model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_modal_service__ = __webpack_require__("./src/app/services/modal.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services_loader_service__ = __webpack_require__("./src/app/services/loader.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__services_notification_service__ = __webpack_require__("./src/app/services/notification.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_rxjs_Observable__ = __webpack_require__("./node_modules/rxjs/_esm5/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__services_user_management_service__ = __webpack_require__("./src/app/services/user-management.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_rxjs_observable_forkJoin__ = __webpack_require__("./node_modules/rxjs/_esm5/observable/forkJoin.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};











var SchoolConfigurationComponent = (function () {
    function SchoolConfigurationComponent(schoolService, ModalService, loaderService, notificationService, userService) {
        this.schoolService = schoolService;
        this.ModalService = ModalService;
        this.loaderService = loaderService;
        this.notificationService = notificationService;
        this.userService = userService;
        this.ngForHelper = __WEBPACK_IMPORTED_MODULE_3__utils_utils__["a" /* Utils */].numberToArray;
        this.trimModel = __WEBPACK_IMPORTED_MODULE_3__utils_utils__["a" /* Utils */].trimModel;
        this.selecterEndYearOption = 'erase';
        this.isLanesNamesUnique = true;
        this.isScannerPerLaneUnique = true;
        this.schoolSettingsModel = new __WEBPACK_IMPORTED_MODULE_2__models_school_settings_model__["b" /* SchoolSettings */]();
        this.schoolSettingsModel.lanes = new Array();
        this.schoolSettingsModel.lanes[0] = new __WEBPACK_IMPORTED_MODULE_4__models_lane_model__["a" /* Lane */]();
        this.filteredColorOptions = this.colorsOptions;
    }
    SchoolConfigurationComponent.prototype.ngOnInit = function () {
        this.getInitialData();
    };
    /**
     * Get initial data from server
     */
    SchoolConfigurationComponent.prototype.getInitialData = function () {
        var _this = this;
        this.loaderService.loadAsync([
            this.schoolService.checkActiveFlight(),
            this.schoolService.getSchoolSettingsForUser()
        ], function (res) {
            _this.isActiveFlightExist = res[0];
            _this.schoolSettingsModel = res[1];
            //add mandatory settings count OfLanes and carPerLane
            _this.schoolSettingsModel.countOfLanes = _this.schoolSettingsModel.countOfLanes === 0 ? 1 : _this.schoolSettingsModel.countOfLanes;
            _this.schoolSettingsModel.carsPerLane = _this.schoolSettingsModel.carsPerLane === 0 ? 5 : _this.schoolSettingsModel.carsPerLane;
            _this.setDropdownOptions(_this.schoolSettingsModel);
            _this.filterDropdownColors();
        });
    };
    /**
     * Set options for all dropdown menus
     */
    SchoolConfigurationComponent.prototype.setDropdownOptions = function (settingModel) {
        this.colorsOptions = [
            { label: 'yellow', value: 'Yellow' },
            { label: 'purple', value: 'Purple' },
            { label: 'green', value: 'Green' },
            { label: 'orange', value: 'Orange' },
            { label: 'blue', value: 'Blue' },
            { label: 'red', value: 'Red' },
            { label: 'pink', value: 'Pink' },
            { label: 'black', value: 'Black' }
        ];
        this.lanesOptions = [
            { label: '1 Lane', value: 1 },
            { label: '2 Lanes', value: 2 },
            { label: '3 Lanes', value: 3 },
            { label: '4 Lanes', value: 4 },
            { label: '5 Lanes', value: 5 },
            { label: '6 Lanes', value: 6 },
        ];
        this.carsPerLaneOptions = [
            { label: '5 Cars', value: 5 },
            { label: '6 Cars', value: 6 },
            { label: '7 Cars', value: 7 },
            { label: '8 Cars', value: 8 },
            { label: '9 Cars', value: 9 },
            { label: '10 Cars', value: 10 },
        ];
        this.scanningProceduresOptions = __WEBPACK_IMPORTED_MODULE_3__utils_utils__["a" /* Utils */].generateSelectOptions(settingModel.laneScanningTypes, 'name', 'id');
        this.cardsPrintingOptions = __WEBPACK_IMPORTED_MODULE_3__utils_utils__["a" /* Utils */].generateSelectOptions(settingModel.cardPrintingTypes, 'name', 'id');
        this.timeFormatOptions = __WEBPACK_IMPORTED_MODULE_3__utils_utils__["a" /* Utils */].generateSelectOptions(settingModel.archiveTimeTypes, 'name', 'id');
        this.scannerUsersOptions = __WEBPACK_IMPORTED_MODULE_3__utils_utils__["a" /* Utils */].generateSelectOptions(settingModel.scannerUsers, 'name', 'id');
        this.scannerUsersOptions.push({ value: 0, label: 'Add Scanner User' });
        this.processLanesObjects();
    };
    /**
     * Bind selected scanner user ID to all lanes
     */
    SchoolConfigurationComponent.prototype.setUserToLanes = function ($event) {
        this.schoolSettingsModel.lanes.forEach(function (lane) {
            lane.userId = $event.value;
        });
    };
    /**
     * Push/Pop new scanner user
     * @param  {number} i - index of lane
     */
    SchoolConfigurationComponent.prototype.toggleNewScannerUser = function ($event, i, laneColor) {
        var _this = this;
        console.log($event.value);
        this.newScannerUsers = this.newScannerUsers || [];
        this.schoolSettingsModel.newScannerUsers = new Array();
        if (!$event.value) {
            this.newScannerUsers[i] = new __WEBPACK_IMPORTED_MODULE_2__models_school_settings_model__["a" /* NewScannerUser */]();
            this.newScannerUsers[i].laneColor = laneColor;
        }
        else {
            if (this.newScannerUsers[i]) {
                this.newScannerUsers[i] = null;
                this.newScannerUsers.forEach(function (user, index) {
                    _this.isNewUserRepeatEmail(index);
                });
            }
        }
    };
    /**
     * Validate configuartion form
     */
    SchoolConfigurationComponent.prototype.schoolSettingsFormValidation = function () {
        var _this = this;
        return new __WEBPACK_IMPORTED_MODULE_8_rxjs_Observable__["a" /* Observable */](function (observer) {
            _this.isLanesNamesUnique = _this.checkLaneNames();
            _this.isScannerPerLaneUnique = _this.checkScannerUsers();
            _this.checkUserEmails(function () {
                if (!_this.isLanesNamesUnique || !_this.isScannerPerLaneUnique || _this.existEmails.length) {
                    observer.next(false);
                }
                else {
                    observer.next(true);
                }
                observer.complete();
            });
        });
    };
    /**
     * Save configuration if form valid
     */
    SchoolConfigurationComponent.prototype.saveEditSchoolSettings = function () {
        var _this = this;
        this.loaderService.displayMini(true);
        // push new scanner users to model
        if (this.newScannerUsers) {
            this.newScannerUsers.forEach(function (user) {
                user && _this.schoolSettingsModel.newScannerUsers.push(user);
            });
        }
        // if printing type 'Plastic Card' then deny printing at home
        //if (this.schoolSettingsModel.cardPrintingTypeId === 1) {
        //  this.schoolSettingsModel.allowPrintingAtHome = false;
        //}
        this.schoolSettingsFormValidation().subscribe(function (isValid) {
            if (isValid) {
                _this.schoolService.submitEditedSettings(_this.schoolSettingsModel).subscribe(function (response) {
                    _this.notificationService.show('School configuration saved successfully', true);
                    _this.loaderService.displayMini(false);
                    setTimeout(function () {
                        location.reload();
                    }, 1500);
                });
            }
            else {
                _this.loaderService.displayMini(false);
            }
        });
    };
    SchoolConfigurationComponent.prototype.processLanesObjects = function () {
        var _this = this;
        var lanesInitedCount = this.schoolSettingsModel.lanes.length;
        if (lanesInitedCount > this.schoolSettingsModel.countOfLanes) {
            this.schoolSettingsModel.lanes = this.schoolSettingsModel.lanes.slice(0, this.schoolSettingsModel.countOfLanes);
            if (this.newScannerUsers.length) {
                this.newScannerUsers = this.newScannerUsers.slice(0, this.schoolSettingsModel.countOfLanes);
                this.newScannerUsers.forEach(function (user, index) {
                    _this.isNewUserRepeatEmail(index);
                });
            }
        }
        if (lanesInitedCount < this.schoolSettingsModel.countOfLanes) {
            for (var i = lanesInitedCount; i < this.schoolSettingsModel.countOfLanes; i++) {
                this.schoolSettingsModel.lanes[i] = new __WEBPACK_IMPORTED_MODULE_4__models_lane_model__["a" /* Lane */]();
            }
        }
        this.filterDropdownColors();
    };
    SchoolConfigurationComponent.prototype.assignColorToLane = function (laneIndex, color) {
        this.schoolSettingsModel.lanes[laneIndex].color = color;
        this.filterDropdownColors();
    };
    SchoolConfigurationComponent.prototype.filterDropdownColors = function () {
        var _this = this;
        this.filteredColorOptions = this.colorsOptions.filter(function (option) { return !_this.schoolSettingsModel.lanes.some(function (lane) { return lane.color == option.value; }); });
    };
    SchoolConfigurationComponent.prototype.checkAllLanesHaveColorsSelected = function () {
        var _this = this;
        return this.schoolSettingsModel.lanes.every(function (lane) { return lane.color && (_this.colorsOptions.some(function (colorOption) { return lane.color == colorOption.value; })); });
    };
    SchoolConfigurationComponent.prototype.checkLaneNames = function () {
        this.schoolSettingsModel.lanes.forEach(function (lane) {
            lane.name = lane.name ? lane.name : lane.color;
        });
        // check if lane names is unique
        var laneNames = [];
        var isNamesUnique = true;
        this.schoolSettingsModel.lanes.forEach(function (lane) {
            if (laneNames.indexOf(lane.name.toLowerCase()) === -1) {
                laneNames.push(lane.name.toLowerCase());
            }
            else {
                isNamesUnique = false;
            }
        });
        return isNamesUnique;
    };
    /**
     * Check is one scanner user assign only for one line for multiple scanners mode
     */
    SchoolConfigurationComponent.prototype.checkScannerUsers = function () {
        var isScannersUnique = true;
        if (this.schoolSettingsModel.laneLogisticTypeId === 2) {
            var lanesUsers_1 = [];
            this.schoolSettingsModel.lanes.forEach(function (lane) {
                if (!lane.userId) {
                    return;
                }
                ;
                if (lanesUsers_1.indexOf(lane.userId) === -1) {
                    lanesUsers_1.push(lane.userId);
                }
                else {
                    isScannersUnique = false;
                }
            });
        }
        return isScannersUnique;
    };
    /**
     * Reset lanes users in settings
     */
    SchoolConfigurationComponent.prototype.resetLanesUsers = function () {
        this.schoolSettingsModel.lanes.forEach(function (lane) {
            lane.userId = null;
        });
        this.newScannerUsers = [];
        this.repeatEmails = [];
    };
    /**
     * Check is new users emails unique and not exist
     */
    SchoolConfigurationComponent.prototype.checkUserEmails = function (callback) {
        var _this = this;
        this.existEmails = [];
        var uniqueEmails = [];
        var existEmails = [];
        var emailCheckMethods = [];
        if (this.schoolSettingsModel.newScannerUsers && this.schoolSettingsModel.newScannerUsers.length) {
            this.schoolSettingsModel.newScannerUsers.forEach(function (user) {
                if (uniqueEmails.indexOf(user.email) === -1) {
                    uniqueEmails.push(user.email);
                }
                else {
                    existEmails.push(user.email);
                }
            });
        }
        else {
            callback && callback();
            return;
        }
        // check emails on backend
        uniqueEmails.forEach(function (email) {
            emailCheckMethods.push(_this.userService.userEmailExist(email));
        });
        Object(__WEBPACK_IMPORTED_MODULE_10_rxjs_observable_forkJoin__["a" /* forkJoin */])(emailCheckMethods).subscribe(function (res) {
            res.forEach(function (isExist, index) {
                isExist && existEmails.push(uniqueEmails[index]);
            });
            _this.existEmails = existEmails;
            callback && callback();
        });
    };
    SchoolConfigurationComponent.prototype.isNewUserRepeatEmail = function (i) {
        var _this = this;
        this.existEmails = [];
        this.repeatEmails = [];
        var uniqueEmails = [];
        var repeatEmails = [];
        // check emails between new users
        if (this.newScannerUsers && this.newScannerUsers.length) {
            var currentUser = this.newScannerUsers[i];
            this.newScannerUsers.forEach(function (user, index) {
                if (user === null || user.email === undefined || user.email === "" || user.email.length === 0) { }
                else {
                    var repIndex = uniqueEmails.indexOf(user.email);
                    if (repIndex === -1) {
                        uniqueEmails.push(user.email);
                    }
                    else {
                        repeatEmails.push(user.email);
                        _this.repeatEmails[index] = true;
                        _this.repeatEmails[repIndex] = true;
                    }
                }
            });
        }
        else {
            return;
        }
    };
    SchoolConfigurationComponent.prototype.endYear = function () {
        var _this = this;
        this.loaderService.displayMini(true);
        this.schoolService.eraseStudents().subscribe(function (response) { return _this.loaderService.displayMini(false); }, function (err) { return _this.ErrorHandler(err); });
    };
    SchoolConfigurationComponent.prototype.ErrorHandler = function (err) {
        this.loaderService.displayMini(false);
        if (err === null) {
        }
        else {
            switch (err.status) {
                case 400:
                    this.notificationService.show(err.error, true, true);
                    break;
                case 409:
                    this.notificationService.show(err.error, true, true);
                    break;
                case 500:
                    this.notificationService.show('Server error occured!', true, true);
                    break;
                case 503:
                    this.notificationService.show('Error occured while processing your request!', true, true);
                    break;
                default: break;
            }
        }
    };
    SchoolConfigurationComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'school-configuration',
            template: __webpack_require__("./src/app/components/school-configuration/school-configuration.component.html")
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_school_configuration_service__["a" /* SchoolConfigurationService */],
            __WEBPACK_IMPORTED_MODULE_5__services_modal_service__["a" /* ModalService */],
            __WEBPACK_IMPORTED_MODULE_6__services_loader_service__["a" /* LoaderService */],
            __WEBPACK_IMPORTED_MODULE_7__services_notification_service__["a" /* NotificationService */],
            __WEBPACK_IMPORTED_MODULE_9__services_user_management_service__["a" /* UserManagementService */]])
    ], SchoolConfigurationComponent);
    return SchoolConfigurationComponent;
}());



/***/ }),

/***/ "./src/app/components/students/edit-student/edit-student.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"padding-24\">\r\n  <header class=\"page-header\">\r\n    <div class=\"page-header__left\">\r\n      <button class=\"flat purple icon\" [routerLink]=\"['/students']\">\r\n        BACK TO STUDENTS\r\n        <i class=\"material-icons\">arrow_back</i>\r\n      </button>\r\n    </div>\r\n\r\n    <div class=\"page-header__right\">\r\n      <button class=\"flat black\" *ngIf=\"!isEdit\" [routerLink]=\"['/students-import']\">ADD IN BULK</button>\r\n    </div>\r\n  </header>\r\n\r\n  <form class=\"cp-form\" #newStudentForm=\"ngForm\">\r\n    <header class=\"cp-form__header\">\r\n      <h1 class=\"cp-form__title\">{{ isEdit ? 'Edit Student' : 'Create Student'}}</h1>\r\n    </header>\r\n\r\n    <label class=\"cp-input-label\">ID</label>\r\n    <input #externalIdInput=\"ngModel\" class=\"cp-text-input\" type=\"text\" [(ngModel)]=\"studentModel.externalId\" name=\"idInput\" whitespace-validator />\r\n    <!--ID input validation-->\r\n    <div *ngIf=\"externalIdInput.invalid\"\r\n         class=\"alert alert-danger\">\r\n      <div *ngIf=\"externalIdInput.errors.invalidWhitespace\">You can't use white-spaces as external id!</div>\r\n    </div>\r\n\r\n    <label class=\"cp-input-label\">NAME</label>\r\n    <input #studentNameInput=\"ngModel\" class=\"cp-text-input\" type=\"text\" [(ngModel)]=\"studentModel.name\"\r\n           name=\"nameInput\" minlength=\"3\" whitespace-validator pattern=\"^[A-Za-z\\s]{1,}[\\.]{0,1}[A-Za-z\\s]{0,}$\" required />\r\n    <!--Student name input validation-->\r\n    <div *ngIf=\"studentNameInput.invalid && (studentNameInput.dirty || studentNameInput.touched)\"\r\n         class=\"alert alert-danger\">\r\n      <div *ngIf=\"studentNameInput.errors.minlength\">Students name should not contain less then 3 symbols!</div>\r\n      <div *ngIf=\"studentNameInput.errors.required\">Student name required!</div>\r\n      <div *ngIf=\"studentNameInput.errors.pattern\">Student name is invalid!</div>\r\n      <div *ngIf=\"studentNameInput.errors.invalidWhitespace\">You can't use white-spaces as students name!</div>\r\n    </div>\r\n\r\n    <label class=\"cp-input-label\">GRADE</label>\r\n    <input #gradeInput=\"ngModel\" class=\"cp-text-input\" type=\"text\" [(ngModel)]=\"studentModel.grade\"\r\n           name=\"gradeInput\" whitespace-validator />\r\n    <!--Grade input validation-->\r\n    <div *ngIf=\"gradeInput.invalid\"\r\n         class=\"alert alert-danger\">\r\n      <div *ngIf=\"gradeInput.errors.invalidWhitespace\">You can't use white-spaces as grade!</div>\r\n    </div>\r\n\r\n    <label class=\"cp-input-label\">CLASSROOM</label>\r\n    <p-dropdown [options]=\"classrooms\" [(ngModel)]=\"studentModel.classroom\"\r\n                optionLabel=\"name\" [autoWidth]=\"false\" name=\"classroomInput\"\r\n                placeholder=\"Select Classroom\" (ngModelChange)=\"clearClassroomName($event)\" required>\r\n    </p-dropdown>\r\n\r\n    <div *ngIf=\"studentModel.classroom.id === -1\">\r\n      <label class=\"cp-input-label\">CLASSROOM NAME</label>\r\n      <input #classRoomNameInput=\"ngModel\" class=\"cp-text-input\" [(ngModel)]=\"studentModel.classroom.name\"\r\n             name=\"classRoomNameInput\" whitespace-validator required/>\r\n      <div *ngIf=\"classRoomNameInput.invalid && (classRoomNameInput.dirty || classRoomNameInput.touched)\"\r\n           class=\"alert alert-danger\">\r\n        <div *ngIf=\"classRoomNameInput.errors.required\">Classroom name is required!</div>\r\n        <div *ngIf=\"classRoomNameInput.errors.pattern\">Classroom name is invalid!</div>\r\n        <div *ngIf=\"classRoomNameInput.errors.invalidWhitespace\">You can't use white-spaces as classrooms name!</div>\r\n      </div>\r\n    </div>\r\n\r\n\r\n    <div *ngIf=\"isEdit\">\r\n      <label class=\"cp-input-label\">PARENT/GUARDIAN</label>\r\n      <p-dropdown #parentInput=\"ngModel\" [autoWidth]=\"false\"\r\n                  name=\"parentInput\" [options]=\"parents\" [(ngModel)]=\"selectedParent\"\r\n                  (ngModelChange)=\"changeParent()\" optionLabel=\"name\" [filter]=\"true\">\r\n      </p-dropdown>\r\n    </div>\r\n\r\n    <div *ngIf=\"!isEdit || (selectedParent.name == 'Add Parent/Guardian' && selectedParent.name !== null) \">\r\n      <label class=\"cp-input-label\">PARENT/GUARDIAN NAME</label>\r\n      <input #parentNameInput=\"ngModel\" class=\"cp-text-input\" type=\"text\"\r\n             [(ngModel)]=\"studentModel.studentParent.name\" minlength=\"3\"\r\n             maxlength=\"256\" name=\"parentNameInput\" pattern=\"^[A-Za-z\\s]{1,}[\\.]{0,1}[A-Za-z\\s]{0,}$\"\r\n             whitespace-validator required />\r\n      <!--Parent name validation-->\r\n      <div *ngIf=\"parentNameInput.invalid && (parentNameInput.dirty || parentNameInput.touched)\"\r\n           class=\"alert alert-danger\">\r\n        <div *ngIf=\"parentNameInput.errors.minlength\">Parent/guardian name should not contain less then 3 symbols!</div>\r\n        <div *ngIf=\"parentNameInput.errors.maxlength\">Parent/guardian name should not contain more then 256 symbols!</div>\r\n        <div *ngIf=\"parentNameInput.errors.invalidWhitespace\">You can use white-spaces as a parent name!</div>\r\n        <div *ngIf=\"parentNameInput.errors.required\">Parent/guardian name is required!</div>\r\n        <div *ngIf=\"parentNameInput.errors.pattern\">Parent/guardian name is invalid!</div>\r\n      </div>\r\n\r\n      <label class=\"cp-input-label\">PARENT/GUARDIAN EMAIL</label>\r\n      <input #parentEmailInput=\"ngModel\" class=\"cp-text-input\" type=\"text\" [(ngModel)]=\"studentModel.studentParent.email\"\r\n             [ngModelOptions]=\"{updateOn: 'blur'}\" name=\"parentEmailInput\" pattern=\"[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\\.[A-Za-z]{2,4}\"\r\n             appIsUserParent {{ isEdit ? required}}  />\r\n      <!--Parent email validation-->\r\n      <div *ngIf=\"parentEmailInput.invalid && (parentEmailInput.dirty || parentEmailInput.touched)\"\r\n           class=\"alert alert-danger\">\r\n        <div *ngIf=\"parentEmailInput.errors.pattern\">Parent/guardian email is incorrect!</div>\r\n        <div *ngIf=\"parentEmailInput.errors.required\">Parent/guardian email is required!</div>\r\n        <div *ngIf=\"parentEmailInput.errors.isParent\"> The following parent’s email {{studentModel.studentParent.email}} is already being used as a {{parentEmailInput.errors.role.value}}.<br> Please use another email.</div>\r\n      </div>\r\n    </div>\r\n\r\n\r\n\r\n    <footer class=\"cp-form__footer\">\r\n      <button type=\"submit\" class=\"flat accent shadow\" [disabled]=\"newStudentForm.form.invalid || studentModel.classroom.id === 0 \" (click)=\"submitStudent()\">{{ isEdit ? 'SAVE' : 'CREATE'}}</button>\r\n    </footer>\r\n  </form>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/components/students/edit-student/edit-student.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EditStudentComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__models_student_edit_model__ = __webpack_require__("./src/app/models/student-edit.model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_students_service__ = __webpack_require__("./src/app/services/students.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__models_classroom_model__ = __webpack_require__("./src/app/models/classroom.model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_classrooms_service__ = __webpack_require__("./src/app/services/classrooms.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__models_studentParent_model__ = __webpack_require__("./src/app/models/studentParent.model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__utils_utils__ = __webpack_require__("./src/app/utils/utils.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__services_notification_service__ = __webpack_require__("./src/app/services/notification.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__services_loader_service__ = __webpack_require__("./src/app/services/loader.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};










var EditStudentComponent = (function () {
    function EditStudentComponent(studentService, route, router, classroomService, notificationService, loaderService) {
        this.studentService = studentService;
        this.route = route;
        this.router = router;
        this.classroomService = classroomService;
        this.notificationService = notificationService;
        this.loaderService = loaderService;
        this.studentModel = new __WEBPACK_IMPORTED_MODULE_2__models_student_edit_model__["a" /* StudentEdit */]();
        this.isEdit = false;
        this.selectedParent = new __WEBPACK_IMPORTED_MODULE_6__models_studentParent_model__["a" /* StudentParent */]();
        this.trimModel = __WEBPACK_IMPORTED_MODULE_7__utils_utils__["a" /* Utils */].trimModel;
    }
    EditStudentComponent.prototype.ngOnInit = function () {
        this.studentModel.classroom = new __WEBPACK_IMPORTED_MODULE_4__models_classroom_model__["a" /* Classroom */]();
        this.studentModel.studentParent = new __WEBPACK_IMPORTED_MODULE_6__models_studentParent_model__["a" /* StudentParent */]();
        this.initModel();
    };
    EditStudentComponent.prototype.ngOnDestroy = function () {
        this._routeSub.unsubscribe();
    };
    EditStudentComponent.prototype.initModel = function () {
        var _this = this;
        this.getStudentId(function () {
            if (_this.studentId) {
                _this.isEdit = true;
                _this.getStudentById(_this.studentId).subscribe(function (res) {
                    _this.studentModel = res;
                });
            }
            _this.getClassrooms();
            //values to populate the parents dropdown for edit mode
            if (_this.isEdit) {
                _this.getParents();
            }
        });
    };
    EditStudentComponent.prototype.getParents = function () {
        var _this = this;
        this.studentService.getStudentParents().subscribe(function (res) {
            _this.selectedParent.name = _this.studentModel.studentParent.name;
            _this.selectedParent.id = _this.studentModel.studentParent.id;
            _this.selectedParent.email = _this.studentModel.studentParent.email;
            _this.parents = res;
            _this.parents.push(new __WEBPACK_IMPORTED_MODULE_6__models_studentParent_model__["a" /* StudentParent */](0, "Add Parent/Guardian"));
        });
    };
    EditStudentComponent.prototype.changeParent = function () {
        console.log(this.selectedParent.name);
        if (this.selectedParent.name === "Add Parent/Guardian") {
            this.studentModel.studentParent.id = 0;
            this.studentModel.studentParent.name = '';
            this.studentModel.studentParent.email = '';
        }
        else {
            this.studentModel.studentParent.id = this.selectedParent.id;
            this.studentModel.studentParent.name = this.selectedParent.name;
            this.studentModel.studentParent.email = this.selectedParent.email;
        }
    };
    EditStudentComponent.prototype.getStudentId = function (completed) {
        var _this = this;
        this._routeSub = this.route.params.subscribe(function (params) {
            _this.studentId = params['id'] ? +params['id'] : null;
            completed();
        });
    };
    EditStudentComponent.prototype.getClassrooms = function () {
        var _this = this;
        this.classroomService.getClassroomsList().subscribe(function (res) {
            _this.classrooms = res;
            _this.classrooms.push(new __WEBPACK_IMPORTED_MODULE_4__models_classroom_model__["a" /* Classroom */](-1, "Add classroom"));
            console.log(_this.classrooms);
        });
    };
    EditStudentComponent.prototype.getStudentById = function (id) {
        return this.studentService.getStudentById(this.studentId);
    };
    EditStudentComponent.prototype.submitStudent = function () {
        var _this = this;
        this.loaderService.displayMini(true);
        if (this.studentId) {
            // editing
            this.studentService.submitEditStudent(this.studentId, this.studentModel)
                .subscribe(function (response) { return _this.responseStatusCodeHandler(response); }, function (err) { return _this.responseStatusCodeHandler(err); });
        }
        else {
            // creating
            this.studentService.submitNewStudent(this.studentModel)
                .subscribe(function (response) { return _this.responseStatusCodeHandler(response); }, function (err) { return _this.responseStatusCodeHandler(err); });
        }
    };
    EditStudentComponent.prototype.responseStatusCodeHandler = function (err) {
        if (err === null) {
            this.loaderService.displayMini(false);
            this.notificationService.show('Your changes applied successfully!', true, false);
        }
        else {
            this.loaderService.displayMini(false);
            switch (err.status) {
                case 400:
                    this.notificationService.show(err.error, true, true);
                    break;
                case 500:
                    this.notificationService.show('Server error occured!', true, true);
                    break;
                case 503:
                    this.notificationService.show('Error occured while processing your request!', true, true);
                    break;
                default: break;
            }
        }
        this.router.navigateByUrl('/students');
    };
    EditStudentComponent.prototype.clearClassroomName = function (classroom) {
        console.log(classroom.name);
        if (classroom.name === "Add classroom") {
            this.studentModel.classroom.name = '';
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChildren"])('newStudentForm'),
        __metadata("design:type", Object)
    ], EditStudentComponent.prototype, "newStudentForm", void 0);
    EditStudentComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'edit-student',
            template: __webpack_require__("./src/app/components/students/edit-student/edit-student.component.html")
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__services_students_service__["a" /* StudentsService */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["ActivatedRoute"],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["Router"],
            __WEBPACK_IMPORTED_MODULE_5__services_classrooms_service__["a" /* ClassroomsService */],
            __WEBPACK_IMPORTED_MODULE_8__services_notification_service__["a" /* NotificationService */],
            __WEBPACK_IMPORTED_MODULE_9__services_loader_service__["a" /* LoaderService */]])
    ], EditStudentComponent);
    return EditStudentComponent;
}());



/***/ }),

/***/ "./src/app/components/students/students-grid/students-grid.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"page-container\" [ngClass]=\"{'full-height-page full-height-page--flex-column': !students?.length || !filteredStudents?.length}\">\r\n  <div class=\"page-header\">\r\n    <div class=\"page-header__left\">\r\n      <div class=\"page-header__title\">Students</div>\r\n    </div>\r\n\r\n    <div class=\"page-header__right\">\r\n      <search-bar [data]=\"students\" [filters]=\"['externalId', 'name', 'classroomName', 'parentEmail']\" (searchEnd)=\"setFilteredStudents($event)\"></search-bar>\r\n      <button *ngIf=\"!filteredStudents?.length\" class=\"item flat accent shadow\" [routerLink]=\"['../students-import']\">IMPORT</button>\r\n      <button *ngIf=\"filteredStudents?.length\" class=\"item flat accent shadow\" [disabled]=\"!selectedStudentsId?.length\" (click)=\"ModalService.openModal(template)\">BULK EDIT</button>\r\n      <button class=\"item flat accent shadow\" [routerLink]=\"['../edit-student']\">ADD</button>\r\n    </div>\r\n  </div>\r\n\r\n\r\n  <div class=\"grid-container\" *ngIf=\"filteredStudents.length\">\r\n\r\n    <dx-data-grid class=\"cp-data-grid\" [dataSource]=\"filteredStudents\" [showBorders]=\"false\"\r\n                  [showRowLines]=\"true\" [showColumnLines]=\"false\" [loadPanel]=\"false\"\r\n                  (onContentReady)=\"gridReady($event)\">\r\n\r\n      <dxi-column cellTemplate=\"checkCell\" headerCellTemplate=\"checkHeaderCell\" [width]=\"50\" alignment=\"center\"></dxi-column>\r\n      <dxi-column dataField=\"externalId\" caption=\"ID\" [width]=\"120\" alignment=\"left\" sortOrder=\"asc\"></dxi-column>\r\n      <dxi-column dataField=\"name\" caption=\"NAME\"></dxi-column>\r\n      <dxi-column dataField=\"grade\" caption=\"GRADE\" [width]=\"120\"></dxi-column>\r\n      <dxi-column dataField=\"classroomName\" caption=\"CLASSROOM\"></dxi-column>\r\n      <dxi-column dataField=\"parentEmail\" caption=\"PARENT/GUARDIAN\"></dxi-column>\r\n      <dxi-column dataField=\"studentStatus\" caption=\"STATUS\" cellTemplate=\"statusCell\"></dxi-column>\r\n      <dxi-column cellTemplate=\"optionsCell\" cssClass=\"w-70-px overflow-visible\" alignment=\"center\"></dxi-column>\r\n\r\n      <!-- Cells templates -->\r\n      <div *dxTemplate=\"let cell of 'statusCell'\" class=\"text-ellipsis\">\r\n        <span class=\"status-field {{ getStatusClass(cell.data.studentStatus) }}\">{{cell.data.studentStatus}}</span>\r\n      </div>\r\n\r\n      <div *dxTemplate=\"let cell of 'checkHeaderCell'\">\r\n        <p-checkbox class=\"cp-primeng-checkbox\" name=\"checkedAll\" (onChange)=\"isCheckedStudent()\" [(ngModel)]=\"isSelectAll\" binary=\"true\"></p-checkbox>\r\n      </div>\r\n      <div *dxTemplate=\"let cell of 'checkCell'\">\r\n        <p-checkbox class=\"cp-primeng-checkbox\" name=\"checkStudent\" value=\"{{cell.data.id}}\" [(ngModel)]=\"selectedStudentsId\" inputId=\"{{cell.data.id}}\"></p-checkbox>\r\n      </div>\r\n\r\n      <div *dxTemplate=\"let cell of 'optionsCell'\">\r\n        <div class=\"btn-group\">\r\n          <div class=\"dropdown\">\r\n            <button class=\"btn dd-toggle\" data-toggle=\"dropdown\" data-offset=\"0%, -100%\" data-flip=\"false\" aria-haspopup=\"true\" aria-expanded=\"false\">\r\n              <span>\r\n                <i class=\"material-icons\">more_vert</i>\r\n              </span>\r\n            </button>\r\n            <div class=\"dropdown-menu dropdown-menu-right\" aria-labelledby=\"dropdownMenuButton\">\r\n              <button class=\"dropdown-item\" type=\"button\" [routerLink]=\"['../edit-student/' + cell.data.id]\">Edit</button>\r\n              <button class=\"dropdown-item\" type=\"button\" (click)=\"setDeleteStudentId(cell.data.id); ModalService.openModal(deleteTemplate)\">Delete</button> <!---->\r\n              <button class=\"dropdown-item\" type=\"button\" (click)=\"resetPassword(cell.data.parentEmail)\">Reset parents account password</button>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n\r\n      <!-- Pagination -->\r\n      <dxo-paging [pageSize]=\"10\"></dxo-paging>\r\n      <dxo-pager [showNavigationButtons]=\"true\"></dxo-pager>\r\n    </dx-data-grid>\r\n    <app-paginator></app-paginator>\r\n  </div>\r\n\r\n  <!-- No items screen -->\r\n  <div class=\"no-items-view\" *ngIf=\"!students?.length\">\r\n    <div class=\"no-items-view__image-container no-items-view__image-container--not-clickable\">\r\n      <img class=\"no-items-view__image\" src=\"assets/images/no-students-2.svg\" alt=\"new school\">\r\n    </div>\r\n    <p class=\"no-items-view__text\">No records were found, add a student or import a file.</p>\r\n  </div>\r\n\r\n  <!-- No search results screen -->\r\n  <div class=\"no-items-view\" *ngIf=\"!filteredStudents?.length && students?.length\">\r\n    <div class=\"no-items-view__image-container no-items-view__image-container--not-clickable\">\r\n      <img class=\"no-items-view__image\" src=\"assets/images/no-students-3.svg\" alt=\"new school\">\r\n    </div>\r\n    <p class=\"no-items-view__text\">No records were found that match the specified search criteria</p>\r\n  </div>\r\n</div>\r\n\r\n<ng-template #template>\r\n  <form class=\"cp-form\" #editStudentForm=\"ngForm\">\r\n    <div class=\"cp-modal\">\r\n      <header class=\"cp-modal__header\">\r\n        <h5 class=\"cp-modal__title\">Edit</h5>\r\n      </header>\r\n      <header class=\"cp-modal__content\">\r\n        <p class=\"cp-modal__text\">GRADE</p>\r\n        <input #studentGradeInput=\"ngModel\" class=\"white-bg\" type=\"text\" [(ngModel)]=\"grade\" name=\"grade\" style=\"width:100%;display: block; padding: 12px 18px; height: 48px; border: 1px solid #E8E8E8; border-radius: 8px; font-size: 14px;\" whitespace-validator />\r\n        <br>\r\n        <div *ngIf=\"studentGradeInput.invalid && (studentGradeInput.dirty || studentGradeInput.touched)\"\r\n             class=\"alert alert-danger\">\r\n          <div *ngIf=\"studentGradeInput.errors.invalidWhitespace\">You can't use white-spaces as grade!</div>\r\n        </div>\r\n        <p class=\"cp-modal__text\">CLASSROOM</p>\r\n        <p-dropdown #studentClassroomInput=\"ngModel\" placeholder=\"Select a classroom\" [options]=\"classrooms\" optionLabel=\"name\" [(ngModel)]=\"selectedClass\" [autoWidth]=\"false\" name=\"classroomName\"></p-dropdown>\r\n      </header>\r\n      <footer class=\"cp-modal__footer\">\r\n        <button class=\"flat black\" (click)=\"cancelChageGradeAndClassroom(); ModalService.modalRef.hide()\">CANCEL</button>\r\n        <button class=\"flat accent shadow\" (click)=\"changeGradeAndClassroom(); ModalService.modalRef.hide()\">ACCEPT</button>\r\n      </footer>\r\n    </div>\r\n  </form>\r\n    \r\n</ng-template>\r\n\r\n<ng-template #deleteTemplate>\r\n  <div class=\"cp-modal\">\r\n    <header class=\"cp-modal__header\">\r\n      <h5 class=\"cp-modal__title\">Delete Student?</h5>\r\n    </header>\r\n    <header class=\"cp-modal__content\">\r\n      <p class=\"cp-modal__text\">\r\n        Are you sure you want to delete this student?\r\n        <br/>This action cannot be undone.\r\n      </p>\r\n    </header>\r\n    <footer class=\"cp-modal__footer\">\r\n      <button class=\"flat black\" (click)=\"ModalService.modalRef.hide()\">CANCEL</button>\r\n      <button class=\"flat accent shadow\" (click)=\"deleteStudent(); ModalService.modalRef.hide()\">DELETE</button>\r\n    </footer>\r\n  </div>\r\n</ng-template>\r\n"

/***/ }),

/***/ "./src/app/components/students/students-grid/students-grid.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StudentsGridComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_students_service__ = __webpack_require__("./src/app/services/students.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__models_student_model__ = __webpack_require__("./src/app/models/student.model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_modal_service__ = __webpack_require__("./src/app/services/modal.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_loader_service__ = __webpack_require__("./src/app/services/loader.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_classrooms_service__ = __webpack_require__("./src/app/services/classrooms.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__modules_share_module_search_bar_search_bar_component__ = __webpack_require__("./src/app/modules/share-module/search-bar/search-bar.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__modules_share_module_paginator_paginator_component__ = __webpack_require__("./src/app/modules/share-module/paginator/paginator.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__services_auth_service__ = __webpack_require__("./src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__services_notification_service__ = __webpack_require__("./src/app/services/notification.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};










var StudentsGridComponent = (function () {
    function StudentsGridComponent(studentsService, ModalService, loaderService, classroomsService, authService, notificationService) {
        this.studentsService = studentsService;
        this.ModalService = ModalService;
        this.loaderService = loaderService;
        this.classroomsService = classroomsService;
        this.authService = authService;
        this.notificationService = notificationService;
        this.students = [];
        this.filteredStudents = [];
        this.selectedStudentsId = [];
        this.isSelectAll = false;
        this.selectedClass = { id: 0, name: "Select Classroom", teacherId: 0, schoolId: 0 };
        this.grade = "";
        this.deleteStudentId = 0;
        this.loaderService.display(true);
    }
    StudentsGridComponent.prototype.ngOnInit = function () {
        this.getStudents();
        this.getClassrooms();
    };
    StudentsGridComponent.prototype.setDeleteStudentId = function (id) {
        this.deleteStudentId = id;
    };
    StudentsGridComponent.prototype.getStudents = function () {
        var _this = this;
        this.studentsService.getStudents().subscribe(function (res) {
            _this.students = res;
            _this.loaderService.display(false);
            setTimeout(function () {
                _this.searchBar.search();
            }, 0);
        });
    };
    StudentsGridComponent.prototype.getClassrooms = function () {
        var _this = this;
        this.classroomsService.getClassroomsList().subscribe(function (res) {
            _this.classrooms = res;
            _this.classrooms.splice(0, 0, _this.selectedClass);
        });
    };
    StudentsGridComponent.prototype.deleteStudent = function () {
        var _this = this;
        this.loaderService.displayMini(true);
        if (this.deleteStudentId) {
            this.studentsService.deleteStudent(this.deleteStudentId).subscribe(function (response) { return _this.deleteUserHandler(); }, function (err) { return _this.ErrorHandler(err); });
        }
    };
    StudentsGridComponent.prototype.ErrorHandler = function (err) {
        this.loaderService.displayMini(false);
        if (err === null) {
        }
        else {
            switch (err.status) {
                case 400:
                    this.notificationService.show(err.error, true, true);
                    break;
                case 409:
                    this.notificationService.show(err.error, true, true);
                    break;
                case 500:
                    this.notificationService.show('Server error occured!', true, true);
                    break;
                case 503:
                    this.notificationService.show('Error occured while processing your request!', true, true);
                    break;
                default: break;
            }
        }
    };
    StudentsGridComponent.prototype.deleteUserHandler = function () {
        var _this = this;
        this.loaderService.displayMini(false);
        this.notificationService.show("Student deleted!", true);
        this.students.splice(this.students.findIndex(function (student) { return student.id === _this.deleteStudentId; }), 1);
        setTimeout(function () {
            _this.searchBar.search();
        }, 0);
    };
    StudentsGridComponent.prototype.getStatusClass = function (status) {
        switch (status) {
            case 'Active':
                return 'success';
            case 'Pending':
                return 'disabled';
            case 'Without Cards':
                return 'warning';
            default:
                return '';
        }
    };
    StudentsGridComponent.prototype.gridReady = function (e) {
        if (this.students) {
            this.pager.itemsTotal = this.filteredStudents.length;
            this.pager.selectedPage = e.component.pageIndex();
        }
    };
    StudentsGridComponent.prototype.setFilteredStudents = function (filteredStudents) {
        this.filteredStudents = filteredStudents;
    };
    StudentsGridComponent.prototype.isCheckedStudent = function () {
        var _this = this;
        if (this.isSelectAll) {
            this.selectedStudentsId = [];
            this.filteredStudents.forEach(function (item) {
                _this.selectedStudentsId.push(item.id.toString());
            });
        }
        else {
            this.selectedStudentsId = [];
        }
    };
    StudentsGridComponent.prototype.changeGradeAndClassroom = function () {
        var _this = this;
        this.loaderService.display(true);
        var model = new __WEBPACK_IMPORTED_MODULE_2__models_student_model__["a" /* ChangeCradeAndClassroom */]();
        model.grade = this.grade;
        console.log(this.selectedClass);
        model.classroomId = this.selectedClass.id;
        model.studentsIdList = this.selectedStudentsId;
        this.studentsService.changeGradeAndClassroom(model).subscribe(function (res) {
            _this.resetData();
        });
    };
    StudentsGridComponent.prototype.resetData = function () {
        this.students = [];
        this.classrooms = [];
        this.selectedStudentsId = [];
        this.isSelectAll = false;
        this.getStudents();
        this.getClassrooms();
        this.cancelChageGradeAndClassroom();
    };
    StudentsGridComponent.prototype.cancelChageGradeAndClassroom = function () {
        this.selectedClass = { id: 0, name: "Select Classroom", teacherId: 0, schoolId: 0 };
        this.grade = "";
    };
    StudentsGridComponent.prototype.resetPassword = function (email) {
        var _this = this;
        this.authService.resetPassword(email)
            .subscribe(function (response) {
            return _this.notificationService.show("The instructions to reset password have been sent to " + email + ".", true);
        }, function (err) {
            return _this.notificationService.show("Error occured while processing your request!", true, true);
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_7__modules_share_module_paginator_paginator_component__["a" /* PaginatorComponent */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_7__modules_share_module_paginator_paginator_component__["a" /* PaginatorComponent */])
    ], StudentsGridComponent.prototype, "pager", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_6__modules_share_module_search_bar_search_bar_component__["a" /* SearchBarComponent */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_6__modules_share_module_search_bar_search_bar_component__["a" /* SearchBarComponent */])
    ], StudentsGridComponent.prototype, "searchBar", void 0);
    StudentsGridComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'students',
            template: __webpack_require__("./src/app/components/students/students-grid/students-grid.component.html")
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_students_service__["a" /* StudentsService */],
            __WEBPACK_IMPORTED_MODULE_3__services_modal_service__["a" /* ModalService */],
            __WEBPACK_IMPORTED_MODULE_4__services_loader_service__["a" /* LoaderService */],
            __WEBPACK_IMPORTED_MODULE_5__services_classrooms_service__["a" /* ClassroomsService */],
            __WEBPACK_IMPORTED_MODULE_8__services_auth_service__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_9__services_notification_service__["a" /* NotificationService */]])
    ], StudentsGridComponent);
    return StudentsGridComponent;
}());



/***/ }),

/***/ "./src/app/components/students/students-upload/students-upload.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"full-height-page full-height-page--flex-column page-container\">\r\n  <header class=\"page-header\">\r\n    <div class=\"page-header__left\">\r\n      <button class=\"flat purple icon\" [routerLink]=\"['/students']\">BACK TO STUDENTS\r\n        <i class=\"material-icons\">arrow_back</i>\r\n      </button>\r\n    </div>\r\n    <div class=\"page-header__right\">\r\n      <button class=\"flat black\" (click)=\"downloadStudentsTemplate()\">DOWNLOAD TEMPLATE</button>\r\n    </div>\r\n  </header>\r\n\r\n  <div id=\"dropZone\" class=\"no-items-view drop-zone\" ng2FileDrop [uploader]=\"fileTransferService.uploader\" (fileOver)=\"fileTransferService.fileOverBase($event)\" [ngClass]=\"{'drop-zone--file-over': fileTransferService.isFileOverDropZone}\">\r\n    <h4 class=\"no-items-view__title\">Add New Students</h4>\r\n    <p class=\"no-items-view__text\">Drop new student files here in .xlsx format. <br> Old student files dropped here will result in duplications.</p>\r\n\r\n    <!-- file validation -->\r\n    <p *ngIf=\"!fileTransferService.isValidFileExtension\" class=\"file-validation warning\">\"Invalid file selected.\"</p>\r\n    <p *ngIf=\"fileTransferService.isUploadSuccessfull\" class=\"file-validation success\">{{fileTransferService.message}}</p>\r\n    <p *ngIf=\"fileTransferService.isUploadFailed\" class=\"file-validation warning\">\"File upload failed.\"</p>\r\n\r\n    <button class=\"no-items-view__image-container\" (click)=\"fileUpload.click()\">\r\n      <img class=\"no-items-view__image\" src=\"assets/images/no-students.svg\" alt=\"new school\">\r\n    </button>\r\n\r\n    <input type=\"file\" name=\"file\" id=\"file\" #fileUpload class=\"hidden\" ng2FileSelect [uploader]=\"fileTransferService.uploader\" />\r\n    <button class=\"item flat accent shadow\" for=\"file\" (click)=\"fileUpload.click()\">CLICK TO BROWSE</button>\r\n  </div>\r\n</div>\r\n\r\n\r\n"

/***/ }),

/***/ "./src/app/components/students/students-upload/students-upload.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StudentsUploadComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_file_server_service__ = __webpack_require__("./src/app/services/file-server.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var StudentsUploadComponent = (function () {
    function StudentsUploadComponent(fileTransferService) {
        this.fileTransferService = fileTransferService;
    }
    StudentsUploadComponent.prototype.ngOnInit = function () {
        this.fileTransferService.createUploader('api/FileUpload/StudentUpload');
        this.fileTransferService.handleFileUploadEvents();
    };
    StudentsUploadComponent.prototype.downloadStudentsTemplate = function () {
        this.fileTransferService.downloadFile('students-template.xlsx');
    };
    StudentsUploadComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'students-upload',
            template: __webpack_require__("./src/app/components/students/students-upload/students-upload.component.html")
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_file_server_service__["a" /* FileServerService */]])
    ], StudentsUploadComponent);
    return StudentsUploadComponent;
}());



/***/ }),

/***/ "./src/app/components/users-management/new-user/new-user.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"page-container\">\r\n  <header class=\"page-header\">\r\n    <div class=\"page-header__left\">\r\n      <button class=\"flat purple icon\" [routerLink]=\"['/users-management']\">BACK TO USERS\r\n        <i class=\"material-icons\">arrow_back</i>\r\n      </button>\r\n    </div>\r\n  </header>\r\n\r\n  <form class=\"cp-form\" #newUserForm=\"ngForm\" (submit)=\"submitUser()\">\r\n      <header class=\"cp-form__header\">\r\n        <h1 class=\"cp-form__title\">{{ createEditItemService.isEditMode ? 'Edit a School User' : 'Create a School User'}}</h1>\r\n      </header>\r\n\r\n      <label class=\"cp-input-label\">NAME</label>\r\n      <input class=\"cp-text-input\" type=\"text\" placeholder=\"Enter user name\"\r\n             name=\"nameInput\" [(ngModel)]=\"userModel.name\" #nameInput=\"ngModel\"\r\n             pattern=\"^[A-Za-z\\s]{1,}[\\.]{0,1}[A-Za-z\\s]{0,}$\"\r\n             minlength=\"3\" whitespace-validator required />\r\n      <!-- nameInput validation -->\r\n      <div *ngIf=\"nameInput.invalid && (nameInput.dirty || nameInput.touched)\"\r\n            class=\"alert alert-danger\">\r\n        <div *ngIf=\"nameInput?.errors.minlength\">User name should not contain less then 3 symbols!</div>\r\n        <div *ngIf=\"nameInput?.errors.required\">User name is required</div>\r\n        <div *ngIf=\"nameInput?.errors.pattern\">User name is invalid</div>\r\n        <div *ngIf=\"nameInput?.errors.invalidWhitespace\"> You can't use whitespaces as user name!</div>\r\n      </div>\r\n\r\n      <label class=\"cp-input-label\">EMAIL</label>\r\n      <input class=\"cp-text-input\" type=\"text\" placeholder=\"Enter user email address\"\r\n             [(ngModel)]=\"userModel.email\" name=\"emailInput\" #emailInput=\"ngModel\" [ngModelOptions]=\"{updateOn: 'blur'}\"\r\n             pattern=\"[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\\.[A-Za-z]{2,4}\" appIsUserExist\r\n             [disabled]=\"createEditItemService.isEditMode\" required />\r\n      <!-- emailInput validation -->\r\n      <div *ngIf=\"emailInput.invalid && (emailInput.dirty || emailInput.touched)\"\r\n            class=\"alert alert-danger\">\r\n        <div *ngIf=\"emailInput?.errors.pattern\">Email is invalid</div>\r\n        <div *ngIf=\"emailInput?.errors.required\">Email is required</div>\r\n        <div *ngIf=\"emailInput?.errors.isEmailExist\">User with email {{ emailInput.model }} already exist</div>\r\n      </div>\r\n\r\n      <label class=\"cp-input-label\">ROLE</label>\r\n      <p-dropdown [options]=\"rolesOptions\" placeholder=\"Select role\" [autoWidth]=\"false\" name=\"roleInput\"\r\n                  [(ngModel)]=\"userModel.roleId\" #roleInput=\"ngModel\" required></p-dropdown>\r\n      <!-- stateInput validation -->\r\n      <div *ngIf=\"roleInput.invalid && (roleInput.dirty || roleInput.touched)\"\r\n            class=\"alert alert-danger\">\r\n        <div *ngIf=\"roleInput?.errors.required\">State is required</div>\r\n      </div>\r\n      \r\n      <div *ngIf=\"userModel.roleId === 4 && userModel !== null\">\r\n        <label class=\"cp-input-label\">CLASSROOM</label>\r\n        <p-dropdown #classroomInput=\"ngModel\" placeholder=\"Select classroom\" [autoWidth]=\"false\" name=\"classroomInput\"\r\n                    [options]=\"classrooms\" [(ngModel)]=\"selectedClassroom\" optionLabel=\"name\" [filter]=\"true\"></p-dropdown>\r\n        <!-- classroom input validation -->\r\n        <div *ngIf=\"classroomInput.invalid && (classroomInput.dirty || classroomInput.touched)\"\r\n             class=\"alert alert-danger\">\r\n          <div *ngIf=\"classroomInput.errors.required\">Classroom is required</div>\r\n        </div>\r\n      </div>\r\n           \r\n\r\n      <footer class=\"cp-form__footer\">\r\n        <button type=\"submit\" class=\"flat accent shadow\" [disabled]=\"newUserForm.form.invalid || newUserForm.form.pending || userModel.roleId === 0\">{{ createEditItemService.isEditMode ? 'SAVE' : 'CREATE'}}</button>\r\n      </footer>\r\n  </form>\r\n</div>\r\n\r\n"

/***/ }),

/***/ "./src/app/components/users-management/new-user/new-user.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NewUserComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__models_user_model__ = __webpack_require__("./src/app/models/user.model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_user_management_service__ = __webpack_require__("./src/app/services/user-management.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_create_edit_item_service__ = __webpack_require__("./src/app/services/create-edit-item.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__models_classroom_model__ = __webpack_require__("./src/app/models/classroom.model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__models_EditUser__ = __webpack_require__("./src/app/models/EditUser.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__services_notification_service__ = __webpack_require__("./src/app/services/notification.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__services_loader_service__ = __webpack_require__("./src/app/services/loader.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var NewUserComponent = (function () {
    function NewUserComponent(userManagementService, createEditItemService, route, router, notificationService, loaderService) {
        this.userManagementService = userManagementService;
        this.createEditItemService = createEditItemService;
        this.route = route;
        this.router = router;
        this.notificationService = notificationService;
        this.loaderService = loaderService;
        this.editUser = new __WEBPACK_IMPORTED_MODULE_6__models_EditUser__["a" /* EditUser */]();
    }
    NewUserComponent.prototype.submitUser = function () {
        var _this = this;
        this.loaderService.displayMini(true);
        this.userModel.classroomName = this.selectedClassroom.name;
        if (this.createEditItemService.isEditMode) {
            this.editUser.id = this.userModel.id;
            this.editUser.name = this.userModel.name;
            this.editUser.email = this.userModel.email;
            this.editUser.roleId = this.userModel.roleId;
            this.editUser.classroomId = this.selectedClassroom.id;
            this.editUser.classroomName = this.selectedClassroom.name;
            this.userManagementService.submitEditUser(this.editUser)
                .subscribe(function (response) { return _this.responseStatusCodeHandler(response); }, function (err) { return _this.responseStatusCodeHandler(err); });
        }
        else {
            this.userManagementService.submitNewUser(this.userModel)
                .subscribe(function (response) { return _this.responseStatusCodeHandler(response); }, function (err) { return _this.responseStatusCodeHandler(err); });
        }
    };
    NewUserComponent.prototype.getUserById = function (id) {
        return this.userManagementService.getUser(id);
    };
    NewUserComponent.prototype.responseStatusCodeHandler = function (err) {
        this.loaderService.displayMini(false);
        if (err && !err.status) {
            this.notificationService.show(err, true, false);
        }
        else {
            this.notificationService.show(err.error, true, true);
        }
        this.router.navigate(["../users-management"]);
    };
    NewUserComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.userModel = new __WEBPACK_IMPORTED_MODULE_1__models_user_model__["a" /* User */]();
        this.selectedClassroom = new __WEBPACK_IMPORTED_MODULE_5__models_classroom_model__["a" /* Classroom */]();
        this.userManagementService.initData();
        this.userManagementService.getReadyStatus().subscribe(function (status) {
            if (status) {
                _this.rolesOptions = _this.userManagementService.roles.map(function (role) {
                    return { label: role.name, value: role.id };
                });
            }
        });
        this.userManagementService.getUnassignedClassrooms().subscribe(function (classrooms) {
            _this.classrooms = classrooms;
        });
        this.createEditItemService.getItemId(this.route, function () {
            if (_this.createEditItemService.isEditMode) {
                _this.getUserById(_this.createEditItemService.itemId).subscribe(function (res) {
                    _this.userModel.id = res.id;
                    _this.userModel.name = res.name;
                    _this.userModel.email = res.email;
                    _this.userModel.roleId = res.roleId;
                    if (res.classroomid !== null) {
                        _this.selectedClassroom.id = res.classroomId;
                        _this.selectedClassroom.name = res.classroomName;
                    }
                });
            }
        });
    };
    NewUserComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'new-user',
            template: __webpack_require__("./src/app/components/users-management/new-user/new-user.component.html")
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__services_user_management_service__["a" /* UserManagementService */],
            __WEBPACK_IMPORTED_MODULE_4__services_create_edit_item_service__["a" /* CreateEditItemService */], __WEBPACK_IMPORTED_MODULE_3__angular_router__["ActivatedRoute"],
            __WEBPACK_IMPORTED_MODULE_3__angular_router__["Router"], __WEBPACK_IMPORTED_MODULE_7__services_notification_service__["a" /* NotificationService */],
            __WEBPACK_IMPORTED_MODULE_8__services_loader_service__["a" /* LoaderService */]])
    ], NewUserComponent);
    return NewUserComponent;
}());



/***/ }),

/***/ "./src/app/components/users-management/user-configuration/user-configuration.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"padding-24\">\r\n\r\n  <div>\r\n    <button class=\"flat purple icon\" (click)=\"goBack()\">BACK<i class=\"material-icons\">arrow_back</i></button>\r\n  </div>\r\n\r\n\r\n  <div class=\"form-container w-48-perc\">\r\n    <form #userConfigurationForm=\"ngForm\" (submit)=\"submitUserConfiguration()\">\r\n      <h1>User Configuration</h1>\r\n      <div class=\"label-input-container\">\r\n        <label>NAME</label>\r\n        <input #nameInput=\"ngModel\" type=\"text\" [(ngModel)]=\"userConfiguration.userName\"\r\n               name=\"nameInput\" pattern=\"^[A-Za-z\\s]{1,}[\\.]{0,1}[A-Za-z\\s]{0,}$\"\r\n               minlength=\"3\" whitespace-validator required />\r\n        <div *ngIf=\"nameInput.invalid && (nameInput.dirty || nameInput.touched)\"\r\n             class=\"alert alert-danger\">\r\n          <div *ngIf=\"nameInput.errors.invalidWhitespace\">You can't use white-spaces as user name!</div>\r\n          <div *ngIf=\"nameInput.errors.minlength\">User name should not contain less then 3 symbols!</div>\r\n          <div *ngIf=\"nameInput.errors.required\">User name is required!</div>\r\n          <div *ngIf=\"nameInput.errors.pattern\">User name is incorrect!</div>\r\n        </div>\r\n\r\n\r\n        <label class=\"flex\">EMAIL</label>\r\n        <label class=\"flex\">{{userConfiguration.email}}</label>\r\n\r\n\r\n        <label>CURRENT PASSWORD</label>\r\n        <div class=\"show-password\">\r\n          <input id=\"uc_currentPasswordInput\" #currentPasswordInput=\"ngModel\" type=\"password\"\r\n                 [(ngModel)]=\"userConfiguration.password\"\r\n                 [required]=\"isCurrentPasswordRequired\" name=\"currentPasswordInput\"\r\n                 (ngModelChange)=\"passwordChange($event)\"\r\n                 pattern=\"^\\S*$\" />\r\n          <button class=\"show-password__button\" type=\"button\" (click)=\"triggerCurrentPasswordVisibility()\">\r\n            <i class=\"fa fa-eye\" *ngIf=\"!currentPasswordVisible\" aria-hidden=\"true\"></i>\r\n            <i class=\"fa fa-eye-slash\" *ngIf=\"currentPasswordVisible\" aria-hidden=\"true\"></i>\r\n          </button>\r\n        </div>\r\n        <!-- Current Password validation -->\r\n        <div *ngIf=\"currentPasswordInput.invalid && (currentPasswordInput.dirty\r\n             || currentPasswordInput.touched || newPasswordInput.touched || confirmPasswordInput.touched)\"\r\n             class=\"alert alert-danger\">\r\n          <div *ngIf=\"currentPasswordInput.errors.pattern\">Your password should contain only letters, numbers and symbols!</div>\r\n          <div *ngIf=\"currentPasswordInput.errors.required\">Current password is required!</div>\r\n        </div>\r\n\r\n\r\n        <label>NEW PASSWORD</label>\r\n        <div class=\"show-password\">\r\n          <input id=\"uc_newPasswordInput\" #newPasswordInput=\"ngModel\" type=\"password\"\r\n                 [(ngModel)]=\"userConfiguration.newPassword\" name=\"newPasswordInput\"\r\n                 (ngModelChange)=\"passwordChange($event)\"\r\n                 [required]=\"isNewPasswordRequired\"\r\n                 pattern=\"^\\S*$\" />\r\n          <button class=\"show-password__button\" type=\"button\" (click)=\"triggerNewPasswordVisibility()\">\r\n            <i class=\"fa fa-eye\" *ngIf=\"!newPasswordVisible\" aria-hidden=\"true\"></i>\r\n            <i class=\"fa fa-eye-slash\" *ngIf=\"newPasswordVisible\" aria-hidden=\"true\"></i>\r\n          </button>\r\n        </div>\r\n        <!-- New Password validation -->\r\n        <div *ngIf=\"newPasswordInput.invalid && (newPasswordInput.dirty\r\n             || newPasswordInput.touched || currentPasswordInput.touched || confirmPasswordInput.touched)\"\r\n             class=\"alert alert-danger\">\r\n          <div *ngIf=\"newPasswordInput.errors.pattern\">Your password should contain only letters, numbers and symbols!</div>\r\n          <div *ngIf=\"newPasswordInput.errors.required\">New password is required!</div>\r\n        </div>        \r\n\r\n        <label>CONFIRM NEW PASSWORD</label>\r\n        <div class=\"show-password\">\r\n          <input id=\"uc_confirmPasswordInput\" #confirmPasswordInput=\"ngModel\" type=\"password\"\r\n                 [(ngModel)]=\"userConfiguration.newPasswordConfirmation\" name=\"confirmPasswordInput\"\r\n                 (ngModelChange)=\"passwordChange($event)\"\r\n                 [required]=\"isConfirmPasswordRequired\"\r\n                 pattern=\"^\\S*$\" />\r\n          <button class=\"show-password__button\" type=\"button\" (click)=\"triggerConfirmPasswordVisibility()\">\r\n            <i class=\"fa fa-eye\" *ngIf=\"!confirmPasswordVisible\" aria-hidden=\"true\"></i>\r\n            <i class=\"fa fa-eye-slash\" *ngIf=\"confirmPasswordVisible\" aria-hidden=\"true\"></i>\r\n          </button>\r\n        </div>\r\n        <!-- Confirm Password validation -->\r\n        <div *ngIf=\"confirmPasswordInput.invalid && (confirmPasswordInput.dirty\r\n             || confirmPasswordInput.touched || currentPasswordInput.touched || newPasswordInput.touched)\"\r\n             class=\"alert alert-danger\">\r\n          <div *ngIf=\"confirmPasswordInput.errors.pattern\">Your password should contain only letters, numbers and symbols!</div>\r\n          <div *ngIf=\"confirmPasswordInput.errors.required\">Please confirm new password!</div>\r\n        </div>\r\n        <div *ngIf=\"confirmPasswordInput.value !== newPasswordInput.value && (confirmPasswordInput.touched)\"\r\n             class=\"alert alert-danger\">\r\n          <div>Password does not match the confirm password!</div>\r\n        </div>\r\n\r\n      </div>\r\n\r\n    </form>\r\n\r\n    <div class=\"flex-column padding-12\">\r\n      <div class=\"align-end\">\r\n        <button *ngIf=\"(!currentPasswordInput.value && !newPasswordInput.value && !confirmPasswordInput.value)\" type=\"button\" class=\"flat accent shadow\"\r\n                [disabled]=\"!nameInput.value || nameInput.value === userName\"\r\n                (click)=\"submitUserConfiguration()\">\r\n          SAVE\r\n        </button>\r\n      </div>\r\n      <div *ngIf=\"currentPasswordInput.value || newPasswordInput.value || confirmPasswordInput.value\" class=\"align-end\">\r\n        <button type=\"button\" class=\"flat accent shadow\"\r\n                [disabled]=\"userConfigurationForm.invalid || userConfigurationForm.pending || !currentPasswordInput.value || !newPasswordInput.value\r\n                            || confirmPasswordInput.value !== newPasswordInput.value\"\r\n                (click)=\"submitUserConfiguration()\">\r\n          SAVE\r\n        </button>\r\n      </div>\r\n\r\n    </div>\r\n\r\n\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/components/users-management/user-configuration/user-configuration.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserConfigurationComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_user_management_service__ = __webpack_require__("./src/app/services/user-management.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__models_user_configuration_model__ = __webpack_require__("./src/app/models/user-configuration.model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_loader_service__ = __webpack_require__("./src/app/services/loader.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_notification_service__ = __webpack_require__("./src/app/services/notification.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var UserConfigurationComponent = (function () {
    function UserConfigurationComponent(location, userManagementService, notificationService, loaderService) {
        this.location = location;
        this.userManagementService = userManagementService;
        this.notificationService = notificationService;
        this.loaderService = loaderService;
        this.currentPasswordVisible = false;
        this.newPasswordVisible = false;
        this.confirmPasswordVisible = false;
        this.userConfiguration = new __WEBPACK_IMPORTED_MODULE_3__models_user_configuration_model__["a" /* UserConfiguration */]();
        this.isCurrentPasswordRequired = false;
        this.isNewPasswordRequired = false;
        this.isConfirmPasswordRequired = false;
    }
    UserConfigurationComponent.prototype.triggerCurrentPasswordVisibility = function () {
        this.currentPasswordVisible = !this.currentPasswordVisible;
        this.currentPasswordVisible ? document.getElementById('uc_currentPasswordInput').type = "text"
            : document.getElementById('uc_currentPasswordInput').type = "password";
    };
    UserConfigurationComponent.prototype.triggerNewPasswordVisibility = function () {
        this.newPasswordVisible = !this.newPasswordVisible;
        this.newPasswordVisible ? document.getElementById('uc_newPasswordInput').type = "text"
            : document.getElementById('uc_newPasswordInput').type = "password";
    };
    UserConfigurationComponent.prototype.triggerConfirmPasswordVisibility = function () {
        this.confirmPasswordVisible = !this.confirmPasswordVisible;
        this.confirmPasswordVisible ? document.getElementById('uc_confirmPasswordInput').type = "text"
            : document.getElementById('uc_confirmPasswordInput').type = "password";
    };
    UserConfigurationComponent.prototype.passwordChange = function (val) {
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
    };
    UserConfigurationComponent.prototype.goBack = function () {
        this.location.back();
    };
    UserConfigurationComponent.prototype.responseStatusCodeHandler = function (err) {
        if (err === null) {
            this.loaderService.displayMini(false);
            this.notificationService.show('Your changes applied successfully!', true, false);
        }
        else {
            this.loaderService.displayMini(false);
            switch (err.status) {
                case 400:
                    this.notificationService.show('New password does not match the confirm password!', true, true);
                    break;
                case 403:
                    this.notificationService.show('Your current password is incorrect!', true, true);
                    break;
                case 409:
                    this.notificationService.show('Conflict occured!', true, true);
                    break;
                case 500:
                    this.notificationService.show('Server error occured!', true, true);
                    break;
                case 503:
                    this.notificationService.show('Error occured while processing your request!', true, true);
                    break;
                default: break;
            }
        }
    };
    UserConfigurationComponent.prototype.submitUserConfiguration = function () {
        var _this = this;
        this.loaderService.displayMini(true);
        this.userManagementService
            .submitUserConfiguration(this.userConfiguration)
            .subscribe(function (result) { return _this.responseStatusCodeHandler(result); }, function (err) { return _this.responseStatusCodeHandler(err); });
    };
    UserConfigurationComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.userManagementService.getUserConfiguration().subscribe(function (res) {
            _this.userConfiguration = new __WEBPACK_IMPORTED_MODULE_3__models_user_configuration_model__["a" /* UserConfiguration */](res.username, res.email);
            _this.userName = res.username;
        });
    };
    UserConfigurationComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-user-configuration',
            template: __webpack_require__("./src/app/components/users-management/user-configuration/user-configuration.component.html"),
            styles: []
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common__["Location"],
            __WEBPACK_IMPORTED_MODULE_2__services_user_management_service__["a" /* UserManagementService */],
            __WEBPACK_IMPORTED_MODULE_5__services_notification_service__["a" /* NotificationService */],
            __WEBPACK_IMPORTED_MODULE_4__services_loader_service__["a" /* LoaderService */]])
    ], UserConfigurationComponent);
    return UserConfigurationComponent;
}());



/***/ }),

/***/ "./src/app/components/users-management/users-management.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"page-container\" [ngClass]=\"{'full-height-page full-height-page--flex-column': !usersData?.length || !filteredUsers?.length}\">\r\n  <div class=\"page-header\">\r\n    <div class=\"page-header__left\">\r\n      <div class=\"page-header__title\">Users</div>\r\n    </div>\r\n\r\n    <div class=\"page-header__right\">\r\n      <search-bar [data]=\"usersData\" [filters]=\"['name', 'roleName', 'classroomName', 'email']\" (searchEnd)=\"setFilteredUsers($event)\"></search-bar>\r\n      <button [routerLink]=\"['/users-upload']\" type=\"submit\" class=\"item flat accent shadow\">IMPORT</button>\r\n      <button [routerLink]=\"['/new-user']\" type=\"submit\" class=\"item flat accent shadow\">CREATE</button>\r\n    </div>\r\n  </div>\r\n\r\n  <div class=\"grid-container\">\r\n\r\n    <dx-data-grid class=\"cp-data-grid\" [dataSource]=\"filteredUsers\"\r\n                  [showBorders]=\"false\" [showRowLines]=\"true\"\r\n                  [showColumnLines]=\"false\" (onContentReady)=\"gridReady($event)\">\r\n\r\n      <dxi-column dataField=\"name\" caption=\"NAME\"></dxi-column>\r\n      <dxi-column dataField=\"roleName\" caption=\"ROLE\" cellTemplate='roleCell'></dxi-column>\r\n      <dxi-column dataField=\"classroomName\" cellTemplate='classroomCell' caption=\"CLASSROOM\"></dxi-column>\r\n      <dxi-column dataField=\"email\" caption=\"EMAIL\"></dxi-column>\r\n      <dxi-column dataField=\"statusId\" caption=\"STATUS\" cellTemplate='statusCell' alignment=\"left\"></dxi-column>\r\n      <dxi-column cellTemplate='optionsCell' cssClass=\"w-70-px overflow-visible\" alignment=\"center\"></dxi-column>\r\n\r\n\r\n\r\n      <!-- Cells templates -->\r\n\r\n      <div *dxTemplate=\"let cell of 'roleCell'\">\r\n        {{cell.data.isMainAdmin ? \"Main \" + cell.data.roleName : cell.data.roleName}}\r\n      </div>\r\n\r\n      <div *dxTemplate=\"let cell of 'classroomCell'\">\r\n        {{cell.data.classroomName ? cell.data.classroomName : '-'}}\r\n      </div>\r\n\r\n      <div *dxTemplate=\"let cell of 'statusCell'\" class=\"text-ellipsis\">\r\n        <span class=\"status-field {{ getStatusClass(cell.data.statusId, cell.data.classroomName, cell.data.roleName) }}\">{{getStatusName(cell.data.statusId, cell.data.classroomName, cell.data.roleName)}}</span>\r\n      </div>\r\n\r\n      <div *dxTemplate=\"let cell of 'optionsCell'\">\r\n        <div class=\"btn-group\">\r\n          <div class=\"dropdown\">\r\n            <button class=\"btn dd-toggle\" data-toggle=\"dropdown\" data-offset=\"0%, -100%\" data-flip=\"false\" aria-haspopup=\"true\" aria-expanded=\"false\">\r\n              <span><i class=\"material-icons\">more_vert</i></span>\r\n            </button>\r\n            <div class=\"dropdown-menu dropdown-menu-right\" aria-labelledby=\"dropdownMenuButton\">\r\n              <button *ngIf=\"!cell.data.isMainAdmin\" class=\"dropdown-item\" type=\"button\" [routerLink]=\"['../new-user/'+ cell.data.id]\">Edit</button>\r\n              <button class=\"dropdown-item\" type=\"button\" (click)=\"resetPasswordForUser(cell.data.email)\">Reset password</button>\r\n              <!-- uncomment after finish temporary access\r\n              <button class=\"dropdown-item\" type=\"button\" (click)=\"modalService.openModal(temppassTemplate)\">Set a temporary access</button>\r\n              -->\r\n              <button *ngIf=\"cell.data.statusId !== 2 && !cell.data.isMainAdmin\" class=\"dropdown-item\" type=\"button\" (click)=\"setSuspendUserInfo(cell.data.email, cell.data.statusId); modalService.openModal(suspendTemplate)\">{{ cell.data.statusId !== 4 ? 'Suspend' : 'Activate' }}</button>\r\n              <button *ngIf=\"!cell.data.isMainAdmin\" class=\"dropdown-item\" type=\"button\" (click)=\"setDeleteUserEmail(cell.data.email); modalService.openModal(deleteTemplate)\">Delete</button>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n\r\n      <dxo-paging [pageSize]=\"10\"></dxo-paging>\r\n      <dxo-pager [showNavigationButtons]=\"true\">\r\n      </dxo-pager>\r\n    </dx-data-grid>\r\n    <app-paginator></app-paginator>\r\n  </div>\r\n</div>\r\n\r\n<!--Temporary password modal window template-->\r\n<ng-template #temppassTemplate>\r\n  <div class=\"cp-modal\">\r\n    <header class=\"cp-modal__header\">\r\n      <h5 class=\"cp-modal__title\">Set a Temporary Access?</h5>\r\n    </header>\r\n    <label class=\"cp-input-label\">E-MAIL</label>\r\n    <input class=\"cp-text-input\" type=\"text\" name=\"tp_emailInput\" [(ngModel)]=\"temporaryAccessEmail\" pattern=\"[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\\.[A-Za-z]{2,4}\" required />\r\n    <label class=\"cp-input-label\" name=\"tp_dateInput\" >EXPIRATION DATE</label>\r\n    <p-calendar [(ngModel)]=\"expirationDate\" class=\"cp-input-calendar cp-input-calendar--default\"></p-calendar>\r\n    <footer class=\"cp-modal__footer\">\r\n      <button class=\"flat black\" (click)=\"modalService.modalRef.hide()\">CANCEL</button>\r\n      <button class=\"flat accent shadow\" (click)=\"submitTemporaryAccess(); modalService.modalRef.hide()\">ACCEPT</button>\r\n    </footer>\r\n  </div>\r\n</ng-template>\r\n\r\n<!--Suspend user modal window template-->\r\n<ng-template #suspendTemplate>\r\n  <div class=\"cp-modal\">\r\n    <header class=\"cp-modal__header\">\r\n      <h5 class=\"cp-modal__title\">{{userSuspended ? 'Activate User?' : 'Suspend User?'}}</h5>\r\n    </header>\r\n    <p class=\"cp-modal__text\">Are you sure you want to {{userSuspended ? 'activate' : 'suspend'}} this user?</p>\r\n    <footer class=\"cp-modal__footer\">\r\n      <button class=\"flat black\" (click)=\"modalService.modalRef.hide()\">CANCEL</button>\r\n      <button class=\"flat accent shadow\" (click)=\"suspendUser(); modalService.modalRef.hide()\">{{userSuspended ? 'ACTIVATE' : 'SUSPEND'}}</button>\r\n    </footer>\r\n  </div>\r\n</ng-template>\r\n\r\n<!--Delete user modal window template-->\r\n<ng-template #deleteTemplate>\r\n  <div class=\"cp-modal\">\r\n    <header class=\"cp-modal__header\">\r\n      <h5 class=\"cp-modal__title\">Delete School User?</h5>\r\n    </header>\r\n    <p class=\"cp-modal__text\">Are you sure you want to delete this user?<br />\r\n    This action can not be undone!\r\n    </p>\r\n    <footer class=\"cp-modal__footer\">\r\n      <button class=\"flat black\" (click)=\"modalService.modalRef.hide()\">CANCEL</button>\r\n      <button class=\"flat accent shadow\" (click)=\"deleteUser(); modalService.modalRef.hide()\">DELETE</button>\r\n    </footer>\r\n  </div>\r\n</ng-template>\r\n"

/***/ }),

/***/ "./src/app/components/users-management/users-management.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UsersManagementComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_user_management_service__ = __webpack_require__("./src/app/services/user-management.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_modal_service__ = __webpack_require__("./src/app/services/modal.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_loader_service__ = __webpack_require__("./src/app/services/loader.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__modules_share_module_search_bar_search_bar_component__ = __webpack_require__("./src/app/modules/share-module/search-bar/search-bar.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_auth_service__ = __webpack_require__("./src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__modules_share_module_paginator_paginator_component__ = __webpack_require__("./src/app/modules/share-module/paginator/paginator.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__services_notification_service__ = __webpack_require__("./src/app/services/notification.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var UsersManagementComponent = (function () {
    function UsersManagementComponent(userManagementService, modalService, loaderService, authService, notificationService) {
        this.userManagementService = userManagementService;
        this.modalService = modalService;
        this.loaderService = loaderService;
        this.authService = authService;
        this.notificationService = notificationService;
        this.usersData = [];
        this.filteredUsers = [];
        this.userSuspended = false;
    }
    UsersManagementComponent.prototype.ngOnInit = function () {
        this.userManagementService.initData();
        this.loaderService.display(true);
        this.getUsers();
    };
    UsersManagementComponent.prototype.setDeleteUserEmail = function (email) {
        this.deleteUserEmail = email;
    };
    UsersManagementComponent.prototype.deleteUser = function () {
        var _this = this;
        this.loaderService.displayMini(true);
        this.userManagementService.deleteUserByEmail(this.deleteUserEmail)
            .subscribe(function (response) { return _this.deleteUserHandler(); }, function (err) { return _this.ErrorHandler(err); });
    };
    UsersManagementComponent.prototype.ErrorHandler = function (err) {
        this.loaderService.displayMini(false);
        if (err === null) {
        }
        else {
            switch (err.status) {
                case 400:
                    this.notificationService.show(err.error, true, true);
                    break;
                case 409:
                    this.notificationService.show(err.error, true, true);
                    break;
                case 500:
                    this.notificationService.show('Server error occured!', true, true);
                    break;
                case 503:
                    this.notificationService.show('Error occured while processing your request!', true, true);
                    break;
                default: break;
            }
        }
    };
    UsersManagementComponent.prototype.deleteUserHandler = function () {
        this.loaderService.displayMini(false);
        this.notificationService.show("User deleted!", true);
        this.getUsers();
    };
    UsersManagementComponent.prototype.resetPasswordForUser = function (userEmail) {
        var _this = this;
        this.authService.resetPassword(userEmail).subscribe(function (response) {
            return _this.notificationService.show("The instructions to reset password have been sent to " + userEmail + ".", true);
        }, function (err) {
            return _this.notificationService.show("Error occured while processing your request!", true, true);
        });
    };
    UsersManagementComponent.prototype.setSuspendUserInfo = function (email, id) {
        this.suspendUserEmail = email;
        if (id === 1) {
            this.userSuspended = false;
        }
        if (id === 4) {
            this.userSuspended = true;
        }
    };
    UsersManagementComponent.prototype.suspendUser = function () {
        var _this = this;
        this.loaderService.displayMini(true);
        if (this.userSuspended) {
            this.userManagementService.activateUser(this.suspendUserEmail)
                .subscribe(function (res) { return _this.handleSuspensionResult(_this.userSuspended); }, function (err) { return _this.ErrorHandler(err); });
        }
        else {
            this.userManagementService.suspendUser(this.suspendUserEmail)
                .subscribe(function (res) { return _this.handleSuspensionResult(_this.userSuspended); }, function (err) { return _this.ErrorHandler(err); });
        }
    };
    UsersManagementComponent.prototype.handleSuspensionResult = function (userSuspended) {
        this.loaderService.displayMini(false);
        if (userSuspended) {
            this.notificationService.show('User activated!', true);
            this.getUsers();
        }
        else {
            this.notificationService.show('User suspended!', true);
            this.getUsers();
        }
    };
    UsersManagementComponent.prototype.submitTemporaryAccess = function () {
        console.log(this.temporaryAccessEmail);
        console.log(this.expirationDate);
    };
    UsersManagementComponent.prototype.getUsers = function () {
        var _this = this;
        this.userManagementService.getReadyStatus().subscribe(function (status) {
            if (status) {
                _this.userManagementService.getUsers().subscribe(function (users) {
                    console.log(users);
                    _this.usersData = users;
                    _this.loaderService.display(false);
                    setTimeout(function () {
                        _this.searchBar.search();
                    }, 0);
                });
            }
        });
    };
    UsersManagementComponent.prototype.gridReady = function (e) {
        if (this.usersData) {
            this.pager.itemsTotal = this.filteredUsers.length;
            this.pager.selectedPage = e.component.pageIndex();
        }
    };
    UsersManagementComponent.prototype.setFilteredUsers = function (filteredUsers) {
        this.filteredUsers = filteredUsers;
    };
    UsersManagementComponent.prototype.getStatusClass = function (status, classroom, role) {
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
    };
    UsersManagementComponent.prototype.getStatusName = function (status, classroom, role) {
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
    };
    UsersManagementComponent.prototype.testSuperAdmin = function () {
        var _this = this;
        this.userManagementService.testSuperAdmin().subscribe(function (response) { return _this.superAdminResponse = response; });
    };
    UsersManagementComponent.prototype.testSchoolAdmin = function () {
        var _this = this;
        this.userManagementService.testSchoolAdmin().subscribe(function (response) { return _this.schoolAdminResponse = response; });
    };
    UsersManagementComponent.prototype.testClassroomTeacher = function () {
        var _this = this;
        this.userManagementService.testClassroomTeacher().subscribe(function (response) { return _this.classroomTeacherResponse = response; });
    };
    UsersManagementComponent.prototype.testDismissalTeacher = function () {
        var _this = this;
        this.userManagementService.testDismissalTeacher().subscribe(function (response) { return _this.dismissalTeacherResponse = response; });
    };
    UsersManagementComponent.prototype.testScanner = function () {
        var _this = this;
        this.userManagementService.testScanner().subscribe(function (response) { return _this.scannerResponse = response; });
    };
    UsersManagementComponent.prototype.testParent = function () {
        var _this = this;
        this.userManagementService.testParent().subscribe(function (response) { return _this.parentResponse = response; });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_6__modules_share_module_paginator_paginator_component__["a" /* PaginatorComponent */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_6__modules_share_module_paginator_paginator_component__["a" /* PaginatorComponent */])
    ], UsersManagementComponent.prototype, "pager", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_4__modules_share_module_search_bar_search_bar_component__["a" /* SearchBarComponent */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_4__modules_share_module_search_bar_search_bar_component__["a" /* SearchBarComponent */])
    ], UsersManagementComponent.prototype, "searchBar", void 0);
    UsersManagementComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'user-management',
            template: __webpack_require__("./src/app/components/users-management/users-management.component.html")
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_user_management_service__["a" /* UserManagementService */],
            __WEBPACK_IMPORTED_MODULE_2__services_modal_service__["a" /* ModalService */],
            __WEBPACK_IMPORTED_MODULE_3__services_loader_service__["a" /* LoaderService */],
            __WEBPACK_IMPORTED_MODULE_5__services_auth_service__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_7__services_notification_service__["a" /* NotificationService */]])
    ], UsersManagementComponent);
    return UsersManagementComponent;
}());



/***/ }),

/***/ "./src/app/components/users-management/users-upload/users-upload.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"full-height-page full-height-page--flex-column page-container\">\r\n  <header class=\"page-header\">\r\n    <div class=\"page-header__left\">\r\n      <button class=\"flat purple icon\" [routerLink]=\"['/users-management']\">BACK TO USERS\r\n        <i class=\"material-icons\">arrow_back</i>\r\n      </button>\r\n    </div>\r\n    <div class=\"page-header__right\">\r\n      <button class=\"flat black\" (click)=\"downloadUsersTemplate()\">DOWNLOAD TEMPLATE</button>\r\n    </div>\r\n  </header>\r\n\r\n  <div id=\"dropZone\" class=\"no-items-view drop-zone\" ng2FileDrop [uploader]=\"fileTransferService.uploader\" (fileOver)=\"fileTransferService.fileOverBase($event)\" [ngClass]=\"{'drop-zone--file-over': fileTransferService.isFileOverDropZone}\">\r\n    <p class=\"no-items-view__text\">Drop your Classroom Teacher files here <br> (files must be in .xlsx)</p>\r\n\r\n    <!-- file validation -->\r\n    <p *ngIf=\"!fileTransferService.isValidFileExtension\" class=\"warning\">\"Invalid file selected.\"</p>\r\n    <p *ngIf=\"fileTransferService.isUploadSuccessfull\" class=\"success\">{{fileTransferService.message}}</p>\r\n    <p *ngIf=\"fileTransferService.isUploadFailed\" class=\"warning\">\"File upload failed.\"</p>\r\n\r\n    <button class=\"no-items-view__image-container\" (click)=\"fileUpload.click()\">\r\n      <img class=\"no-items-view__image\" src=\"assets/images/teacher.svg\" alt=\"teacher\">\r\n    </button>\r\n\r\n    <input type=\"file\" name=\"file\" id=\"file\" #fileUpload class=\"hidden\" ng2FileSelect [uploader]=\"fileTransferService.uploader\" />\r\n    <button class=\"item flat accent shadow\" for=\"file\" (click)=\"fileUpload.click()\">CLICK TO BROWSE</button>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/components/users-management/users-upload/users-upload.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UsersUploadComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_file_server_service__ = __webpack_require__("./src/app/services/file-server.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var UsersUploadComponent = (function () {
    function UsersUploadComponent(fileTransferService) {
        this.fileTransferService = fileTransferService;
    }
    UsersUploadComponent.prototype.ngOnInit = function () {
        this.fileTransferService.createUploader('api/fileupload/TeacherUpload');
        this.fileTransferService.handleFileUploadEvents();
    };
    UsersUploadComponent.prototype.downloadUsersTemplate = function () {
        this.fileTransferService.downloadFile('teachers-template.xlsx');
    };
    UsersUploadComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-users-upload',
            template: __webpack_require__("./src/app/components/users-management/users-upload/users-upload.component.html")
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_file_server_service__["a" /* FileServerService */]])
    ], UsersUploadComponent);
    return UsersUploadComponent;
}());



/***/ }),

/***/ "./src/app/directives/is-driver-exist.directive.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return IsDriverExistDirective; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_loader_service__ = __webpack_require__("./src/app/services/loader.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_parents_dashboard_service__ = __webpack_require__("./src/app/services/parents-dashboard.service.ts");
// NOTE:  use this decorator with [ngModelOptions]="{updateOn: 'blur'}" parameter
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var IsDriverExistDirective = (function () {
    function IsDriverExistDirective(parentsService, loaderService) {
        this.parentsService = parentsService;
        this.loaderService = loaderService;
    }
    IsDriverExistDirective_1 = IsDriverExistDirective;
    IsDriverExistDirective.prototype.validate = function (c) {
        var _this = this;
        console.log("inside driver license validate method");
        this.loaderService.displayMini(true);
        return new Promise(function (resolve) {
            return _this.parentsService.driverLicenseExist(c.value, _this.driverLicense).subscribe(function (isExist) {
                _this.loaderService.displayMini(false);
                if (!isExist) {
                    resolve(null);
                }
                else {
                    resolve({ isLicenseExist: { valid: false } });
                }
            });
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('appIsDriverExist'),
        __metadata("design:type", String)
    ], IsDriverExistDirective.prototype, "driverLicense", void 0);
    IsDriverExistDirective = IsDriverExistDirective_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Directive"])({
            selector: '[appIsDriverExist][ngModel]',
            providers: [
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_forms__["NG_ASYNC_VALIDATORS"], useExisting: IsDriverExistDirective_1, multi: true }
            ]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__services_parents_dashboard_service__["a" /* ParentsDashboardService */], __WEBPACK_IMPORTED_MODULE_2__services_loader_service__["a" /* LoaderService */]])
    ], IsDriverExistDirective);
    return IsDriverExistDirective;
    var IsDriverExistDirective_1;
}());



/***/ }),

/***/ "./src/app/directives/is-user-exist.directive.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return IsUserExistDirective; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_loader_service__ = __webpack_require__("./src/app/services/loader.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_user_management_service__ = __webpack_require__("./src/app/services/user-management.service.ts");
// NOTE:  use this decorator with [ngModelOptions]="{updateOn: 'blur'}" parameter
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var IsUserExistDirective = (function () {
    function IsUserExistDirective(usersService, loaderService) {
        this.usersService = usersService;
        this.loaderService = loaderService;
    }
    IsUserExistDirective_1 = IsUserExistDirective;
    IsUserExistDirective.prototype.validate = function (c) {
        var _this = this;
        this.loaderService.displayMini(true);
        return new Promise(function (resolve) {
            return _this.usersService.userEmailExist(c.value, _this.currentEmail).subscribe(function (isExist) {
                _this.loaderService.displayMini(false);
                if (!isExist) {
                    resolve(null);
                }
                else {
                    resolve({ isEmailExist: { valid: false } });
                }
            });
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('appIsUserExist'),
        __metadata("design:type", String)
    ], IsUserExistDirective.prototype, "currentEmail", void 0);
    IsUserExistDirective = IsUserExistDirective_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Directive"])({
            selector: '[appIsUserExist][ngModel]',
            providers: [
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_forms__["NG_ASYNC_VALIDATORS"], useExisting: IsUserExistDirective_1, multi: true }
            ]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__services_user_management_service__["a" /* UserManagementService */], __WEBPACK_IMPORTED_MODULE_2__services_loader_service__["a" /* LoaderService */]])
    ], IsUserExistDirective);
    return IsUserExistDirective;
    var IsUserExistDirective_1;
}());



/***/ }),

/***/ "./src/app/directives/is-user-parent.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return IsUserParentDirective; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_loader_service__ = __webpack_require__("./src/app/services/loader.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_user_management_service__ = __webpack_require__("./src/app/services/user-management.service.ts");
// NOTE:  use this decorator with [ngModelOptions]="{updateOn: 'blur'}" parameter
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var IsUserParentDirective = (function () {
    function IsUserParentDirective(usersService, loaderService) {
        this.usersService = usersService;
        this.loaderService = loaderService;
    }
    IsUserParentDirective_1 = IsUserParentDirective;
    IsUserParentDirective.prototype.validate = function (c) {
        var _this = this;
        console.log(c);
        this.loaderService.displayMini(true);
        return new Promise(function (resolve) {
            return _this.usersService.isUserParent(c.value, _this.currentEmail).subscribe(function (res) {
                _this.loaderService.displayMini(false);
                if (res === "Parent") {
                    resolve(null);
                }
                else {
                    resolve({ isParent: { valid: false }, role: { value: res } });
                }
            });
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('appIsUserParent'),
        __metadata("design:type", String)
    ], IsUserParentDirective.prototype, "currentEmail", void 0);
    IsUserParentDirective = IsUserParentDirective_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Directive"])({
            selector: '[appIsUserParent][ngModel]',
            providers: [
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_forms__["NG_ASYNC_VALIDATORS"], useExisting: IsUserParentDirective_1, multi: true }
            ]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__services_user_management_service__["a" /* UserManagementService */], __WEBPACK_IMPORTED_MODULE_2__services_loader_service__["a" /* LoaderService */]])
    ], IsUserParentDirective);
    return IsUserParentDirective;
    var IsUserParentDirective_1;
}());



/***/ }),

/***/ "./src/app/directives/white-space-validation.directive.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WhiteSpaceValidator; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var WhiteSpaceValidator = (function () {
    function WhiteSpaceValidator() {
    }
    WhiteSpaceValidator_1 = WhiteSpaceValidator;
    WhiteSpaceValidator.prototype.validate = function (c) {
        if (c.value) {
            if (c.value.toString().trim() === "") {
                return { invalidWhitespace: { valid: false } };
            }
        }
    };
    WhiteSpaceValidator = WhiteSpaceValidator_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Directive"])({
            selector: '[whitespace-validator]',
            providers: [
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_forms__["NG_VALIDATORS"], useExisting: WhiteSpaceValidator_1, multi: true }
            ]
        }),
        __metadata("design:paramtypes", [])
    ], WhiteSpaceValidator);
    return WhiteSpaceValidator;
    var WhiteSpaceValidator_1;
}());



/***/ }),

/***/ "./src/app/models/ClassroomModel.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ClassroomModel; });
var ClassroomModel = (function () {
    function ClassroomModel() {
    }
    return ClassroomModel;
}());



/***/ }),

/***/ "./src/app/models/EditUser.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EditUser; });
var EditUser = (function () {
    function EditUser() {
    }
    return EditUser;
}());



/***/ }),

/***/ "./src/app/models/card-with-students.model.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return StudentInCard; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CardWithStudents; });
var StudentInCard = (function () {
    function StudentInCard(studentId, name, cardId) {
        if (studentId === void 0) { studentId = 0; }
        if (name === void 0) { name = null; }
        if (cardId === void 0) { cardId = 0; }
        this.studentId = studentId;
        this.name = name;
        this.cardId = cardId;
    }
    return StudentInCard;
}());

var CardWithStudents = (function () {
    function CardWithStudents(students, lane, parentLicense, parentName, parentId, flightNumber, isEditable) {
        if (students === void 0) { students = []; }
        if (lane === void 0) { lane = null; }
        if (parentLicense === void 0) { parentLicense = null; }
        if (parentName === void 0) { parentName = null; }
        if (parentId === void 0) { parentId = 0; }
        if (flightNumber === void 0) { flightNumber = 0; }
        if (isEditable === void 0) { isEditable = null; }
        this.students = students;
        this.lane = lane;
        this.parentLicense = parentLicense;
        this.parentName = parentName;
        this.parentId = parentId;
        this.flightNumber = flightNumber;
        this.isEditable = isEditable;
    }
    return CardWithStudents;
}());



/***/ }),

/***/ "./src/app/models/classroom.model.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Classroom; });
var Classroom = (function () {
    function Classroom(id, name, teacherId, schoolId) {
        if (id === void 0) { id = 0; }
        if (name === void 0) { name = null; }
        if (teacherId === void 0) { teacherId = 0; }
        if (schoolId === void 0) { schoolId = 0; }
        this.id = id;
        this.name = name;
        this.teacherId = teacherId;
        this.schoolId = schoolId;
    }
    return Classroom;
}());



/***/ }),

/***/ "./src/app/models/http-models/class-room-flights-and-settings.model.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FlightModel; });
/* unused harmony export ClassRoomFlightsAndSettingsModel */
var FlightModel = (function () {
    function FlightModel() {
    }
    return FlightModel;
}());

var ClassRoomFlightsAndSettingsModel = (function () {
    function ClassRoomFlightsAndSettingsModel() {
    }
    return ClassRoomFlightsAndSettingsModel;
}());



/***/ }),

/***/ "./src/app/models/http-models/dismissal-card.model.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DismissalCard; });
var DismissalCard = (function () {
    function DismissalCard(id, parentName, parentUserId, driversLicense, phoneNumber, students, relationship) {
        if (id === void 0) { id = 0; }
        if (parentName === void 0) { parentName = null; }
        if (parentUserId === void 0) { parentUserId = 0; }
        if (driversLicense === void 0) { driversLicense = null; }
        if (phoneNumber === void 0) { phoneNumber = null; }
        if (students === void 0) { students = []; }
        if (relationship === void 0) { relationship = null; }
        this.id = id;
        this.parentName = parentName;
        this.driversLicense = driversLicense;
        this.phoneNumber = phoneNumber;
        this.students = students;
        this.relationship = relationship;
        this.parentUserId = parentUserId;
    }
    return DismissalCard;
}());



/***/ }),

/***/ "./src/app/models/http-models/lane-for-flight.model.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LaneForFlightModel; });
var LaneForFlightModel = (function () {
    function LaneForFlightModel() {
    }
    return LaneForFlightModel;
}());



/***/ }),

/***/ "./src/app/models/http-models/school-edition-data.model.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SchoolEditionData; });
var SchoolEditionData = (function () {
    function SchoolEditionData() {
    }
    return SchoolEditionData;
}());



/***/ }),

/***/ "./src/app/models/http-models/user-infomodel.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserInfo; });
var UserInfo = (function () {
    function UserInfo(userId, username, email, role, schoolName) {
        if (userId === void 0) { userId = 0; }
        if (username === void 0) { username = ""; }
        if (email === void 0) { email = ""; }
        if (role === void 0) { role = ""; }
        if (schoolName === void 0) { schoolName = ""; }
        this.userId = userId;
        this.username = username;
        this.email = email;
        this.role = role;
        this.schoolName = schoolName;
    }
    return UserInfo;
}());



/***/ }),

/***/ "./src/app/models/lane.model.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Lane; });
var Lane = (function () {
    function Lane() {
    }
    return Lane;
}());



/***/ }),

/***/ "./src/app/models/main-parent.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MainParent; });
var MainParent = (function () {
    function MainParent() {
    }
    return MainParent;
}());



/***/ }),

/***/ "./src/app/models/roles.enum.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Roles; });
var Roles;
(function (Roles) {
    Roles["superAdmin"] = "Super Admin";
    Roles["schoolAdmin"] = "School Admin";
    Roles["parent"] = "Parent";
    Roles["classroomTeacher"] = "Classroom Teacher";
    Roles["dismissalTeacher"] = "Dismissal Teacher";
    Roles["scanner"] = "Scanner";
})(Roles || (Roles = {}));


/***/ }),

/***/ "./src/app/models/scanner-input.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ScannerInput; });
var ScannerInput = (function () {
    function ScannerInput(studentId, parentId) {
        this.studentId = studentId;
        this.parentId = parentId;
    }
    return ScannerInput;
}());



/***/ }),

/***/ "./src/app/models/school-settings.model.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return SchoolSettings; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NewScannerUser; });
var SchoolSettings = (function () {
    function SchoolSettings() {
    }
    return SchoolSettings;
}());

var LaneScanningType = (function () {
    function LaneScanningType() {
    }
    return LaneScanningType;
}());
var ArchiveTimeType = (function () {
    function ArchiveTimeType() {
    }
    return ArchiveTimeType;
}());
var CardPrintingType = (function () {
    function CardPrintingType() {
    }
    return CardPrintingType;
}());
var NewScannerUser = (function () {
    function NewScannerUser() {
    }
    return NewScannerUser;
}());



/***/ }),

/***/ "./src/app/models/student-edit.model.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StudentEdit; });
var StudentEdit = (function () {
    function StudentEdit() {
    }
    return StudentEdit;
}());



/***/ }),

/***/ "./src/app/models/student.model.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return Student; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChangeCradeAndClassroom; });
var Student = (function () {
    function Student() {
    }
    return Student;
}());

var ChangeCradeAndClassroom = (function () {
    function ChangeCradeAndClassroom() {
    }
    return ChangeCradeAndClassroom;
}());



/***/ }),

/***/ "./src/app/models/studentParent.model.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StudentParent; });
var StudentParent = (function () {
    function StudentParent(id, name, email) {
        if (id === void 0) { id = 0; }
        if (name === void 0) { name = null; }
        if (email === void 0) { email = null; }
        this.id = id;
        this.name = name;
        this.email = email;
    }
    return StudentParent;
}());



/***/ }),

/***/ "./src/app/models/teacher-settings.model.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TeacherSettings; });
var TeacherSettings = (function () {
    function TeacherSettings() {
    }
    return TeacherSettings;
}());



/***/ }),

/***/ "./src/app/models/user-configuration.model.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserConfiguration; });
var UserConfiguration = (function () {
    function UserConfiguration(name, email) {
        if (name === void 0) { name = ""; }
        if (email === void 0) { email = ""; }
        this.userName = name;
        this.email = email;
    }
    return UserConfiguration;
}());



/***/ }),

/***/ "./src/app/models/user.model.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return User; });
var User = (function () {
    function User(id, name, email, statusId, statusName, roleId, roleName, classroomName) {
        if (id === void 0) { id = 0; }
        if (name === void 0) { name = null; }
        if (email === void 0) { email = null; }
        if (statusId === void 0) { statusId = 0; }
        if (statusName === void 0) { statusName = null; }
        if (roleId === void 0) { roleId = 0; }
        if (roleName === void 0) { roleName = null; }
        if (classroomName === void 0) { classroomName = null; }
        this.id = id;
        this.name = name;
        this.email = email;
        this.statusId = statusId;
        this.statusName = statusName;
        this.roleId = roleId;
        this.roleName = roleName;
        this.classroomName = classroomName;
    }
    return User;
}());



/***/ }),

/***/ "./src/app/modules/dismissal-cards/create-edit-dismissal-card/create-edit-dismissal-card.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"page-container\">\r\n  <header class=\"page-header\">\r\n    <div class=\"page-header__left\">\r\n      <button class=\"cp-button flat purple icon cp-button--back\" (click)=\"locationBack()\">\r\n        <span class=\"cp-button__text\">BACK</span>\r\n        <i class=\"material-icons cp-button__icon\">arrow_back</i>\r\n      </button>\r\n    </div>\r\n  </header>\r\n\r\n  <form class=\"cp-form\" #cardForm=\"ngForm\" (ngSubmit)=\"submitModel()\">\r\n    <header class=\"cp-form__header\">\r\n      <h1 class=\"cp-form__title\">{{ createEditItemService.isEditMode ? 'Edit Dismissal Card' : 'New Dismissal Card'}}</h1>\r\n    </header>\r\n\r\n\r\n\r\n    <label class=\"cp-input-label\">FIRST NAME AND LAST NAME</label>\r\n    <input class=\"cp-text-input\" type=\"text\" name=\"parentName\"\r\n           #parentName=\"ngModel\" [(ngModel)]=\"cardModel.parentName\"\r\n           maxlength=\"50\" minlength=\"3\" required pattern=\"^[A-Za-z\\s]{1,}[\\.]{0,1}[A-Za-z\\s]{0,}$\"\r\n           whitespace-validator />\r\n    <!-- parentName validation -->\r\n    <div *ngIf=\"parentName.invalid && (parentName.dirty || parentName.touched)\"\r\n         class=\"alert alert-danger\">\r\n      <div *ngIf=\"parentName?.errors.minlength\">Parents name should not contain less then 3 symbols!</div>\r\n      <div *ngIf=\"parentName?.errors.pattern\">Parents name is invalid!</div>\r\n      <div *ngIf=\"parentName?.errors.required\">Parent name is required</div>\r\n      <div *ngIf=\"parentName?.errors.invalidWhitespace\">You can't use white-spaces as parents name!</div>\r\n    </div>    \r\n    <label class=\"cp-input-label\">DRIVER’S LICENSE</label>\r\n    <input class=\"cp-text-input\" type=\"text\" name=\"driversLicense\"\r\n           #driversLicense=\"ngModel\" [(ngModel)]=\"cardModel.driversLicense\" [ngModelOptions]=\"{updateOn: 'blur'}\"\r\n           maxlength=\"15\" required whitespace-validator/>\r\n    <!-- driversLicense validation -->\r\n    <div *ngIf=\"driversLicense.invalid && (driversLicense.dirty || driversLicense.touched)\"\r\n         class=\"alert alert-danger\">\r\n      <div *ngIf=\"driversLicense?.errors.required\">Driver's license is required</div>\r\n      <div *ngIf=\"driversLicense?.errors.isLicenseExist\">User with this driver license already exist!</div>\r\n      <div *ngIf=\"driversLicense?.errors.invalidWhitespace\">You can't use white-spaces as drivers license!</div>\r\n    </div>\r\n\r\n    <label class=\"cp-input-label\">PHONE NUMBER</label>\r\n    <input class=\"cp-text-input\" type=\"text\" name=\"phoneNumber\"\r\n           #phoneNumber=\"ngModel\" [(ngModel)]=\"cardModel.phoneNumber\"\r\n           maxlength=\"10\" required whitespace-validator/>\r\n    <!-- phoneNumber validation -->\r\n    <div *ngIf=\"phoneNumber.invalid && (phoneNumber.dirty || phoneNumber.touched)\"\r\n         class=\"alert alert-danger\">\r\n      <div *ngIf=\"phoneNumber?.errors.required\">Phone number is required</div>\r\n      <div *ngIf=\"phoneNumber?.errors.invalidWhitespace\">You can't use white-spaces as phone number!</div>\r\n    </div>\r\n\r\n    <!-- Parents for Admins -->\r\n    <div *ngIf=\"!createEditItemService.isEditMode && isAdmin\">\r\n      <label class=\"cp-input-label\">PARENT / GUARDIAN</label>\r\n      <p-dropdown #mainParentInput=\"ngModel\" [autoWidth]=\"false\"\r\n                  name=\"mainParentInput\" [options]=\"mainParents\" [(ngModel)]=\"selectedMainParent\"\r\n                  optionLabel=\"name\" [filter]=\"true\" (onChange)=\"filterStudents($event.value, true)\" placeholder=\"Select Parent\" required>\r\n      </p-dropdown>\r\n\r\n\r\n    </div>\r\n\r\n    <label class=\"cp-input-label\">STUDENTS</label>\r\n    <p-multiSelect class=\"multiselect-no-header\" name=\"selectedStudents\"\r\n                   [(ngModel)]=\"cardModel.students\" #selectedStudents=\"ngModel\"\r\n                   [options]=\"availableStudents\" optionLabel=\"name\"\r\n                   [filter]=\"false\" [showToggleAll]=\"false\" [maxSelectedLabels]=\"1\"\r\n                   [defaultLabel]=\"'Select Students'\" [selectedItemsLabel]=\"'{0} Selected'\"\r\n                   required>\r\n    </p-multiSelect>\r\n    <!-- phoneNumber validation -->\r\n    <div *ngIf=\"selectedStudents.invalid && (selectedStudents.dirty || selectedStudents.touched)\"\r\n         class=\"alert alert-danger\">\r\n      <div *ngIf=\"selectedStudents?.errors.required\">Select at least one student</div>\r\n    </div>\r\n\r\n    <label class=\"cp-input-label\">RELATIONSHIP <small>(Mother, Father, Grandmother, etc.)</small></label>\r\n    <input class=\"cp-text-input\" type=\"text\" name=\"relationship\"\r\n           #relationship=\"ngModel\" [(ngModel)]=\"cardModel.relationship\"\r\n           maxlength=\"15\" required whitespace-validator/>\r\n    <!-- relationship validation -->\r\n    <div *ngIf=\"relationship.invalid && (relationship.dirty || relationship.touched)\"\r\n         class=\"alert alert-danger\">\r\n      <div *ngIf=\"relationship?.errors.required\">Relationship is required</div>\r\n      <div *ngIf=\"relationship?.errors.invalidWhitespace\">You can't use white-spaces as relationship!</div>\r\n    </div>\r\n\r\n    <footer class=\"cp-form__footer\">\r\n      <button type=\"submit\" class=\"flat accent shadow\" [disabled]=\"cardForm.invalid || cardForm.pending || cardForm.pristine\">{{ createEditItemService.isEditMode ? 'SAVE' : 'CREATE'}}</button>\r\n    </footer>\r\n  </form>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/modules/dismissal-cards/create-edit-dismissal-card/create-edit-dismissal-card.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CreateEditDismissalCardComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__models_http_models_dismissal_card_model__ = __webpack_require__("./src/app/models/http-models/dismissal-card.model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_create_edit_item_service__ = __webpack_require__("./src/app/services/create-edit-item.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_notification_service__ = __webpack_require__("./src/app/services/notification.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_loader_service__ = __webpack_require__("./src/app/services/loader.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services_dismissal_cards_service__ = __webpack_require__("./src/app/services/dismissal-cards.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__services_parent_id_service__ = __webpack_require__("./src/app/services/parent-id-service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__models_main_parent__ = __webpack_require__("./src/app/models/main-parent.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__services_auth_service__ = __webpack_require__("./src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__models_roles_enum__ = __webpack_require__("./src/app/models/roles.enum.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};












var CreateEditDismissalCardComponent = (function () {
    function CreateEditDismissalCardComponent(route, router, createEditItemService, notificationService, loaderService, _location, dismissalCardsService, parentIdService, authService) {
        this.route = route;
        this.router = router;
        this.createEditItemService = createEditItemService;
        this.notificationService = notificationService;
        this.loaderService = loaderService;
        this._location = _location;
        this.dismissalCardsService = dismissalCardsService;
        this.parentIdService = parentIdService;
        this.authService = authService;
        this.cardModel = new __WEBPACK_IMPORTED_MODULE_1__models_http_models_dismissal_card_model__["a" /* DismissalCard */]();
        this.mainParents = [];
        this.selectedMainParent = new __WEBPACK_IMPORTED_MODULE_9__models_main_parent__["a" /* MainParent */]();
        this.parentId = 0;
        this.isAdmin = false;
    }
    CreateEditDismissalCardComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.loaderService.display(true);
        this.parentIdService.parentId.subscribe(function (id) { return _this.parentId = id; });
        this.createEditItemService.getItemId(this.route, function () {
            _this.initModel();
        });
    };
    CreateEditDismissalCardComponent.prototype.initModel = function () {
        var _this = this;
        if (this.createEditItemService.isEditMode) {
            this.setUpEditView();
        }
        else {
            //when component is called from parent view
            if (window.localStorage.getItem('role') === __WEBPACK_IMPORTED_MODULE_11__models_roles_enum__["a" /* Roles */].parent) {
                this.dismissalCardsService.getStudentsOfCurrentUser(0).subscribe(function (res) {
                    _this.availableStudents = res;
                    _this.loaderService.display(false);
                });
            }
            else {
                this.isAdmin = true;
                this.dismissalCardsService.getMainParents().subscribe(function (res) {
                    _this.mainParents = res;
                    if (_this.mainParents.length > 0) {
                        _this.selectedMainParent = null;
                    }
                    _this.dismissalCardsService.getStudentsForAdmin().subscribe(function (res) {
                        _this.students = res;
                        _this.availableStudents = [];
                        _this.loaderService.display(false);
                    });
                });
            }
        }
    };
    CreateEditDismissalCardComponent.prototype.setUpEditView = function () {
        var _this = this;
        this.dismissalCardsService.getDismissalCardById(this.createEditItemService.itemId).subscribe(function (res) {
            _this.cardModel = res;
            var selectedStudentsIds = _this.cardModel.students.map(function (student) { return student.id; });
            _this.dismissalCardsService.getStudentsOfCurrentUser(_this.cardModel.parentUserId).subscribe(function (res) {
                _this.availableStudents = res;
                _this.cardModel.students = _this.availableStudents.filter(function (student) { return selectedStudentsIds.indexOf(student.id) !== -1; });
                _this.loaderService.display(false);
            });
        });
    };
    CreateEditDismissalCardComponent.prototype.submitModel = function () {
        var _this = this;
        this.loaderService.displayMini(true);
        if (this.createEditItemService.isEditMode) {
            this.dismissalCardsService.updateDismissalCard(this.cardModel).subscribe(function () {
                _this.loaderService.displayMini(false);
                _this.notificationService.show('Dismissal Card updated successfully', true);
                _this.routeNavigateTo();
            });
        }
        else {
            this.dismissalCardsService.createDismissalCard(this.cardModel).subscribe(function () {
                _this.loaderService.displayMini(false);
                _this.notificationService.show('Dismissal Card created successfully', true);
                _this.routeNavigateTo();
            });
        }
    };
    CreateEditDismissalCardComponent.prototype.routeNavigateTo = function () {
        //when component is called from school admins view
        if (window.localStorage.getItem('role') !== __WEBPACK_IMPORTED_MODULE_11__models_roles_enum__["a" /* Roles */].parent) {
            this.router.navigateByUrl('dismissal-cards/list');
            //when component is called from parent view
        }
        else {
            this.router.navigateByUrl('/parents-dashboard');
        }
    };
    CreateEditDismissalCardComponent.prototype.locationBack = function () {
        this._location.back();
    };
    CreateEditDismissalCardComponent.prototype.filterStudents = function (currentParent, resetStudents) {
        this.availableStudents = this.students.filter(function (student) { return student.parentId === currentParent.id; });
        if (resetStudents) {
            this.cardModel.students = [];
            this.cardModel.students.push(this.availableStudents[0]);
        }
    };
    CreateEditDismissalCardComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-create-edit-dismissal-card',
            template: __webpack_require__("./src/app/modules/dismissal-cards/create-edit-dismissal-card/create-edit-dismissal-card.component.html")
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_router__["ActivatedRoute"],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["Router"],
            __WEBPACK_IMPORTED_MODULE_3__services_create_edit_item_service__["a" /* CreateEditItemService */],
            __WEBPACK_IMPORTED_MODULE_4__services_notification_service__["a" /* NotificationService */],
            __WEBPACK_IMPORTED_MODULE_5__services_loader_service__["a" /* LoaderService */],
            __WEBPACK_IMPORTED_MODULE_7__angular_common__["Location"],
            __WEBPACK_IMPORTED_MODULE_6__services_dismissal_cards_service__["a" /* DismissalCardsService */],
            __WEBPACK_IMPORTED_MODULE_8__services_parent_id_service__["a" /* ParentIdService */],
            __WEBPACK_IMPORTED_MODULE_10__services_auth_service__["a" /* AuthService */]])
    ], CreateEditDismissalCardComponent);
    return CreateEditDismissalCardComponent;
}());



/***/ }),

/***/ "./src/app/modules/dismissal-cards/dismissal-cards.component.html":
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>\r\n"

/***/ }),

/***/ "./src/app/modules/dismissal-cards/dismissal-cards.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DismissalCardsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var DismissalCardsComponent = (function () {
    function DismissalCardsComponent() {
    }
    DismissalCardsComponent.prototype.ngOnInit = function () {
    };
    DismissalCardsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-dismissal-cards',
            template: __webpack_require__("./src/app/modules/dismissal-cards/dismissal-cards.component.html")
        }),
        __metadata("design:paramtypes", [])
    ], DismissalCardsComponent);
    return DismissalCardsComponent;
}());



/***/ }),

/***/ "./src/app/modules/dismissal-cards/dismissal-cards.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DismissalCardsModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__dismissal_cards_component__ = __webpack_require__("./src/app/modules/dismissal-cards/dismissal-cards.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__create_edit_dismissal_card_create_edit_dismissal_card_component__ = __webpack_require__("./src/app/modules/dismissal-cards/create-edit-dismissal-card/create-edit-dismissal-card.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__dismissal_cards_routing__ = __webpack_require__("./src/app/modules/dismissal-cards/dismissal-cards.routing.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__list_dismissal_card_list_dismissal_card_component__ = __webpack_require__("./src/app/modules/dismissal-cards/list-dismissal-card/list-dismissal-card.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_primeng_primeng__ = __webpack_require__("./node_modules/primeng/primeng.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_primeng_primeng___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_primeng_primeng__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_devextreme_angular__ = __webpack_require__("./node_modules/devextreme-angular/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_devextreme_angular___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_devextreme_angular__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__share_module_share_module_module__ = __webpack_require__("./src/app/modules/share-module/share-module.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__directives_is_driver_exist_directive__ = __webpack_require__("./src/app/directives/is-driver-exist.directive.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_ngx_barcode__ = __webpack_require__("./node_modules/ngx-barcode/index.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};












var DismissalCardsModule = (function () {
    function DismissalCardsModule() {
    }
    DismissalCardsModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"],
                __WEBPACK_IMPORTED_MODULE_3__angular_forms__["FormsModule"],
                __WEBPACK_IMPORTED_MODULE_5__dismissal_cards_routing__["a" /* DismissalCardsRoutes */],
                __WEBPACK_IMPORTED_MODULE_7_primeng_primeng__["MultiSelectModule"],
                __WEBPACK_IMPORTED_MODULE_8_devextreme_angular__["DxDataGridModule"],
                __WEBPACK_IMPORTED_MODULE_7_primeng_primeng__["CheckboxModule"],
                __WEBPACK_IMPORTED_MODULE_9__share_module_share_module_module__["a" /* ShareModuleModule */],
                __WEBPACK_IMPORTED_MODULE_11_ngx_barcode__["a" /* NgxBarcodeModule */],
                __WEBPACK_IMPORTED_MODULE_7_primeng_primeng__["DropdownModule"]
            ],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__dismissal_cards_component__["a" /* DismissalCardsComponent */],
                __WEBPACK_IMPORTED_MODULE_4__create_edit_dismissal_card_create_edit_dismissal_card_component__["a" /* CreateEditDismissalCardComponent */],
                __WEBPACK_IMPORTED_MODULE_6__list_dismissal_card_list_dismissal_card_component__["a" /* ListDismissalCardComponent */],
                __WEBPACK_IMPORTED_MODULE_10__directives_is_driver_exist_directive__["a" /* IsDriverExistDirective */]
            ]
        })
    ], DismissalCardsModule);
    return DismissalCardsModule;
}());



/***/ }),

/***/ "./src/app/modules/dismissal-cards/dismissal-cards.routing.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DismissalCardsRoutes; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__navigation_guards_auth_guard__ = __webpack_require__("./src/app/navigation-guards/auth.guard.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__create_edit_dismissal_card_create_edit_dismissal_card_component__ = __webpack_require__("./src/app/modules/dismissal-cards/create-edit-dismissal-card/create-edit-dismissal-card.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__list_dismissal_card_list_dismissal_card_component__ = __webpack_require__("./src/app/modules/dismissal-cards/list-dismissal-card/list-dismissal-card.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__models_roles_enum__ = __webpack_require__("./src/app/models/roles.enum.ts");





var routes = [
    {
        path: 'dismissal-cards',
        canActivate: [__WEBPACK_IMPORTED_MODULE_1__navigation_guards_auth_guard__["a" /* AuthGuard */]],
        children: [
            {
                path: '',
                pathMatch: 'full',
                redirectTo: 'list',
                canActivate: [__WEBPACK_IMPORTED_MODULE_1__navigation_guards_auth_guard__["a" /* AuthGuard */]],
                data: {
                    expectedRoles: [__WEBPACK_IMPORTED_MODULE_4__models_roles_enum__["a" /* Roles */].schoolAdmin, __WEBPACK_IMPORTED_MODULE_4__models_roles_enum__["a" /* Roles */].superAdmin]
                }
            },
            {
                path: 'list',
                component: __WEBPACK_IMPORTED_MODULE_3__list_dismissal_card_list_dismissal_card_component__["a" /* ListDismissalCardComponent */],
                canActivate: [__WEBPACK_IMPORTED_MODULE_1__navigation_guards_auth_guard__["a" /* AuthGuard */]],
                data: {
                    expectedRoles: [__WEBPACK_IMPORTED_MODULE_4__models_roles_enum__["a" /* Roles */].schoolAdmin, __WEBPACK_IMPORTED_MODULE_4__models_roles_enum__["a" /* Roles */].superAdmin]
                }
            },
            {
                path: 'create',
                component: __WEBPACK_IMPORTED_MODULE_2__create_edit_dismissal_card_create_edit_dismissal_card_component__["a" /* CreateEditDismissalCardComponent */],
                canActivate: [__WEBPACK_IMPORTED_MODULE_1__navigation_guards_auth_guard__["a" /* AuthGuard */]],
                data: {
                    expectedRoles: [__WEBPACK_IMPORTED_MODULE_4__models_roles_enum__["a" /* Roles */].schoolAdmin, __WEBPACK_IMPORTED_MODULE_4__models_roles_enum__["a" /* Roles */].parent, __WEBPACK_IMPORTED_MODULE_4__models_roles_enum__["a" /* Roles */].superAdmin]
                }
            },
            {
                path: 'edit/:id',
                component: __WEBPACK_IMPORTED_MODULE_2__create_edit_dismissal_card_create_edit_dismissal_card_component__["a" /* CreateEditDismissalCardComponent */],
                canActivate: [__WEBPACK_IMPORTED_MODULE_1__navigation_guards_auth_guard__["a" /* AuthGuard */]],
                data: {
                    expectedRoles: [__WEBPACK_IMPORTED_MODULE_4__models_roles_enum__["a" /* Roles */].schoolAdmin, __WEBPACK_IMPORTED_MODULE_4__models_roles_enum__["a" /* Roles */].parent, __WEBPACK_IMPORTED_MODULE_4__models_roles_enum__["a" /* Roles */].superAdmin]
                }
            }
        ]
    },
];
var DismissalCardsRoutes = __WEBPACK_IMPORTED_MODULE_0__angular_router__["RouterModule"].forChild(routes);


/***/ }),

/***/ "./src/app/modules/dismissal-cards/list-dismissal-card/list-dismissal-card.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"page-container\" [ngClass]=\"{'full-height-page full-height-page--flex-column': !dismissalCardsListHttpModel?.cards?.length }\">\r\n \r\n  <header class=\"page-header\">\r\n    <div class=\"page-header__left\">\r\n      <h3 class=\"page-header__title\">Dismissal Cards</h3>\r\n    </div>\r\n\r\n    <div class=\"page-header__right\">\r\n      <search-bar [data]=\"dismissalCards\" [filters]=\"['parentName', 'status']\" [nestedFilters]=\"{ propWithArray: 'students', filters: ['name', 'classroomTeacher'] }\" (searchEnd)=\"setFilteredCards($event)\"></search-bar>\r\n      <button type=\"submit\" class=\"item flat accent shadow\" [disabled]=\"!selectedCardsId.length\" (click)=\"printSelectedCards()\">PRINT SELECTED</button>\r\n      <button type=\"submit\" class=\"item flat accent shadow\" [disabled]=\"!isHasStudentsAtSchool\" (click)=\"goToCreate()\">ADD</button>\r\n    </div>\r\n  </header>\r\n  <div class=\"grid-container\" *ngIf=\"filteredCards.length\">\r\n\r\n    <dx-data-grid class=\"cp-data-grid\" [dataSource]=\"filteredCards\" [showBorders]=\"false\"\r\n                  [showRowLines]=\"true\" [showColumnLines]=\"false\" [loadPanel]=\"false\"\r\n                  (onContentReady)=\"gridReady($event)\">\r\n      <dxo-sorting mode=\"single\">\r\n        <!-- or \"multiple\" | \"none\" -->\r\n      </dxo-sorting>\r\n      <dxi-column cellTemplate=\"checkCell\" headerCellTemplate=\"checkHeaderCell\" [width]=\"50\" alignment=\"center\"></dxi-column>\r\n      <dxi-column dataField=\"parentName\" caption=\"PARENT/GUARDIAN\" alignment=\"left\"></dxi-column>\r\n      <dxi-column dataField=\"students\" caption=\"STUDENT\" cellTemplate=\"studentsNameCell\" [calculateSortValue]=\"studentCustomSortingFunction\"></dxi-column>\r\n      <dxi-column dataField=\"students\" caption=\"GRADE\" [width]=\"120\" cellTemplate=\"studentsGradeCell\" [calculateSortValue]=\"gradeCustomSortingFunction\"></dxi-column>\r\n      <dxi-column dataField=\"students\" caption=\"INSTRUCTOR\" cellTemplate=\"studentsInstructorsCell\" [calculateSortValue]=\"instructorCustomSortingFunction\"></dxi-column>\r\n      <dxi-column dataField=\"status\" caption=\"STATUS\" cellTemplate=\"statusCell\" alignment=\"left\" sortOrder=\"desc\"></dxi-column>\r\n      <dxi-column cellTemplate=\"optionsCell\" cssClass=\"w-70-px overflow-visible\" alignment=\"center\"></dxi-column>\r\n\r\n      <!-- Cells templates -->\r\n      <div *dxTemplate=\"let cell of 'statusCell'\" class=\"text-ellipsis\">\r\n        <span class=\"status-field {{ getCardStatusClass(cell.data.status) }}\">{{cell.data.status}}</span>\r\n      </div>\r\n\r\n      <div *dxTemplate=\"let cell of 'checkHeaderCell'\">\r\n        <p-checkbox class=\"cp-primeng-checkbox\" name=\"checkedAll\" (onChange)=\"selectAll()\" [(ngModel)]=\"selectedAll\" binary=\"true\"></p-checkbox>\r\n      </div>\r\n\r\n      <div *dxTemplate=\"let cell of 'checkCell'\">\r\n        <p-checkbox class=\"cp-primeng-checkbox\" name=\"checkCard\" value=\"{{cell.data.id}}\" [(ngModel)]=\"selectedCardsId\" inputId=\"{{cell.data.id}}\"></p-checkbox>\r\n      </div>\r\n\r\n      <div *dxTemplate=\"let cell of 'studentsNameCell'\">\r\n        <span style=\"white-space: pre; line-height: 2\">{{getStudentsNames(cell.data.students)}}</span>\r\n      </div>\r\n\r\n      <div *dxTemplate=\"let cell of 'studentsGradeCell'\">\r\n        <span style=\"white-space: pre; line-height: 2\">{{getStudentsGrades(cell.data.students)}}</span>\r\n      </div>\r\n\r\n      <div *dxTemplate=\"let cell of 'studentsInstructorsCell'\">\r\n        <span style=\"white-space: pre; line-height: 2\">{{getStudentsInstructors(cell.data.students)}}</span>\r\n      </div>\r\n\r\n      <div *dxTemplate=\"let cell of 'optionsCell'\">\r\n        <div class=\"btn-group\">\r\n          <div class=\"dropdown\">\r\n            <button class=\"btn dd-toggle\" data-toggle=\"dropdown\" data-offset=\"0%, -100%\" data-flip=\"false\" aria-haspopup=\"true\" aria-expanded=\"false\">\r\n              <span>\r\n                <i class=\"material-icons\">more_vert</i>\r\n              </span>\r\n            </button>\r\n            <div class=\"dropdown-menu dropdown-menu-right\" aria-labelledby=\"dropdownMenuButton\">\r\n              <button class=\"dropdown-item\" type=\"button\" (click)=\"goToEdit(cell.data.id, cell.data.userId)\">Edit</button>\r\n              <button class=\"dropdown-item\" type=\"button\" (click)=\"setFocusCard(cell.data); printCard()\">Print</button>\r\n              <button class=\"dropdown-item\" type=\"button\" (click)=\"setFocusCardId(cell.data.id); modalService.openModal(deleteDismissalCard)\">Delete</button>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n\r\n      <!-- Pagination -->\r\n      <dxo-paging [pageSize]=\"10\"></dxo-paging>\r\n      <dxo-pager [showNavigationButtons]=\"true\"></dxo-pager>\r\n    </dx-data-grid>\r\n    <app-paginator></app-paginator>\r\n  </div>\r\n\r\n\r\n  <!-- No items screen -->\r\n  <div class=\"no-items-view\" *ngIf=\"!dismissalCardsListHttpModel?.cards?.length\">\r\n    <p class=\"no-items-view__text\" style=\"max-width: 350px;\">Please create your first dismissal card. You must first have students uploaded into the system.</p>\r\n    <br>\r\n    <div class=\"no-items-view__image-container no-items-view__image-container--not-clickable\">\r\n      <img class=\"no-items-view__image\" src=\"assets/images/kid_dismissal.svg\" alt=\"new configurations\">\r\n    </div>\r\n\r\n  </div>\r\n\r\n\r\n</div>\r\n\r\n<!--Dismissal Card printing template-->\r\n<div style=\"display: none\" *ngIf=\"printing\">\r\n  <article class=\"cp-card\" *ngFor=\"let card of cardsToPrint; let i = index\">\r\n    <div id=\"js-card-to-print\" class=\"js-card-to-print\">\r\n      <div *ngFor=\"let student of card.students; let st=index\">\r\n        <ngx-barcode id=\"student-card-{{i}}-{{st}}\" class=\"cp-card__barcode\" [ngClass]=\"{'cp-card__barcode--sm': card.students.length > 1 }\"\r\n                     [bc-value]=\"convertCardforBarcode(card.id, student.id)\"></ngx-barcode>\r\n\r\n      </div>\r\n    </div>\r\n  </article>\r\n  </div>\r\n\r\n<ng-template #deleteDismissalCard>\r\n  <div class=\"cp-modal\">\r\n    <header class=\"cp-modal__header\">\r\n      <h5 class=\"cp-modal__title\">Delete Dismissal Card?</h5>\r\n    </header>\r\n\r\n    <p class=\"cp-modal__text\">\r\n      Are you sure you want to delete this Dismissal Card?<br />\r\n      This action can not be undone!\r\n    </p>\r\n\r\n    <footer class=\"cp-modal__footer\">\r\n      <button class=\"flat black\" (click)=\"modalService.modalRef.hide()\">CANCEL</button>\r\n      <button class=\"flat accent shadow\" (click)=\"deleteCard(); modalService.modalRef.hide()\">DELETE</button>\r\n    </footer>\r\n  </div>\r\n</ng-template>\r\n\r\n"

/***/ }),

/***/ "./src/app/modules/dismissal-cards/list-dismissal-card/list-dismissal-card.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ListDismissalCardComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_dismissal_cards_service__ = __webpack_require__("./src/app/services/dismissal-cards.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__share_module_paginator_paginator_component__ = __webpack_require__("./src/app/modules/share-module/paginator/paginator.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_loader_service__ = __webpack_require__("./src/app/services/loader.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_modal_service__ = __webpack_require__("./src/app/services/modal.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__share_module_search_bar_search_bar_component__ = __webpack_require__("./src/app/modules/share-module/search-bar/search-bar.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__services_notification_service__ = __webpack_require__("./src/app/services/notification.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__services_parent_id_service__ = __webpack_require__("./src/app/services/parent-id-service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_devextreme_angular__ = __webpack_require__("./node_modules/devextreme-angular/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_devextreme_angular___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_devextreme_angular__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};










var ListDismissalCardComponent = (function () {
    function ListDismissalCardComponent(dismissalCardsService, loaderService, modalService, notificationService, parentIdService, router) {
        this.dismissalCardsService = dismissalCardsService;
        this.loaderService = loaderService;
        this.modalService = modalService;
        this.notificationService = notificationService;
        this.parentIdService = parentIdService;
        this.router = router;
        this.dismissalCards = [];
        this.filteredCards = [];
        this.cardsToPrint = [];
        this.selectedCardsId = [];
        this.selectedAll = false;
        this.printing = false;
        this.isHasStudentsAtSchool = false;
    }
    ListDismissalCardComponent.prototype.instructorCustomSortingFunction = function (rowData) {
        return rowData.students[0].classroomTeacher;
    };
    ListDismissalCardComponent.prototype.studentCustomSortingFunction = function (rowData) {
        return rowData.students[0].name;
    };
    ListDismissalCardComponent.prototype.gradeCustomSortingFunction = function (rowData) {
        return rowData.students[0].grade;
    };
    ListDismissalCardComponent.prototype.ngOnInit = function () {
        this.loaderService.display(true);
        this.getDismissalCardsList();
    };
    ListDismissalCardComponent.prototype.getDismissalCardsList = function () {
        var _this = this;
        this.dismissalCardsService.getListOfDismissalCards().subscribe(function (res) {
            _this.dismissalCardsListHttpModel = res;
            _this.isHasStudentsAtSchool = _this.dismissalCardsListHttpModel.isHasStudents;
            _this.dismissalCards = _this.dismissalCardsListHttpModel.cards;
            _this.filteredCards = _this.dismissalCardsListHttpModel.cards;
            _this.printingTypeId = _this.dismissalCardsListHttpModel.printingTypeId;
            _this.loaderService.display(false);
        });
    };
    ListDismissalCardComponent.prototype.gridReady = function (e) {
        if (this.dismissalCards) {
            this.pager.itemsTotal = this.filteredCards.length;
            this.pager.selectedPage = e.component.pageIndex();
        }
    };
    ListDismissalCardComponent.prototype.setFilteredCards = function (filteredCards) {
        this.filteredCards = filteredCards;
    };
    ListDismissalCardComponent.prototype.getCardStatusClass = function (status) {
        return status === 'Active' ? 'success' : 'disabled';
    };
    ListDismissalCardComponent.prototype.getStudentsNames = function (students) {
        var result = "";
        students.forEach(function (el) {
            if (el.name === null)
                result = result.concat('-') + "\n";
            else
                result = result.concat(el.name) + "\n";
        });
        return result;
    };
    ListDismissalCardComponent.prototype.getStudentsGrades = function (students) {
        var result = "";
        students.forEach(function (el) {
            if (el.grade === null)
                result = result.concat('-') + "\n";
            else
                result = result.concat(el.grade) + "\n";
        });
        return result;
    };
    ListDismissalCardComponent.prototype.getStudentsInstructors = function (students) {
        var result = "";
        students.forEach(function (el) {
            if (el.classroomTeacher === null)
                result = result.concat('-') + "\n";
            else
                result = result.concat(el.classroomTeacher) + "\n";
        });
        return result;
    };
    ListDismissalCardComponent.prototype.setFocusCardId = function (id) {
        this.focusCardId = id;
    };
    ListDismissalCardComponent.prototype.setFocusCard = function (card) {
        this.focusCard = card;
    };
    ListDismissalCardComponent.prototype.deleteCard = function () {
        var _this = this;
        this.loaderService.displayMini(true);
        this.dismissalCardsService.deleteDismissalCard(this.focusCardId).subscribe(function (res) {
            _this.dismissalCards.splice(_this.dismissalCards.findIndex(function (card) { return card.id === _this.focusCardId; }), 1);
            setTimeout(function () {
                _this.searchBar.search();
            }, 0);
            _this.notificationService.show("Card deleted!", true);
            _this.loaderService.displayMini(false);
        }, function (err) {
            _this.notificationService.show(err.statusText + ": " + err.error, true, true);
            _this.loaderService.displayMini(false);
        });
    };
    ListDismissalCardComponent.prototype.selectAll = function () {
        var _this = this;
        if (this.selectedAll) {
            this.selectedCardsId = [];
            this.filteredCards.forEach(function (item) {
                _this.selectedCardsId.push(item.id.toString());
            });
        }
        else {
            this.selectedCardsId = [];
        }
    };
    ListDismissalCardComponent.prototype.printCard = function () {
        var _this = this;
        this.printing = true;
        this.cardsToPrint = [];
        this.cardsToPrint.push(this.focusCard);
        setTimeout(function () {
            if (_this.printingTypeId === 1) {
                _this.printByTypeCard();
            }
            else {
                _this.printByTypePaper();
            }
        });
        //set card status as active
        var cardIds = [];
        this.cardsToPrint.forEach(function (card) { return cardIds.push(card.id); });
        this.dismissalCardsService.setDismissalCardsToActive(cardIds).subscribe(function () {
            // set cards to active on frontend
            _this.focusCard.status = 'Active';
        });
    };
    ListDismissalCardComponent.prototype.printSelectedCards = function () {
        var _this = this;
        this.cardsToPrint = [];
        this.cardsToPrint = this.filteredCards.filter(function (card) { return _this.selectedCardsId.indexOf(card.id.toString()) >= 0; });
        this.printing = true;
        setTimeout(function () {
            if (_this.printingTypeId === 1) {
                _this.printByTypeCard();
            }
            else {
                _this.printByTypePaper();
            }
        });
        var cardIds = [];
        this.cardsToPrint.forEach(function (card) { return cardIds.push(card.id); });
        this.dismissalCardsService.setDismissalCardsToActive(cardIds).subscribe(function () {
            _this.filteredCards.forEach(function (card) {
                if (_this.cardsToPrint.indexOf(card) >= 0) {
                    card.status = 'Active';
                }
            });
        });
    };
    ListDismissalCardComponent.prototype.isSafariBrowser = function () {
        var sBrowser, sUsrAg = navigator.userAgent;
        var isSafari = false;
        if (sUsrAg.indexOf("Chrome") > -1) {
            sBrowser = "Google Chrome";
            isSafari = false;
        }
        else if (sUsrAg.indexOf("Safari") > -1) {
            sBrowser = "Apple Safari";
            isSafari = true;
        }
        else if (sUsrAg.indexOf("Opera") > -1) {
            sBrowser = "Opera";
            isSafari = false;
        }
        else if (sUsrAg.indexOf("Firefox") > -1) {
            sBrowser = "Mozilla Firefox";
            isSafari = false;
        }
        else if (sUsrAg.indexOf("MSIE") > -1) {
            sBrowser = "Microsoft Internet Explorer";
            isSafari = false;
        }
        else {
            sBrowser = "unknown";
            isSafari = false;
        }
        return isSafari;
    };
    ListDismissalCardComponent.prototype.printByTypePaper = function () {
        var addCloseWindow = "";
        if (!this.isSafariBrowser()) {
            addCloseWindow = "window.close();";
        }
        var popupWin;
        var datePrinting = new Date().toDateString();
        // set page header for printing
        // add <div class="background-header" > </div> for fxing problem with background in Firefox, EDGE
        var pageHeader = "<div class=\"row\" style=\"border: 1px solid;\">\n                <div class=\"col-4\" style=\"height:110px; padding-top: 25px;\">\n                  <div class=\"background-header\" > </div>\n                     <svg class=\"cp-image\" style=\"margin-left: 15px;\" viewBox=\"0 0 493.345 96\">\n                        <defs>\n                          <style>\n                            .cls-1 {\n                              fill: #fff;\n                            }\n                          </style>\n                        </defs>\n                        <g id=\"Group_4\" data-name=\"Group 4\" transform=\"translate(0.041 0.001)\">\n                          <path id=\"Path_1\" data-name=\"Path 1\" class=\"cls-1\" d=\"M238.307,84.919c-6.724,0-11.766-1.868-15.315-5.6-3.486-3.735-5.292-9.027-5.292-15.875a24.731,24.731,0,0,1,1.619-9.152,19.723,19.723,0,0,1,4.42-6.786,18.045,18.045,0,0,1,6.661-4.171,24.3,24.3,0,0,1,8.4-1.432,27.524,27.524,0,0,1,4.731.374,33.576,33.576,0,0,1,3.735.872,14.084,14.084,0,0,1,2.677,1.058c.685.374,1.245.623,1.556.809l-2.677,7.471a22.557,22.557,0,0,0-4.42-1.743,20.359,20.359,0,0,0-5.728-.685,13.615,13.615,0,0,0-4.171.685,9.677,9.677,0,0,0-3.611,2.3,12.5,12.5,0,0,0-2.552,4.047,17.337,17.337,0,0,0-.934,6.039,20.232,20.232,0,0,0,.623,5.292,12.679,12.679,0,0,0,1.992,4.233,9.332,9.332,0,0,0,3.673,2.8,13.019,13.019,0,0,0,5.479,1.058,20.98,20.98,0,0,0,3.611-.249c1.058-.187,1.992-.374,2.864-.56a9.931,9.931,0,0,0,2.179-.747c.623-.249,1.183-.56,1.743-.747l2.553,7.6a21.056,21.056,0,0,1-5.541,2.117A29.875,29.875,0,0,1,238.307,84.919Z\" transform=\"translate(-82.183 -15.815)\"/>\n                          <path id=\"Path_2\" data-name=\"Path 2\" class=\"cls-1\" d=\"M306.317,74.573a20.863,20.863,0,0,1-1.058,6.724,13.776,13.776,0,0,1-3.113,5.23,14.768,14.768,0,0,1-4.856,3.362,17.469,17.469,0,0,1-12.638,0,14.434,14.434,0,0,1-8.031-8.591,19.536,19.536,0,0,1-1.121-6.724,18.178,18.178,0,0,1,1.183-6.724,15.171,15.171,0,0,1,3.237-5.167,13.734,13.734,0,0,1,4.856-3.3A15.326,15.326,0,0,1,290.94,58.2a15.027,15.027,0,0,1,11.082,4.482A15.034,15.034,0,0,1,305.2,67.85,19.039,19.039,0,0,1,306.317,74.573Zm-9.027,0a11.582,11.582,0,0,0-1.619-6.475,5.791,5.791,0,0,0-9.338,0,10.956,10.956,0,0,0-1.681,6.475,11.3,11.3,0,0,0,1.681,6.537,5.7,5.7,0,0,0,9.338,0A11.951,11.951,0,0,0,297.29,74.573Z\" transform=\"translate(-103.999 -21.967)\"/>\n                          <path id=\"Path_3\" data-name=\"Path 3\" class=\"cls-1\" d=\"M333.6,60.105a46.2,46.2,0,0,1,5.852-1.245,47.885,47.885,0,0,1,7.471-.56,18.075,18.075,0,0,1,6.6,1.058,9.9,9.9,0,0,1,4.171,2.926,11.04,11.04,0,0,1,2.179,4.545,23.967,23.967,0,0,1,.685,5.852V90.362h-8.84V73.677c0-2.864-.374-4.856-1.121-6.039s-2.179-1.805-4.233-1.805c-.623,0-1.307,0-1.992.062s-1.37.125-1.93.187V90.238H333.6Z\" transform=\"translate(-125.928 -22.005)\"/>\n                          <path id=\"Path_4\" data-name=\"Path 4\" class=\"cls-1\" d=\"M387,46.132l8.84-1.432v9.214h10.646V61.26H395.84V72.28a8.544,8.544,0,0,0,1,4.482c.623,1.121,1.992,1.681,3.922,1.681a15.947,15.947,0,0,0,5.665-1l1.245,6.91a23.829,23.829,0,0,1-3.549,1.121,21,21,0,0,1-4.794.5,14.974,14.974,0,0,1-5.977-1,9.074,9.074,0,0,1-3.8-2.739,10.66,10.66,0,0,1-1.992-4.233,25.289,25.289,0,0,1-.56-5.541V46.132Z\" transform=\"translate(-146.083 -16.872)\"/>\n                          <path id=\"Path_5\" data-name=\"Path 5\" class=\"cls-1\" d=\"M446.3,66.929c-.809-.187-1.743-.436-2.8-.623A20,20,0,0,0,440.076,66c-.56,0-1.245.062-1.992.125a15.543,15.543,0,0,0-1.743.311V90.338H427.5V60.7a53.484,53.484,0,0,1,5.6-1.556,32.177,32.177,0,0,1,7.222-.747c.5,0,1.058,0,1.743.062a19.337,19.337,0,0,1,1.992.249c.685.125,1.37.249,1.992.374a9.831,9.831,0,0,1,1.743.5Z\" transform=\"translate(-161.369 -22.043)\"/>\n                          <path id=\"Path_6\" data-name=\"Path 6\" class=\"cls-1\" d=\"M492.717,74.573a20.861,20.861,0,0,1-1.058,6.724,14.269,14.269,0,0,1-3.113,5.23,14.767,14.767,0,0,1-4.856,3.362,17.469,17.469,0,0,1-12.638,0,14.434,14.434,0,0,1-8.031-8.591,19.536,19.536,0,0,1-1.121-6.724,18.178,18.178,0,0,1,1.183-6.724,15.173,15.173,0,0,1,3.237-5.167,13.734,13.734,0,0,1,4.856-3.3A15.326,15.326,0,0,1,477.34,58.2a15.027,15.027,0,0,1,11.082,4.482A15.033,15.033,0,0,1,491.6,67.85,19.037,19.037,0,0,1,492.717,74.573Zm-9.027,0a11.582,11.582,0,0,0-1.619-6.475,5.791,5.791,0,0,0-9.338,0,11.428,11.428,0,0,0-1.681,6.475,11.3,11.3,0,0,0,1.681,6.537,5.7,5.7,0,0,0,9.338,0A11.951,11.951,0,0,0,483.69,74.573Z\" transform=\"translate(-174.353 -21.967)\"/>\n                          <path id=\"Path_7\" data-name=\"Path 7\" class=\"cls-1\" d=\"M532.414,82.292a24.143,24.143,0,0,1-6.288-.809,8.988,8.988,0,0,1-3.8-2.179,7.58,7.58,0,0,1-1.93-3.362,19.343,19.343,0,0,1-.5-4.482V37.032l8.84-1.432V69.654a10.7,10.7,0,0,0,.187,2.117,4.245,4.245,0,0,0,.685,1.619,3.2,3.2,0,0,0,1.432,1.058,10.488,10.488,0,0,0,2.552.56Z\" transform=\"translate(-196.244 -13.437)\"/>\n                          <path id=\"Path_8\" data-name=\"Path 8\" class=\"cls-1\" d=\"M580.689,42.8c6.163,0,10.833,1.058,14.132,3.237s4.918,5.728,4.918,10.584c0,4.981-1.681,8.529-4.98,10.708s-8.093,3.3-14.257,3.3h-2.926V84.387H568.3V43.858a50.065,50.065,0,0,1,6.412-.809C577.016,42.862,579.008,42.8,580.689,42.8Zm.623,7.844c-.685,0-1.307,0-1.992.062-.623.062-1.245.062-1.681.125V62.722h2.926c3.237,0,5.6-.436,7.222-1.307s2.428-2.49,2.428-4.856a5.735,5.735,0,0,0-.623-2.864,4.578,4.578,0,0,0-1.805-1.805,8.722,8.722,0,0,0-2.8-.934A21.857,21.857,0,0,0,581.312,50.644Z\" transform=\"translate(-214.512 -16.155)\"/>\n                          <path id=\"Path_9\" data-name=\"Path 9\" class=\"cls-1\" d=\"M653.417,74.573a20.863,20.863,0,0,1-1.058,6.724,13.777,13.777,0,0,1-3.113,5.23,14.767,14.767,0,0,1-4.856,3.362,17.469,17.469,0,0,1-12.638,0,14.434,14.434,0,0,1-8.031-8.591,19.536,19.536,0,0,1-1.121-6.724,18.176,18.176,0,0,1,1.183-6.724,15.173,15.173,0,0,1,3.237-5.167,13.734,13.734,0,0,1,4.856-3.3A15.326,15.326,0,0,1,638.04,58.2a15.027,15.027,0,0,1,11.082,4.482A15.032,15.032,0,0,1,652.3,67.85,19.04,19.04,0,0,1,653.417,74.573Zm-9.027,0a11.582,11.582,0,0,0-1.619-6.475,5.175,5.175,0,0,0-4.669-2.366,5.382,5.382,0,0,0-4.669,2.366,10.956,10.956,0,0,0-1.681,6.475,11.3,11.3,0,0,0,1.681,6.537,5.7,5.7,0,0,0,9.338,0A11.95,11.95,0,0,0,644.39,74.573Z\" transform=\"translate(-235.007 -21.967)\"/>\n                          <path id=\"Path_10\" data-name=\"Path 10\" class=\"cls-1\" d=\"M689.784,41.73a4.889,4.889,0,0,1-1.556,3.86,5.779,5.779,0,0,1-7.471,0,4.8,4.8,0,0,1-1.556-3.86,4.889,4.889,0,0,1,1.556-3.86,5.437,5.437,0,0,1,3.735-1.37,5.749,5.749,0,0,1,3.735,1.37A4.978,4.978,0,0,1,689.784,41.73Zm-.809,40.342h-8.84V50.819h8.84Z\" transform=\"translate(-256.37 -13.777)\"/>\n                          <path id=\"Path_11\" data-name=\"Path 11\" class=\"cls-1\" d=\"M705.9,60.105a46.2,46.2,0,0,1,5.852-1.245,47.885,47.885,0,0,1,7.471-.56,18.076,18.076,0,0,1,6.6,1.058,9.9,9.9,0,0,1,4.171,2.926,11.04,11.04,0,0,1,2.179,4.545,23.969,23.969,0,0,1,.685,5.852V90.362h-8.84V73.677c0-2.864-.374-4.856-1.121-6.039s-2.179-1.805-4.233-1.805c-.623,0-1.307,0-1.992.062s-1.37.125-1.93.187V90.238H705.9Z\" transform=\"translate(-266.447 -22.005)\"/>\n                          <path id=\"Path_12\" data-name=\"Path 12\" class=\"cls-1\" d=\"M759.2,46.132l8.84-1.432v9.214h10.646V61.26H768.04V72.28a8.544,8.544,0,0,0,1,4.482c.623,1.121,1.992,1.681,3.922,1.681a15.947,15.947,0,0,0,5.665-1l1.245,6.91a23.825,23.825,0,0,1-3.549,1.121,21,21,0,0,1-4.794.5,14.974,14.974,0,0,1-5.977-1,9.074,9.074,0,0,1-3.8-2.739,10.66,10.66,0,0,1-1.992-4.233,25.289,25.289,0,0,1-.56-5.541Z\" transform=\"translate(-286.565 -16.872)\"/>\n                          <g id=\"Group_1\" data-name=\"Group 1\" transform=\"translate(-0.041 -0.001)\">\n                            <path id=\"Path_13\" data-name=\"Path 13\" class=\"cls-1\" d=\"M68.778,96a32.429,32.429,0,0,1-18.366-5.79A32.094,32.094,0,1,1,18.475,34.8a32.114,32.114,0,1,1,64,0A32.113,32.113,0,0,1,68.778,96ZM50.475,81.8a3.868,3.868,0,0,1,2.428.872,24.637,24.637,0,1,0,24.28-41.961,3.793,3.793,0,0,1-2.428-4.233,24.638,24.638,0,1,0-48.5.062,3.793,3.793,0,0,1-2.428,4.233A25.051,25.051,0,0,0,10.817,51.61,24.576,24.576,0,0,0,47.984,82.676,3.806,3.806,0,0,1,50.475,81.8Z\" transform=\"translate(0.041 0.001)\"/>\n                          </g>\n                          <path id=\"Path_14\" data-name=\"Path 14\" class=\"cls-1\" d=\"M70.839,84.874a10.4,10.4,0,1,1,0-20.794,10.25,10.25,0,0,1,8.84,5.043l7.1-4.3a18.677,18.677,0,1,0,0,19.3l-7.1-4.3A10.173,10.173,0,0,1,70.839,84.874Z\" transform=\"translate(-19.68 -21.061)\"/>\n                        </g>\n                      </svg>\n\n                </div>\n                <div class=\"col-8 text-right align-middle\" style=\"line-height: 100px; font-size: 22px; padding-right:15px;\">\n                    <div class=\"background-row\" > </div>\n                    <div style=\"margin-right: 25px; position:relative;\">\n                      <span style=\"font-weight:bold;\">Emission date:</span> " + datePrinting + "\n                  </div>\n                </div>    \n            </div>";
        var printingCard = "";
        // if print all cards need to set index of card   
        var studentIndex = 0;
        this.cardsToPrint.forEach(function (card) {
            //set card(guardian) header
            // added <div class="background-row" > </div> for fixing backgrounf in FF, EDGE
            var cardHeader = "\n     <div class=\"row\" style=\"border: 1px solid;\">\n        <div class=\"col-6\" style = \"margin:auto;\" >\n          <div class=\"background-row\" > </div>\n          <div style=\"margin-left: 25px; line-height: 110px; font-size: 24px; position:relative;\" >\n            <span style=\"font-weight:bold;\" > Guardian: </span> " + card.parentName + "</div >\n          </div>\n        <div class=\"col-6 text-right align-middle\" style = \"line-height: 25px;font-size: 18px; padding:15px;\" >\n          <div class=\"background-row\" > </div>\n          <div style=\"margin-right: 25px; position:relative;\">\n              <span style=\"font-weight:bold;\" > Driver's License: </span> " + card.driverLicense + "<br>\n              <span style=\"font-weight:bold;\" > Relationship: </span> " + card.relationship + "<br>\n              <span style=\"font-weight:bold;\" > Phone: </span> " + card.phoneNumber + "<br>\n           </div>\n        </div>\n     </div>";
            var cardBarcodes = "" + pageHeader + cardHeader;
            for (var i = 0; i < card.students.length; i++) {
                if (i !== 0 && i % 5 === 0) {
                    cardBarcodes += "<div class='newpage'><div>" + pageHeader + cardHeader;
                }
                cardBarcodes += "\n            <div class=\"row\" style=\"border: 1px solid; height:215px;\">    \n                <div class=\"col-4\" style=\"padding:20px;\">\n                  <span style=\"font-weight:bold; font-size:18px;\">Name</span><br>\n                  <span style=\"font-size:24px; margin-bottom:25px;\">" + card.students[i].name + "</span> <br><br>\n                  <span style=\"font-weight:bold; font-size:18px;\">School</span><br>\n                  <span style=\"font-size:18px;\">" + card.students[i].schoolName + "</span> \n                </div>\n                <div class=\"col-4\" style=\" padding:20px;\">\n                  <span style=\"font-weight:bold; font-size:18px;\">Grade</span><br>\n                  <span style=\"font-size:24px; margin-bottom:25px;\">" + card.students[i].grade + "</span> <br><br>\n                  <span style=\"font-weight:bold; font-size:18px;\">Student ID</span><br>\n                  <span style=\"font-size:18px;\">" + card.students[i].externalId + "</span>\n                </div>   \n              <div class=\"col-4\" style=\" padding:10px;\">  \n          ";
                var barcode = document.querySelectorAll("#student-card-" + studentIndex + "-" + i)[0].innerHTML;
                cardBarcodes += "<div style=\"height:190px; width:300px;\">\n                            " + barcode + "\n                           </div></div></div> ";
            }
            printingCard += cardBarcodes + "<div class='newpage'><div>";
            studentIndex++;
        });
        popupWin = window.open('', '_blank', 'top=0,left=0,height=100%,width=auto');
        popupWin.document.open();
        popupWin.document.write("\n      <html>\n        <head>\n        <link rel=\"stylesheet\" href=\"https://stackpath.bootstrapcdn.com/bootstrap/4.1.1/css/bootstrap.min.css\" integrity=\"sha384-WskhaSGFgHYWDcbwN70/dfYBj47jz9qbsMId/iRN3ewGhXQFZCSftd1LZCfmhktB\" crossorigin=\"anonymous\">\n         \n          <style>\n          //........Customized style.......\n          //........Cards should be printed on separate pages......\n          @media all {\n\t          .page-break\t{ display: none; }\n          }\n          @page{size:A4 portrait; margin:10mm;}\n          @media print {\n\t          .page-break\t{ display: block; page-break-before: always; }\n            .newpage { page-break-before: always }\n            .barcode svg {width:300px; height:190px;}\n            .background-row {width: 102%;\n                              height: 0;\n                              border: solid 55px #f4f4f4;\n                              top:0;\n                              left:0;\n                              position: absolute; }\n            .background-header{width: 380px;\n                              height: 0;\n                              border: solid 55px #000000;\n                              top:0;\n                              left:0;\n                              position: absolute; }\n            .cp-image{position: relative; width: 90%;}\n          </style>\n        </head>\n        <body onload=\"window.focus();window.print(); " + addCloseWindow + "\">           \n            " + printingCard + "            \n        </body>\n      </html>");
        popupWin.document.close();
    };
    ListDismissalCardComponent.prototype.printByTypeCard = function () {
        var addCloseWindow = "";
        if (!this.isSafariBrowser()) {
            addCloseWindow = "window.close();";
        }
        var popupWin;
        var pageHeader = "";
        var printingCard = "";
        var studentIndex = 0;
        this.cardsToPrint.forEach(function (card) {
            // set page header for printing
            pageHeader = "\n              <div style=\"width:2.3in; height:0.82in;\" >\n                <div style=\"width:0.82in; height:0.82in; font-size: 8px; float:left; \">                  \n                     <svg class=\"cp-image\" viewBox=\"0 0 240 242\">\n                        <defs>\n                          <style>\n                            .cls-1 {\n                              fill: #fff;\n                            }\n                          </style>\n                        </defs>\n                        <g id=\"Group_18\" data-name=\"Group 18\" transform=\"translate(-1366 -1161)\">\n                          <rect id=\"Rectangle_15\" data-name=\"Rectangle 15\" width=\"240\" height=\"242\" rx=\"16\" transform=\"translate(1366 1161)\"/>\n                          <g id=\"Group_16\" data-name=\"Group 16\" transform=\"translate(1418 1207)\">\n                            <g id=\"Group_11\" data-name=\"Group 11\" transform=\"translate(0 79.431)\">\n                              <path id=\"Path_20\" data-name=\"Path 20\" class=\"cls-1\" d=\"M13.785,310.523c-4.488,0-7.9-1.253-10.258-3.759S0,300.731,0,296.126a16.247,16.247,0,0,1,1.078-6.12,13.322,13.322,0,0,1,2.943-4.546,12.2,12.2,0,0,1,4.459-2.8,16.751,16.751,0,0,1,5.625-.962,17.5,17.5,0,0,1,3.177.262,25.006,25.006,0,0,1,2.506.583,14.774,14.774,0,0,1,1.807.7c.466.233.816.437,1.049.554l-1.807,5.013a14.047,14.047,0,0,0-2.973-1.166,14.2,14.2,0,0,0-3.847-.466,8.292,8.292,0,0,0-2.8.466A6.478,6.478,0,0,0,8.8,289.19a7.3,7.3,0,0,0-1.69,2.74,11.149,11.149,0,0,0-.641,4.051,15.075,15.075,0,0,0,.408,3.555,7.655,7.655,0,0,0,1.37,2.856,6.435,6.435,0,0,0,2.448,1.894,8.782,8.782,0,0,0,3.672.7,19.622,19.622,0,0,0,2.419-.146c.729-.117,1.341-.233,1.923-.379a12.654,12.654,0,0,0,1.486-.5c.437-.175.816-.35,1.166-.525l1.719,4.984a14.008,14.008,0,0,1-3.7,1.428A21.656,21.656,0,0,1,13.785,310.523Z\" transform=\"translate(0 -279.019)\"/>\n                              <path id=\"Path_21\" data-name=\"Path 21\" class=\"cls-1\" d=\"M103.575,315.716a13.118,13.118,0,0,1-.729,4.517,9.529,9.529,0,0,1-2.069,3.5,9.356,9.356,0,0,1-3.235,2.244,10.963,10.963,0,0,1-4.255.787,10.77,10.77,0,0,1-4.2-.787,9.355,9.355,0,0,1-3.235-2.244,10,10,0,0,1-2.1-3.5A13.234,13.234,0,0,1,83,315.716a12.457,12.457,0,0,1,.787-4.517,9.829,9.829,0,0,1,5.421-5.712,11.353,11.353,0,0,1,8.306,0,9.355,9.355,0,0,1,3.235,2.244,9.873,9.873,0,0,1,2.1,3.468A13.981,13.981,0,0,1,103.575,315.716Zm-6.062,0a7.436,7.436,0,0,0-1.107-4.313,3.581,3.581,0,0,0-3.118-1.574A3.667,3.667,0,0,0,90.14,311.4a7.222,7.222,0,0,0-1.107,4.313,7.7,7.7,0,0,0,1.107,4.371,3.623,3.623,0,0,0,3.147,1.6,3.507,3.507,0,0,0,3.118-1.6A7.7,7.7,0,0,0,97.513,315.716Z\" transform=\"translate(-58.811 -295.316)\"/>\n                              <path id=\"Path_22\" data-name=\"Path 22\" class=\"cls-1\" d=\"M165.758,306.295a35.526,35.526,0,0,1,3.905-.816,30.948,30.948,0,0,1,5.013-.379,12.067,12.067,0,0,1,4.43.7,6.5,6.5,0,0,1,2.8,1.982,7.576,7.576,0,0,1,1.486,3.031,16.176,16.176,0,0,1,.437,3.905V326.55h-5.945V315.417a8.194,8.194,0,0,0-.758-4.08,3.109,3.109,0,0,0-2.827-1.195c-.437,0-.874.029-1.37.058-.466.029-.9.087-1.282.146V326.52H165.7V306.295Z\" transform=\"translate(-117.409 -295.599)\"/>\n                              <path id=\"Path_23\" data-name=\"Path 23\" class=\"cls-1\" d=\"M242.3,286.462l5.945-.962v6.178h7.14v4.954h-7.14v7.373a5.947,5.947,0,0,0,.67,3c.437.758,1.311,1.107,2.652,1.107a11.9,11.9,0,0,0,1.982-.175,11.621,11.621,0,0,0,1.865-.5l.845,4.634a16.454,16.454,0,0,1-2.39.758,14.414,14.414,0,0,1-3.235.321,10.525,10.525,0,0,1-4.022-.67,6.447,6.447,0,0,1-2.565-1.836,7.007,7.007,0,0,1-1.341-2.856,16.234,16.234,0,0,1-.379-3.7V286.462Z\" transform=\"translate(-171.686 -281.711)\"/>\n                              <path id=\"Path_24\" data-name=\"Path 24\" class=\"cls-1\" d=\"M313.019,310.983c-.525-.146-1.166-.262-1.865-.408a11.635,11.635,0,0,0-2.3-.233,12.282,12.282,0,0,0-1.341.087,5.749,5.749,0,0,0-1.166.233v16.029H300.4V306.845a32.029,32.029,0,0,1,3.76-1.049,22.445,22.445,0,0,1,4.838-.5c.321,0,.7.029,1.166.058.437.029.9.087,1.341.146.466.058.9.146,1.37.233a5.526,5.526,0,0,1,1.166.35Z\" transform=\"translate(-212.853 -295.741)\"/>\n                              <path id=\"Path_25\" data-name=\"Path 25\" class=\"cls-1\" d=\"M370.475,315.716a13.118,13.118,0,0,1-.729,4.517,9.529,9.529,0,0,1-2.069,3.5,9.355,9.355,0,0,1-3.235,2.244,10.963,10.963,0,0,1-4.255.787,10.769,10.769,0,0,1-4.2-.787,9.354,9.354,0,0,1-3.235-2.244,10,10,0,0,1-2.1-3.5,13.235,13.235,0,0,1-.758-4.517,12.459,12.459,0,0,1,.787-4.517,9.828,9.828,0,0,1,5.421-5.712,11.353,11.353,0,0,1,8.306,0,9.355,9.355,0,0,1,3.235,2.244,9.873,9.873,0,0,1,2.1,3.468A13.234,13.234,0,0,1,370.475,315.716Zm-6.062,0a7.436,7.436,0,0,0-1.107-4.313,3.581,3.581,0,0,0-3.118-1.574,3.667,3.667,0,0,0-3.148,1.574,7.222,7.222,0,0,0-1.107,4.313,7.7,7.7,0,0,0,1.107,4.371,3.623,3.623,0,0,0,3.148,1.6,3.507,3.507,0,0,0,3.118-1.6A7.478,7.478,0,0,0,364.413,315.716Z\" transform=\"translate(-247.927 -295.316)\"/>\n                              <path id=\"Path_26\" data-name=\"Path 26\" class=\"cls-1\" d=\"M441.193,303.829a14.781,14.781,0,0,1-4.2-.554,6.246,6.246,0,0,1-2.565-1.457,4.886,4.886,0,0,1-1.282-2.273,11.956,11.956,0,0,1-.35-3V273.462l5.945-.962v22.848a7.072,7.072,0,0,0,.117,1.428,2.431,2.431,0,0,0,.466,1.078,2.659,2.659,0,0,0,.991.729,5.913,5.913,0,0,0,1.719.35Z\" transform=\"translate(-306.667 -272.5)\"/>\n                            </g>\n                            <g id=\"Group_12\" data-name=\"Group 12\" transform=\"translate(20.896 118.105)\">\n                              <path id=\"Path_27\" data-name=\"Path 27\" class=\"cls-1\" d=\"M79.977,414.1c4.109,0,7.286.729,9.5,2.186s3.293,3.818,3.293,7.111c0,3.322-1.107,5.712-3.351,7.2S84,432.81,79.86,432.81H77.908v9.238H71.7v-27.22a38.67,38.67,0,0,1,4.313-.554C77.5,414.158,78.84,414.1,79.977,414.1Zm.408,5.3c-.437,0-.9,0-1.341.029s-.816.058-1.137.087v7.985H79.86a10.67,10.67,0,0,0,4.867-.874,3.371,3.371,0,0,0,1.632-3.264,4.266,4.266,0,0,0-.408-1.924,3.429,3.429,0,0,0-1.195-1.224,5.009,5.009,0,0,0-1.894-.641A16.244,16.244,0,0,0,80.385,419.4Z\" transform=\"translate(-71.7 -411.506)\"/>\n                              <path id=\"Path_28\" data-name=\"Path 28\" class=\"cls-1\" d=\"M170.175,447.116a13.117,13.117,0,0,1-.729,4.517,9.529,9.529,0,0,1-2.069,3.5,9.356,9.356,0,0,1-3.235,2.244,10.963,10.963,0,0,1-4.255.787,10.77,10.77,0,0,1-4.2-.787,9.355,9.355,0,0,1-3.235-2.244,10,10,0,0,1-2.1-3.5,13.234,13.234,0,0,1-.758-4.517,12.458,12.458,0,0,1,.787-4.517,9.829,9.829,0,0,1,5.421-5.712,11.352,11.352,0,0,1,8.306,0,9.354,9.354,0,0,1,3.235,2.244,9.873,9.873,0,0,1,2.1,3.468A13.849,13.849,0,0,1,170.175,447.116Zm-6.062,0a7.435,7.435,0,0,0-1.107-4.313,3.581,3.581,0,0,0-3.118-1.574,3.667,3.667,0,0,0-3.147,1.574,7.222,7.222,0,0,0-1.107,4.313,7.7,7.7,0,0,0,1.107,4.371,3.623,3.623,0,0,0,3.147,1.6,3.507,3.507,0,0,0,3.118-1.6A7.767,7.767,0,0,0,164.113,447.116Z\" transform=\"translate(-126.897 -427.095)\"/>\n                              <path id=\"Path_29\" data-name=\"Path 29\" class=\"cls-1\" d=\"M237.653,408.7a3.255,3.255,0,0,1-1.049,2.565,3.689,3.689,0,0,1-2.477.933,3.635,3.635,0,0,1-2.477-.933,3.659,3.659,0,0,1,0-5.129,3.689,3.689,0,0,1,2.477-.933,3.635,3.635,0,0,1,2.477.933A3.3,3.3,0,0,1,237.653,408.7Zm-.554,27.045h-5.945V414.759H237.1Z\" transform=\"translate(-184.291 -405.2)\"/>\n                              <path id=\"Path_30\" data-name=\"Path 30\" class=\"cls-1\" d=\"M268.458,437.595a35.558,35.558,0,0,1,3.905-.816,30.956,30.956,0,0,1,5.013-.379,12.068,12.068,0,0,1,4.43.7,6.5,6.5,0,0,1,2.8,1.982,7.577,7.577,0,0,1,1.486,3.031,16.177,16.177,0,0,1,.437,3.905V457.85h-5.945V446.717a8.2,8.2,0,0,0-.758-4.08A3.109,3.109,0,0,0,277,441.442c-.437,0-.874.029-1.37.058-.466.029-.9.087-1.282.146v16.2H268.4V437.595Z\" transform=\"translate(-211.075 -427.307)\"/>\n                              <path id=\"Path_31\" data-name=\"Path 31\" class=\"cls-1\" d=\"M345,417.762l5.945-.962v6.179h7.14v4.954h-7.14v7.373a5.948,5.948,0,0,0,.67,3c.437.758,1.312,1.107,2.652,1.107a11.9,11.9,0,0,0,1.982-.175,11.629,11.629,0,0,0,1.865-.5l.845,4.634a16.447,16.447,0,0,1-2.39.758,14.41,14.41,0,0,1-3.235.321,10.524,10.524,0,0,1-4.022-.67,6.445,6.445,0,0,1-2.565-1.836,7.006,7.006,0,0,1-1.341-2.856,16.234,16.234,0,0,1-.379-3.7V417.762Z\" transform=\"translate(-265.351 -413.419)\"/>\n                            </g>\n                            <g id=\"Group_13\" data-name=\"Group 13\" transform=\"translate(33.606)\">\n                              <path id=\"Path_32\" data-name=\"Path 32\" class=\"cls-1\" d=\"M162.083,65.214a21.88,21.88,0,0,1-12.473-3.905,21.83,21.83,0,1,1-21.741-37.682,21.822,21.822,0,1,1,43.482,0,21.828,21.828,0,0,1-9.268,41.588ZM149.61,55.539a2.605,2.605,0,0,1,1.661.612,16.723,16.723,0,1,0,16.437-28.5,2.581,2.581,0,0,1-1.661-2.856,16.969,16.969,0,0,0-1.953-11.366,16.73,16.73,0,0,0-30.95,11.366,2.521,2.521,0,0,1-1.661,2.856,16.855,16.855,0,0,0-8.86,7.373,16.737,16.737,0,0,0,25.326,21.129A2.605,2.605,0,0,1,149.61,55.539Z\" transform=\"translate(-115.311 0.053)\"/>\n                            </g>\n                            <path id=\"Path_33\" data-name=\"Path 33\" class=\"cls-1\" d=\"M203.807,100.759a7.053,7.053,0,1,1,6-10.7l4.838-2.943a12.707,12.707,0,1,0,0,13.173l-4.838-2.943A7.052,7.052,0,0,1,203.807,100.759Z\" transform=\"translate(-135.407 -57.378)\"/>\n                          </g>\n                        </g>\n                      </svg>\n                </div>\n                <div style=\"width:1.3in; font-size: 11px; float:right; text-align: right;\">                   \n                      <span style=\"font-weight:bold;\">Guardian:</span><br>\n                      <span style=\"margin-bottom:10px;\">" + card.parentName + "</span><br><br>\n                       <span style=\"font-weight:bold;\">License:</span>" + card.driverLicense + "<br>\n                       <span style=\"font-weight:bold;\">Relationship:</span>" + card.relationship + "<br>\n                       <span style=\"font-weight:bold;\">Phone:</span>" + card.phoneNumber + "\n                </div>    \n            </div>";
            var cardBarcodes = "" + pageHeader;
            for (var i = 0; i < card.students.length; i++) {
                if (i !== 0 && i % 2 === 0) {
                    cardBarcodes += "<div class='newpage'><div>" + pageHeader;
                }
                //set student data        
                cardBarcodes += "\n         <div style=\"width:2.3in; clear:both;\" >\n            <div style=\"width:2.3in; height:0.5in; margin-top:0.02in; font-size: 14px;\" >\n                <span style=\"font-weight:bold;\">" + card.students[i].name + "</span><br>\n                <span>" + card.students[i].schoolName + "</span><br>            \n                <span>Grade " + card.students[i].grade + "</span>\n            </div>\n          ";
                //set barcode
                var barcode = document.querySelectorAll("#student-card-" + studentIndex + "-" + i)[0].innerHTML;
                cardBarcodes += "<div style=\"\"> " + barcode + " </div> </div>";
            }
            printingCard += cardBarcodes + "<div class='newpage'><div>";
            studentIndex++;
        });
        //set printing page 
        popupWin = window.open('', '_blank', 'top=0,left=0,height=100%,width=auto');
        popupWin.document.open();
        popupWin.document.write("\n      <html>\n        <head>\n        \n          <style>\n          //........Customized style.......\n          //........Cards should be printed on separate pages......\n          @media all {\n\t          .page-break\t{ display: none; }\n          @page{size:2.5in 3.5in; margin:0.1in;}\n          }          \n          @media print {\n            @page{size:2.5in 3.5in; margin:0.1in;}\n\t          .page-break\t{ display: block; page-break-before: always; }\n            .newpage { page-break-before: always }\n            .cp-image{ width: 0.82in;}            \n            .barcode svg {width:2.2in; height:0.75in; }\n            \n          </style>\n        </head>\n        <body onload=\"window.focus();window.print(); " + addCloseWindow + "\" style=\"width:2.5in; height:3.5in;\">             \n              " + printingCard + "             \n        </body>\n      </html>");
        popupWin.document.close();
    };
    ListDismissalCardComponent.prototype.convertCardforBarcode = function (cardId, studentId) {
        // Scanner Input is studentId: number, parentId: number
        return studentId + "-" + cardId;
    };
    ListDismissalCardComponent.prototype.goToEdit = function (cardId, parentId) {
        this.parentIdService.changeParentId(parentId);
        this.router.navigate(['dismissal-cards/edit', cardId]);
    };
    ListDismissalCardComponent.prototype.goToCreate = function () {
        this.parentIdService.changeParentId(0);
        this.router.navigate(['dismissal-cards/create']);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_3__share_module_paginator_paginator_component__["a" /* PaginatorComponent */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_3__share_module_paginator_paginator_component__["a" /* PaginatorComponent */])
    ], ListDismissalCardComponent.prototype, "pager", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_6__share_module_search_bar_search_bar_component__["a" /* SearchBarComponent */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_6__share_module_search_bar_search_bar_component__["a" /* SearchBarComponent */])
    ], ListDismissalCardComponent.prototype, "searchBar", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_9_devextreme_angular__["DxDataGridComponent"]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_9_devextreme_angular__["DxDataGridComponent"])
    ], ListDismissalCardComponent.prototype, "dataGrid", void 0);
    ListDismissalCardComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-list-dismissal-card',
            template: __webpack_require__("./src/app/modules/dismissal-cards/list-dismissal-card/list-dismissal-card.component.html"),
            providers: [
                { provide: 'Window', useValue: window }
            ]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__services_dismissal_cards_service__["a" /* DismissalCardsService */],
            __WEBPACK_IMPORTED_MODULE_4__services_loader_service__["a" /* LoaderService */],
            __WEBPACK_IMPORTED_MODULE_5__services_modal_service__["a" /* ModalService */],
            __WEBPACK_IMPORTED_MODULE_7__services_notification_service__["a" /* NotificationService */],
            __WEBPACK_IMPORTED_MODULE_8__services_parent_id_service__["a" /* ParentIdService */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["Router"]])
    ], ListDismissalCardComponent);
    return ListDismissalCardComponent;
}());



/***/ }),

/***/ "./src/app/modules/flights/flight-selector/flight-selector.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"flight-selector\">\r\n  <button type=\"button\" class=\"flight-selector__btn\"\r\n          *ngFor=\"let flight of flights; let i = index\"\r\n          [ngClass]=\"{'is-closed': flight.status === 'Closed', 'is-active': flight.flightId === _activeFlight.flightId}\"\r\n          (click)=\"setActiveFlight(flight)\"\r\n          >\r\n          {{ flight.flightNumber }}\r\n  </button>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/modules/flights/flight-selector/flight-selector.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FlightSelectorComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__flights_service__ = __webpack_require__("./src/app/modules/flights/flights.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__models_http_models_class_room_flights_and_settings_model__ = __webpack_require__("./src/app/models/http-models/class-room-flights-and-settings.model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_loader_service__ = __webpack_require__("./src/app/services/loader.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var FlightSelectorComponent = (function () {
    function FlightSelectorComponent(flightsService, loaderService) {
        this.flightsService = flightsService;
        this.loaderService = loaderService;
        this.changeActiveFlight = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
    }
    Object.defineProperty(FlightSelectorComponent.prototype, "activeFlight", {
        set: function (activeFlight) {
            this._activeFlight = activeFlight;
            //this.setActiveFlight(this._activeFlight);
        },
        enumerable: true,
        configurable: true
    });
    ;
    FlightSelectorComponent.prototype.ngOnInit = function () {
    };
    FlightSelectorComponent.prototype.setActiveFlight = function (flight) {
        this.loaderService.displayMini(true);
        this.changeActiveFlight.emit(flight);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Array)
    ], FlightSelectorComponent.prototype, "flights", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_2__models_http_models_class_room_flights_and_settings_model__["a" /* FlightModel */]),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__models_http_models_class_room_flights_and_settings_model__["a" /* FlightModel */]])
    ], FlightSelectorComponent.prototype, "activeFlight", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"])
    ], FlightSelectorComponent.prototype, "changeActiveFlight", void 0);
    FlightSelectorComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-flight-selector',
            template: __webpack_require__("./src/app/modules/flights/flight-selector/flight-selector.component.html")
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__flights_service__["a" /* FlightsService */], __WEBPACK_IMPORTED_MODULE_3__services_loader_service__["a" /* LoaderService */]])
    ], FlightSelectorComponent);
    return FlightSelectorComponent;
}());



/***/ }),

/***/ "./src/app/modules/flights/flight-tables/flight-tables.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\r\n  <p-table [value]=\"students\" [ngClass]=\"!_nextLane?'col-12': (isLandscape?'col-6':'col-12')\" styleClass=\"cp-prime-table cp-prime-table--{{_lane.color.toLowerCase()}}\">\r\n    <ng-template pTemplate=\"header\">\r\n      <tr>\r\n        <th *ngIf=\"isGradeColumnVisible\" style=\"width: 60px; text-align: center\">GRADE</th>\r\n        <th>NAME</th>\r\n        <th *ngIf=\"isCarColumnVisible\" style=\"width: 20%\">CAR</th>\r\n        <th style=\"width: 20%\">CLASSROOM</th>\r\n        <th style=\"width: 20%\">HALLWAY</th>\r\n      </tr>\r\n    </ng-template>\r\n    <ng-template pTemplate=\"body\" let-student let-rowIndex=\"rowIndex\">\r\n      <tr [ngClass]=\"{'highlighted': student.cardId === highlightedCardId}\">\r\n        <td *ngIf=\"isGradeColumnVisible\" style=\"text-align: center\">{{student.grade}}</td>\r\n        <td>{{student.studentName}}</td>\r\n        <td *ngIf=\"isCarColumnVisible\">{{student.car}}</td>\r\n        <td>\r\n          <!-- Classroom status -->\r\n          <div *ngIf=\"authService.matchRoles(roles.schoolAdmin, roles.classroomTeacher); else noClassroomControl\">\r\n            <div  *ngIf=\"authService.matchRoles(roles.schoolAdmin) || teacherId===student.teacherId\" class=\"cp-switch\">\r\n              <input class=\"cp-switch__checkbox\" type=\"checkbox\" [(ngModel)]=\"student.classroom\"\r\n                     name=\"classroom-{{rowIndex}}\" id=\"classroom-{{rowIndex}}\"\r\n                     (change)=\"setClassroomCardStatus(student.cardId, student.classroom, student)\" [disabled]=\"student.hallway\">\r\n              <label class=\"cp-switch__control\" for=\"classroom-{{rowIndex}}\">\r\n                <span class=\"cp-switch__toggle\"><i class=\"material-icons\">done</i></span>\r\n              </label>\r\n            </div>\r\n            <div *ngIf=\"!authService.matchRoles(roles.schoolAdmin) && teacherId !== student.teacherId\" class=\"cp-icon-cell\">\r\n              <div *ngIf=\"student.classroom\"><i class=\"material-icons\">done</i></div>\r\n              <div *ngIf=\"!student.classroom\"><i class=\"material-icons\">remove</i></div>\r\n            </div>\r\n          </div>\r\n\r\n          <ng-template #noClassroomControl>\r\n            <div class=\"cp-icon-cell\">\r\n              <div *ngIf=\"student.classroom\"><i class=\"material-icons\">done</i></div>\r\n              <div *ngIf=\"!student.classroom\"><i class=\"material-icons\">remove</i></div>\r\n            </div>\r\n          </ng-template>\r\n        </td>\r\n        <td>\r\n          <!-- Hallway status -->\r\n          <div *ngIf=\"authService.matchRoles(roles.schoolAdmin, roles.dismissalTeacher); else noHallwayControl\">\r\n            <div class=\"cp-switch\">\r\n              <input class=\"cp-switch__checkbox\" type=\"checkbox\" [(ngModel)]=\"student.hallway\"\r\n                     name=\"hallway-{{rowIndex}}\" id=\"hallway-{{rowIndex}}\"\r\n                     (change)=\"setHallwayCardStatus(student.cardId, student.hallway)\" [disabled]=\"!student.classroom\">\r\n              <label class=\"cp-switch__control\" for=\"hallway-{{rowIndex}}\">\r\n                <span class=\"cp-switch__toggle\"><i class=\"material-icons\">done</i></span>\r\n              </label>\r\n            </div>\r\n          </div>\r\n\r\n          <ng-template #noHallwayControl>\r\n            <div class=\"cp-icon-cell\">\r\n              <div *ngIf=\"student.hallway\"><i class=\"material-icons\">done</i></div>\r\n              <div *ngIf=\"!student.hallway\"><i class=\"material-icons\">remove</i></div>\r\n            </div>\r\n          </ng-template>\r\n        </td>\r\n      </tr>\r\n    </ng-template>\r\n  </p-table>\r\n\r\n  <!--\r\n  table for next activeLane  \r\n  -->\r\n\r\n  <p-table *ngIf=\"_nextLane && isLandscape\" [value]=\"nextStudents\" class=\"col-6\" styleClass=\"cp-prime-table cp-prime-table--{{_nextLane?.color.toLowerCase()}}\">\r\n    <ng-template pTemplate=\"header\">\r\n      <tr>\r\n        <th *ngIf=\"isGradeColumnVisible\" style=\"width: 60px; text-align: center\">GRADE</th>\r\n        <th>NAME</th>\r\n        <th *ngIf=\"isCarColumnVisible\" style=\"width: 20%\">CAR</th>\r\n        <th style=\"width: 20%\">CLASSROOM</th>\r\n        <th style=\"width: 20%\">HALLWAY</th>\r\n      </tr>\r\n    </ng-template>\r\n    <ng-template pTemplate=\"body\" let-student let-rowIndex=\"rowIndex\">\r\n      <tr [ngClass]=\"{'highlighted': student.cardId === highlightedCardId}\">\r\n        <td *ngIf=\"isGradeColumnVisible\" style=\"text-align: center\">{{student.grade}}</td>\r\n        <td>{{student.studentName}}</td>\r\n        <td *ngIf=\"isCarColumnVisible\">{{student.car}}</td>\r\n        <td>\r\n          <!-- Classroom status -->\r\n          <div *ngIf=\"authService.matchRoles(roles.schoolAdmin, roles.classroomTeacher); else noClassroomControlNext\">\r\n            <div *ngIf=\"authService.matchRoles(roles.schoolAdmin) || teacherId===student.teacherId\" class=\"cp-switch\">\r\n              <input class=\"cp-switch__checkbox\" type=\"checkbox\" [(ngModel)]=\"student.classroom\"\r\n                     name=\"classroomNext-{{rowIndex}}\" id=\"classroomNext-{{rowIndex}}\"\r\n                     (change)=\"setClassroomCardStatus(student.cardId, student.classroom, student)\" [disabled]=\"student.hallway\">\r\n              <label class=\"cp-switch__control\" for=\"classroomNext-{{rowIndex}}\">\r\n                <span class=\"cp-switch__toggle\"><i class=\"material-icons\">done</i></span>\r\n              </label>\r\n            </div>\r\n            <div *ngIf=\"!authService.matchRoles(roles.schoolAdmin) && teacherId !== student.teacherId\" class=\"cp-icon-cell\">\r\n              <div *ngIf=\"student.classroom\"><i class=\"material-icons\">done</i></div>\r\n              <div *ngIf=\"!student.classroom\"><i class=\"material-icons\">remove</i></div>\r\n            </div>\r\n          </div>\r\n\r\n          <ng-template #noClassroomControlNext>\r\n            <div class=\"cp-icon-cell\">\r\n              <div *ngIf=\"student.classroom\"><i class=\"material-icons\">done</i></div>\r\n              <div *ngIf=\"!student.classroom\"><i class=\"material-icons\">remove</i></div>\r\n            </div>\r\n          </ng-template>\r\n        </td>\r\n        <td>\r\n          <!-- Hallway status -->\r\n          <div *ngIf=\"authService.matchRoles(roles.schoolAdmin, roles.dismissalTeacher); else noHallwayControlNext\">\r\n            <div class=\"cp-switch\">\r\n              <input class=\"cp-switch__checkbox\" type=\"checkbox\" [(ngModel)]=\"student.hallway\"\r\n                     name=\"hallwayNext-{{rowIndex}}\" id=\"hallwayNext-{{rowIndex}}\"\r\n                     (change)=\"setHallwayCardStatus(student.cardId, student.hallway)\" [disabled]=\"!student.classroom\">\r\n              <label class=\"cp-switch__control\" for=\"hallwayNext-{{rowIndex}}\">\r\n                <span class=\"cp-switch__toggle\"><i class=\"material-icons\">done</i></span>\r\n              </label>\r\n            </div>\r\n          </div>\r\n\r\n          <ng-template #noHallwayControlNext>\r\n            <div class=\"cp-icon-cell\">\r\n              <div *ngIf=\"student.hallway\"><i class=\"material-icons\">done</i></div>\r\n              <div *ngIf=\"!student.hallway\"><i class=\"material-icons\">remove</i></div>\r\n            </div>\r\n          </ng-template>\r\n        </td>\r\n      </tr>\r\n    </ng-template>\r\n  </p-table>\r\n\r\n</div>\r\n\r\n\r\n<!-- Scanning screen -->\r\n<div class=\"no-items-view\" *ngIf=\"_flightStatus==='Open'\">\r\n  <div class=\"no-items-view__image-container--not-clickable\" style=\"width:135px;\">\r\n    <img class=\"no-items-view__image\" src=\"assets/images/lanes_loading.gif\" alt=\"new loading\">\r\n  </div>\r\n</div>\r\n\r\n"

/***/ }),

/***/ "./src/app/modules/flights/flight-tables/flight-tables.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FlightTablesComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__flights_service__ = __webpack_require__("./src/app/modules/flights/flights.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_loader_service__ = __webpack_require__("./src/app/services/loader.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_scanning_http_hub_service__ = __webpack_require__("./src/app/services/scanning-http-hub.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_notification_service__ = __webpack_require__("./src/app/services/notification.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__models_http_models_lane_for_flight_model__ = __webpack_require__("./src/app/models/http-models/lane-for-flight.model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services_auth_service__ = __webpack_require__("./src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__models_roles_enum__ = __webpack_require__("./src/app/models/roles.enum.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__models_http_models_class_room_flights_and_settings_model__ = __webpack_require__("./src/app/models/http-models/class-room-flights-and-settings.model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__services_flight_teachers_service__ = __webpack_require__("./src/app/services/flight-teachers.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};










var FlightTablesComponent = (function () {
    function FlightTablesComponent(flightsService, loaderService, hubService, notificationService, authService, flightTeacherService) {
        this.flightsService = flightsService;
        this.loaderService = loaderService;
        this.hubService = hubService;
        this.notificationService = notificationService;
        this.authService = authService;
        this.flightTeacherService = flightTeacherService;
        this.roles = __WEBPACK_IMPORTED_MODULE_7__models_roles_enum__["a" /* Roles */];
        this.isScanning = false;
    }
    Object.defineProperty(FlightTablesComponent.prototype, "flightStatus", {
        set: function (flightStatus) {
            this._flightStatus = flightStatus;
        },
        enumerable: true,
        configurable: true
    });
    ;
    Object.defineProperty(FlightTablesComponent.prototype, "lane", {
        set: function (lane) {
            this._lane = lane;
            this.getStudentsByLane(this._lane.laneId);
        },
        enumerable: true,
        configurable: true
    });
    ;
    Object.defineProperty(FlightTablesComponent.prototype, "nextLane", {
        set: function (lane) {
            this._nextLane = lane;
            if (lane !== null) {
                this.getStudentsByLane(this._nextLane.laneId);
            }
        },
        enumerable: true,
        configurable: true
    });
    ;
    FlightTablesComponent.prototype.ngOnInit = function () {
        //this.getStudentsByLane(this._lane.laneId);
        var schoolId = "";
        if (window.localStorage.getItem('role') === __WEBPACK_IMPORTED_MODULE_7__models_roles_enum__["a" /* Roles */].superAdmin && window.localStorage.getItem('selectedSchool')) {
            schoolId = window.localStorage.getItem('selectedSchool');
        }
        this.hubSubscribes();
    };
    FlightTablesComponent.prototype.sendflightOnLastCard = function (flight) {
        // send message everybody who subscribe on observable subject
        this.flightTeacherService.flightOnLastCard(flight);
    };
    FlightTablesComponent.prototype.getStudentsByLane = function (laneId) {
        var _this = this;
        this.loaderService.displayMini(true);
        this.flightsService.getStudentsByLane(laneId).subscribe(function (res) {
            if (laneId === _this._lane.laneId) {
                _this.students = res;
            }
            else {
                _this.nextStudents = res;
            }
            _this.loaderService.displayMini(false);
            _this.isScanning = _this._flightStatus === "Open" ? true : false;
        });
    };
    FlightTablesComponent.prototype.hubSubscribes = function () {
        var _this = this;
        this.hubService.subscribeScannedStudentForFlights().subscribe(function (res) {
            if (res.laneId === _this._lane.laneId) {
                _this.students.push(res);
            }
            else if (_this._nextLane && res.laneId === _this._nextLane.laneId) {
                _this.nextStudents.push(res);
            }
            var flight = new __WEBPACK_IMPORTED_MODULE_8__models_http_models_class_room_flights_and_settings_model__["a" /* FlightModel */]();
            flight.flightId = res.flightId;
            flight.status = "Open";
            flight.flightNumber = res.flightNumber;
            _this.sendflightOnLastCard(flight);
        });
        this.hubService.subscribeDeletedStudentForFlights().subscribe(function (res) {
            var names = "";
            for (var i = 0; i < res.length; i++) {
                var studentIndex = _this.students.findIndex(function (student) { return student.cardId === res[i]; });
                if (studentIndex !== -1) {
                    names += _this.students[studentIndex].studentName + ", ";
                    _this.students.splice(studentIndex, 1);
                }
                else if (_this._nextLane) {
                    var studentIndex_1 = _this.nextStudents.findIndex(function (student) { return student.cardId === res[i]; });
                    if (studentIndex_1 !== -1) {
                        names += _this.nextStudents[studentIndex_1].studentName + ", ";
                        _this.nextStudents.splice(studentIndex_1, 1);
                    }
                }
            }
            if (res.length === 1 && names !== "") {
                _this.notificationService.show("Student " + names + " was deleted");
            }
            else if (res.length > 1 && names !== "") {
                _this.notificationService.show("Student removed: " + names);
            }
        });
        this.hubService.subscribeStatusFlight().subscribe(function (res) {
            if (res.status === "Closed") {
                _this.sendflightOnLastCard(res);
            }
            ;
            if (res.status === "Finished") {
                _this.sendflightOnLastCard(res);
            }
        });
        this.hubService.subscribeChangeStudentLaneForFlights().subscribe(function (res) {
            var studentIndex = _this.students.findIndex(function (student) { return student.cardId === res.cardId; });
            if (studentIndex !== -1) {
                _this.students.splice(studentIndex, 1);
            }
            else {
                if (res.laneId === _this._lane.laneId) {
                    _this.students.push(res);
                }
            }
            if (_this._nextLane) {
                var studentIndex_2 = _this.nextStudents.findIndex(function (student) { return student.cardId === res.cardId; });
                if (studentIndex_2 !== -1) {
                    _this.nextStudents.splice(studentIndex_2, 1);
                }
                else {
                    if (res.laneId === _this._nextLane.laneId) {
                        _this.nextStudents.push(res);
                    }
                }
            }
            var flight = new __WEBPACK_IMPORTED_MODULE_8__models_http_models_class_room_flights_and_settings_model__["a" /* FlightModel */]();
            flight.flightId = res.flightId;
            flight.status = "Open";
            flight.flightNumber = res.flightNumber;
            _this.sendflightOnLastCard(flight);
        });
        this.hubService.subscribeClassroomCardStatus().subscribe(function (res) {
            _this.students.forEach(function (student) {
                if (student.cardId === res.cardId) {
                    student.classroom = res.classroom;
                }
            });
            if (_this._nextLane) {
                _this.nextStudents.forEach(function (student) {
                    if (student.cardId === res.cardId) {
                        student.classroom = res.classroom;
                    }
                });
            }
        });
        this.hubService.subscribeHallwayCardStatus().subscribe(function (res) {
            _this.students.forEach(function (student) {
                if (student.cardId === res.cardId) {
                    student.hallway = res.hallway;
                }
            });
            if (_this._nextLane) {
                _this.nextStudents.forEach(function (student) {
                    if (student.cardId === res.cardId) {
                        student.hallway = res.hallway;
                    }
                });
            }
        });
    };
    FlightTablesComponent.prototype.setClassroomCardStatus = function (cardId, status, student) {
        this.hubService.setClassroomCardStatus(cardId, status);
    };
    FlightTablesComponent.prototype.setHallwayCardStatus = function (cardId, status) {
        this.hubService.setHallwayCardStatus(cardId, status);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Number)
    ], FlightTablesComponent.prototype, "teacherId", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Boolean)
    ], FlightTablesComponent.prototype, "isCarColumnVisible", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Boolean)
    ], FlightTablesComponent.prototype, "isGradeColumnVisible", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", String)
    ], FlightTablesComponent.prototype, "_flightStatus", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Boolean)
    ], FlightTablesComponent.prototype, "isLandscape", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Number)
    ], FlightTablesComponent.prototype, "highlightedCardId", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", String),
        __metadata("design:paramtypes", [String])
    ], FlightTablesComponent.prototype, "flightStatus", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_5__models_http_models_lane_for_flight_model__["a" /* LaneForFlightModel */]),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_5__models_http_models_lane_for_flight_model__["a" /* LaneForFlightModel */]])
    ], FlightTablesComponent.prototype, "lane", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_5__models_http_models_lane_for_flight_model__["a" /* LaneForFlightModel */]),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_5__models_http_models_lane_for_flight_model__["a" /* LaneForFlightModel */]])
    ], FlightTablesComponent.prototype, "nextLane", null);
    FlightTablesComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-flight-tables',
            template: __webpack_require__("./src/app/modules/flights/flight-tables/flight-tables.component.html")
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__flights_service__["a" /* FlightsService */],
            __WEBPACK_IMPORTED_MODULE_2__services_loader_service__["a" /* LoaderService */],
            __WEBPACK_IMPORTED_MODULE_3__services_scanning_http_hub_service__["a" /* ScanningHttpHubService */],
            __WEBPACK_IMPORTED_MODULE_4__services_notification_service__["a" /* NotificationService */],
            __WEBPACK_IMPORTED_MODULE_6__services_auth_service__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_9__services_flight_teachers_service__["a" /* FlightTeacherService */]])
    ], FlightTablesComponent);
    return FlightTablesComponent;
}());



/***/ }),

/***/ "./src/app/modules/flights/flights.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"page-container\" [ngClass]=\"{'full-height-page full-height-page--flex-column': !isSchoolConfigSet || !isHasFlight }\" (window:orientationchange)=\"onOrientationChange($event)\">\r\n  <header class=\"page-header\">\r\n    <div class=\"page-header__left\">\r\n      <h3 class=\"page-header__title\">Flights</h3>\r\n      <app-flight-selector *ngIf=\"isSchoolConfigSet && flights?.length\" [flights]=\"flights\"\r\n                           [activeFlight]=\"activeFlight\" (changeActiveFlight)=\"setActiveFlight($event)\">\r\n      </app-flight-selector>\r\n    </div>\r\n\r\n    <div class=\"page-header__right\">\r\n      <!--<search-bar [data]=\"[]\" [filters]=\"[]\"></search-bar>-->\r\n      <div class=\"item\" style=\"width:250px; display:flex;\">\r\n        <p-dropdown [options]=\"students\" optionLabel=\"name\" [(ngModel)]=\"selectedStudent\" placeholder=\"Search for a student\" [autoWidth]=\"false\" [filter]=\"true\" name=\"studentName\" (onChange)=\"setFilteredFlight($event)\"></p-dropdown>\r\n      </div>\r\n    </div>\r\n  </header>\r\n\r\n  <app-lane-selector *ngIf=\"lanes && activeLane\" [activeLane]=\"activeLane\" [nextActiveLane]=\"nextActiveLane\" [isLandscape]=\"isLandscape\"\r\n                     [lanes]=\"lanes\" (changeActiveLane)=\"setActiveLane($event)\"></app-lane-selector>\r\n\r\n\r\n  <app-flight-tables *ngIf=\"activeLane\" [lane]=\"activeLane\" [nextLane]=\"nextActiveLane\" [teacherId]=\"activeTeacherId\" [flightStatus]=\"activeFlight.status\" [highlightedCardId]=\"highlightedCardId\" [isLandscape]=\"isLandscape\" [isCarColumnVisible]=\"isCarColumnVisible\" [isGradeColumnVisible]=\"isGradeColumnVisible\"></app-flight-tables>\r\n\r\n\r\n\r\n  <!-- No items screen -->\r\n  <div class=\"no-items-view\" *ngIf=\"!isSchoolConfigSet\">\r\n    <p class=\"no-items-view__text\" style=\"max-width: 325px;\">Lane information has not been configured yet. {{isAdmin? \"Please go to School Configuration view and complete the 'Lane' section.\" : \"Please contact your School Administrator.\" }} </p>\r\n    <br>\r\n    <div class=\"no-items-view__image-container no-items-view__image-container--not-clickable\">\r\n      <img class=\"no-items-view__image\" src=\"assets/images/menu_flights.svg\" alt=\"new configurations\">\r\n    </div>\r\n    <button *ngIf=\"isAdmin\" class=\"item flat accent shadow\" [routerLink]=\"['../school-configuration']\" style=\"margin-bottom:30px;\">GO TO SCHOOL CONFIGURATION</button>\r\n\r\n  </div>\r\n\r\n\r\n\r\n  <!-- No cars have been scanned yet -->\r\n  <div class=\"no-items-view\" *ngIf=\"!isHasFlight\">\r\n    <p class=\"no-items-view__text\" style=\"max-width: 325px;\"> {{closedFlightIntoArchive === \"\" ? \"No cars have been scanned yet.\" : \"Flight \" + closedFlightIntoArchive +\" have been closed. Please go to the archive to view this information.\"}}</p>\r\n    <br>\r\n    <div class=\"no-items-view__image-container no-items-view__image-container--not-clickable\">\r\n      <img class=\"no-items-view__image\" src=\"assets/images/menu_flights.svg\" alt=\"new flight\">\r\n    </div>\r\n  </div>\r\n\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/modules/flights/flights.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FlightsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__flights_service__ = __webpack_require__("./src/app/modules/flights/flights.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_scanning_http_hub_service__ = __webpack_require__("./src/app/services/scanning-http-hub.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_loader_service__ = __webpack_require__("./src/app/services/loader.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_flight_teachers_service__ = __webpack_require__("./src/app/services/flight-teachers.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_flight_view_configuration_service__ = __webpack_require__("./src/app/services/flight-view-configuration.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__models_student_model__ = __webpack_require__("./src/app/models/student.model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__services_students_service__ = __webpack_require__("./src/app/services/students.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__services_notification_service__ = __webpack_require__("./src/app/services/notification.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var FlightsComponent = (function () {
    function FlightsComponent(flightsService, hubService, loaderService, flightTeacherService, flightViewConfig, notificationService, studentService) {
        this.flightsService = flightsService;
        this.hubService = hubService;
        this.loaderService = loaderService;
        this.flightTeacherService = flightTeacherService;
        this.flightViewConfig = flightViewConfig;
        this.notificationService = notificationService;
        this.studentService = studentService;
        this.isSchoolConfigSet = true;
        this.isAdmin = false;
        this.isLandscape = true;
        this.closedFlightIntoArchive = "";
    }
    FlightsComponent.prototype.onOrientationChange = function (event) {
        //event.target.innerWidth;
        this.setOrientationWindow();
    };
    FlightsComponent.prototype.setOrientationWindow = function () {
        if (window.orientation === 0) {
            this.isLandscape = false;
        }
        else {
            if (window.innerWidth > 700) {
                this.isLandscape = true;
            }
        }
    };
    FlightsComponent.prototype.ngOnInit = function () {
        this.isHasFlight = true;
        if (window.localStorage.getItem('role').indexOf("Admin") >= 0) {
            this.isAdmin = true;
        }
        this.setOrientationWindow();
        this.getFlightsAndSettings();
        this.subscribeFlightOnLastCard();
    };
    FlightsComponent.prototype.ngOnDestroy = function () {
        this.hubService.stopConnect();
    };
    FlightsComponent.prototype.subscribeFlightOnLastCard = function () {
        var _this = this;
        this.subscription = this.flightTeacherService.getflightOnLastCard().subscribe(function (flight) {
            var index = _this.flights.findIndex(function (obj) { return obj.flightId === flight.flightId; });
            if (index === -1) {
                _this.currentFlight = flight;
                _this.flights.push(flight);
            }
            else if (flight.status === "Closed") {
                _this.flights[index].status = flight.status;
            }
            else if (flight.status === "Finished") {
                _this.notificationService.show("Flight number " + _this.flights[index].flightNumber + " is in archive!", false, false);
                _this.flights.splice(index, 1);
                if (_this.activeFlight.flightId === flight.flightId) {
                    if (_this.flights.length > 0) {
                        _this.setActiveFlight(_this.flights[0]);
                    }
                }
                if (_this.flights.length === 0) {
                    window.location.reload();
                }
            }
        });
    };
    FlightsComponent.prototype.getFlightsAndSettings = function () {
        var _this = this;
        this.loaderService.displayMini(true);
        this.flightsService.getClassroomFlightsAndSetings().subscribe(function (res) {
            if (res !== null) {
                _this.flightViewConfig.show(true);
                _this.isSchoolConfigSet = true;
                _this.flights = res.flights;
                _this.activeTeacherId = res.teacherId;
                _this.defaultLaneColor = res.defaultLaneColor;
                _this.isCarColumnVisible = res.isCarColumnVisible;
                _this.isGradeColumnVisible = res.isGradeColumnVisible;
                if (!_this.flights.length) {
                    _this.isHasFlight = false;
                    if (res.closedFlightIntoArchive !== "") {
                        _this.closedFlightIntoArchive = res.closedFlightIntoArchive;
                    }
                }
                _this.hubService.connect().then(function () {
                    _this.hubService.setClassroomTeacher(_this.activeTeacherId).then(function () {
                        // if haven't flight yet (scanner doen't scan yet)
                        if (!_this.flights.length) {
                            _this.hubService.subscribeScannedStudentForFlights().subscribe(function (res) {
                                //waiting while start scanning and reload page
                                if (res) {
                                    window.location.reload();
                                }
                            });
                        }
                    });
                });
                if (_this.flights.length) {
                    _this.isHasFlight = true;
                    _this.activeFlight = _this.flights[_this.flights.length - 1];
                    _this.getLanesByFlightId(_this.activeFlight.flightId);
                    _this.studentService.getStudents().subscribe(function (students) {
                        _this.students = students;
                        var stud = new __WEBPACK_IMPORTED_MODULE_6__models_student_model__["b" /* Student */]();
                        stud.id = 0, stud.name = "Search for a student";
                        _this.students.unshift(stud);
                        _this.selectedStudent = null;
                    });
                }
            }
            else {
                _this.isSchoolConfigSet = false;
                _this.flightViewConfig.show(false);
            }
            _this.loaderService.displayMini(false);
        });
    };
    FlightsComponent.prototype.getLanesByFlightId = function (flightId, filteredStudentLaneId, callback) {
        var _this = this;
        this.loaderService.displayMini(true);
        this.flightsService.getLanesByFlightId(flightId).subscribe(function (res) {
            _this.lanes = res;
            if (_this.lanes.length) {
                _this.setActiveLane(_this.lanes.find(function (lane) { return lane.color === _this.defaultLaneColor; }), filteredStudentLaneId);
            }
            _this.loaderService.displayMini(false);
            callback && callback();
        });
    };
    FlightsComponent.prototype.setActiveFlight = function (flight, filteredStudentLaneId) {
        this.activeFlight = flight;
        this.getLanesByFlightId(this.activeFlight.flightId, filteredStudentLaneId);
        if (!filteredStudentLaneId) {
            this.highlightedCardId = null;
            this.selectedStudent = null;
        }
    };
    FlightsComponent.prototype.setActiveLane = function (lane, filteredStudentLaneId) {
        if (filteredStudentLaneId) {
            lane = this.lanes[this.lanes.findIndex(function (l) { return l.laneId === filteredStudentLaneId; })];
        }
        else {
            this.highlightedCardId = null;
            this.selectedStudent = null;
        }
        this.activeLane = lane;
        //add next lane for horizontal orientation
        this.setNextActiveLane(lane);
    };
    FlightsComponent.prototype.setNextActiveLane = function (lane) {
        if (this.lanes.length === 1) {
            this.nextActiveLane = null;
        }
        else {
            var indexActiveLane = this.lanes.indexOf(lane);
            if (indexActiveLane === (this.lanes.length - 1)) {
                this.nextActiveLane = this.lanes[indexActiveLane - 1];
            }
            else {
                this.nextActiveLane = this.lanes[indexActiveLane + 1];
            }
        }
    };
    FlightsComponent.prototype.setFilteredFlight = function ($event) {
        var _this = this;
        if (this.selectedStudent === null || this.selectedStudent.id === 0) {
            this.highlightedCardId = null;
            this.selectedStudent = null;
            return;
        }
        this.loaderService.displayMini(true);
        this.flightsService.getFlightAndLaneIDByStudentId(this.selectedStudent.id).subscribe(function (res) {
            if (res) {
                if (res.flightId === _this.activeFlight.flightId) {
                    if (!(res.laneId === _this.activeLane.laneId || res.laneId === _this.nextActiveLane.laneId)) {
                        _this.setActiveLane(_this.lanes[0], res.laneId);
                    }
                }
                else {
                    _this.setActiveFlight(_this.flights[_this.flights.findIndex(function (f) { return f.flightId === res.flightId; })], res.laneId);
                }
                _this.highlightedCardId = res.cardId;
            }
            else {
                _this.highlightedCardId = null;
                _this.notificationService.show("Student " + _this.selectedStudent.name.toUpperCase() + " was not found in today flights", false, true);
                _this.selectedStudent = null;
            }
            _this.loaderService.displayMini(false);
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["HostListener"])('window:orientationchange', ['$event']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", void 0)
    ], FlightsComponent.prototype, "onOrientationChange", null);
    FlightsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-flights',
            template: __webpack_require__("./src/app/modules/flights/flights.component.html")
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__flights_service__["a" /* FlightsService */],
            __WEBPACK_IMPORTED_MODULE_2__services_scanning_http_hub_service__["a" /* ScanningHttpHubService */],
            __WEBPACK_IMPORTED_MODULE_3__services_loader_service__["a" /* LoaderService */],
            __WEBPACK_IMPORTED_MODULE_4__services_flight_teachers_service__["a" /* FlightTeacherService */],
            __WEBPACK_IMPORTED_MODULE_5__services_flight_view_configuration_service__["a" /* FlightViewConfigurationService */],
            __WEBPACK_IMPORTED_MODULE_8__services_notification_service__["a" /* NotificationService */],
            __WEBPACK_IMPORTED_MODULE_7__services_students_service__["a" /* StudentsService */]])
    ], FlightsComponent);
    return FlightsComponent;
}());



/***/ }),

/***/ "./src/app/modules/flights/flights.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FlightsModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__flights_component__ = __webpack_require__("./src/app/modules/flights/flights.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__flights_routing__ = __webpack_require__("./src/app/modules/flights/flights.routing.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__flight_selector_flight_selector_component__ = __webpack_require__("./src/app/modules/flights/flight-selector/flight-selector.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__share_module_share_module_module__ = __webpack_require__("./src/app/modules/share-module/share-module.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__lane_selector_lane_selector_component__ = __webpack_require__("./src/app/modules/flights/lane-selector/lane-selector.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_primeng_primeng__ = __webpack_require__("./node_modules/primeng/primeng.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_primeng_primeng___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_primeng_primeng__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__flight_tables_flight_tables_component__ = __webpack_require__("./src/app/modules/flights/flight-tables/flight-tables.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_primeng_table__ = __webpack_require__("./node_modules/primeng/table.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_primeng_table___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10_primeng_table__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__flights_service__ = __webpack_require__("./src/app/modules/flights/flights.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__services_flight_teachers_service__ = __webpack_require__("./src/app/services/flight-teachers.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__services_students_service__ = __webpack_require__("./src/app/services/students.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};














var FlightsModule = (function () {
    function FlightsModule() {
    }
    FlightsModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"],
                __WEBPACK_IMPORTED_MODULE_3__flights_routing__["a" /* FlightsRoutes */],
                __WEBPACK_IMPORTED_MODULE_5__share_module_share_module_module__["a" /* ShareModuleModule */],
                __WEBPACK_IMPORTED_MODULE_10_primeng_table__["TableModule"],
                __WEBPACK_IMPORTED_MODULE_8__angular_forms__["FormsModule"],
                __WEBPACK_IMPORTED_MODULE_7_primeng_primeng__["InputSwitchModule"],
                __WEBPACK_IMPORTED_MODULE_7_primeng_primeng__["DropdownModule"]
            ],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__flights_component__["a" /* FlightsComponent */],
                __WEBPACK_IMPORTED_MODULE_4__flight_selector_flight_selector_component__["a" /* FlightSelectorComponent */],
                __WEBPACK_IMPORTED_MODULE_6__lane_selector_lane_selector_component__["a" /* LaneSelectorComponent */],
                __WEBPACK_IMPORTED_MODULE_9__flight_tables_flight_tables_component__["a" /* FlightTablesComponent */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_11__flights_service__["a" /* FlightsService */],
                __WEBPACK_IMPORTED_MODULE_12__services_flight_teachers_service__["a" /* FlightTeacherService */],
                __WEBPACK_IMPORTED_MODULE_13__services_students_service__["a" /* StudentsService */]
            ]
        })
    ], FlightsModule);
    return FlightsModule;
}());



/***/ }),

/***/ "./src/app/modules/flights/flights.routing.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FlightsRoutes; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__flights_component__ = __webpack_require__("./src/app/modules/flights/flights.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__navigation_guards_auth_guard__ = __webpack_require__("./src/app/navigation-guards/auth.guard.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__models_roles_enum__ = __webpack_require__("./src/app/models/roles.enum.ts");




var routes = [
    {
        path: 'flights',
        component: __WEBPACK_IMPORTED_MODULE_1__flights_component__["a" /* FlightsComponent */],
        canActivate: [__WEBPACK_IMPORTED_MODULE_2__navigation_guards_auth_guard__["a" /* AuthGuard */]],
        data: {
            expectedRoles: [__WEBPACK_IMPORTED_MODULE_3__models_roles_enum__["a" /* Roles */].schoolAdmin, __WEBPACK_IMPORTED_MODULE_3__models_roles_enum__["a" /* Roles */].classroomTeacher, __WEBPACK_IMPORTED_MODULE_3__models_roles_enum__["a" /* Roles */].dismissalTeacher, __WEBPACK_IMPORTED_MODULE_3__models_roles_enum__["a" /* Roles */].superAdmin]
        }
    },
];
var FlightsRoutes = __WEBPACK_IMPORTED_MODULE_0__angular_router__["RouterModule"].forChild(routes);


/***/ }),

/***/ "./src/app/modules/flights/flights.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FlightsService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var FlightsService = (function () {
    function FlightsService(http) {
        this.http = http;
    }
    FlightsService.prototype.getClassroomFlightsAndSetings = function () {
        return this.http.get('api/Flight/GetClassroomFlightsAndSetings');
    };
    FlightsService.prototype.getLanesByFlightId = function (flightId) {
        return this.http.get("api/Flight/GetLanesByFlightId/" + flightId);
    };
    FlightsService.prototype.getStudentsByLane = function (laneId) {
        return this.http.get("api/Flight/GetStudentsByLane/" + laneId);
    };
    FlightsService.prototype.getFlightAndLaneIDByStudentId = function (studentId) {
        return this.http.get("api/Flight/GetLaneAndFlightByStudentId/" + studentId);
    };
    FlightsService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["b" /* HttpClient */]])
    ], FlightsService);
    return FlightsService;
}());



/***/ }),

/***/ "./src/app/modules/flights/lane-selector/lane-selector.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"lane-selector\">\r\n  <button class=\"lane-selector__btn lane-selector__btn--{{lane.color.toLowerCase()}}\"\r\n          *ngFor=\"let lane of _lanes\" [ngClass]=\"{'is-active': lane.laneId === _activeLane.laneId || (lane.laneId === _nextActiveLane?.laneId && isLandscape)}\"\r\n          (click)=\"setActiveLane(lane)\">\r\n    <span class=\"lane-selector__lane-name\">{{ lane.name.toUpperCase() }}</span>\r\n    <div class=\"lane-selector__lane-panel\">\r\n      <div class=\"lane-selector__active-lane-panel\"></div>\r\n    </div>\r\n  </button>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/modules/flights/lane-selector/lane-selector.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LaneSelectorComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__models_http_models_lane_for_flight_model__ = __webpack_require__("./src/app/models/http-models/lane-for-flight.model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_loader_service__ = __webpack_require__("./src/app/services/loader.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var LaneSelectorComponent = (function () {
    function LaneSelectorComponent(loaderService) {
        this.loaderService = loaderService;
        this.changeActiveLane = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
    }
    Object.defineProperty(LaneSelectorComponent.prototype, "lanes", {
        set: function (lanes) {
            this._lanes = lanes;
        },
        enumerable: true,
        configurable: true
    });
    ;
    Object.defineProperty(LaneSelectorComponent.prototype, "activeLane", {
        set: function (activeLane) {
            this._activeLane = activeLane;
        },
        enumerable: true,
        configurable: true
    });
    ;
    Object.defineProperty(LaneSelectorComponent.prototype, "nextActiveLane", {
        set: function (nextActiveLane) {
            this._nextActiveLane = nextActiveLane;
        },
        enumerable: true,
        configurable: true
    });
    ;
    LaneSelectorComponent.prototype.ngOnInit = function () {
    };
    LaneSelectorComponent.prototype.setActiveLane = function (lane) {
        this.loaderService.displayMini(true);
        this.changeActiveLane.emit(lane);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Boolean)
    ], LaneSelectorComponent.prototype, "isLandscape", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Array),
        __metadata("design:paramtypes", [Array])
    ], LaneSelectorComponent.prototype, "lanes", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1__models_http_models_lane_for_flight_model__["a" /* LaneForFlightModel */]),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__models_http_models_lane_for_flight_model__["a" /* LaneForFlightModel */]])
    ], LaneSelectorComponent.prototype, "activeLane", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1__models_http_models_lane_for_flight_model__["a" /* LaneForFlightModel */]),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__models_http_models_lane_for_flight_model__["a" /* LaneForFlightModel */]])
    ], LaneSelectorComponent.prototype, "nextActiveLane", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"])
    ], LaneSelectorComponent.prototype, "changeActiveLane", void 0);
    LaneSelectorComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-lane-selector',
            template: __webpack_require__("./src/app/modules/flights/lane-selector/lane-selector.component.html")
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__services_loader_service__["a" /* LoaderService */]])
    ], LaneSelectorComponent);
    return LaneSelectorComponent;
}());



/***/ }),

/***/ "./src/app/modules/scanner/scanned-students-list/scanned-students-list.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"page-container\">\r\n  <!-- HEADER -->\r\n  <div class=\"scanner-header\">\r\n    <div class=\"scanner-header__left\">\r\n      <label class=\"scanner-status\" for=\"scan-text\">\r\n        <span *ngIf=\"scannerService.isInScanMode;then scannerActive else scannerNotActive\"></span>\r\n\r\n        <ng-template #scannerActive>\r\n          <span class=\"scanner-status__inner\">\r\n            <svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"-18470 -5791 20 20.1\">\r\n              <g transform=\"translate(-18522.9 -5869)\">\r\n                <path d=\"M41.9,4A9.6,9.6,0,0,1,49,1a9.228,9.228,0,0,1,7,3,9.506,9.506,0,0,1,2.9,7.1A9.9,9.9,0,0,1,56,18.2a9.506,9.506,0,0,1-7.1,2.9,9.9,9.9,0,0,1-7.1-2.9,9.506,9.506,0,0,1-2.9-7.1A10.236,10.236,0,0,1,41.9,4Zm1.4,12.7a7.73,7.73,0,0,0,5.6,2.4,7.568,7.568,0,0,0,5.6-2.4,7.73,7.73,0,0,0,2.4-5.6,7.413,7.413,0,0,0-2.4-5.6A7.109,7.109,0,0,0,49,3a7.568,7.568,0,0,0-5.6,2.4A7.73,7.73,0,0,0,41,11,7.329,7.329,0,0,0,43.3,16.7Z\"\r\n                  transform=\"translate(14 77)\" />\r\n                <path d=\"M264.464,879.075l4.475-4.475.591.591-5.066,5.066-2.364-2.364.591-.591Z\" transform=\"translate(-202.915 -789.129)\"\r\n                />\r\n              </g>\r\n            </svg>\r\n            <span>Scanner is ready!</span>\r\n          </span>\r\n        </ng-template>\r\n\r\n        <ng-template #scannerNotActive>\r\n          <span class=\"scanner-status__inner is-not-active bounce\">\r\n            <svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"-18855 -5791 20 20.1\">\r\n              <path d=\"M41.9,4A9.6,9.6,0,0,1,49,1a9.228,9.228,0,0,1,7,3,9.506,9.506,0,0,1,2.9,7.1A9.9,9.9,0,0,1,56,18.2a9.506,9.506,0,0,1-7.1,2.9,9.9,9.9,0,0,1-7.1-2.9,9.506,9.506,0,0,1-2.9-7.1A10.236,10.236,0,0,1,41.9,4Zm1.4,12.7a7.73,7.73,0,0,0,5.6,2.4,7.568,7.568,0,0,0,5.6-2.4,7.73,7.73,0,0,0,2.4-5.6,7.413,7.413,0,0,0-2.4-5.6A7.109,7.109,0,0,0,49,3a7.568,7.568,0,0,0-5.6,2.4A7.73,7.73,0,0,0,41,11,7.329,7.329,0,0,0,43.3,16.7ZM48,6h2v6H48Zm0,8h2v2H48Z\"\r\n                transform=\"translate(-18893.9 -5792)\" />\r\n            </svg>\r\n            <span>Activate scanner</span>\r\n          </span>\r\n        </ng-template>\r\n      </label>\r\n    </div>\r\n\r\n    <div class=\"scanner-header__right\">\r\n      <button type=\"submit\" class=\"cp-button cp-button--style-2\" (click)=\"modalService.openModal(scannerService.scanningMode === 'single' ? chooseLaneToCloseModal : closeLaneModal)\">\r\n        CLOSE LANE\r\n      </button>\r\n    </div>\r\n  </div>\r\n\r\n  <!-- CHOOSE SCANNING TYPE DROPDOWN -->\r\n  <p-dropdown *ngIf=\"scannerService.scanningMode === 'single'\" [(ngModel)]=\"scannerService.scanningTypeId\" [options]=\"assignedLanesOptions\"\r\n    [autoWidth]=\"false\" (onChange)=\"changeScanningType($event)\"></p-dropdown>\r\n\r\n  <!-- CARDS LIST -->\r\n  <div class=\"scanned-cards-list\">\r\n    <div class=\"scanned-cards-list__item\" *ngFor=\"let card of formatedCards; let i = index\">\r\n      <!-- Student Card -->\r\n      <div class=\"scanned-card\" *ngIf=\"card.parentId\">\r\n        <div class=\"scanned-card__header lane-{{ card.lane.color.toLowerCase() }}\">\r\n          <div class=\"scanned-card__header-left\">FLIGHT {{ card.flightNumber }} · {{ card.lane.name }}</div>\r\n          <div class=\"scanned-card__header-right\">Driver: {{ card.parentName }}</div>\r\n        </div>\r\n\r\n        <div class=\"scanned-card__student\" *ngFor=\"let student of card.students\">\r\n          <div class=\"scanned-card__student-name\">{{ student.name }}</div>\r\n          <button *ngIf=\"card.students.length > 1 && card.isEditable\" class=\"scanned-card__delete-student\" (click)=\"removeScannedStudents({cardId: student.cardId})\">\r\n            <i class=\"material-icons\">clear</i>\r\n          </button>\r\n        </div>\r\n\r\n        <div class=\"scanned-card__footer\" *ngIf=\"card.isEditable\">\r\n          <button type=\"button\" class=\"scanned-card__footer-button\" (click)=\"removeScannedStudents({cardIndex: i})\">\r\n            <i class=\"material-icons\">delete</i>Remove\r\n          </button>\r\n\r\n          <div class=\"btn-group\" *ngIf=\"scannerService.scanningMode === 'single' && scannerService.assignedLanes.length > 2\">\r\n            <button type=\"button\" class=\"scanned-card__footer-button\" data-toggle=\"dropdown\" data-offset=\"0%, -100%\" data-flip=\"false\"\r\n                    aria-haspopup=\"true\" aria-expanded=\"false\">\r\n              <i class=\"material-icons\">compare_arrows</i>Move lane\r\n            </button>\r\n            <div class=\"dropdown-menu dropdown-menu-right\" aria-labelledby=\"dropdownMenuButton\">\r\n              <button *ngFor=\"let lane of getLanesToMove(card.lane.id)\" class=\"dropdown-item\" type=\"button\" (click)=\"moveStudentsToLane(i, lane.id)\">{{ lane.name }}</button>\r\n            </div>\r\n          </div>\r\n\r\n          <div class=\"btn-group\" *ngIf=\"scannerService.scanningMode === 'single' && scannerService.assignedLanes.length == 2\">\r\n            <button *ngFor=\"let lane of getLanesToMove(card.lane.id)\" class=\"scanned-card__footer-button\" type=\"button\" data-offset=\"0%, -100%\" data-flip=\"false\" (click)=\"moveStudentsToLane(i, lane.id)\">\r\n            <i class=\"material-icons\">compare_arrows</i>Move lane\r\n            </button>\r\n          </div>\r\n\r\n        </div>\r\n      </div>\r\n      <!-- Message -->\r\n      <div class=\"scanner-notification zoomIn\" *ngIf=\"card.message\">\r\n        <svg class=\"scanner-notification__icon\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"-16806.1 -4110 20 20.1\">\r\n          <path d=\"M41.9,4A9.6,9.6,0,0,1,49,1a9.228,9.228,0,0,1,7,3,9.506,9.506,0,0,1,2.9,7.1A9.9,9.9,0,0,1,56,18.2a9.506,9.506,0,0,1-7.1,2.9,9.9,9.9,0,0,1-7.1-2.9,9.506,9.506,0,0,1-2.9-7.1A10.236,10.236,0,0,1,41.9,4Zm1.4,12.7a7.73,7.73,0,0,0,5.6,2.4,7.568,7.568,0,0,0,5.6-2.4,7.73,7.73,0,0,0,2.4-5.6,7.413,7.413,0,0,0-2.4-5.6A7.109,7.109,0,0,0,49,3a7.568,7.568,0,0,0-5.6,2.4A7.73,7.73,0,0,0,41,11,7.329,7.329,0,0,0,43.3,16.7ZM48,6h2v6H48Zm0,8h2v2H48Z\"\r\n            transform=\"translate(-16845 -4111)\" />\r\n        </svg>\r\n        <span>{{ card.message }}</span>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n<!-- MODAL: Choose lane to close -->\r\n<ng-template #chooseLaneToCloseModal>\r\n  <form class=\"cp-modal\" #closeLaneForm=\"ngForm\">\r\n    <header class=\"cp-modal__header\">\r\n      <h5 class=\"cp-modal__title\">Close Lane</h5>\r\n    </header>\r\n\r\n    <div class=\"cp-modal__content\">\r\n      <p class=\"cp-modal__text\">Which lane so you wish to close?</p>\r\n      <div *ngFor=\"let lane of scannerService.assignedLanes\" class=\"lane-switch-item\">\r\n        <input id=\"closeLane-{{lane.id}}\" name=\"closeLane\" type=\"radio\" [value]=\"lane.id\" [(ngModel)]=\"laneToCloseId\" required>\r\n        <label for=\"closeLane-{{lane.id}}\">\r\n          <span class=\"color-palette-item lane-{{ lane.color ? lane.color.toLowerCase() : 'blank' }}\"></span>\r\n          {{lane.name}}\r\n        </label>\r\n      </div>\r\n    </div>\r\n    <footer class=\"cp-modal__footer\">\r\n      <button class=\"flat black\" (click)=\"modalService.modalRef.hide()\">CANCEL</button>\r\n      <button class=\"flat accent shadow\" [disabled]=\"!laneToCloseId\" (click)=\"closeLane(laneToCloseId); modalService.modalRef.hide()\">ACCEPT</button>\r\n    </footer>\r\n  </form>\r\n</ng-template>\r\n\r\n<!-- MODAL: Close lane confirmation -->\r\n<ng-template #closeLaneModal>\r\n  <form class=\"cp-modal\">\r\n    <header class=\"cp-modal__header\">\r\n      <h5 class=\"cp-modal__title\">Close Lane</h5>\r\n    </header>\r\n\r\n    <div class=\"cp-modal__content\">\r\n      <p class=\"cp-modal__text\">Are you sure you want to close the Lane?</p>\r\n    </div>\r\n    <footer class=\"cp-modal__footer\">\r\n      <button class=\"flat black\" (click)=\"modalService.modalRef.hide()\">CANCEL</button>\r\n      <button class=\"flat accent shadow\"  (click)=\"closeLane(laneToCloseId); modalService.modalRef.hide()\">ACCEPT</button>\r\n    </footer>\r\n  </form>\r\n</ng-template>\r\n"

/***/ }),

/***/ "./src/app/modules/scanner/scanned-students-list/scanned-students-list.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ScannedStudentsListComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__scanner_service__ = __webpack_require__("./src/app/modules/scanner/scanner.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_scanning_http_hub_service__ = __webpack_require__("./src/app/services/scanning-http-hub.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_loader_service__ = __webpack_require__("./src/app/services/loader.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__models_card_with_students_model__ = __webpack_require__("./src/app/models/card-with-students.model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_notification_service__ = __webpack_require__("./src/app/services/notification.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services_modal_service__ = __webpack_require__("./src/app/services/modal.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var ScannedStudentsListComponent = (function () {
    function ScannedStudentsListComponent(scannerService, scanningHttpHubService, loaderService, notificationService, modalService) {
        this.scannerService = scannerService;
        this.scanningHttpHubService = scanningHttpHubService;
        this.loaderService = loaderService;
        this.notificationService = notificationService;
        this.modalService = modalService;
    }
    ScannedStudentsListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.formatCards(true);
        this.generateAvailableLanesOptions();
        this.scannerService.scannedStudentsSubject.subscribe(function (scannedStudents) {
            _this.formatCards(true);
        });
        // set lane to close for multiple scanner mode
        this.laneToCloseId = this.scannerService.scanningMode === 'multiple' && this.scannerService.assignedLanes[0].id;
    };
    /**
     * Formatting cards for view (merge students with same parent license in one car)
     * and add isEditable flag for each card
     * @param  {boolean} rebuild - set last card as editable
     */
    ScannedStudentsListComponent.prototype.formatCards = function (rebuild) {
        var _this = this;
        var isAllEditable = false; // debagging mode, FALSE in production
        this.formatedCards = [];
        var uniqueParent = [];
        this.scannerService.scannedStudents.forEach(function (student) {
            if (student.parentLicense) {
                // if student
                if (uniqueParent.indexOf(student.parentLicense) === -1) {
                    uniqueParent.push(student.parentLicense);
                    var card = new __WEBPACK_IMPORTED_MODULE_4__models_card_with_students_model__["a" /* CardWithStudents */]([], student.lane, student.parentLicense, student.parentName, student.parentId, student.flightNumber);
                    card.students.push(new __WEBPACK_IMPORTED_MODULE_4__models_card_with_students_model__["b" /* StudentInCard */](student.studentId, student.name, student.cardId));
                    _this.formatedCards.push(card);
                }
                else {
                    var cardIndex = _this.formatedCards.findIndex(function (formatedStudent) { return formatedStudent.parentLicense === student.parentLicense; });
                    _this.formatedCards[cardIndex].students.push(new __WEBPACK_IMPORTED_MODULE_4__models_card_with_students_model__["b" /* StudentInCard */](student.studentId, student.name, student.cardId));
                }
                _this.formatedCards.forEach(function (card, index) {
                    if (rebuild) {
                        card.isEditable = (_this.formatedCards.length - 1) === index ? true : isAllEditable;
                    }
                    else {
                        card.isEditable = isAllEditable;
                    }
                });
            }
            else {
                // if notification
                _this.formatedCards.push(student);
            }
        });
        this.formatedCards.reverse();
    };
    /**
     * Remove students from card by card index or remove specific student by card id
     */
    ScannedStudentsListComponent.prototype.removeScannedStudents = function (params) {
        var _this = this;
        this.loaderService.displayMini(true);
        var studentsToDelete = [];
        if (params.cardId) {
            studentsToDelete = [params.cardId];
        }
        else {
            this.formatedCards[params.cardIndex].students.forEach(function (student) {
                studentsToDelete.push(student.cardId);
            });
        }
        this.scanningHttpHubService.removeScannedStudents(studentsToDelete).subscribe(function () {
            studentsToDelete.forEach(function (id) {
                _this.scannerService.scannedStudents.splice(_this.scannerService.scannedStudents.findIndex(function (student) { return student.cardId === id; }), 1);
            });
            _this.formatCards();
            _this.loaderService.displayMini(false);
        });
    };
    ScannedStudentsListComponent.prototype.moveStudentsToLane = function (cardIndex, laneId) {
        var _this = this;
        this.loaderService.displayMini(true);
        var studentsToMoveIds = this.formatedCards[cardIndex].students.map(function (student) { return student.cardId; });
        this.scanningHttpHubService.moveStudentsToLane(studentsToMoveIds, laneId).subscribe(function () {
            var newLane = _this.scannerService.assignedLanes.find(function (lane) { return lane.id === laneId; });
            _this.formatedCards[cardIndex + 1].lane = newLane;
            studentsToMoveIds.forEach(function (id) {
                _this.scannerService.scannedStudents.find(function (st) { return st.cardId === id; }).lane = newLane;
            });
            _this.loaderService.displayMini(false);
        });
    };
    /**
     * Generate change lane dropdown options for single scanner mode
     */
    ScannedStudentsListComponent.prototype.generateAvailableLanesOptions = function () {
        var _this = this;
        this.assignedLanesOptions = [];
        this.assignedLanesOptions.push({
            value: 0,
            label: 'Alternating Cars'
        });
        this.scannerService.assignedLanes.forEach(function (lane) {
            _this.assignedLanesOptions.push({
                value: lane.id,
                label: lane.name
            });
        });
    };
    /**
     * Change scanning type or choose active lane for single scanner mode
     */
    ScannedStudentsListComponent.prototype.changeScanningType = function (event) {
        var _this = this;
        this.loaderService.displayMini(true);
        this.scanningHttpHubService.setScanningType(event.value).subscribe(function () {
            _this.scannerService.scanningTypeId = event.value;
            _this.loaderService.displayMini(false);
        });
    };
    /**
     * Close active lane manualy
     */
    ScannedStudentsListComponent.prototype.closeLane = function (laneId) {
        var _this = this;
        this.loaderService.displayMini(true);
        this.scanningHttpHubService.closeLane(laneId).subscribe(function () {
            _this.formatCards();
            _this.loaderService.displayMini(false);
        });
    };
    ScannedStudentsListComponent.prototype.getLanesToMove = function (assignedLaneId) {
        return this.scannerService.assignedLanes.filter(function (lane) { return lane.id !== assignedLaneId; });
    };
    ScannedStudentsListComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-scanned-students-list',
            template: __webpack_require__("./src/app/modules/scanner/scanned-students-list/scanned-students-list.component.html")
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__scanner_service__["a" /* ScannerService */],
            __WEBPACK_IMPORTED_MODULE_2__services_scanning_http_hub_service__["a" /* ScanningHttpHubService */],
            __WEBPACK_IMPORTED_MODULE_3__services_loader_service__["a" /* LoaderService */],
            __WEBPACK_IMPORTED_MODULE_5__services_notification_service__["a" /* NotificationService */],
            __WEBPACK_IMPORTED_MODULE_6__services_modal_service__["a" /* ModalService */]])
    ], ScannedStudentsListComponent);
    return ScannedStudentsListComponent;
}());



/***/ }),

/***/ "./src/app/modules/scanner/scanner-entry/scanner-entry.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"scanner-view full-height-page\" [ngClass]=\"{'scan-successfully': scannerService.scanSuccessfully, 'scan-not-successfully': scannerService.scanNotSuccessfully}\">\r\n  <div class=\"scanner-view__inner\">\r\n    <div class=\"scanner-view__content\">\r\n      <div class=\"scanner-view__icon\">\r\n        <img src=\"assets/images/scanner.svg\" alt=\"Scanner Icon\" *ngIf=\"!scannerService.isInScanMode\">\r\n        <img class=\"image-offset\" src=\"assets/images/scan.gif\" alt=\"Scanner animated Icon\" *ngIf=\"scannerService.isInScanMode\">\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"scanner-view__text\" *ngIf=\"scannerService.scanningMode === 'multiple' && scannerService.assignedLanes.length\">\r\n      <span style=\"font-weight:600;\">Assigned lane: </span>\r\n      <div class=\"scanner-view__assigned-lane\">\r\n        <div class=\"color-palette-item color-palette-item--{{ scannerService.assignedLanes[0].color.toLowerCase() }}\"></div>\r\n        {{ scannerService.assignedLanes[0].name }}\r\n      </div>\r\n    </div>\r\n\r\n    <label class=\"flat accent scanner-view__scan-toggle\" for=\"scan-text\" *ngIf=\"!scannerService.isInScanMode && scannerService.assignedLanes.length\">START SCANNING</label>\r\n\r\n    <div class=\"scanner-view__text scanner-view__text--no-lane\" style=\"font-weight:600;\" *ngIf=\"!scannerService.assignedLanes.length\">\r\n        You are currently not assigned to a lane. Please contact the School Administrator.\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/modules/scanner/scanner-entry/scanner-entry.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ScannerEntryComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__scanner_service__ = __webpack_require__("./src/app/modules/scanner/scanner.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ScannerEntryComponent = (function () {
    function ScannerEntryComponent(scannerService) {
        this.scannerService = scannerService;
    }
    ScannerEntryComponent.prototype.ngOnInit = function () { };
    ScannerEntryComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-scanner-entry',
            template: __webpack_require__("./src/app/modules/scanner/scanner-entry/scanner-entry.component.html")
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__scanner_service__["a" /* ScannerService */]])
    ], ScannerEntryComponent);
    return ScannerEntryComponent;
}());



/***/ }),

/***/ "./src/app/modules/scanner/scanner.component.html":
/***/ (function(module, exports) {

module.exports = "<app-scanner-entry *ngIf=\"isScannerInitDataReady && !scannerService.scannedStudents.length\"></app-scanner-entry>\r\n<app-scanned-students-list *ngIf=\"isScannerInitDataReady && scannerService.scannedStudents.length\"></app-scanned-students-list>\r\n\r\n<form class=\"scanner-form\" (ngSubmit)=\"scannerService.sendScanText()\">\r\n  <input type=\"text\" name=\"scan-text\" id=\"scan-text\" readonly [(ngModel)]=\"scannerService.scanText\" (focus)=\"scannerService.toggleScanMode()\" (blur)=\"scannerService.toggleScanMode()\" pInputText (keypress)=\"scannerService.buildScanText($event)\">\r\n</form>\r\n\r\n\r\n\r\n"

/***/ }),

/***/ "./src/app/modules/scanner/scanner.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ScannerComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__scanner_service__ = __webpack_require__("./src/app/modules/scanner/scanner.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_scanning_http_hub_service__ = __webpack_require__("./src/app/services/scanning-http-hub.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_loader_service__ = __webpack_require__("./src/app/services/loader.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_notification_service__ = __webpack_require__("./src/app/services/notification.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ScannerComponent = (function () {
    function ScannerComponent(scannerService, scanningHttpHubService, loaderService, notificationService) {
        this.scannerService = scannerService;
        this.scanningHttpHubService = scanningHttpHubService;
        this.loaderService = loaderService;
        this.notificationService = notificationService;
    }
    ScannerComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.getInitialScanningData();
        this.scanningHttpHubService.connect().then(function () {
            _this.scanningHttpHubService.sendCurrentUserId();
            _this.getAndPushScannedStudent();
            _this.showNotifications();
        });
    };
    ScannerComponent.prototype.ngOnDestroy = function () {
        this.scanningHttpHubService.stopConnect();
    };
    /**
     * Get initital data for scanning
     */
    ScannerComponent.prototype.getInitialScanningData = function () {
        var _this = this;
        this.loaderService.loadAsync([
            this.scanningHttpHubService.getScannerInitData()
        ], function (res) {
            _this.scannerService.scannedStudents = res[0].scannedStudents;
            _this.scannerService.scanningMode = res[0].scanningMode;
            _this.scannerService.assignedLanes = res[0].assignedLanes;
            _this.isScannerInitDataReady = true;
        });
    };
    /**
     * Get and push new scanned student to students array
     */
    ScannerComponent.prototype.getAndPushScannedStudent = function () {
        var _this = this;
        this.scanningHttpHubService.subscribeScannedStudent().subscribe(function (student) {
            if (student) {
                _this.scannerService.scannedStudents.push(student);
                _this.scannerService.scannedStudentsSubject.next(_this.scannerService.scannedStudents);
            }
        });
    };
    /**
     * Subscribe and show flight notifications
     */
    ScannerComponent.prototype.showNotifications = function () {
        var _this = this;
        this.scanningHttpHubService.subscribeFlightNotifications().subscribe(function (msg) {
            if (msg) {
                var randomId = Math.random();
                _this.scannerService.scannedStudents.push({ randomId: randomId, message: msg });
                _this.scannerService.scannedStudentsSubject.next(_this.scannerService.scannedStudents);
                setTimeout(function (messageId) {
                    return function () {
                        var messageIndex = this.scannerService.scannedStudents.findIndex(function (item) { return item.randomId && item.randomId === messageId; });
                        this.scannerService.scannedStudents.splice(messageIndex, 1);
                        this.scannerService.scannedStudentsSubject.next(this.scannerService.scannedStudents);
                    };
                }(randomId).bind(_this), 10000);
            }
        });
        this.scanningHttpHubService.subscribeDisconnectScanner().subscribe(function (msg) {
            console.log(msg);
            //reload scanner if change school settings
            window.location.reload();
        });
    };
    ScannerComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-scanner',
            template: __webpack_require__("./src/app/modules/scanner/scanner.component.html")
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__scanner_service__["a" /* ScannerService */],
            __WEBPACK_IMPORTED_MODULE_2__services_scanning_http_hub_service__["a" /* ScanningHttpHubService */],
            __WEBPACK_IMPORTED_MODULE_3__services_loader_service__["a" /* LoaderService */],
            __WEBPACK_IMPORTED_MODULE_4__services_notification_service__["a" /* NotificationService */]])
    ], ScannerComponent);
    return ScannerComponent;
}());



/***/ }),

/***/ "./src/app/modules/scanner/scanner.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ScannerModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__scanner_component__ = __webpack_require__("./src/app/modules/scanner/scanner.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__scanner_routing__ = __webpack_require__("./src/app/modules/scanner/scanner.routing.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__scanned_students_list_scanned_students_list_component__ = __webpack_require__("./src/app/modules/scanner/scanned-students-list/scanned-students-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__scanner_entry_scanner_entry_component__ = __webpack_require__("./src/app/modules/scanner/scanner-entry/scanner-entry.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__scanner_service__ = __webpack_require__("./src/app/modules/scanner/scanner.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_primeng_primeng__ = __webpack_require__("./node_modules/primeng/primeng.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_primeng_primeng___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_primeng_primeng__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









var ScannerModule = (function () {
    function ScannerModule() {
    }
    ScannerModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_2__angular_common__["CommonModule"],
                __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormsModule"],
                __WEBPACK_IMPORTED_MODULE_4__scanner_routing__["a" /* ScannerRoutes */],
                __WEBPACK_IMPORTED_MODULE_8_primeng_primeng__["DropdownModule"]
            ],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__scanner_component__["a" /* ScannerComponent */],
                __WEBPACK_IMPORTED_MODULE_5__scanned_students_list_scanned_students_list_component__["a" /* ScannedStudentsListComponent */],
                __WEBPACK_IMPORTED_MODULE_6__scanner_entry_scanner_entry_component__["a" /* ScannerEntryComponent */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_7__scanner_service__["a" /* ScannerService */]
            ]
        })
    ], ScannerModule);
    return ScannerModule;
}());



/***/ }),

/***/ "./src/app/modules/scanner/scanner.routing.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ScannerRoutes; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__navigation_guards_auth_guard__ = __webpack_require__("./src/app/navigation-guards/auth.guard.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__scanner_component__ = __webpack_require__("./src/app/modules/scanner/scanner.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__models_roles_enum__ = __webpack_require__("./src/app/models/roles.enum.ts");




var routes = [
    {
        path: 'scanner',
        component: __WEBPACK_IMPORTED_MODULE_2__scanner_component__["a" /* ScannerComponent */],
        canActivate: [
            __WEBPACK_IMPORTED_MODULE_1__navigation_guards_auth_guard__["a" /* AuthGuard */]
        ],
        data: {
            expectedRoles: [__WEBPACK_IMPORTED_MODULE_3__models_roles_enum__["a" /* Roles */].scanner]
        }
    },
];
var ScannerRoutes = __WEBPACK_IMPORTED_MODULE_0__angular_router__["RouterModule"].forChild(routes);


/***/ }),

/***/ "./src/app/modules/scanner/scanner.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ScannerService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__models_scanner_input__ = __webpack_require__("./src/app/models/scanner-input.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_notification_service__ = __webpack_require__("./src/app/services/notification.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_scanning_http_hub_service__ = __webpack_require__("./src/app/services/scanning-http-hub.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs__ = __webpack_require__("./node_modules/rxjs/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_loader_service__ = __webpack_require__("./src/app/services/loader.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var ScannerService = (function () {
    function ScannerService(socketService, notificationService, loaderService) {
        this.socketService = socketService;
        this.notificationService = notificationService;
        this.loaderService = loaderService;
        this.scanText = '';
        this.scannedStudentsSubject = new __WEBPACK_IMPORTED_MODULE_4_rxjs__["Subject"](); // can be ScannedStudent[] | ScannerNotification[]
        this.scannedStudents = [];
    }
    ScannerService.prototype.sendScanText = function () {
        var _this = this;
        var scanArray = this.scanText.split('-').map(function (id) { return parseInt(id); });
        var isScanSuccessfully = true;
        // scanner input validation
        if (scanArray.length === 2) {
            this.scannerInput = new (__WEBPACK_IMPORTED_MODULE_1__models_scanner_input__["a" /* ScannerInput */].bind.apply(__WEBPACK_IMPORTED_MODULE_1__models_scanner_input__["a" /* ScannerInput */], [void 0].concat(scanArray)))();
            for (var key in this.scannerInput) {
                if (isNaN(this.scannerInput[key]) || typeof (this.scannerInput[key]) !== 'number') {
                    // scanned data is corrupted
                    isScanSuccessfully = false;
                }
            }
        }
        else {
            // scanned data is corrupted
            isScanSuccessfully = false;
        }
        if (isScanSuccessfully) {
            this.loaderService.displayMini(true);
            this.socketService.sendScannerInput(this.scannerInput).subscribe(function () {
                _this.loaderService.displayMini(false);
            });
        }
        else {
            this.notificationService.show("Barcode not found", true, true);
            this.scanNotSuccessfully = true;
            window.setTimeout(function () { _this.scanNotSuccessfully = false; }, 300);
        }
        // reset scaning data
        this.scanText = '';
        this.scannerInput;
    };
    ScannerService.prototype.toggleScanMode = function () {
        this.isInScanMode = !this.isInScanMode;
    };
    ScannerService.prototype.buildScanText = function (event) {
        if (event.key !== "Enter") {
            this.scanText += event.key;
        }
    };
    ScannerService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__services_scanning_http_hub_service__["a" /* ScanningHttpHubService */],
            __WEBPACK_IMPORTED_MODULE_2__services_notification_service__["a" /* NotificationService */],
            __WEBPACK_IMPORTED_MODULE_5__services_loader_service__["a" /* LoaderService */]])
    ], ScannerService);
    return ScannerService;
}());



/***/ }),

/***/ "./src/app/modules/share-module/paginator/paginator.component.html":
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"itemsTotal > 0\" class=\"pager-container\">\r\n  <div class=\"pager-info-text\">\r\n    <span>Showing </span><span class=\"bold\">{{rowsPerPage*selectedPage+1}} - {{itemsTotal / rowsPerPage < 1 ? itemsTotal : (selectedPage + 1) * rowsPerPage > itemsTotal ? selectedPage * rowsPerPage + itemsTotal - selectedPage * rowsPerPage : (selectedPage + 1) * rowsPerPage}}</span><span> of </span><span class=\"bold\">{{itemsTotal}}</span>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/modules/share-module/paginator/paginator.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PaginatorComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var PaginatorComponent = (function () {
    function PaginatorComponent() {
        this.selectedPage = 0;
        this.rowsPerPage = 10;
    }
    PaginatorComponent.prototype.ngOnInit = function () {
    };
    PaginatorComponent.prototype.pageChanged = function (e) {
        console.log('Got from pager: ');
        console.log(e);
        //this.selectedPage = pageNumber;
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Number)
    ], PaginatorComponent.prototype, "itemsTotal", void 0);
    PaginatorComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-paginator',
            template: __webpack_require__("./src/app/modules/share-module/paginator/paginator.component.html")
        }),
        __metadata("design:paramtypes", [])
    ], PaginatorComponent);
    return PaginatorComponent;
}());



/***/ }),

/***/ "./src/app/modules/share-module/search-bar/search-bar.component.html":
/***/ (function(module, exports) {

module.exports = "<form #searchBarForm=\"ngForm\" #searchBar class=\"search-bar\" (submit)=\"submitSearch()\">\r\n  <button class=\"search-bar__submit\" type=\"submit\" (click)=\"openSearchBar($event, searchInput)\" [disabled]=\"searchBarForm.invalid || searchBarForm.pending\">\r\n    <i class=\"material-icons\">search</i>\r\n  </button>\r\n  <input #searchInput class=\"search-bar__input\" minlength=\"3\" [(ngModel)]=\"searchText\" name=\"searchText\" type=\"text\" placeholder=\"Search\">\r\n</form>\r\n"

/***/ }),

/***/ "./src/app/modules/share-module/search-bar/search-bar.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SearchBarComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var SearchBarComponent = (function () {
    function SearchBarComponent() {
        this.searchEnd = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.searchText = '';
        this.isSearchOpen = false;
    }
    SearchBarComponent.prototype.ngOnInit = function () {
    };
    SearchBarComponent.prototype.openSearchBar = function (e, input) {
        var _this = this;
        this.searchBar.nativeElement.classList.add('is-open');
        input.focus();
        setTimeout(function () { return _this.isSearchOpen = true; }, 250);
    };
    SearchBarComponent.prototype.closeSearchBar = function (event) {
        if (!this.searchBar.nativeElement.contains(event.target)) {
            this.searchBar.nativeElement.classList.remove('is-open');
            this.isSearchOpen = false;
        }
    };
    SearchBarComponent.prototype.submitSearch = function () {
        if (!this.isSearchOpen)
            return;
        this.search();
    };
    SearchBarComponent.prototype.search = function () {
        var _this = this;
        this.filteredData = this.searchText ? this.filteredData : this.data;
        var isMatch = false;
        this.filteredData = this.data.filter(function (item) {
            var searchText = _this.searchText.toLocaleLowerCase();
            isMatch = false;
            _this.filters.forEach(function (filter) {
                if (String(item[filter]).toLowerCase().replace(/,/g, '').search(searchText) !== -1) {
                    isMatch = true;
                }
            });
            if (_this.nestedFilters !== undefined) {
                item[_this.nestedFilters.propWithArray]
                    .forEach(function (el) { return _this.nestedFilters.filters.forEach(function (filter) {
                    if (String(el[filter]).toLowerCase().replace(/,/g, '').search(searchText) !== -1) {
                        isMatch = true;
                    }
                }); });
            }
            return isMatch;
        });
        this.searchEnd.emit(this.filteredData);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], SearchBarComponent.prototype, "data", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Array)
    ], SearchBarComponent.prototype, "filters", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], SearchBarComponent.prototype, "nestedFilters", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"])
    ], SearchBarComponent.prototype, "searchEnd", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('searchBar'),
        __metadata("design:type", Object)
    ], SearchBarComponent.prototype, "searchBar", void 0);
    SearchBarComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'search-bar',
            template: __webpack_require__("./src/app/modules/share-module/search-bar/search-bar.component.html"),
            host: {
                '(document:click)': 'closeSearchBar($event)',
            }
        }),
        __metadata("design:paramtypes", [])
    ], SearchBarComponent);
    return SearchBarComponent;
}());



/***/ }),

/***/ "./src/app/modules/share-module/share-module.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\r\n  share-module works!\r\n</p>"

/***/ }),

/***/ "./src/app/modules/share-module/share-module.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ShareModuleComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ShareModuleComponent = (function () {
    function ShareModuleComponent() {
    }
    ShareModuleComponent.prototype.ngOnInit = function () {
    };
    ShareModuleComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-share-module',
            template: __webpack_require__("./src/app/modules/share-module/share-module.component.html")
        }),
        __metadata("design:paramtypes", [])
    ], ShareModuleComponent);
    return ShareModuleComponent;
}());



/***/ }),

/***/ "./src/app/modules/share-module/share-module.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ShareModuleModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__share_module_component__ = __webpack_require__("./src/app/modules/share-module/share-module.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__search_bar_search_bar_component__ = __webpack_require__("./src/app/modules/share-module/search-bar/search-bar.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__paginator_paginator_component__ = __webpack_require__("./src/app/modules/share-module/paginator/paginator.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__directives_white_space_validation_directive__ = __webpack_require__("./src/app/directives/white-space-validation.directive.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var ShareModuleModule = (function () {
    function ShareModuleModule() {
    }
    ShareModuleModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"],
                __WEBPACK_IMPORTED_MODULE_4__angular_forms__["FormsModule"]
            ],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__share_module_component__["a" /* ShareModuleComponent */],
                __WEBPACK_IMPORTED_MODULE_3__search_bar_search_bar_component__["a" /* SearchBarComponent */],
                __WEBPACK_IMPORTED_MODULE_5__paginator_paginator_component__["a" /* PaginatorComponent */],
                __WEBPACK_IMPORTED_MODULE_6__directives_white_space_validation_directive__["a" /* WhiteSpaceValidator */]
            ],
            exports: [__WEBPACK_IMPORTED_MODULE_3__search_bar_search_bar_component__["a" /* SearchBarComponent */], __WEBPACK_IMPORTED_MODULE_5__paginator_paginator_component__["a" /* PaginatorComponent */], __WEBPACK_IMPORTED_MODULE_6__directives_white_space_validation_directive__["a" /* WhiteSpaceValidator */]]
        })
    ], ShareModuleModule);
    return ShareModuleModule;
}());



/***/ }),

/***/ "./src/app/navigation-guards/auth.guard.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthGuard; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_auth_service__ = __webpack_require__("./src/app/services/auth.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AuthGuard = (function () {
    function AuthGuard(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    AuthGuard.prototype.canActivate = function (route, state) {
        if (!this.authService.authenticated) {
            this.router.navigate(['/login']);
            console.log('Routing not authorized');
            return false;
        }
        else if (route.data.expectedRoles) {
            if (route.data.expectedRoles.indexOf(localStorage.getItem('role')) === -1) {
                this.router.navigate(['/access-denied']);
                console.log('Routing not permitted');
                return false;
            }
        }
        return true;
    };
    AuthGuard = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */], __WEBPACK_IMPORTED_MODULE_1__angular_router__["Router"]])
    ], AuthGuard);
    return AuthGuard;
}());



/***/ }),

/***/ "./src/app/services/HttpInterceptors/AuthHttpClientInterceptor.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthHttpInterceptor; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__auth_service__ = __webpack_require__("./src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__models_roles_enum__ = __webpack_require__("./src/app/models/roles.enum.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AuthHttpInterceptor = (function () {
    //constructor(public auth: AuthService) { }
    function AuthHttpInterceptor(injector) {
        this.injector = injector;
    }
    AuthHttpInterceptor.prototype.intercept = function (request, next) {
        var auth = this.injector.get(__WEBPACK_IMPORTED_MODULE_0__auth_service__["a" /* AuthService */]);
        if (window.localStorage.getItem('role') === __WEBPACK_IMPORTED_MODULE_2__models_roles_enum__["a" /* Roles */].superAdmin && window.localStorage.getItem('selectedSchool')) {
            request = request.clone({
                setHeaders: {
                    Authorization: "Bearer " + auth.token,
                    schoolId: window.localStorage.getItem('selectedSchool'),
                    'Cache-Control': 'no-cache',
                    Pragma: 'no-cache',
                    'If-Modified-Since': 'Mon, 26 Jul 1997 05:00:00 GMT'
                }
            });
        }
        else {
            request = request.clone({
                setHeaders: {
                    Authorization: "Bearer " + auth.token,
                    'Cache-Control': 'no-cache',
                    Pragma: 'no-cache',
                    'If-Modified-Since': 'Mon, 26 Jul 1997 05:00:00 GMT'
                }
            });
        }
        return next.handle(request);
    };
    AuthHttpInterceptor = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_core__["Injector"]])
    ], AuthHttpInterceptor);
    return AuthHttpInterceptor;
}());



/***/ }),

/***/ "./src/app/services/archive.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ArchiveService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ArchiveService = (function () {
    function ArchiveService(http, datePipe) {
        this.http = http;
        this.datePipe = datePipe;
    }
    /**
     * Get list of archived dismissal information
     */
    ArchiveService.prototype.getArchiveList = function (date, studentName, startDay) {
        // Setup date query parameter
        var params = new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["e" /* HttpParams */]()
            .set('ArchiveDate', this.datePipe.transform(date, 'yyyy-MM-dd'))
            .set('StudentName', studentName)
            .set('StartDay', this.datePipe.transform(startDay, 'yyyy-MM-dd'));
        return this.http.get('api/Dismissal/Archive', { params: params });
    };
    /**
     * Export archive by date in excel
     */
    ArchiveService.prototype.downloadArchiveList = function (date, name, startDay, callback) {
        var _this = this;
        this.getArchiveListFile(date, name, startDay).subscribe(function (response) {
            var downloadUrl = URL.createObjectURL(response);
            var downLoadLink = document.createElement("a");
            document.body.appendChild(downLoadLink);
            downLoadLink.style.display = "none";
            downLoadLink.href = downloadUrl;
            downLoadLink.download = "archive-" + _this.datePipe.transform(date, 'yyyy-MM-dd') + ".xlsx";
            downLoadLink.click();
            window.URL.revokeObjectURL(downloadUrl);
            callback && callback();
        });
    };
    ArchiveService.prototype.getArchiveListFile = function (date, name, startDay) {
        if (name === "") {
            return this.http.get("api/Dismissal/ExportArchive/" + this.datePipe.transform(date, 'yyyy-MM-dd'), { responseType: "blob" });
        }
        else {
            //let startDay = startDay: Date === "" ? 0 : Number(lastDays);
            return this.http.get("api/Dismissal/ExportFilteredArchive/" + this.datePipe.transform(date, 'yyyy-MM-dd') + "/" + name + "/" + this.datePipe.transform(startDay, 'yyyy-MM-dd'), { responseType: "blob" });
        }
    };
    ArchiveService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["b" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_2__angular_common__["DatePipe"]])
    ], ArchiveService);
    return ArchiveService;
}());



/***/ }),

/***/ "./src/app/services/auth.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_BehaviorSubject__ = __webpack_require__("./node_modules/rxjs/_esm5/BehaviorSubject.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_auth0_js__ = __webpack_require__("./node_modules/auth0-js/src/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_auth0_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_auth0_js__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("./src/environments/environment.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__user_management_service__ = __webpack_require__("./src/app/services/user-management.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__models_roles_enum__ = __webpack_require__("./src/app/models/roles.enum.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var AuthService = (function () {
    function AuthService(router, http, userService) {
        // If authenticated, set local profile property and update login status subject
        // If token is expired, log out to clear any data from localStorage
        this.router = router;
        this.http = http;
        this.userService = userService;
        // Create Auth0 web auth instance
        this.auth0 = new __WEBPACK_IMPORTED_MODULE_2_auth0_js__["WebAuth"]({
            clientID: __WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* AUTH_CONFIG */].CLIENT_ID,
            domain: __WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* AUTH_CONFIG */].CLIENT_DOMAIN,
            responseType: 'token id_token',
            redirectUri: __WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* AUTH_CONFIG */].REDIRECT,
            audience: __WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* AUTH_CONFIG */].AUDIENCE,
            scope: __WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* AUTH_CONFIG */].SCOPE
        });
        this.loggedIn$ = new __WEBPACK_IMPORTED_MODULE_1_rxjs_BehaviorSubject__["a" /* BehaviorSubject */](this.loggedIn);
        if (this.authenticated) {
            if (localStorage.getItem('profile') && localStorage.getItem('profile') != 'undefined')
                this.userProfile = JSON.parse(localStorage.getItem('profile'));
            this.setLoggedIn(true);
        }
        else {
            this.logout();
        }
    }
    AuthService.prototype.setLoggedIn = function (value) {
        // Update login status subject
        this.loggedIn$.next(value);
        this.loggedIn = value;
    };
    //login() {
    //  // Auth0 authorize request
    //  this.auth0.authorize();
    //}
    AuthService.prototype.login = function (username, password, remember, callback) {
        var self = this;
        return this.auth0.client.login({
            realm: 'Username-Password-Authentication',
            username: username,
            password: password,
            scope: 'openid user_metadata profile read:messages',
            audience: __WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* AUTH_CONFIG */].AUDIENCE
        }, function (err, authResult) {
            if (!err) {
                self._setSession(authResult, remember);
                self._getProfile(authResult, function () {
                    self._setCurrentUserRole(function () {
                        self.router.navigate([self.getEntryRoute()]);
                        callback && callback(true);
                    });
                });
                self.isPasswordCorrect = true;
            }
            else {
                self.isPasswordCorrect = false;
                callback && callback(false);
            }
        });
    };
    AuthService.prototype.getEntryRoute = function () {
        switch (localStorage.getItem('role')) {
            case __WEBPACK_IMPORTED_MODULE_7__models_roles_enum__["a" /* Roles */].superAdmin:
                return '/school-accounts';
            case __WEBPACK_IMPORTED_MODULE_7__models_roles_enum__["a" /* Roles */].scanner:
                return '/scanner';
            case __WEBPACK_IMPORTED_MODULE_7__models_roles_enum__["a" /* Roles */].classroomTeacher:
            case __WEBPACK_IMPORTED_MODULE_7__models_roles_enum__["a" /* Roles */].dismissalTeacher:
                return '/flights';
            case __WEBPACK_IMPORTED_MODULE_7__models_roles_enum__["a" /* Roles */].parent:
                return '/parents-dashboard';
            default:
                return '/archive';
        }
    };
    AuthService.prototype.matchRoles = function () {
        var rest = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            rest[_i] = arguments[_i];
        }
        // return true if match one of role
        var currentRole = localStorage.getItem('role');
        return rest.some(function (role) { return currentRole === role; });
    };
    AuthService.prototype.handleAuth = function () {
        var _this = this;
        // When Auth0 hash parsed, get profile
        this.auth0.parseHash(window.location.hash, function (err, authResult) {
            if (authResult && authResult.accessToken && authResult.idToken) {
                window.location.hash = '';
                _this._getProfile(authResult);
            }
            else if (err) {
                console.error("Error: " + err.error);
            }
            _this.router.navigate(['/']);
        });
    };
    AuthService.prototype._getProfile = function (authResult, callback) {
        var _this = this;
        // Use access token to retrieve user's profile and set session
        this.auth0.client.userInfo(authResult.accessToken, function (err, profile) {
            _this._setSession(authResult, profile);
            !callback || callback();
        });
    };
    AuthService.prototype._setSession = function (authResult, profile) {
        var expTime = authResult.expiresIn * 1000 + Date.now();
        // Save session data and update login status subject
        localStorage.setItem('token', authResult.accessToken);
        localStorage.setItem('id_token', authResult.idToken);
        localStorage.setItem('profile', JSON.stringify(profile));
        localStorage.setItem('expires_at', JSON.stringify(expTime));
        this.userProfile = profile;
        this.setLoggedIn(true);
    };
    AuthService.prototype._setCurrentUserRole = function (callback) {
        this.userService.getUserInfo().subscribe(function (res) {
            localStorage.setItem('role', res.role);
            localStorage.setItem('userId', res.userId.toString());
            callback && callback();
        });
    };
    AuthService.prototype.logout = function (redirectToLogin) {
        // Remove tokens and profile and update login status subject
        localStorage.removeItem('token');
        localStorage.removeItem('id_token');
        localStorage.removeItem('profile');
        localStorage.removeItem('expires_at');
        localStorage.removeItem('role');
        localStorage.removeItem('selectedSchool');
        localStorage.removeItem('selectedSchoolName');
        localStorage.removeItem('userId');
        this.userProfile = undefined;
        this.setLoggedIn(false);
        if (redirectToLogin)
            this.router.navigate(['/login']);
    };
    Object.defineProperty(AuthService.prototype, "authenticated", {
        get: function () {
            // Check if current date is greater than expiration
            var expiresAt = JSON.parse(localStorage.getItem('expires_at'));
            return Date.now() < expiresAt;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AuthService.prototype, "token", {
        get: function () {
            return localStorage.getItem('token');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AuthService.prototype, "auth0UserId", {
        get: function () {
            return JSON.parse(localStorage.getItem('profile')).sub;
        },
        enumerable: true,
        configurable: true
    });
    AuthService.prototype.resetPassword = function (email) {
        return this.http.get("/api/UserManagement/ResetPassword/" + email);
    };
    AuthService.prototype.setPassword = function (email, password) {
        return this.http.post("/api/UserManagement/SetUserPassword", { email: email, password: password });
    };
    AuthService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4__angular_router__["Router"], __WEBPACK_IMPORTED_MODULE_5__angular_common_http__["b" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_6__user_management_service__["a" /* UserManagementService */]])
    ], AuthService);
    return AuthService;
}());



/***/ }),

/***/ "./src/app/services/classrooms.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ClassroomsService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ClassroomsService = (function () {
    function ClassroomsService(http) {
        this.http = http;
        this.postJSONHeader = new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["d" /* HttpHeaders */]().set('Content-Type', 'application/json');
    }
    ClassroomsService.prototype.getClassroomsList = function () {
        return this.http.get("/api/Classroom/GetClassrooms");
    };
    ClassroomsService.prototype.getTeachersList = function () {
        return this.http.get("/api/Classroom/GetTeachers");
    };
    ClassroomsService.prototype.updateClassrooms = function (teachers) {
        return this.http.put("/api/Classroom/UpdateClassrooms/", teachers);
    };
    ClassroomsService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["b" /* HttpClient */]])
    ], ClassroomsService);
    return ClassroomsService;
}());



/***/ }),

/***/ "./src/app/services/create-edit-item.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CreateEditItemService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var CreateEditItemService = (function () {
    function CreateEditItemService() {
        this.isEditMode = false;
    }
    CreateEditItemService.prototype.getItemId = function (route, callback) {
        var _this = this;
        this._routeSub = route.params.subscribe(function (params) {
            _this.itemId = params['id'] ? +params['id'] : null;
            _this.checkMode();
            callback && callback();
        });
    };
    CreateEditItemService.prototype.checkMode = function () {
        this.isEditMode = this.itemId ? true : false;
    };
    CreateEditItemService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [])
    ], CreateEditItemService);
    return CreateEditItemService;
}());



/***/ }),

/***/ "./src/app/services/dismissal-cards.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DismissalCardsService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var DismissalCardsService = (function () {
    function DismissalCardsService(http) {
        this.http = http;
    }
    DismissalCardsService.prototype.getStudentsOfCurrentUser = function (id) {
        return this.http.get("api/Parent/GetStudentsForParent/" + id);
    };
    DismissalCardsService.prototype.getStudentsForAdmin = function () {
        return this.http.get("api/Parent/GetStudentsForAdmin");
    };
    DismissalCardsService.prototype.getListOfDismissalCards = function () {
        return this.http.get('api/Card/GetDismissalCards');
    };
    DismissalCardsService.prototype.getDismissalCardById = function (id) {
        return this.http.get("api/Card/GetDismissalCardById/" + id);
    };
    DismissalCardsService.prototype.createDismissalCard = function (card) {
        return this.http.post('api/Card/CreateDismissalCard', card);
    };
    DismissalCardsService.prototype.updateDismissalCard = function (card) {
        return this.http.put('api/Card/EditDismissalCard', card);
    };
    DismissalCardsService.prototype.deleteDismissalCard = function (id) {
        return this.http.delete("api/Card/DeleteDismissalCard/" + id);
    };
    DismissalCardsService.prototype.setDismissalCardsToActive = function (cardIds) {
        return this.http.put("/api/Card/EditDismissalCardPrinted", cardIds);
    };
    DismissalCardsService.prototype.getMainParents = function () {
        return this.http.get('/api/Card/GetMainParents');
    };
    DismissalCardsService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["b" /* HttpClient */]])
    ], DismissalCardsService);
    return DismissalCardsService;
}());



/***/ }),

/***/ "./src/app/services/file-server.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FileServerService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ng2_file_upload__ = __webpack_require__("./node_modules/ng2-file-upload/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ng2_file_upload___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_ng2_file_upload__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__loader_service__ = __webpack_require__("./src/app/services/loader.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__models_roles_enum__ = __webpack_require__("./src/app/models/roles.enum.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var FileServerService = (function () {
    function FileServerService(http, loaderService) {
        this.http = http;
        this.loaderService = loaderService;
        this.isValidFileExtension = true;
    }
    FileServerService.prototype.createUploader = function (url) {
        this.uploader = new __WEBPACK_IMPORTED_MODULE_2_ng2_file_upload__["FileUploader"]({
            url: url,
            headers: [
                { name: "Authorization", value: 'Bearer ' + localStorage.getItem('token') },
                { name: 'Accept', value: '*/*' }
            ],
            isHTML5: true,
            allowedFileType: [
                "application",
                "image",
                "video",
                "audio",
                "pdf",
                "compress",
                "doc",
                "xls",
                "ppt",
                "csv"
            ],
            removeAfterUpload: true,
            autoUpload: false,
            maxFileSize: 200 * 1024 * 1024,
        });
        if (window.localStorage.getItem('role') === __WEBPACK_IMPORTED_MODULE_4__models_roles_enum__["a" /* Roles */].superAdmin && window.localStorage.getItem('selectedSchool')) {
            this.uploader.options.headers.push({ name: "schoolId", value: window.localStorage.getItem('selectedSchool') });
        }
    };
    FileServerService.prototype.handleFileUploadEvents = function () {
        var _this = this;
        this.uploader.clearQueue();
        this.resetMessages();
        this.uploader.onAfterAddingFile = function (fileItem) {
            _this.uploadFile(fileItem);
        };
        this.uploader.onCompleteItem = function (item, response, status, headers) {
            _this.resetMessages();
            console.log(response);
            switch (status) {
                case 200: {
                    _this.isUploadSuccessfull = true;
                    _this.message = response;
                    break;
                }
                default: {
                    _this.isUploadFailed = true;
                    break;
                }
            }
            _this.uploader.clearQueue();
            _this.loaderService.displayMini(false);
        };
    };
    FileServerService.prototype.uploadFile = function (fileItem) {
        this.loaderService.displayMini(true);
        this.uploader.clearQueue();
        this.resetMessages();
        this.uploader.queue[0] = fileItem;
        this.isValidFileExtension = this.uploader.queue[0].file.name.includes("xlsx") /*|| this.uploader.queue[0].file.name.includes("csv")*/;
        if (this.isValidFileExtension) {
            this.uploader.uploadAll();
        }
        else {
            this.uploader.clearQueue();
            this.loaderService.displayMini(false);
        }
    };
    FileServerService.prototype.resetMessages = function () {
        this.isValidFileExtension = true;
        this.isUploadFailed = false;
        this.isUploadSuccessfull = false;
        this.message = "";
    };
    FileServerService.prototype.downloadFile = function (fileName) {
        this.getFile(fileName).subscribe(function (response) {
            //used to fix ie and edge download blob issues
            if (window.navigator && window.navigator.msSaveOrOpenBlob) {
                window.navigator.msSaveBlob(response, fileName);
            }
            else {
                var downloadUrl = URL.createObjectURL(response);
                var downLoadLink = document.createElement("a");
                document.body.appendChild(downLoadLink);
                downLoadLink.style.display = "none";
                downLoadLink.href = downloadUrl;
                downLoadLink.download = fileName;
                downLoadLink.click();
                window.URL.revokeObjectURL(downloadUrl);
            }
        });
    };
    FileServerService.prototype.fileOverBase = function (event) {
        this.isFileOverDropZone = event;
    };
    FileServerService.prototype.getFile = function (fileName) {
        var params = new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["e" /* HttpParams */]().set('fileName', fileName);
        return this.http.get('/api/FileServer/GetFile', { params: params, responseType: "blob" });
    };
    FileServerService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["b" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_3__loader_service__["a" /* LoaderService */]])
    ], FileServerService);
    return FileServerService;
}());



/***/ }),

/***/ "./src/app/services/flight-teachers.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FlightTeacherService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__ = __webpack_require__("./node_modules/rxjs/_esm5/Subject.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var FlightTeacherService = (function () {
    function FlightTeacherService() {
        this.subject = new __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__["Subject"]();
    }
    FlightTeacherService.prototype.flightOnLastCard = function (flight) {
        this.subject.next(flight);
    };
    FlightTeacherService.prototype.getflightOnLastCard = function () {
        return this.subject.asObservable();
    };
    FlightTeacherService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])()
    ], FlightTeacherService);
    return FlightTeacherService;
}());



/***/ }),

/***/ "./src/app/services/flight-view-configuration.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FlightViewConfigurationService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_BehaviorSubject__ = __webpack_require__("./node_modules/rxjs/_esm5/BehaviorSubject.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var FlightViewConfigurationService = (function () {
    function FlightViewConfigurationService(http) {
        this.http = http;
        this.isFlightViewConfig = new __WEBPACK_IMPORTED_MODULE_2_rxjs_BehaviorSubject__["a" /* BehaviorSubject */](false);
    }
    FlightViewConfigurationService.prototype.show = function (value) {
        this.isFlightViewConfig.next(value);
    };
    /**
     * Get flight view configuration for teacher
     */
    FlightViewConfigurationService.prototype.getFlightSettingsForTeacher = function () {
        return this.http.get('/api/Flight/GetFlightSettingsForTeacher');
    };
    /**
     * Submit flight view configuration for teacher
     */
    FlightViewConfigurationService.prototype.submitEditedSettings = function (teacherSettings) {
        return this.http.post('/api/Flight/SetFlightSettingsForTeacher', teacherSettings);
    };
    FlightViewConfigurationService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["b" /* HttpClient */]])
    ], FlightViewConfigurationService);
    return FlightViewConfigurationService;
}());



/***/ }),

/***/ "./src/app/services/loader.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoaderService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_BehaviorSubject__ = __webpack_require__("./node_modules/rxjs/_esm5/BehaviorSubject.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_observable_forkJoin__ = __webpack_require__("./node_modules/rxjs/_esm5/observable/forkJoin.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var LoaderService = (function () {
    function LoaderService() {
        this.status = new __WEBPACK_IMPORTED_MODULE_1_rxjs_BehaviorSubject__["a" /* BehaviorSubject */](false);
        this.statusMini = new __WEBPACK_IMPORTED_MODULE_1_rxjs_BehaviorSubject__["a" /* BehaviorSubject */](false);
    }
    LoaderService.prototype.display = function (value) {
        this.status.next(value);
    };
    LoaderService.prototype.displayMini = function (value) {
        this.statusMini.next(value);
    };
    /**
     * Async loading all passed methods and then call callback function
     */
    LoaderService.prototype.loadAsync = function (methods, callback) {
        var _this = this;
        this.display(true);
        Object(__WEBPACK_IMPORTED_MODULE_2_rxjs_observable_forkJoin__["a" /* forkJoin */])(methods).subscribe(function (res) {
            callback(res);
            _this.display(false);
        });
    };
    LoaderService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])()
    ], LoaderService);
    return LoaderService;
}());



/***/ }),

/***/ "./src/app/services/modal.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ModalService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ngx_bootstrap_modal_bs_modal_service__ = __webpack_require__("./node_modules/ngx-bootstrap/modal/bs-modal.service.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ModalService = (function () {
    function ModalService(bsModalService) {
        this.bsModalService = bsModalService;
        this.config = {
            class: 'modal-dialog-centered'
        };
    }
    ModalService.prototype.openModal = function (template, cssClass, backDrop) {
        if (cssClass) {
            this.config.class += " " + cssClass;
        }
        if (backDrop) {
            this.config.backdrop = backDrop;
            this.config.keyboard = false;
        }
        this.modalRef = this.bsModalService.show(template, this.config);
    };
    ModalService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ngx_bootstrap_modal_bs_modal_service__["a" /* BsModalService */]])
    ], ModalService);
    return ModalService;
}());



/***/ }),

/***/ "./src/app/services/notification.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NotificationService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var NotificationService = (function () {
    function NotificationService() {
        this.delay = 5000;
        this.message = '';
        this.isOpen = false;
        this.warning = false;
    }
    NotificationService.prototype.show = function (message, autoHide, warning) {
        var _this = this;
        this.isOpen = true;
        this.warning = warning;
        this.message = message;
        clearTimeout(this.timer);
        if (autoHide) {
            this.timer = window.setTimeout(function () { _this.hide(); }, this.delay);
        }
    };
    NotificationService.prototype.hide = function () {
        this.isOpen = false;
        clearTimeout(this.timer);
    };
    NotificationService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [])
    ], NotificationService);
    return NotificationService;
}());



/***/ }),

/***/ "./src/app/services/parent-id-service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ParentIdService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_BehaviorSubject__ = __webpack_require__("./node_modules/rxjs/_esm5/BehaviorSubject.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ParentIdService = (function () {
    function ParentIdService() {
        this.parentIdSource = new __WEBPACK_IMPORTED_MODULE_1_rxjs_BehaviorSubject__["a" /* BehaviorSubject */](0);
        this.parentId = this.parentIdSource.asObservable();
        this.isSourceForParentId = false;
    }
    ParentIdService.prototype.changeParentId = function (id) {
        this.parentIdSource.next(id);
        this.isSourceForParentId = true;
    };
    ParentIdService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [])
    ], ParentIdService);
    return ParentIdService;
}());



/***/ }),

/***/ "./src/app/services/parents-dashboard.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ParentsDashboardService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__ = __webpack_require__("./node_modules/rxjs/_esm5/Observable.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ParentsDashboardService = (function () {
    function ParentsDashboardService(http) {
        this.http = http;
    }
    ParentsDashboardService.prototype.getParentInfo = function () {
        return this.http.get('api/Parent/GetParentInfo');
    };
    ParentsDashboardService.prototype.editStudentName = function (student) {
        return this.http.put('api/Parent/EditStudentName', student);
    };
    ParentsDashboardService.prototype.getCarRidersInstructions = function () {
        return this.http.get('api/Parent/GetCarRidersInstructions');
    };
    ParentsDashboardService.prototype.setInstructionsChecked = function () {
        return this.http.get('api/Parent/SetInstructionsChecked');
    };
    ParentsDashboardService.prototype.driverLicenseExist = function (license, currentLicense) {
        var _this = this;
        var isDriverLicenseExist = new __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["a" /* Observable */](function (observer) {
            if (license === currentLicense) {
                observer.next(false);
            }
            else {
                _this.http.get("/api/Parent/IsDriverLicenseExist/" + license).subscribe(function (res) {
                    if (res === 'Exist') {
                        observer.next(true);
                    }
                    else {
                        observer.next(false);
                    }
                });
            }
        });
        return isDriverLicenseExist;
    };
    ParentsDashboardService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["b" /* HttpClient */]])
    ], ParentsDashboardService);
    return ParentsDashboardService;
}());



/***/ }),

/***/ "./src/app/services/request.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RequestService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs__ = __webpack_require__("./node_modules/rxjs/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var RequestService = (function () {
    function RequestService(router) {
        this.router = router;
    }
    RequestService.prototype.intercept = function (observable) {
        var _this = this;
        return observable.catch(function (err) {
            if (err.status === 500) {
                _this.router.navigate(['/server-error']);
            }
            else if (err.status === 403) {
                _this.router.navigate(['/access-denied']);
            }
            else {
                return __WEBPACK_IMPORTED_MODULE_1_rxjs__["Observable"].throw(err);
            }
        });
    };
    RequestService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_router__["Router"]])
    ], RequestService);
    return RequestService;
}());



/***/ }),

/***/ "./src/app/services/scanning-http-hub.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ScanningHttpHubService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__aspnet_signalr_client_dist_browser_signalr_clientES5_1_0_0_alpha2_final_min_js__ = __webpack_require__("./node_modules/@aspnet/signalr-client/dist/browser/signalr-clientES5-1.0.0-alpha2-final.min.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__aspnet_signalr_client_dist_browser_signalr_clientES5_1_0_0_alpha2_final_min_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__aspnet_signalr_client_dist_browser_signalr_clientES5_1_0_0_alpha2_final_min_js__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__ = __webpack_require__("./node_modules/rxjs/_esm5/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ScanningHttpHubService = (function () {
    function ScanningHttpHubService(http, _zone) {
        this.http = http;
        this._zone = _zone;
    }
    ScanningHttpHubService.prototype.createHubConnection = function () {
        this._hubConnection = new __WEBPACK_IMPORTED_MODULE_1__aspnet_signalr_client_dist_browser_signalr_clientES5_1_0_0_alpha2_final_min_js__["HubConnection"]('/api/barcodehub');
    };
    ScanningHttpHubService.prototype.connect = function () {
        if (this._hubConnection.connection.connectionState === 3) {
            this.createHubConnection();
        }
        return this._hubConnection.start()
            .then(function (state) {
            //console.log('Hub connection started')
        })
            .catch(function (err) {
            console.log(err);
            console.log('Error while establishing connection');
        });
    };
    ScanningHttpHubService.prototype.stopConnect = function () {
        return this._hubConnection.stop();
    };
    // -----------------------
    // Scanner View Methods
    // -----------------------
    /**
     * Get initial data for scanner
     */
    ScanningHttpHubService.prototype.getScannerInitData = function () {
        return this.http.get('api/Scanner/GetConfiguration');
    };
    // -----------------------
    // Scanner View Subscribes
    // -----------------------
    /**
     * Subscribe on getting scanned student info
     */
    ScanningHttpHubService.prototype.subscribeScannedStudent = function () {
        var _this = this;
        return new __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["a" /* Observable */](function (observer) {
            _this._hubConnection.on('CardData', function (data) {
                _this._zone.run(function () {
                    observer.next(data);
                });
            });
        });
    };
    /**
     * Subscribe on flight status notifications
     */
    ScanningHttpHubService.prototype.subscribeFlightNotifications = function () {
        var _this = this;
        return new __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["a" /* Observable */](function (observer) {
            _this._hubConnection.on('FlightNotification', function (data) {
                _this._zone.run(function () {
                    observer.next(data);
                });
            });
        });
    };
    ScanningHttpHubService.prototype.subscribeDisconnectScanner = function () {
        var _this = this;
        return new __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["a" /* Observable */](function (observer) {
            _this._hubConnection.on('Disconnect', function (data) {
                _this._zone.run(function () {
                    observer.next(data);
                });
            });
        });
    };
    // -----------------------
    // Scanner View Actions
    // -----------------------
    /**
     * Set current scanner user ID
     */
    ScanningHttpHubService.prototype.sendCurrentUserId = function () {
        return this._hubConnection.invoke('SetScanner', +localStorage.getItem('userId'));
    };
    /**
     * Send barcode to server
     */
    ScanningHttpHubService.prototype.sendScannerInput = function (scannerInput) {
        var _this = this;
        return new __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["a" /* Observable */](function (observer) {
            _this._hubConnection.invoke('ScanCard', scannerInput).then(function () {
                _this._zone.run(function (data) {
                    observer.next(data);
                });
            });
        });
    };
    /**
     * Remove students from current flight
     */
    ScanningHttpHubService.prototype.removeScannedStudents = function (cardsId) {
        var _this = this;
        return new __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["a" /* Observable */](function (observer) {
            _this._hubConnection.invoke('RemoveCard', cardsId).then(function () {
                _this._zone.run(function (data) {
                    observer.next(data);
                });
            });
        });
    };
    /**
     * Move student to another lane
     */
    ScanningHttpHubService.prototype.moveStudentsToLane = function (cardsId, laneId) {
        var _this = this;
        return new __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["a" /* Observable */](function (observer) {
            _this._hubConnection.invoke('ChangeLane', cardsId, laneId).then(function () {
                _this._zone.run(function (data) {
                    observer.next(data);
                });
            });
        });
    };
    /**
     * Close current lane
     */
    ScanningHttpHubService.prototype.closeLane = function (laneId) {
        var _this = this;
        return new __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["a" /* Observable */](function (observer) {
            _this._hubConnection.invoke('CloseLane', laneId).then(function () {
                _this._zone.run(function (data) {
                    observer.next(data);
                });
            });
        });
    };
    /**
     * Set type of current scanning (Alternative or specific lane)
     * typeId for alternative is 0
     */
    ScanningHttpHubService.prototype.setScanningType = function (typeId) {
        var _this = this;
        return new __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["a" /* Observable */](function (observer) {
            _this._hubConnection.invoke('ChangeScanningType', typeId).then(function () {
                _this._zone.run(function (data) {
                    observer.next(data);
                });
            });
        });
    };
    // flights methods
    ScanningHttpHubService.prototype.setClassroomTeacher = function (userId, schoolId) {
        return this._hubConnection.invoke('SetClassroomTeacher', userId, schoolId);
    };
    ScanningHttpHubService.prototype.subscribeScannedStudentForFlights = function () {
        var _this = this;
        return new __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["a" /* Observable */](function (observer) {
            _this._hubConnection.on('GetScannedCard', function (data) {
                _this._zone.run(function () {
                    observer.next(data);
                });
            });
        });
    };
    ScanningHttpHubService.prototype.subscribeStatusFlight = function () {
        var _this = this;
        return new __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["a" /* Observable */](function (observer) {
            _this._hubConnection.on('StatusFlight', function (data) {
                _this._zone.run(function () {
                    observer.next(data);
                });
            });
        });
    };
    ScanningHttpHubService.prototype.subscribeDeletedStudentForFlights = function () {
        var _this = this;
        return new __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["a" /* Observable */](function (observer) {
            _this._hubConnection.on('RemovedCard', function (data) {
                _this._zone.run(function () {
                    observer.next(data);
                });
            });
        });
    };
    ScanningHttpHubService.prototype.subscribeChangeStudentLaneForFlights = function () {
        var _this = this;
        return new __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["a" /* Observable */](function (observer) {
            _this._hubConnection.on('ChangedLane', function (data) {
                _this._zone.run(function () {
                    observer.next(data);
                });
            });
        });
    };
    ScanningHttpHubService.prototype.setClassroomCardStatus = function (cardId, status) {
        return this._hubConnection.invoke('LeaveClassroom', cardId, status);
    };
    ScanningHttpHubService.prototype.subscribeClassroomCardStatus = function () {
        var _this = this;
        return new __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["a" /* Observable */](function (observer) {
            _this._hubConnection.on('LeaveClassroom', function (data) {
                _this._zone.run(function () {
                    observer.next(data);
                });
            });
        });
    };
    ScanningHttpHubService.prototype.setHallwayCardStatus = function (cardId, status) {
        return this._hubConnection.invoke('LeaveHallway', cardId, status);
    };
    ScanningHttpHubService.prototype.subscribeHallwayCardStatus = function () {
        var _this = this;
        return new __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["a" /* Observable */](function (observer) {
            _this._hubConnection.on('LeaveHallway', function (data) {
                _this._zone.run(function () {
                    observer.next(data);
                });
            });
        });
    };
    ScanningHttpHubService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__angular_common_http__["b" /* HttpClient */],
            __WEBPACK_IMPORTED_MODULE_0__angular_core__["NgZone"]])
    ], ScanningHttpHubService);
    return ScanningHttpHubService;
}());



/***/ }),

/***/ "./src/app/services/school-accounts.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SchoolAccountsService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_catch__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/catch.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_observable_throw__ = __webpack_require__("./node_modules/rxjs/_esm5/add/observable/throw.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var SchoolAccountsService = (function () {
    function SchoolAccountsService(http) {
        this.http = http;
        this.postJSONHeader = new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["d" /* HttpHeaders */]().set('Content-Type', 'application/json');
    }
    SchoolAccountsService.prototype.getSchools = function () {
        return this.http.get('/api/School/GetList');
    };
    SchoolAccountsService.prototype.getSchoolName = function () {
        return this.http.get("/api/School/GetSchoolName/" + localStorage.getItem("userId"));
    };
    SchoolAccountsService.prototype.getSchoolById = function (id) {
        return this.http.get("/api/School/GetEditionData?id=" + id);
    };
    SchoolAccountsService.prototype.getSchoolCreationData = function () {
        return this.http.get('/api/School/GetCreationData');
    };
    SchoolAccountsService.prototype.submitNewSchool = function (school) {
        return this.http.post('/api/School/Create', school);
    };
    SchoolAccountsService.prototype.submitEditSchool = function (schoolId, school) {
        return this.http.put("/api/School/edit/" + schoolId, school);
    };
    SchoolAccountsService.prototype.setStatus = function (schoolId, statusId) {
        return this.http.put("/api/School/changestatus/" + schoolId, { "StatusId": statusId });
    };
    SchoolAccountsService.prototype.deleteSchool = function (id) {
        return this.http.delete("/api/School/delete/" + id);
    };
    SchoolAccountsService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["b" /* HttpClient */]])
    ], SchoolAccountsService);
    return SchoolAccountsService;
}());



/***/ }),

/***/ "./src/app/services/school-configuration.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SchoolConfigurationService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SchoolConfigurationService = (function () {
    function SchoolConfigurationService(http) {
        this.http = http;
    }
    /**
     * Check do we have active flight
     */
    SchoolConfigurationService.prototype.checkActiveFlight = function () {
        return this.http.get('api/Flight/IsActiveFlightExist');
    };
    /**
     * Get school configuration
     */
    SchoolConfigurationService.prototype.getSchoolSettingsForUser = function () {
        return this.http.get('/api/School/GetSettings');
    };
    /**
     * Submit school configuration
     */
    SchoolConfigurationService.prototype.submitEditedSettings = function (schoolSettings) {
        return this.http.put('/api/School/SetSettings', schoolSettings);
    };
    /**
     * Erase students data base
     */
    SchoolConfigurationService.prototype.eraseStudents = function () {
        return this.http.delete('/api/School/EndSchoolYear');
    };
    SchoolConfigurationService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["b" /* HttpClient */]])
    ], SchoolConfigurationService);
    return SchoolConfigurationService;
}());



/***/ }),

/***/ "./src/app/services/school-name.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SchoolNameService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_BehaviorSubject__ = __webpack_require__("./node_modules/rxjs/_esm5/BehaviorSubject.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SchoolNameService = (function () {
    function SchoolNameService() {
        this.schoolNameSource = new __WEBPACK_IMPORTED_MODULE_1_rxjs_BehaviorSubject__["a" /* BehaviorSubject */]("");
        this.currentSchoolName = this.schoolNameSource.asObservable();
    }
    SchoolNameService.prototype.changeMessage = function (schoolName) {
        this.schoolNameSource.next(schoolName);
    };
    SchoolNameService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [])
    ], SchoolNameService);
    return SchoolNameService;
}());



/***/ }),

/***/ "./src/app/services/students.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StudentsService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var StudentsService = (function () {
    function StudentsService(http) {
        this.http = http;
        this.postJSONHeader = new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["d" /* HttpHeaders */]().set('Content-Type', 'application/json');
    }
    StudentsService.prototype.getStudents = function () {
        return this.http.get('/api/student/getstudents');
    };
    StudentsService.prototype.getStudentById = function (studentId) {
        return this.http.get("/api/Student/GetStudentById/" + studentId);
    };
    StudentsService.prototype.deleteStudent = function (studentId) {
        return this.http.delete("/api/student/delete/" + studentId);
    };
    StudentsService.prototype.changeGradeAndClassroom = function (model) {
        return this.http.post('/api/student/ChangeGradeAndClassroom', model);
    };
    StudentsService.prototype.submitEditStudent = function (studentId, model) {
        return this.http.put("/api/Student/edit/" + studentId, model);
    };
    StudentsService.prototype.submitNewStudent = function (model) {
        return this.http.post("api/Student/create", model);
    };
    StudentsService.prototype.getStudentParents = function () {
        return this.http.get('api/Student/GetStudentParentList');
    };
    StudentsService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["b" /* HttpClient */]])
    ], StudentsService);
    return StudentsService;
}());



/***/ }),

/***/ "./src/app/services/user-management.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserManagementService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__ = __webpack_require__("./node_modules/rxjs/_esm5/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_BehaviorSubject__ = __webpack_require__("./node_modules/rxjs/_esm5/BehaviorSubject.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__request_service__ = __webpack_require__("./src/app/services/request.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var UserManagementService = (function () {
    function UserManagementService(http, requestService) {
        this.http = http;
        this.requestService = requestService;
        this.postJSONHeader = new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["d" /* HttpHeaders */]().set('Content-Type', 'application/json');
        this.ready = new __WEBPACK_IMPORTED_MODULE_3_rxjs_BehaviorSubject__["a" /* BehaviorSubject */](false);
    }
    UserManagementService.prototype.initData = function () {
        var _this = this;
        this.getRoles().subscribe(function (roles) { _this.roles = roles; _this.ready.next(true); });
    };
    UserManagementService.prototype.getRoleNameById = function (id) {
        return this.roles.find(function (role) { return role.id == id; }).name;
    };
    UserManagementService.prototype.getReadyStatus = function () {
        return this.ready;
    };
    UserManagementService.prototype.getRoles = function () {
        return this.http.get('/api/UserManagement/GetRoles');
    };
    UserManagementService.prototype.getUsers = function () {
        return this.http.get('/api/UserManagement/GetUsers');
    };
    UserManagementService.prototype.getUser = function (id) {
        return this.http.get("/api/UserManagement/GetUser/" + id);
    };
    UserManagementService.prototype.getUnassignedClassrooms = function () {
        return this.http.get('/api/Classroom/GetUnassignedClassRooms');
    };
    UserManagementService.prototype.submitNewUser = function (user) {
        return this.http.post('/api/UserManagement/NewUser', user);
    };
    UserManagementService.prototype.submitEditUser = function (user) {
        return this.http.post('/api/UserManagement/EditUser', user);
    };
    UserManagementService.prototype.isUserParent = function (email, currentEmail) {
        var _this = this;
        var isUserParent = new __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["a" /* Observable */](function (observer) {
            if (email === currentEmail) {
                // if new user email equal old user email
                observer.next("false");
            }
            else {
                _this.http.get("/api/UserManagement/IsUserParent/" + email).subscribe(function (res) {
                    observer.next(res ? res.toString() : "Parent");
                    observer.complete();
                });
            }
        });
        return isUserParent;
    };
    UserManagementService.prototype.userEmailExist = function (email, currentEmail) {
        var _this = this;
        var isUserEmailExist = new __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["a" /* Observable */](function (observer) {
            if (email === currentEmail) {
                // if new user email equal old user email
                observer.next(false);
            }
            else {
                _this.http.get("/api/UserManagement/IsUserExist?userEmail=" + email).subscribe(function (res) {
                    if (res === 'Exist') {
                        // email invalid
                        observer.next(true);
                    }
                    else {
                        // email valid
                        observer.next(false);
                    }
                    observer.complete();
                });
            }
        });
        return isUserEmailExist;
    };
    UserManagementService.prototype.getUserInfo = function () {
        return this.http.get("/api/UserManagement/GetUserInfo");
    };
    UserManagementService.prototype.getUserConfiguration = function () {
        return this.http.get('api/UserManagement/GetUserConfiguration');
    };
    UserManagementService.prototype.submitUserConfiguration = function (config) {
        return this.http.post('api/UserManagement/SetUserConfiguration', config);
    };
    UserManagementService.prototype.deleteUserByEmail = function (email) {
        return this.http.delete("api/UserManagement/DeleteUserByEmail/" + email);
    };
    UserManagementService.prototype.suspendUser = function (email) {
        return this.http.get("api/UserManagement/SuspendUser/" + email);
    };
    UserManagementService.prototype.activateUser = function (email) {
        return this.http.get("api/UserManagement/ActivateUser/" + email);
    };
    UserManagementService.prototype.activateUserAfterSetPassword = function (email) {
        return this.http.get("api/UserManagement/ActivateUserAfterSetPassword/" + email);
    };
    UserManagementService.prototype.checkIfUserOrSchoolSuspended = function (email) {
        return this.http.get("api/UserManagement/Suspended/" + email);
    };
    //---------------------------------------------------------------
    UserManagementService.prototype.testSuperAdmin = function () {
        return this.http.get('/api/UserManagement/SuperAdminTest');
    };
    UserManagementService.prototype.testSchoolAdmin = function () {
        return this.http.get('/api/UserManagement/SchoolAdminTest');
    };
    UserManagementService.prototype.testScanner = function () {
        return this.http.get('/api/UserManagement/ScannerTest');
    };
    UserManagementService.prototype.testClassroomTeacher = function () {
        return this.http.get('/api/UserManagement/ClassroomTeacherTest');
    };
    UserManagementService.prototype.testDismissalTeacher = function () {
        return this.http.get('/api/UserManagement/DismissalTeacherTest');
    };
    UserManagementService.prototype.testParent = function () {
        return this.http.get('/api/UserManagement/ParentTest');
    };
    UserManagementService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["b" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_4__request_service__["a" /* RequestService */]])
    ], UserManagementService);
    return UserManagementService;
}());



/***/ }),

/***/ "./src/app/utils/utils.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Utils; });
var Utils = (function () {
    function Utils() {
    }
    Utils.numberToArray = function (length) {
        return Array(length).fill(0);
    };
    Utils.trimModel = function (input) {
        input.value = input.value.trim();
    };
    /**
     * Generate options array for PrimeNg dropdown
     * @param  {any[]} options
     * @param  {string} labelProp
     * @param  {string} valueProp
     * @returns SelectItem[]
     */
    Utils.generateSelectOptions = function (options, labelProp, valueProp) {
        var primeOptions = [];
        options.forEach(function (option) {
            primeOptions.push({
                label: option[labelProp],
                value: option[valueProp]
            });
        });
        return primeOptions;
    };
    return Utils;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return environment; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AUTH_CONFIG; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};
var AUTH_CONFIG = {
    CLIENT_ID: 'h53Hc5lqA0Oa8cVI3733zFziFmW9TuyZ',
    CLIENT_DOMAIN: 'control-point-dev.auth0.com',
    AUDIENCE: 'cp_auth_api',
    REDIRECT: 'http://localhost:4200/signedIn',
    SCOPE: 'openid profile email',
    API_URL: 'http://localhost:4200/api/'
};


/***/ }),

/***/ "./src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("./node_modules/@angular/platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("./src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("./src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["b" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["enableProdMode"])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 1:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./src/main.ts");


/***/ }),

/***/ 2:
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 3:
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 4:
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 5:
/***/ (function(module, exports) {

/* (ignored) */

/***/ })

},[1]);
//# sourceMappingURL=main.bundle.js.map