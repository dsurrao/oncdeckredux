import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Biopsy } from 'src/app/interfaces/biopsy';

@Component({
  selector: 'app-edit-biopsy-template',
  templateUrl: './edit-biopsy-template.component.html',
  styleUrls: ['./edit-biopsy-template.component.css']
})
export class EditBiopsyTemplateComponent implements OnInit {
  @Input()
  biopsy: Biopsy;

  @Output()
  onSave = new EventEmitter<Biopsy>();

  @Output()
  onCancel = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  save() {
    this.onSave.emit(this.biopsy);
  }

  cancel() {
    this.onCancel.emit();
  }
}
