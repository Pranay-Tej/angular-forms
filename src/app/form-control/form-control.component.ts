import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-form-control',
  templateUrl: './form-control.component.html',
  styleUrls: ['./form-control.component.css']
})
export class FormControlComponent implements OnInit {

  email = new FormControl('', [Validators.required, Validators.email])
  password = new FormControl('', [Validators.required, Validators.minLength(6)])

  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  login(){
    let response = window.confirm(`email: ${this.email.value} \n password: ${this.password.value}`);
    if(response){
      this.router.navigate(['/form-group'])
    }
  }

}
