import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Store } from '@ngrx/store';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Patient } from '../../../interfaces/patient';
import { addPatient, fetchPatients, deletePatient } from '../../../store/patient/patient.actions';

/**
 * @title Patient list
 */
@Component({
  selector: 'app-patient-list',
  templateUrl: './patient-list.component.html',
  styleUrls: ['./patient-list.component.css']
})
export class PatientListComponent implements OnInit {

  patients$: Observable<Patient[]>;

  constructor(private store: Store<{patients: []}>, 
    public dialog: MatDialog) { 
    // sort patients in reverse order of created date
    this.patients$ = store.pipe(
      map(store => {
        return [...store.patients].sort((a, b) => {
          if (a['dateCreatedMs'] > b['dateCreatedMs']) return 1
          else if (a['dateCreatedMs'] == b['dateCreatedMs']) return 0
          else return -1;
        })
      })
    );
  }

  ngOnInit(): void {
    this.store.dispatch(fetchPatients());
  }

  deletePatient(patient: Patient) {
    //window.alert("delete");
    this.store.dispatch(deletePatient({payload: patient.id}));
  }
}
