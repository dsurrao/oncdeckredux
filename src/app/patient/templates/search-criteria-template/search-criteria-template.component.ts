import { Component, Input, Output, EventEmitter, OnChanges } from '@angular/core';
import { PatientSearchCriteria } from 'src/app/interfaces/patient-search-criteria';

@Component({
  selector: 'app-search-criteria-template',
  templateUrl: './search-criteria-template.component.html',
  styleUrls: ['./search-criteria-template.component.css']
})
export class SearchCriteriaTemplateComponent implements OnChanges {
  @Input()
  searchCriteria: PatientSearchCriteria;

  @Output()
  onSave = new EventEmitter<PatientSearchCriteria>();

  scheduledBiopsiesOnly: boolean;

  constructor() { }

  ngOnChanges(): void {
    if (this.searchCriteria != null 
        && this.searchCriteria.biopsies != null) {
      this.scheduledBiopsiesOnly = this.searchCriteria.biopsies.isScheduled;
    }
  }

  save(): void {
    this.searchCriteria = {
      biopsies: {
        isScheduled: this.scheduledBiopsiesOnly
      }
    };

    this.onSave.emit(this.searchCriteria);
  }
}