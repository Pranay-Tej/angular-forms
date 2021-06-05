import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ApiPopulateComponent } from './api-populate.component';
import { FormComponent } from './form/form.component';

const routes: Routes = [
  { path: '', component: ApiPopulateComponent },
  {
    path: ':id',
    component: FormComponent,
  },
  {
    path: '**',
    redirectTo: '',
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ApiPopulateRoutingModule {}
