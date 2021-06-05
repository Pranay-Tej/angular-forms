import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import {
  FormArray,
  FormBuilder,
  FormGroup,
  Validators,
  FormControl,
} from '@angular/forms';

@Component({
  selector: 'app-dynamic-form-array',
  templateUrl: './dynamic-form-array.component.html',
  styleUrls: ['./dynamic-form-array.component.css'],
})
export class DynamicFormArrayComponent implements OnInit {
  loginForm: FormGroup;

  get phoneNumbers() {
    return this.loginForm.get('phoneNumbers') as FormArray;
  }

  constructor(private fb: FormBuilder, private router: Router) {}

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      phoneNumbers: this.fb.array([
        this.fb.control('', [
          Validators.required,
          Validators.minLength(10),
          Validators.maxLength(10),
          Validators.pattern('^[0-9]*$'),
        ]),
      ]),
    });
  }

  addPhoneNumber() {
    let phoneNumberFormControl: FormControl = this.fb.control('', [
      Validators.required,
      Validators.minLength(10),
      Validators.maxLength(10),
      Validators.pattern('^[0-9]*$'),
    ]);

    this.phoneNumbers.push(phoneNumberFormControl);
  }

  deletePhoneNumber(i: number) {
    this.phoneNumbers.removeAt(i);
  }

  login() {
    let response = window.confirm(this.loginForm.getRawValue());
    console.log(this.loginForm.getRawValue());

    if (response) {
      this.router.navigate(['/radio-group']);
    }
  }
}
