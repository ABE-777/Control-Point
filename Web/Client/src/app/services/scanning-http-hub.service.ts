import { Injectable, NgZone } from '@angular/core';
import * as Rx from 'rxjs/Rx';
import { HubConnection } from '@aspnet/signalr-client/dist/browser/signalr-clientES5-1.0.0-alpha2-final.min.js';
import { ScannerInput } from '../models/scanner-input';
import { Observable } from 'rxjs/Observable';
import { ScannedStudent } from '../models/http-models/scanned-student';
import { StudentForFlights } from '../models/http-models/student-for-flights.model';
import { ScannerInitData } from '../models/http-models/scanner-init-data.model';
import { HttpClient } from '@angular/common/http';
import { FlightModel } from '../models/http-models/class-room-flights-and-settings.model';


@Injectable()
export class ScanningHttpHubService {
  private _hubConnection: HubConnection;

  constructor(
    private http: HttpClient,
    private _zone: NgZone
  ) {}

  createHubConnection() {
    this._hubConnection = new HubConnection('/api/barcodehub');
  }

  connect(): Promise<any> {

    if (this._hubConnection.connection.connectionState === 3) { //3-state haven't  connection api
      this.createHubConnection();
    }
    return this._hubConnection.start()
      .then(state => {
        //console.log('Hub connection started')
      })
      .catch(err => {
        console.log(err);
        console.log('Error while establishing connection')
      });
  }

  stopConnect(): void {
    return this._hubConnection.stop();
  }

  // -----------------------
  // Scanner View Methods
  // -----------------------

  /**
   * Get initial data for scanner
   */
  getScannerInitData(): Observable<ScannerInitData> {
    return this.http.get<ScannerInitData>('api/Scanner/GetConfiguration');
  }

  // -----------------------
  // Scanner View Subscribes
  // -----------------------

  /**
   * Subscribe on getting scanned student info
   */
  subscribeScannedStudent(): Observable<ScannedStudent> {
    return new Observable(observer => {
      this._hubConnection.on('CardData', (data: ScannedStudent) => {
        this._zone.run(() => {
          observer.next(data);
        });
      });
    });
  }

  /**
   * Subscribe on flight status notifications
   */
  subscribeFlightNotifications(): Observable<string> {
    return new Observable(observer => {
      this._hubConnection.on('FlightNotification', (data: string) => {
        this._zone.run(() => {
          observer.next(data);
        });
      });
    });
  }

  subscribeDisconnectScanner(): Observable<string> {
    return new Observable(observer => {
      this._hubConnection.on('Disconnect', (data: string) => {
        this._zone.run(() => {
          observer.next(data);
        });
      });
    });
  }
  // -----------------------
  // Scanner View Actions
  // -----------------------

  /**
   * Set current scanner user ID
   */
  sendCurrentUserId(): Promise<any> {
    return this._hubConnection.invoke('SetScanner', +localStorage.getItem('userId'));
  }

  /**
   * Send barcode to server
   */
  sendScannerInput(scannerInput: ScannerInput): Observable<any> {
    return new Observable(observer => {
      this._hubConnection.invoke('ScanCard', scannerInput).then(() => {
        this._zone.run((data) => {
          observer.next(data);
        });
      });
    });
  }

  /**
   * Remove students from current flight
   */
  removeScannedStudents(cardsId: number[]): Observable<any> {
    return new Observable(observer => {
      this._hubConnection.invoke('RemoveCard', cardsId).then(() => {
        this._zone.run((data) => {
          observer.next(data);
        });
      });
    });
  }

  /**
   * Move student to another lane
   */
  moveStudentsToLane(cardsId: number[], laneId: number): Observable<any> {
    return new Observable(observer => {
      this._hubConnection.invoke('ChangeLane', cardsId, laneId).then(() => {
        this._zone.run((data) => {
          observer.next(data);
        });
      });
    });
  }

  /**
   * Close current lane
   */
  closeLane(laneId: number): Observable<any> {
    return new Observable(observer => {
      this._hubConnection.invoke('CloseLane', laneId).then(() => {
        this._zone.run((data) => {
          observer.next(data);
        });
      });
    });
  }

  /**
   * Set type of current scanning (Alternative or specific lane)
   * typeId for alternative is 0
   */
  setScanningType(typeId: number): Observable<any> {
    return new Observable(observer => {
      this._hubConnection.invoke('ChangeScanningType', typeId).then(() => {
        this._zone.run((data) => {
          observer.next(data);
        });
      });
    });
  }

  // flights methods
  setClassroomTeacher(userId: number, schoolId?: string): Promise<any> {
    return this._hubConnection.invoke('SetClassroomTeacher', userId, schoolId);
  }

  subscribeScannedStudentForFlights(): Observable<StudentForFlights> {
    return new Observable(observer => {
      this._hubConnection.on('GetScannedCard', (data: StudentForFlights) => {
        this._zone.run(() => {
          observer.next(data);
        });
      });
    });
  }

  subscribeStatusFlight(): Observable<FlightModel> {
    return new Observable(observer => {
      this._hubConnection.on('StatusFlight', (data: FlightModel) => {
        this._zone.run(() => {
          observer.next(data);
        });
      });
    });
  }

  subscribeDeletedStudentForFlights(): Observable<any> {
    return new Observable(observer => {
      this._hubConnection.on('RemovedCard', (data: any) => {
        this._zone.run(() => {
          observer.next(data);
        });
      });
    });
  }

  subscribeChangeStudentLaneForFlights(): Observable<StudentForFlights> {
    return new Observable(observer => {
      this._hubConnection.on('ChangedLane', (data: StudentForFlights) => {
        this._zone.run(() => {
          observer.next(data);
        });
      });
    });
  }

  setClassroomCardStatus(cardId: number, status: boolean): Promise<any> {
    return this._hubConnection.invoke('LeaveClassroom', cardId, status);
  }

  subscribeClassroomCardStatus(): Observable<StudentForFlights> {
    return new Observable(observer => {
      this._hubConnection.on('LeaveClassroom', (data: StudentForFlights) => {
        this._zone.run(() => {
          observer.next(data);
        });
      });
    });
  }

  setHallwayCardStatus(cardId: number, status: boolean): Promise<any> {
    return this._hubConnection.invoke('LeaveHallway', cardId, status);
  }

  subscribeHallwayCardStatus(): Observable<StudentForFlights> {
    return new Observable(observer => {
      this._hubConnection.on('LeaveHallway', (data: StudentForFlights) => {
        this._zone.run(() => {
          observer.next(data);
        });
      });
    });
  }

}
