import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Patient } from 'src/app/models/patient.model';
import { v4 as uuidv4 } from 'uuid';

@Component({
  selector: 'app-edit-patient-template',
  templateUrl: './edit-patient-template.component.html',
  styleUrls: ['./edit-patient-template.component.css']
})
export class EditPatientTemplateComponent implements OnInit {
  @Input()
  patient: Patient;

  @Output()
  onSave = new EventEmitter<Patient>();

  @Output()
  onCancel = new EventEmitter();

  id: string;
  firstName: string;
  middleName: string;
  lastName: string;
  dateOfBirth: string;
  gender: string;
  dateCreatedMs: number;

  constructor() { 
    this.id = '';
  }

  ngOnInit(): void {  
    if (this.patient != null) {
      this.id = this.patient.id;
      this.firstName = this.patient.firstName;
      this.middleName = this.patient.middleName;
      this.lastName = this.patient.lastName;
      this.dateOfBirth = this.patient.dateOfBirth;
      this.gender = this.patient.gender;
      this.dateCreatedMs = this.patient.dateCreatedMs;
    }
  }

  save() {
    if (this.id == '' || this.id == null) {
      this.id = uuidv4();
    }
    if (this.dateCreatedMs == null) {
      this.dateCreatedMs = Date.now();
    }
    this.onSave.emit({
      id: this.id,
      firstName: this.firstName,
      middleName: this.middleName,
      lastName: this.lastName,
      dateOfBirth: this.dateOfBirth,
      gender: this.gender,
      dateCreatedMs: this.dateCreatedMs
    });
  }

  cancel() {
    this.onCancel.emit();
  }
}
