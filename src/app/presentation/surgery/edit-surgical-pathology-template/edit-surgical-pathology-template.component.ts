import { Component, OnInit, Input, Output, EventEmitter, ViewChild, TemplateRef, OnDestroy } from '@angular/core';
import { FormBuilder, ValidatorFn, FormGroup, ValidationErrors } from '@angular/forms';
import { HistologyEnum } from 'src/app/models/enums/histology.enum';
import { LviStatusEnum } from 'src/app/models/enums/lvi-status.enum';
import { ReceptorStatusEnum } from 'src/app/models/enums/receptor-status.enum';
import { GradeEnum } from 'src/app/models/enums/grade.enum';
import { Her2TestEnum } from 'src/app/models/enums/her2-test.enum';
import { ReceptorStrengthEnum } from 'src/app/models/enums/receptor-strength.enum';
import { SurgicalPathology } from 'src/app/models/surgery/surgical-pathology.model';
import { ProcedureStatusEnum } from 'src/app/models/enums/procedure-status.enum';
import { SurgicalMarginsEnum } from 'src/app/models/enums/surgical-margins.enum';
import * as surgeryValidation from 'src/app/utilities/surgery-validation';
import { MatDialog } from '@angular/material/dialog';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-edit-surgical-pathology-template',
  templateUrl: './edit-surgical-pathology-template.component.html',
  styleUrls: ['./edit-surgical-pathology-template.component.css']
})
export class EditSurgicalPathologyTemplateComponent implements OnInit, OnDestroy {
  @ViewChild("dialogRef") dialogRef: TemplateRef<any>;

  @Input()
  surgicalPathology: SurgicalPathology;

  @Output()
  onSubmitEmitter = new EventEmitter<SurgicalPathology>();

  @Output()
  onCancelEmitter = new EventEmitter();

  histologyFormGroup = this.fb.group({
    histology: [null],
    histologyOther: [null]
  });

  erReceptorFormGroup = this.fb.group({
    status: [null],
    strength: [null]
  });

  prReceptorFormGroup = this.fb.group({
    status: [null],
    strength: [null]
  });

  her2ReceptorFormGroup = this.fb.group({
    status: [null],
    test: [null]
  });

  receptorFormGroup = this.fb.group({
    erReceptor: this.erReceptorFormGroup,
    prReceptor: this.prReceptorFormGroup,
    her2Receptor: this.her2ReceptorFormGroup
  });

  featuresFormGroup = this.fb.group({
    grade: [null],
    lvi: [null]
  });

  // todo: add side
  // surgicalMarginsFormGroup = this.fb.group({
  //   margin: [''],
  //   side: ['']
  // });

  surgicalPathologyForm = this.fb.group({
      id: [null],
      reportDate: [null],
      status: [null],
      statusReason: [null],
      lymphNodeDissectionType: [null],
      histology: this.histologyFormGroup,
      receptors: this.receptorFormGroup,
      features: this.featuresFormGroup,
      surgicalMargins: [null]
    }, 
    { validators: surgicalPathologyFormValidator }
  );

  histologyEnum = HistologyEnum;
  lviStatusEnum = LviStatusEnum;
  receptorStatusEnum = ReceptorStatusEnum;
  receptorStrengthEnum = ReceptorStrengthEnum;
  gradeEnum = GradeEnum;
  her2TestEnum = Her2TestEnum;
  procedureStatusEnum = ProcedureStatusEnum;
  surgicalMarginsEnum = SurgicalMarginsEnum;

  validationErrors: string;
  formSubscription: Subscription;
  formStatusSubscription: Subscription;
  histologySubscription: Subscription;
  erSubscription: Subscription;
  prSubscription: Subscription;
  her2Subscription: Subscription;

  constructor(private fb: FormBuilder, public dialog: MatDialog) { }

  ngOnInit(): void {
    if (this.surgicalPathology != null) {
      this.surgicalPathologyForm.patchValue(this.surgicalPathology);
    }

    this.formSubscription = this.surgicalPathologyForm.valueChanges
      .subscribe(formValue => {
        if (this.surgicalPathologyForm.status == "INVALID") {
            Object.keys(this.surgicalPathologyForm.errors).forEach(key => {
            this.validationErrors = key + ': ' 
              + this.surgicalPathologyForm.errors[key];
          })
        }
        else {
          this.validationErrors = null;
        }
    });

    this.formStatusSubscription = this.surgicalPathologyForm.controls['status']
    .valueChanges.subscribe(value => {
      if (value == ProcedureStatusEnum.NotDone) {
        this.surgicalPathologyForm.controls['reportDate'].setValue(null);
        this.surgicalPathologyForm.controls['lymphNodeDissectionType'].setValue(null);
        this.surgicalPathologyForm.controls['surgicalMargins'].setValue(null);
        this.histologyFormGroup.reset();
        this.receptorFormGroup.reset();
        this.featuresFormGroup.reset();
      }
    });

    this.histologySubscription = this.histologyFormGroup.controls[
      'histology'].valueChanges.subscribe(value => {
        let histologyOtherCtrl = this.histologyFormGroup.controls['histologyOther'];
        if (value == HistologyEnum.Other) {
          histologyOtherCtrl.enable();
        }
        else {
          histologyOtherCtrl.setValue(null);
          histologyOtherCtrl.disable();
        }
    });

    this.erSubscription = this.erReceptorFormGroup.controls['status']
    .valueChanges.subscribe(value => {
      let strengthCtrl = this.erReceptorFormGroup.controls['strength'];
      if (value != ReceptorStatusEnum.Positive) {
        strengthCtrl.setValue(null);
        strengthCtrl.disable();
      }
      else {
        strengthCtrl.enable();
      }
    });

    this.prSubscription = this.prReceptorFormGroup.controls['status']
    .valueChanges.subscribe(value => {
      let strengthCtrl = this.prReceptorFormGroup.controls['strength'];
      if (value != ReceptorStatusEnum.Positive) {
        strengthCtrl.setValue(null);
        strengthCtrl.disable();
      }
      else {
        strengthCtrl.enable();
      }
    });

    this.her2Subscription = this.her2ReceptorFormGroup.controls['status']
    .valueChanges.subscribe(value => {
      let testCtrl = this.her2ReceptorFormGroup.controls['test'];
      if (value == ReceptorStatusEnum.Unknown) {
        testCtrl.setValue(null);
        testCtrl.disable();
      }
      else {
        testCtrl.enable();
      }
    });
  }

  onSubmit(): void {
    this.openDialog();
  }

  onConfirm(): void {
    this.onSubmitEmitter.emit(this.surgicalPathologyForm.value);
  }

  openDialog(): void {
    let dialogRef = this.dialog.open(this.dialogRef);
  }

  onCancel(): void {
    this.onCancelEmitter.emit();
  }

  ngOnDestroy(): void {
    this.formSubscription.unsubscribe();
    this.formStatusSubscription.unsubscribe();
    this.histologySubscription.unsubscribe();
    this.erSubscription.unsubscribe();
    this.prSubscription.unsubscribe();
    this.her2Subscription.unsubscribe();
  }
}

const surgicalPathologyFormValidator: ValidatorFn = (control: FormGroup):
  ValidationErrors | null => {
  let errors: ValidationErrors = surgeryValidation.validateSurgicalPathology(
    control.value);
  return (errors);
}