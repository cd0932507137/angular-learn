import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { map, catchError } from 'rxjs/operators';
import { IEmployee } from './employee';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  private url:string = '/assets/data/employee.json';
  constructor(
    private http: HttpClient
  ) { }

  getEmployee () {
    return this.http.get<IEmployee>(this.url).pipe(catchError(this.errorHandler)); 
  }

  errorHandler (error: HttpErrorResponse) {
    return Observable.throw(error.message || "Server Error");
    
  }
}
