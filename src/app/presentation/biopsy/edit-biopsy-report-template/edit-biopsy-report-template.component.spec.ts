import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditBiopsyReportTemplateComponent } from './edit-biopsy-report-template.component';

describe('EditBiopsyReportTemplateComponent', () => {
  let component: EditBiopsyReportTemplateComponent;
  let fixture: ComponentFixture<EditBiopsyReportTemplateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditBiopsyReportTemplateComponent ]
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
