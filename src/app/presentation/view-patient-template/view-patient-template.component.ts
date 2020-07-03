import { Component, Input, OnInit } from '@angular/core';
import { Patient } from 'src/app/models/common/patient.model';
import { Biopsy } from 'src/app/models/biopsy/biopsy.model';
import { Appointment } from 'src/app/models/appointment.model';
import { SurgicalPathology } from 'src/app/models/surgery/surgical-pathology.model';
import * as dateUtils from 'src/app/utilities/date-utilities';

@Component({
  selector: 'app-view-patient-template',
  templateUrl: './view-patient-template.component.html',
  styleUrls: ['./view-patient-template.component.css']
})
export class ViewPatientTemplateComponent implements OnInit {
  @Input()
  patient: Patient;

  @Input()
  appointments: Appointment[];

  @Input()
  biopsies: Biopsy[];

  @Input()
  surgicalPathologies: SurgicalPathology[];

  dateOfBirth: string = '';

  constructor() { 
  }

  ngOnInit() {
    if (this.patient != null && this.patient.dateOfBirth != null) {
      this.dateOfBirth = dateUtils.getYyyymmddFromISOString(
        this.patient.dateOfBirth);
    }
  }
}
