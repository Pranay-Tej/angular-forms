import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
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
    { validators: usernameLengthValidator }
  );

  constructor(private formBuilder: FormBuilder, private router: Router) {}

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
