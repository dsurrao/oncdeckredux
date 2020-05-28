import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { v4 as uuidv4 } from 'uuid';
import { Biopsy } from 'src/app/models/biopsy.model';
import * as biopsyActions from 'src/app/store/biopsy/biopsy.actions';
import * as fromBiopsy from 'src/app/store/biopsy/biopsy.reducer';

@Component({
  selector: 'app-edit-biopsy',
  templateUrl: './edit-biopsy.component.html',
  styleUrls: ['./edit-biopsy.component.css']
})
export class EditBiopsyComponent implements OnInit {
  biopsy$: Observable<Biopsy>;
  patientId: string;

  constructor(private store: Store,
    private router: Router,
    private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.patientId = this.activatedRoute.snapshot.paramMap.get('patientId');
    let biopsyId = this.activatedRoute.snapshot.paramMap.get('biopsyId');
    if (biopsyId != null) {
      this.biopsy$ = this.store.select(fromBiopsy.selectBiopsy, { id: biopsyId });
    }
  }

  save(biopsy: Biopsy) {
    if (biopsy.id == null || biopsy.id == '') {
      biopsy.id = uuidv4();
    }
    this.store.dispatch(biopsyActions.upsertBiopsy(
      {patientId: this.patientId, biopsy: biopsy}));
  }

  delete(biopsyId: string) {
    this.store.dispatch(biopsyActions.deleteBiopsy({ id: biopsyId }));
  }

  cancel() {
    this.router.navigateByUrl('/patients/' + this.patientId + '/biopsies');
  }
}
