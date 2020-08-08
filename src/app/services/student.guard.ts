import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';
import { LoginService } from './login.service';

@Injectable({
  providedIn: 'root'
})
export class StudentGuard implements CanActivate {

  constructor(private loginService : LoginService, private router: Router){}
  canActivate(): boolean {
    let token = localStorage.getItem('token');

    if (token && this.loginService.getRole(token) == 'ROLE_STUDENT' && !this.loginService.isTokenExpired(token)) {
      return true;
    }
    this.router.navigate(['login']);
    return false;
  }
}
