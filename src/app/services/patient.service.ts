import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map, mergeMap } from 'rxjs/operators';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Patient } from '../interfaces/patient';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PatientService {

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'Basic ' 
        + btoa(environment.username + ':' + environment.password)
    })
  };

  // inject HttpClient
  constructor(private http: HttpClient) { }

  getPatients(): Observable<Patient[]> {    
    let body = '{"selector": {"gender": {"$eq": "female"}}}';
        
    return this.http.post(environment.apiUrl + '_find', body, this.httpOptions)
      .pipe(
        map(response => {
          response['docs'].map(patient => patient.id = patient._id);
          return response['docs'];
        })
      );
  }

  // get the latest rev for the doc before deleting it
  deletePatient(id: string): Observable<any> {
    return this.http.get(environment.apiUrl + id, this.httpOptions)
      .pipe(
        mergeMap(patient => 
          this.http.delete(
            environment.apiUrl + id + '?rev=' + patient['_rev'], 
            this.httpOptions
          )
        )
      );
  }
}
