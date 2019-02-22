
import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { Iemployee } from '../employee';
import { EmployeeService } from '../employee.service';
import { Subscription } from 'rxjs';
import { ActivatedRoute, Params } from '@angular/router';
@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css'],
  //providers: [EmployeeService]
})
export class FormComponent implements OnInit, OnDestroy {
  //@Output() EmployeeAdded = new EventEmitter<Iemployee>();
  //@Input() employee: Iemployee;
  //@ViewChild('f') form:FormGroup;

  subscription: Subscription;
  public form: FormGroup;
  public employee: Iemployee;
  public editMode: boolean;
  public edittedEmployeeId: number;
  public edittedEmployee: Iemployee;
  //emp = { id: '', name: '', surname: '', deptartment: '', position: '', pay: '' };
  //private route: ActivatedRoute
  constructor(private employeeService: EmployeeService, private fb: FormBuilder,
  ) {

  }

  ngOnInit() {
    //console.log(this.editMode);

    //this.AddEmployee();
    //this.onChange();
    // this.route.params.subscribe(
    //   (params: Params) => {
    //     this.edittedEmployeeId = +params['id'];
    //     this.editMode = params['id'] != 'null';
    //     console.log(this.editMode);
    //   }
    // );
    this.buildForm();
    this.subscription = this.employeeService.editEmployeeSubject.subscribe((resp) => {
      console.log(resp);
      this.editMode = true;
      this.edittedEmployeeId = resp;
      this.edittedEmployee = this.employeeService.getEmployee(resp);
      this.form.setValue(
        {
          id: this.edittedEmployee.id,
          name: this.edittedEmployee.name,
          surname: this.edittedEmployee.surname,
          department: this.edittedEmployee.department,
          position: this.edittedEmployee.position,
          pay: this.edittedEmployee.pay
        })

    },
      (error) => {
        console.log(error.statusText);
      },
    ()=>
  {

  });
    //this.updateEmployee();
    //console.log(this.subscription);

  }

  ngOnDestroy() {
  
    //if(this.subscription && !this.subscription.closed)
    this.subscription.unsubscribe();
    console.log("destroy");
  }
  buildForm() {
    this.editMode = false;
    this.form = this.fb.group({
      id: new FormControl('', [
        Validators.required,
        Validators.pattern(/^[1-9]+[0-9]*$/),
      ]),

      name: new FormControl('', [
        Validators.required,
        Validators.minLength(1),
      ]),
      surname: new FormControl('', [
        Validators.required,
        Validators.minLength(1),

      ]),
      department: new FormControl('', [
        Validators.required,
        Validators.minLength(1),

      ]),
      position: new FormControl('', [
        Validators.required,
        Validators.minLength(1),

      ]),
      pay: new FormControl('', [
        Validators.required,
        Validators.pattern(/^[1-9]+[0-9]*$/),

      ])

    })
  }
  AddEmployee() {

    const f = this.form.value;
    console.log(this.editMode)
    const NewEmployee = new Iemployee(f.id, f.name, f.surname, f.department, f.position, f.pay);
    console.log(NewEmployee);
    // this.employeeService.addEmployee(NewEmployee)

    if (this.editMode) {
      console.log("hi");
      this.employeeService.updateEmployee(this.edittedEmployeeId, NewEmployee);
    }
    else {
      this.employeeService.addEmployee(NewEmployee)
    };
    // console.log(NewEmployee);
    this.editMode=false;
    this.form.reset();

  }
  // updateEmployee()
  // {
   
 
  // }

}
