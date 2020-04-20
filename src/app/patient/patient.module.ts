import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { EffectsModule } from '@ngrx/effects';
import { MatSliderModule } from '@angular/material/slider';
import { MatListModule } from '@angular/material/list';
import { MatDialogModule } from '@angular/material/dialog';
import { MatInputModule } from '@angular/material/input';
import { MatButton, MatButtonModule } from '@angular/material/button';
import { PatientListComponent } from './containers/patient-list/patient-list.component';
import { PatientEffects } from '../store/patient/patient.effects';
import { EditPatientComponent } from './containers/edit-patient/edit-patient.component';
import { EditPatientTemplateComponent } from './templates/edit-patient-template/edit-patient-template.component';
import { ViewPatientTemplateComponent } from './templates/view-patient-template/view-patient-template.component';

const routes: Routes = [
  {path: '', component: PatientListComponent},
  {path: 'edit_patient', component: EditPatientComponent},
  {path: 'edit_patient/:id', component: EditPatientComponent}
];

@NgModule({
  declarations: [PatientListComponent, 
    EditPatientComponent, 
    EditPatientTemplateComponent, 
    ViewPatientTemplateComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    EffectsModule.forFeature([PatientEffects]),
    FormsModule,
    MatSliderModule,
    MatListModule,
    MatDialogModule,
    MatInputModule,
    MatButtonModule
  ]
})
export class PatientModule { }
