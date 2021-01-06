import { FormBuilder, FormGroup, Validators, FormArray } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-fitness-form',
  templateUrl: './fitness-form.component.html',
  styleUrls: ['./fitness-form.component.css'],
})
export class FitnessFormComponent implements OnInit {

  weekList: string[] = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"]

  get permanentSchedule(){
    return this.fitnessForm.get('permanentSchedule');
  }

  get trackWaterIntake(){
    return this.fitnessForm.get('trackWaterIntake');
  }

  get weekFormArray(){
    return this.fitnessForm.get('week') as FormArray;
  }

  fitnessForm: FormGroup = this.fb.group({
    startDate: this.fb.control(new Date(), Validators.required),
    endDate: this.fb.control(
      { value: new Date(), disabled: true },
      Validators.required
    ),
    permanentSchedule: this.fb.control(true),
    trackWaterIntake: this.fb.control(true),
    week: this.fb.array(
      this.weekList.map((day) =>
        this.fb.group({
          enableDay: this.fb.control(true),
          day: this.fb.control(day),
          calorieIntake: this.fb.control(0, Validators.required),
          stepCount: this.fb.control(0, Validators.required),
          caloriesBurned: this.fb.control({value:0, disabled: true}),
          waterIntake: this.fb.control(0, Validators.required)
        })
      )
    )
  });

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {}

  saveSchedule(){
    console.log(this.fitnessForm.getRawValue());
  }

  toggleEndDate(){
    if(this.permanentSchedule.value === true){
      this.fitnessForm.get('endDate').disable();
    }else{
      this.fitnessForm.get('endDate').enable();
    }
  }

  toggleWaterIntake(){
    this.weekFormArray.controls.forEach((day) => {
      if(day.get('enableDay').value === true && this.trackWaterIntake.value === true){
        day.get('waterIntake').enable();
      }else{
        day.get('waterIntake').disable();
      }
    });
  }

  toggleDay(i){
    if(this.weekFormArray.controls[i].get('enableDay').value === true){
      this.weekFormArray.controls[i].get('calorieIntake').enable();
      this.weekFormArray.controls[i].get('stepCount').enable();
      if(this.trackWaterIntake.value === true){
        this.weekFormArray.controls[i].get('waterIntake').enable();
      }
    }else{
      this.weekFormArray.controls[i].get('calorieIntake').disable();
      this.weekFormArray.controls[i].get('stepCount').disable();
      this.weekFormArray.controls[i].get('waterIntake').disable();
    }
  }

  calculateCaloriesBurned(i){
    let steps: number = this.weekFormArray.controls[i].get('stepCount').value;
    let caloriesBurned: number = steps * (40/1000);
    this.weekFormArray.controls[i].get('caloriesBurned').setValue(caloriesBurned);
  }
}
