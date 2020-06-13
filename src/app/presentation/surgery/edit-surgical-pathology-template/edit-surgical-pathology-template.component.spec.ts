import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditSurgicalPathologyTemplateComponent } from './edit-surgical-pathology-template.component';

describe('EditSurgicalPathologyTemplateComponent', () => {
  let component: EditSurgicalPathologyTemplateComponent;
  let fixture: ComponentFixture<EditSurgicalPathologyTemplateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditSurgicalPathologyTemplateComponent ]
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
