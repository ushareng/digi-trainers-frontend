import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TeacherFindStudentComponent } from './teacher-find-student.component';

describe('TeacherFindStudentComponent', () => {
  let component: TeacherFindStudentComponent;
  let fixture: ComponentFixture<TeacherFindStudentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TeacherFindStudentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TeacherFindStudentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
