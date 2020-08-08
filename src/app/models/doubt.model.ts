import { Teacher } from './teacher.model';
import { Student } from './student.model';

export class Doubt{
    description:any;
    subject:any;
    topic:any;
    meetingLink:any;
    pptLink:any;
    assignmentLink:any;
    createOn:any;
    teacher:Teacher;
    student:Student;
}