import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Biopsy } from 'src/app/models/biopsy.model';
import * as fromBiopsy from 'src/app/store/biopsy/biopsy.reducer';

@Component({
  selector: 'app-view-biopsy',
  templateUrl: './view-biopsy.component.html',
  styleUrls: ['./view-biopsy.component.css']
})
export class ViewBiopsyComponent implements OnInit {
  biopsy$: Observable<Biopsy>;

  constructor(private store: Store,
    private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    let biopsyId = this.activatedRoute.snapshot.paramMap.get('biopsyId');
    this.biopsy$ = this.store.select(fromBiopsy.selectBiopsy, { id: biopsyId });
  }
}
