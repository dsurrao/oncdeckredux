import {createReducer, on } from '@ngrx/store';
import * as patientActions from './patient.actions';
import * as biopsyActions from '../biopsy/biopsy.actions';
import * as _ from 'lodash';

export interface AppState {
    patientList: [],
    selectedPatient: any
}

export const initialState: AppState = {
    patientList: [],
    selectedPatient: null
};

const _patientReducer = createReducer(initialState,
    // if in the list context, there is no selected patient
    on(patientActions.fetchPatientsSuccess, (state, { payload }) => {
        return {
            patientList: [...payload],
            selectedPatient: null
        }
    }),
    on(patientActions.fetchPatientSuccess, (state, { payload }) => {
        return {
            patientList: [...state.patientList],
            selectedPatient: payload    // todo: should payload be cloned?
        }
    }),
    on(patientActions.addPatientSuccess, (state, {payload}) => {
        // create a copy of state
        let newPatientList = [...state.patientList];

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

        return {
            patientList: newPatientList,
            selectedPatient: {...state.selectedPatient}
        }
    }),
    // todo: this should be moved ot deletePatientSuccess
    on(patientActions.deletePatient, (state, {payload}) => {
        let newPatientList = [...state.patientList];
        newPatientList.splice(
            newPatientList.findIndex(patient => 
                patient.id == payload), 1);

        // if deleted patient is the one selected
        // set selected to null
        let selectedPatient = {...state.selectedPatient};
        if (selectedPatient.id == payload) {
            selectedPatient = null;
        }

        return {
            patientList: newPatientList,
            selectedPatient: selectedPatient
        }
    }),
    on(biopsyActions.fetchBiopsiesSuccess, (state, {payload}) => {
        let patientIndex = state.patientList.findIndex(
            patient => patient.id == payload.patientId);
        let newPatientList = [...state.patientList];
        newPatientList[patientIndex].biopsies = [...payload.biopsies];

        return {
            patientList: newPatientList,
            selectedPatient: {...state.selectedPatient}
        }
    }),
    on(biopsyActions.addBiopsySuccess, (state, {payload}) => {
        let newPatientList = [...state.patientList];
        let patientIndex = newPatientList.findIndex(
            patient => patient.id == payload.patientId);
        let patient = {...newPatientList[patientIndex]};
        if (patient.biopsies == null) {
            patient.biopsies = [payload.biopsy];
        }
        else {
            patient.biopsies = 
                [...patient.biopsies, payload.biopsy];
        }
        newPatientList.splice(patientIndex, 1, patient);

        return {
            patientList: newPatientList,
            selectedPatient: {...state.selectedPatient}
        }
    })
);

export function patientReducer(state, action) {
    return _patientReducer(state, action);
}