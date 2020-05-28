import {
  ActionReducerMap,
  MetaReducer
} from '@ngrx/store';
import { environment } from '../../environments/environment';
import * as fromPatient from './patient/patient.reducer';
import * as fromBiopsy from './biopsy/biopsy.reducer';
import * as fromSearchCriteria from './search-criteria/search-criteria.reducer';

// normalized entities, and other non-entity state
export interface State {
  [fromPatient.patientsFeatureKey]: fromPatient.State;
  [fromBiopsy.biopsiesFeatureKey]: fromBiopsy.State;
  [fromSearchCriteria.searchCriteriaFeatureKey] : fromSearchCriteria.State;
}

export const reducers: ActionReducerMap<State> = {
  [fromPatient.patientsFeatureKey]: fromPatient.reducer,
  [fromBiopsy.biopsiesFeatureKey]: fromBiopsy.reducer,
  [fromSearchCriteria.searchCriteriaFeatureKey]: fromSearchCriteria.searchCriteriaReducer
};

export const metaReducers: MetaReducer<State>[] = !environment.production ? [] : [];
