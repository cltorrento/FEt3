import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { User } from '../models/user';
import { global } from './global';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})

export class UserService {
  MAIN_URL = global.url;
  userToken: string;
  constructor(private http: HttpClient, private route: Router) {
    this.readToken();
  }

  logIn(usuario: User) {
    const datos = {
      email: usuario.email,
      password: usuario.password
    };
    return this.http.post(this.MAIN_URL + 'login', { json: JSON.stringify(datos) });
  }

  logOut() {
    localStorage.removeItem('token');
    localStorage.removeItem('usuario');
    this.route.navigateByUrl('');
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
