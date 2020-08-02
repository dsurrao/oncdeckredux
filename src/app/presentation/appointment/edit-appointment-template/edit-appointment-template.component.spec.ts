import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditAppointmentTemplateComponent } from './edit-appointment-template.component';
import { FormBuilder } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { MatDialogStub } from 'src/app/testing/mat-dialog-stub';

let matDialogStub: MatDialogStub;

describe('EditAppointmentTemplateComponent', () => {
  let component: EditAppointmentTemplateComponent;
  let fixture: ComponentFixture<EditAppointmentTemplateComponent>;

  beforeEach(async(() => {
    matDialogStub = new MatDialogStub();

    TestBed.configureTestingModule({
      declarations: [ EditAppointmentTemplateComponent ],
      providers: [ FormBuilder, 
        { provide: MatDialog, useValue: matDialogStub } 
      ]
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
