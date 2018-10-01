import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { DismissalCardsList, DismissalCardForList, StudentsToCards } from '../../../models/http-models/dismissal-cards-list.model';
import { DismissalCardsService } from '../../../services/dismissal-cards.service';
import { PaginatorComponent } from '../../share-module/paginator/paginator.component';
import { LoaderService } from '../../../services/loader.service';
import { CardStatus } from '../../../models/card-status';
import { ModalService } from '../../../services/modal.service';
import { SearchBarComponent } from '../../share-module/search-bar/search-bar.component';
import { NotificationService } from '../../../services/notification.service';
import { ParentIdService } from '../../../services/parent-id-service';
import { DxDataGridComponent } from 'devextreme-angular';

@Component({
  selector: 'app-list-dismissal-card',
  templateUrl: './list-dismissal-card.component.html',
  providers: [
    { provide: 'Window', useValue: window }
  ]
})
export class ListDismissalCardComponent implements OnInit {
  dismissalCardsListHttpModel: DismissalCardsList;
  dismissalCards: DismissalCardForList[] = [];
  filteredCards: DismissalCardForList[] = [];
  cardsToPrint: DismissalCardForList[] = [];
  focusCard: DismissalCardForList;
  selectedCardsId: string[] = [];
  focusCardId: number;
  selectedAll: boolean = false;
  printing: boolean = false;
  isHasStudentsAtSchool: boolean = false; 

  //1-cards, 2-paper
  printingTypeId: number;
  @ViewChild(PaginatorComponent) pager: PaginatorComponent;
  @ViewChild(SearchBarComponent) searchBar: SearchBarComponent;

  @ViewChild(DxDataGridComponent) dataGrid: DxDataGridComponent;
  instructorCustomSortingFunction(rowData) {
    return rowData.students[0].classroomTeacher;
  }
  studentCustomSortingFunction(rowData) {
    return rowData.students[0].name;
  }
  gradeCustomSortingFunction(rowData) {
    return rowData.students[0].grade;    
  }

  constructor(private dismissalCardsService: DismissalCardsService,
    private loaderService: LoaderService,
    private modalService: ModalService,
    private notificationService: NotificationService,
    private parentIdService: ParentIdService,
    private router: Router) { }

  ngOnInit() {
    this.loaderService.display(true);
    this.getDismissalCardsList();
    
  }

  getDismissalCardsList() {
    this.dismissalCardsService.getListOfDismissalCards().subscribe(res => {
      this.dismissalCardsListHttpModel = res;
      this.isHasStudentsAtSchool = this.dismissalCardsListHttpModel.isHasStudents;
      this.dismissalCards = this.dismissalCardsListHttpModel.cards;
      this.filteredCards = this.dismissalCardsListHttpModel.cards;
      this.printingTypeId = this.dismissalCardsListHttpModel.printingTypeId;
      this.loaderService.display(false);
    });
  }

  gridReady(e: any) {
    if (this.dismissalCards) {
      this.pager.itemsTotal = this.filteredCards.length;
      this.pager.selectedPage = e.component.pageIndex();
    }
  }

  setFilteredCards(filteredCards: DismissalCardForList[]) {
    this.filteredCards = filteredCards;
  }

  getCardStatusClass(status: string): string {
    return status === 'Active' ? 'success' : 'disabled';
  }

  getStudentsNames(students: any): string {
    let result: string = "";
    students.forEach((el) => {
      if (el.name === null)
        result = result.concat('-') + "\n";
      else
        result = result.concat(el.name) + "\n";
    });
    return result;
  }

  getStudentsGrades(students: any): string {
    let result: string = "";
    students.forEach((el) => {
      if (el.grade === null)
        result = result.concat('-') + "\n";
      else
        result = result.concat(el.grade) + "\n";
    });
    return result;
  }

  getStudentsInstructors(students: any): string {
    let result: string = "";
    students.forEach((el) => {
      if (el.classroomTeacher === null)
        result = result.concat('-') + "\n";
      else
        result = result.concat(el.classroomTeacher) + "\n";
    });
    return result;
  }

  setFocusCardId(id: number) {
    this.focusCardId = id;
  }

  setFocusCard(card: DismissalCardForList) {
    this.focusCard = card;
  }

  deleteCard() {
    this.loaderService.displayMini(true);
    this.dismissalCardsService.deleteDismissalCard(this.focusCardId).subscribe((res) => {
      this.dismissalCards.splice(this.dismissalCards.findIndex(card => card.id === this.focusCardId), 1);
      setTimeout(() => {
        this.searchBar.search();
      }, 0)
      this.notificationService.show("Card deleted!", true);
      this.loaderService.displayMini(false);
    }, (err) => {
      this.notificationService.show(err.statusText + ": " + err.error, true, true);
      this.loaderService.displayMini(false);
    })
  }

  selectAll() {
    if (this.selectedAll) {
      this.selectedCardsId = [];
      this.filteredCards.forEach(item => {
        this.selectedCardsId.push(item.id.toString());
      });
    }
    else {
      this.selectedCardsId = [];
    }
  }

  printCard() {
    this.printing = true;
    this.cardsToPrint = [];   
    this.cardsToPrint.push(this.focusCard);

    setTimeout(() => {
      if (this.printingTypeId === 1) {
        this.printByTypeCard();
      }
      else{
        this.printByTypePaper();
      }
    });

    //set card status as active
    let cardIds: number[] = [];
    this.cardsToPrint.forEach(card => cardIds.push(card.id));
    this.dismissalCardsService.setDismissalCardsToActive(cardIds).subscribe(() => {
      // set cards to active on frontend
      this.focusCard.status = 'Active';
    });
  }

  printSelectedCards() {
    this.cardsToPrint = [];       
    this.cardsToPrint = this.filteredCards.filter(card => this.selectedCardsId.indexOf(card.id.toString()) >= 0);
    this.printing = true;

    setTimeout(() => {      
      if (this.printingTypeId === 1) {
        this.printByTypeCard();
      }
      else {
        this.printByTypePaper();
      }
    });

    let cardIds: number[] = [];
    this.cardsToPrint.forEach(card => cardIds.push(card.id));
    this.dismissalCardsService.setDismissalCardsToActive(cardIds).subscribe(() => {
      this.filteredCards.forEach(card => {
        if (this.cardsToPrint.indexOf(card) >= 0) {
          card.status = 'Active';
        }
      });
    });
  }


  isSafariBrowser(): boolean {
    var sBrowser, sUsrAg = navigator.userAgent;

    var isSafari = false;
    if (sUsrAg.indexOf("Chrome") > -1) {
      sBrowser = "Google Chrome";
      isSafari = false;
    } else if (sUsrAg.indexOf("Safari") > -1) {
      sBrowser = "Apple Safari";
      isSafari = true;
    } else if (sUsrAg.indexOf("Opera") > -1) {
      sBrowser = "Opera";
      isSafari = false;
    } else if (sUsrAg.indexOf("Firefox") > -1) {
      sBrowser = "Mozilla Firefox";
      isSafari = false;
    } else if (sUsrAg.indexOf("MSIE") > -1) {
      sBrowser = "Microsoft Internet Explorer";
      isSafari = false;
    } else {
      sBrowser = "unknown";
      isSafari = false;
    }

    return isSafari;
  }

  printByTypePaper(): void {
    let addCloseWindow = ``;
    if (!this.isSafariBrowser()) {
      addCloseWindow = `window.close();`;
    }
    let popupWin: Window;
    let datePrinting = new Date().toDateString();
    // set page header for printing
    // add <div class="background-header" > </div> for fxing problem with background in Firefox, EDGE
    let pageHeader = `<div class="row" style="border: 1px solid;">
                <div class="col-4" style="height:110px; padding-top: 25px;">
                  <div class="background-header" > </div>
                     <svg class="cp-image" style="margin-left: 15px;" viewBox="0 0 493.345 96">
                        <defs>
                          <style>
                            .cls-1 {
                              fill: #fff;
                            }
                          </style>
                        </defs>
                        <g id="Group_4" data-name="Group 4" transform="translate(0.041 0.001)">
                          <path id="Path_1" data-name="Path 1" class="cls-1" d="M238.307,84.919c-6.724,0-11.766-1.868-15.315-5.6-3.486-3.735-5.292-9.027-5.292-15.875a24.731,24.731,0,0,1,1.619-9.152,19.723,19.723,0,0,1,4.42-6.786,18.045,18.045,0,0,1,6.661-4.171,24.3,24.3,0,0,1,8.4-1.432,27.524,27.524,0,0,1,4.731.374,33.576,33.576,0,0,1,3.735.872,14.084,14.084,0,0,1,2.677,1.058c.685.374,1.245.623,1.556.809l-2.677,7.471a22.557,22.557,0,0,0-4.42-1.743,20.359,20.359,0,0,0-5.728-.685,13.615,13.615,0,0,0-4.171.685,9.677,9.677,0,0,0-3.611,2.3,12.5,12.5,0,0,0-2.552,4.047,17.337,17.337,0,0,0-.934,6.039,20.232,20.232,0,0,0,.623,5.292,12.679,12.679,0,0,0,1.992,4.233,9.332,9.332,0,0,0,3.673,2.8,13.019,13.019,0,0,0,5.479,1.058,20.98,20.98,0,0,0,3.611-.249c1.058-.187,1.992-.374,2.864-.56a9.931,9.931,0,0,0,2.179-.747c.623-.249,1.183-.56,1.743-.747l2.553,7.6a21.056,21.056,0,0,1-5.541,2.117A29.875,29.875,0,0,1,238.307,84.919Z" transform="translate(-82.183 -15.815)"/>
                          <path id="Path_2" data-name="Path 2" class="cls-1" d="M306.317,74.573a20.863,20.863,0,0,1-1.058,6.724,13.776,13.776,0,0,1-3.113,5.23,14.768,14.768,0,0,1-4.856,3.362,17.469,17.469,0,0,1-12.638,0,14.434,14.434,0,0,1-8.031-8.591,19.536,19.536,0,0,1-1.121-6.724,18.178,18.178,0,0,1,1.183-6.724,15.171,15.171,0,0,1,3.237-5.167,13.734,13.734,0,0,1,4.856-3.3A15.326,15.326,0,0,1,290.94,58.2a15.027,15.027,0,0,1,11.082,4.482A15.034,15.034,0,0,1,305.2,67.85,19.039,19.039,0,0,1,306.317,74.573Zm-9.027,0a11.582,11.582,0,0,0-1.619-6.475,5.791,5.791,0,0,0-9.338,0,10.956,10.956,0,0,0-1.681,6.475,11.3,11.3,0,0,0,1.681,6.537,5.7,5.7,0,0,0,9.338,0A11.951,11.951,0,0,0,297.29,74.573Z" transform="translate(-103.999 -21.967)"/>
                          <path id="Path_3" data-name="Path 3" class="cls-1" d="M333.6,60.105a46.2,46.2,0,0,1,5.852-1.245,47.885,47.885,0,0,1,7.471-.56,18.075,18.075,0,0,1,6.6,1.058,9.9,9.9,0,0,1,4.171,2.926,11.04,11.04,0,0,1,2.179,4.545,23.967,23.967,0,0,1,.685,5.852V90.362h-8.84V73.677c0-2.864-.374-4.856-1.121-6.039s-2.179-1.805-4.233-1.805c-.623,0-1.307,0-1.992.062s-1.37.125-1.93.187V90.238H333.6Z" transform="translate(-125.928 -22.005)"/>
                          <path id="Path_4" data-name="Path 4" class="cls-1" d="M387,46.132l8.84-1.432v9.214h10.646V61.26H395.84V72.28a8.544,8.544,0,0,0,1,4.482c.623,1.121,1.992,1.681,3.922,1.681a15.947,15.947,0,0,0,5.665-1l1.245,6.91a23.829,23.829,0,0,1-3.549,1.121,21,21,0,0,1-4.794.5,14.974,14.974,0,0,1-5.977-1,9.074,9.074,0,0,1-3.8-2.739,10.66,10.66,0,0,1-1.992-4.233,25.289,25.289,0,0,1-.56-5.541V46.132Z" transform="translate(-146.083 -16.872)"/>
                          <path id="Path_5" data-name="Path 5" class="cls-1" d="M446.3,66.929c-.809-.187-1.743-.436-2.8-.623A20,20,0,0,0,440.076,66c-.56,0-1.245.062-1.992.125a15.543,15.543,0,0,0-1.743.311V90.338H427.5V60.7a53.484,53.484,0,0,1,5.6-1.556,32.177,32.177,0,0,1,7.222-.747c.5,0,1.058,0,1.743.062a19.337,19.337,0,0,1,1.992.249c.685.125,1.37.249,1.992.374a9.831,9.831,0,0,1,1.743.5Z" transform="translate(-161.369 -22.043)"/>
                          <path id="Path_6" data-name="Path 6" class="cls-1" d="M492.717,74.573a20.861,20.861,0,0,1-1.058,6.724,14.269,14.269,0,0,1-3.113,5.23,14.767,14.767,0,0,1-4.856,3.362,17.469,17.469,0,0,1-12.638,0,14.434,14.434,0,0,1-8.031-8.591,19.536,19.536,0,0,1-1.121-6.724,18.178,18.178,0,0,1,1.183-6.724,15.173,15.173,0,0,1,3.237-5.167,13.734,13.734,0,0,1,4.856-3.3A15.326,15.326,0,0,1,477.34,58.2a15.027,15.027,0,0,1,11.082,4.482A15.033,15.033,0,0,1,491.6,67.85,19.037,19.037,0,0,1,492.717,74.573Zm-9.027,0a11.582,11.582,0,0,0-1.619-6.475,5.791,5.791,0,0,0-9.338,0,11.428,11.428,0,0,0-1.681,6.475,11.3,11.3,0,0,0,1.681,6.537,5.7,5.7,0,0,0,9.338,0A11.951,11.951,0,0,0,483.69,74.573Z" transform="translate(-174.353 -21.967)"/>
                          <path id="Path_7" data-name="Path 7" class="cls-1" d="M532.414,82.292a24.143,24.143,0,0,1-6.288-.809,8.988,8.988,0,0,1-3.8-2.179,7.58,7.58,0,0,1-1.93-3.362,19.343,19.343,0,0,1-.5-4.482V37.032l8.84-1.432V69.654a10.7,10.7,0,0,0,.187,2.117,4.245,4.245,0,0,0,.685,1.619,3.2,3.2,0,0,0,1.432,1.058,10.488,10.488,0,0,0,2.552.56Z" transform="translate(-196.244 -13.437)"/>
                          <path id="Path_8" data-name="Path 8" class="cls-1" d="M580.689,42.8c6.163,0,10.833,1.058,14.132,3.237s4.918,5.728,4.918,10.584c0,4.981-1.681,8.529-4.98,10.708s-8.093,3.3-14.257,3.3h-2.926V84.387H568.3V43.858a50.065,50.065,0,0,1,6.412-.809C577.016,42.862,579.008,42.8,580.689,42.8Zm.623,7.844c-.685,0-1.307,0-1.992.062-.623.062-1.245.062-1.681.125V62.722h2.926c3.237,0,5.6-.436,7.222-1.307s2.428-2.49,2.428-4.856a5.735,5.735,0,0,0-.623-2.864,4.578,4.578,0,0,0-1.805-1.805,8.722,8.722,0,0,0-2.8-.934A21.857,21.857,0,0,0,581.312,50.644Z" transform="translate(-214.512 -16.155)"/>
                          <path id="Path_9" data-name="Path 9" class="cls-1" d="M653.417,74.573a20.863,20.863,0,0,1-1.058,6.724,13.777,13.777,0,0,1-3.113,5.23,14.767,14.767,0,0,1-4.856,3.362,17.469,17.469,0,0,1-12.638,0,14.434,14.434,0,0,1-8.031-8.591,19.536,19.536,0,0,1-1.121-6.724,18.176,18.176,0,0,1,1.183-6.724,15.173,15.173,0,0,1,3.237-5.167,13.734,13.734,0,0,1,4.856-3.3A15.326,15.326,0,0,1,638.04,58.2a15.027,15.027,0,0,1,11.082,4.482A15.032,15.032,0,0,1,652.3,67.85,19.04,19.04,0,0,1,653.417,74.573Zm-9.027,0a11.582,11.582,0,0,0-1.619-6.475,5.175,5.175,0,0,0-4.669-2.366,5.382,5.382,0,0,0-4.669,2.366,10.956,10.956,0,0,0-1.681,6.475,11.3,11.3,0,0,0,1.681,6.537,5.7,5.7,0,0,0,9.338,0A11.95,11.95,0,0,0,644.39,74.573Z" transform="translate(-235.007 -21.967)"/>
                          <path id="Path_10" data-name="Path 10" class="cls-1" d="M689.784,41.73a4.889,4.889,0,0,1-1.556,3.86,5.779,5.779,0,0,1-7.471,0,4.8,4.8,0,0,1-1.556-3.86,4.889,4.889,0,0,1,1.556-3.86,5.437,5.437,0,0,1,3.735-1.37,5.749,5.749,0,0,1,3.735,1.37A4.978,4.978,0,0,1,689.784,41.73Zm-.809,40.342h-8.84V50.819h8.84Z" transform="translate(-256.37 -13.777)"/>
                          <path id="Path_11" data-name="Path 11" class="cls-1" d="M705.9,60.105a46.2,46.2,0,0,1,5.852-1.245,47.885,47.885,0,0,1,7.471-.56,18.076,18.076,0,0,1,6.6,1.058,9.9,9.9,0,0,1,4.171,2.926,11.04,11.04,0,0,1,2.179,4.545,23.969,23.969,0,0,1,.685,5.852V90.362h-8.84V73.677c0-2.864-.374-4.856-1.121-6.039s-2.179-1.805-4.233-1.805c-.623,0-1.307,0-1.992.062s-1.37.125-1.93.187V90.238H705.9Z" transform="translate(-266.447 -22.005)"/>
                          <path id="Path_12" data-name="Path 12" class="cls-1" d="M759.2,46.132l8.84-1.432v9.214h10.646V61.26H768.04V72.28a8.544,8.544,0,0,0,1,4.482c.623,1.121,1.992,1.681,3.922,1.681a15.947,15.947,0,0,0,5.665-1l1.245,6.91a23.825,23.825,0,0,1-3.549,1.121,21,21,0,0,1-4.794.5,14.974,14.974,0,0,1-5.977-1,9.074,9.074,0,0,1-3.8-2.739,10.66,10.66,0,0,1-1.992-4.233,25.289,25.289,0,0,1-.56-5.541Z" transform="translate(-286.565 -16.872)"/>
                          <g id="Group_1" data-name="Group 1" transform="translate(-0.041 -0.001)">
                            <path id="Path_13" data-name="Path 13" class="cls-1" d="M68.778,96a32.429,32.429,0,0,1-18.366-5.79A32.094,32.094,0,1,1,18.475,34.8a32.114,32.114,0,1,1,64,0A32.113,32.113,0,0,1,68.778,96ZM50.475,81.8a3.868,3.868,0,0,1,2.428.872,24.637,24.637,0,1,0,24.28-41.961,3.793,3.793,0,0,1-2.428-4.233,24.638,24.638,0,1,0-48.5.062,3.793,3.793,0,0,1-2.428,4.233A25.051,25.051,0,0,0,10.817,51.61,24.576,24.576,0,0,0,47.984,82.676,3.806,3.806,0,0,1,50.475,81.8Z" transform="translate(0.041 0.001)"/>
                          </g>
                          <path id="Path_14" data-name="Path 14" class="cls-1" d="M70.839,84.874a10.4,10.4,0,1,1,0-20.794,10.25,10.25,0,0,1,8.84,5.043l7.1-4.3a18.677,18.677,0,1,0,0,19.3l-7.1-4.3A10.173,10.173,0,0,1,70.839,84.874Z" transform="translate(-19.68 -21.061)"/>
                        </g>
                      </svg>

                </div>
                <div class="col-8 text-right align-middle" style="line-height: 100px; font-size: 22px; padding-right:15px;">
                    <div class="background-row" > </div>
                    <div style="margin-right: 25px; position:relative;">
                      <span style="font-weight:bold;">Emission date:</span> ${datePrinting}
                  </div>
                </div>    
            </div>`;
   
    let printingCard = "";
    // if print all cards need to set index of card   
     let studentIndex = 0;
   
    this.cardsToPrint.forEach(card => {
      //set card(guardian) header
      // added <div class="background-row" > </div> for fixing backgrounf in FF, EDGE
      let cardHeader = `
     <div class="row" style="border: 1px solid;">
        <div class="col-6" style = "margin:auto;" >
          <div class="background-row" > </div>
          <div style="margin-left: 25px; line-height: 110px; font-size: 24px; position:relative;" >
            <span style="font-weight:bold;" > Guardian: </span> ${card.parentName}</div >
          </div>
        <div class="col-6 text-right align-middle" style = "line-height: 25px;font-size: 18px; padding:15px;" >
          <div class="background-row" > </div>
          <div style="margin-right: 25px; position:relative;">
              <span style="font-weight:bold;" > Driver's License: </span> ${card.driverLicense}<br>
              <span style="font-weight:bold;" > Relationship: </span> ${card.relationship}<br>
              <span style="font-weight:bold;" > Phone: </span> ${card.phoneNumber}<br>
           </div>
        </div>
     </div>`

      let cardBarcodes = "" + pageHeader + cardHeader;
      for (var i = 0; i < card.students.length; i++) {
        if (i !== 0 && i % 5 === 0) {
          cardBarcodes += "<div class='newpage'><div>" + pageHeader + cardHeader;
        }

        cardBarcodes += `
            <div class="row" style="border: 1px solid; height:215px;">    
                <div class="col-4" style="padding:20px;">
                  <span style="font-weight:bold; font-size:18px;">Name</span><br>
                  <span style="font-size:24px; margin-bottom:25px;">${card.students[i].name}</span> <br><br>
                  <span style="font-weight:bold; font-size:18px;">School</span><br>
                  <span style="font-size:18px;">${card.students[i].schoolName}</span> 
                </div>
                <div class="col-4" style=" padding:20px;">
                  <span style="font-weight:bold; font-size:18px;">Grade</span><br>
                  <span style="font-size:24px; margin-bottom:25px;">${card.students[i].grade}</span> <br><br>
                  <span style="font-weight:bold; font-size:18px;">Student ID</span><br>
                  <span style="font-size:18px;">${card.students[i].externalId}</span>
                </div>   
              <div class="col-4" style=" padding:10px;">  
          `;

          let barcode = document.querySelectorAll("#student-card-" + studentIndex + "-" + i)[0].innerHTML;
          cardBarcodes += `<div style="height:190px; width:300px;">
                            ${barcode}
                           </div></div></div> `;
        
      }

      printingCard += cardBarcodes + "<div class='newpage'><div>";
      studentIndex++;
    });

    popupWin = window.open('', '_blank', 'top=0,left=0,height=100%,width=auto');
    popupWin.document.open();
    popupWin.document.write(`
      <html>
        <head>
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.1/css/bootstrap.min.css" integrity="sha384-WskhaSGFgHYWDcbwN70/dfYBj47jz9qbsMId/iRN3ewGhXQFZCSftd1LZCfmhktB" crossorigin="anonymous">
         
          <style>
          //........Customized style.......
          //........Cards should be printed on separate pages......
          @media all {
	          .page-break	{ display: none; }
          }
          @page{size:A4 portrait; margin:10mm;}
          @media print {
	          .page-break	{ display: block; page-break-before: always; }
            .newpage { page-break-before: always }
            .barcode svg {width:300px; height:190px;}
            .background-row {width: 102%;
                              height: 0;
                              border: solid 55px #f4f4f4;
                              top:0;
                              left:0;
                              position: absolute; }
            .background-header{width: 380px;
                              height: 0;
                              border: solid 55px #000000;
                              top:0;
                              left:0;
                              position: absolute; }
            .cp-image{position: relative; width: 90%;}
          </style>
        </head>
        <body onload="window.focus();window.print(); ${addCloseWindow}">           
            ${printingCard}            
        </body>
      </html>`
    );
    popupWin.document.close();

  }

  printByTypeCard(): void {
    let addCloseWindow = ``;
    if (!this.isSafariBrowser()) {
      addCloseWindow = `window.close();`;
    }
    let popupWin: Window;
    let pageHeader = "";
    let printingCard = "";
    let studentIndex = 0;
   
    this.cardsToPrint.forEach(card => {
     // set page header for printing
      pageHeader = `
              <div style="width:2.3in; height:0.82in;" >
                <div style="width:0.82in; height:0.82in; font-size: 8px; float:left; ">                  
                     <svg class="cp-image" viewBox="0 0 240 242">
                        <defs>
                          <style>
                            .cls-1 {
                              fill: #fff;
                            }
                          </style>
                        </defs>
                        <g id="Group_18" data-name="Group 18" transform="translate(-1366 -1161)">
                          <rect id="Rectangle_15" data-name="Rectangle 15" width="240" height="242" rx="16" transform="translate(1366 1161)"/>
                          <g id="Group_16" data-name="Group 16" transform="translate(1418 1207)">
                            <g id="Group_11" data-name="Group 11" transform="translate(0 79.431)">
                              <path id="Path_20" data-name="Path 20" class="cls-1" d="M13.785,310.523c-4.488,0-7.9-1.253-10.258-3.759S0,300.731,0,296.126a16.247,16.247,0,0,1,1.078-6.12,13.322,13.322,0,0,1,2.943-4.546,12.2,12.2,0,0,1,4.459-2.8,16.751,16.751,0,0,1,5.625-.962,17.5,17.5,0,0,1,3.177.262,25.006,25.006,0,0,1,2.506.583,14.774,14.774,0,0,1,1.807.7c.466.233.816.437,1.049.554l-1.807,5.013a14.047,14.047,0,0,0-2.973-1.166,14.2,14.2,0,0,0-3.847-.466,8.292,8.292,0,0,0-2.8.466A6.478,6.478,0,0,0,8.8,289.19a7.3,7.3,0,0,0-1.69,2.74,11.149,11.149,0,0,0-.641,4.051,15.075,15.075,0,0,0,.408,3.555,7.655,7.655,0,0,0,1.37,2.856,6.435,6.435,0,0,0,2.448,1.894,8.782,8.782,0,0,0,3.672.7,19.622,19.622,0,0,0,2.419-.146c.729-.117,1.341-.233,1.923-.379a12.654,12.654,0,0,0,1.486-.5c.437-.175.816-.35,1.166-.525l1.719,4.984a14.008,14.008,0,0,1-3.7,1.428A21.656,21.656,0,0,1,13.785,310.523Z" transform="translate(0 -279.019)"/>
                              <path id="Path_21" data-name="Path 21" class="cls-1" d="M103.575,315.716a13.118,13.118,0,0,1-.729,4.517,9.529,9.529,0,0,1-2.069,3.5,9.356,9.356,0,0,1-3.235,2.244,10.963,10.963,0,0,1-4.255.787,10.77,10.77,0,0,1-4.2-.787,9.355,9.355,0,0,1-3.235-2.244,10,10,0,0,1-2.1-3.5A13.234,13.234,0,0,1,83,315.716a12.457,12.457,0,0,1,.787-4.517,9.829,9.829,0,0,1,5.421-5.712,11.353,11.353,0,0,1,8.306,0,9.355,9.355,0,0,1,3.235,2.244,9.873,9.873,0,0,1,2.1,3.468A13.981,13.981,0,0,1,103.575,315.716Zm-6.062,0a7.436,7.436,0,0,0-1.107-4.313,3.581,3.581,0,0,0-3.118-1.574A3.667,3.667,0,0,0,90.14,311.4a7.222,7.222,0,0,0-1.107,4.313,7.7,7.7,0,0,0,1.107,4.371,3.623,3.623,0,0,0,3.147,1.6,3.507,3.507,0,0,0,3.118-1.6A7.7,7.7,0,0,0,97.513,315.716Z" transform="translate(-58.811 -295.316)"/>
                              <path id="Path_22" data-name="Path 22" class="cls-1" d="M165.758,306.295a35.526,35.526,0,0,1,3.905-.816,30.948,30.948,0,0,1,5.013-.379,12.067,12.067,0,0,1,4.43.7,6.5,6.5,0,0,1,2.8,1.982,7.576,7.576,0,0,1,1.486,3.031,16.176,16.176,0,0,1,.437,3.905V326.55h-5.945V315.417a8.194,8.194,0,0,0-.758-4.08,3.109,3.109,0,0,0-2.827-1.195c-.437,0-.874.029-1.37.058-.466.029-.9.087-1.282.146V326.52H165.7V306.295Z" transform="translate(-117.409 -295.599)"/>
                              <path id="Path_23" data-name="Path 23" class="cls-1" d="M242.3,286.462l5.945-.962v6.178h7.14v4.954h-7.14v7.373a5.947,5.947,0,0,0,.67,3c.437.758,1.311,1.107,2.652,1.107a11.9,11.9,0,0,0,1.982-.175,11.621,11.621,0,0,0,1.865-.5l.845,4.634a16.454,16.454,0,0,1-2.39.758,14.414,14.414,0,0,1-3.235.321,10.525,10.525,0,0,1-4.022-.67,6.447,6.447,0,0,1-2.565-1.836,7.007,7.007,0,0,1-1.341-2.856,16.234,16.234,0,0,1-.379-3.7V286.462Z" transform="translate(-171.686 -281.711)"/>
                              <path id="Path_24" data-name="Path 24" class="cls-1" d="M313.019,310.983c-.525-.146-1.166-.262-1.865-.408a11.635,11.635,0,0,0-2.3-.233,12.282,12.282,0,0,0-1.341.087,5.749,5.749,0,0,0-1.166.233v16.029H300.4V306.845a32.029,32.029,0,0,1,3.76-1.049,22.445,22.445,0,0,1,4.838-.5c.321,0,.7.029,1.166.058.437.029.9.087,1.341.146.466.058.9.146,1.37.233a5.526,5.526,0,0,1,1.166.35Z" transform="translate(-212.853 -295.741)"/>
                              <path id="Path_25" data-name="Path 25" class="cls-1" d="M370.475,315.716a13.118,13.118,0,0,1-.729,4.517,9.529,9.529,0,0,1-2.069,3.5,9.355,9.355,0,0,1-3.235,2.244,10.963,10.963,0,0,1-4.255.787,10.769,10.769,0,0,1-4.2-.787,9.354,9.354,0,0,1-3.235-2.244,10,10,0,0,1-2.1-3.5,13.235,13.235,0,0,1-.758-4.517,12.459,12.459,0,0,1,.787-4.517,9.828,9.828,0,0,1,5.421-5.712,11.353,11.353,0,0,1,8.306,0,9.355,9.355,0,0,1,3.235,2.244,9.873,9.873,0,0,1,2.1,3.468A13.234,13.234,0,0,1,370.475,315.716Zm-6.062,0a7.436,7.436,0,0,0-1.107-4.313,3.581,3.581,0,0,0-3.118-1.574,3.667,3.667,0,0,0-3.148,1.574,7.222,7.222,0,0,0-1.107,4.313,7.7,7.7,0,0,0,1.107,4.371,3.623,3.623,0,0,0,3.148,1.6,3.507,3.507,0,0,0,3.118-1.6A7.478,7.478,0,0,0,364.413,315.716Z" transform="translate(-247.927 -295.316)"/>
                              <path id="Path_26" data-name="Path 26" class="cls-1" d="M441.193,303.829a14.781,14.781,0,0,1-4.2-.554,6.246,6.246,0,0,1-2.565-1.457,4.886,4.886,0,0,1-1.282-2.273,11.956,11.956,0,0,1-.35-3V273.462l5.945-.962v22.848a7.072,7.072,0,0,0,.117,1.428,2.431,2.431,0,0,0,.466,1.078,2.659,2.659,0,0,0,.991.729,5.913,5.913,0,0,0,1.719.35Z" transform="translate(-306.667 -272.5)"/>
                            </g>
                            <g id="Group_12" data-name="Group 12" transform="translate(20.896 118.105)">
                              <path id="Path_27" data-name="Path 27" class="cls-1" d="M79.977,414.1c4.109,0,7.286.729,9.5,2.186s3.293,3.818,3.293,7.111c0,3.322-1.107,5.712-3.351,7.2S84,432.81,79.86,432.81H77.908v9.238H71.7v-27.22a38.67,38.67,0,0,1,4.313-.554C77.5,414.158,78.84,414.1,79.977,414.1Zm.408,5.3c-.437,0-.9,0-1.341.029s-.816.058-1.137.087v7.985H79.86a10.67,10.67,0,0,0,4.867-.874,3.371,3.371,0,0,0,1.632-3.264,4.266,4.266,0,0,0-.408-1.924,3.429,3.429,0,0,0-1.195-1.224,5.009,5.009,0,0,0-1.894-.641A16.244,16.244,0,0,0,80.385,419.4Z" transform="translate(-71.7 -411.506)"/>
                              <path id="Path_28" data-name="Path 28" class="cls-1" d="M170.175,447.116a13.117,13.117,0,0,1-.729,4.517,9.529,9.529,0,0,1-2.069,3.5,9.356,9.356,0,0,1-3.235,2.244,10.963,10.963,0,0,1-4.255.787,10.77,10.77,0,0,1-4.2-.787,9.355,9.355,0,0,1-3.235-2.244,10,10,0,0,1-2.1-3.5,13.234,13.234,0,0,1-.758-4.517,12.458,12.458,0,0,1,.787-4.517,9.829,9.829,0,0,1,5.421-5.712,11.352,11.352,0,0,1,8.306,0,9.354,9.354,0,0,1,3.235,2.244,9.873,9.873,0,0,1,2.1,3.468A13.849,13.849,0,0,1,170.175,447.116Zm-6.062,0a7.435,7.435,0,0,0-1.107-4.313,3.581,3.581,0,0,0-3.118-1.574,3.667,3.667,0,0,0-3.147,1.574,7.222,7.222,0,0,0-1.107,4.313,7.7,7.7,0,0,0,1.107,4.371,3.623,3.623,0,0,0,3.147,1.6,3.507,3.507,0,0,0,3.118-1.6A7.767,7.767,0,0,0,164.113,447.116Z" transform="translate(-126.897 -427.095)"/>
                              <path id="Path_29" data-name="Path 29" class="cls-1" d="M237.653,408.7a3.255,3.255,0,0,1-1.049,2.565,3.689,3.689,0,0,1-2.477.933,3.635,3.635,0,0,1-2.477-.933,3.659,3.659,0,0,1,0-5.129,3.689,3.689,0,0,1,2.477-.933,3.635,3.635,0,0,1,2.477.933A3.3,3.3,0,0,1,237.653,408.7Zm-.554,27.045h-5.945V414.759H237.1Z" transform="translate(-184.291 -405.2)"/>
                              <path id="Path_30" data-name="Path 30" class="cls-1" d="M268.458,437.595a35.558,35.558,0,0,1,3.905-.816,30.956,30.956,0,0,1,5.013-.379,12.068,12.068,0,0,1,4.43.7,6.5,6.5,0,0,1,2.8,1.982,7.577,7.577,0,0,1,1.486,3.031,16.177,16.177,0,0,1,.437,3.905V457.85h-5.945V446.717a8.2,8.2,0,0,0-.758-4.08A3.109,3.109,0,0,0,277,441.442c-.437,0-.874.029-1.37.058-.466.029-.9.087-1.282.146v16.2H268.4V437.595Z" transform="translate(-211.075 -427.307)"/>
                              <path id="Path_31" data-name="Path 31" class="cls-1" d="M345,417.762l5.945-.962v6.179h7.14v4.954h-7.14v7.373a5.948,5.948,0,0,0,.67,3c.437.758,1.312,1.107,2.652,1.107a11.9,11.9,0,0,0,1.982-.175,11.629,11.629,0,0,0,1.865-.5l.845,4.634a16.447,16.447,0,0,1-2.39.758,14.41,14.41,0,0,1-3.235.321,10.524,10.524,0,0,1-4.022-.67,6.445,6.445,0,0,1-2.565-1.836,7.006,7.006,0,0,1-1.341-2.856,16.234,16.234,0,0,1-.379-3.7V417.762Z" transform="translate(-265.351 -413.419)"/>
                            </g>
                            <g id="Group_13" data-name="Group 13" transform="translate(33.606)">
                              <path id="Path_32" data-name="Path 32" class="cls-1" d="M162.083,65.214a21.88,21.88,0,0,1-12.473-3.905,21.83,21.83,0,1,1-21.741-37.682,21.822,21.822,0,1,1,43.482,0,21.828,21.828,0,0,1-9.268,41.588ZM149.61,55.539a2.605,2.605,0,0,1,1.661.612,16.723,16.723,0,1,0,16.437-28.5,2.581,2.581,0,0,1-1.661-2.856,16.969,16.969,0,0,0-1.953-11.366,16.73,16.73,0,0,0-30.95,11.366,2.521,2.521,0,0,1-1.661,2.856,16.855,16.855,0,0,0-8.86,7.373,16.737,16.737,0,0,0,25.326,21.129A2.605,2.605,0,0,1,149.61,55.539Z" transform="translate(-115.311 0.053)"/>
                            </g>
                            <path id="Path_33" data-name="Path 33" class="cls-1" d="M203.807,100.759a7.053,7.053,0,1,1,6-10.7l4.838-2.943a12.707,12.707,0,1,0,0,13.173l-4.838-2.943A7.052,7.052,0,0,1,203.807,100.759Z" transform="translate(-135.407 -57.378)"/>
                          </g>
                        </g>
                      </svg>
                </div>
                <div style="width:1.3in; font-size: 11px; float:right; text-align: right;">                   
                      <span style="font-weight:bold;">Guardian:</span><br>
                      <span style="margin-bottom:10px;">${card.parentName}</span><br><br>
                       <span style="font-weight:bold;">License:</span>${card.driverLicense}<br>
                       <span style="font-weight:bold;">Relationship:</span>${card.relationship}<br>
                       <span style="font-weight:bold;">Phone:</span>${card.phoneNumber}
                </div>    
            </div>`;


      let cardBarcodes = "" + pageHeader;
      for (var i = 0; i < card.students.length; i++) {       
        if (i !== 0 && i % 2 === 0) {
          cardBarcodes += "<div class='newpage'><div>" + pageHeader;
        }
        //set student data        
        cardBarcodes += `
         <div style="width:2.3in; clear:both;" >
            <div style="width:2.3in; height:0.5in; margin-top:0.02in; font-size: 14px;" >
                <span style="font-weight:bold;">${card.students[i].name}</span><br>
                <span>${card.students[i].schoolName}</span><br>            
                <span>Grade ${card.students[i].grade}</span>
            </div>
          `;
        //set barcode
        let barcode = document.querySelectorAll("#student-card-" + studentIndex + "-" + i)[0].innerHTML;
        cardBarcodes +=`<div style=""> ${barcode} </div> </div>`;
      }

      printingCard += cardBarcodes + "<div class='newpage'><div>" ;
      studentIndex++;
    });

    
    //set printing page 
    popupWin = window.open('', '_blank', 'top=0,left=0,height=100%,width=auto');
    popupWin.document.open();
    popupWin.document.write(`
      <html>
        <head>
        
          <style>
          //........Customized style.......
          //........Cards should be printed on separate pages......
          @media all {
	          .page-break	{ display: none; }
          @page{size:2.5in 3.5in; margin:0.1in;}
          }          
          @media print {
            @page{size:2.5in 3.5in; margin:0.1in;}
	          .page-break	{ display: block; page-break-before: always; }
            .newpage { page-break-before: always }
            .cp-image{ width: 0.82in;}            
            .barcode svg {width:2.2in; height:0.75in; }
            
          </style>
        </head>
        <body onload="window.focus();window.print(); ${addCloseWindow}" style="width:2.5in; height:3.5in;">             
              ${printingCard}             
        </body>
      </html>`
    );
    popupWin.document.close();

  }


  convertCardforBarcode(cardId: number, studentId: number) {
    // Scanner Input is studentId: number, parentId: number
    return `${studentId}-${cardId}`
  }

  goToEdit(cardId: number, parentId: number) {
    this.parentIdService.changeParentId(parentId);    
    this.router.navigate(['dismissal-cards/edit', cardId]);
  }

  goToCreate() {
    this.parentIdService.changeParentId(0);
    this.router.navigate(['dismissal-cards/create']);
  }

}
