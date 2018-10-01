import { Component, OnInit, ViewChild } from '@angular/core';
import { StudentsService } from '../../../services/students.service';
import { Student, ChangeCradeAndClassroom } from '../../../models/student.model';
import { ModalService } from '../../../services/modal.service';
import { LoaderService } from '../../../services/loader.service';
import { ClassroomsService } from '../../../services/classrooms.service';
import { Classroom } from '../../../models/classroom.model';
import { SearchBarComponent } from '../../../modules/share-module/search-bar/search-bar.component';
import { PaginatorComponent } from '../../../modules/share-module/paginator/paginator.component';
import { AuthService } from '../../../services/auth.service';
import { WhiteSpaceValidator } from '../../../directives/white-space-validation.directive';
import { NotificationService } from '../../../services/notification.service';

@Component({
  selector: 'students',
  templateUrl: 'students-grid.component.html'
})
export class StudentsGridComponent implements OnInit {

  @ViewChild(PaginatorComponent) pager: PaginatorComponent;
  @ViewChild(SearchBarComponent) searchBar: SearchBarComponent;

  students: Student[] = [];
  filteredStudents: Student[] = [];
  selectedStudentsId: string[] = [];
  isSelectAll: boolean = false;
  classrooms: Classroom[];
  selectedClass: Classroom = { id: 0, name: "Select Classroom", teacherId: 0, schoolId: 0 };
  grade: string = "";
  deleteStudentId: number = 0;

  constructor(public studentsService: StudentsService,
              public ModalService: ModalService,
              public loaderService: LoaderService,
              public classroomsService: ClassroomsService,
              public authService: AuthService,
              public notificationService: NotificationService
            )
  {
    this.loaderService.display(true);
  }

  ngOnInit() {
    this.getStudents();
    this.getClassrooms();
  }

  setDeleteStudentId(id: number) {
    this.deleteStudentId = id;
  }

  getStudents() {
    this.studentsService.getStudents().subscribe( res => {
      this.students = res;
      this.loaderService.display(false);
      setTimeout(() => {
        this.searchBar.search();
      }, 0)
    })
  }

  getClassrooms() {
   
    this.classroomsService.getClassroomsList().subscribe(res => {
      this.classrooms = res;
      this.classrooms.splice(0, 0, this.selectedClass);
    });
  }

  deleteStudent() {
    this.loaderService.displayMini(true);
    if (this.deleteStudentId) {
      this.studentsService.deleteStudent(this.deleteStudentId).subscribe(
        response => this.deleteUserHandler(),
        err => this.ErrorHandler(err));
    }
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
    this.notificationService.show("Student deleted!", true);
    this.students.splice(this.students.findIndex(student => student.id === this.deleteStudentId), 1);
    setTimeout(() => {
      this.searchBar.search();
    }, 0);
  }

  getStatusClass(status: string): string {
    switch (status) {
      case 'Active':
        return 'success';
      case 'Pending':
        return 'disabled';
      case 'Without Cards':
        return 'warning';
      default:
        return ''
    }
  }

  gridReady(e: any) {
    if (this.students) {
      this.pager.itemsTotal = this.filteredStudents.length;
      this.pager.selectedPage = e.component.pageIndex();
    }
  }

  setFilteredStudents(filteredStudents: Student[]) {
    this.filteredStudents = filteredStudents;
  }

  isCheckedStudent()
  {
    if (this.isSelectAll) {
      this.selectedStudentsId = [];
      this.filteredStudents.forEach(item => {
        this.selectedStudentsId.push(item.id.toString());
      });
    }
    else {
     this.selectedStudentsId = [];
    }
  }

  changeGradeAndClassroom() {
    this.loaderService.display(true);
    let model = new ChangeCradeAndClassroom();
    model.grade = this.grade;
    console.log(this.selectedClass);
    model.classroomId = this.selectedClass.id;
    model.studentsIdList = this.selectedStudentsId;
    this.studentsService.changeGradeAndClassroom(model).subscribe(res => {
      this.resetData();
    });
  }

  resetData() {
    this.students = [];
    this.classrooms = [];    
    this.selectedStudentsId = [];
    this.isSelectAll = false;
    this.getStudents();
    this.getClassrooms();
    this.cancelChageGradeAndClassroom();
  }

  cancelChageGradeAndClassroom() {
    this.selectedClass = { id: 0, name: "Select Classroom", teacherId: 0, schoolId: 0 };
    this.grade = "";
  }

  resetPassword(email: string) {
    this.authService.resetPassword(email)
      .subscribe(response =>
        this.notificationService.show("The instructions to reset password have been sent to "+ email+".", true),
      err =>
        this.notificationService.show("Error occured while processing your request!", true, true)
      );
  }

}
