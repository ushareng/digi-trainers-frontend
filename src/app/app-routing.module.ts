import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { StudentComponent } from './components/student/student.component';
import { TeacherComponent } from './components/teacher/teacher.component';
import { StudentHomeComponent } from './components/student-home/student-home.component';
import { StudentDoubtComponent } from './components/student-doubt/student-doubt.component';
import { StudentEditComponent } from './components/student-edit/student-edit.component';
import { TeacherHomeComponent } from './components/teacher-home/teacher-home.component';
import { TeacherDoubtComponent } from './components/teacher-doubt/teacher-doubt.component';
import { TeacherEditComponent } from './components/teacher-edit/teacher-edit.component';
import { TeacherEventComponent } from './components/teacher-event/teacher-event.component';
import { TeacherFindStudentComponent } from './components/teacher-find-student/teacher-find-student.component';
import { StudentRaiseDoubtComponent } from './components/student-raise-doubt/student-raise-doubt.component';
import { StudentGuard } from './services/student.guard';
import { TeacherGuard } from './services/teacher.guard';


const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent },
  {
    path: 'student', component: StudentComponent, children: [
      { path: 'home', component: StudentHomeComponent, canActivate: [StudentGuard] },
      { path: 'raise-doubt', component: StudentRaiseDoubtComponent, canActivate: [StudentGuard] },
      { path: 'doubt', component: StudentDoubtComponent, canActivate: [StudentGuard] },
      { path: 'edit-profile', component: StudentEditComponent, canActivate: [StudentGuard] },
      { path: '**', component: StudentHomeComponent, canActivate: [StudentGuard]  }
    ]
  },
  {
    path: 'teacher', component: TeacherComponent, children: [
      { path: 'home', component: TeacherHomeComponent, canActivate : [TeacherGuard] },
      { path: 'events', component: TeacherEventComponent, canActivate: [TeacherGuard]  },
      { path: 'doubt', component: TeacherDoubtComponent, canActivate: [TeacherGuard]  },
      { path: 'find-student', component: TeacherFindStudentComponent, canActivate: [TeacherGuard]  },
      { path: 'edit-profile', component: TeacherEditComponent, canActivate: [TeacherGuard]  },
      { path: '**', component: TeacherHomeComponent, canActivate: [TeacherGuard] }
    ]
  },
  {path : '', redirectTo : 'home', pathMatch : 'full'},
  { path: '**', component: HomeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
