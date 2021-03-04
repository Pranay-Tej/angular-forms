import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import passwordValidator from './password.validator';

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

  signUpForm: FormGroup = this.formBuilder.group(
    {
      username: this.formBuilder.control('', [Validators.required]),
      password: this.formBuilder.control('', [Validators.required]),
      confirmPassword: this.formBuilder.control('', [Validators.required]),
    },
    { validators: passwordValidator }
  );

  constructor(private formBuilder: FormBuilder, private router:Router) {}

  ngOnInit(): void {}

  next() {
    console.log(this.signUpForm.getRawValue())
    this.router.navigate(['/dynamic-validation'])
  }
}
