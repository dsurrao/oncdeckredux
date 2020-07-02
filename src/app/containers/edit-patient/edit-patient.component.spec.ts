import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { EditPatientComponent } from './edit-patient.component';
import { provideMockStore, MockStore } from '@ngrx/store/testing';
import { RouterTestingModule } from '@angular/router/testing';
import * as mockData from 'src/app/store/mock-data';

describe('EditPatientComponent', () => {
  let store: MockStore;
  let component: EditPatientComponent;
  let fixture: ComponentFixture<EditPatientComponent>;
  const initialState = mockData.initialState;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ RouterTestingModule ],
      declarations: [ EditPatientComponent ],
      providers: [
        provideMockStore({ initialState })
      ]
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
});
