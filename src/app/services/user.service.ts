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

 
  /*********************
    Login for user
  *********************/
  logIn(usuario: User) {
    const datos = {
      email: usuario.email,
      password: usuario.password
    };
    return this.http.post(this.MAIN_URL + 'login', { json: JSON.stringify(datos) });
  }


  /****************
   * Update user
   ****************/
  updateUser(user: User) {
    const json = JSON.stringify(user);
    const params = 'json=' + json;
    const headers = new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded')
      .set('Authorization', JSON.parse(this.userToken));

    return this.http.put(this.MAIN_URL + 'usuario/actualizar', params, { headers });
  }


  /*********************************
   * get the all users system info
   ********************************/
  getAllUsers() {
    // tslint:disable-next-line: max-line-length
    const headers = new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded').set('Authorization', JSON.parse(this.userToken));
    return this.http.get(this.MAIN_URL + 'usuarios', { headers });
  }

  /*********************
  Get a Specific User
  **********************/
  getUser(id: number) {
    return this.http.get(this.MAIN_URL + `usuario/detalle/${id}`);
  }


  /********************************
  * Delete the token to logOut
  ********************************/
  logOut() {
    localStorage.removeItem('token');
    localStorage.removeItem('usuario');
    localStorage.removeItem('expiresOn');
    this.route.navigateByUrl('/login');
  }


  /****************
  **Read the token
  *****************/
  readToken() {
    if (localStorage.getItem('token')) {
      this.userToken = localStorage.getItem('token');
    } else {
      this.userToken = '';
    }
    return this.userToken;
  }


  /*******************************************************
   * verify if the user is autneticated to with the guard
    *********************************************************/
  autenticado(): boolean {
    if (this.userToken.length < 2) {
      return false;
    }

    const expireOn = Number(localStorage.getItem('expiresOn'));
    const today = new Date();
    today.setTime(expireOn);

    if (today > new Date()) {
      return true;
    }
    else {
      this.logOut();
      return false;
    }

  }

  /************************
   Save the Token in LC
   *************************/
  // saveToken(token: string) {
  //   this.userToken = token;
  //   localStorage.setItem('token', this.userToken);
  // }

}