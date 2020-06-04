import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditBiopsyReportComponent } from './edit-biopsy-report.component';

describe('EditBiopsyReportComponent', () => {
  let component: EditBiopsyReportComponent;
  let fixture: ComponentFixture<EditBiopsyReportComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditBiopsyReportComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditBiopsyReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
