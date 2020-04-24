import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Patient } from 'src/app/interfaces/patient';
import * as _ from 'lodash';

@Component({
  selector: 'app-edit-patient-template',
  templateUrl: './edit-patient-template.component.html',
  styleUrls: ['./edit-patient-template.component.css']
})
export class EditPatientTemplateComponent implements OnInit {
  @Input()
  patient: Patient;

  patientClone: Patient;

  @Output()
  onSave = new EventEmitter<Patient>();

  constructor() { 
  }

  ngOnInit(): void {  
    this.patientClone = _.cloneDeep(this.patient);
  }

  save() {
    this.onSave.emit(this.patientClone);
  }
}
