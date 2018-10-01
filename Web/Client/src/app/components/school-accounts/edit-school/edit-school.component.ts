import { Component, OnInit, ViewChildren } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { SchoolEdit } from "../../../models/school-edit.model";
import { State } from '../../../models/state.model';
import { Disctrict } from '../../../models/district.model';
import { SchoolAccountsService } from "../../../services/school-accounts.service";
import { SchoolEditionData } from '../../../models/http-models/school-edition-data.model';
import { CreateEditItemService } from '../../../services/create-edit-item.service';
import { User } from '../../../models/user.model';
import { NotificationService } from '../../../services/notification.service';
import { LoaderService } from '../../../services/loader.service';

@Component({
  selector: 'edit-school',
  templateUrl: 'edit-school.component.html'
})

export class EditSchoolComponent implements OnInit {
  schoolModel: SchoolEditionData = new SchoolEditionData();
  states: State[];
  districts: Disctrict[];
  selectedState: State;
  selectedDistrict: Disctrict;
  filteredDistricts: Disctrict[];
  newAdmin: User = new User();
  selectedAdmin: User = new User();

  constructor(
    public schoolService: SchoolAccountsService,
    private route: ActivatedRoute,
    private router: Router,
    public createEditItemService: CreateEditItemService,
    private notificationService: NotificationService,
    private loaderService: LoaderService
  ) {}

  ngOnInit() {
    this.loaderService.display(true);
    this.initModel();
  }

  initModel() {
    this.schoolModel.schoolAdmins = [new User()];
    this.createEditItemService.getItemId(this.route, () => {
      if (this.createEditItemService.isEditMode) {
        this.getSchoolById(this.createEditItemService.itemId).subscribe(res => {
          // writing school model
          this.schoolModel = res;
          // settings for states and districts dropdowns
          this.states = res.states;
          this.districts = res.districts;
          this.selectedState = this.states.filter((state) => state.id === res.stateId)[0];
          this.selectedDistrict = this.districts.filter((district) => district.id === this.schoolModel.districtId)[0];
          this.filterDistricts(this.selectedState);
          // adding new admin select in admins dropdown
          this.schoolModel.schoolAdmins.push(new User(0, 'Add Main School Admin'));
          this.schoolModel.previousAdminId = this.schoolModel.mainAdminId;
          // getting selected admin
          this.selectedAdmin = this.schoolModel.schoolAdmins.filter(admin => admin.id === this.schoolModel.mainAdminId )[0];
          this.loaderService.display(false);
        });
      } else {
        this.getSchoolCreationData().subscribe(res => {
          this.states = res.initData.states;
          this.districts = res.initData.districts;
          this.loaderService.display(false);
        })
      }
    })
  }

  getSchoolById(id: number) {
    return this.schoolService.getSchoolById(this.createEditItemService.itemId);
  }

  getSchoolCreationData() {
    return this.schoolService.getSchoolCreationData();
  }

  submitSchool() {
    this.loaderService.displayMini(true);
    this.schoolModel.districtId = this.selectedDistrict.id;

    if (this.createEditItemService.isEditMode) {
      // editing
      this.schoolModel.mainAdminId = this.selectedAdmin.id;
      if (this.schoolModel.previousAdminId === this.schoolModel.mainAdminId) this.schoolModel.previousAdminId = 0;

      if (!this.schoolModel.mainAdminId) {
        // change 'add admin' optin to new admin
        this.schoolModel.schoolAdmins.splice(-1, 1, this.newAdmin);
      } else {
        // remove 'add admin optin'
        this.schoolModel.schoolAdmins.pop();
      }

      this.schoolService.submitEditSchool(this.createEditItemService.itemId, this.schoolModel).subscribe(() => {
        this.loaderService.displayMini(false);
        this.notificationService.show(`School "${this.schoolModel.schoolName}" edited successfully`, true);
        this.router.navigateByUrl('/school-accounts');
      });
    } else {
      // creating
      this.schoolService.submitNewSchool(this.schoolModel).subscribe((response) => {
        this.loaderService.displayMini(false);
        this.notificationService.show(`School "${this.schoolModel.schoolName}" created successfully`, true);
        this.router.navigateByUrl('/school-accounts');
      });
    }
  }

  filterDistricts(currentState: State, resetDistict?: boolean) {
    this.filteredDistricts = this.districts.filter((district) => district.stateId === currentState.id);
    if (resetDistict) this.selectedDistrict = null;
  }

}
