import { Component, OnInit, Input } from '@angular/core';
import { Procedure } from 'src/app/models/procedure.model';

@Component({
  selector: 'app-view-procedure-template',
  templateUrl: './view-procedure-template.component.html',
  styleUrls: ['./view-procedure-template.component.css']
})
export class ViewProcedureTemplateComponent implements OnInit {
  @Input()
  procedure: Procedure;

  constructor() { }

  ngOnInit(): void {
  }

}
