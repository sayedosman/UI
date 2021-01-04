import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Employee } from '../model/employee';

@Injectable({
  providedIn: 'root'
})
export class EmployeeServiceService {

  constructor(private httpClient:HttpClient,private router:Router) { }
  deleteEmployee(employeeId:Number):Observable<Boolean>{
    console.log(employeeId)
    return this.httpClient.delete<Boolean>("http://localhost:8080/api/employee/"+employeeId);
  }
  
  getAllEmployee():Observable<Array<Employee>>{
    return this.httpClient.get<Array<Employee>>("http://localhost:8080/api/employee/all")
  }
  getAllDepEmployee(id:Number):Observable<Array<Employee>>{
    return this.httpClient.get<Array<Employee>>("http://localhost:8080/api/employee/dept/"+id)
  }
   getEmployee(id:Number):Observable<Employee>{
    return this.httpClient.get<Employee>("http://localhost:8080/api/employee/"+id)
  
   }
addEmployee(employee:Employee):Observable<Boolean>{
  return this.httpClient.post<Boolean>("http://localhost:8080/api/employee/add",employee)
}
updateEmpoyee(employee:Employee,id:Number){
  return this.httpClient.put<Boolean>("http://localhost:8080/api/employee/"+id,employee)

}
/*login(username:string,password:string): Observable<JwtResponse> {
  const params = new HttpParams()
  .set('username', username)
  .set('password', password);
  return this.httpClient.post<JwtResponse>("http://localhost:8080/api/auth/" + 'login', params);
}

isAuthenticated(): boolean {
  return localStorage.getItem('username') != null;
}
login2(data:Data):Observable<Response>{
  return this.httpClient.post<Response>("https://salonic.wothoq.co/api/users/login",data)
}
logout() {
  this.httpClient.get('http://localhost:8080/logout');
  localStorage.removeItem('username');
  localStorage.removeItem('authenticationToken');
  this.router.navigate(['/admin']);
}*/
}
