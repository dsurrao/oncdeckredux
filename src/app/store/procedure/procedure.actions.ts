import { createAction, props } from '@ngrx/store';
import { Update } from '@ngrx/entity';
import { Procedure } from 'src/app/models/procedure.model';

export const loadProcedures = createAction(
  '[Procedure/API] Load Procedures', 
  props<{ procedures: Procedure[] }>()
);

export const addProcedure = createAction(
  '[Procedure/API] Add Procedure',
  props<{ procedure: Procedure }>()
);

export const upsertProcedure = createAction(
  '[Procedure/API] Upsert Procedure',
  props<{ patientId: string, procedure: Procedure }>()
);

export const addProcedures = createAction(
  '[Procedure/API] Add Procedures',
  props<{ procedures: Procedure[] }>()
);

export const upsertProcedures = createAction(
  '[Procedure/API] Upsert Procedures',
  props<{ procedures: Procedure[] }>()
);

export const updateProcedure = createAction(
  '[Procedure/API] Update Procedure',
  props<{ procedure: Update<Procedure> }>()
);

export const updateProcedures = createAction(
  '[Procedure/API] Update Procedures',
  props<{ procedures: Update<Procedure>[] }>()
);

export const deleteProcedure = createAction(
  '[Procedure/API] Delete Procedure',
  props<{ id: string }>()
);

export const deleteProcedures = createAction(
  '[Procedure/API] Delete Procedures',
  props<{ ids: string[] }>()
);

export const clearProcedures = createAction(
  '[Procedure/API] Clear Procedures'
);
