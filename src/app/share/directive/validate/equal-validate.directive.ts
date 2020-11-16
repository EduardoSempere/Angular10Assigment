import { Directive } from '@angular/core';
import { AbstractControl, FormGroup, NG_VALIDATORS, ValidationErrors, Validator, ValidatorFn } from '@angular/forms';

export const equalValidate: ValidatorFn = (control: FormGroup): ValidationErrors | null => {
  const email = control.get('email');
  const email2 = control.get('email2');
  if (email.pristine || email2.pristine) {
    return null;
  }
  return email && email2 && email.value === email2.value ? null : { equalValidate: true };
};

@Directive({
  selector: '[appEqualValidate]',
  providers: [{ provide: NG_VALIDATORS, useExisting: equalValidate, multi: true }]
})
export class EqualValidateDirective implements Validator {

  constructor() { }
  validate(control: AbstractControl): ValidationErrors {
    return equalValidate(control);
  }

}
