import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TeacherDoubtComponent } from './teacher-doubt.component';

describe('TeacherDoubtComponent', () => {
  let component: TeacherDoubtComponent;
  let fixture: ComponentFixture<TeacherDoubtComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TeacherDoubtComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TeacherDoubtComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
