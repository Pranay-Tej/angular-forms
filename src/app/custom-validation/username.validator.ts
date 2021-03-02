import { AbstractControl } from '@angular/forms';

export default function usernameValidator(
  control: AbstractControl
): { [key: string]: any } | null {
  const invalid = /admin/.test(control.value);
  return invalid ? { invalidUsername: { value: control.value } } : null;
}
