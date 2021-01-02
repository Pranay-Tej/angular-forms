import { NestedFormGroupComponent } from './nested-form-group/nested-form-group.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormArrayComponent } from './form-array/form-array.component';
import { FormControlComponent } from './form-control/form-control.component';
import { FormGroupComponent } from './form-group/form-group.component';
import { IndexComponent } from './index/index.component';
import { DynamicFormArrayComponent } from './dynamic-form-array/dynamic-form-array.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: IndexComponent
  },
  {
    path: 'form-control',
    component: FormControlComponent
  },
  {
    path: 'form-group',
    component: FormGroupComponent
  },
  {
    path: 'nested-form-group',
    component: NestedFormGroupComponent
  },
  {
    path: 'form-array',
    component: FormArrayComponent
  },
  {
    path: 'dynamic-form-array',
    component: DynamicFormArrayComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
