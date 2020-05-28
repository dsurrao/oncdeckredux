import { createAction, props } from '@ngrx/store';
import { PatientSearchCriteria } from '../../models/patient-search-criteria.model';

export const loadSearchCriteria = createAction(
  '[SearchCriteria] Load SearchCriteria'
);

export const loadSearchCriteriaSuccess = createAction(
  '[SearchCriteria] Load SearchCriteria Success',
  props<{ data: PatientSearchCriteria }>()
);

export const loadSearchCriteriaFailure = createAction(
  '[SearchCriteria] Load SearchCriteria Failure',
  props<{ error: any }>()
);

export const updateSearchCriteria = createAction(
  '[SearchCriteria] Update SearchCriteria',
  props<{ data: PatientSearchCriteria }>()
);

export const updateSearchCriteriaSuccess = createAction(
  '[SearchCriteria] Update SearchCriteria Success'
);

export const updateSearchCriteriaFailure = createAction(
  '[SearchCriteria] Update SearchCriteria Failure',
  props<{ error: any }>()
);