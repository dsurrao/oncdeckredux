export interface Patient {
  id: string;
  firstName: string;
  middleName?: string;
  lastName: string;
  gender?: string;
  dateOfBirth?: string;
  town?: string;
  phoneNumber?: string;
  contactFirstName?: string;
  contactLastName?: string;
  contactPhoneNumber?: string;
  biopsies?: string[];
  appointmentIds?: string[];
  procedureIds?: string[];
  surgicalPathologyIds?: string[];  
  dateCreatedMs: number;
}
