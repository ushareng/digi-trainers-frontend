import { Teacher } from './teacher.model';
import { OnlineClass } from './onlineClass.model';

export class Event{
    id:number;
    description:any;
    subject:any;
    topic:any;
    meetingLink:any;
    pptLink:any;
    assignmentLink:any;
    createOn:any;
    eventDate:any;
    teacher:Teacher;
    onlineClass:OnlineClass;
}