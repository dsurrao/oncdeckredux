import { createReducer, on, createSelector, createFeatureSelector } from '@ngrx/store';
import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';
import * as _ from 'lodash';
import { Patient } from '../../models/common/patient.model';
import * as PatientActions from './patient.actions';
import * as BiopsyActions from '../biopsy/biopsy.actions';
import * as AppointmentActions from '../appointment/appointment.actions';
import * as SurgicalPathologyActions from '../surgery/surgical-pathology.actions';
import { GenderEnum } from 'src/app/models/enums/gender.enum';

export const patientsFeatureKey = 'patients';

export interface State extends EntityState<Patient> {
  // additional entities state properties
}

export const adapter: EntityAdapter<Patient> = createEntityAdapter<Patient>();

export const initialState: State = adapter.getInitialState({
  // additional entity state properties
  entities: 
    {
      "51": {id: "51", firstName: "Ya", lastName: "Le", gender: GenderEnum.Female, 
        dateOfBirth: "2000-02-02", appointmentIds: ["appt1", "appt2"], 
        dateCreatedMs: Date.now()},
      "52": {id: "52", firstName: "Jane", lastName: "Dia", gender: GenderEnum.Female,
      dateOfBirth: "2000-03-01", dateCreatedMs: Date.now()}
    },
    ids: ["51", "52"]
});

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
      patient.biopsyIds.push(action.biopsy.id);
      return adapter.upsertOne(patient, state);
      //return {...state, entities: {...state.entities, [action.patientId]: patient}};
    }
  ),
  on(AppointmentActions.upsertAppointment,
    (state, action) => {
      // append appointment id for specified patient
      let patient: Patient = _.cloneDeep(state.entities[action.patientId]);
      if (patient.appointmentIds == null) {
        patient.appointmentIds = [];
      }
      patient.appointmentIds.push(action.appointment.id);
      return adapter.upsertOne(patient, state);
    }
  ),
  on(SurgicalPathologyActions.upsertSurgicalPathology,
    (state, action) => {
      let patient: Patient = _.cloneDeep(state.entities[action.patientId]);
      if (patient.surgicalPathologyIds == null) {
        patient.surgicalPathologyIds = [];
      }
      patient.surgicalPathologyIds.push(action.surgicalPathology.id);
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
