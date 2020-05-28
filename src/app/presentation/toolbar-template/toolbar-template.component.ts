import { ChangeDetectorRef, Component, Input, Output, EventEmitter, 
  OnChanges, OnDestroy } from '@angular/core';
import { MediaMatcher } from '@angular/cdk/layout';
import { PatientSearchCriteria } from 'src/app/models/patient-search-criteria.model';
import { Patient } from 'src/app/models/patient.model';

@Component({
  selector: 'app-toolbar-template',
  templateUrl: './toolbar-template.component.html',
  styleUrls: ['./toolbar-template.component.css']
})
export class ToolbarTemplateComponent implements OnChanges, OnDestroy {
  subTitle: string;

  mobileQuery: MediaQueryList;
  private _mobileQueryListener: () => void;

  @Input()
  appTitle: string;

  @Input()
  selectedPatient: Patient;

  @Input()
  searchCriteria: PatientSearchCriteria;

  @Output()
  onSaveSearchCriteria = new EventEmitter<PatientSearchCriteria>();

  constructor(changeDetectorRef: ChangeDetectorRef, media: MediaMatcher) {
    this.mobileQuery = media.matchMedia('(max-width: 600px)');
    this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addListener(this._mobileQueryListener);

    this.subTitle = '';
  }

  ngOnDestroy(): void {
    this.mobileQuery.removeListener(this._mobileQueryListener);
  }

  ngOnChanges(): void {
    if (this.selectedPatient != null) {
      this.subTitle = this.selectedPatient.firstName 
        + ' '
        + this.selectedPatient.lastName;
    }
    else {
      this.subTitle = '';
    }
  }

  saveSearchCriteria(searchCriteria: PatientSearchCriteria): void {
    this.onSaveSearchCriteria.emit(searchCriteria);
  }
}
