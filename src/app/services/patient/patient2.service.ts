import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Patient } from '../../interfaces/patient';
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
    return of(this.patients.find(patient => 
      patient.id == patientId));
  }

  putPatient(patient: Patient): Observable<Patient> {
    let newPatient: Patient = Object.assign({}, patient);

    if (newPatient.id == null || newPatient.id == '') {
      newPatient.id = uuidv4();
      newPatient.dateCreatedMs = Date.now();
      this.patients = [...this.patients, newPatient];
    }
    else {
      let newPatients = [...this.patients];
      let replaceIndex = newPatients.findIndex(
        patient => patient.id == newPatient.id);
      newPatients.splice(replaceIndex, 1, newPatient);
      this.patients = newPatients;
    }
    
    return of(newPatient);
  }

  deletePatient(patientId: string): Observable<any> {
    this.patients = [...this.patients].splice(
      this.patients.findIndex(patient => 
        patient.id == patientId),
      1
    );
    
    return of(true);
  }
}
