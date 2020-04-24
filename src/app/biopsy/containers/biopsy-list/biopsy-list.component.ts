import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Patient } from 'src/app/interfaces/patient';
import { selectPatient } from 'src/app/store/patient/patient.selectors';

@Component({
  selector: 'app-biopsy-list',
  templateUrl: './biopsy-list.component.html',
  styleUrls: ['./biopsy-list.component.css']
})
export class BiopsyListComponent implements OnInit {
  patient$: Observable<Patient>;

  constructor(private store: Store) { }

  ngOnInit(): void {
    this.patient$ = this.store.pipe(select(selectPatient));
  }

}
