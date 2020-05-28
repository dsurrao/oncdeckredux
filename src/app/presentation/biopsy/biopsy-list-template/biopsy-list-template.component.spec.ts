import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BiopsyListTemplateComponent } from './biopsy-list-template.component';

describe('BiopsyListTemplateComponent', () => {
  let component: BiopsyListTemplateComponent;
  let fixture: ComponentFixture<BiopsyListTemplateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BiopsyListTemplateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BiopsyListTemplateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
