import { Component, OnInit, OnDestroy } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable, Subscription } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';
import {v4 as uuidv4 } from 'uuid';
import * as fromBiopsy from 'src/app/store/biopsy/biopsy.reducer';
import * as fromAppointment from 'src/app/store/appointment/appointment.reducer';
import * as biopsyActions from 'src/app/store/biopsy/biopsy.actions';
import { Biopsy } from 'src/app/models/biopsy/biopsy.model';
import { Appointment } from 'src/app/models/appointment.model';

@Component({
  selector: 'app-edit-biopsy-report',
  templateUrl: './edit-biopsy-report.component.html',
  styleUrls: ['./edit-biopsy-report.component.css']
})
export class EditBiopsyReportComponent implements OnInit, OnDestroy {
  biopsy$: Observable<Biopsy>;
  appointment$: Observable<Appointment>;
  biopsyId: string;
  patientId: string;
  appointmentId: string;
  biopsySubscription: Subscription;

  constructor(private store: Store, private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    this.patientId = this.route.snapshot.paramMap.get('patientId');
    this.biopsyId = this.route.snapshot.paramMap.get('biopsyId');
    
    if (this.biopsyId != null) {
      this.biopsy$ = this.store.select(fromBiopsy.selectBiopsy, 
        { id: this.biopsyId });

      this.biopsySubscription 
        = this.biopsy$.subscribe(b => {
          this.appointmentId = b.appointmentId
          this.appointment$ = this.store.select(fromAppointment.selectAppointment, 
            { id: this.appointmentId });
          });
    }
    else {
      /// todo: move this to service
      this.biopsyId = uuidv4();

      // if new biopsy, appointmentId should be passed in as query param
      this.appointmentId = this.route.snapshot.paramMap.get('appointmentId');

      this.appointment$ = this.store.select(fromAppointment.selectAppointment,
        { id: this.appointmentId });
    }
  }

  saveBiopsy(biopsy: Biopsy) {
    biopsy.id = this.biopsyId;
    biopsy.appointmentId = this.appointmentId;
    
    this.store.dispatch(biopsyActions.upsertBiopsy({ patientId: this.patientId, 
      biopsy: biopsy }));
  }

  onCancel() {
    if (this.biopsyId != null) {
      this.router.navigate(['patients', this.patientId, 'appointments', 
        this.appointmentId]);
    }
    else {
      this.router.navigate(['patients', this.patientId]);
    }
  }

  ngOnDestroy(): void {
    if (this.biopsySubscription != null) {
      this.biopsySubscription.unsubscribe();
    }
  }
}
