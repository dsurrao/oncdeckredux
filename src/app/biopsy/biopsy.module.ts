import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EditBiopsyComponent } from './containers/edit-biopsy/edit-biopsy.component';
import { ViewBiopsyComponent } from './containers/view-biopsy/view-biopsy.component';
import { ViewBiopsyTemplateComponent } from './views/view-biopsy-template/view-biopsy-template.component';
import { EditBiopsyTemplateComponent } from './views/edit-biopsy-template/edit-biopsy-template.component';



@NgModule({
  declarations: [EditBiopsyComponent, ViewBiopsyComponent, ViewBiopsyTemplateComponent, EditBiopsyTemplateComponent],
  imports: [
    CommonModule
  ]
})
export class BiopsyModule { }
