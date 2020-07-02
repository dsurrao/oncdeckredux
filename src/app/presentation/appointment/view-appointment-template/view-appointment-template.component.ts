import { Component, OnInit, Input } from '@angular/core';
import { Appointment } from 'src/app/models/appointment.model';
import { BiopsyTypeEnum } from 'src/app/models/enums/biopsy-type.enum';
import { SurgeryTypeEnum } from 'src/app/models/enums/surgery-type.enum';
import * as dateUtils from 'src/app/utilities/date-utilities';

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

  startDateStr: string;

  constructor() { }

  ngOnInit(): void {
    if (this.appointment != null) {
      this.startDateStr = dateUtils.getYyyymmddFromISOString(
        this.appointment.startDate
      );
    }
  }

}
