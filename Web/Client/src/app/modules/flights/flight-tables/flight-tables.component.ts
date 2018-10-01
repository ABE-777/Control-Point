import { Component, OnInit, Input, Output, HostListener, EventEmitter } from '@angular/core';
import { FlightsService } from '../flights.service';
import { StudentForFlights } from '../../../models/http-models/student-for-flights.model';
import { LoaderService } from '../../../services/loader.service';
import { ScanningHttpHubService } from '../../../services/scanning-http-hub.service';
import { NotificationService } from '../../../services/notification.service';
import { LaneForFlightModel } from '../../../models/http-models/lane-for-flight.model';
import { AuthService } from '../../../services/auth.service';
import { Roles } from '../../../models/roles.enum';
import { FlightModel } from '../../../models/http-models/class-room-flights-and-settings.model';
import { FlightTeacherService } from '../../../services/flight-teachers.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-flight-tables',
  templateUrl: './flight-tables.component.html'
})
export class FlightTablesComponent implements OnInit {
  roles = Roles;
  _lane: LaneForFlightModel;
  _nextLane: LaneForFlightModel;

  @Input() teacherId: number;
  @Input() isCarColumnVisible: boolean;
  @Input() isGradeColumnVisible: boolean;
  @Input() _flightStatus: string;
  @Input() isLandscape: boolean;
  @Input() highlightedCardId: number;
  @Input() set flightStatus(flightStatus: string) {
    this._flightStatus = flightStatus;
  };
  @Input() set lane(lane: LaneForFlightModel) {
    this._lane = lane;
    this.getStudentsByLane(this._lane.laneId);
  };
  @Input() set nextLane(lane: LaneForFlightModel) {
    this._nextLane = lane;
    if (lane !== null) {
      this.getStudentsByLane(this._nextLane.laneId);
    }
  };
  students: StudentForFlights[];
  nextStudents: StudentForFlights[];

  isScanning: boolean = false;

  constructor(
    private flightsService: FlightsService,
    private loaderService: LoaderService,
    private hubService: ScanningHttpHubService,
    private notificationService: NotificationService,
    public authService: AuthService,
    public flightTeacherService: FlightTeacherService
  )
  { }

  

  ngOnInit() {
    //this.getStudentsByLane(this._lane.laneId);
    
    let schoolId = "";
    if (window.localStorage.getItem('role') === Roles.superAdmin && window.localStorage.getItem('selectedSchool')) {
      schoolId = window.localStorage.getItem('selectedSchool');
    }
    
    this.hubSubscribes();
  }

  sendflightOnLastCard(flight: FlightModel): void {
    // send message everybody who subscribe on observable subject
    this.flightTeacherService.flightOnLastCard(flight);
  }

  getStudentsByLane(laneId: number) {
    this.loaderService.displayMini(true);
    this.flightsService.getStudentsByLane(laneId).subscribe(res => {
      if (laneId === this._lane.laneId) {
        this.students = res;
      }
      else {
        this.nextStudents = res;
      }
      this.loaderService.displayMini(false);
      this.isScanning = this._flightStatus === "Open" ? true : false;
    });
  }
  
  hubSubscribes() {
    this.hubService.subscribeScannedStudentForFlights().subscribe(res => {
      if (res.laneId === this._lane.laneId) {
        this.students.push(res);
      }
      else if (this._nextLane && res.laneId === this._nextLane.laneId) {
        this.nextStudents.push(res);
      }

      let flight = new FlightModel();
      flight.flightId = res.flightId;                        
      flight.status = "Open";
      flight.flightNumber = res.flightNumber;
      this.sendflightOnLastCard(flight);

    });

    this.hubService.subscribeDeletedStudentForFlights().subscribe(res => {
      let names = "";
      for (var i = 0; i < res.length; i++) {
        let studentIndex = this.students.findIndex(student => student.cardId === res[i]);
        if (studentIndex !== -1) {
          names += this.students[studentIndex].studentName + ", ";
          this.students.splice(studentIndex, 1);
        }
        else if (this._nextLane) {
          let studentIndex = this.nextStudents.findIndex(student => student.cardId === res[i]);
          if (studentIndex !== -1) {
            names += this.nextStudents[studentIndex].studentName + ", ";
            this.nextStudents.splice(studentIndex, 1);
          }
        }
      }
      if (res.length === 1 && names !== "") {
        this.notificationService.show(`Student ${names} was deleted`);
      }
      else if (res.length > 1 && names !== "") {
        this.notificationService.show(`Student removed: ${names}`);
      }

    })

    this.hubService.subscribeStatusFlight().subscribe(res => {
      if (res.status === "Closed") {
        this.sendflightOnLastCard(res);
      };
      if (res.status === "Finished") {
        this.sendflightOnLastCard(res);
      }
      
    });

    
    this.hubService.subscribeChangeStudentLaneForFlights().subscribe(res => {
      
      let studentIndex = this.students.findIndex(student => student.cardId === res.cardId);
      if (studentIndex !== -1) {
        this.students.splice(studentIndex, 1);
      } else {
        if (res.laneId === this._lane.laneId) {
          this.students.push(res);
        }
      }

      if (this._nextLane) {       
        let studentIndex = this.nextStudents.findIndex(student => student.cardId === res.cardId);
        if (studentIndex !== -1) {
          this.nextStudents.splice(studentIndex, 1);
        } else {
          if (res.laneId === this._nextLane.laneId) {
            this.nextStudents.push(res);
          }
        }
      }

      let flight = new FlightModel();
      flight.flightId = res.flightId;
      flight.status = "Open";
      flight.flightNumber = res.flightNumber;
      this.sendflightOnLastCard(flight);

    })

    this.hubService.subscribeClassroomCardStatus().subscribe(res => {
      this.students.forEach(student => {
        if (student.cardId === res.cardId) {
          student.classroom = res.classroom;
        }
      });
      if (this._nextLane) {
        this.nextStudents.forEach(student => {
          if (student.cardId === res.cardId) {
            student.classroom = res.classroom;
          }
        });
      }
    })

    this.hubService.subscribeHallwayCardStatus().subscribe(res => {
      this.students.forEach(student => {
        if (student.cardId === res.cardId) {
          student.hallway = res.hallway;
        }
      });
      if (this._nextLane) {
        this.nextStudents.forEach(student => {
          if (student.cardId === res.cardId) {
            student.hallway = res.hallway;
          }
        });
      }
    })
  }

  setClassroomCardStatus(cardId: number, status: boolean, student: StudentForFlights) {
    this.hubService.setClassroomCardStatus(cardId, status);
  }

  setHallwayCardStatus(cardId: number, status: boolean) {
    this.hubService.setHallwayCardStatus(cardId, status);
  }
  
}
