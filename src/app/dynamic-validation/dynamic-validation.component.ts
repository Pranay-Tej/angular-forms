import { Component, OnInit } from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  FormGroup,
  FormGroupDirective,
  NgForm,
  Validators,
} from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';
import { Router } from '@angular/router';
import usernameLengthValidator from './username-length.validator';

@Component({
  selector: 'app-dynamic-validation',
  templateUrl: './dynamic-validation.component.html',
  styleUrls: ['./dynamic-validation.component.css'],
})
export class DynamicValidationComponent implements OnInit {
  get username() {
    return this.profileForm.get('username');
  }
  // use this property for all fields which require form level validation
  errorMatcher: ErrorStateMatcher;
  profileForm: FormGroup = this.formBuilder.group(
    {
      usernameMinLength: this.formBuilder.control(3, [Validators.required]),
      usernameMaxLength: this.formBuilder.control(5, [Validators.required]),
      username: this.formBuilder.control('', [
        Validators.required,
        // Validators.minLength(3),
        // Validators.maxLength(5),
      ]),
    },
    { validators: [usernameLengthValidator] }
  );

  constructor(private formBuilder: FormBuilder, private router: Router) {
    this.errorMatcher = new CrossFieldErrorMatcher();
  }

  ngOnInit(): void {
    // ################ Below code DOES NOT work !!! ######################
    // this.profileForm = this.formBuilder.group({
    //   usernameMinLength: this.formBuilder.control(3, Validators.required),
    //   usernameMaxLength: this.formBuilder.control(5, Validators.required),
    // });
    // this.profileForm.addControl(
    //   'username',
    //   this.formBuilder.control('', [
    //     Validators.required,
    //     Validators.minLength(this.profileForm.get('usernameMinLength').value),
    //     Validators.maxLength(this.profileForm.get('usernameMaxLength').value),
    //   ])
    // );
  }

  next() {
    this.router.navigate(['/file-input']);
  }
}

class CrossFieldErrorMatcher implements ErrorStateMatcher {
  isErrorState(
    control: AbstractControl | null,
    form: FormGroupDirective | NgForm | null
  ): boolean {
    return control.touched && (control.errors !== null || form.errors !== null);
  }
}
