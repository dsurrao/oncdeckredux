import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import {v4 as uuidv4 } from 'uuid';
import * as fromBiopsy from 'src/app/store/biopsy/biopsy.reducer';
import * as biopsyActions from 'src/app/store/biopsy/biopsy.actions';
import { Biopsy } from 'src/app/models/biopsy/biopsy.model';

@Component({
  selector: 'app-edit-biopsy-report',
  templateUrl: './edit-biopsy-report.component.html',
  styleUrls: ['./edit-biopsy-report.component.css']
})
export class EditBiopsyReportComponent implements OnInit {
  biopsy$: Observable<Biopsy>;
  patientId: string;

  constructor(private store: Store, private route: ActivatedRoute) { }

  ngOnInit(): void {
    let biopsyId = this.route.snapshot.paramMap.get('biopsyId');
    this.patientId = this.route.snapshot.paramMap.get('patientId');
    if (biopsyId != null) {
      this.biopsy$ = this.store.select(fromBiopsy.selectBiopsy, { id: biopsyId });
    }
  }

  saveBiopsy(biopsy: Biopsy) {
    /// todo: move this to service
    if (biopsy.id == null || biopsy.id == '') {
      biopsy.id = uuidv4();
    }
    
    this.store.dispatch(biopsyActions.upsertBiopsy({ patientId: this.patientId, 
      biopsy: biopsy }));
  }

}
