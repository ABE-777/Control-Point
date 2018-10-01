// NOTE:  use this decorator with [ngModelOptions]="{updateOn: 'blur'}" parameter

import { Directive, Input } from '@angular/core';
import { AbstractControl, ValidatorFn, Validator, FormControl, NG_ASYNC_VALIDATORS } from '@angular/forms';
import { LoaderService } from '../services/loader.service';
import { UserManagementService } from '../services/user-management.service';

@Directive({
  selector: '[appIsUserExist][ngModel]',
  providers: [
    { provide: NG_ASYNC_VALIDATORS, useExisting: IsUserExistDirective, multi: true }
  ]
})

export class IsUserExistDirective implements Validator {
  @Input('appIsUserExist') currentEmail: string;

  constructor(private usersService: UserManagementService, private loaderService: LoaderService) { }

  validate(c: AbstractControl) {
    this.loaderService.displayMini(true);
    return new Promise(resolve =>
      this.usersService.userEmailExist(c.value, this.currentEmail).subscribe(isExist => {
        this.loaderService.displayMini(false);
        if (!isExist) {
          resolve(null);
        }
        else {
          resolve({ isEmailExist: { valid: false }});
        }
    }));
  }
}


