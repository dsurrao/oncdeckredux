import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewAppointmentTemplateComponent } from './view-appointment-template.component';

describe('ViewAppointmentTemplateComponent', () => {
  let component: ViewAppointmentTemplateComponent;
  let fixture: ComponentFixture<ViewAppointmentTemplateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewAppointmentTemplateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewAppointmentTemplateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
