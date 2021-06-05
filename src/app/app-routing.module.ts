import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ArrayOfDatesComponent } from './array-of-dates/array-of-dates.component';
import { ArrayOfGroupsComponent } from './array-of-groups/array-of-groups.component';
import { CheckboxGroupComponent } from './checkbox-group/checkbox-group.component';
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
import { NestedFormGroupComponent } from './nested-form-group/nested-form-group.component';
import { RadioGroupComponent } from './radio-group/radio-group.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: IndexComponent,
  },
  {
    path: 'concepts',
    component: ConceptsComponent,
  },
  {
    path: 'form-control',
    component: FormControlComponent,
  },
  {
    path: 'form-group',
    component: FormGroupComponent,
  },
  {
    path: 'nested-form-group',
    component: NestedFormGroupComponent,
  },
  {
    path: 'form-array',
    component: FormArrayComponent,
  },
  {
    path: 'dynamic-form-array',
    component: DynamicFormArrayComponent,
  },
  {
    path: 'radio-group',
    component: RadioGroupComponent,
  },
  {
    path: 'checkbox-group',
    component: CheckboxGroupComponent,
  },
  {
    path: 'array-of-groups',
    component: ArrayOfGroupsComponent,
  },
  {
    path: 'custom-validation',
    component: CustomValidationComponent,
  },
  {
    path: 'cross-field-validation',
    component: CrossFieldValidationComponent,
  },
  {
    path: 'dynamic-validation',
    component: DynamicValidationComponent,
  },
  {
    path: 'file-input',
    component: FileInputComponent,
  },
  {
    path: 'array-of-dates',
    component: ArrayOfDatesComponent,
  },
  {
    path: 'api-populate',
    loadChildren: () =>
      import('./api-populate/api-populate.module').then(
        (m) => m.ApiPopulateModule
      ),
  },
  {
    path: 'experiments',
    loadChildren: () =>
      import('./experiments/experiments.module').then(
        (m) => m.ExperimentsModule
      ),
  },
  {
    path: '**',
    redirectTo: '',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
