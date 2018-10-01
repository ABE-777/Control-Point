import { Component, OnInit } from '@angular/core';
import { DismissalCard } from '../../../models/http-models/dismissal-card.model';
import { StudentForParent } from '../../../models/student-for-parent.model';
import { ActivatedRoute, Router } from '@angular/router';
import { CreateEditItemService } from '../../../services/create-edit-item.service';
import { NotificationService } from '../../../services/notification.service';
import { LoaderService } from '../../../services/loader.service';
import { DismissalCardsService } from '../../../services/dismissal-cards.service';
import { Location } from '@angular/common';
import { ParentIdService } from '../../../services/parent-id-service';
import { MainParent } from '../../../models/main-parent';
import { AuthService } from '../../../services/auth.service';
import { Roles } from '../../../models/roles.enum';
import { WhiteSpaceValidator } from '../../../directives/white-space-validation.directive';

@Component({
    selector: 'app-create-edit-dismissal-card',
    templateUrl: './create-edit-dismissal-card.component.html'
})
export class CreateEditDismissalCardComponent implements OnInit {
    roles: Roles;
    cardModel: DismissalCard = new DismissalCard();
    availableStudents: StudentForParent[];
    mainParents: MainParent[] = [];
    selectedMainParent: MainParent = new MainParent();
    parentId: number = 0;
    students: StudentForParent[];
    isAdmin: boolean = false;

    constructor(
        private route: ActivatedRoute,
        private router: Router,
        public createEditItemService: CreateEditItemService,
        private notificationService: NotificationService,
        private loaderService: LoaderService,
        private _location: Location,
        private dismissalCardsService: DismissalCardsService,
        public parentIdService: ParentIdService,
        public authService: AuthService
    ) { }

    ngOnInit() {
        this.loaderService.display(true);
        this.parentIdService.parentId.subscribe(id => this.parentId = id);
        this.createEditItemService.getItemId(this.route, () => {
            this.initModel();
        })
    }

    initModel() {

        if (this.createEditItemService.isEditMode) {
            this.setUpEditView();
        }
        else {
            //when component is called from parent view
            if (window.localStorage.getItem('role') === Roles.parent) {
                this.dismissalCardsService.getStudentsOfCurrentUser(0).subscribe(res => {
                    this.availableStudents = res;
                    this.loaderService.display(false);
                });
            }
            //when component is called from school admins or super admin view
            else {
                this.isAdmin = true;
                this.dismissalCardsService.getMainParents().subscribe(res => {
                    this.mainParents = res;
                    if (this.mainParents.length > 0) {
                        this.selectedMainParent = null;
                    }
                    this.dismissalCardsService.getStudentsForAdmin().subscribe(res => {
                        this.students = res;
                        this.availableStudents = [];
                        this.loaderService.display(false);
                    });
                });

            }

        }
    }

    setUpEditView() {
        this.dismissalCardsService.getDismissalCardById(this.createEditItemService.itemId).subscribe((res) => {
            this.cardModel = res;
            let selectedStudentsIds = this.cardModel.students.map(student => student.id)
            this.dismissalCardsService.getStudentsOfCurrentUser(this.cardModel.parentUserId).subscribe(res => {
                this.availableStudents = res;
                this.cardModel.students = this.availableStudents.filter(student => selectedStudentsIds.indexOf(student.id) !== -1);
                this.loaderService.display(false);
            });
        });
    }

    submitModel() {
        this.loaderService.displayMini(true);
        if (this.createEditItemService.isEditMode) {
            this.dismissalCardsService.updateDismissalCard(this.cardModel).subscribe(() => {
                this.loaderService.displayMini(false);
                this.notificationService.show('Dismissal Card updated successfully', true);
                this.routeNavigateTo();
            });
        } else {
            this.dismissalCardsService.createDismissalCard(this.cardModel).subscribe(() => {
                this.loaderService.displayMini(false);
                this.notificationService.show('Dismissal Card created successfully', true);
                this.routeNavigateTo();
            });
        }
    }

    routeNavigateTo() {
        //when component is called from school admins view
        if (window.localStorage.getItem('role') !== Roles.parent) {
            this.router.navigateByUrl('dismissal-cards/list');
            //when component is called from parent view
        } else {
            this.router.navigateByUrl('/parents-dashboard');
        }
    }

    locationBack() {
        this._location.back();
    }

    filterStudents(currentParent: MainParent, resetStudents?: boolean) {
        this.availableStudents = this.students.filter((student) => student.parentId === currentParent.id);
        if (resetStudents) {
            this.cardModel.students = [];
            this.cardModel.students.push(this.availableStudents[0]);
        }
    }
}
