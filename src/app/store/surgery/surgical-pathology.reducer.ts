import { Action, createReducer, on, createFeatureSelector, createSelector } from '@ngrx/store';
import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';
import * as SurgicalPathologyActions from './surgical-pathology.actions';
import { SurgicalPathology } from 'src/app/models/surgery/surgical-pathology.model';
import { isDataSource } from '@angular/cdk/collections';

export const surgicalPathologiesFeatureKey = 'surgicalPathologies';

export interface State extends EntityState<SurgicalPathology> {
  // additional entities state properties
}

export const adapter: EntityAdapter<SurgicalPathology> = createEntityAdapter<SurgicalPathology>();

export const initialState: State = adapter.getInitialState({
  // additional entity state properties
});


export const reducer = createReducer(
  initialState,
  on(SurgicalPathologyActions.addSurgicalPathology,
    (state, action) => adapter.addOne(action.surgicalPathology, state)
  ),
  on(SurgicalPathologyActions.upsertSurgicalPathology,
    (state, action) => adapter.upsertOne(action.surgicalPathology, state)
  ),
  on(SurgicalPathologyActions.addSurgicalPathologys,
    (state, action) => adapter.addMany(action.surgicalPathologys, state)
  ),
  on(SurgicalPathologyActions.upsertSurgicalPathologys,
    (state, action) => adapter.upsertMany(action.surgicalPathologys, state)
  ),
  on(SurgicalPathologyActions.updateSurgicalPathology,
    (state, action) => adapter.updateOne(action.surgicalPathology, state)
  ),
  on(SurgicalPathologyActions.updateSurgicalPathologys,
    (state, action) => adapter.updateMany(action.surgicalPathologys, state)
  ),
  on(SurgicalPathologyActions.deleteSurgicalPathology,
    (state, action) => adapter.removeOne(action.id, state)
  ),
  on(SurgicalPathologyActions.deleteSurgicalPathologys,
    (state, action) => adapter.removeMany(action.ids, state)
  ),
  on(SurgicalPathologyActions.loadSurgicalPathologys,
    (state, action) => adapter.setAll(action.surgicalPathologys, state)
  ),
  on(SurgicalPathologyActions.clearSurgicalPathologys,
    state => adapter.removeAll(state)
  ),
);


export const {
  selectIds,
  selectEntities,
  selectAll,
  selectTotal,
} = adapter.getSelectors();

export const selectSurgicalPathologies = createSelector(
  createFeatureSelector(surgicalPathologiesFeatureKey),
  selectAll
);

export const selectSurgicalPathology = createSelector(
  selectSurgicalPathologies,
  (surgicalPathologies, props) => surgicalPathologies.find(
    s => s.id == props.id)
);

export const selectSurgicalPathologiesSubset = createSelector(
  selectSurgicalPathologies,
  (surgicalPathologies: SurgicalPathology[], props: { ids: string[]}) => 
    surgicalPathologies.filter(s => props.ids.indexOf(s.id) != -1)
      .sort((a, b) => b.reportDate.localeCompare(a.reportDate))
);

export const selectSurgicalPathologyByAppointment = createSelector(
  selectSurgicalPathologies,
  (surgicalPathologies: SurgicalPathology[], props: { appointmentId: string }) => 
    surgicalPathologies.find(s => s.appointmentId = props.appointmentId)
);