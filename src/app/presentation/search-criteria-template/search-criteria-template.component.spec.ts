import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchCriteriaTemplateComponent } from './search-criteria-template.component';
import { PatientSearchCriteria } from 'src/app/models/common/patient-search-criteria.model';

describe('SearchCriteriaTemplateComponent', () => {
  let component: SearchCriteriaTemplateComponent;
  let fixture: ComponentFixture<SearchCriteriaTemplateComponent>;
  let searchCriteria: PatientSearchCriteria = {};

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchCriteriaTemplateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchCriteriaTemplateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
