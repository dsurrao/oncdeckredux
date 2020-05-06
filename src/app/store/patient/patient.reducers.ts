import {createReducer, on } from '@ngrx/store';
import * as patientActions from './patient.actions';
import * as biopsyActions from '../biopsy/biopsy.actions';
import * as _ from 'lodash';
import { PatientSearchCriteria } from 'src/app/interfaces/patient-search-criteria';

export interface AppState {
    patientList: [],
    selectedPatient: any,
    searchCriteria: PatientSearchCriteria
}

export const initialState: AppState = {
    patientList: [],
    selectedPatient: null,
    searchCriteria: {}
};

const _patientReducer = createReducer(initialState,
    on(patientActions.createSearchCriteria, (state, { payload }) => {
        let newState = _.cloneDeep(state);
        newState.searchCriteria = payload;
        return newState;
    }),
    // if in the list context, there is no selected patient
    on(patientActions.fetchPatients, (state, { payload }) => {
        let newState = _.cloneDeep(state);
        newState.selectedPatient = null;
        return newState;
    }),
    on(patientActions.fetchPatientsSuccess, (state, { payload }) => {
        let newState = _.cloneDeep(state);
        newState.patientList = payload;
        return newState
    }),
    on(patientActions.fetchPatientSuccess, (state, { payload }) => {
        let newState = _.cloneDeep(state);
        newState.selectedPatient = payload;
        return newState;
    }),
    on(patientActions.addPatientSuccess, (state, {payload}) => {
        let newState = _.cloneDeep(state);

        // create a copy of state
        let newPatientList = newState.patientList;

        let replaceIndex = newPatientList.findIndex(
            patient => patient.id == payload.id);
        
        if (replaceIndex >= 0) {
            // replace patient with new value
            newPatientList.splice(
                newPatientList.findIndex(patient => 
                    patient.id == payload.id),
                1,
                payload
            );
        }
        else {
            newPatientList.push(payload);
        }

        return newState;
    }),
    // todo: this should be moved ot deletePatientSuccess
    on(patientActions.deletePatient, (state, {payload}) => {
        let newState = _.cloneDeep(state);

        let newPatientList = newState.patientList;
        newPatientList.splice(
            newPatientList.findIndex(patient => 
                patient.id == payload), 1);

        // if deleted patient is the one selected
        // set selected to null
        let selectedPatient = newState.selectedPatient;
        if (selectedPatient.id == payload) {
            newState.selectedPatient = null;
        }

        return newState;
    }),
    on(biopsyActions.fetchBiopsiesSuccess, (state, {payload}) => {
        let newState = _.cloneDeep(state);

        let patientIndex = newState.patientList.findIndex(
            patient => patient.id == payload.patientId);
        newState.patientList[patientIndex].biopsies = payload.biopsies;

        return newState;
    }),
    on(biopsyActions.addBiopsySuccess, (state, {payload}) => {
        let newState = _.cloneDeep(state);

        let newPatientList = newState.patientList;
        let patientIndex = newPatientList.findIndex(
            patient => patient.id == payload.patientId);
        let patient = newPatientList[patientIndex];
        if (patient.biopsies == null) {
            patient.biopsies = [payload.biopsy];
        }
        else {
            patient.biopsies.push(payload.biopsy);
        }
        newPatientList.splice(patientIndex, 1, patient);

        return newState;
    })
);

export function patientReducer(state, action) {
    return _patientReducer(state, action);
}