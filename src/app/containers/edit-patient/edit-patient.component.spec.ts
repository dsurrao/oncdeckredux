import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { EditPatientComponent } from './edit-patient.component';
import { provideMockStore, MockStore } from '@ngrx/store/testing';
import { RouterTestingModule } from '@angular/router/testing';
import * as mockData from 'src/app/store/mock-data';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { ActivatedRouteStub } from 'src/app/testing/activated-route-stub';
import { ActivatedRoute } from '@angular/router';

let activatedRoute: ActivatedRouteStub;

describe('EditPatientComponent', () => {
  let store: MockStore;
  let component: EditPatientComponent;
  let fixture: ComponentFixture<EditPatientComponent>;
  const initialState = mockData.initialState;

  beforeEach(() => {
    activatedRoute = new ActivatedRouteStub();
    activatedRoute.setParamMap({ patientId: '15' });
  });

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ RouterTestingModule.withRoutes([
        { path: 'patients/:patientId/edit', component: EditPatientComponent}
      ])],
      declarations: [ EditPatientComponent ],
      providers: [
        provideMockStore({ initialState }),
        { provide: ActivatedRoute, useValue: activatedRoute }
      ],
      schemas: [ NO_ERRORS_SCHEMA ]
    })
    .compileComponents();

    store = TestBed.inject(MockStore);    
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditPatientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should set patientId member to value of patientId URL param', () => {
    expect(component.patientId).toBe('15');
  });
});
