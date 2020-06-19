import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Appointment } from 'src/app/models/appointment.model';
import { BiopsyTypeEnum } from 'src/app/models/enums/biopsy-type.enum';
import { SurgeryTypeEnum } from 'src/app/models/enums/surgery-type.enum';

@Component({
  selector: 'app-edit-appointment-template',
  templateUrl: './edit-appointment-template.component.html',
  styleUrls: ['./edit-appointment-template.component.css']
})
export class EditAppointmentTemplateComponent implements OnInit {
  @Input()
  appointment: Appointment;

  @Output()
  onSave = new EventEmitter<Appointment>();

  appointmentForm = this.fb.group({
    startDate: [''],
    facility: [''],
    appointmentType: [''],
    contactPerson: [''],
    providerName: [''],
    providerType: ['']
  });

  biopsyTypeEnum = BiopsyTypeEnum;
  surgeryTypeEnum = SurgeryTypeEnum;

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    if (this.appointment != null) {
      this.appointmentForm.patchValue(this.appointment);
    }
  }

  onSubmit(): void {
    let appointmentId = null;
    if (this.appointment != null) {
      appointmentId = this.appointment.id;
    }
    this.onSave.emit({...this.appointmentForm.value, 
      id: appointmentId});
  }
}
