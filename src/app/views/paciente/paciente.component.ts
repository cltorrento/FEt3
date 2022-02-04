import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Paciente } from '../../models/paciente';
import { PacienteService } from '../../services/paciente.service';


@Component({
  selector: 'app-paciente',
  templateUrl: './paciente.component.html',
  providers: [PacienteService]
})

export class PacienteComponent implements OnInit {
  pacientes: Paciente[] = [];
  errorMessage: boolean;
  constructor(private route: Router, private pacienteService: PacienteService) { }

  ngOnInit(): void {
    this.pacienteService.getPacientes().subscribe((data: Paciente[]) => {
     this.pacientes = data;
     console.log(this.pacientes);
   });
  }


}
