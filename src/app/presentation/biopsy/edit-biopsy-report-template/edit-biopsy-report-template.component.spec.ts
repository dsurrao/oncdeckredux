import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { EditBiopsyReportTemplateComponent } from './edit-biopsy-report-template.component';
import { FormBuilder } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { MatDialogStub } from 'src/app/testing/mat-dialog-stub';

let matDialogStub: MatDialogStub;

describe('EditBiopsyReportTemplateComponent', () => {
  let component: EditBiopsyReportTemplateComponent;
  let fixture: ComponentFixture<EditBiopsyReportTemplateComponent>;

  beforeEach(async(() => {
    matDialogStub = new MatDialogStub();
    
    TestBed.configureTestingModule({
      declarations: [ EditBiopsyReportTemplateComponent ],
      providers: [ FormBuilder, 
        { provide: MatDialog, useValue: matDialogStub } 
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditBiopsyReportTemplateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

