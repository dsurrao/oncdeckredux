import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditAppointmentTemplateComponent } from './edit-appointment-template.component';

describe('EditAppointmentTemplateComponent', () => {
  let component: EditAppointmentTemplateComponent;
  let fixture: ComponentFixture<EditAppointmentTemplateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditAppointmentTemplateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditAppointmentTemplateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
