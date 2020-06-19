import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Procedure } from 'src/app/models/procedure.model';
import { Store } from '@ngrx/store';
import { ActivatedRoute } from '@angular/router';
import * as fromProcedure from 'src/app/store/procedure/procedure.reducer';

@Component({
  selector: 'app-view-procedure',
  templateUrl: './view-procedure.component.html',
  styleUrls: ['./view-procedure.component.css']
})
export class ViewProcedureComponent implements OnInit {
  procedure$: Observable<Procedure>;

  constructor(private store: Store,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
    let procedureId = this.route.snapshot.paramMap.get('procedureId');
    this.procedure$ = this.store.select(fromProcedure.selectProcedure,
      { id: procedureId});
  }

}
