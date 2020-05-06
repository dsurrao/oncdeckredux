import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from "@angular/router";
import { Patient } from '../../../../app/interfaces/patient';
import { Store, select } from '@ngrx/store';
import { addPatient, fetchPatient } from "../../../store/patient/patient.actions";
import { Observable, of } from "rxjs";
import { PatientDemog } from 'src/app/interfaces/patient-demog';
import { selectPatient } from 'src/app/store/patient/patient.selectors';

@Component({
  selector: 'app-edit-patient',
  templateUrl: './edit-patient.component.html',
  styleUrls: ['./edit-patient.component.css']
})
export class EditPatientComponent implements OnInit {
  patient$: Observable<Patient>;

  constructor(private store: Store,
    private router: Router,
    private route: ActivatedRoute) {      
  }

  ngOnInit(): void {
    let patientId = this.route.snapshot.paramMap.get('patientId');
    if (patientId != null) {
      this.store.dispatch(fetchPatient({ payload: patientId}));
      this.patient$ = this.store.pipe(select(selectPatient));
    }
    else {
      this.patient$ = of(this.createNewPatient());
    }
  }

  save(patient: Patient): void {
    this.store.dispatch(addPatient({payload: patient}));
    if (patient.id != null) {
      this.router.navigateByUrl('/patient/' + patient.id + '/view_patient');
    }
    else {
        // todo: waiting for service to generate patient id
      this.router.navigateByUrl('/patient');
    }
  }

  cancel(): void {
    this.router.navigateByUrl('/patient');

    // this.router.navigateByUrl(
    //   this.router.getCurrentNavigation().previousNavigation.finalUrl);
  }

  createNewPatient(): Patient {
    let demog: PatientDemog = {
      firstName: '',
      middleName: '', 
      lastName: '',
      gender: 'female',
      dateOfBirth: null,
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
