import { TestBed } from '@angular/core/testing';

import { Patient2Service } from './patient2.service';

describe('Patient2Service', () => {
  let service: Patient2Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Patient2Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
