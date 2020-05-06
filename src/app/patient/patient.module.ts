import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { EffectsModule } from '@ngrx/effects';
import { MatListModule } from '@angular/material/list';
import { MatDialogModule } from '@angular/material/dialog';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatTableModule } from '@angular/material/table';
import { MatIconModule } from '@angular/material/icon';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { PatientListComponent } from './containers/patient-list/patient-list.component';
import { PatientEffects } from '../store/patient/patient.effects';
import { EditPatientComponent } from './containers/edit-patient/edit-patient.component';
import { EditPatientTemplateComponent } from './templates/edit-patient-template/edit-patient-template.component';
import { ViewPatientTemplateComponent } from './templates/view-patient-template/view-patient-template.component';
import { ViewPatientComponent } from './containers/view-patient/view-patient.component';
import { SearchCriteriaTemplateComponent } from './templates/search-criteria-template/search-criteria-template.component';
import { SearchCriteriaComponent } from './containers/search-criteria/search-criteria.component';
import { PatientListTemplateComponent } from './templates/patient-list-template/patient-list-template.component';

const routes: Routes = [
  {path: '', component: PatientListComponent},
  {path: ':patientId/view_patient', component: ViewPatientComponent},
  {path: ':patientId/edit_patient', component: EditPatientComponent},
  {path: 'new_patient', component: EditPatientComponent},
  {path: 'search_criteria', component: SearchCriteriaComponent}
];

@NgModule({
  declarations: [PatientListComponent, 
    EditPatientComponent, 
    EditPatientTemplateComponent, 
    ViewPatientTemplateComponent, 
    ViewPatientComponent, 
    SearchCriteriaTemplateComponent, 
    SearchCriteriaComponent, PatientListTemplateComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    EffectsModule.forFeature([PatientEffects]),
    FormsModule,
    MatListModule,
    MatDialogModule,
    MatInputModule,
    MatButtonModule,
    MatTableModule,
    MatIconModule,
    MatCheckboxModule
  ],
  exports: [
    SearchCriteriaComponent
  ]
})
export class PatientModule { }
