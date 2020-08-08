import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import {NgxPaginationModule} from 'ngx-pagination';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { ReactiveFormsModule, FormsModule } from "@angular/forms";
import { StudentComponent } from './components/student/student.component';
import { StudentHomeComponent } from './components/student-home/student-home.component';
import { StudentDoubtComponent } from './components/student-doubt/student-doubt.component';
import { TeacherComponent } from './components/teacher/teacher.component';
import { TeacherHomeComponent } from './components/teacher-home/teacher-home.component';
import { TeacherDoubtComponent } from './components/teacher-doubt/teacher-doubt.component';
import { TeacherEventComponent } from './components/teacher-event/teacher-event.component';
import { StudentEditComponent } from './components/student-edit/student-edit.component';
import { TeacherEditComponent } from './components/teacher-edit/teacher-edit.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    LoginComponent,
    SignupComponent,
    StudentComponent,
    StudentHomeComponent,
    StudentDoubtComponent,
    TeacherComponent,
    TeacherHomeComponent,
    TeacherDoubtComponent,
    TeacherEventComponent,
    StudentEditComponent,
    TeacherEditComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    NgxPaginationModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
