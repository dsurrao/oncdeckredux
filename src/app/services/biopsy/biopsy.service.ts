import { Injectable } from '@angular/core';
import { BrowserSessionPatientService } from '../patient/browser-session-patient.service';
import { PatientService } from '../patient/patient.service';
import { Biopsy } from 'src/app/interfaces/biopsy';
import { Observable } from 'rxjs';
import { map, mergeMap } from 'rxjs/operators';
import * as _ from 'lodash';
import { Patient } from 'src/app/interfaces/patient';

@Injectable({
  providedIn: 'root'
})
export class BiopsyService {
  patientService: PatientService;

  constructor(patientService: BrowserSessionPatientService) { 
    this.patientService = patientService;
  }

  putBiopsy(biopsyInfo: {biopsy: Biopsy, patientId: string}):
     Observable<{biopsy: Biopsy, patientId: string}>
  {
    return this.patientService.getPatient(biopsyInfo.patientId).pipe(
      mergeMap(patient => {
        let updatedPatient: Patient = _.cloneDeep(patient);
        let updatedBiopsy: Biopsy = _.cloneDeep(biopsyInfo.biopsy);

        if (updatedPatient.biopsies == null) {
          updatedPatient.biopsies = [updatedBiopsy];
        }
        else {
          if (biopsyInfo.biopsy.id != null) {
            updatedPatient.biopsies.splice(
              updatedPatient.biopsies.findIndex(b => b.id == biopsyInfo.biopsy.id),
              1,
              updatedBiopsy
            );
          }
          else {
            updatedBiopsy.id = this.patientService.generateId();
            updatedPatient.biopsies.push(updatedBiopsy);
          }          
        }

        return this.patientService.putPatient(updatedPatient).pipe(
          map(patient => {
            return ({biopsy: updatedBiopsy, patientId: biopsyInfo.patientId});
          }));
      })
    );
  }

}
