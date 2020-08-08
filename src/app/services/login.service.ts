import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import * as jwt_decode from 'jwt-decode';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private httpClient: HttpClient) { }


  public generateToken(request) {
    return this.httpClient.post<string>("http://localhost:8083/api/public/authenticate", request, { responseType: 'text' as 'json' });
  }

  getRole(token) {
    let role = jwt_decode(token)['jti'];
    return role;
  }

  isTokenExpired(token) {
    let exp = jwt_decode(token)['exp'];
    return exp > Date.now();
  }
}
