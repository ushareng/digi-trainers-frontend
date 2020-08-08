import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-student-edit',
  templateUrl: './student-edit.component.html',
  styleUrls: ['./student-edit.component.css']
})
export class StudentEditComponent implements OnInit {

  editForm:FormGroup;
  submitted: boolean = false;

  constructor(private formBuilder:FormBuilder) { }

  ngOnInit() {
    this.editForm = this.formBuilder.group({
      name: ['', [Validators.required]],
      phone: ['', [Validators.required, Validators.pattern("[6-9]{1}[0-9]{9}")]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
      fatherName: ['', [Validators.required]],
      motherName: ['', [Validators.required]]
    });
  }

  get f() { return this.editForm.controls; }

  updateProfile() {
    this.submitted = true;
    if (this.editForm.invalid) {
      return;
    }

    console.log(this.editForm.value);
  }

}
 