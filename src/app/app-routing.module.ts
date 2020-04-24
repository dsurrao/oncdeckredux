import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {path: '',  loadChildren: () => import('./patient/patient.module').then(
    mod => mod.PatientModule)},
  {path: 'patient',  loadChildren: () => import('./patient/patient.module').then(
      mod => mod.PatientModule)},
  {path: 'patient/:patientId/biopsy',  
    loadChildren: () => import('./biopsy/biopsy.module').then(
      mod => mod.BiopsyModule)}
];

// todo: will this work?
// { path: '',   redirectTo: '/heroes', pathMatch: 'full' },

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
