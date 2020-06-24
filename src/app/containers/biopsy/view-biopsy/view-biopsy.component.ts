import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Biopsy } from 'src/app/models/biopsy/biopsy.model';
import * as fromPatient from 'src/app/store/patient/patient.reducer';
import * as fromBiopsy from 'src/app/store/biopsy/biopsy.reducer';
import * as fromAppointment from 'src/app/store/appointment/appointment.reducer';
import { Patient } from 'src/app/models/common/patient.model';
import { Appointment } from 'src/app/models/appointment.model';
import { mergeMap, map } from 'rxjs/operators';

@Component({
  selector: 'app-view-biopsy',
  templateUrl: './view-biopsy.component.html',
  styleUrls: ['./view-biopsy.component.css']
})
export class ViewBiopsyComponent implements OnInit {
  patientId: string;
  biopsy$: Observable<Biopsy>;
  appointment$: Observable<Appointment>;

  constructor(private store: Store,
    private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    let biopsyId = this.activatedRoute.snapshot.paramMap.get('biopsyId');
    this.patientId = this.activatedRoute.snapshot.paramMap.get('patientId'); 
    this.biopsy$ = this.store.select(fromBiopsy.selectBiopsy, 
      { id: biopsyId });

    this.appointment$ = this.biopsy$.pipe(
      mergeMap(biopsy => 
        this.store.select(fromAppointment.selectAppointment, { id: biopsy.appointmentId})
      )
    );
  }
}
