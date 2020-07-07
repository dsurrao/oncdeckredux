import { Component, OnInit, Input, Output, EventEmitter, ViewChild, TemplateRef } from '@angular/core';
import { FormBuilder, Validators, FormGroup, ValidationErrors, ValidatorFn } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { BiopsyTypeEnum } from '../../../models/enums/biopsy-type.enum';
import { BiopsySiteEnum } from 'src/app/models/enums/biopsy-site.enum';
import { HistologyEnum } from 'src/app/models/enums/histology.enum';
import { GradeEnum } from 'src/app/models/enums/grade.enum';
import { ReceptorStatusEnum } from 'src/app/models/enums/receptor-status.enum';
import { ReceptorStrengthEnum } from 'src/app/models/enums/receptor-strength.enum';
import { Her2TestEnum } from 'src/app/models/enums/her2-test.enum';
import { LymphNodeLocationEnum } from 'src/app/models/enums/lymph-node-location-enum';
import { SideEnum } from 'src/app/models/enums/side.enum';
import { LviStatusEnum } from 'src/app/models/enums/lvi-status.enum';
import { Biopsy } from 'src/app/models/biopsy/biopsy.model';
import { ProcedureStatusEnum } from 'src/app/models/enums/procedure-status.enum';
import * as biopsyValidation from 'src/app/utilities/biopsy-validation';

@Component({
  selector: 'app-edit-biopsy-report-template',
  templateUrl: './edit-biopsy-report-template.component.html',
  styleUrls: ['./edit-biopsy-report-template.component.css']
})
export class EditBiopsyReportTemplateComponent implements OnInit {
  @ViewChild("dialogRef") dialogRef: TemplateRef<any>;

  @Input()
  biopsy: Biopsy;

  @Output()
  onSaveBiopsy = new EventEmitter<Biopsy>();

  siteFormGroup = this.fb.group({
    site: [null],
    siteOther: [null],
    side: [null],
    lymphNodeLocation: [null],
    lymphNodeLocationOther: [null]
  });

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
  })

  biopsyForm = this.fb.group({
      pathologyReportDate: [null],
      status: [null, Validators.required],
      statusReason: [null],
      site: this.siteFormGroup,
      histology: this.histologyFormGroup,
      receptors: this.receptorFormGroup,
      features: this.featuresFormGroup
    },
    { validators: biopsyFormValidator }
  );

  /// references to the enum types
  biopsyTypeEnum = BiopsyTypeEnum;
  biopsySiteEnum = BiopsySiteEnum;
  biopsyHistologyEnum = HistologyEnum;
  biopsyGradeEnum = GradeEnum;
  biopsyLviStatusEnum = LviStatusEnum;
  biopsyReceptorStatusEnum = ReceptorStatusEnum;
  biopsyReceptorStrengthEnum = ReceptorStrengthEnum;
  her2TestEnum = Her2TestEnum;
  lymphNodeLocationEnum = LymphNodeLocationEnum;
  sideEnum = SideEnum;
  procedureStatusEnum = ProcedureStatusEnum;

  constructor(private fb: FormBuilder,
    public dialog: MatDialog) { }

  ngOnInit(): void {    
    /// initialize controls
    this.updateBiopsyFormStatusControls(this.biopsyForm.controls['status'].value);
    this.updateSiteFormGroupControls(this.siteFormGroup.controls['site'].value);
    this.updateLymphNodeLocationControls(null);
    this.updateHistologyFormGroupControls(null);
    this.updateErReceptorFormGroupControls(null);
    this.updatePrReceptorFormGroupControls(null);

    /// listen for changes
    /// todo: unsubcribe
    this.biopsyForm.controls['status'].valueChanges.subscribe(
      e => this.updateBiopsyFormStatusControls(e)
    )

    this.siteFormGroup.controls['site'].valueChanges.subscribe(
      e => this.updateSiteFormGroupControls(e)
    );

    this.siteFormGroup.controls['lymphNodeLocation'].valueChanges.subscribe(
      e => this.updateLymphNodeLocationControls(e)
    );

    this.histologyFormGroup.controls['histology'].valueChanges.subscribe(
      e => this.updateHistologyFormGroupControls(e)
    );

    this.erReceptorFormGroup.controls['status'].valueChanges.subscribe(
      e => this.updateErReceptorFormGroupControls(e)
    );

    this.prReceptorFormGroup.controls['status'].valueChanges.subscribe(
      e => this.updatePrReceptorFormGroupControls(e)
    );

    if (this.biopsy != null) {
      this.biopsyForm.patchValue(this.biopsy);
    }    
  }

  updateBiopsyFormStatusControls(status: any) {
    switch(status) {
      case ProcedureStatusEnum.NotDone:
        this.biopsyForm.controls['statusReason'].enable();
        break;
      default:
        this.biopsyForm.controls['statusReason'].setValue(null);
        this.biopsyForm.controls['statusReason'].disable();
    }
  }

  updateSiteFormGroupControls(e: any) {
    this.siteFormGroup.controls['siteOther'].setValue(null);
    this.siteFormGroup.controls['siteOther'].disable();
    this.siteFormGroup.controls['side'].setValue(null);
    this.siteFormGroup.controls['side'].disable();
    this.siteFormGroup.controls['lymphNodeLocation'].setValue(null);
    this.siteFormGroup.controls['lymphNodeLocation'].disable();
    this.siteFormGroup.controls['lymphNodeLocation'].setValue(null);
    this.siteFormGroup.controls['lymphNodeLocationOther'].disable();

    switch (e) {
      case this.biopsySiteEnum.Other:
        this.siteFormGroup.controls['siteOther'].enable();
        break;
      case this.biopsySiteEnum.Breast:
        this.siteFormGroup.controls['side'].enable();
        break;
      case this.biopsySiteEnum.LymphNode:
        this.siteFormGroup.controls['side'].enable();
        this.siteFormGroup.controls['lymphNodeLocation'].enable();
        break;
      default:
    }
  }

  updateLymphNodeLocationControls(e: any) {
    switch (e) {
      case this.lymphNodeLocationEnum.Other:
        this.siteFormGroup.controls['lymphNodeLocationOther'].enable();
        break;
      default:
        this.siteFormGroup.controls['lymphNodeLocationOther'].setValue(null);
        this.siteFormGroup.controls['lymphNodeLocationOther'].disable();
    }
  }

  updateHistologyFormGroupControls(e: any) {
    switch (e) {
      case this.biopsyHistologyEnum.Other:
        this.histologyFormGroup.controls['histologyOther'].enable();
        break;
      default:
        this.histologyFormGroup.controls['histologyOther'].setValue(null);
        this.histologyFormGroup.controls['histologyOther'].disable();
    }
  }

  updateErReceptorFormGroupControls(e: any) {
    switch (e) {
      case this.biopsyReceptorStatusEnum.Positive:
        this.erReceptorFormGroup.controls['strength'].enable();
        break;
      default:
        this.erReceptorFormGroup.controls['strength'].setValue(null);
        this.erReceptorFormGroup.controls['strength'].disable();
    }
  }

  updatePrReceptorFormGroupControls(e: any) {
    switch (e) {
      case this.biopsyReceptorStatusEnum.Positive:
        this.prReceptorFormGroup.controls['strength'].enable();
        break;
      default:
        this.prReceptorFormGroup.controls['strength'].setValue(null);
        this.prReceptorFormGroup.controls['strength'].disable();
    }
  }

  onSubmit(): void {
    this.openDialog();
  }

  onConfirm(): void {
    this.onSaveBiopsy.emit(this.biopsyForm.value);
  }

  openDialog(): void {
    let dialogRef = this.dialog.open(this.dialogRef);
  }
}

export const biopsyFormValidator: ValidatorFn = (control: FormGroup): 
  ValidationErrors | null => {
  return biopsyValidation.validateBiopsy(control.value);
}

