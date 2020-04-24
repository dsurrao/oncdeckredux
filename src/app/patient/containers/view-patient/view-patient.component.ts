import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';
import { Patient } from 'src/app/interfaces/patient';
import { Store, select } from '@ngrx/store';
import { Router, ActivatedRoute } from '@angular/router';
import { fetchPatient } from "../../../store/patient/patient.actions";
import { selectPatient } from 'src/app/store/patient/patient.selectors';

@Component({
  selector: 'app-view-patient',
  templateUrl: './view-patient.component.html',
  styleUrls: ['./view-patient.component.css']
})
export class ViewPatientComponent implements OnInit {
  patient$: Observable<Patient>;

  constructor(private store: Store,
    private router: Router,
    private route: ActivatedRoute) {      
  }

  ngOnInit(): void {
    let patientId = this.route.snapshot.paramMap.get('patientId');
    this.store.dispatch(fetchPatient({ payload: patientId}));
    this.patient$ = this.store.pipe(select(selectPatient));
  }
}
