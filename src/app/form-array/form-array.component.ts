import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-form-array',
  templateUrl: './form-array.component.html',
  styleUrls: ['./form-array.component.css']
})
export class FormArrayComponent implements OnInit {

  loginForm : FormGroup;
  
  get phoneNumbers(){
    return this.loginForm.get('phoneNumbers') as FormArray
  }
  
  constructor(private fb:FormBuilder, private router:Router) {}

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      phoneNumbers : this.fb.array([
        this.fb.control('', [Validators.required, Validators.minLength(10), Validators.maxLength(10), Validators.pattern('^[0-9]*$')]),
        this.fb.control('', [Validators.required, Validators.minLength(10), Validators.maxLength(10), Validators.pattern('^[0-9]*$')]),
      ])
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
