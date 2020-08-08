import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentDoubtComponent } from './student-doubt.component';

describe('StudentDoubtComponent', () => {
  let component: StudentDoubtComponent;
  let fixture: ComponentFixture<StudentDoubtComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StudentDoubtComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentDoubtComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
