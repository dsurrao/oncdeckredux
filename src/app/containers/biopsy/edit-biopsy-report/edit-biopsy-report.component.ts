import { Component, OnInit, OnDestroy } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable, Subscription } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import {v4 as uuidv4 } from 'uuid';
import * as fromBiopsy from 'src/app/store/biopsy/biopsy.reducer';
import * as fromAppointment from 'src/app/store/appointment/appointment.reducer';
import * as fromProcedure from 'src/app/store/procedure/procedure.reducer';
import * as biopsyActions from 'src/app/store/biopsy/biopsy.actions';
import { Biopsy } from 'src/app/models/biopsy/biopsy.model';
import { Appointment } from 'src/app/models/appointment.model';
import { Procedure } from 'src/app/models/procedure.model';

@Component({
  selector: 'app-edit-biopsy-report',
  templateUrl: './edit-biopsy-report.component.html',
  styleUrls: ['./edit-biopsy-report.component.css']
})
export class EditBiopsyReportComponent implements OnInit, OnDestroy {
  biopsy$: Observable<Biopsy>;
  appointment$: Observable<Appointment>;
  procedure$: Observable<Procedure>;
  biopsyId: string;
  patientId: string;
  procedureId: string;
  appointmentId: string;
  subscription: Subscription;
  biopsySubscription: Subscription;
  procedureSubscription: Subscription;

  constructor(private store: Store, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.patientId = this.route.snapshot.paramMap.get('patientId');
    this.biopsyId = this.route.snapshot.paramMap.get('biopsyId');
    
    if (this.biopsyId != null) {
      this.biopsy$ = this.store.select(fromBiopsy.selectBiopsy, 
        { id: this.biopsyId });

      this.biopsySubscription 
        = this.biopsy$.subscribe(b => {
          this.procedureId = b.procedureId;

          this.procedure$ = this.store.select(fromProcedure.selectProcedure,
            { id: this.procedureId });
          
          this.procedureSubscription = this.procedure$.subscribe(p => {
            this.appointmentId = p.appointmentId;

            this.appointment$ = this.store.select(fromAppointment.selectAppointment,
              { id: this.appointmentId });
          });
        });
    }
    else {
      /// todo: move this to service
      this.biopsyId = uuidv4();

      // if new biopsy, appointmentId should be passed in as query param
      this.appointmentId = this.route.snapshot.paramMap.get('appointmentId');

      this.appointment$ = this.store.select(fromAppointment.selectAppointment,
        { id: this.appointmentId });

      this.procedure$ = this.store.select(fromProcedure.selectProcedureByAppointment,
        { id: this.appointmentId });

      this.procedureSubscription = this.procedure$.subscribe(procedure => {
        this.procedureId = procedure.id;
      });
    }
  }

  saveBiopsy(biopsy: Biopsy) {
    biopsy.id = this.biopsyId;
    biopsy.procedureId = this.procedureId;
    
    this.store.dispatch(biopsyActions.upsertBiopsy({ patientId: this.patientId, 
      biopsy: biopsy }));
  }

  ngOnDestroy(): void {
    if (this.biopsySubscription != null) {
      this.biopsySubscription.unsubscribe();
    }

    if (this.procedureSubscription != null) {
      this.procedureSubscription.unsubscribe();
    }
  }
}
