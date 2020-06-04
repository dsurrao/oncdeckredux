import { Injectable } from '@angular/core';
import { Actions, ofType, createEffect } from '@ngrx/effects';
import * as patientActions from './patient.actions';
import * as biopsyActions from '../biopsy/biopsy.actions';
import { Router } from '@angular/router';
import { tap } from 'rxjs/operators';

@Injectable()
export class PatientEffects {

  /// navigate back to patient view after update
  upsertPatient$ = createEffect(() => this.actions$.pipe(
      ofType(patientActions.upsertPatient),
      tap((action) => this.router.navigateByUrl('/patients/' 
        + action.patient.id))
    ),
    { dispatch: false }
  );

  upsertBiopsy$ = createEffect(() => this.actions$.pipe(
      ofType(biopsyActions.upsertBiopsy),
      tap((action) => this.router.navigateByUrl('/patients/' 
        + action.patientId + '/biopsies/' + action.biopsy.id))
    ),
    { dispatch: false }
  );

  constructor(private actions$: Actions,
    private router: Router) {}

}
