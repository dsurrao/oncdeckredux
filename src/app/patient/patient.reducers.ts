import {createReducer, on} from '@ngrx/store';
import {fetchPatients, fetchPatientsSuccess, addPatient, 
    addPatientSuccess, deletePatient} from './patient.actions';
import {Patient} from '../interfaces/patient';

export const initialState: Patient[] = [];

const _patientReducer = createReducer(initialState,
    on(fetchPatients, state => state),
    on(fetchPatientsSuccess, (state, { payload }) => 
        [...state, ...payload]
    ),
    on(addPatientSuccess, (state, {payload}) => {
        // create a copy of state
        let newState = [...state];

        let replaceIndex = newState.findIndex(
            patient => patient.id == payload.id);
        
        if (replaceIndex >= 0) {
            // replace patient with new value
            newState.splice(
                newState.findIndex(patient => patient.id == payload.id),
                1,
                payload
            );
        }
        else {
            newState = [...state, payload];
        }
        
        return newState;
    }),
    on(deletePatient, (state, {payload}) => {
        let newState = [...state];
        newState.splice(
            newState.findIndex(patient => patient.id == payload),
            1
        );
        return newState;
    })
);

export function patientReducer(state, action) {
    return _patientReducer(state, action);
}