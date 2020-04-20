import { Component, OnInit, Input } from '@angular/core';
import { Patient } from 'src/app/interfaces/patient';

@Component({
  selector: 'app-view-patient-template',
  templateUrl: './view-patient-template.component.html',
  styleUrls: ['./view-patient-template.component.css']
})
export class ViewPatientTemplateComponent implements OnInit {
  @Input()
  patient: Patient;

  constructor() { }

  ngOnInit(): void {
  }

}
