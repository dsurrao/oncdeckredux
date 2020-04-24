import { Observable } from 'rxjs';
import { Patient } from '../../interfaces/patient';
import { PatientSearchCriteria } from 'src/app/interfaces/patient-search-criteria';

export interface IPatientService {
    getPatients(): Observable<Patient[]>;    
    getPatient(id: string): Observable<Patient>;
    putPatient(patient: Patient): Observable<Patient>;
    deletePatient(id: string): Observable<any>;
    searchPatients(criteria: PatientSearchCriteria): Observable<Patient[]>;
    generateId(): string;
}