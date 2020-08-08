import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { TeacherService } from 'src/app/services/teacher.service';

@Component({
  selector: 'app-teacher-home',
  templateUrl: './teacher-home.component.html',
  styleUrls: ['./teacher-home.component.css']
})
export class TeacherHomeComponent implements OnInit {
 
  eventForm: FormGroup;
  classList;
  
  constructor(private formBuilder: FormBuilder,private teacherService:TeacherService) { }

  ngOnInit() {

    this.teacherService.getClassLists().subscribe(data=>{
      console.log(data)
      this.classList=data;
    })

    this.eventForm = this.formBuilder.group({
      subject: ['', [Validators.required]],
      topic: ['', [Validators.required]],
      eventDate: ['', [Validators.required]],
      meetingLink: ['', [Validators.required]],
      pptLink: ['', [Validators.required]],
      assignmentLink: ['', [Validators.required]],
      description: ['', [Validators.required]],
      className:['', [Validators.required]]
    });
  }

  get f() { return this.eventForm.controls; }

  verifyEvent(){
    console.log(this.eventForm.value)

    this.teacherService.addEvent(this.eventForm.value).subscribe(data=>{
      console.log(data)
    })
  }

}
