export interface Patient {
    id: string;
    lastName: string;
    firstName: string;
    gender: string;
    dob: Date;
    town: string;
    phoneNumber: string;
    contactFirstName: string;
    contactLastName: string;
    contactPhoneNumber: string;
    dateCreatedMs: number;
}