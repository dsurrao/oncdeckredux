import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { Patient } from 'src/app/interfaces/patient';
import { Observable } from 'rxjs';
import { Biopsy } from 'src/app/interfaces/biopsy';

@Component({
  selector: 'app-edit-biopsy',
  templateUrl: './edit-biopsy.component.html',
  styleUrls: ['./edit-biopsy.component.css']
})
export class EditBiopsyComponent implements OnInit {
  biopsy$: Observable<Biopsy>;

  constructor(private store: Store<{patients: Patient[]}>,
    private router: Router,
    private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    let biopsyId = this.activatedRoute.snapshot.paramMap.get('biopsyId');
  }

  save(biopsy: Biopsy) {
    
  }

}
