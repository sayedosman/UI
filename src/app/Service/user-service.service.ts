import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Employee } from '../model/employee';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Router } from '@angular/router';
import { User } from '../Model/user';



@Injectable({
  providedIn: 'root'
})
export class UserServiceService {

  constructor(private httpClient:HttpClient,private router:Router) { }
    login(username:string,password:string): Observable<User> {
        const params = new HttpParams()
        .set('username', username)
        .set('password', password);
        return this.httpClient.post<User>("http://localhost:8080/api/user/" + 'login', params);
      }

}
