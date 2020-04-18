import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewBiopsyComponent } from './view-biopsy.component';

describe('ViewBiopsyComponent', () => {
  let component: ViewBiopsyComponent;
  let fixture: ComponentFixture<ViewBiopsyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewBiopsyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewBiopsyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
