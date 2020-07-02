import { GenderEnum } from '../models/enums/gender.enum';
import { BiopsyTypeEnum } from '../models/enums/biopsy-type.enum';
import { SurgeryTypeEnum } from '../models/enums/surgery-type.enum';
import { ProcedureStatusEnum } from '../models/enums/procedure-status.enum';
import { Biopsy } from '../models/biopsy/biopsy.model';
import { surgicalPathologiesFeatureKey } from './surgery/surgical-pathology.reducer';

export const patientState = {
  entities: {
    "51": {
      id: "51", 
      firstName: "Ya", 
      lastName: "Le", 
      gender: GenderEnum.Female, 
      dateOfBirth: new Date(2000, 1, 2).toISOString(), 
      appointmentIds: ["appt1", "appt2"], 
      dateCreated: new Date().toISOString()
    },
    "52": {
      id: "52", 
      firstName: "Jane", 
      lastName: "Dia", 
      gender: GenderEnum.Female,
      dateOfBirth: new Date(2000, 2, 1).toISOString(), 
      dateCreated: new Date().toISOString()
    }
  },
  ids: ["51", "52"]
};

export const appointmentState = {
  entities: {
    "appt1": {
      id: "appt1", 
      startDate: new Date(2020, 5, 24).toISOString(),
      facility: "MGH", 
      contactPerson: "Greg", 
      appointmentType: BiopsyTypeEnum.CoreNeedleBiopsy
    },
    "appt2": {
      id: "appt2", 
      startDate: new Date(2020, 5, 25).toISOString(),
      facility: "MGH", 
      contactPerson: "Greg", 
      appointmentType: SurgeryTypeEnum.ModifiedRadicalMastectomy
    }
  },
  ids: ["appt1", "appt2"]
};

export const biopsyState = {
  entities: {},
  ids: []
};

export const biopsy: Biopsy = { 
  id: '1', 
  appointmentId: 'appt1', 
  status: ProcedureStatusEnum.NotDone
};

export const surgicalPathologyState = {
  entities: {},
  ids: []
};

export const searchCriteriaState = {
  searchCriteria: {}
};

export const initialState = {
  'patients': patientState,
  'biopsies': biopsyState,
  'searchCriteria' : searchCriteriaState,
  'appointments': appointmentState,
  'surgicalPathologies': surgicalPathologyState,
}
