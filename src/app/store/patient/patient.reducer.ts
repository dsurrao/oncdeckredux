import { createReducer, on, createSelector, createFeatureSelector } from '@ngrx/store';
import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';
import * as _ from 'lodash';
import { Patient } from '../../models/common/patient.model';
import * as PatientActions from './patient.actions';
import * as BiopsyActions from '../biopsy/biopsy.actions';
import * as AppointmentActions from '../appointment/appointment.actions';
import * as SurgicalPathologyActions from '../surgery/surgical-pathology.actions';
import { GenderEnum } from 'src/app/models/enums/gender.enum';
import * as mockData from 'src/app/store/mock-data';

export const patientsFeatureKey = 'patients';

export interface State extends EntityState<Patient> {
  // additional entities state properties
}

export const adapter: EntityAdapter<Patient> = createEntityAdapter<Patient>();

export const initialState: State = adapter.getInitialState(
  mockData.patientState
);

export const reducer = createReducer(
  initialState,
  on(PatientActions.addPatient,
    (state, action) => adapter.addOne(action.patient, state)
  ),
  on(PatientActions.upsertPatient,
    (state, action) => adapter.upsertOne(action.patient, state)
  ),
  on(PatientActions.addPatients,
    (state, action) => adapter.addMany(action.patients, state)
  ),
  on(PatientActions.upsertPatients,
    (state, action) => adapter.upsertMany(action.patients, state)
  ),
  on(PatientActions.updatePatient,
    (state, action) => adapter.updateOne(action.patient, state)
  ),
  on(PatientActions.updatePatients,
    (state, action) => adapter.updateMany(action.patients, state)
  ),
  on(PatientActions.deletePatient,
    (state, action) => adapter.removeOne(action.id, state)
  ),
  on(PatientActions.deletePatients,
    (state, action) => adapter.removeMany(action.ids, state)
  ),
  on(PatientActions.loadPatients,
    (state, action) => adapter.setAll(action.patients, state)
  ),
  on(PatientActions.clearPatients,
    state => adapter.removeAll(state)
  ),
  on(BiopsyActions.upsertBiopsy,
    (state, action) => {
      // append biopsy id for specified patient
      const patient: Patient = _.cloneDeep(state.entities[action.patientId]);

      if (patient.biopsyIds == null) {
        patient.biopsyIds = [];
      }

      if (patient.biopsyIds.length == 0 
        || patient.biopsyIds.indexOf(action.biopsy.id) == -1) {
        patient.biopsyIds.push(action.biopsy.id);
      }

      return adapter.upsertOne(patient, state);
    }
  ),
  on(AppointmentActions.upsertAppointment,
    (state, action) => {
      // append appointment id for specified patient
      let patient: Patient = _.cloneDeep(state.entities[action.patientId]);
      
      if (patient.appointmentIds == null) {
        patient.appointmentIds = [];
      }
      
      if (patient.appointmentIds.length == 0 
        || patient.appointmentIds.indexOf(action.appointment.id) == -1) {
        patient.appointmentIds.push(action.appointment.id);
      }

      return adapter.upsertOne(patient, state);
    }
  ),
  on(SurgicalPathologyActions.upsertSurgicalPathology,
    (state, action) => {
      let patient: Patient = _.cloneDeep(state.entities[action.patientId]);

      if (patient.surgicalPathologyIds == null) {
        patient.surgicalPathologyIds = [];
      }
      
      if (patient.surgicalPathologyIds.length == 0 
        || patient.surgicalPathologyIds.indexOf(
        action.surgicalPathology.id) == -1) {
        patient.surgicalPathologyIds.push(action.surgicalPathology.id);
      }

      return adapter.upsertOne(patient, state);
    }
  )
);

export const {
  selectIds,
  selectEntities,
  selectAll,
  selectTotal,
} = adapter.getSelectors()

export const selectPatients = createSelector(
  createFeatureSelector(patientsFeatureKey),
  selectAll
);

export const selectPatient = createSelector(
  selectPatients,
  (patients: Patient[], props) => patients.find(p => p.id == props.id)
);
