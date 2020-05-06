// todo: create actions for failure

import { createAction, props } from '@ngrx/store';
import { Patient } from '../../interfaces/patient';
import { PatientSearchCriteria } from 'src/app/interfaces/patient-search-criteria';

export const createSearchCriteria = createAction(
    'Create Search Criteria',
    props<{payload: PatientSearchCriteria}>()
);

export const fetchPatients = createAction(
    'Fetch Patients',
    props<{payload: PatientSearchCriteria}>()
);

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

