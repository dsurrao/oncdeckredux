import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from "@angular/router";
import { Patient } from '../../../../app/interfaces/patient';
import { Store } from '@ngrx/store';
import { addPatient, fetchPatients } from "../../patient.actions";
import { map } from 'rxjs/operators';
import { Observable, of } from "rxjs";
import { PatientDemog } from 'src/app/interfaces/patient-demog';

@Component({
  selector: 'app-edit-patient',
  templateUrl: './edit-patient.component.html',
  styleUrls: ['./edit-patient.component.css']
})
export class EditPatientComponent implements OnInit {
  patient$: Observable<Patient>;

  constructor(private store: Store<{patients: []}>,
    private router: Router,
    private route: ActivatedRoute) {      
  }

  ngOnInit(): void {
    this.store.dispatch(fetchPatients());

    let patientId = this.route.snapshot.paramMap.get('id');
    if (patientId != null) {
      this.patient$ = this.store.pipe(
        map(store => {
          let patient = store.patients.find(patient => {
            let pt: Patient = patient;
            return (pt.id == patientId);
          });

          // deep clone
          return JSON.parse(JSON.stringify(patient));
        })
      );
    }
    else {
      this.patient$ = of(this.createNewPatient());
    }
  }

  save(patient: Patient): void {
    this.store.dispatch(addPatient({payload: patient}));
    this.goBackToList();
  }

  goBackToList(): void {
    this.router.navigateByUrl('');
  }

  createNewPatient(): Patient {
    let demog: PatientDemog = {
      firstName: '', 
      lastName: '',
      gender: 'female',
      dob: null,
      town: '',
      phoneNumber: '',
      contactFirstName: '',
      contactLastName: '',
      contactPhoneNumber: ''
    };

    return  {
      id: null,
      demog: demog,
      dateCreatedMs: Date.now()
    };
  }
}
