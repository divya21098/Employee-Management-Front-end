import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service';
import { Iemployee } from '../employee';
//import { Subject} from 'rxjs';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css'],
  //providers: [EmployeeService]
})
export class EmployeeListComponent implements OnInit {

  public employeeArray: Iemployee[] = new Array();
  //editEmployeeSubject = new Subject<number>();
  constructor(private _employeeService: EmployeeService  ) {

  }

  ngOnInit() {
    this.employeeArray = this._employeeService.getEmployees();
 
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
  }

  onDeleteEmployee(id: number) {
    this._employeeService.deleteEmployee(id);
  }

  onEditEmployee(id: number) {
    console.log(id);
     //this.router.navigate(['/form',id]);
    this._employeeService.edit(id);
  //this._employeeService.editEmployeeSubject.next(id);
  }

}