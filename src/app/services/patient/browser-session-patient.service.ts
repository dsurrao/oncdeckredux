import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Patient } from '../../interfaces/patient';
import { of } from 'rxjs';
import { PatientService } from './patient.service';
import { PatientSearchCriteria } from 'src/app/interfaces/patient-search-criteria';

@Injectable({
  providedIn: 'root'
})
export class BrowserSessionPatientService extends PatientService {
  patients: Patient[] = [
    {
      id: 'abcd',
      demog: {firstName: 'PatientA', lastName: 'Smith', gender: 'Female', 
          dateOfBirth: '1999-01-20'},
      biopsies: [{
        id: null,
        dateScheduled: new Date('2021-02-23'),
        facilityName: 'ABC Hospital',
        providerName: 'Dr. X'
      }],
      dateCreatedMs: Date.now()
    },
    {
      id: 'abcd2',
      demog: {firstName: 'PatientB', lastName: 'Jones', gender: 'Female', 
        dateOfBirth: '2002-01-20'},
      biopsies: [{
        id: null,
        dateScheduled: new Date('2020-05-01'),
        facilityName: 'ABC Hospital',
        providerName: 'Dr. Y'
      }],
      dateCreatedMs: Date.now()
    }
  ];

  constructor() {
    super();
  }

  getPatients(criteria?: PatientSearchCriteria): Observable<Patient[]> {
    let filteredPatients: Patient[] = this.patients;
    if (criteria != null) {
      filteredPatients = this.applySearchCriteria(this.patients, criteria)
    }
    return of(filteredPatients);
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
