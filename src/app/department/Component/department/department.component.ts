import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Department } from 'src/app/model/department';
import { Employee } from 'src/app/model/employee';
import { User } from 'src/app/Model/user';
import { DepatmentServiceService } from 'src/app/Service/depatment-service.service';
import { EmployeeServiceService } from 'src/app/Service/employee-service.service';

@Component({
  selector: 'app-department',
  templateUrl: './department.component.html',
  styleUrls: ['./department.component.css']
})
export class DepartmentComponent implements OnInit {
user:User;
canAdd : boolean = true;
canViewList:boolean=true;
canUpdate : boolean = true;
canViewDetails:boolean=true;
canPrint : boolean = true;
canDelete : boolean = true;
  constructor(private router: Router,private depService:DepatmentServiceService,private cdr: ChangeDetectorRef,private empService:EmployeeServiceService) { }
  departments:Array<Department>;
  employees:Array<Employee>;
  department:Department;
  employeeId;
  ngOnInit(): void {
   
   this.user =<User>(JSON.parse(localStorage.getItem('user')));
     if(this.user.canAdd==true){
       this.canAdd=false;
     }
     if(this.user.canViewList==true)
     this.canViewList=false;
     if(this.user.canUpdate==true)
     this.canUpdate=false;
     if(this.user.canViewDetails==true)
     this.canViewDetails=false;
     if(this.user.canDelete==true)
     this.canDelete=false;
    this.depService.getAllDepartment().subscribe(data=>{
      this.departments=data;
      
     
     
    })
    
     
 
  }
  addClick(){
    this.router.navigateByUrl('/employee');
  }
  
  ngAfterViewChecked(){
    //your code to update the model
    this.cdr.detectChanges();
 }
  
 
  
  changed(e){
   
    this.empService.getAllDepEmployee(e).subscribe(data=>{
       this.employees=data;
    });
  }
  delete(e){
    this.employeeId=e;
  }
  deleteEmployee(){
    console.log(this.employeeId)
    this.empService.deleteEmployee(this.employeeId).subscribe();
   
  
    this.refresh();
  }
  

refresh(): void {
  window.location.reload();
}
}