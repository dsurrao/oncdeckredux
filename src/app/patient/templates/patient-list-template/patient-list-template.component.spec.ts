import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PatientListTemplateComponent } from './patient-list-template.component';

describe('PatientListTemplateComponent', () => {
  let component: PatientListTemplateComponent;
  let fixture: ComponentFixture<PatientListTemplateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PatientListTemplateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PatientListTemplateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
