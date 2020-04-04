import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { patientReducer } from './patient.reducers';
import { PatientListComponent } from './patient-list/patient-list.component';
import { PatientEffects } from './patient.effects';

const routes: Routes = [
  {path: '', component: PatientListComponent}
];

@NgModule({
  declarations: [PatientListComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    StoreModule.forRoot({ patients: patientReducer }),
    // Instrumentation must be imported after importing StoreModule (config is optional)
    StoreDevtoolsModule.instrument({
      maxAge: 25, // Retains last 25 states
      //logOnly: environment.production, // Restrict extension to log-only mode
    }),
    EffectsModule.forRoot([PatientEffects]),
    FormsModule
  ]
})
export class PatientModule { }
