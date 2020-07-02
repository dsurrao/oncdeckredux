import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from "@angular/router";
import { Store, select } from '@ngrx/store';
import { Observable } from "rxjs";
import { v4 as uuidv4 } from 'uuid';
import { Patient } from 'src/app/models/common/patient.model';
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
      select(fromPatient.selectPatient, {id: this.patientId})
    );
  }
  
  onSubmit(patient: Patient): void {
    /// todo: move this into service
    if (patient.id == '' || patient.id == null) {
      patient.id = uuidv4();
    }

    if (patient.dateCreated == null) {
      patient.dateCreated = new Date().toISOString();
    }
    
    this.store.dispatch(patientActions.upsertPatient({ patient: patient }));
  }

  onCancel(): void {
    this.router.navigateByUrl('');
  }
}
