import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewProcedureTemplateComponent } from './view-procedure-template.component';

describe('ViewProcedureTemplateComponent', () => {
  let component: ViewProcedureTemplateComponent;
  let fixture: ComponentFixture<ViewProcedureTemplateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewProcedureTemplateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewProcedureTemplateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
