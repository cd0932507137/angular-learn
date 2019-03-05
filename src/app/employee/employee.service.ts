import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { IEmployee } from './employee';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  private url:string = '/assets/data/employee.json';
  constructor(
    private http: HttpClient
  ) { }

  getEmployee () {
    return this.http.get<IEmployee>(this.url); 
  }
}
