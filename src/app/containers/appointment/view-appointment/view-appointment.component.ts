import { Component, OnInit } from '@angular/core';
import { Observable, combineLatest } from 'rxjs';
import { Appointment } from 'src/app/models/appointment.model';
import { Store } from '@ngrx/store';
import { ActivatedRoute } from '@angular/router';
import * as fromAppointments from 'src/app/store/appointment/appointment.reducer';
import * as fromBiopsy from 'src/app/store/biopsy/biopsy.reducer';
import * as fromSurgicalPathology from 'src/app/store/surgery/surgical-pathology.reducer';
import { Biopsy } from 'src/app/models/biopsy/biopsy.model';
import { map, mergeMap } from 'rxjs/operators';
import { SurgicalPathology } from 'src/app/models/surgery/surgical-pathology.model';

@Component({
  selector: 'app-view-appointment',
  templateUrl: './view-appointment.component.html',
  styleUrls: ['./view-appointment.component.css']
})
export class ViewAppointmentComponent implements OnInit {
  appointment$: Observable<Appointment>;
  biopsy$: Observable<Biopsy>;
  surgicalPathology$: Observable<SurgicalPathology>;
  procedureId$: Observable<string>;
  patientId: string;

  constructor(private store: Store,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.patientId = this.route.snapshot.paramMap.get('patientId');
    let appointmentId = this.route.snapshot.paramMap.get('appointmentId');
    this.appointment$ = this.store.select(fromAppointments.selectAppointment,
      { id: appointmentId });

    this.biopsy$ = this.store.select(fromBiopsy.selectBiopsyByAppointment, 
      { appointmentId: appointmentId });
    this.surgicalPathology$ = this.store.select(
      fromSurgicalPathology.selectSurgicalPathologyByAppointment,
        { appointmentId: appointmentId });

    this.procedureId$ = combineLatest(this.biopsy$, this.surgicalPathology$).pipe(
      map(([biopsy, surgicalPathology]) => {
        if (biopsy != null) {
          return biopsy.id;
        }
        else if (surgicalPathology != null) {
          return surgicalPathology.id;
        }
        else {
          return null;
        }
      })
    );
  }
}
