import { Component, OnInit, Input } from '@angular/core';
import { SurgicalPathology } from 'src/app/models/surgery/surgical-pathology.model';
import { Observable } from 'rxjs';
import * as fromSurgicalPathology from 'src/app/store/surgery/surgical-pathology.reducer';
import { Store } from '@ngrx/store';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-view-surgical-pathology',
  templateUrl: './view-surgical-pathology.component.html',
  styleUrls: ['./view-surgical-pathology.component.css']
})
export class ViewSurgicalPathologyComponent implements OnInit {
  surgicalPathology$: Observable<SurgicalPathology>;
  patientId: string;

  constructor(private store: Store,
    private route: ActivatedRoute) {       
  }

  ngOnInit(): void {
    this.patientId = this.route.snapshot.paramMap.get(
      "patientId");
    let surgicalPathologyId = this.route.snapshot.paramMap.get(
      "surgicalPathologyId");
    this.surgicalPathology$ = this.store.select(
      fromSurgicalPathology.selectSurgicalPathology,
      { id: surgicalPathologyId }
    );
  }

}
