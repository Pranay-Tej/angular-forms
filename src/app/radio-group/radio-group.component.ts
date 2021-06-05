import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-radio-group',
  templateUrl: './radio-group.component.html',
  styleUrls: ['./radio-group.component.css'],
})
export class RadioGroupComponent implements OnInit {
  osList = ['Windows', 'Mac', 'Linux'];

  osForm = this.fb.group({
    system: this.fb.control('', Validators.required),
  });

  get system() {
    return this.osForm.get('system');
  }

  constructor(private fb: FormBuilder, private router: Router) {}

  ngOnInit(): void {}

  next() {
    console.log(this.osForm.getRawValue());
    this.router.navigate(['/checkbox-group']);
  }
}
