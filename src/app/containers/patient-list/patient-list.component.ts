import { Component } from '@angular/core';
import { Observable, Subscription, combineLatest } from 'rxjs';
import { Store } from '@ngrx/store';
import { Title } from '@angular/platform-browser';
import { Patient } from '../../models/common/patient.model';
import { PatientSearchCriteria } from 'src/app/models/common/patient-search-criteria.model';
import * as fromPatients from '../../store/patient/patient.reducer';
import * as fromBiopsy from '../../store/biopsy/biopsy.reducer';
import * as fromSearchCriteria from '../../store/search-criteria/search-criteria.reducer';
import { map } from 'rxjs/operators';
import { Biopsy } from 'src/app/models/biopsy/biopsy.model';

/**
 * @title Patient List
 */
@Component({
  selector: 'app-patient-list',
  templateUrl: './patient-list.component.html',
  styleUrls: ['./patient-list.component.css']
})
export class PatientListComponent {
  patients$: Observable<Patient[]>;
  searchCriteria$: Observable<PatientSearchCriteria>;
  subscription: Subscription;
  title: string;

  constructor(private store: Store, 
    private titleService: Title) {
    this.title = titleService.getTitle();

    let p$: Observable<Patient[]> = this.store.select(fromPatients.selectPatients);
    let b$: Observable<Biopsy[]> = this.store.select(fromBiopsy.selectBiopsies);
    let s$: Observable<PatientSearchCriteria> = this.store.select(
      fromSearchCriteria.selectSearchCriteria);

    this.patients$ = combineLatest([p$, b$, s$]).pipe(
      map((ps) => {
        let patients: Patient[] = ps[0];
        let biopsies: Biopsy[] = ps[1];
        let searchCriteria: PatientSearchCriteria = ps[2];
        // if (searchCriteria.biopsies != null) {
        //   if (searchCriteria.biopsies.isScheduled) {
        //     patients = patients.filter(p => p.biopsies.find(
        //       biopsyId => biopsies.find(
        //         b => b.id == biopsyId && Date.parse(b.scheduledDate) > Date.now()) != undefined));
        //   }
        // }
        return patients;
      })
    );
    
  }

  deletePatient(patient: Patient) {
    window.alert("delete?");
  }
}
