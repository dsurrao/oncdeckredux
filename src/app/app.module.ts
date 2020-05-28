import { BrowserModule, Title } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { MatListModule } from '@angular/material/list';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import { reducers, metaReducers } from './store';
import { StoreRouterConnectingModule } from '@ngrx/router-store';
import { CommonModule } from '@angular/common';
import { PatientListComponent } from './containers/patient-list/patient-list.component';
import { ViewPatientComponent } from './containers/view-patient/view-patient.component';
import { EditPatientComponent } from './containers/edit-patient/edit-patient.component';
import { ViewPatientTemplateComponent } from './presentation/view-patient-template/view-patient-template.component';
import { EditPatientTemplateComponent } from './presentation/edit-patient-template/edit-patient-template.component';
import { FormsModule } from '@angular/forms';
import { PatientListTemplateComponent } from './presentation/patient-list-template/patient-list-template.component';
import { ToolbarComponent } from './containers/toolbar/toolbar.component';
import { ToolbarTemplateComponent } from './presentation/toolbar-template/toolbar-template.component';
import { PatientSidenavTemplateComponent } from './presentation/patient-sidenav-template/patient-sidenav-template.component';
import { SearchCriteriaTemplateComponent } from './presentation/search-criteria-template/search-criteria-template.component';
import { ViewBiopsyComponent } from './containers/biopsy/view-biopsy/view-biopsy.component';
import { ViewBiopsyTemplateComponent } from './presentation/biopsy/view-biopsy-template/view-biopsy-template.component';
import { EditBiopsyComponent } from './containers/biopsy/edit-biopsy/edit-biopsy.component';
import { EditBiopsyTemplateComponent } from './presentation/biopsy/edit-biopsy-template/edit-biopsy-template.component';
import { EffectsModule } from '@ngrx/effects';
import { PatientEffects } from './store/patient/patient.effects';

@NgModule({
  declarations: [
    AppComponent,
    PatientListComponent,
    PatientListTemplateComponent,
    ViewPatientComponent,
    ViewPatientTemplateComponent,
    EditPatientComponent,
    EditPatientTemplateComponent,
    ToolbarComponent,
    ToolbarTemplateComponent,
    PatientSidenavTemplateComponent,
    SearchCriteriaTemplateComponent,
    ViewBiopsyComponent,
    ViewBiopsyTemplateComponent,
    EditBiopsyComponent,
    EditBiopsyTemplateComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatListModule,
    MatSidenavModule,
    MatToolbarModule,
    MatCheckboxModule,
    StoreModule.forRoot(reducers, {
      metaReducers, 
      runtimeChecks: {
        strictStateImmutability: true,
        strictActionImmutability: true,
      }
    }),
    !environment.production ? StoreDevtoolsModule.instrument() : [],
    AppRoutingModule,
    StoreRouterConnectingModule.forRoot(),
    EffectsModule.forRoot([PatientEffects])
  ],
  providers: [
    Title
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
