import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { Store } from '@ngrx/store';
import { SurgicalPathology } from 'src/app/models/surgery/surgical-pathology.model';
import { Appointment } from 'src/app/models/appointment.model';
import { ActivatedRoute } from '@angular/router';
import * as fromSurgicalPathology from 'src/app/store/surgery/surgical-pathology.reducer';
import * as fromAppointment from 'src/app/store/appointment/appointment.reducer';
import * as fromProcedure from 'src/app/store/procedure/procedure.reducer';
import * as surgicalPathologyActions from 'src/app/store/surgery/surgical-pathology.actions';
import { v4 as uuidv4 } from 'uuid';
import { Procedure } from 'src/app/models/procedure.model';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-edit-surgical-pathology',
  templateUrl: './edit-surgical-pathology.component.html',
  styleUrls: ['./edit-surgical-pathology.component.css']
})
export class EditSurgicalPathologyComponent implements OnInit, OnDestroy {
  surgicalPathology$: Observable<SurgicalPathology>;
  appointment$: Observable<Appointment>;
  procedure$: Observable<Procedure>;
  subscription: Subscription;
  appointmentId: string;
  patientId: string;
  procedureId: string;

  constructor(private store: Store, private route: ActivatedRoute) {    
    this.appointmentId = this.route.snapshot.paramMap.get('appointmentId');
    this.patientId = this.route.snapshot.paramMap.get('patientId');

    let surgicalPathologyId = this.route.snapshot.paramMap.get(
      'surgicalPathologyId');
    if (surgicalPathologyId != null) {
      this.surgicalPathology$ = this.store.select(
        fromSurgicalPathology.selectSurgicalPathology, 
        { id: surgicalPathologyId });
    }

    this.appointment$ = this.store.select(fromAppointment.selectAppointment, 
      { id: this.appointmentId});

    this.procedure$ = this.store.select(fromProcedure.selectProcedures).pipe(
      map((procedures: Procedure[]) => procedures.find(
        p => p.appointmentId == this.appointmentId)
      )
    );
  }

  ngOnInit(): void {
    this.subscription = this.procedure$.subscribe(
      procedure => this.procedureId = procedure.id);
  }

  onSave(surgicalPathology: SurgicalPathology) {
    if (surgicalPathology.id == null) {
      surgicalPathology.id = uuidv4();
    }
    surgicalPathology.procedureId = this.procedureId;
    this.store.dispatch(surgicalPathologyActions.upsertSurgicalPathology(
      {patientId: this.patientId, surgicalPathology: surgicalPathology}));
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
