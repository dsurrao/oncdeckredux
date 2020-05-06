import { Component, OnInit, Input } from '@angular/core';
import { Patient } from 'src/app/interfaces/patient';

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

  deletePatient(patient: Patient) {
    window.alert("delete ?");
  }
}
