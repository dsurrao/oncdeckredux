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
    on(addPatient, (state, {payload}) => 
        [...state, payload]
    ),
    on(addPatientSuccess, (state, {payload}) => {
        // create a copy of state
        let newState = [...state];

        // replace added patient with permanent value
        newState.splice(
            newState.findIndex(patient => patient.id == payload.id),
            1,
            payload
        );
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