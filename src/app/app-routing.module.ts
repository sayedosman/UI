import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DepartmentModule } from './department/department.module';
import { LoginModule } from './login/login.module';
import { EmployeeModule } from './employee/employee.module';

const routes: Routes = [
  {path:'login',loadChildren: () => LoginModule},
  {path:'employee',loadChildren: () =>EmployeeModule},
  {path:'department',loadChildren: () =>DepartmentModule},
 
 ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
