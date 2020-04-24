import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { EMPTY } from 'rxjs';
import { map, mergeMap, catchError } from 'rxjs/operators';
import { BrowserSessionPatientService } from 'src/app/services/patient/browser-session-patient.service';
import { BiopsyService } from 'src/app/services/biopsy/biopsy.service';

@Injectable()
export class PatientEffects {

    fetchPatients$ = createEffect(
        () => this.actions$.pipe(
            ofType('Fetch Patients'),
            mergeMap(() => this.patientService.getPatients()
                .pipe(
                    map(patients => ({ type: 'Fetch Patients Success',
                        payload: patients })),
                    catchError(() => EMPTY)
                )
            )
        )
    );

    // todo: create constants for action types
    fetchPatient$ = createEffect(
        () => this.actions$.pipe(
            ofType('Fetch Patient'),
            mergeMap(action => this.patientService.getPatient(action['payload'])
                .pipe(
                    map(patient => ({ type: 'Fetch Patient Success',
                        payload: patient})),
                    catchError(() => EMPTY)
                )
            )
        )
    );
    
    addPatient$ = createEffect(
        () => this.actions$.pipe(
            ofType('Add Patient'),
            mergeMap(action => this.patientService.putPatient(action['payload'])
                .pipe(
                    map(patient => ({ type: 'Add Patient Success', 
                                        payload: patient })),
                    catchError(() => EMPTY)
                )
            )
        )
    );
    
    deletePatient$ = createEffect(
        () => this.actions$.pipe(
            ofType('Delete Patient'),
            mergeMap(action => this.patientService.deletePatient(action['payload'])
                .pipe(
                    map(result => ({ type: 'Delete Patient Success' })),
                    catchError(() => EMPTY)
                )
            )
        )
    );

    addBiopsy$ = createEffect(
        () => this.actions$.pipe(
            ofType('Add Biopsy'),
            mergeMap(action => this.biopsyService.putBiopsy(action['payload'])
                .pipe(
                    map(payload => ({ type: 'Add Biopsy Success', 
                                        payload: payload })),
                    catchError(() => EMPTY)
                )
            )
        )
    );

    constructor(
        private actions$: Actions,
        private patientService: BrowserSessionPatientService,
        private biopsyService: BiopsyService
    ) {}
}