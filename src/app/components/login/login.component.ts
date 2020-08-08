import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      userEmail: ['', [Validators.required, Validators.pattern("[6-9]{1}[0-9]{9}")]],
      userPassword: ['', Validators.required]
    });
  }

  verifyLogin(){
    console.log(this.loginForm.value);
  }
}

