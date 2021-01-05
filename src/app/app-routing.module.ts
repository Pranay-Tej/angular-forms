import { ArrayOfGroupsComponent } from './array-of-groups/array-of-groups.component';
import { NestedFormGroupComponent } from './nested-form-group/nested-form-group.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormArrayComponent } from './form-array/form-array.component';
import { FormControlComponent } from './form-control/form-control.component';
import { FormGroupComponent } from './form-group/form-group.component';
import { IndexComponent } from './index/index.component';
import { DynamicFormArrayComponent } from './dynamic-form-array/dynamic-form-array.component';
import { ConceptsComponent } from './concepts/concepts.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: IndexComponent,
  },
  {
    path: 'concepts',
    component: ConceptsComponent
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
    path: 'array-of-groups',
    component: ArrayOfGroupsComponent,
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
    redirectTo: ''
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
