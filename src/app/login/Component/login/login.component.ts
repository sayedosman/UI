import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserServiceService } from 'src/app/Service/user-service.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
 loginForm:FormGroup;
  success;
  constructor(public userService:UserServiceService,private router: Router) { 
   
    this.loginForm = new FormGroup({
      username:new FormControl('',[Validators.required,Validators.minLength(5)]),
      password:new FormControl('',Validators.required),
      
    });
  }
  get f2(){
    
    return this.loginForm.controls;
  
  }
  ngOnInit(): void {
  }
  onSubmit(){
    this.userService.login(this.loginForm.get('username').value,this.loginForm.get('password').value).subscribe(data=>{
     if (data!=null) {
      // localStorage.setItem('authenticationToken',data.authenticationToken)
      localStorage.setItem('user', JSON.stringify(data));
       
      console.log(localStorage.getItem('user'));
      this.router.navigateByUrl('/department');
     } else {
       this.success='username and password not vailed'
       console.log('Login failed');
     }
   });
}
}
