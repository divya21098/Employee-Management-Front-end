import { Component, OnInit } from '@angular/core'; 
import { EmployeeService } from '../employee.service';
import { Iemployee } from '../employee';
import { Subscription } from 'rxjs';
//import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-employee-detail',
  templateUrl: './employee-detail.component.html',
  styleUrls: ['./employee-detail.component.css'],
  //providers: [EmployeeService]

})
export class EmployeeDetailComponent implements OnInit{
  //@ViewChild('f') form: NgForm;
  employeeArray: Iemployee[];
  subscription: Subscription;
  editMode = false;
  edittedId: number;
  edittedEmployee: Iemployee;
  constructor(private _employeeService: EmployeeService) {

  }

  ngOnInit() {
    this.employeeArray = this._employeeService.getEmployees();
    console.log(this.employeeArray);



    //this.employeeArray =this._employeeService.returnEmployee();
    this._employeeService.addEmployeeSubject.subscribe(
      (resp: Iemployee[]) => {
        this.employeeArray = resp;
        console.log(this.employeeArray);
      },
      (error) => {
        console.log(error.statusText);
      }
    );
    this._employeeService.deleteEmployeeSubject.subscribe(
      (resp: Iemployee[]) => {
        this.employeeArray = resp;
        console.log(this.employeeArray);
      },
      (error) => {
        console.log(error.statusText);
      }
    );

    // this.subscription = this._employeeService.editEmployeeSubject.subscribe(
    //   (resp: number) => {
    //     this.editMode = true;
    //     this.edittedId = resp;
    //     this.edittedEmployee = this._employeeService.getEmployee(resp);
    //     this.form.setValue({
    //       id: this.edittedEmployee.id,
    //       name: this.edittedEmployee.name,
    //       surname: this.edittedEmployee.surname,
    //       deptartment: this.edittedEmployee.department,
    //       position: this.edittedEmployee.position,
    //       pay: this.edittedEmployee.pay
    //     })
    //   },
    //   (error) => {
    //     console.log(error.statusText);
    //   }

    // );


  }
  // ngOnDestroy() {
  //   this.subscription.unsubscribe();
  // }
}
