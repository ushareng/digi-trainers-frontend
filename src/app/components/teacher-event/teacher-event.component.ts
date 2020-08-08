import { Component, OnInit } from '@angular/core';
import { TeacherService } from 'src/app/services/teacher.service';

@Component({
  selector: 'app-teacher-event',
  templateUrl: './teacher-event.component.html',
  styleUrls: ['./teacher-event.component.css']
})
export class TeacherEventComponent implements OnInit {

  searchText:any;
  teacherId;
  eventsList;
  
  constructor(private teacherService:TeacherService) { }

  ngOnInit() {
    this.teacherService.getEventsByTeacherId(this.teacherId).subscribe(data=>{
      console.log(data)
      this.eventsList=data;
    })
  }

}
