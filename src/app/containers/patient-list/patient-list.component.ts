import { Component } from '@angular/core';
import { Observable, Subscription, combineLatest } from 'rxjs';
import { Store } from '@ngrx/store';
import { Title } from '@angular/platform-browser';
import { Patient } from '../../models/common/patient.model';
import { PatientSearchCriteria } from 'src/app/models/common/patient-search-criteria.model';
import * as fromPatients from '../../store/patient/patient.reducer';
import * as fromAppointments from '../../store/appointment/appointment.reducer';
import * as fromBiopsy from '../../store/biopsy/biopsy.reducer';
import * as fromSearchCriteria from '../../store/search-criteria/search-criteria.reducer';
import { map } from 'rxjs/operators';
import { Biopsy } from 'src/app/models/biopsy/biopsy.model';
import { Appointment } from 'src/app/models/appointment.model';
import { patientState } from 'src/app/store/mock-data';
import * as dateUtilities from 'src/app/utilities/date-utilities';

/**
 * @title Patient List
 */
@Component({
  selector: 'app-patient-list',
  templateUrl: './patient-list.component.html',
  styleUrls: ['./patient-list.component.css']
})
export class PatientListComponent {
  patients$: Observable<Patient[]>;
  searchCriteria$: Observable<PatientSearchCriteria>;
  subscription: Subscription;
  title: string;

  constructor(private store: Store, private titleService: Title) {
    this.title = titleService.getTitle();

    let p$: Observable<Patient[]> = this.store.select(
      fromPatients.selectPatients);
    let a$: Observable<Appointment[]> = this.store.select(
      fromAppointments.selectAppointments);
    let s$: Observable<PatientSearchCriteria> = this.store.select(
      fromSearchCriteria.selectSearchCriteria);

    // todo: move search criteria filtering to effects
    this.patients$ = combineLatest([p$, a$, s$]).pipe(
      map((ps) => {
        let patients: Patient[] = ps[0];
        let appointments: Appointment[] = ps[1];
        let searchCriteria: PatientSearchCriteria = ps[2];
        if (searchCriteria.appointment 
          && searchCriteria.appointment.isScheduled) {
            patients = patients.filter(p => {
              // return true if the patient has future appts
              return (p.appointmentIds
                && appointments.filter(a => 
                dateUtilities.isCurrentOrFutureDate(a.startDate)
                && p.appointmentIds.indexOf(a.id) != -1).length > 0);
            })
        }
        return patients;
      })
    );
    
  }

  deletePatient(patient: Patient) {
    window.alert("delete?");
  }
}
