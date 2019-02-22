import { Injectable, EventEmitter, Output } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Iemployee } from './employee';
import { Subject, Observable } from 'rxjs';
import { Router } from '@angular/router';
//import { Observable} from 'rxjs';

//import { BehaviorSubject} from 'rxjs';

//import { FormComponent } from './form/form.component';
//import { HttpHeaders } from '@angular/common/http';

// const httpOptions = {
//   headers: new HttpHeaders({
//     'Content-Type': 'application/json',
//     'Authorization': 'my-auth-token'
//   })
// };
@Injectable(//{
  //providedIn: 'root'
  //}
)
export class EmployeeService {
  //@Output() employeeEdit:Iemployee;   
  addEmployeeSubject = new Subject<Iemployee[]>();
  deleteEmployeeSubject = new Subject<Iemployee[]>();
  editEmployeeSubject = new Subject<number>();
  editEmpid:Observable<number>;
  employeeEdit: Iemployee;
  public employeeArray: Iemployee[] = [
    new Iemployee(1, 'ruch', 'pawar', 'IT', 'Manager', 1000),
    new Iemployee(2, 'divya', 'kamath', 'CS', 'accountant', 1900),
    new Iemployee(3, 'anee', 'sas', 'Sales', 'Team Leader', 9000)

  ];

  // newEmpAdd = this.NewEmployee.asObservable();
  // newEmp(emp: Iemployee){
  //   this.NewEmployee.next(emp);
  //   console.log(emp);
  // }
  constructor(private http: HttpClient, private router: Router) {

  }

  getEmployees(): Iemployee[] {
    console.log(this.employeeArray);
    return this.employeeArray.slice();
  }
  getEmployee(id: number): Iemployee {
    this.employeeEdit = this.employeeArray[id];
    return this.employeeEdit;
  }
  // returnEmployeeEdit():Iemployee {
  //   console.log(this.employeeEdit);
  //   return this.employeeEdit;

  // }
  addEmployee(employee: Iemployee) {
    this.employeeArray.push(employee);
    console.log(this.employeeArray);
    this.addEmployeeSubject.next(this.employeeArray.slice());

    //this.EmployeeAddedEvent.emit(this.employeeArray.slice());
    //this.EmployeeAddedEvent.emit(employee);
    // EmployeeService.newEmployee = employee;
    // console.log(EmployeeService.newEmployee);
    //const newEmployee1=this.newEmployee;
  }

  deleteEmployee(id: number) {
    this.employeeArray.splice(id, 1);
    console.log(this.employeeArray);
    this.deleteEmployeeSubject.next(this.employeeArray.slice());
  }
  updateEmployee(id: number, newEmp: Iemployee) {
    console.log(newEmp);
    this.employeeArray[id] = newEmp;
    this.addEmployeeSubject.next(this.employeeArray.slice());
  }
  edit(id: number) {
    //this.router.navigate(['/form']);

    //  this.editEmpid =new Observable(observer=>
    //    {
    //     observer.next(id);

    //    }
    //  );
    //this.editEmpid=id;
    //console.log(this.editEmpid);
    setTimeout(()=>
    this.editEmployeeSubject.next(id),0);
    this.router.navigate(['/form']);
    //return this.editEmpid;
    //this.editEmployeeSubject.next(this.editEmpid);
    //this.returnEditEmp();

  }
  //  returnEditEmp():Observable<number>
  // {
  //   return this.editEmpid;
  // }
  // setEmployee(employee: Iemployee) {
  //   EmployeeService.employee = employee;
  // this.employee = new Iemployee(employee);
  // const num = this.employeeArray.push(this.employee);
  // EmployeeService.employeeArray[0] = employee;
  // const a = EmployeeService.employeeArray.push(employee);
  // EmployeeService.employeeArray = [];
  // EmployeeService.employeeArray[0] = employee;
  // console.log(a);
  //this.newEmployee.next(this.employeeArray.slice());
  //}

  //return this.employeeArray;

  //post in db
  // addEmp (emp: Iemployee): Observable<Iemployee> {
  //   return this.http.post<Iemployee>("/assets/data/employees.json", emp, httpOptions);

  // }
}
