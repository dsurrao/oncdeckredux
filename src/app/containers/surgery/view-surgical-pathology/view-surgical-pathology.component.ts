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

  constructor(private store: Store,
    private route: ActivatedRoute) {       
  }

  ngOnInit(): void {
    let surgicalPathologyId = this.route.snapshot.paramMap.get(
      "pathologyId");
    this.surgicalPathology$ = this.store.select(
      fromSurgicalPathology.selectSurgicalPathology,
      { id: surgicalPathologyId }
    );
  }

}
