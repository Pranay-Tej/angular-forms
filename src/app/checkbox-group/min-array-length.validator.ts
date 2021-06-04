import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

export default function minArrayLengthValidator(min: number): ValidatorFn {
  return (control: AbstractControl): ValidationErrors => {
    return control.value.length < min ? { minArrayLength: { min: min } } : null;
  };
}
