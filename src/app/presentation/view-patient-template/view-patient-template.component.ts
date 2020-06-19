import { Component, Input } from '@angular/core';
import { Patient } from 'src/app/models/common/patient.model';
import { Biopsy } from 'src/app/models/biopsy/biopsy.model';
import { Appointment } from 'src/app/models/appointment.model';
import { SurgicalPathology } from 'src/app/models/surgery/surgical-pathology.model';
import { Procedure } from 'src/app/models/procedure.model';

@Component({
  selector: 'app-view-patient-template',
  templateUrl: './view-patient-template.component.html',
  styleUrls: ['./view-patient-template.component.css']
})
export class ViewPatientTemplateComponent {
  @Input()
  patient: Patient;

  @Input()
  appointments: Appointment[];

  @Input()
  biopsies: Biopsy[];

  @Input()
  surgicalPathologies: SurgicalPathology[];

  @Input()
  procedures: Procedure[];

  constructor() { 
  }
}
