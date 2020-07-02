import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewBiopsyTemplateComponent } from './view-biopsy-template.component';
import { FormBuilder } from '@angular/forms';

describe('ViewBiopsyTemplateComponent', () => {
  let component: ViewBiopsyTemplateComponent;
  let fixture: ComponentFixture<ViewBiopsyTemplateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewBiopsyTemplateComponent ],
      providers: [ FormBuilder ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewBiopsyTemplateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    if (component.patientId != undefined 
      && component.biopsy != undefined
      && component.biopsy.appointmentId != undefined) {
      expect(component).toBeTruthy();
    }
  });
});
