import { Component, OnInit, ViewChild } from '@angular/core';
import { ClassroomsService } from '../../../services/classrooms.service';
import { Teacher } from '../../../models/teacher.model';
import { Classroom } from '../../../models/classroom.model';
import { LoaderService } from '../../../services/loader.service';
import { PaginatorComponent } from '../../../modules/share-module/paginator/paginator.component';
import { ClassroomModel } from '../../../models/ClassroomModel';

@Component({
  selector: 'classrooms',
  templateUrl: 'classrooms-grid.component.html'
})

export class ClassroomsGridComponent implements OnInit {

  @ViewChild(PaginatorComponent) pager: PaginatorComponent;
  //@ViewChild(SearchBarComponent) searchBar: SearchBarComponent;

  teachers: Teacher[];
  classrooms: Classroom[];
  selectedClass: Classroom[] = [];
  isSaveButton: boolean = true;
  dataForSave: Teacher[] = [];
  message: string = "";
  isClassroomAssigned: boolean[] = [];
  tempCurrentValue: Classroom[];

  classModel: ClassroomModel[] = [];

  constructor(public classroomsService: ClassroomsService, private loaderService: LoaderService)
  {
    this.loaderService.display(true);
  }

  ngOnInit() {
    this.getClassrooms();
  }

  getClassrooms() {
    this.classroomsService.getClassroomsList().subscribe(res => {
      this.classrooms = res;
      this.classrooms.push({ id: 0, name: "Without Classroom", teacherId: null, schoolId: 0 });
      this.getTeachers();
    });
  }

  getTeachers() {
    this.classroomsService.getTeachersList().subscribe(res => {
      this.teachers = res;
      let index = 0;
      this.teachers.forEach(item => {
        this.isClassroomAssigned.push(false);
        let teacherClass = this.selectedClassroom(item.classroomId);
        this.selectedClass.push(teacherClass);
        let selectModel = new ClassroomModel();
        selectModel.index = index;
        selectModel.filteredClassrooms = this.classrooms.filter(cl => cl.teacherId === null);
        if (teacherClass.id !== 0) {
          selectModel.filteredClassrooms.push(teacherClass);
        }
        this.classModel.push(selectModel);
        index++;
      });     
      this.loaderService.display(false);
    });
  }

  selectedClassroom(classroomId: number) {
    return this.classrooms.find(function (obj) { return obj.id === classroomId; });
  }

  findTeachersById(teacherId: number) {
    return this.teachers.findIndex(function (obj) { return obj.teacherId === teacherId; });
  }

  addDataToSaveArray(index:number)  {
    let teacherId = this.teachers[index].teacherId;
    let isTeacherIntoArray = this.dataForSave.findIndex(function (obj) { return obj.teacherId === teacherId; });
    if (!(isTeacherIntoArray===-1)) {
      this.dataForSave[isTeacherIntoArray].classroomId = this.teachers[index].classroomId;
      this.dataForSave[isTeacherIntoArray].classroomName = this.teachers[index].classroomName;
    }
    else {
      this.dataForSave.push(this.teachers[index]);
    }
  }

  onChangeClassroom(event: { originalEvent: MouseEvent, value: any }, index: number) {

    let prevClass = this.selectedClassroom(this.teachers[index].classroomId);

    if (this.selectedClass[index].id === 0) {
      prevClass.teacherId = null;
      this.teachers[index].classroomId = this.selectedClass[index].id;
      this.teachers[index].classroomName = this.selectedClass[index].name;

      //push prevClass into all dopdawns
      for (var i = 0; i < this.classModel.length; i++) {
        if (index !== i) {
          let tempFilteredClass = this.classModel[i].filteredClassrooms.slice();
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
            let tempFilteredClass = this.classModel[i].filteredClassrooms.slice();
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
          let tempFilteredClass = this.classModel[i].filteredClassrooms.slice();
          this.classModel[i].filteredClassrooms = null;
          tempFilteredClass.splice(tempFilteredClass.indexOf(event.value), 1);
          this.classModel[i].filteredClassrooms = tempFilteredClass;
        }
      }
    }
   
    this.addDataToSaveArray(index);
    this.isSaveButton = false;
  }
  
  setTempCurrentValue(event: FocusEvent, index: number) {
    this.tempCurrentValue = this.selectedClass.slice();
  }

  saveData() {
    if (this.dataForSave.length > 0) {
      this.loaderService.display(true);

      this.classroomsService.updateClassrooms(this.dataForSave).subscribe(res =>
      {
        this.isSaveButton = true;
        this.dataForSave = [];
        this.isClassroomAssigned = [];
        this.loaderService.display(false);
      });
    }

  }
}
