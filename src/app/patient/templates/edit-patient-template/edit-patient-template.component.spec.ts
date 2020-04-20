import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditPatientTemplateComponent } from './edit-patient-template.component';

describe('EditPatientTemplateComponent', () => {
  let component: EditPatientTemplateComponent;
  let fixture: ComponentFixture<EditPatientTemplateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditPatientTemplateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditPatientTemplateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
