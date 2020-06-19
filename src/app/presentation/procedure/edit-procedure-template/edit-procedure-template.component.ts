import { Component, OnInit, Input } from '@angular/core';
import { BiopsyTypeEnum } from 'src/app/models/enums/biopsy-type.enum';
import { SurgeryTypeEnum } from 'src/app/models/enums/surgery-type.enum';
import { ProcedureStatusEnum } from 'src/app/models/enums/procedure-status.enum';
import { FormBuilder } from '@angular/forms';
import { Procedure } from 'src/app/models/procedure.model';
import { Appointment } from 'src/app/models/appointment.model';

@Component({
  selector: 'app-edit-procedure-template',
  templateUrl: './edit-procedure-template.component.html',
  styleUrls: ['./edit-procedure-template.component.css']
})
export class EditProcedureTemplateComponent implements OnInit {
  @Input()
  procedure: Procedure;

  @Input()
  appointment: Appointment;

  procedureForm = this.fb.group({
    procedureType: [''],
    status: ['status'],
    statusReason: ['statusReason']
  });

  biopsyTypeEnum = BiopsyTypeEnum;
  surgeryTypeEnum = SurgeryTypeEnum;
  procedureStatusEnum = ProcedureStatusEnum;

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
  }

  onSubmit(): void {
    
  }
}
