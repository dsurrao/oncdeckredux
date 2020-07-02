import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ViewPatientComponent } from './view-patient.component';
import { provideMockStore, MockStore } from '@ngrx/store/testing';
import { StoreModule } from '@ngrx/store';
import { RouterTestingModule } from '@angular/router/testing';
import * as mockData from 'src/app/store/mock-data';

describe('ViewPatientComponent', () => {
  let store: MockStore;
  let component: ViewPatientComponent;
  let fixture: ComponentFixture<ViewPatientComponent>;
  const initialState = mockData.initialState;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ RouterTestingModule.withRoutes(
        [{path: 'patients/:patientId', component: ViewPatientComponent, 
          pathMatch: 'full'}]) 
      ],
      declarations: [ ViewPatientComponent ],
      providers: [
        provideMockStore({ initialState })
      ]
    })
    .compileComponents();

    store = TestBed.inject(MockStore);
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewPatientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });


});
