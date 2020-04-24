import {createSelector } from '@ngrx/store';
import { AppState } from './patient.reducers';

export const selectAllPatients = 
    (state: {patients: AppState}) => state.patients.patientList;

export const selectOnePatient = 
    (state: {patients: AppState}) => state.patients.selectedPatient;

// todo: use this for filtering
export const selectPatients = createSelector(
    selectAllPatients,
    (patientList) => patientList
);

export const selectPatient = createSelector(
    selectOnePatient,
    (patient) => patient
);
