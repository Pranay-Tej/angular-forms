import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nested-form-group',
  templateUrl: './nested-form-group.component.html',
  styleUrls: ['./nested-form-group.component.css']
})
export class NestedFormGroupComponent implements OnInit {

  loginForm : FormGroup;

  // get address(){
  //   return this.loginForm.get('address') as FormGroup;
  // }

  get email(){
    return this.loginForm.get('email');
  }

  get password(){
    return this.loginForm.get('password');
  }

  constructor(private fb:FormBuilder, private router:Router) {}

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      email: this.fb.control('', [Validators.required, Validators.email]),
      password: this.fb.control('', [Validators.required, Validators.minLength(6)]),
      address: this.fb.group({
        street: this.fb.control('', Validators.required),
        postalCode: this.fb.control('', [Validators.required, Validators.pattern('^[0-9]*$')]),
        city: this.fb.control('', Validators.required),
        country: this.fb.control('', Validators.required)
      })
    })
  }

  login(){
    let response = window.confirm(this.loginForm.getRawValue());
    console.log(this.loginForm.getRawValue());
    
    if(response){
      this.router.navigate([''])
    }
  }

}
