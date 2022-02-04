import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PacienteComponent } from './paciente.component';

const routes: Routes = [
  {
    path: '',
    component: PacienteComponent,
    data: {
      title: 'Pacientes'
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PacienteRoutingModule { }
