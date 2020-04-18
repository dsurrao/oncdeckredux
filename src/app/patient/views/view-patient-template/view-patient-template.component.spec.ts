import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewPatientTemplateComponent } from './view-patient-template.component';

describe('ViewPatientTemplateComponent', () => {
  let component: ViewPatientTemplateComponent;
  let fixture: ComponentFixture<ViewPatientTemplateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewPatientTemplateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewPatientTemplateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
