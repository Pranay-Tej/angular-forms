import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-form-group',
  templateUrl: './form-group.component.html',
  styleUrls: ['./form-group.component.css']
})
export class FormGroupComponent implements OnInit {

  loginForm : FormGroup;

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
      password: this.fb.control('', [Validators.required, Validators.minLength(6)])
    })
  }

  login(){
    let response = window.confirm(this.loginForm.getRawValue());
    console.log(this.loginForm.getRawValue());
    
    if(response){
      this.router.navigate(['/nested-form-group'])
    }
  }

}
