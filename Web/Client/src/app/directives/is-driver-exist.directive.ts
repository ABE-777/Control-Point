// NOTE:  use this decorator with [ngModelOptions]="{updateOn: 'blur'}" parameter

import { Directive, Input } from '@angular/core';
import { AbstractControl, ValidatorFn, Validator, FormControl, NG_ASYNC_VALIDATORS } from '@angular/forms';
import { LoaderService } from '../services/loader.service';
import { ParentsDashboardService } from '../services/parents-dashboard.service';

@Directive({
  selector: '[appIsDriverExist][ngModel]',
  providers: [
    { provide: NG_ASYNC_VALIDATORS, useExisting: IsDriverExistDirective, multi: true }
  ]
})
export class IsDriverExistDirective implements Validator {
  @Input('appIsDriverExist') driverLicense: string;

  constructor(private parentsService: ParentsDashboardService, private loaderService: LoaderService) { }

  validate(c: AbstractControl) {
    console.log("inside driver license validate method");
    this.loaderService.displayMini(true);
    return new Promise(resolve =>
      this.parentsService.driverLicenseExist(c.value, this.driverLicense).subscribe(isExist => {
        this.loaderService.displayMini(false);
        if (!isExist) {
          resolve(null);
        }
        else {
          resolve({ isLicenseExist: { valid: false } });
        }
      }));
  }
}
