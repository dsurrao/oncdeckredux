import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-patient-sidenav-template',
  templateUrl: './patient-sidenav-template.component.html',
  styleUrls: ['./patient-sidenav-template.component.css']
})
export class PatientSidenavTemplateComponent implements OnInit {

  @Input()
  patientId: string;

  constructor() { }

  ngOnInit(): void {
  }

}
