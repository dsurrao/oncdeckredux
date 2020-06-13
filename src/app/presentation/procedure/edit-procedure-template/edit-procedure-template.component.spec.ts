import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditProcedureTemplateComponent } from './edit-procedure-template.component';

describe('EditProcedureTemplateComponent', () => {
  let component: EditProcedureTemplateComponent;
  let fixture: ComponentFixture<EditProcedureTemplateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditProcedureTemplateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditProcedureTemplateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
