import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { LoginService } from 'src/app/services/login.service';
import * as jwt_decode from 'jwt-decode';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;

  constructor(private formBuilder: FormBuilder, private service : LoginService, private router : Router) { }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      userEmail: ['', Validators.required],
      userPassword: ['', Validators.required]
    });
  }

  verifyLogin(){
      if(this.loginForm.invalid){
        return;
      }
      let data = { username : '' , password : ''};
      console.log(this.loginForm.controls.userEmail.value)
      this.service.generateToken({ username : this.loginForm.controls.userEmail.value, password : this.loginForm.controls['userPassword'].value})
        .subscribe(data => {
          console.log(JSON.parse(data)['jwt']);
          localStorage.setItem('token', (JSON.parse(data)['jwt']));
          let role = jwt_decode(data)['jti'];
          console.log(role);
          if (role == 'ROLE_STUDENT') {
            this.router.navigate(['student', 'home']);
          }
          else if (role == 'ROLE_ADMIN') {
            this.router.navigate(['admin', 'home'])
          }
          else if (role == 'ROLE_TEACHER') {
            this.router.navigate(['teacher', 'home']);
          }
        }, err=> {
          console.log(err);
        })
  }
}

