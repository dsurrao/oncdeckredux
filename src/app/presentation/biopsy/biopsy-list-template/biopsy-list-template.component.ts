import { Component, OnInit, Input } from '@angular/core';
import { Patient } from 'src/app/models/common/patient.model';

@Component({
  selector: 'app-biopsy-list-template',
  templateUrl: './biopsy-list-template.component.html',
  styleUrls: ['./biopsy-list-template.component.css']
})
export class BiopsyListTemplateComponent implements OnInit {
  @Input()
  patient: Patient;

  displayedColumns: string[];

  constructor() { 
    this.displayedColumns = ['dateScheduled', 'facilityName', 'providerName'];
  }

  ngOnInit(): void {
  }

}
