import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditSurgicalPathologyTemplateComponent } from './edit-surgical-pathology-template.component';
import { FormBuilder } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { MatDialogStub } from 'src/app/testing/mat-dialog-stub';

let matDialogStub: MatDialogStub;

describe('EditSurgicalPathologyTemplateComponent', () => {
  let component: EditSurgicalPathologyTemplateComponent;
  let fixture: ComponentFixture<EditSurgicalPathologyTemplateComponent>;

  beforeEach(async(() => {
    matDialogStub = new MatDialogStub();

    TestBed.configureTestingModule({
      declarations: [ EditSurgicalPathologyTemplateComponent ],
      providers: [ FormBuilder, 
        { provide: MatDialog, useValue: matDialogStub } 
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditSurgicalPathologyTemplateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
