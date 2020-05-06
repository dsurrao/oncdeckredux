import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable, of } from 'rxjs';
import { Biopsy } from 'src/app/interfaces/biopsy';
import * as biopsyActions from 'src/app/store/biopsy/biopsy.actions';

@Component({
  selector: 'app-edit-biopsy',
  templateUrl: './edit-biopsy.component.html',
  styleUrls: ['./edit-biopsy.component.css']
})
export class EditBiopsyComponent implements OnInit {
  biopsy$: Observable<Biopsy>;
  biopsyId: string;
  patientId: string;

  constructor(private store: Store,
    private router: Router,
    private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.biopsyId = this.activatedRoute.snapshot.paramMap.get('biopsyId');
    this.patientId = this.activatedRoute.snapshot.paramMap.get('patientId');

    if (this.biopsyId == null) {
      this.biopsy$ = of(this.createNewBiopsy());
    }
  }

  save(biopsy: Biopsy) {
    // replace with addBiopsy
    this.store.dispatch(biopsyActions.addBiopsy(
      {payload: {biopsy: biopsy, patientId: this.patientId}}));
    this.router.navigateByUrl('/patient/' + this.patientId + '/view_patient');
  }

  cancel() {
    this.router.navigateByUrl('/patient/' + this.patientId + '/biopsy');
  }

  createNewBiopsy(): Biopsy {
    return {
      id: null,
      dateScheduled: null,
      facilityName: '',
      providerName: ''
    };
  }
}
