import { Injectable } from '@angular/core';
import { ScannerInput } from '../../models/scanner-input';
import { NotificationService } from '../../services/notification.service';
import { ScanningHttpHubService } from '../../services/scanning-http-hub.service';
import { ScannedStudent } from '../../models/http-models/scanned-student';
import { BehaviorSubject, Subject } from 'rxjs';
import { Lane } from '../../models/lane.model';
import { AssignedLane } from '../../models/http-models/scanner-init-data.model';
import { ScannerNotification } from '../../models/scanner-notification.model';
import { LoaderService } from '../../services/loader.service';

@Injectable()
export class ScannerService {
  scanText: string = '';
  scannerInput: ScannerInput;
  isInScanMode: boolean;
  scanSuccessfully: boolean;
  scanNotSuccessfully: boolean;
  scannedStudentsSubject: Subject<any[]> = new Subject(); // can be ScannedStudent[] | ScannerNotification[]
  scannedStudents: any[]; // can be ScannedStudent[] | ScannerNotification[]
  scanningMode: string; // 'single' or 'multiple'
  scanningTypeId: number; // id of scanning lane, 0 - alternating cars
  assignedLanes: AssignedLane[];

  constructor(
    private socketService: ScanningHttpHubService,
    private notificationService: NotificationService,
    private loaderService: LoaderService
  ) {
    this.scannedStudents = [];
  }

  sendScanText() {   
    let scanArray: number[] = this.scanText.split('-').map(id => parseInt(id));
    let isScanSuccessfully: boolean = true;

    // scanner input validation
    if (scanArray.length === 2) {
      this.scannerInput = new ScannerInput(...scanArray);

      for (const key in this.scannerInput) {
        if(isNaN(this.scannerInput[key]) || typeof(this.scannerInput[key]) !== 'number') {
          // scanned data is corrupted
          isScanSuccessfully = false;
        }
      }
    } else {
      // scanned data is corrupted
      isScanSuccessfully = false;
    }

    if (isScanSuccessfully) {
      this.loaderService.displayMini(true);      
      this.socketService.sendScannerInput(this.scannerInput).subscribe(() => {
        this.loaderService.displayMini(false);
      });
    } else {
      this.notificationService.show("Barcode not found", true, true);
      this.scanNotSuccessfully = true;
      window.setTimeout(() => { this.scanNotSuccessfully = false }, 300);
    }
    // reset scaning data
    this.scanText = ''
    this.scannerInput;
  }

  toggleScanMode() {
    this.isInScanMode = !this.isInScanMode;
  }

  buildScanText(event: any) {
    if (event.key !== "Enter") {
      this.scanText += event.key;
    } 
  }

}
