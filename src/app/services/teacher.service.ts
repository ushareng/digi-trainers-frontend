import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Student } from '../models/student.model';
import { OnlineClass } from '../models/onlineClass.model';
import { Teacher } from '../models/teacher.model';
import { Event } from '../models/event.model';
import { Doubt } from '../models/doubt.model';

@Injectable({
  providedIn: 'root'
})
export class TeacherService {

  url: string = "http://localhost:8083";

  constructor(private http: HttpClient) { }

  addTeacher(teacher: Teacher) {
    return this.http.post(this.url + "/teacher/addTeacher", teacher);
  }

  getTeacherById(teacherId) {
    return this.http.get<Teacher>(this.url + "/teacher/getTeacher" + teacherId);
  }

  addEvent(event) {
    return this.http.post(this.url + "/event", event);
  }

  getEventsByTeacherId(teacherId) {
    return this.http.get<Event>(this.url + "/event/getEventsByTeacherId/" + teacherId);
  }

  deleteEvent(eventId) {
    return this.http.delete<Event>(this.url + "/event/deleteEvent/" + eventId);
  }

  getClassLists() {
    return this.http.get<OnlineClass>(this.url + "/class")
  }

  getDoubtsByTeacherId(teacherId) {
    return this.http.get<Doubt>(this.url + "/doubt/getDoubts/" + teacherId);
  }

  getStudentById(studentId: any) {
    return this.http.get<Student>(this.url + "/student/getStudent" + studentId);
  }

  updateTeacher(teacher: Teacher) {
    return this.http.put(this.url + "/teacher/updateTeacher", teacher);
  }


}
