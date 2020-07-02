import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { v4 as uuidv4 } from 'uuid';
import { Appointment } from 'src/app/models/appointment.model';
import * as appointmentActions from 'src/app/store/appointment/appointment.actions';
import * as fromAppointment from 'src/app/store/appointment/appointment.reducer';
import * as dateUtils from 'src/app/utilities/date-utilities';

@Component({
  selector: 'app-edit-appointment',
  templateUrl: './edit-appointment.component.html',
  styleUrls: ['./edit-appointment.component.css']
})
export class EditAppointmentComponent implements OnInit {
  patientId: string;
  appointmentId: string;
  appointment$: Observable<Appointment>;

  constructor(private store: Store,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    this.patientId = this.route.snapshot.paramMap.get('patientId');
    this.appointmentId = this.route.snapshot.paramMap.get('appointmentId');

    if (this.appointmentId != null) {
      this.appointment$ = this.store.select(
        fromAppointment.selectAppointment, { id: this.appointmentId });
    }
  }

  onSave(appointment: Appointment): void {
    // todo: move id generation to service
    if (this.appointmentId) {
      appointment.id = this.appointmentId;
    }
    else {
      appointment.id = uuidv4();
    }

    // save value as in ISO date format
    appointment.startDate = dateUtils.getISOStringFromYyyymmdd(
      appointment.startDate);

    this.store.dispatch(appointmentActions.upsertAppointment(
      {patientId: this.patientId, appointment: appointment}));
  }

  onCancel(): void {
    if (this.appointmentId != null) {
      this.router.navigate(['patients', this.patientId,
        'appointments', this.appointmentId]);
    }
    else {
      this.router.navigate(['patients', this.patientId]);
    }
  }
}
