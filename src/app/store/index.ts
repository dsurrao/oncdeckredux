import { ActionReducerMap, MetaReducer } from '@ngrx/store';
import { environment } from '../../environments/environment';
import * as fromPatient from './patient/patient.reducer';
import * as fromBiopsy from './biopsy/biopsy.reducer';
import * as fromSearchCriteria from './search-criteria/search-criteria.reducer';
import * as fromAppointment from './appointment/appointment.reducer';
import * as fromProcedure from './procedure/procedure.reducer';
import * as fromSurgicalPathology from './surgery/surgical-pathology.reducer';

// normalized entities, and other non-entity state
export interface State {
  [fromPatient.patientsFeatureKey]: fromPatient.State;
  [fromBiopsy.biopsiesFeatureKey]: fromBiopsy.State;
  [fromSearchCriteria.searchCriteriaFeatureKey] : fromSearchCriteria.State;
  [fromAppointment.appointmentsFeatureKey]: fromAppointment.State;
  [fromProcedure.proceduresFeatureKey]: fromProcedure.State;
  [fromSurgicalPathology.surgicalPathologiesFeatureKey]: fromSurgicalPathology.State;
}

export const reducers: ActionReducerMap<State> = {
  [fromPatient.patientsFeatureKey]: fromPatient.reducer,
  [fromBiopsy.biopsiesFeatureKey]: fromBiopsy.reducer,
  [fromSearchCriteria.searchCriteriaFeatureKey]: fromSearchCriteria.searchCriteriaReducer,
  [fromAppointment.appointmentsFeatureKey]: fromAppointment.reducer,
  [fromProcedure.proceduresFeatureKey]: fromProcedure.reducer,
  [fromSurgicalPathology.surgicalPathologiesFeatureKey]: fromSurgicalPathology.reducer,};

export const metaReducers: MetaReducer<State>[] = !environment.production ? [] : [];
