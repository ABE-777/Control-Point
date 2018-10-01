import { Component, OnInit, ViewChildren } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { StudentEdit } from "../../../models/student-edit.model";
import { StudentsService } from "../../../services/students.service";
import { Classroom } from '../../../models/classroom.model';
import { ClassroomsService } from '../../../services/classrooms.service';
import { StudentParent } from '../../../models/studentParent.model';
import { Utils } from '../../../utils/utils';
import { WhiteSpaceValidator } from '../../../directives/white-space-validation.directive';
import { NotificationService } from '../../../services/notification.service';
import { LoaderService } from '../../../services/loader.service';


@Component({
  selector: 'edit-student',
  templateUrl: 'edit-student.component.html'
})
export class EditStudentComponent implements OnInit {

  studentModel: StudentEdit = new StudentEdit();
  studentId: number;
  isEdit: boolean = false;
  classrooms: Classroom[];
  parents: StudentParent[];
  selectedParent: StudentParent = new StudentParent();
  trimModel = Utils.trimModel;

  private _routeSub: any;

  @ViewChildren('newStudentForm') newStudentForm;

  constructor(
    public studentService: StudentsService,
    private route: ActivatedRoute,
    private router: Router,
    public classroomService: ClassroomsService,
    private notificationService: NotificationService,
    private loaderService: LoaderService
  ) { }

  ngOnInit() {
    this.studentModel.classroom = new Classroom();
    this.studentModel.studentParent = new StudentParent();
    this.initModel();
  }

  ngOnDestroy() {
    this._routeSub.unsubscribe();
  }

  initModel() {
    this.getStudentId(() => {
      if (this.studentId) {
        this.isEdit = true;
        this.getStudentById(this.studentId).subscribe(res => {
          this.studentModel = res;    

        });
      }
      this.getClassrooms();
      //values to populate the parents dropdown for edit mode
      if (this.isEdit) {
        this.getParents();
      }
    });
  }

  getParents() {
    this.studentService.getStudentParents().subscribe(res => {
      this.selectedParent.name = this.studentModel.studentParent.name;
      this.selectedParent.id = this.studentModel.studentParent.id;
      this.selectedParent.email = this.studentModel.studentParent.email;
      this.parents = res;
      this.parents.push(new StudentParent(0, "Add Parent/Guardian"));
      
    })
  }

  changeParent() {
    console.log(this.selectedParent.name);
    if (this.selectedParent.name === "Add Parent/Guardian") {
      this.studentModel.studentParent.id = 0;
      this.studentModel.studentParent.name = '';
      this.studentModel.studentParent.email = '';
    } else {
      this.studentModel.studentParent.id = this.selectedParent.id;
      this.studentModel.studentParent.name = this.selectedParent.name;
      this.studentModel.studentParent.email = this.selectedParent.email;
    }
    
  }

  
  getStudentId(completed?) {
    this._routeSub = this.route.params.subscribe(params => {
      this.studentId = params['id'] ? +params['id'] : null;
      completed();
    });
  }

  getClassrooms() {
    this.classroomService.getClassroomsList().subscribe(res => {
      this.classrooms = res;
      this.classrooms.push(new Classroom(-1, "Add classroom"));
      console.log(this.classrooms);
    });
  }

  getStudentById(id: number) {
    return this.studentService.getStudentById(this.studentId);
  }

  submitStudent() {
    this.loaderService.displayMini(true);
    if (this.studentId) {
      // editing
      this.studentService.submitEditStudent(this.studentId, this.studentModel)
        .subscribe(response => this.responseStatusCodeHandler(response),
        err => this.responseStatusCodeHandler(err)
        );
    } else {
      // creating
      this.studentService.submitNewStudent(this.studentModel)
        .subscribe(response => this.responseStatusCodeHandler(response),
          err => this.responseStatusCodeHandler(err)
        );
    }
  }

  responseStatusCodeHandler(err: any) {
    if (err === null) {
      this.loaderService.displayMini(false);
      this.notificationService.show('Your changes applied successfully!', true, false);      
    }
    else {
      this.loaderService.displayMini(false);
      switch (err.status) {
        case 400: this.notificationService.show(err.error, true, true); break;
        case 500: this.notificationService.show('Server error occured!', true, true); break;
        case 503: this.notificationService.show('Error occured while processing your request!', true, true); break;
        default: break;
      }      
    }
    this.router.navigateByUrl('/students');
  }

  clearClassroomName(classroom: any) {
    console.log(classroom.name);
    if (classroom.name === "Add classroom") {
      this.studentModel.classroom.name = '';
    }    
  }

}
