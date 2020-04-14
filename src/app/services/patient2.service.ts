import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Patient } from '../interfaces/patient';
import { IPatientService } from './patient.service.interface';
import { v4 as uuidv4 } from 'uuid';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class Patient2Service implements IPatientService {

  patients: Patient[] = [];

  getPatients(): Observable<Patient[]> {
    return of(this.patients);
  }

  getPatient(patientId: string): Observable<Patient> {
    return of(this.patients.find(patient => patient.id == patientId));
  }

  putPatient(patient: Patient): Observable<Patient> {
    let newPatient: Patient = Object.assign({}, patient);

    if (newPatient.id == null) {
      newPatient.id = uuidv4();
      newPatient.dateCreatedMs = Date.now();
    }
    
    // todo: fix
    //this.patients.push(newPatient);

    return of(newPatient);
  }

  deletePatient(patientId: string): Observable<any> {
    //todo: remove length check
    if (this.patients.length > 0) {
      this.patients.splice(
        this.patients.findIndex(patient => patient.id == patientId),
        1
      );
    }
    
    return of(true);
  }
}
