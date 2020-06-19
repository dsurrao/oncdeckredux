import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PatientListComponent } from './containers/patient-list/patient-list.component';
import { EditPatientComponent } from './containers/edit-patient/edit-patient.component';
import { ViewPatientComponent } from './containers/view-patient/view-patient.component';
import { ViewBiopsyComponent } from './containers/biopsy/view-biopsy/view-biopsy.component';
import { BiopsyListComponent } from './containers/biopsy/biopsy-list/biopsy-list.component';
import { EditBiopsyReportComponent } from './containers/biopsy/edit-biopsy-report/edit-biopsy-report.component';
import { EditAppointmentComponent } from './containers/appointment/edit-appointment/edit-appointment.component';
import { ViewAppointmentComponent } from './containers/appointment/view-appointment/view-appointment.component';
import { EditProcedureComponent } from './containers/procedure/edit-procedure/edit-procedure.component';
import { ViewProcedureComponent } from './containers/procedure/view-procedure/view-procedure.component';
import { EditSurgicalPathologyComponent } from './containers/surgery/edit-surgical-pathology/edit-surgical-pathology.component';
import { ViewSurgicalPathologyComponent } from './containers/surgery/view-surgical-pathology/view-surgical-pathology.component';

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
  { path: 'patients/:patientId/biopsies/new', 
    component: EditBiopsyReportComponent, pathMatch: 'full'},
  { path: 'patients/:patientId/biopsies/:biopsyId', 
    component: ViewBiopsyComponent, pathMatch: 'full'},
  { path: 'patients/:patientId/biopsies/:biopsyId/edit', 
    component: EditBiopsyReportComponent, pathMatch: 'full'},

  { path: 'patients/:patientId/appointments/new', 
    component: EditAppointmentComponent, pathMatch: 'full'},
  { path: 'patients/:patientId/appointments/:appointmentId', 
    component: ViewAppointmentComponent, pathMatch: 'full'},
  { path: 'patients/:patientId/appointments/:appointmentId/edit', 
    component: EditAppointmentComponent, pathMatch: 'full'},

  { path: 'patients/:patientId/procedures/new', 
    component: EditProcedureComponent, pathMatch: 'full'},
  { path: 'patients/:patientId/procedures/:procedureId', 
    component: ViewProcedureComponent, pathMatch: 'full'},
  { path: 'patients/:patientId/procedures/:procedureId/edit', 
    component: EditProcedureComponent, pathMatch: 'full'},
    
  { path: 'patients/:patientId/surgical_pathologies/new', 
    component: EditSurgicalPathologyComponent, pathMatch: 'full'},
  { path: 'patients/:patientId/surgical_pathologies/:pathologyId', 
    component: ViewSurgicalPathologyComponent, pathMatch: 'full'},
  { path: 'patients/:patientId/surgical_pathologies/:pathologyId/edit', 
    component: EditSurgicalPathologyComponent, pathMatch: 'full'},
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
