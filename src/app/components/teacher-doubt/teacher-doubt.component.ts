import { Component, OnInit } from '@angular/core';
import { TeacherService } from 'src/app/services/teacher.service';

@Component({
  selector: 'app-teacher-doubt',
  templateUrl: './teacher-doubt.component.html',
  styleUrls: ['./teacher-doubt.component.css']
})
export class TeacherDoubtComponent implements OnInit {

  searchText: any;
  doubtsList;

  constructor(private teacherService: TeacherService) { }

  ngOnInit() {
    this.teacherService.getDoubtsByTeacherId(data => {
      console.log(data)
      this.doubtsList=data;
    })
  }

}
