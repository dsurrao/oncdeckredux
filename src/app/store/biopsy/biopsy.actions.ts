import { createAction, props } from '@ngrx/store';
import { Biopsy } from 'src/app/interfaces/biopsy';

// payload: patientId
export const fetchBiopsies = createAction('Fetch Biopsies',
    props<{payload: string}>()
);

export const fetchBiopsiesSuccess = createAction('Fetch Biopsies Success',
    props<{payload: {biopsies: Biopsy[], patientId: string}}>()
);

// todo: add failure actions

// payload: biopsyId
export const fetchBiopsy = createAction('Fetch Biopsy',
    props<{payload: string}>()
);

export const fetchBiopsySuccess = createAction('Fetch Biopsy Success',
    props<{payload: Biopsy}>()
);

export const addBiopsy = createAction('Add Biopsy',
    props<{payload: {biopsy: Biopsy, patientId: string}}>()
);

export const addBiopsySuccess = createAction('Add Biopsy Success',
    props<{payload: {biopsy: Biopsy, patientId: string}}>()
);