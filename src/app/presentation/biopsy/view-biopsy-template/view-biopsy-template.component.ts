import { Component, OnInit, Input } from '@angular/core';
import { Biopsy } from 'src/app/models/biopsy/biopsy.model';

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

  @Input()
  isEmbedded: boolean;

  @Input()
  tableClass = "full-width";

  @Input()
  columnClass = "title-centered";

  constructor() { }

  ngOnInit(): void {
  }

}
