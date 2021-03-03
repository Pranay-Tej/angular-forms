import { AbstractControl, ValidationErrors } from '@angular/forms';

export default function usernameValidator(
  control: AbstractControl
): ValidationErrors {
  const invalid = /admin/.test(control.value);
  return invalid ? { invalidUsername: { value: control.value } } : null;
}
