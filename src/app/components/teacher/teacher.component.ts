import { Component, OnInit } from '@angular/core';
import { TeacherService } from 'src/app/services/teacher.service';

@Component({
  selector: 'app-teacher',
  templateUrl: './teacher.component.html',
  styleUrls: ['./teacher.component.css']
})
export class TeacherComponent implements OnInit {

  teacherId;

  constructor(private teacherService:TeacherService) { }

  ngOnInit() {
    this.teacherService.getTeacherById(this.teacherId).subscribe(data=>{
      console.log(data)
    })
  }

  logOut(){
    
  }

}
