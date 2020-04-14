import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { MatSliderModule } from '@angular/material/slider';
import { MatListModule } from '@angular/material/list';
import { MatDialogModule } from '@angular/material/dialog';
import { patientReducer } from './patient.reducers';
import { PatientListComponent } from './patient-list/patient-list.component';
import { PatientEffects } from './patient.effects';
import { EditPatientComponent } from './edit-patient/edit-patient.component';
import { EditPatientTemplateComponent } from './edit-patient-template/edit-patient-template.component';

const routes: Routes = [
  {path: '', component: PatientListComponent},
  {path: 'edit_patient', component: EditPatientComponent},
  {path: 'edit_patient/:id', component: EditPatientComponent}
];

@NgModule({
  declarations: [PatientListComponent, EditPatientComponent, EditPatientTemplateComponent],
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
    FormsModule,
    MatSliderModule,
    MatListModule,
    MatDialogModule
  ]
})
export class PatientModule { }
