import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { HistologyEnum } from 'src/app/models/enums/histology.enum';
import { LviStatusEnum } from 'src/app/models/enums/lvi-status.enum';
import { ReceptorStatusEnum } from 'src/app/models/enums/receptor-status.enum';
import { GradeEnum } from 'src/app/models/enums/grade.enum';
import { Her2TestEnum } from 'src/app/models/enums/her2-test.enum';
import { ReceptorStrengthEnum } from 'src/app/models/enums/receptor-strength.enum';
import { SurgicalPathology } from 'src/app/models/surgery/surgical-pathology.model';

@Component({
  selector: 'app-edit-surgical-pathology-template',
  templateUrl: './edit-surgical-pathology-template.component.html',
  styleUrls: ['./edit-surgical-pathology-template.component.css']
})
export class EditSurgicalPathologyTemplateComponent implements OnInit {
  @Input()
  surgicalPathology: SurgicalPathology;

  @Output()
  onSave = new EventEmitter<SurgicalPathology>();

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

  surgicalMarginsFormGroup = this.fb.group({
    margin: [''],
    side: ['']
  });

  surgicalPathologyForm = this.fb.group({
    surgeryType: [''],
    reportDate: [''],
    lymphNodeDissectionType: [''],
    histology: this.histologyFormGroup,
    receptors: this.receptorFormGroup,
    features: this.featuresFormGroup,
    surgicalMargins: this.surgicalMarginsFormGroup
  });

  histologyEnum = HistologyEnum;
  lviStatusEnum = LviStatusEnum;
  receptorStatusEnum = ReceptorStatusEnum;
  receptorStrengthEnum = ReceptorStrengthEnum;
  gradeEnum = GradeEnum;
  her2TestEnum = Her2TestEnum;

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
  }

  onSubmit(): void { 
    this.onSave.emit(this.surgicalPathologyForm.value);
  }
}
