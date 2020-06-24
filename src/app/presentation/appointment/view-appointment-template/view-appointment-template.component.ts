import { Component, OnInit, Input } from '@angular/core';
import { Appointment } from 'src/app/models/appointment.model';
import { BiopsyTypeEnum } from 'src/app/models/enums/biopsy-type.enum';
import { SurgeryTypeEnum } from 'src/app/models/enums/surgery-type.enum';

@Component({
  selector: 'app-view-appointment-template',
  templateUrl: './view-appointment-template.component.html',
  styleUrls: ['./view-appointment-template.component.css']
})
export class ViewAppointmentTemplateComponent implements OnInit {
  @Input()
  appointment: Appointment;

  @Input()
  patientId: string;

  @Input()
  isEmbedded: boolean = false; 

  // not null if there is a procedure associated with this appointment
  @Input()
  procedureId: string = null; 

  biopsyTypeEnum = BiopsyTypeEnum;
  surgeryTypeEnum = SurgeryTypeEnum;

  constructor() { }

  ngOnInit(): void {
  }

}
