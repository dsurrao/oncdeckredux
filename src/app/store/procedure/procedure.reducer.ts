import { Action, createReducer, on } from '@ngrx/store';
import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';
import * as ProcedureActions from './procedure.actions';
import { Procedure } from 'src/app/models/procedure.model';

export const proceduresFeatureKey = 'procedures';

export interface State extends EntityState<Procedure> {
  // additional entities state properties
}

export const adapter: EntityAdapter<Procedure> = createEntityAdapter<Procedure>();

export const initialState: State = adapter.getInitialState({
  // additional entity state properties
});


export const reducer = createReducer(
  initialState,
  on(ProcedureActions.addProcedure,
    (state, action) => adapter.addOne(action.procedure, state)
  ),
  on(ProcedureActions.upsertProcedure,
    (state, action) => adapter.upsertOne(action.procedure, state)
  ),
  on(ProcedureActions.addProcedures,
    (state, action) => adapter.addMany(action.procedures, state)
  ),
  on(ProcedureActions.upsertProcedures,
    (state, action) => adapter.upsertMany(action.procedures, state)
  ),
  on(ProcedureActions.updateProcedure,
    (state, action) => adapter.updateOne(action.procedure, state)
  ),
  on(ProcedureActions.updateProcedures,
    (state, action) => adapter.updateMany(action.procedures, state)
  ),
  on(ProcedureActions.deleteProcedure,
    (state, action) => adapter.removeOne(action.id, state)
  ),
  on(ProcedureActions.deleteProcedures,
    (state, action) => adapter.removeMany(action.ids, state)
  ),
  on(ProcedureActions.loadProcedures,
    (state, action) => adapter.setAll(action.procedures, state)
  ),
  on(ProcedureActions.clearProcedures,
    state => adapter.removeAll(state)
  ),
);


export const {
  selectIds,
  selectEntities,
  selectAll,
  selectTotal,
} = adapter.getSelectors();
