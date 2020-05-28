import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from "@angular/router";
import { Store, select } from '@ngrx/store';
import { Observable } from "rxjs";
import { Patient } from 'src/app/models/patient.model';
import * as patientActions from '../../store/patient/patient.actions';
import * as fromPatient from '../../store/patient/patient.reducer';

@Component({
  selector: 'app-edit-patient',
  templateUrl: './edit-patient.component.html',
  styleUrls: ['./edit-patient.component.css']
})
export class EditPatientComponent implements OnInit {
  patient$: Observable<Patient>;
  patientId: string;

  constructor(private store: Store,
    private router: Router,
    private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.patientId = this.route.snapshot.paramMap.get('patientId');
    this.patient$ = this.store.pipe(
      select(fromPatient.selectPatient, {id: this.patientId}));
  }
  
  save(patient: Patient): void {
    this.store.dispatch(patientActions.upsertPatient({ patient: patient }));
  }

  cancel(): void {
    this.router.navigateByUrl('');
  }
}
