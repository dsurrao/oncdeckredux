import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Store, select } from '@ngrx/store';
import { Patient } from '../../interfaces/patient';
import { addPatient, fetchPatients, deletePatient } from '../patient.actions';

@Component({
  selector: 'app-patient-list',
  templateUrl: './patient-list.component.html',
  styleUrls: ['./patient-list.component.css']
})
export class PatientListComponent implements OnInit {

  patients$: Observable<Patient[]>;

  constructor(private store: Store<{patients: []}>) { 
    this.patients$ = store.pipe(select('patients'));
  }

  ngOnInit(): void {
    this.store.dispatch(fetchPatients());
  }
  
  addPatientClicked() {
    //this.store.dispatch(addPatient());
  }

  deletePatient(patient: Patient) {
    this.store.dispatch(deletePatient({payload: patient.id}));
  }
}
