import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EditBiopsyComponent } from './containers/edit-biopsy/edit-biopsy.component';
import { ViewBiopsyComponent } from './containers/view-biopsy/view-biopsy.component';
import { ViewBiopsyTemplateComponent } from './views/view-biopsy-template/view-biopsy-template.component';
import { EditBiopsyTemplateComponent } from './views/edit-biopsy-template/edit-biopsy-template.component';
import { Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';

const routes: Routes = [
  {path: 'view_biopsy/:biopsyId', component: ViewBiopsyComponent},
  {path: 'edit_biopsy', component: EditBiopsyComponent},
  {path: 'edit_biopsy/:biopsyId', component: EditBiopsyComponent}
];

@NgModule({
  declarations: [EditBiopsyComponent, 
    ViewBiopsyComponent, 
    ViewBiopsyTemplateComponent, 
    EditBiopsyTemplateComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ]
})
export class BiopsyModule { }
