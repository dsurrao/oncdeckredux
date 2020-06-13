import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { v4 as uuidv4 } from 'uuid';
import { Appointment } from 'src/app/models/appointment.model';
import * as appointmentActions from 'src/app/store/appointment/appointment.actions';
import * as fromAppointment from 'src/app/store/appointment/appointment.reducer';

@Component({
  selector: 'app-edit-appointment',
  templateUrl: './edit-appointment.component.html',
  styleUrls: ['./edit-appointment.component.css']
})
export class EditAppointmentComponent implements OnInit {
  patientId: string;
  appointment$: Observable<Appointment>;

  constructor(private store: Store,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.patientId = this.route.snapshot.paramMap.get('patientId');
    let appointmentId = this.route.snapshot.paramMap.get('appointmentId');
    if (appointmentId != null) {
      this.appointment$ = this.store.select(
        fromAppointment.selectAppointment, { id: appointmentId });
    }
  }

  onSave(appointment: Appointment): void {
    // todo: move id generation to service
    if (appointment.id == null || appointment.id == '') {
      appointment.id = uuidv4();
    }

    this.store.dispatch(appointmentActions.upsertAppointment(
      {patientId: this.patientId, appointment: appointment}));
  }
}
