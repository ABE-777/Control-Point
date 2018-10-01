import { Component, OnInit, Input, SimpleChanges } from '@angular/core';
import { ScannerService } from '../scanner.service';
import { ScannedStudent } from '../../../models/http-models/scanned-student';
import { ScanningHttpHubService } from '../../../services/scanning-http-hub.service';
import { LoaderService } from '../../../services/loader.service';
import { CardWithStudents, StudentInCard } from '../../../models/card-with-students.model';
import { NotificationService } from '../../../services/notification.service';
import { SelectItem } from 'primeng/primeng';
import { AssignedLane } from '../../../models/http-models/scanner-init-data.model';
import { ModalService } from '../../../services/modal.service';

@Component({
  selector: 'app-scanned-students-list',
  templateUrl: './scanned-students-list.component.html'
})
export class ScannedStudentsListComponent implements OnInit {
  formatedCards: any[]; // Can be CardWithStudents[] | ScannerNotification[]
  assignedLanesOptions: SelectItem[];
  laneToCloseId: number;

  constructor(
    public scannerService: ScannerService,
    private scanningHttpHubService: ScanningHttpHubService,
    private loaderService: LoaderService,
    private notificationService: NotificationService,
    public modalService: ModalService
  ) { }

  ngOnInit() {
    this.formatCards(true);
    this.generateAvailableLanesOptions();

    this.scannerService.scannedStudentsSubject.subscribe(scannedStudents => {
      this.formatCards(true);
    });

    // set lane to close for multiple scanner mode
    this.laneToCloseId = this.scannerService.scanningMode === 'multiple' && this.scannerService.assignedLanes[0].id;
  }

  /**
   * Formatting cards for view (merge students with same parent license in one car)
   * and add isEditable flag for each card
   * @param  {boolean} rebuild - set last card as editable
   */
  formatCards(rebuild?: boolean) {
    const isAllEditable = false; // debagging mode, FALSE in production

    this.formatedCards = [];
    let uniqueParent: string[] = [];
    this.scannerService.scannedStudents.forEach(student => {
      if (student.parentLicense) {
        // if student
        if (uniqueParent.indexOf(student.parentLicense) === -1) {
          uniqueParent.push(student.parentLicense);
          let card = new CardWithStudents(
            [],
            student.lane,
            student.parentLicense,
            student.parentName,
            student.parentId,
            student.flightNumber,
          )
          card.students.push(new StudentInCard(student.studentId, student.name, student.cardId));
          this.formatedCards.push(card)
        } else {
          let cardIndex = this.formatedCards.findIndex(formatedStudent => formatedStudent.parentLicense === student.parentLicense);
          this.formatedCards[cardIndex].students.push(new StudentInCard(student.studentId, student.name, student.cardId));
        }

        this.formatedCards.forEach((card, index) => {
          if (rebuild) {
            card.isEditable = (this.formatedCards.length - 1) === index ? true: isAllEditable;
          } else {
            card.isEditable = isAllEditable;
          }
        })
      } else {
        // if notification
        this.formatedCards.push(student);
      }
    })

    this.formatedCards.reverse();
  }

  /**
   * Remove students from card by card index or remove specific student by card id
   */
  removeScannedStudents(params: {cardId: number, cardIndex: number}) {
    this.loaderService.displayMini(true);

    let studentsToDelete: number[] = [];

    if (params.cardId) {
      studentsToDelete = [params.cardId]
    } else {
      this.formatedCards[params.cardIndex].students.forEach(student => {
        studentsToDelete.push(student.cardId);
      })
    }

    this.scanningHttpHubService.removeScannedStudents(studentsToDelete).subscribe(() => {
      studentsToDelete.forEach(id => {
        this.scannerService.scannedStudents.splice(this.scannerService.scannedStudents.findIndex(student => student.cardId === id), 1);
      })

      this.formatCards();
      this.loaderService.displayMini(false);
    });
  }

  moveStudentsToLane(cardIndex: number, laneId: number) {
    this.loaderService.displayMini(true);
    let studentsToMoveIds = this.formatedCards[cardIndex].students.map(student => student.cardId);

    this.scanningHttpHubService.moveStudentsToLane(studentsToMoveIds, laneId).subscribe(() => {

      let newLane = this.scannerService.assignedLanes.find(lane => lane.id === laneId)
      this.formatedCards[cardIndex + 1].lane = newLane;

      studentsToMoveIds.forEach(id => {
        this.scannerService.scannedStudents.find(st => st.cardId === id).lane = newLane;
      });

      this.loaderService.displayMini(false);
    });
  }

  /**
   * Generate change lane dropdown options for single scanner mode
   */
  generateAvailableLanesOptions() {
    this.assignedLanesOptions = [];

    this.assignedLanesOptions.push({
      value: 0,
      label: 'Alternating Cars'
    })

    this.scannerService.assignedLanes.forEach(lane => {
      this.assignedLanesOptions.push({
        value: lane.id,
        label: lane.name
      })
    })
  }

  /**
   * Change scanning type or choose active lane for single scanner mode
   */
  changeScanningType(event: {originalEvent: MouseEvent, value: number}) {
    this.loaderService.displayMini(true);
    this.scanningHttpHubService.setScanningType(event.value).subscribe(() => {
      this.scannerService.scanningTypeId = event.value;
      this.loaderService.displayMini(false);
    })
  }

  /**
   * Close active lane manualy
   */
  closeLane(laneId) {
    this.loaderService.displayMini(true);
    this.scanningHttpHubService.closeLane(laneId).subscribe(() => {
      this.formatCards();
      this.loaderService.displayMini(false);
    })
  }

  getLanesToMove(assignedLaneId: number): AssignedLane[] {
    return this.scannerService.assignedLanes.filter(lane => lane.id !== assignedLaneId);
  }
}
