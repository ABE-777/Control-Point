import { Component, OnInit } from '@angular/core';
import { User } from "../../../models/user.model";
import { UserManagementService } from "../../../services/user-management.service";
import { Router, ActivatedRoute } from '@angular/router';
import { DDOption } from "../../../interfaces/DDOption";
import { CreateEditItemService } from '../../../services/create-edit-item.service';
import { Classroom } from '../../../models/classroom.model';
import { EditUser } from '../../../models/EditUser';
import { NotificationService } from '../../../services/notification.service';
import { LoaderService } from '../../../services/loader.service';

@Component({
  selector: 'new-user',
  templateUrl: 'new-user.component.html'
})
export class NewUserComponent {
  userModel: User;
  rolesOptions: DDOption[];
  classrooms: Classroom[];
  selectedClassroom: Classroom;
  editUser: EditUser = new EditUser();

  constructor(public userManagementService: UserManagementService,
    public createEditItemService: CreateEditItemService, private route: ActivatedRoute,
    private router: Router, private notificationService: NotificationService,
    private loaderService: LoaderService) { }

  submitUser() {
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
        .subscribe(response => this.responseStatusCodeHandler(response),
        err => this.responseStatusCodeHandler(err));
    } else {
      this.userManagementService.submitNewUser(this.userModel)
        .subscribe(response => this.responseStatusCodeHandler(response),
          err => this.responseStatusCodeHandler(err));
    }
    
  }

  getUserById(id: number): any {
    return this.userManagementService.getUser(id);
  }

  responseStatusCodeHandler(err: any) {
    this.loaderService.displayMini(false);

    if (err && !err.status) {
      this.notificationService.show(err, true, false);
    } else {
      this.notificationService.show(err.error, true, true);
    }
      this.router.navigate(["../users-management"]);
  }
  

  ngOnInit() {
    this.userModel = new User();
    this.selectedClassroom = new Classroom();
    this.userManagementService.initData();
    this.userManagementService.getReadyStatus().subscribe(status => {
      if (status) {
        this.rolesOptions = this.userManagementService.roles.map(function (role) {
          return { label: role.name, value: role.id }
        })
      }
    })

    this.userManagementService.getUnassignedClassrooms().subscribe(classrooms => {
      this.classrooms = classrooms;
    })    

    this.createEditItemService.getItemId(this.route, () => {
      if (this.createEditItemService.isEditMode) {
        this.getUserById(this.createEditItemService.itemId).subscribe(res => {
          this.userModel.id = res.id;
          this.userModel.name = res.name;
          this.userModel.email = res.email;
          this.userModel.roleId = res.roleId;
          if (res.classroomid !== null) {
            this.selectedClassroom.id = res.classroomId;
            this.selectedClassroom.name = res.classroomName;
          }
          
        })
      }
    })
  }

}
