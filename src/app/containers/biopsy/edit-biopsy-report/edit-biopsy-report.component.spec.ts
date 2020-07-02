import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { EditBiopsyReportComponent } from './edit-biopsy-report.component';
import { provideMockStore, MockStore } from '@ngrx/store/testing';
import { StoreModule } from '@ngrx/store';
import { RouterTestingModule } from '@angular/router/testing';
import * as mockData from 'src/app/store/mock-data';

describe('EditBiopsyReportComponent', () => {
  let store: MockStore;
  let appointmentId: string;
  let component: EditBiopsyReportComponent;
  let fixture: ComponentFixture<EditBiopsyReportComponent>;
  const initialState = mockData.initialState;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ RouterTestingModule ],
      declarations: [ EditBiopsyReportComponent ],
      providers: [
        provideMockStore({ initialState })
      ]
    })
    .compileComponents();

    store = TestBed.inject(MockStore);
    appointmentId = '1';
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditBiopsyReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
