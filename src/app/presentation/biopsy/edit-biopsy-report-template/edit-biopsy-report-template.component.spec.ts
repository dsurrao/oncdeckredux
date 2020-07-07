import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditBiopsyReportTemplateComponent } from './edit-biopsy-report-template.component';
import { Store } from '@ngrx/store';
import { FormBuilder } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Overlay } from '@angular/cdk/overlay';

describe('EditBiopsyReportTemplateComponent', () => {
  let component: EditBiopsyReportTemplateComponent;
  let fixture: ComponentFixture<EditBiopsyReportTemplateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditBiopsyReportTemplateComponent ],
      providers: [ FormBuilder ]
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
