import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormControlComponent } from './form-control/form-control.component';
import { FormGroupComponent } from './form-group/form-group.component';
import { IndexComponent } from './index/index.component';

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
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
