import { Component, OnInit, Input } from '@angular/core';
import { Patient } from '../../models/common/patient.model';

@Component({
  selector: 'app-patient-list-template',
  templateUrl: './patient-list-template.component.html',
  styleUrls: ['./patient-list-template.component.css']
})
export class PatientListTemplateComponent implements OnInit {
  @Input()
  patients: Patient[];

  constructor() { }

  ngOnInit(): void {
  }
}
