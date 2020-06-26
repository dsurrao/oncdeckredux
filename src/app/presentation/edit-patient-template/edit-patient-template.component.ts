import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Patient } from 'src/app/models/common/patient.model';
import { FormBuilder, Validators } from '@angular/forms';
import { GenderEnum } from 'src/app/models/enums/gender.enum';

@Component({
  selector: 'app-edit-patient-template',
  templateUrl: './edit-patient-template.component.html',
  styleUrls: ['./edit-patient-template.component.css']
})
export class EditPatientTemplateComponent implements OnInit {
  @Input()
  patient: Patient;

  @Output()
  onSubmitEmitter = new EventEmitter<Patient>();

  @Output()
  onCancelEmitter = new EventEmitter();

  patientForm = this.fb.group({
    id: [null],
    firstName: [null, Validators.required],
    middleName: [null],
    lastName: [null, Validators.required],
    dateOfBirth: [null],
    gender: [GenderEnum.Female, Validators.required],
    dateCreatedMs: [null]
  });

  genderEnum = GenderEnum;

  constructor(private fb: FormBuilder) { 
  }

  ngOnInit(): void {  
    this.patientForm.patchValue(this.patient);
  }

  onSubmit() {
    this.onSubmitEmitter.emit(this.patientForm.value);
  }

  onCancel() {
    this.onCancelEmitter.emit();
  }
}
