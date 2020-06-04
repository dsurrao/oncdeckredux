import { createAction, props } from '@ngrx/store';
import { Update } from '@ngrx/entity';

import { Biopsy } from '../../models/biopsy/biopsy.model';

export const loadBiopsys = createAction(
  '[Biopsy/API] Load Biopsys', 
  props<{ biopsys: Biopsy[] }>()
);

export const addBiopsy = createAction(
  '[EditBiopsyComponent] Add Biopsy',
  props<{ patientId: string, biopsy: Biopsy }>()
);

export const upsertBiopsy = createAction(
  '[EditBiopsyComponent] Upsert Biopsy',
  props<{ patientId: string, biopsy: Biopsy }>()
);

export const addBiopsys = createAction(
  '[Biopsy/API] Add Biopsys',
  props<{ biopsys: Biopsy[] }>()
);

export const upsertBiopsys = createAction(
  '[Biopsy/API] Upsert Biopsys',
  props<{ biopsys: Biopsy[] }>()
);

export const updateBiopsy = createAction(
  '[Biopsy/API] Update Biopsy',
  props<{ biopsy: Update<Biopsy> }>()
);

export const updateBiopsys = createAction(
  '[Biopsy/API] Update Biopsys',
  props<{ biopsys: Update<Biopsy>[] }>()
);

export const deleteBiopsy = createAction(
  '[Biopsy/API] Delete Biopsy',
  props<{ id: string }>()
);

export const deleteBiopsys = createAction(
  '[Biopsy/API] Delete Biopsys',
  props<{ ids: string[] }>()
);

export const clearBiopsys = createAction(
  '[Biopsy/API] Clear Biopsys'
);
