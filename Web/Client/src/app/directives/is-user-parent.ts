// NOTE:  use this decorator with [ngModelOptions]="{updateOn: 'blur'}" parameter

import { Directive, Input, Output } from '@angular/core';
import { AbstractControl, ValidatorFn, Validator, FormControl, NG_ASYNC_VALIDATORS } from '@angular/forms';
import { LoaderService } from '../services/loader.service';
import { UserManagementService } from '../services/user-management.service';

@Directive({
  selector: '[appIsUserParent][ngModel]',
  providers: [
    { provide: NG_ASYNC_VALIDATORS, useExisting: IsUserParentDirective, multi: true }
  ]
})

export class IsUserParentDirective implements Validator {
  @Input('appIsUserParent') currentEmail: string;

  constructor(private usersService: UserManagementService, private loaderService: LoaderService) { }

  validate(c: AbstractControl) {
    console.log(c);
    this.loaderService.displayMini(true);
    return new Promise(resolve =>
      this.usersService.isUserParent(c.value, this.currentEmail).subscribe(res => {
        this.loaderService.displayMini(false);
        if (res==="Parent") {
          resolve(null);
        }
        else {          
          resolve({ isParent: { valid: false }, role: {value: res} });
        }
      }));
  }
}
