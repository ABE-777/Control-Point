import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';
import { ClassRoomFlightsAndSettingsModel } from '../../models/http-models/class-room-flights-and-settings.model';
import { LaneForFlightModel } from '../../models/http-models/lane-for-flight.model';
import { StudentForFlights } from '../../models/http-models/student-for-flights.model';
import { FlightSearchStudentModel } from '../../models/http-models/flight-search-student.model';

  @Injectable()
  export class FlightsService {

  constructor(private http: HttpClient) { }

  getClassroomFlightsAndSetings(): Observable<ClassRoomFlightsAndSettingsModel> {
    return this.http.get<ClassRoomFlightsAndSettingsModel>('api/Flight/GetClassroomFlightsAndSetings')
  }

  getLanesByFlightId(flightId: number): Observable<LaneForFlightModel[]> {
    return this.http.get<LaneForFlightModel[]>(`api/Flight/GetLanesByFlightId/${flightId}`);
  }

  getStudentsByLane(laneId: number): Observable<StudentForFlights[]> {
    return this.http.get<StudentForFlights[]>(`api/Flight/GetStudentsByLane/${laneId}`);
    }

    getFlightAndLaneIDByStudentId(studentId: number): Observable<FlightSearchStudentModel> {
      return this.http.get<FlightSearchStudentModel>(`api/Flight/GetLaneAndFlightByStudentId/${studentId}`);
    }
}
