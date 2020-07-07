import { Component, OnInit, Input, Output, EventEmitter, ViewChild, TemplateRef, OnDestroy } from '@angular/core';
import { FormBuilder, Validators, ValidatorFn, FormGroup, ValidationErrors } from '@angular/forms';
import { Appointment } from 'src/app/models/appointment.model';
import { BiopsyTypeEnum } from 'src/app/models/enums/biopsy-type.enum';
import { SurgeryTypeEnum } from 'src/app/models/enums/surgery-type.enum';
import * as dateUtilities from 'src/app/utilities/date-utilities';
import { MatDialog } from '@angular/material/dialog';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-edit-appointment-template',
  templateUrl: './edit-appointment-template.component.html',
  styleUrls: ['./edit-appointment-template.component.css']
})
export class EditAppointmentTemplateComponent implements OnInit, OnDestroy {
  @ViewChild("dialogRef") dialogRef: TemplateRef<any>; 

  @Input()
  appointment: Appointment;

  @Output()
  onSaveEmitter = new EventEmitter<Appointment>();

  @Output()
  onCancelEmitter = new EventEmitter();

  appointmentForm = this.fb.group({
    startDate: [null, Validators.required],
    facility: [null, [Validators.required, Validators.minLength(3)]],
    appointmentType: [null, Validators.required],
    appointmentTypeOther: [null],
    contactPerson: [null, [Validators.required, Validators.minLength(3)]],
    providerName: [null],
    providerType: [null]
  }, { validators: appointmentTypeValidator });

  biopsyTypeEnum = BiopsyTypeEnum;
  surgeryTypeEnum = SurgeryTypeEnum;

  get facility() { return this.appointmentForm.get('facility'); }
  get contactPerson() { return this.appointmentForm.get('contactPerson'); }
  get startDate() { return this.appointmentForm.get('startDate'); }
  get appointmentType() { return this.appointmentForm.get('appointmentType'); }
  get appointmentTypeOther() { return this.appointmentForm.get('appointmentTypeOther'); }

  appointmentTypeSubscription: Subscription;

  constructor(private fb: FormBuilder, private dialog: MatDialog) { }

  ngOnInit(): void {
    if (this.appointment != null) {
      this.appointmentForm.patchValue(this.appointment);
      this.appointmentForm.patchValue({ startDate: 
        dateUtilities.getYyyymmddFromISOString(
          this.appointment.startDate) });
    }

    // clear appt other conditionally
    this.appointmentTypeSubscription = this.appointmentType.valueChanges
      .subscribe(value => {
      if (value != BiopsyTypeEnum.Other && value != SurgeryTypeEnum.Other) {
        this.appointmentTypeOther.setValue(null);
        this.appointmentTypeOther.disable();
      }
      else {
        this.appointmentTypeOther.enable();
      }
    });
  }

  onSubmit(): void {
    this.openDialog();
  }

  openDialog(): void {
    this.dialog.open(this.dialogRef);
  }

  onConfirm(): void {
    this.onSaveEmitter.emit(this.appointmentForm.value);
  }

  onCancel(): void {
    this.onCancelEmitter.emit();
  }

  ngOnDestroy(): void {
    this.appointmentTypeSubscription.unsubscribe();
  }
}

export const appointmentTypeValidator: ValidatorFn = (control: FormGroup): 
  ValidationErrors | null => {
  let validationErrors: ValidationErrors = null;
  const appointmentType = control.get('appointmentType');
  const appointmentTypeOther = control.get('appointmentTypeOther');

  if ((appointmentType.value == BiopsyTypeEnum.Other
    || appointmentType.value == SurgeryTypeEnum.Other)
    && !appointmentTypeOther.value) {
    validationErrors =  { 'appointmentTypeOther is empty': true };
  }

  return validationErrors;
}