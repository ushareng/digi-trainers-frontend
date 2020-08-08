import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-teacher-home',
  templateUrl: './teacher-home.component.html',
  styleUrls: ['./teacher-home.component.css']
})
export class TeacherHomeComponent implements OnInit {
 
  eventForm: FormGroup;
  
  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.eventForm = this.formBuilder.group({
      subject: ['', [Validators.required]],
      topic: ['', [Validators.required]],
      eventDate: ['', [Validators.required]],
      meetingLink: ['', [Validators.required]],
      pptLink: ['', [Validators.required]],
      assignmentLink: ['', [Validators.required]],
      description: ['', [Validators.required]]
    });
  }

  get f() { return this.eventForm.controls; }

  verifyEvent(){
    console.log(this.eventForm.value)
  }

}
