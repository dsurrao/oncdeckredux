import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable, EMPTY, of } from 'rxjs';
import { PatientSearchCriteria } from 'src/app/models/common/patient-search-criteria.model';
import * as fromPatient from 'src/app/store/patient/patient.reducer';
import * as searchCriteriaActions from 'src/app/store/search-criteria/search-criteria.actions';
import * as fromSearchCriteria from 'src/app/store/search-criteria/search-criteria.reducer';
import { Patient } from 'src/app/models/common/patient.model';
import { Router, RouterEvent, Event, NavigationEnd } from '@angular/router';
import { mergeMap, filter } from 'rxjs/operators';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css']
})
export class ToolbarComponent implements OnInit {
  appTitle: string = "OncDeck";
  selectedPatient$: Observable<Patient>;
  searchCriteria$: Observable<PatientSearchCriteria>;

  constructor(private store: Store,
    private router: Router) { }

  ngOnInit(): void {
    /// watch for route changes and set patient context when appropriate
    this.selectedPatient$ = this.router.events.pipe(
      filter((e: Event): e is NavigationEnd => e instanceof NavigationEnd),
      mergeMap((e: RouterEvent) => {
          let matches = e.url.match(/patients\/((?!new)[\w-]+)/i);
          if (matches != null) {
            let patientId = matches[1];
            return this.store.select(fromPatient.selectPatient, { id: patientId});
          }
          else {
            return of(null);
          }
        }
      )
    );

    this.searchCriteria$ = this.store.select(fromSearchCriteria.selectSearchCriteria);
  }

  saveSearchCriteria(searchCriteria: PatientSearchCriteria) {
    this.store.dispatch(searchCriteriaActions.updateSearchCriteria({ data: searchCriteria}));
  }

}
