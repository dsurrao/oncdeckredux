import { Injectable } from '@angular/core';
import { Actions, ofType, createEffect } from '@ngrx/effects';
import { Router } from '@angular/router';
import { tap } from 'rxjs/operators';
import * as patientActions from './patient.actions';
import * as biopsyActions from '../biopsy/biopsy.actions';
import * as appointmentActions from '../appointment/appointment.actions';
import * as surgicalPathologyActions from 'src/app/store/surgery/surgical-pathology.actions';

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

  upsertAppointment$ = createEffect(() => this.actions$.pipe(
      ofType(appointmentActions.upsertAppointment),
      tap((action) => this.router.navigateByUrl('/patients/' 
        + action.patientId))
    ),
    { dispatch: false }
  );

  upsertBiopsy$ = createEffect(() => this.actions$.pipe(
    ofType(biopsyActions.upsertBiopsy),
    tap((action) => this.router.navigateByUrl('/patients/' 
      + action.patientId))
    ),
    { dispatch: false}
  );

  upsertSurgicalPathology$ = createEffect(() => this.actions$.pipe(
    ofType(surgicalPathologyActions.upsertSurgicalPathology),
    tap((action) => this.router.navigateByUrl('/patients/' 
      + action.patientId))
    ),
    { dispatch: false}
  );

  constructor(private actions$: Actions,
    private router: Router) {}
}
