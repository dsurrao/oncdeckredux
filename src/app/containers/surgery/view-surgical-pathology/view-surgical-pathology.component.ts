import { Component, OnInit } from '@angular/core';
import { SurgicalPathology } from 'src/app/models/surgery/surgical-pathology.model';
import { Observable } from 'rxjs';
import * as fromSurgicalPathology from 'src/app/store/surgery/surgical-pathology.reducer';
import * as fromAppointment from 'src/app/store/appointment/appointment.reducer';
import { Store } from '@ngrx/store';
import { ActivatedRoute } from '@angular/router';
import { Appointment } from 'src/app/models/appointment.model';
import { mergeMap } from 'rxjs/operators';

@Component({
  selector: 'app-view-surgical-pathology',
  templateUrl: './view-surgical-pathology.component.html',
  styleUrls: ['./view-surgical-pathology.component.css']
})
export class ViewSurgicalPathologyComponent implements OnInit {
  surgicalPathology$: Observable<SurgicalPathology>;
  appointment$: Observable<Appointment>;
  patientId: string;

  constructor(private store: Store,
    private route: ActivatedRoute) {       
  }

  ngOnInit(): void {
    this.patientId = this.route.snapshot.paramMap.get(
      "patientId");
    let surgicalPathologyId = this.route.snapshot.paramMap.get(
      "surgicalPathologyId");

    if (this.patientId != null && surgicalPathologyId != null) {
      this.surgicalPathology$ = this.store.select(
        fromSurgicalPathology.selectSurgicalPathology,
        { id: surgicalPathologyId }
      );
  
      this.appointment$ = this.surgicalPathology$.pipe(
        mergeMap(surgicalPathology => 
          this.store.select(fromAppointment.selectAppointment, 
            { id: surgicalPathology.appointmentId})
        )
      );
    }    
  }

}
