import { Observable } from 'rxjs';
import { Patient } from '../interfaces/patient';

export interface IPatientService {
    getPatients(): Observable<Patient[]>;
    getPatient(id: string): Observable<Patient>;
    putPatient(patient: Patient): Observable<Patient>;
    deletePatient(id: string): Observable<any>;
}