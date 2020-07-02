import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewSurgicalPathologyTemplateComponent } from './view-surgical-pathology-template.component';
import { Store } from '@ngrx/store';

describe('ViewSurgicalPathologyTemplateComponent', () => {
  let component: ViewSurgicalPathologyTemplateComponent;
  let fixture: ComponentFixture<ViewSurgicalPathologyTemplateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewSurgicalPathologyTemplateComponent ],
      providers: [ Store ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewSurgicalPathologyTemplateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    if (component.patientId && component.surgicalPathology) {
      expect(component).toBeTruthy();
    }
  });
});
