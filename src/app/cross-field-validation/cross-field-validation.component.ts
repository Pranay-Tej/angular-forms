import { Router } from '@angular/router';
import {
  FormBuilder,
  FormGroup,
  Validators,
  AbstractControl,
  FormGroupDirective,
  NgForm,
} from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import passwordValidator from './password.validator';
import { ErrorStateMatcher } from '@angular/material/core';

@Component({
  selector: 'app-cross-field-validation',
  templateUrl: './cross-field-validation.component.html',
  styleUrls: ['./cross-field-validation.component.css'],
})
export class CrossFieldValidationComponent implements OnInit {
  get username() {
    return this.signUpForm.get('username');
  }
  get password() {
    return this.signUpForm.get('password');
  }
  get confirmPassword() {
    return this.signUpForm.get('confirmPassword');
  }
  // use this property for all fields which require form level validation
  errorMatcher: ErrorStateMatcher;
  signUpForm: FormGroup = this.formBuilder.group(
    {
      username: this.formBuilder.control('', [Validators.required]),
      password: this.formBuilder.control('', [Validators.required]),
      confirmPassword: this.formBuilder.control('', [Validators.required]),
    },
    { validators: [passwordValidator] }
  );

  constructor(private formBuilder: FormBuilder, private router: Router) {
    this.errorMatcher = new CrossFieldErrorMatcher();
  }

  ngOnInit(): void {}

  next() {
    console.log(this.signUpForm.getRawValue());
    this.router.navigate(['/dynamic-validation']);
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
