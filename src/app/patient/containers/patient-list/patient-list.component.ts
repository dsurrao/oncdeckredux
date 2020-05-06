import { Component, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { Store, select } from '@ngrx/store';
import { Patient } from '../../../interfaces/patient';
import { Title } from '@angular/platform-browser';
import { selectPatients, getSearchCriteria } from 'src/app/store/patient/patient.selectors';
import { fetchPatients } from 'src/app/store/patient/patient.actions';
import { PatientSearchCriteria } from 'src/app/interfaces/patient-search-criteria';
import { take } from 'rxjs/operators';

/**
 * @title Patient List
 */
@Component({
  selector: 'app-patient-list',
  templateUrl: './patient-list.component.html',
  styleUrls: ['./patient-list.component.css']
})
export class PatientListComponent implements OnInit {
  patients$: Observable<Patient[]>;
  searchCriteria$: Observable<PatientSearchCriteria>;
  subscription: Subscription;
  title: string;

  constructor(private store: Store, private titleService: Title) {
    this.title = titleService.getTitle();
    this.patients$ = this.store.pipe(select(selectPatients));    
  }

  ngOnInit() {
    this.searchCriteria$ = this.store.pipe(select(getSearchCriteria), take(1));
    this.subscription = this.searchCriteria$.subscribe(searchCriteria =>
      this.store.dispatch(fetchPatients({payload: searchCriteria}))
    );
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
