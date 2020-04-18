import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { EffectsModule } from '@ngrx/effects';
import { MatSliderModule } from '@angular/material/slider';
import { MatListModule } from '@angular/material/list';
import { MatDialogModule } from '@angular/material/dialog';
import { PatientListComponent } from './containers/patient-list/patient-list.component';
import { PatientEffects } from './patient.effects';
import { EditPatientComponent } from './containers/edit-patient/edit-patient.component';
import { EditPatientTemplateComponent } from './views/edit-patient-template/edit-patient-template.component';
import { ViewPatientTemplateComponent } from './views/view-patient-template/view-patient-template.component';
import { ViewTemplateComponent } from './containers/view-template/view-template.component';

const routes: Routes = [
  {path: '', component: PatientListComponent},
  {path: 'edit_patient', component: EditPatientComponent},
  {path: 'edit_patient/:id', component: EditPatientComponent}
];

@NgModule({
  declarations: [PatientListComponent, 
    EditPatientComponent, 
    EditPatientTemplateComponent, 
    ViewPatientTemplateComponent, 
    ViewTemplateComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    EffectsModule.forRoot([PatientEffects]),
    FormsModule,
    MatSliderModule,
    MatListModule,
    MatDialogModule
  ]
})
export class PatientModule { }
