import { Component, OnInit, OnDestroy } from '@angular/core';
import { ScannerService } from './scanner.service';
import { ScannedStudent } from '../../models/http-models/scanned-student';
import { ScanningHttpHubService } from '../../services/scanning-http-hub.service';
import { LoaderService } from '../../services/loader.service';
import { NotificationService } from '../../services/notification.service';
import { ScannerInitData } from '../../models/http-models/scanner-init-data.model';

@Component({
  selector: 'app-scanner',
  templateUrl: './scanner.component.html'
})

export class ScannerComponent implements OnInit, OnDestroy {
  isScannerInitDataReady: boolean;

  constructor(
    public scannerService: ScannerService,
    private scanningHttpHubService: ScanningHttpHubService,
    private loaderService: LoaderService,
    private notificationService: NotificationService
  ) { }

  ngOnInit() {
    this.getInitialScanningData();

    this.scanningHttpHubService.connect().then(() => {
      this.scanningHttpHubService.sendCurrentUserId();
      this.getAndPushScannedStudent();
      this.showNotifications();
    });
  }

  ngOnDestroy() {
    this.scanningHttpHubService.stopConnect();
  }

  /**
   * Get initital data for scanning
   */
  getInitialScanningData() {
    this.loaderService.loadAsync([
      this.scanningHttpHubService.getScannerInitData()
    ], (res) => {
      this.scannerService.scannedStudents = res[0].scannedStudents;
      this.scannerService.scanningMode = res[0].scanningMode;
      this.scannerService.assignedLanes = res[0].assignedLanes;
      this.isScannerInitDataReady = true;
    })
  }

  /**
   * Get and push new scanned student to students array
   */
  getAndPushScannedStudent() {
    this.scanningHttpHubService.subscribeScannedStudent().subscribe(student => {
      if (student) {
        this.scannerService.scannedStudents.push(student);
        this.scannerService.scannedStudentsSubject.next(this.scannerService.scannedStudents);
      }
    })
  }

  /**
   * Subscribe and show flight notifications
   */
  showNotifications() {
    this.scanningHttpHubService.subscribeFlightNotifications().subscribe(msg => {
      if (msg) {
        let randomId = Math.random();
        this.scannerService.scannedStudents.push({ randomId: randomId, message: msg });
        this.scannerService.scannedStudentsSubject.next(this.scannerService.scannedStudents);

        setTimeout(function (messageId) {
          return function () {
            let messageIndex = this.scannerService.scannedStudents.findIndex(item => item.randomId && item.randomId === messageId);
            this.scannerService.scannedStudents.splice(messageIndex, 1);
            this.scannerService.scannedStudentsSubject.next(this.scannerService.scannedStudents);
          }
        }(randomId).bind(this), 10000)
      }
    });

    this.scanningHttpHubService.subscribeDisconnectScanner().subscribe(msg => {
      console.log(msg);
      //reload scanner if change school settings
      window.location.reload();
    });
  }
}
