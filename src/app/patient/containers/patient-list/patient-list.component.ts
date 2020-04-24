import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Store, select } from '@ngrx/store';
import { Patient } from '../../../interfaces/patient';
import { fetchPatients, deletePatient } from '../../../store/patient/patient.actions';
import { Title } from '@angular/platform-browser';
import { selectPatients } from 'src/app/store/patient/patient.selectors';

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
  title: string;

  constructor(private store: Store, 
    private titleService: Title) {
      this.title = titleService.getTitle();

      // sort patients in reverse order of created date
      // this.patients$ = store.pipe(
      //   map(store => {
      //     return [...store.patients].sort((a, b) => {
      //       if (a.dateCreatedMs > b.dateCreatedMs) return 1
      //       else if (a.dateCreatedMs == b.dateCreatedMs) return 0
      //       else return -1;
      //     })
      //   })
      // );

      this.patients$ = store.pipe(select(selectPatients));
  }

  ngOnInit(): void {
    this.store.dispatch(fetchPatients());
  }

  deletePatient(patient: Patient) {
    //window.alert("delete");
    this.store.dispatch(deletePatient({payload: patient.id}));
  }
}
