import { Component, OnInit, Input } from '@angular/core';
import { SurgicalPathology } from 'src/app/models/surgery/surgical-pathology.model';
import { Appointment } from 'src/app/models/appointment.model';

@Component({
  selector: 'app-view-surgical-pathology-template',
  templateUrl: './view-surgical-pathology-template.component.html',
  styleUrls: ['./view-surgical-pathology-template.component.css']
})
export class ViewSurgicalPathologyTemplateComponent implements OnInit {
  @Input()
  surgicalPathology: SurgicalPathology;

  @Input()
  appointment: Appointment;

  @Input()
  patientId: string;

  @Input()
  isEmbedded: boolean;

  @Input()
  tableClass: string = "full-width";

  @Input()
  columnClass: string = "title-centered";

  constructor() { }

  ngOnInit(): void {
  }

}
