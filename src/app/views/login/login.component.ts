import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../../models/user';
import { UserService } from '../../services/user.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-dashboard',
  templateUrl: 'login.component.html',
  providers: [UserService]
})

export class LoginComponent implements OnInit {
  public user: User;
  errorMessage: boolean;
  constructor(private route: Router, private userService: UserService) {

  }

  ngOnInit() {
    this.user = new User();
  }

  onSubmit(form: NgForm) {
    this.userService.logIn(this.user).subscribe(
      resp => {
        if (resp.hasOwnProperty('status')) {
          console.log('error de autenticacion');
          this.errorMessage = true;
          return false;
        }else {
          localStorage.setItem('token', JSON.stringify(resp));
          localStorage.setItem('usuario', JSON.stringify(resp));
          this.route.navigateByUrl('/dashboard');
        }
      },
    );
  }




}
