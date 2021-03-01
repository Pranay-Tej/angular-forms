import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormControlComponent } from './form-control/form-control.component';
import { IndexComponent } from './index/index.component';
import { FormGroupComponent } from './form-group/form-group.component';
import { FormArrayComponent } from './form-array/form-array.component';
import { NestedFormGroupComponent } from './nested-form-group/nested-form-group.component';
import { DynamicFormArrayComponent } from './dynamic-form-array/dynamic-form-array.component';
import { ArrayOfGroupsComponent } from './array-of-groups/array-of-groups.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { ConceptsComponent } from './concepts/concepts.component';
import { FileInputComponent } from './file-input/file-input.component';

@NgModule({
  declarations: [
    AppComponent,
    FormControlComponent,
    IndexComponent,
    FormGroupComponent,
    FormArrayComponent,
    NestedFormGroupComponent,
    DynamicFormArrayComponent,
    ArrayOfGroupsComponent,
    NavBarComponent,
    ConceptsComponent,
    FileInputComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
