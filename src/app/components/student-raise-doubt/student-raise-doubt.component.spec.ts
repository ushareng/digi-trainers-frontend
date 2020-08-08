import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentRaiseDoubtComponent } from './student-raise-doubt.component';

describe('StudentRaiseDoubtComponent', () => {
  let component: StudentRaiseDoubtComponent;
  let fixture: ComponentFixture<StudentRaiseDoubtComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StudentRaiseDoubtComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentRaiseDoubtComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
