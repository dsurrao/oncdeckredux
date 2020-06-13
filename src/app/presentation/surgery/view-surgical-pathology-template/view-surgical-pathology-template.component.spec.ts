import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewSurgicalPathologyTemplateComponent } from './view-surgical-pathology-template.component';

describe('ViewSurgicalPathologyTemplateComponent', () => {
  let component: ViewSurgicalPathologyTemplateComponent;
  let fixture: ComponentFixture<ViewSurgicalPathologyTemplateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewSurgicalPathologyTemplateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewSurgicalPathologyTemplateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
