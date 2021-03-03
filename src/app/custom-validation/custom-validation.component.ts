import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import invalidPatternValidator from './invalid-pattern.validator';
import usernameValidator from './username.validator';

@Component({
  selector: 'app-custom-validation',
  templateUrl: './custom-validation.component.html',
  styleUrls: ['./custom-validation.component.css'],
})
export class CustomValidationComponent implements OnInit {
  get username() {
    return this.profileForm.get('username');
  }

  profileForm: FormGroup = this.formBuilder.group({
    username: this.formBuilder.control('', [
      Validators.required,
      usernameValidator,
      invalidPatternValidator(/password/),
    ]),
  });

  constructor(private formBuilder: FormBuilder, private router:Router) {}

  ngOnInit(): void {}

  next(){
    this.router.navigate(['/cross-field-validation'])
  }
}
