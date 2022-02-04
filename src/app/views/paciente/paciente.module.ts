import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PacienteComponent } from './paciente.component';
import { PacienteRoutingModule } from './paciente-routing.module';


@NgModule({
  declarations: [
    PacienteComponent
  ],
  imports: [
    CommonModule,
    PacienteRoutingModule
  ]
})
export class PacienteModule { }
