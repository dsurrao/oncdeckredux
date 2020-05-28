import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewBiopsyTemplateComponent } from './view-biopsy-template.component';

describe('ViewBiopsyTemplateComponent', () => {
  let component: ViewBiopsyTemplateComponent;
  let fixture: ComponentFixture<ViewBiopsyTemplateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewBiopsyTemplateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewBiopsyTemplateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
