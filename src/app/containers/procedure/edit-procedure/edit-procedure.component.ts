import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Procedure } from 'src/app/models/procedure.model';
import { Appointment } from 'src/app/models/appointment.model';

@Component({
  selector: 'app-edit-procedure',
  templateUrl: './edit-procedure.component.html',
  styleUrls: ['./edit-procedure.component.css']
})
export class EditProcedureComponent implements OnInit {
  procedure$: Observable<Procedure>;
  appointment$: Observable<Appointment>;

  constructor() { }

  ngOnInit(): void {
  }

}
