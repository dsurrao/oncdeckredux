import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Appointment } from 'src/app/models/appointment.model';
import { BiopsyTypeEnum } from 'src/app/models/enums/biopsy-type.enum';
import { SurgeryTypeEnum } from 'src/app/models/enums/surgery-type.enum';
import * as dateUtilities from 'src/app/utilities/date-utilities';
import { ValidationService, ValidationResult } from 'src/app/services/validation.service';

@Component({
  selector: 'app-edit-appointment-template',
  templateUrl: './edit-appointment-template.component.html',
  styleUrls: ['./edit-appointment-template.component.css']
})
export class EditAppointmentTemplateComponent implements OnInit {
  @Input()
  appointment: Appointment;

  @Output()
  onSaveEmitter = new EventEmitter<Appointment>();

  @Output()
  onCancelEmitter = new EventEmitter();

  appointmentForm = this.fb.group({
    startDate: [null, Validators.required],
    facility: [null, Validators.required],
    appointmentType: [null, Validators.required],
    contactPerson: [null, Validators.required],
    providerName: [null],
    providerType: [null]
  });

  biopsyTypeEnum = BiopsyTypeEnum;
  surgeryTypeEnum = SurgeryTypeEnum;

  errors: any[];

  constructor(private fb: FormBuilder, 
    private validationService: ValidationService) { }

  ngOnInit(): void {
    if (this.appointment != null) {
      this.appointmentForm.patchValue(this.appointment);
      this.appointmentForm.patchValue({ startDate: 
        dateUtilities.getYyyymmddFromISOString(
          this.appointment.startDate) });
    }
  }

  onSubmit(): void {
    let validationResult: ValidationResult = 
      this.validationService.validateAppointment(
        this.appointmentForm.value);
    if (validationResult.isValid) {
      this.onSaveEmitter.emit(this.appointmentForm.value);
    }
    else {
      this.errors = validationResult.errors;
    }
  }

  onCancel(): void {
    this.onCancelEmitter.emit();
  }
}
