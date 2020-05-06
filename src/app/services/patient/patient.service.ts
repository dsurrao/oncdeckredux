import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Patient } from '../../interfaces/patient';
import { v4 as uuidv4 } from 'uuid';
import { IPatientService } from './patient.service.interface';
import { PatientSearchCriteria } from 'src/app/interfaces/patient-search-criteria';

@Injectable({
  providedIn: 'root'
})
export class PatientService implements IPatientService {

  constructor() { }

  getPatients(criteria?: PatientSearchCriteria): Observable<Patient[]> {    
    return of ([]);
  }

  getPatient(id: string): Observable<Patient> {
    return null;
  }

  putPatient(patient: Patient): Observable<Patient> {
    return null;
  }

  deletePatient(id: string): Observable<any> {
    return null;
  }

  generateId(): string
  {
    return uuidv4();
  }

  applySearchCriteria(patients: Patient[], 
    criteria: PatientSearchCriteria): Patient[]
  {
    let searchResults = patients;

    if (searchResults.length > 0) {
      if (criteria.demog != null) {
        if (criteria.demog.name != null) {
          searchResults = searchResults.filter(patient => 
            patient.demog.firstName.toLowerCase().indexOf(criteria.demog.name) != -1
            || patient.demog.lastName.toLowerCase().indexOf(criteria.demog.name) != -1
          );
        }
      }

      if (criteria.biopsies != null) {
        if (criteria.biopsies.isScheduled) {
          searchResults = searchResults.filter(patient => {
            if (patient.biopsies != null) {
              if (patient.biopsies.findIndex(biopsy => 
                new Date(biopsy.dateScheduled) >= new Date()) != -1) {
                return true;
              }
              else {
                return false;
              }
            }
            else {
              return false;
            }
          });
        }
      }
    }

    // todo: implement age range, biopsy search

    return searchResults;
  }
}
