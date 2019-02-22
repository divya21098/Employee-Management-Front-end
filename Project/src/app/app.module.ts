import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { AppComponent } from './app.component';
import { TestComponent } from './test/test.component';
import { HttpClientModule } from '@angular/common/http';
import { EmployeeListComponent} from './employee-list/employee-list.component';
import { EmployeeDetailComponent} from './employee-detail/employee-detail.component';
import { EmployeeService } from './employee.service';
// import { AppRoutingModule} from './app-routing.module';
import { FormComponent } from './form/form.component';
import { Full_Routes } from './app-routing.module';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
@NgModule({
  declarations: [
    AppComponent,
    TestComponent,
    EmployeeListComponent,
    EmployeeDetailComponent,
    FormComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    // AppRoutingModule
    Full_Routes,
    RouterModule
  ],
  providers: [EmployeeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
