import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Subject } from 'rxjs/Subject';
import { FlightModel } from '../models/http-models/class-room-flights-and-settings.model';

@Injectable()
export class FlightTeacherService {
  private subject = new Subject<FlightModel>();

  flightOnLastCard(flight: FlightModel): void {
    this.subject.next(flight);
  }


  getflightOnLastCard(): Observable<any> {
    return this.subject.asObservable();
  }
}
