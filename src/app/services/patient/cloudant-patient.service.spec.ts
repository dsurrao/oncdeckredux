import { TestBed } from '@angular/core/testing';

import { CloudantPatientService } from './cloudant-patient.service';

describe('CloudantPatientService', () => {
  let service: CloudantPatientService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CloudantPatientService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
