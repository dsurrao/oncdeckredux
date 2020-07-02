import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditSurgicalPathologyComponent } from './edit-surgical-pathology.component';
import { Store, StoreModule } from '@ngrx/store';
import { RouterTestingModule } from '@angular/router/testing';

describe('EditSurgicalPathologyComponent', () => {
  let component: EditSurgicalPathologyComponent;
  let fixture: ComponentFixture<EditSurgicalPathologyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ StoreModule.forRoot({}), RouterTestingModule ],
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
