import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { BiopsyTypeEnum } from '../../../models/biopsy/biopsy-type-enum';
import { BiopsySiteEnum } from 'src/app/models/biopsy/biopsy-site-enum';
import { BiopsyHistologyEnum } from 'src/app/models/biopsy/biopsy-histology-enum';
import { BiopsyGradeEnum } from 'src/app/models/biopsy/biopsy-grade-enum';
import { BiopsyReceptorStatusEnum } from 'src/app/models/biopsy/biopsy-receptor-status-enum';
import { BiopsyReceptorStrengthEnum } from 'src/app/models/biopsy/biopsy-receptor-strength-enum';
import { Her2TestEnum } from 'src/app/models/biopsy/her2-test-enum';
import { LymphNodeLocationEnum } from 'src/app/models/biopsy/lymph-node-location-enum';
import { SideEnum } from 'src/app/models/side-enum';
import { BiopsyLviStatusEnum } from 'src/app/models/biopsy/biopsy-lvi-status-enum';
import { Biopsy } from 'src/app/models/biopsy/biopsy.model';

@Component({
  selector: 'app-edit-biopsy-report-template',
  templateUrl: './edit-biopsy-report-template.component.html',
  styleUrls: ['./edit-biopsy-report-template.component.css']
})
export class EditBiopsyReportTemplateComponent implements OnInit {
  @Input()
  biopsy: Biopsy;

  @Output()
  onSaveBiopsy = new EventEmitter<Biopsy>();

  /// initialize controls
  siteFormGroup = this.fb.group({
    site: [null],
    siteOther: [{ value: null, disabled: true }],
    side: [{ value: null, disabled: true }],
    lymphNodeLocation: [{ value: null, disabled: true }],
    lymphNodeLocationOther: [{ value: null, disabled: true }],
    bone: [{ value: null, disabled: true }]
  });

  histologyFormGroup = this.fb.group({
    histology: [null],
    histologyOther: [{ value: null, disabled: true }]
  });

  erReceptorFormGroup = this.fb.group({ 
    status: [null], 
    strength: [{ value: null, disabled: true }] 
  });
  prReceptorFormGroup = this.fb.group({ 
    status: [null], 
    strength: [{ value: null, disabled: true }] 
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
    scheduledDate: [null],
    facilityName: [null],
    contactPerson: [null],
    providerName: [null],
    procedureDate: [null],
    pathologyReportDate: [null],
    type: [null],
    site: this.siteFormGroup,
    histology: this.histologyFormGroup,
    receptors: this.receptorFormGroup,
    features: this.featuresFormGroup
  });

  /// references to the enum types
  biopsyTypeEnum = BiopsyTypeEnum;
  biopsySiteEnum = BiopsySiteEnum;
  biopsyHistologyEnum = BiopsyHistologyEnum;
  biopsyGradeEnum = BiopsyGradeEnum;
  biopsyLviStatusEnum = BiopsyLviStatusEnum;
  biopsyReceptorStatusEnum = BiopsyReceptorStatusEnum;
  biopsyReceptorStrengthEnum = BiopsyReceptorStrengthEnum;
  her2TestEnum = Her2TestEnum;
  lymphNodeLocationEnum = LymphNodeLocationEnum;
  sideEnum = SideEnum;

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.siteFormGroup.controls['site'].valueChanges.subscribe(
      e => {
        this.siteFormGroup.controls['siteOther'].setValue(null);
        this.siteFormGroup.controls['siteOther'].disable();
        this.siteFormGroup.controls['bone'].setValue(null);
        this.siteFormGroup.controls['bone'].disable();
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
          case this.biopsySiteEnum.Bone:
            this.siteFormGroup.controls['bone'].enable();
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
    );

    this.siteFormGroup.controls['lymphNodeLocation'].valueChanges.subscribe(
      e => {        
        switch (e) {
          case this.lymphNodeLocationEnum.Other:
            this.siteFormGroup.controls['lymphNodeLocationOther'].enable();
            break;
          default:
            this.siteFormGroup.controls['lymphNodeLocationOther'].setValue(null);
            this.siteFormGroup.controls['lymphNodeLocationOther'].disable();
        }
      }
    );

    this.histologyFormGroup.controls['histology'].valueChanges.subscribe(
      e => {
        switch (e) {
          case this.biopsyHistologyEnum.Other:
            this.histologyFormGroup.controls['histologyOther'].enable();
            break;
          default:
            this.histologyFormGroup.controls['histologyOther'].setValue(null);
            this.histologyFormGroup.controls['histologyOther'].disable();
        }
      }
    );

    this.erReceptorFormGroup.controls['status'].valueChanges.subscribe(
      e => {
        switch (e) {
          case this.biopsyReceptorStatusEnum.Positive:
            this.erReceptorFormGroup.controls['strength'].enable();
            break;
          default:
            this.erReceptorFormGroup.controls['strength'].setValue(null);
            this.erReceptorFormGroup.controls['strength'].disable();
        }
      }
    );

    this.prReceptorFormGroup.controls['status'].valueChanges.subscribe(
      e => {
        switch (e) {
          case this.biopsyReceptorStatusEnum.Positive:
            this.prReceptorFormGroup.controls['strength'].enable();
            break;
          default:
            this.prReceptorFormGroup.controls['strength'].setValue(null);
            this.prReceptorFormGroup.controls['strength'].disable();
        }
      }
    );

    if (this.biopsy != null) {
      this.biopsyForm.patchValue(this.biopsy);
    }
  }

  onBiopsyFormSubmit(): void {
    let updatedBiopsy: Biopsy = this.biopsyForm.value;
    updatedBiopsy.id = this.biopsy.id;
    this.onSaveBiopsy.emit(updatedBiopsy);
    
    //console.log(this.biopsyForm.value);
  }
}
