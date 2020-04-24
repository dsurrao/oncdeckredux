// todo: create actions for failure

import { createAction, props } from '@ngrx/store';
import { Patient } from '../../interfaces/patient';

export const fetchPatients = createAction('Fetch Patients');

export const fetchPatientsSuccess = createAction(
    'Fetch Patients Success',
    props<{payload: Patient[]}>()
);

export const fetchPatient = createAction(
    'Fetch Patient',
    props<{payload: string}>()
);

export const fetchPatientSuccess = createAction(
    'Fetch Patient Success',
    props<{payload: Patient}>()
);

export const addPatient = createAction(
    'Add Patient',
    props<{payload: Patient}>());

export const addPatientSuccess = createAction(
    'Add Patient Success',
    props<{payload: Patient}>()
);

export const deletePatient = createAction(
    'Delete Patient',
    props<{payload: string}>()
);

export const deletePatientSuccess = createAction(
    'Delete Patient Success'
);

