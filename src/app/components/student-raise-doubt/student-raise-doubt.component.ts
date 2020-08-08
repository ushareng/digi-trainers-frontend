import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-student-raise-doubt',
  templateUrl: './student-raise-doubt.component.html',
  styleUrls: ['./student-raise-doubt.component.css']
})
export class StudentRaiseDoubtComponent implements OnInit {
 
  doubtForm:FormGroup;
  submitted: boolean = false;

  constructor(private formBuilder:FormBuilder) { }

  ngOnInit() {
    this.doubtForm = this.formBuilder.group({
      teacherId: ['', [Validators.required]],
      subject: ['', Validators.required],
      topic: ['', [Validators.required]],
      description: ['', [Validators.required]]
    });
  }

  get f() { return this.doubtForm.controls; }

  verifyDoubt() {
    this.submitted = true;
    if (this.doubtForm.invalid) {
      return;
    }

    console.log(this.doubtForm.value);
  }

}
