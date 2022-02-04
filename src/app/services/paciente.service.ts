import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Paciente } from '../models/paciente';
import { global } from './global';

@Injectable({
  providedIn: 'root'
})

export class PacienteService {
  MAIN_URL = global.url;
  userToken: string;
  constructor(private http: HttpClient, private route: Router) {
    this.readToken();
  }

  getPacientes(){
    const headers = new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded').set('Authorization', JSON.parse(this.userToken));
    return this.http.get(this.MAIN_URL + 'pacientes', { headers });
  }

  readToken() {
      if (localStorage.getItem('token')) {
        this.userToken = localStorage.getItem('token');
      } else {
        this.userToken = '';
      }
      return this.userToken;
    }



}
