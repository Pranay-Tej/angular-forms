import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

// export default function passwordValidator(): ValidatorFn {
//   return (control: AbstractControl): ValidationErrors => {
//     const password = control.get('password');
//     const confirmPassword = control.get('confirmPassword');

//     if (password.pristine || confirmPassword.pristine) {
//       return null;
//     }
//     console.log('passwordValidator');

//     return password &&
//       confirmPassword &&
//       password.value !== confirmPassword.value
//       ? { passwordMisMatch: true }
//       : null;
//   };
// }

export default (control: AbstractControl): ValidationErrors => {
  const password = control.get('password');
  const confirmPassword = control.get('confirmPassword');

  if (password.pristine || confirmPassword.pristine) {
    return null;
  }
  if (password && confirmPassword && password.value !== confirmPassword.value) {
    confirmPassword.setErrors({ passwordMisMatch: { value: true } });
    // form level errors are not working ??????
    // Source: https://www.freecodecamp.org/news/how-to-validate-angular-reactive-forms/
    // return { passwordMisMatch: { value: true } };
  } else {
    return null;
  }
};
