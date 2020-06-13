import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditSurgicalPathologyComponent } from './edit-surgical-pathology.component';

describe('EditSurgicalPathologyComponent', () => {
  let component: EditSurgicalPathologyComponent;
  let fixture: ComponentFixture<EditSurgicalPathologyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditSurgicalPathologyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditSurgicalPathologyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
