import { Component, OnInit, HostListener, OnDestroy } from '@angular/core';
import { FlightsService } from './flights.service';
import { FlightModel } from '../../models/http-models/class-room-flights-and-settings.model';
import { LaneForFlightModel } from '../../models/http-models/lane-for-flight.model';
import { ScanningHttpHubService } from '../../services/scanning-http-hub.service';
import { Roles } from '../../models/roles.enum';
import { LoaderService } from '../../services/loader.service';
import { FlightTeacherService } from '../../services/flight-teachers.service';
import { Subscription } from 'rxjs';
import { FlightViewConfigurationService } from '../../services/flight-view-configuration.service';
import { Student } from '../../models/student.model';
import { StudentsService } from '../../services/students.service';
import { NotificationService } from '../../services/notification.service';

@Component({
  selector: 'app-flights',
  templateUrl: './flights.component.html'
})
export class FlightsComponent implements OnInit, OnDestroy {
  roles: Roles;
  flights: FlightModel[];
  lanes: LaneForFlightModel[];
  activeFlight: FlightModel;
  activeLane: LaneForFlightModel;
  nextActiveLane: LaneForFlightModel;
  activeTeacherId: number;

  defaultLaneColor: string;
  isCarColumnVisible: boolean;
  isGradeColumnVisible: boolean;

  isSchoolConfigSet: boolean = true;
  isAdmin: boolean = false;
  isLandscape: boolean = true;
  isHasFlight: boolean;
  closedFlightIntoArchive: string = "";

  currentFlight: FlightModel;
  subscription: Subscription;

  //filter
  students: Student[];
  selectedStudent: Student;
  highlightedCardId: number;

  constructor(
    private flightsService: FlightsService,
    private hubService: ScanningHttpHubService,
    public loaderService: LoaderService,
    public flightTeacherService: FlightTeacherService,
    public flightViewConfig: FlightViewConfigurationService,
    private notificationService: NotificationService,
    public studentService: StudentsService
  ) {

  }

  @HostListener('window:orientationchange', ['$event'])
  onOrientationChange(event) {
    //event.target.innerWidth;
    this.setOrientationWindow();
  }

  private setOrientationWindow() {
    if (window.orientation === 0) {      
      this.isLandscape = false;
    }
    else {
      
      if (window.innerWidth > 700) {
        this.isLandscape = true;
      }
    }
  }

  ngOnInit() {
    this.isHasFlight = true;
    if (window.localStorage.getItem('role').indexOf("Admin")>=0) {
      this.isAdmin = true;
    }
    this.setOrientationWindow();
    this.getFlightsAndSettings();

    this.subscribeFlightOnLastCard();
  }

  ngOnDestroy() {
    this.hubService.stopConnect();
  }

  private subscribeFlightOnLastCard() {
    this.subscription = this.flightTeacherService.getflightOnLastCard().subscribe(flight => {
      let index = this.flights.findIndex(obj => obj.flightId === flight.flightId);
      if (index === -1) {
        this.currentFlight = flight;
        this.flights.push(flight);
      }
      else if (flight.status === "Closed") {
        this.flights[index].status = flight.status;
      }
      else if (flight.status === "Finished") {
        this.notificationService.show("Flight number " + this.flights[index].flightNumber + " is in archive!", false, false);
        this.flights.splice(index, 1);       
        if (this.activeFlight.flightId === flight.flightId) {
          if (this.flights.length > 0) {
            this.setActiveFlight(this.flights[0]);
          }
        }
        if (this.flights.length === 0) {
          window.location.reload();
        }
      }
    });
  }

  getFlightsAndSettings() {
    this.loaderService.displayMini(true);
    this.flightsService.getClassroomFlightsAndSetings().subscribe(res => {
      if (res !== null) {
        this.flightViewConfig.show(true);
        this.isSchoolConfigSet = true;        
        this.flights = res.flights;
        this.activeTeacherId = res.teacherId;
        this.defaultLaneColor = res.defaultLaneColor;
        this.isCarColumnVisible = res.isCarColumnVisible;
        this.isGradeColumnVisible = res.isGradeColumnVisible;
        if (!this.flights.length) {          
            this.isHasFlight = false;

          if (res.closedFlightIntoArchive !=="") {
            this.closedFlightIntoArchive = res.closedFlightIntoArchive;
          }
        }
        this.hubService.connect().then(() => {
          this.hubService.setClassroomTeacher(this.activeTeacherId).then(() => {
           // if haven't flight yet (scanner doen't scan yet)
            if (!this.flights.length) {              
              this.hubService.subscribeScannedStudentForFlights().subscribe(res => {
                //waiting while start scanning and reload page
                if (res) {
                  window.location.reload();
                }
              });           
          }
        });
        });
        
        if (this.flights.length) {
          this.isHasFlight = true;
          this.activeFlight = this.flights[this.flights.length - 1];
          this.getLanesByFlightId(this.activeFlight.flightId);
          this.studentService.getStudents().subscribe(students => {
            this.students = students;
            let stud = new Student();
            stud.id = 0, stud.name = "Search for a student"
            this.students.unshift(stud);
            this.selectedStudent = null;
          });
        }
      }
      else {
        this.isSchoolConfigSet = false;
        this.flightViewConfig.show(false);
      }
      this.loaderService.displayMini(false);
    });
  }

  getLanesByFlightId(flightId: number, filteredStudentLaneId?: number, callback?) {
    this.loaderService.displayMini(true);
    this.flightsService.getLanesByFlightId(flightId).subscribe(res => {
      this.lanes = res;

      if (this.lanes.length) {         
          this.setActiveLane(this.lanes.find(lane => lane.color === this.defaultLaneColor), filteredStudentLaneId);       
      }
      this.loaderService.displayMini(false);
      callback && callback();
    })
  }

  setActiveFlight(flight, filteredStudentLaneId?:number) {
    this.activeFlight = flight;
    this.getLanesByFlightId(this.activeFlight.flightId, filteredStudentLaneId);
    if (!filteredStudentLaneId) {
      this.highlightedCardId = null;
      this.selectedStudent = null;
    }
  }

  setActiveLane(lane: LaneForFlightModel, filteredStudentLaneId?: number) {
    if (filteredStudentLaneId) {
      lane = this.lanes[this.lanes.findIndex(l => l.laneId === filteredStudentLaneId)];
    }
    else {
      this.highlightedCardId = null;
      this.selectedStudent = null;
    }
    this.activeLane = lane;
    //add next lane for horizontal orientation
    this.setNextActiveLane(lane);
  }

  setNextActiveLane(lane: LaneForFlightModel) {
    if (this.lanes.length === 1) {
      this.nextActiveLane = null;
    }
    else {
      let indexActiveLane = this.lanes.indexOf(lane);
      if (indexActiveLane === (this.lanes.length - 1)) {
        this.nextActiveLane = this.lanes[indexActiveLane - 1];
      }
      else {
        this.nextActiveLane = this.lanes[indexActiveLane + 1];
      }
    }
  }

  setFilteredFlight($event: any) {
    if (this.selectedStudent === null || this.selectedStudent.id === 0) {
      this.highlightedCardId = null;
      this.selectedStudent = null;
      return;
    }
    this.loaderService.displayMini(true);
    this.flightsService.getFlightAndLaneIDByStudentId(this.selectedStudent.id).subscribe(res => {
      if (res) {
        if (res.flightId === this.activeFlight.flightId) {
          if (!(res.laneId === this.activeLane.laneId || res.laneId === this.nextActiveLane.laneId)) {
            this.setActiveLane(this.lanes[0], res.laneId);
          }
        }
        else {
          this.setActiveFlight(this.flights[this.flights.findIndex(f => f.flightId === res.flightId)], res.laneId);
        }
        this.highlightedCardId = res.cardId;
      }
      else {
        this.highlightedCardId = null;
        this.notificationService.show(`Student ${this.selectedStudent.name.toUpperCase()} was not found in today flights`, false, true);
        this.selectedStudent = null;        
      }
      this.loaderService.displayMini(false);
    });
      
  }

}
