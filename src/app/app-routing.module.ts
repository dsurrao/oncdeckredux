import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PatientListComponent } from './containers/patient-list/patient-list.component';
import { EditPatientComponent } from './containers/edit-patient/edit-patient.component';
import { ViewPatientComponent } from './containers/view-patient/view-patient.component';
import { EditBiopsyComponent } from './containers/biopsy/edit-biopsy/edit-biopsy.component';
import { ViewBiopsyComponent } from './containers/biopsy/view-biopsy/view-biopsy.component';
import { BiopsyListComponent } from './containers/biopsy/biopsy-list/biopsy-list.component';

const routes: Routes = [
  { path: 'patients', component: PatientListComponent },
  { path: '', redirectTo: 'patients', pathMatch: 'full' },
  
  { path: 'patients/new', component: EditPatientComponent, 
    pathMatch: 'full'},
  { path: 'patients/:patientId', component: ViewPatientComponent, 
    pathMatch: 'full' },
  { path: 'patients/:patientId/edit', component: EditPatientComponent, 
    pathMatch: 'full'},

  { path: 'patients/:patientId/biopsies', component: BiopsyListComponent, 
    pathMatch: 'full'},
  { path: 'patients/:patientId/biopsies/new', component: EditBiopsyComponent, 
    pathMatch: 'full'},
  { path: 'patients/:patientId/biopsies/:biopsyId', component: ViewBiopsyComponent, 
    pathMatch: 'full'},
  { path: 'patients/:patientId/biopsies/:biopsyId/edit', component: EditBiopsyComponent, 
    pathMatch: 'full'}

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }