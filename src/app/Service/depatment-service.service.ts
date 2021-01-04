import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Department } from '../model/department';

@Injectable({
  providedIn: 'root'
})
export class DepatmentServiceService {

  constructor(private httpClient:HttpClient) { }
  getAllDepartment():Observable<Array<Department>>{
    return this.httpClient.get<Array<Department>>("http://localhost:8080/api/department/all")
  }
}
