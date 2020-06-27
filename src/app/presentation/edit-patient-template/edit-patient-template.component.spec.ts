/// todo: Use Angular Material component harness
/// https://material.angular.io/guide/using-component-harnesses
/// https://material.angular.io/components/radio/api#MatRadioButtonHarness

import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { EditPatientTemplateComponent } from './edit-patient-template.component';
import { FormBuilder } from '@angular/forms';
import { GenderEnum } from 'src/app/models/enums/gender.enum';

describe('EditPatientTemplateComponent', () => {
  let component: EditPatientTemplateComponent;
  let fixture: ComponentFixture<EditPatientTemplateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditPatientTemplateComponent ],
      providers: [ FormBuilder ]
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

  it('should have submit button disabled by default', () => {
    const hostElement: HTMLElement = fixture.nativeElement;
    const b: HTMLButtonElement = hostElement.querySelector(
      "button[type='submit']");
    expect(b.disabled).toEqual(true);
  });

  it('should have submit button enabled for valid input', async () => {
    const hostElement: HTMLElement = fixture.nativeElement;

    component.patientForm.controls['firstName'].setValue('dom');
    component.patientForm.controls['lastName'].setValue('test');
    component.patientForm.controls['gender'].setValue(GenderEnum.Female);
    fixture.detectChanges();
    await fixture.whenStable();

    const b: HTMLButtonElement = hostElement.querySelector(
      "button[type='submit']");
    expect(b.disabled).toEqual(false);
  });
});
