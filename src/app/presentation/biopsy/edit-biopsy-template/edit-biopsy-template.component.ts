import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Biopsy } from 'src/app/models/biopsy.model';

@Component({
  selector: 'app-edit-biopsy-template',
  templateUrl: './edit-biopsy-template.component.html',
  styleUrls: ['./edit-biopsy-template.component.css']
})
export class EditBiopsyTemplateComponent implements OnInit {
  @Input()
  biopsy: Biopsy;

  @Input()
  patientId: string;

  @Output()
  onSave = new EventEmitter<Biopsy>();

  @Output()
  onCancel = new EventEmitter();

  id: string;
  dateScheduled: string;
  facilityName: string;
  providerName: string;

  constructor() { }

  ngOnInit(): void {
    if (this.biopsy != null) {
      this.id = this.biopsy.id;
      this.dateScheduled = this.biopsy.dateScheduled;
      this.facilityName = this.biopsy.facilityName;
      this.providerName = this.biopsy.providerName;
    }
  }

  save() {
    this.onSave.emit({
      id: this.id,
      dateScheduled: this.dateScheduled,
      facilityName: this.facilityName,
      providerName: this.providerName
    });
  }

  cancel() {
    this.onCancel.emit();
  }
}
