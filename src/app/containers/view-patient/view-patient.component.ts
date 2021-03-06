import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Store, select } from '@ngrx/store';
import { Router, ActivatedRoute } from '@angular/router';
import { Patient } from 'src/app/models/common/patient.model';
import * as fromPatient from 'src/app/store/patient/patient.reducer';
import * as fromBiopsy from 'src/app/store/biopsy/biopsy.reducer';
import * as fromAppointment from 'src/app/store/appointment/appointment.reducer';
import * as fromSurgicalPathology from 'src/app/store/surgery/surgical-pathology.reducer';
import { Biopsy } from 'src/app/models/biopsy/biopsy.model';
import { mergeMap } from 'rxjs/operators';
import { Appointment } from 'src/app/models/appointment.model';
import { SurgicalPathology } from 'src/app/models/surgery/surgical-pathology.model';

@Component({
  selector: 'app-view-patient',
  templateUrl: './view-patient.component.html',
  styleUrls: ['./view-patient.component.css']
})
export class ViewPatientComponent implements OnInit {
  patient$: Observable<Patient>;
  appointments$: Observable<Appointment[]>;
  biopsies$: Observable<Biopsy[]>;
  surgicalPathologies$: Observable<SurgicalPathology[]>;
  
  constructor(private store: Store,
    private router: Router,
    private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    let patientId = this.route.snapshot.paramMap.get('patientId');

    if (patientId != null) {
      this.patient$ = this.store.pipe(
        select(fromPatient.selectPatient, { id: patientId }));
  
      this.appointments$ = this.store.select(
        fromPatient.selectPatient, { id: patientId }).pipe(
          mergeMap(patient => {
            if (patient.appointmentIds != null) {
              return this.store.select(fromAppointment.selectAppointmentsSubset,
                { appointmentIds: patient.appointmentIds });
            }
            else {
              return [];
            }
          })
        );
  
      this.biopsies$ = this.store.select(
        fromPatient.selectPatient, { id: patientId }).pipe(
        mergeMap(patient => {
          if (patient.biopsyIds != null) {
            return this.store.select(fromBiopsy.selectBiopsiesSubset, 
              { biopsyIds: patient.biopsyIds});
          }
          else {
            return [];
          }
        })
      );
  
      this.surgicalPathologies$ = this.store.select(
        fromPatient.selectPatient, { id: patientId }).pipe(
        mergeMap(patient => {
          if (patient.surgicalPathologyIds != null) {
            return this.store.select(
              fromSurgicalPathology.selectSurgicalPathologiesSubset, 
              { ids: patient.surgicalPathologyIds});
          }
          else {
            return [];
          }
        })
      );
    }
  }
}
