import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ApiPopulateRoutingModule } from './api-populate-routing.module';
import { ApiPopulateComponent } from './api-populate.component';
import { FormComponent } from './form/form.component';
import { HttpClientModule } from '@angular/common/http';
import { MaterialModule } from '../material/material.module';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [ApiPopulateComponent, FormComponent],
  imports: [
    CommonModule,
    HttpClientModule,
    ApiPopulateRoutingModule,
    MaterialModule,
    ReactiveFormsModule,
  ],
})
export class ApiPopulateModule {}
