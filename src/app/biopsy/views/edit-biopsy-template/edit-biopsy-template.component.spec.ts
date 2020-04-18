import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditBiopsyTemplateComponent } from './edit-biopsy-template.component';

describe('EditBiopsyTemplateComponent', () => {
  let component: EditBiopsyTemplateComponent;
  let fixture: ComponentFixture<EditBiopsyTemplateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditBiopsyTemplateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditBiopsyTemplateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
