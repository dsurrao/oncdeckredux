import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Appointment } from 'src/app/models/appointment.model';
import { Store } from '@ngrx/store';
import { ActivatedRoute } from '@angular/router';
import * as fromAppointments from 'src/app/store/appointment/appointment.reducer';

@Component({
  selector: 'app-view-appointment',
  templateUrl: './view-appointment.component.html',
  styleUrls: ['./view-appointment.component.css']
})
export class ViewAppointmentComponent implements OnInit {
  appointment$: Observable<Appointment>

  constructor(private store: Store,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
    let appointmentId = this.route.snapshot.paramMap.get('appointmentId');
    this.appointment$ = this.store.select(fromAppointments.selectAppointment,
      { id: appointmentId });
  }
}
