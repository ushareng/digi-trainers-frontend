import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TeacherEventComponent } from './teacher-event.component';

describe('TeacherEventComponent', () => {
  let component: TeacherEventComponent;
  let fixture: ComponentFixture<TeacherEventComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TeacherEventComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TeacherEventComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
