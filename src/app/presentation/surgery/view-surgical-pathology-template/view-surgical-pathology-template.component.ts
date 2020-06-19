import { Component, OnInit, Input } from '@angular/core';
import { SurgicalPathology } from 'src/app/models/surgery/surgical-pathology.model';

@Component({
  selector: 'app-view-surgical-pathology-template',
  templateUrl: './view-surgical-pathology-template.component.html',
  styleUrls: ['./view-surgical-pathology-template.component.css']
})
export class ViewSurgicalPathologyTemplateComponent implements OnInit {
  @Input()
  surgicalPathology: SurgicalPathology;

  constructor() { }

  ngOnInit(): void {
  }

}
