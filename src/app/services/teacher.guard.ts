import { Injectable } from '@angular/core';
import { LoginService } from './login.service';
import {  Router, CanActivate } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class TeacherGuard implements CanActivate {

  constructor(private router: Router, private  loginService: LoginService) { }

  canActivate(): boolean {
    let token = localStorage.getItem('token');

    if (token && this.loginService.getRole(token) == 'ROLE_TEACHER' && !this.loginService.isTokenExpired(token)) {
      return true;
    }
    this.router.navigate(['login']);
    return false;
  }
  
}
