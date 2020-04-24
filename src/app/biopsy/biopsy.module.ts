import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EditBiopsyComponent } from './containers/edit-biopsy/edit-biopsy.component';
import { ViewBiopsyComponent } from './containers/view-biopsy/view-biopsy.component';
import { ViewBiopsyTemplateComponent } from './views/view-biopsy-template/view-biopsy-template.component';
import { EditBiopsyTemplateComponent } from './views/edit-biopsy-template/edit-biopsy-template.component';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { BiopsyListComponent } from './containers/biopsy-list/biopsy-list.component';
import { BiopsyListTemplateComponent } from './views/biopsy-list-template/biopsy-list-template.component';
import { MatTableModule } from '@angular/material/table';
import { MatIconModule } from '@angular/material/icon';

const routes: Routes = [
  {path: '', component: BiopsyListComponent},
  {path: 'edit_biopsy', component: EditBiopsyComponent},
  {path: 'edit_biopsy/:biopsyId', component: EditBiopsyComponent},
  {path: 'view_biopsy/:biopsyId', component: ViewBiopsyComponent}
];

@NgModule({
  declarations: [EditBiopsyComponent, 
    ViewBiopsyComponent, 
    ViewBiopsyTemplateComponent, 
    EditBiopsyTemplateComponent, 
    BiopsyListComponent, BiopsyListTemplateComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(routes),
    MatInputModule,
    MatButtonModule,
    MatTableModule,
    MatIconModule
  ]
})
export class BiopsyModule { }
