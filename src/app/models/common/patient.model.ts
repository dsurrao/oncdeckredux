import { GenderEnum } from '../enums/gender.enum';

export interface Patient {
  id: string;
  firstName: string;
  middleName?: string;
  lastName: string;
  gender: GenderEnum;
  dateOfBirth?: string;
  town?: string;
  phoneNumber?: string;
  contactFirstName?: string;
  contactLastName?: string;
  contactPhoneNumber?: string;
  biopsyIds?: string[];
  appointmentIds?: string[];
  procedureIds?: string[];
  surgicalPathologyIds?: string[];  
  dateCreatedMs: number;
}
