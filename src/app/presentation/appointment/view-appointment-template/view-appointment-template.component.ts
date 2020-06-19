import { Component, OnInit, Input } from '@angular/core';
import { Appointment } from 'src/app/models/appointment.model';

@Component({
  selector: 'app-view-appointment-template',
  templateUrl: './view-appointment-template.component.html',
  styleUrls: ['./view-appointment-template.component.css']
})
export class ViewAppointmentTemplateComponent implements OnInit {
  @Input()
  appointment: Appointment;

  constructor() { }

  ngOnInit(): void {
  }

}
