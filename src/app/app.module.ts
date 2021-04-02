import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ArrayOfGroupsComponent } from './array-of-groups/array-of-groups.component';
import { ConceptsComponent } from './concepts/concepts.component';
import { CrossFieldValidationComponent } from './cross-field-validation/cross-field-validation.component';
import { CustomValidationComponent } from './custom-validation/custom-validation.component';
import { DynamicFormArrayComponent } from './dynamic-form-array/dynamic-form-array.component';
import { DynamicValidationComponent } from './dynamic-validation/dynamic-validation.component';
import { FileInputComponent } from './file-input/file-input.component';
import { FormArrayComponent } from './form-array/form-array.component';
import { FormControlComponent } from './form-control/form-control.component';
import { FormGroupComponent } from './form-group/form-group.component';
import { IndexComponent } from './index/index.component';
import { MaterialModule } from './material/material.module';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { NestedFormGroupComponent } from './nested-form-group/nested-form-group.component';
import { ArrayOfDatesComponent } from './array-of-dates/array-of-dates.component';

@NgModule({
  declarations: [
    AppComponent,
    ArrayOfGroupsComponent,
    ConceptsComponent,
    CrossFieldValidationComponent,
    CustomValidationComponent,
    DynamicFormArrayComponent,
    DynamicValidationComponent,
    FileInputComponent,
    FormArrayComponent,
    FormControlComponent,
    FormGroupComponent,
    IndexComponent,
    NavBarComponent,
    NestedFormGroupComponent,
    ArrayOfDatesComponent,
  ],
  imports: [
    AppRoutingModule,
    BrowserAnimationsModule,
    BrowserModule,
    FormsModule,
    MaterialModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
