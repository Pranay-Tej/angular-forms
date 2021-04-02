import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-array-of-dates',
  templateUrl: './array-of-dates.component.html',
  styleUrls: ['./array-of-dates.component.css'],
})
export class ArrayOfDatesComponent implements OnInit {
  eventsForm: FormGroup;

  get eventListFormArray() {
    return this.eventsForm.get('eventList') as FormArray;
  }

  constructor(private fb: FormBuilder, private router: Router) {}

  ngOnInit(): void {
    this.eventsForm = this.fb.group({
      eventList: this.fb.array([
        this.fb.group({
          startDate: this.fb.control('', Validators.required),
          startTime: this.fb.control('', Validators.required),
          endDate: this.fb.control('', Validators.required),
          endTime: this.fb.control('', Validators.required),
        }),
      ]),
    });
  }

  addEvent() {
    let eventFormControl: FormGroup = this.fb.group({
      startDate: this.fb.control('', Validators.required),
      startTime: this.fb.control('', Validators.required),
      endDate: this.fb.control('', Validators.required),
      endTime: this.fb.control('', Validators.required),
    });

    this.eventListFormArray.push(eventFormControl);
  }

  deleteEvent(i: number) {
    this.eventListFormArray.removeAt(i);
  }

  save() {
    let response = window.confirm(this.eventsForm.getRawValue());
    console.log(this.eventsForm.getRawValue());

    if (response) {
      this.router.navigate(['']);
    }
  }
}
