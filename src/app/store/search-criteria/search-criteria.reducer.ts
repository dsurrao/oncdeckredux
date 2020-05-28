import { createReducer, on, createSelector, createFeatureSelector } from "@ngrx/store";
import { PatientSearchCriteria } from '../../models/patient-search-criteria.model';
import * as searchCriteriaActions from './search-criteria.actions';

export const searchCriteriaFeatureKey = 'searchCriteria';

export interface State {
    searchCriteria: PatientSearchCriteria
}

export const initialState: State = {
    searchCriteria: {}
};

export const searchCriteriaReducer = createReducer(
    initialState,
    on(searchCriteriaActions.updateSearchCriteria,
        (state, action) => ({...state, searchCriteria: action.data})
    )
)

export const selectSearchCriteria = createSelector(
    createFeatureSelector(searchCriteriaFeatureKey),
    (state: State) => state.searchCriteria
);