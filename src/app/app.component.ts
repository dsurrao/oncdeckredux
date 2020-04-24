import { Component, OnDestroy, ChangeDetectorRef, AfterContentChecked } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { MediaMatcher } from '@angular/cdk/layout';
import { Store, select } from '@ngrx/store';
import { selectPatient } from './store/patient/patient.selectors';
import { Patient } from './interfaces/patient';
import { Observable, Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterContentChecked, OnDestroy {
  title:string;
  patientId: string;
  //todo: https://angular.io/guide/component-interaction#intercept-input-property-changes-with-a-setter
  patientIdTemp: string;
  patientFullName: string;
  patientFullNameTemp: string;
  selectedPatient$: Observable<Patient>;
  subscription: Subscription;
  mobileQuery: MediaQueryList;

  private _mobileQueryListener: () => void;

  public constructor(private titleService: Title, 
    private store: Store,
    changeDetectorRef: ChangeDetectorRef, 
    media: MediaMatcher
    ) {
    this.title = 'OncDeck';
    titleService.setTitle(this.title);

    this.mobileQuery = media.matchMedia('(max-width: 600px)');
    this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addListener(this._mobileQueryListener);

    this.selectedPatient$ = this.store.pipe(
      select(selectPatient)
    );

    this.subscription = this.selectedPatient$.subscribe(
      patient => {
        if (patient != null && patient.demog != null) {
          this.patientFullNameTemp = patient.demog.lastName 
            + ', '
            + patient.demog.firstName;
          this.patientIdTemp = patient.id;
        }
        else {
          this.patientFullNameTemp = '';
          this.patientIdTemp = null;
        }
      }
    );
  }

  // https://angular.io/guide/lifecycle-hooks#aftercontent
  ngAfterContentChecked(): void {
    if (this.patientFullName != this.patientFullNameTemp) {
      this.patientFullName = this.patientFullNameTemp;
    }
    if (this.patientId != this.patientIdTemp) {
      this.patientId = this.patientIdTemp;
    }
  }

  ngOnDestroy(): void {
    this.mobileQuery.removeListener(this._mobileQueryListener);
    this.subscription.unsubscribe();
  }
}
