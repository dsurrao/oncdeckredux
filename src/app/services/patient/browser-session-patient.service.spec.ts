import { TestBed } from '@angular/core/testing';

import { BrowserSessionPatientService } from './browser-session-patient.service';

describe('BrowserSessionPatientService', () => {
  let service: BrowserSessionPatientService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BrowserSessionPatientService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
