import { Directive, Input } from '@angular/core';
import { AbstractControl, ValidatorFn, Validator, FormControl, NG_VALIDATORS, ValidationErrors } from '@angular/forms';

@Directive({
  selector: '[whitespace-validator]',
  providers: [
    { provide: NG_VALIDATORS, useExisting: WhiteSpaceValidator, multi: true }
  ]
})

export class WhiteSpaceValidator implements Validator {

  constructor() { }

  validate(c: AbstractControl): ValidationErrors {
    if (c.value) {
      if (c.value.toString().trim() === "") {
        return { invalidWhitespace: { valid: false } };
      }      
    }
  }

}
