import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { Store } from '@ngrx/store';
import { SurgicalPathology } from 'src/app/models/surgery/surgical-pathology.model';
import { Appointment } from 'src/app/models/appointment.model';
import { ActivatedRoute, Router } from '@angular/router';
import * as fromSurgicalPathology from 'src/app/store/surgery/surgical-pathology.reducer';
import * as fromAppointment from 'src/app/store/appointment/appointment.reducer';
import * as surgicalPathologyActions from 'src/app/store/surgery/surgical-pathology.actions';
import { v4 as uuidv4 } from 'uuid';

@Component({
  selector: 'app-edit-surgical-pathology',
  templateUrl: './edit-surgical-pathology.component.html',
  styleUrls: ['./edit-surgical-pathology.component.css']
})
export class EditSurgicalPathologyComponent implements OnInit, OnDestroy {
  surgicalPathology$: Observable<SurgicalPathology>;
  appointment$: Observable<Appointment>;
  subscription: Subscription;
  appointmentId: string;
  patientId: string;
  surgicalPathologyId: string;

  constructor(private store: Store, private route: ActivatedRoute,
    private router: Router) {    
    this.appointmentId = this.route.snapshot.paramMap.get('appointmentId');
    this.patientId = this.route.snapshot.paramMap.get('patientId');
    this.surgicalPathologyId = this.route.snapshot.paramMap.get(
      'surgicalPathologyId');
      
    if (this.surgicalPathologyId != null) {
      this.surgicalPathology$ = this.store.select(
        fromSurgicalPathology.selectSurgicalPathology, 
        { id: this.surgicalPathologyId });

      this.subscription = this.surgicalPathology$.subscribe(s => {
        this.appointmentId = s.appointmentId;
        this.appointment$ = this.store.select(fromAppointment.selectAppointment, 
          { id: this.appointmentId});
      });
    }
    else if (this.appointmentId != null) {
      this.appointment$ = this.store.select(fromAppointment.selectAppointment, 
        { id: this.appointmentId});
    }
  }

  ngOnInit(): void {
  }

  onSubmit(surgicalPathology: SurgicalPathology) {
    if (surgicalPathology.id == null) {
      surgicalPathology.id = uuidv4();
    }
    surgicalPathology.appointmentId = this.appointmentId;
    this.store.dispatch(surgicalPathologyActions.upsertSurgicalPathology(
      {patientId: this.patientId, surgicalPathology: surgicalPathology}));
  }

  onCancel() {
    if (this.surgicalPathologyId != null) {
      this.router.navigate(['patients', this.patientId, 'appointments', 
        this.appointmentId]);
    }
    else {
      this.router.navigate(['patients', this.patientId]);
    }
  }

  ngOnDestroy(): void {
    if (this.subscription != null) {
      this.subscription.unsubscribe();
    }
  }
}
