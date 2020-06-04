import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Store, select } from '@ngrx/store';
import { Router, ActivatedRoute } from '@angular/router';
import { Patient } from 'src/app/models/patient.model';
import * as fromPatient from 'src/app/store/patient/patient.reducer';
import * as fromBiopsy from 'src/app/store/biopsy/biopsy.reducer';
import { Biopsy } from 'src/app/models/biopsy/biopsy.model';
import { mergeMap } from 'rxjs/operators';

@Component({
  selector: 'app-view-patient',
  templateUrl: './view-patient.component.html',
  styleUrls: ['./view-patient.component.css']
})
export class ViewPatientComponent implements OnInit {
  patient$: Observable<Patient>;
  biopsies$: Observable<Biopsy[]>;

  constructor(private store: Store,
    private router: Router,
    private route: ActivatedRoute) {      
  }

  ngOnInit(): void {
    let patientId = this.route.snapshot.paramMap.get('patientId');

    this.patient$ = this.store.pipe(
      select(fromPatient.selectPatient, { id: patientId }));

    this.biopsies$ = this.store.select(
      fromPatient.selectPatient, { id: patientId }).pipe(
      mergeMap(patient =>
        this.store.select(fromBiopsy.selectBiopsiesSubset, 
          { biopsyIds: patient.biopsies})
      )
    );
  }
}
