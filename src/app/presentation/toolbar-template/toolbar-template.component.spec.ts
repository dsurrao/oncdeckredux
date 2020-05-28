import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ToolbarTemplateComponent } from './toolbar-template.component';

describe('ToolbarTemplateComponent', () => {
  let component: ToolbarTemplateComponent;
  let fixture: ComponentFixture<ToolbarTemplateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ToolbarTemplateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ToolbarTemplateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
