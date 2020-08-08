import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { TeacherService } from 'src/app/services/teacher.service';

@Component({
  selector: 'app-teacher-edit',
  templateUrl: './teacher-edit.component.html',
  styleUrls: ['./teacher-edit.component.css']
})
export class TeacherEditComponent implements OnInit {

  teacherId;
  teacher;
  editForm: FormGroup;

  constructor(private formBuilder: FormBuilder,private teacherService:TeacherService) { }

  ngOnInit() {
    
    this.editForm = this.formBuilder.group({
      name: ['', [Validators.required]],
      contact: ['', [Validators.required]],
      contactEmail: ['', [Validators.required]],
      password: ['', [Validators.required]]
    });

    this.teacherService.getTeacherById(this.teacherId).subscribe(data=>{
      console.log(data)
      this.teacher=data;
      this.editForm.setValue(this.teacher);
    })
  }

  get f() { return this.editForm.controls; }

  updateProfile() {
    console.log(this.editForm.value)
    this.teacherService.updateTeacher(this.editForm.value).subscribe(data=>{
      console.log(data)
    })
  }


}
