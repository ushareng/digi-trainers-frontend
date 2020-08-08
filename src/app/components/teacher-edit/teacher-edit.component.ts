import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-teacher-edit',
  templateUrl: './teacher-edit.component.html',
  styleUrls: ['./teacher-edit.component.css']
})
export class TeacherEditComponent implements OnInit {
  editForm: FormGroup;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.editForm = this.formBuilder.group({
      name: ['', [Validators.required]],
      contact: ['', [Validators.required]],
      contactEmail: ['', [Validators.required]],
      password: ['', [Validators.required]]
    });
  }

  get f() { return this.editForm.controls; }

  updateProfile() {
    console.log(this.editForm.value)
  }


}
