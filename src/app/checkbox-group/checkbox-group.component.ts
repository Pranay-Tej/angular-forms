import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import {
  FormArray,
  FormBuilder,
  FormControl,
  Validators,
} from '@angular/forms';
import { MatCheckboxChange } from '@angular/material/checkbox';
import minArrayLengthValidator from './min-array-length.validator';

@Component({
  selector: 'app-checkbox-group',
  templateUrl: './checkbox-group.component.html',
  styleUrls: ['./checkbox-group.component.css'],
})
export class CheckboxGroupComponent implements OnInit {
  softwareForm = this.fb.group({
    softwareList: this.fb.array(
      [],
      [
        Validators.required,
        // for multiple required items
        minArrayLengthValidator(2),
      ]
    ),
  });

  allSoftware = ['Postman', 'MongoDB', 'VS Code'];

  get softwareList() {
    return this.softwareForm.get('softwareList') as FormArray;
  }

  constructor(private fb: FormBuilder, private router: Router) {}

  ngOnInit(): void {}

  onCheckChange(event: MatCheckboxChange) {
    if (event.checked) {
      this.softwareList.push(new FormControl(event.source.value));
    } else {
      let i: number = 0;
      this.softwareList.controls.forEach((item: FormControl) => {
        if (item.value === event.source.value) {
          this.softwareList.removeAt(i);
          return;
        }
        i++;
      });
    }
  }

  next() {
    console.log(this.softwareForm.getRawValue());
    this.router.navigate(['/array-of-groups']);
  }
}
