import { Component, OnInit } from '@angular/core';
import { TeacherService } from 'src/app/services/teacher.service';

@Component({
  selector: 'app-teacher-find-student',
  templateUrl: './teacher-find-student.component.html',
  styleUrls: ['./teacher-find-student.component.css']
})
export class TeacherFindStudentComponent implements OnInit {

  studentId;
  student;

  constructor(private teacherService:TeacherService) { }

  ngOnInit() {
  }

  searchStudent(studentId){
    this.teacherService.getStudentById(studentId).subscribe(data=>{
      console.log(data)
      this.student=data;
    })
  }

}
