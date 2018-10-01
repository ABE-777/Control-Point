import { Component, OnInit, ViewChildren, ViewChild, Inject } from '@angular/core';
import { ParentsDashboardService } from '../../services/parents-dashboard.service';
import { ParentInfo } from '../../models/http-models/parent-info.model';
import { LoaderService } from '../../services/loader.service';
import { ModalService } from '../../services/modal.service';
import { StudentForParent } from '../../models/student-for-parent.model';
import { DismissalCard } from '../../models/http-models/dismissal-card.model';
import { NotificationService } from '../../services/notification.service';
import { DismissalCardsService } from '../../services/dismissal-cards.service';
import { WhiteSpaceValidator } from '../../directives/white-space-validation.directive';
import * as jsPDF from 'jspdf'

@Component({
  selector: 'app-parents-dashboard',
  templateUrl: './parents-dashboard.component.html',
  providers: [
    {provide: 'Window', useValue: window}
  ]
})
export class ParentsDashboardComponent implements OnInit {
  public parentInfo: ParentInfo;
  public activeStudent: StudentForParent;
  public isInstructionsChecked: boolean = false;
  @ViewChild('carRiderProcedures') carRiderModal;
  public focusCardId: number;

  constructor(private parentsDashboardService: ParentsDashboardService,
              private dismissalCardsService: DismissalCardsService,
              private loaderService: LoaderService,
              public modalService: ModalService,
              private notificationService: NotificationService,
              @Inject('Window') private window: Window) { }

  ngOnInit() {
    this.loaderService.display(true);

    this.parentsDashboardService.getParentInfo().subscribe((res) => {
      this.parentInfo = res;
      this.loaderService.display(false);
      if (!this.parentInfo.instructionsChecked && this.parentInfo.instruction!="") {
        setTimeout(() => {
          this.modalService.openModal(this.carRiderModal, "car-riders", "static");
        })
      }
    })
    
  }

  convertCardforBarcode(card: DismissalCard, student: StudentForParent) {
    // Scanner Input is studentId: number, parentId: number
    return `${student.id}-${card.id}`
  }

  setActiveStudent(student: StudentForParent) {
    this.activeStudent = {...student};
  }

  editStudentName() {
    let activeStudentIndex: number = null;

    this.loaderService.displayMini(true);

    this.parentInfo.students.forEach((student, index) => {
      if(student.id === this.activeStudent.id) {
        activeStudentIndex = index;
      }
    })

    this.parentsDashboardService.editStudentName(this.activeStudent).subscribe(() => {
      this.parentInfo.students[activeStudentIndex] = this.activeStudent;
      this.loaderService.displayMini(false);
    });
  }

  deleteCard() {
    this.loaderService.displayMini(true);

    this.dismissalCardsService.deleteDismissalCard(this.focusCardId).subscribe(() => {
      let cardIndex: number;
      this.parentInfo.dismissalCards.forEach((card, index) => {if (card.id === this.focusCardId) {cardIndex = index}});
      this.parentInfo.dismissalCards.splice(cardIndex, 1);

      this.loaderService.displayMini(false);
      this.notificationService.show('Dismissal Card DELETED successfully', true);
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
  
  print(cards?: DismissalCard[], studentIndex?: number): void {
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
    if (!studentIndex) {
      studentIndex = 0;
    }
    cards.forEach(card => {

      //set card(guardian) header
       // added <div class="background-row" > </div> for fixing backgrounf in FF, EDGE
      let cardHeader = `
     <div class="row" style="border: 1px solid;">
        <div class="col-6" style = "margin:auto;" >          
          <div class="background-row" > </div>
          <div style="margin-left: 25px; line-height: 110px; font-size: 24px; position:relative;" >
            <span style="font-weight:bold;" > Guardian: </span> ${card.parentName}</div >
        </div>
        <div class="col-6 text-right align-middle" style = "line-height: 25px;font-size: 18px; background-color:lightgray; padding:15px;" >
            <div class="background-row" > </div>
           <div style="margin-right: 25px; position:relative;">
              <span style="font-weight:bold;" > Driver's License: </span> ${card.driversLicense}<br>
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

        // check is has access to see barcode 
        if (card.students[i].isPrintingAtHome) {
          let barcode = document.querySelectorAll("#student-card-" + studentIndex + "-"+i)[0].innerHTML;
          cardBarcodes += `<div style="height:190px; width:300px;">
                            ${barcode}
                           </div> `; }
        else {
          cardBarcodes += `<div style="height:160px; width:280px; border: 1px solid black; margin-left:10px; margin-top:10px;">
                            <div class="barcode">
                              <div style="margin-left: 47%; padding-top:50px;">
                                  <img width="25" height="25" src="assets/images/icons/Print_ErrorIcon.png" alt="logo">
                              </div>
                
                              <div style="padding-top:10px; padding-left:8px;" >
                                  <span> You don't have access to see barcode</span>
                              </div>
                            </div>
                           </div> `
        }
        cardBarcodes += `</div></div>`;
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
        <body onload="window.focus();window.print();${addCloseWindow}">
            ${printingCard}            
        </body>
      </html>`
    );
    popupWin.document.close();
    // set cards to active
    let cardIds: number[] = [];
    cards.forEach(card => cardIds.push(card.id));
    this.dismissalCardsService.setDismissalCardsToActive(cardIds).subscribe(() => {
      // set cards to active on frontend
      cards.forEach(card => card.status = true);
    });
  }



  // we need to create service for this. this need to be refactored
  downloadInstructions() {
   // this.loaderService.displayMini(true);
   // this.parentsDashboardService.getCarRidersInstructions()
    //  .subscribe(res => {
    var doc = new jsPDF();
    var strArr = doc.splitTextToSize(this.parentInfo.instruction, 175);
        doc.text(20, 20, strArr);
        doc.save('CarRidersInstructions.pdf');
     //   this.loaderService.displayMini(false);
    //  });    
  }

  setInstructionsChecked() {
    this.parentsDashboardService.setInstructionsChecked()
      .subscribe(res => {
      })
  }

  setFocusCardId(id: number) {
    this.focusCardId = id;
  }
}
