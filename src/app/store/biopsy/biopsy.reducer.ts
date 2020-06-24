import { createReducer, on, createSelector, createFeatureSelector } from '@ngrx/store';
import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';
import { Biopsy } from '../../models/biopsy/biopsy.model';
import * as BiopsyActions from './biopsy.actions';

export const biopsiesFeatureKey = 'biopsies';

export interface State extends EntityState<Biopsy> {
  // additional entities state properties
}

export const adapter: EntityAdapter<Biopsy> = createEntityAdapter<Biopsy>();

export const initialState: State = adapter.getInitialState({
  // additional entity state properties
});

export const reducer = createReducer(
  initialState,
  on(BiopsyActions.addBiopsy,
    (state, action) => adapter.addOne(action.biopsy, state)
  ),
  on(BiopsyActions.upsertBiopsy,
    (state, action) => adapter.upsertOne(action.biopsy, state)
  ),
  on(BiopsyActions.addBiopsys,
    (state, action) => adapter.addMany(action.biopsys, state)
  ),
  on(BiopsyActions.upsertBiopsys,
    (state, action) => adapter.upsertMany(action.biopsys, state)
  ),
  on(BiopsyActions.updateBiopsy,
    (state, action) => adapter.updateOne(action.biopsy, state)
  ),
  on(BiopsyActions.updateBiopsys,
    (state, action) => adapter.updateMany(action.biopsys, state)
  ),
  on(BiopsyActions.deleteBiopsy,
    (state, action) => adapter.removeOne(action.id, state)
  ),
  on(BiopsyActions.deleteBiopsys,
    (state, action) => adapter.removeMany(action.ids, state)
  ),
  on(BiopsyActions.loadBiopsys,
    (state, action) => adapter.setAll(action.biopsys, state)
  ),
  on(BiopsyActions.clearBiopsys,
    state => adapter.removeAll(state)
  ),
);


export const {
  selectIds,
  selectEntities,
  selectAll,
  selectTotal,
} = adapter.getSelectors();

export const selectBiopsies = createSelector(
  createFeatureSelector(biopsiesFeatureKey),
  selectAll
);

export const selectBiopsy = createSelector(
  selectBiopsies,
  (biopsies: Biopsy[], props) => biopsies.find(b => b.id == props.id)
)

export const selectBiopsiesSubset = createSelector(
  selectBiopsies,
  (biopsies: Biopsy[], props) => 
    biopsies.filter(b => props.biopsyIds.indexOf(b.id) != -1)
      .sort((a, b) => b.pathologyReportDate.localeCompare(a.pathologyReportDate))
)

export const selectBiopsyByAppointment = createSelector(
  selectBiopsies,
  (biopsies: Biopsy[], props: { appointmentId: string }) => 
    biopsies.find(b => b.appointmentId == props.appointmentId)
)