import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { HistologyEnum } from 'src/app/models/enums/histology.enum';
import { LviStatusEnum } from 'src/app/models/enums/lvi-status.enum';
import { ReceptorStatusEnum } from 'src/app/models/enums/receptor-status.enum';
import { GradeEnum } from 'src/app/models/enums/grade.enum';
import { Her2TestEnum } from 'src/app/models/enums/her2-test.enum';
import { ReceptorStrengthEnum } from 'src/app/models/enums/receptor-strength.enum';
import { SurgicalPathology } from 'src/app/models/surgery/surgical-pathology.model';
import { ProcedureStatusEnum } from 'src/app/models/enums/procedure-status.enum';
import { SurgicalMarginsEnum } from 'src/app/models/enums/surgical-margins.enum';

@Component({
  selector: 'app-edit-surgical-pathology-template',
  templateUrl: './edit-surgical-pathology-template.component.html',
  styleUrls: ['./edit-surgical-pathology-template.component.css']
})
export class EditSurgicalPathologyTemplateComponent implements OnInit {
  @Input()
  surgicalPathology: SurgicalPathology;

  @Output()
  onSubmitEmitter = new EventEmitter<SurgicalPathology>();

  @Output()
  onCancelEmitter = new EventEmitter();

  histologyFormGroup = this.fb.group({
    histology: [''],
    histologyOther: ['']
  });

  erReceptorFormGroup = this.fb.group({
    status: [''],
    strength: ['']
  });

  prReceptorFormGroup = this.fb.group({
    status: [''],
    strength: ['']
  });

  her2ReceptorFormGroup = this.fb.group({
    status: [''],
    test: ['']
  });

  receptorFormGroup = this.fb.group({
    erReceptor: this.erReceptorFormGroup,
    prReceptor: this.prReceptorFormGroup,
    her2Receptor: this.her2ReceptorFormGroup
  });

  featuresFormGroup = this.fb.group({
    grade: [''],
    lvi: ['']
  });

  // todo: add side
  // surgicalMarginsFormGroup = this.fb.group({
  //   margin: [''],
  //   side: ['']
  // });

  surgicalPathologyForm = this.fb.group({
    id: [null],
    surgeryType: [''],
    reportDate: [''],
    status: [null],
    statusReason: [null],
    lymphNodeDissectionType: [''],
    histology: this.histologyFormGroup,
    receptors: this.receptorFormGroup,
    features: this.featuresFormGroup,
    surgicalMargins: [null]
  });

  histologyEnum = HistologyEnum;
  lviStatusEnum = LviStatusEnum;
  receptorStatusEnum = ReceptorStatusEnum;
  receptorStrengthEnum = ReceptorStrengthEnum;
  gradeEnum = GradeEnum;
  her2TestEnum = Her2TestEnum;
  procedureStatusEnum = ProcedureStatusEnum;
  surgicalMarginsEnum = SurgicalMarginsEnum;

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    if (this.surgicalPathology != null) {
      this.surgicalPathologyForm.patchValue(this.surgicalPathology);
    }
  }

  onSubmit(): void { 
    this.onSubmitEmitter.emit(this.surgicalPathologyForm.value);
  }

  onCancel(): void {
    this.onCancelEmitter.emit();
  }
}
