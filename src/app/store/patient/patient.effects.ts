import { Injectable } from '@angular/core';
import { Actions, ofType, createEffect } from '@ngrx/effects';
import { Router } from '@angular/router';
import { tap, map, catchError, withLatestFrom, mergeMap, concatMap } from 'rxjs/operators';
import * as patientActions from './patient.actions';
import * as biopsyActions from '../biopsy/biopsy.actions';
import * as appointmentActions from '../appointment/appointment.actions';
import * as procedureActions from '../procedure/procedure.actions';
import * as surgicalPathologyActions from 'src/app/store/surgery/surgical-pathology.actions';
import * as fromProcedure from 'src/app/store/procedure/procedure.reducer';
import { EMPTY, of } from 'rxjs';
import { ProcedureStatusEnum } from 'src/app/models/enums/procedure-status.enum';
import { v4 as uuidv4 } from 'uuid';
import { Store, select } from '@ngrx/store';

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
      + action.patientId))
    ),
    { dispatch: false}
  );

  // upsertAppointment$ = createEffect(() => this.actions$.pipe(
  //   ofType(appointmentActions.upsertAppointment),
  //   withLatestFrom(this.store.select(fromProcedure.selectProcedures)),
  //   map(([action, procedures]) => {
  //     let procedure: Procedure = procedures.find(
  //       p => p.appointmentId == action.appointment.id);
  //     if (procedure == null) {
  //       // update the procedure associated with the appointment
  //       procedure = {id: uuidv4(), 
  //         appointmentId: action.appointment.id, 
  //         status: ProcedureStatusEnum.NotDone, 
  //         statusReason: null};
  //     }
  //     return procedureActions.upsertProcedure({ patientId: action.patientId, 
  //       procedure: procedure });
  //   }))
  // );

  upsertAppointment$ = createEffect(() => this.actions$.pipe(
    ofType(appointmentActions.upsertAppointment),
    concatMap(action => of(action).pipe(
      withLatestFrom(this.store.pipe(select(
        fromProcedure.selectProcedureByAppointment, { id: action.appointment.id })))
    )),
    map(([action, procedure]) => {
      if (procedure == null) {
        // update the procedure associated with the appointment
        procedure = {id: uuidv4(), 
          appointmentId: action.appointment.id, 
          status: ProcedureStatusEnum.NotDone, 
          statusReason: null};
      }
      return procedureActions.upsertProcedure({ patientId: action.patientId, 
        procedure: procedure });
    })
  ));

  upsertProcedure$ = createEffect(() => this.actions$.pipe(
    ofType(procedureActions.upsertProcedure),
    tap((action) => this.router.navigateByUrl('/patients/'
      + action.patientId))
    ),
    { dispatch: false }
  );

  upsertSurgicalPathology$ = createEffect(() => this.actions$.pipe(
    ofType(surgicalPathologyActions.upsertSurgicalPathology),
    tap((action) => this.router.navigateByUrl('/patients/' 
      + action.patientId))
    ),
    { dispatch: false}
  );

  constructor(private actions$: Actions,
    private store: Store,
    private router: Router) {}

}
