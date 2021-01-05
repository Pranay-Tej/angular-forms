import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ExperimentsComponent } from './experiments.component';
import { FitnessFormComponent } from './fitness-form/fitness-form.component';

const routes: Routes = [
  { path: '',
    component: ExperimentsComponent
  },
  {
    path: 'fitness',
    component: FitnessFormComponent,
  },
  {
    path: '**',
    redirectTo: ''
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ExperimentsRoutingModule {}
