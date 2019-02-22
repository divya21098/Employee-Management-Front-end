import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { EmployeeDetailComponent } from './employee-detail/employee-detail.component';
import { FormComponent } from './form/form.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
    { path:'home',component: HomeComponent},
    { path: 'employeeDetail', component: EmployeeDetailComponent },
    { path: 'employeeList', component: EmployeeListComponent},
    { path: 'form', component: FormComponent},
   
];
export const Full_Routes = RouterModule.forRoot(routes);

//export const RoutingComponents=[ EmployeeDetailComponent,EmployeeListComponent]