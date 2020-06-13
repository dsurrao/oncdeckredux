import { createAction, props } from '@ngrx/store';
import { Update } from '@ngrx/entity';
import { SurgicalPathology } from 'src/app/models/surgery/surgical-pathology.model';

export const loadSurgicalPathologys = createAction(
  '[SurgicalPathology/API] Load SurgicalPathologys', 
  props<{ surgicalPathologys: SurgicalPathology[] }>()
);

export const addSurgicalPathology = createAction(
  '[SurgicalPathology/API] Add SurgicalPathology',
  props<{ surgicalPathology: SurgicalPathology }>()
);

export const upsertSurgicalPathology = createAction(
  '[SurgicalPathology/API] Upsert SurgicalPathology',
  props<{ surgicalPathology: SurgicalPathology }>()
);

export const addSurgicalPathologys = createAction(
  '[SurgicalPathology/API] Add SurgicalPathologys',
  props<{ surgicalPathologys: SurgicalPathology[] }>()
);

export const upsertSurgicalPathologys = createAction(
  '[SurgicalPathology/API] Upsert SurgicalPathologys',
  props<{ surgicalPathologys: SurgicalPathology[] }>()
);

export const updateSurgicalPathology = createAction(
  '[SurgicalPathology/API] Update SurgicalPathology',
  props<{ surgicalPathology: Update<SurgicalPathology> }>()
);

export const updateSurgicalPathologys = createAction(
  '[SurgicalPathology/API] Update SurgicalPathologys',
  props<{ surgicalPathologys: Update<SurgicalPathology>[] }>()
);

export const deleteSurgicalPathology = createAction(
  '[SurgicalPathology/API] Delete SurgicalPathology',
  props<{ id: string }>()
);

export const deleteSurgicalPathologys = createAction(
  '[SurgicalPathology/API] Delete SurgicalPathologys',
  props<{ ids: string[] }>()
);

export const clearSurgicalPathologys = createAction(
  '[SurgicalPathology/API] Clear SurgicalPathologys'
);
