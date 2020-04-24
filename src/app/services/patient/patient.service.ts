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

  getPatients(): Observable<Patient[]> {    
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

  searchPatients(criteria: PatientSearchCriteria): Observable<Patient[]>
  {
    let searchResults: Patient[] = [];

    let subscription = this.getPatients().subscribe(patients => {
      searchResults = this.applySearchCriteria(patients, criteria);
    });
    subscription.unsubscribe();

    return of(searchResults);
  }

  applySearchCriteria(patients: Patient[], 
    criteria: PatientSearchCriteria): Patient[]
  {
    // todo: use lodash for deep cloning
    let searchResults = [...patients];

    if (searchResults.length > 0 && criteria.demog != null) {
      if (criteria.demog.name != null) {
        searchResults = searchResults.filter(patient => 
          patient.demog.firstName.toLowerCase().indexOf(criteria.demog.name) != -1
          || patient.demog.lastName.toLowerCase().indexOf(criteria.demog.name) != -1
        );
      }
    }

    // todo: implement age range, biopsy search

    return searchResults;
  }
}
