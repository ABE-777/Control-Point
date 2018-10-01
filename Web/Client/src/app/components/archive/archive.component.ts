import { Component, OnInit, ViewChild } from '@angular/core';
import { ArchiveService } from '../../services/archive.service';
import { ArchiveItem } from '../../models/http-models/archive-item.model';
import { LoaderService } from '../../services/loader.service';
import { PaginatorComponent } from '../../modules/share-module/paginator/paginator.component';
import * as XLSX from 'xlsx';
import { Student } from '../../models/student.model';
import { StudentsService } from '../../services/students.service';
import button from 'devextreme/ui/button';

@Component({
  selector: 'app-archive',
  templateUrl: './archive.component.html'
})
export class ArchiveComponent implements OnInit {
  @ViewChild(PaginatorComponent) pager: PaginatorComponent;
  public archiveList: ArchiveItem[];
  public filteredArchiveList: ArchiveItem[];
  public selectedDate: Date;
  public maxDate: Date;
  public minDate: Date;
  rangeDates: Date[];

  students: Student[];
  selectedStudent: Student;
  yesterday: Date;
  activeButton: string;
  startDay: Date;
  public isShow: boolean = false;

  constructor(
    private archiveService: ArchiveService,
    private loaderService: LoaderService,
    private studentService: StudentsService
  ) {
    this.archiveList = [];
    this.filteredArchiveList = [];
    this.selectedDate = new Date();
    this.maxDate = new Date();
    this.startDay = this.maxDate;
    let month = this.maxDate.getMonth();
    let prevMonth = (month === 0) ? 11 : month - 1;
    this.minDate = new Date();
    this.minDate.setMonth(prevMonth);
    this.yesterday = new Date(new Date().setDate(new Date().getDate() - 1));
    this.activeButton = 'btn5';
  }

  ngOnInit() {
    this.getInitData();
  }


  // Set active button in calendar filter
  setActive(buttonName:string) {
    if (buttonName === 'btn5' || buttonName === 'btn6') {
    }
    else {
      this.isShow = false;
    }
    this.activeButton = buttonName;
  }

  isActive = function (buttonName) {    
    return this.activeButton === buttonName;
  }

  /**
   * Get initial data from server (archive list)
   */
  getInitData() {
   
    this.updateArchive(this.selectedDate);
    this.studentService.getStudents().subscribe(students => {
      this.students = students;
      this.students.unshift(null);
      this.selectedStudent = null;
    });
  }

  /**
   * Set items returned by search to view
   */
  setFilteredArchive($event: any) {    
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
  }
 
  /**
   * Get archive list from server by selected date
   */
  getArchive(date: Date, callback?: () => void) {
    let studentName = this.selectedStudent == null ? "" : this.selectedStudent.name;
    this.archiveService.getArchiveList(date, studentName, this.startDay).subscribe(data => {
      this.archiveList = data ? data : [];
      this.filteredArchiveList = data ? data : [];

      callback && callback();
    });
  }

  /**
   * Update archive list by selected date
   */
  
  updateArchive(event: Date, startDay?:Date) {
    this.selectedDate = event;
    this.startDay = startDay ? startDay : event;
    this.isShow = false;
    this.loaderService.displayMini(true);
    this.getArchive(event, () => {
      this.loaderService.displayMini(false);
    });
  }

  dateRangeCalendar(event: any) {
    if (this.rangeDates[1] !== null) {
      this.startDay = this.rangeDates[0];
      this.updateArchive(this.rangeDates[1], this.rangeDates[0]);
    }    
  }

  setDateRange(days: number) {
    if (days === 15) {
      this.rangeDates = [new Date(new Date().setDate(new Date().getDate() - 15)), this.maxDate];
      this.startDay = this.rangeDates[0];
      this.updateArchive(this.maxDate, this.rangeDates[0]);
    }
    else if(days === 30){
      this.rangeDates = [this.minDate, this.maxDate];
      this.startDay = this.rangeDates[0];
      this.updateArchive(this.maxDate, this.rangeDates[0]);
    }
    else {
      this.rangeDates = null;
    }
  }

  /**
   * Update pagination when grid ready
   */
  gridReady(e: any) {
    if (this.archiveList) {
      this.pager.itemsTotal = this.filteredArchiveList.length;
      this.pager.selectedPage = e.component.pageIndex();
    }
  }

  /**
   * Download excel file with archive for selected date
   */
  downloadArchiveList() {
    let studentName = this.selectedStudent == null ? "" : this.selectedStudent.name;
    this.loaderService.displayMini(true);
    this.archiveService.downloadArchiveList(this.selectedDate, studentName, this.startDay, () => {
      this.loaderService.displayMini(false);
    })
  }

  /**
   * Print archive for selected date
   */
  printArchive() {
    this.loaderService.displayMini(true);

    let arrayBuffer;
    let fileReader = new FileReader();
    let studentName = this.selectedStudent == null ? "" : this.selectedStudent.name;

    fileReader.onload = function() {
      arrayBuffer = this.result;
      let htmlStr: string = XLSX.write(XLSX.read(arrayBuffer, {type: 'array'}), {type: 'binary', bookType: 'html'});
      let popupWin: Window;

      popupWin = window.open('', '_blank', 'top=0,left=0,height=100%,width=auto');
      popupWin.document.open();
      popupWin.document.write(`
        <html>
          <head>
            <title>Print tab</title>
            <style>
            @media print {
              table {
                border-collapse: collapse;
                border: 3px solid black;
              }

              td {
                border: 1px solid black;
              }

              td[colspan] {
                border: 3px solid black;
                font-weight: 600;
                text-align: center;
              }
            }
            </style>
          </head>
          <body onload="window.print();window.close()">
            ${htmlStr}
          </body>
        </html>`
      );
      popupWin.document.close();
    };
    this.archiveService.getArchiveListFile(this.selectedDate, studentName, this.startDay).subscribe((file: Blob) => {
      fileReader.readAsArrayBuffer(file);
      this.loaderService.displayMini(false);
    })
  }

  handlePageContainerClick(event: any) {
    if (!this.getClosestElement(event.target, '.dropdown-menu')) {
      this.isShow = false;
    }
  }

  getClosestElement(elem: any, selector: string) {
    if (!Element.prototype.matches) {
      Element.prototype.matches =
        Element.prototype.msMatchesSelector ||
        Element.prototype.webkitMatchesSelector ||
        function (s) {
          var matches = (this.document || this.ownerDocument).querySelectorAll(s),
            i = matches.length;
          while (--i >= 0 && matches.item(i) !== this) { }
          return i > -1;
        };
    }

    for (; elem && elem !== document; elem = elem.parentNode) {
      if (elem.matches(selector)) return elem;
    }
    return null;
  }
}
