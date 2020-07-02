import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewAppointmentComponent } from './view-appointment.component';
import { provideMockStore, MockStore } from '@ngrx/store/testing';
import { StoreModule } from '@ngrx/store';
import { RouterTestingModule } from '@angular/router/testing';
import * as mockData from 'src/app/store/mock-data';

describe('ViewAppointmnentComponent', () => {
  let store: MockStore;
  let appointmentId: string;
  let component: ViewAppointmentComponent;
  let fixture: ComponentFixture<ViewAppointmentComponent>;
  const initialState = mockData.initialState;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      // imports: [ StoreModule.forRoot({}), RouterTestingModule ],
      imports: [ RouterTestingModule ],
      declarations: [ ViewAppointmentComponent ],
      providers: [
        provideMockStore({ initialState })
      ]
    })
    .compileComponents();

    store = TestBed.inject(MockStore);
    appointmentId = '1';
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewAppointmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
