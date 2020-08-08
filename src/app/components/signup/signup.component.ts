import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  signupForm:FormGroup;
  submitted: boolean = false;

  constructor(private formBuilder:FormBuilder) { }

  ngOnInit() {
    this.signupForm = this.formBuilder.group({
      name: ['', [Validators.required]],
      phone: ['', [Validators.required, Validators.pattern("[6-9]{1}[0-9]{9}")]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
      type: ['', [Validators.required]],
    });
  }

  get f() { return this.signupForm.controls; }

  verifySignup() {
    this.submitted = true;
    if (this.signupForm.invalid) {
      return;
    }

    console.log(this.signupForm.value);
  }

}
