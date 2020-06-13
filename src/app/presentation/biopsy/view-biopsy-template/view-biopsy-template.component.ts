import { Component, OnInit, Input } from '@angular/core';
import { Biopsy } from 'src/app/models/biopsy/biopsy.model';
import { Patient } from 'src/app/models/common/patient.model';

@Component({
  selector: 'app-view-biopsy-template',
  templateUrl: './view-biopsy-template.component.html',
  styleUrls: ['./view-biopsy-template.component.css']
})
export class ViewBiopsyTemplateComponent implements OnInit {
  @Input()
  patientId: string;

  @Input()
  biopsy: Biopsy;

  constructor() { }

  ngOnInit(): void {
  }

}
