import { Component, Input } from '@angular/core';
import { Patient } from 'src/app/models/patient.model';
import { Biopsy } from 'src/app/models/biopsy/biopsy.model';

@Component({
  selector: 'app-view-patient-template',
  templateUrl: './view-patient-template.component.html',
  styleUrls: ['./view-patient-template.component.css']
})
export class ViewPatientTemplateComponent {
  @Input()
  patient: Patient;

  @Input()
  biopsies: Biopsy[];

  constructor() { 
  }
}
