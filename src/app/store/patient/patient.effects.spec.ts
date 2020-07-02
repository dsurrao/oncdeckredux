import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Observable } from 'rxjs';

import { PatientEffects } from './patient.effects';
import { Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';

describe('PatientEffects', () => {
  let actions$: Observable<any>;
  let effects: PatientEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      providers: [
        PatientEffects,
        provideMockActions(() => actions$)
      ]
    });

    effects = TestBed.inject(PatientEffects);
  });

  it('should be created', () => {
    expect(effects).toBeTruthy();
  });
});
