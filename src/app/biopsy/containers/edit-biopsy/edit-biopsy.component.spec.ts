import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditBiopsyComponent } from './edit-biopsy.component';

describe('EditBiopsyComponent', () => {
  let component: EditBiopsyComponent;
  let fixture: ComponentFixture<EditBiopsyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditBiopsyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditBiopsyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
