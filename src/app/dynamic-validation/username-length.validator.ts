import { AbstractControl, ValidationErrors, Validators } from '@angular/forms';

export default function usernameLengthValidator(
  control: AbstractControl
): ValidationErrors {
  const username = control.get('username');
  const usernameMinLength = control.get('usernameMinLength');
  const usernameMaxLength = control.get('usernameMaxLength');

  // ############################################################################

  // Approach:1 try to add validator to existing validators with validator.compose
  // if (usernameMinLength?.value && usernameMaxLength?.value) {
  // username.clearValidators();
  // username.setValidators(
  //   Validators.compose([
  //     username.validator,
  //     Validators.minLength(usernameMinLength.value),
  //   ])
  // );
  // username.setValidators(
  //   Validators.compose([
  //     username.validator,
  //     Validators.maxLength(usernameMaxLength.value),
  //   ])
  // );
  // username.updateValueAndValidity();
  // }

  // ############################################################################

  // Approach 2: Manually add/remove all validators

  // if (username?.value?.length < usernameMinLength?.value || username?.value?.length > usernameMaxLength?.value) {
  // username.clearValidators();
  //   username.setValidators([
  //     Validators.required,
  //     Validators.minLength(usernameMinLength.value),
  //     Validators.maxLength(usernameMaxLength.value),
  //   ]);
  //   username.setValidators([
  //     Validators.required,
  //   ]);
  // username.updateValueAndValidity();
  // }

  // ############################################################################

  // Approach 3: using setErrors on username control
  // console.log(username.errors);

  if (username?.value?.length < usernameMinLength?.value) {
    username.setErrors({
      // ...username.errors,
      minimumLength: { value: usernameMinLength.value },
    });
    return;
  }
  if (username?.value?.length > usernameMaxLength?.value) {
    username.setErrors({
      // ...username.errors,
      maximumLength: { value: usernameMaxLength.value },
    });
    return;
  }
  // if no errors reset min, max errors but DON'T reset any other errors
  // username.setErrors({...username.errors, minimumLength: null, maximumLength: null });
  username.setErrors(null);
  // console.log(username.errors);
}
