import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewSurgicalPathologyComponent } from './view-surgical-pathology.component';
import { StoreModule } from '@ngrx/store';
import { provideMockStore, MockStore } from '@ngrx/store/testing';
import { RouterTestingModule } from '@angular/router/testing';
import * as mockData from 'src/app/store/mock-data';

describe('ViewSurgicalPathologyComponent', () => {
  let store: MockStore;
  let appointmentId: string;
  let component: ViewSurgicalPathologyComponent;
  let fixture: ComponentFixture<ViewSurgicalPathologyComponent>;
  const initialState = mockData.initialState;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ RouterTestingModule ],
      declarations: [ ViewSurgicalPathologyComponent ],
      providers: [
        provideMockStore({ initialState })
      ]
    })
    .compileComponents();

    appointmentId = '1';
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
