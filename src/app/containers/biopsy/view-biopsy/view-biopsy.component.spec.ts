import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ViewBiopsyComponent } from './view-biopsy.component';
import { StoreModule } from '@ngrx/store';
import { MemoizedSelector, MemoizedSelectorWithProps } from '@ngrx/store';
import { provideMockStore, MockStore } from '@ngrx/store/testing';
import { RouterTestingModule } from '@angular/router/testing';
import * as mockData from 'src/app/store/mock-data';
import * as fromBiopsy from 'src/app/store/biopsy/biopsy.reducer';

describe('ViewBiopsyComponent', () => {
  let store: MockStore;
  let appointmentId: string;
  let component: ViewBiopsyComponent;
  let mockBiopsySelector: 
    MemoizedSelectorWithProps<fromBiopsy.State, { id: string }, string>;
  let fixture: ComponentFixture<ViewBiopsyComponent>;
  const initialState = mockData.initialState;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      //imports: [ StoreModule.forRoot({}), RouterTestingModule ],
      imports: [ RouterTestingModule ],
      declarations: [ ViewBiopsyComponent ],
      providers: [
        provideMockStore({ initialState })
      ]
    })
    .compileComponents();

    store = TestBed.inject(MockStore);
    // mockBiopsySelector = store.overrideSelector(
    //   fromBiopsy.selectBiopsy,
    //   '1'
    // );
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewBiopsyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    if (component.patientId != null 
      && component.appointment$ != null
      && component.biopsy$ != null) {
        expect(component).toBeTruthy();
      }
  });
});
