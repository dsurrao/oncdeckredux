import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { EMPTY } from 'rxjs';
import { map, mergeMap, catchError } from 'rxjs/operators';
import { Patient2Service } from '../services/patient2.service';

@Injectable()
export class PatientEffects {

    loadPatients$ = createEffect(
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

    constructor(
        private actions$: Actions,
        private patientService: Patient2Service
    ) {}
}