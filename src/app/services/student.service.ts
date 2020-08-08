import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Doubt } from '../models/doubt.model';
import { Student } from '../models/student.model';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  url: string = "http://localhost:8083";

  constructor(private http: HttpClient) { }

  addStudent(student: Student) {
    this.http.post(this.url + "/student/addStudent", student);
  }

  getStudentById(studentId) {
    this.http.get<Student>(this.url + "/student/getStudent/" + studentId);
  }

  getEventsByStudentId(studentId) {
    this.http.get<Event>(this.url + "/event/getEventsByStudentId/" + studentId);
  }

  getDoubtsByStudentId(studentId) {
    this.http.get<Doubt>(this.url + "/doubt/getDoubtsByStudentId/" + studentId);
  }

  updateStudent(student: Student) {
    this.http.put(this.url + "/student/updateStudent", student);
  }

}
