import { Component, OnInit} from '@angular/core';
import { PatientSearchCriteria } from 'src/app/interfaces/patient-search-criteria';
import { Store, select } from '@ngrx/store';
import { createSearchCriteria } from 'src/app/store/patient/patient.actions';
import { Observable } from 'rxjs';
import { getSearchCriteria } from 'src/app/store/patient/patient.selectors';
import { delay } from 'rxjs/operators';

@Component({
  selector: 'app-search-criteria',
  templateUrl: './search-criteria.component.html',
  styleUrls: ['./search-criteria.component.css']
})
export class SearchCriteriaComponent implements OnInit {
  searchCriteria$: Observable<PatientSearchCriteria>;

  constructor(private store: Store) {     
  }

  ngOnChanges() {
    console.log("SearchCriteriaComponent: ngOnChanges");
  }

  ngOnInit() {
    // wait a tick
    // https://angular.io/guide/lifecycle-hooks#abide-by-the-unidirectional-data-flow-rule
    this.searchCriteria$ = this.store.pipe(
      select(getSearchCriteria),
      delay(1)
    );

    console.log("SearchCriteriaComponent: ngOnInit");
  }

  save(searchCriteria: PatientSearchCriteria) {
    this.store.dispatch(createSearchCriteria({payload: searchCriteria}));    
  }
}
