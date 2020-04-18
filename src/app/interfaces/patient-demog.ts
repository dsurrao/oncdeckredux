export interface PatientDemog {
    lastName: string;
    firstName: string;
    gender: string;
    dob: Date;
    town?: string;
    phoneNumber?: string;
    contactFirstName?: string;
    contactLastName?: string;
    contactPhoneNumber?: string;
}