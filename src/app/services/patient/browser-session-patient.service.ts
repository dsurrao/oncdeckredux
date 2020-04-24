import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Patient } from '../../interfaces/patient';
import { of } from 'rxjs';
import { PatientService } from './patient.service';

@Injectable({
  providedIn: 'root'
})
export class BrowserSessionPatientService extends PatientService {
  patients: Patient[] = [{
      id: 'abcd',
      demog: {firstName: 'Robyn', lastName: 'Gal', gender: 'Female', 
          dateOfBirth: '1999-01-20'},
      dateCreatedMs: Date.now()
  }];

  constructor() {
    super();
  }

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
      newPatient.id = this.generateId();
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
