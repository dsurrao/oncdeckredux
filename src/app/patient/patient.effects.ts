import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { EMPTY, Observable } from 'rxjs';
import { map, mergeMap, catchError } from 'rxjs/operators';
import { PatientService } from '../services/patient.service';

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
        private patientService: PatientService
    ) {}
}