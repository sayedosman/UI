import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DepartmentComponent } from './Component/department/department.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path:'',component:DepartmentComponent},
 ];

@NgModule({
  declarations: [DepartmentComponent],
  imports: [
    CommonModule,
     RouterModule.forChild(routes),
  ]
})
export class DepartmentModule { }
