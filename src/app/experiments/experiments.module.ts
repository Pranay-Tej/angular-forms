import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ExperimentsRoutingModule } from './experiments-routing.module';
import { ExperimentsComponent } from './experiments.component';
import { FitnessFormComponent } from './fitness-form/fitness-form.component';

@NgModule({
  declarations: [ExperimentsComponent, FitnessFormComponent],
  imports: [CommonModule, ExperimentsRoutingModule],
})
export class ExperimentsModule {}
