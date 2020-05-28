import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PatientSidenavTemplateComponent } from './patient-sidenav-template.component';

describe('PatientSidenavTemplateComponent', () => {
  let component: PatientSidenavTemplateComponent;
  let fixture: ComponentFixture<PatientSidenavTemplateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PatientSidenavTemplateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PatientSidenavTemplateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
