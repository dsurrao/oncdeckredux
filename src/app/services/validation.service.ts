import { Injectable } from '@angular/core';
import { Appointment } from '../models/appointment.model';
import * as dateUtilities from 'src/app/utilities/date-utilities';

@Injectable({
  providedIn: 'root'
})
export class ValidationService {

  constructor() { }

  validateAppointment(appt: Appointment): ValidationResult {
    let validationResult = {isValid: true, errors: []};

    if (!appt.startDate) {
      validationResult.isValid = false;
      validationResult.errors.push({ field: 'startDate', 
        message: 'is empty' });
    }

    if (!appt.facility) {
      validationResult.isValid = false;
    }

    if (!appt.contactPerson) {
      validationResult.isValid = false;
    }

    if (!appt.appointmentType) {
      validationResult.isValid = false;
    }

    return (validationResult);
  }
}

export interface ValidationResult {
  isValid: boolean;
  errors: { field: string, message: string }[]
}
