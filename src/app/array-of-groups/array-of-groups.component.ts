import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators, FormArray } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-array-of-groups',
  templateUrl: './array-of-groups.component.html',
  styleUrls: ['./array-of-groups.component.css'],
})
export class ArrayOfGroupsComponent implements OnInit {
  loginForm: FormGroup;

  get userListFormArray() {
    return this.loginForm.get('userList') as FormArray;
  }

  constructor(private fb: FormBuilder, private router: Router) {}

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      userList: this.fb.array([
        this.fb.group({
          firstName: this.fb.control('', Validators.required),
          lastName: this.fb.control('', Validators.required),
        }),
      ]),
    });
  }

  addUser() {
    let userFormControl: FormGroup = this.fb.group({
      firstName: this.fb.control('', Validators.required),
      lastName: this.fb.control('', Validators.required),
    });

    this.userListFormArray.push(userFormControl);
  }

  deleteUser(i: number) {
    this.userListFormArray.removeAt(i);
  }

  login() {
    let response = window.confirm(this.loginForm.getRawValue());
    console.log(this.loginForm.getRawValue());

    if (response) {
      this.router.navigate(['']);
    }
  }
}
