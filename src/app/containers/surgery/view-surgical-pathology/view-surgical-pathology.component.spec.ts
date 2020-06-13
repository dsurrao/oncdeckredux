import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewSurgicalPathologyComponent } from './view-surgical-pathology.component';

describe('ViewSurgicalPathologyComponent', () => {
  let component: ViewSurgicalPathologyComponent;
  let fixture: ComponentFixture<ViewSurgicalPathologyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewSurgicalPathologyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewSurgicalPathologyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
