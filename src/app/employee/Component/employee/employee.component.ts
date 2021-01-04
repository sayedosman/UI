import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Employee } from 'src/app/model/employee';
import { Department } from 'src/app/model/department';
import{EmployeeServiceService} from 'src/app/Service/employee-service.service'
import { ActivatedRoute } from '@angular/router';
import{DepatmentServiceService} from 'src/app/Service/depatment-service.service'
@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {
  employee:Employee;
  Employee: FormGroup;
    department:Department;
    
    employeeId;
   
    departments:Array<Department>;
    constructor(private empservise:EmployeeServiceService,private depService:DepatmentServiceService,private router: ActivatedRoute){
      this.Employee = new FormGroup({
        firstName:  new FormControl('',[Validators.required, Validators.minLength(4)]),
        midleName:  new FormControl('',[Validators.required,Validators.minLength(5)]),
        lastName:  new FormControl ('',[Validators.required,Validators.minLength(4)]),
        gender:  new FormControl('',[Validators.required,Validators.minLength(4)]),
        date:  new FormControl('',[ Validators.required,]),
        department:  new FormControl()
       
      });
      
      this.employee={
        employeeId:0,
        firstName:'',
        midleName:'',
        lastName:'',
        isMale:false,
        birthDate:new Date(),
        departementId:0
        
  
  
     }
     
       }

  ngOnInit(): void {
   
    this.router.params.subscribe(params => {
      this.employeeId = params['id'];
      
    });
    this.depService.getAllDepartment().subscribe(data=>{
      this.departments=data;
      
      for(let dep of this.departments){
       console.log(dep.departementName)
         
       }
    })
   
    if(this.employeeId!=null){

      this.empservise.getEmployee(this.employeeId).subscribe(data=>{
         this.employee=data;
        
      })
       
    }
    
  }
  get f2(){
    
    return this.Employee.controls;
  
}




onSubmit() {
console.log("here")
  this.employee.firstName = this.Employee.get('firstName').value;
  console.log("here2")
  this.employee.lastName = this.Employee.get('lastName').value;
  this.employee.midleName = this.Employee.get('midleName').value;
  this.employee.isMale=this.Employee.get('gender').value;
  this.employee.birthDate=this.Employee.get('date').value;
  this.employee.departementId=this.Employee.get('department').value;
   if(this.employeeId==null){
     console.log(this.employee.birthDate)
     console.log(this.employee.departementId)
     console.log(this.employee.firstName)
     console.log(this.employee.lastName)
     console.log(this.employee.midleName)
     console.log(this.employee.isMale)
    this.empservise.addEmployee(this.employee).subscribe(data=>{
      if(data==true){
        console.log('welcome');
        document.getElementById("add").click();
        document.getElementById("tadd").click();
       
        }
        else{
          document.getElementById("add").click();
          document.getElementById("fadd").click();
         
        }
   });
  }
   else{
  this.empservise.updateEmpoyee( this.employee,this.employee.employeeId).subscribe(data=>{
      if(data==true){
        console.log('welcome');
     
      }
      else{  
      }
    });
  }
}




refresh(): void {
  window.location.reload();
}
 
  
loginUrl(){
  this.refresh();
}
  
}
