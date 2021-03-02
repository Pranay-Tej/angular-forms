import { AbstractControl, ValidatorFn } from '@angular/forms';

// generalized version of username validator
export default function invalidPatternValidator(pattern: RegExp): ValidatorFn {
  return (control: AbstractControl): { [key: string]: any } | null => {
    const invalid = pattern.test(control.value);
    return invalid ? { invalidUsername: { value: control.value } } : null;
  };
}
