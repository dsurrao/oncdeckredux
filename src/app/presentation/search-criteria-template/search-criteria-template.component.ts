import { Component, Input, Output, EventEmitter, OnChanges } from '@angular/core';
import { PatientSearchCriteria } from 'src/app/models/common/patient-search-criteria.model';

@Component({
  selector: 'app-search-criteria-template',
  templateUrl: './search-criteria-template.component.html',
  styleUrls: ['./search-criteria-template.component.css']
})
export class SearchCriteriaTemplateComponent {
  @Input()
  searchCriteria: PatientSearchCriteria;

  @Output()
  onSaveSearchCriteria = new EventEmitter<PatientSearchCriteria>();

  scheduledAppointment: boolean;

  constructor() { 
    this.scheduledAppointment = false;
  }

  save(): void {
    this.searchCriteria = {
      appointment: {
        isScheduled: this.scheduledAppointment
      }
    };

    this.onSaveSearchCriteria.emit(this.searchCriteria);
  }
}