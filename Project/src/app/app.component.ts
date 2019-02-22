import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EmployeeService } from './employee.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers:[EmployeeService]
})

export class AppComponent implements OnInit {
  title = 'employee mng';
  constructor(private router: Router) {

  }
  ngOnInit()
  {
    document.body.classList.add('bg-img');
  }
  
  public goToEmployeeList() {
    this.router.navigate(['/employeeList']);
  }
  public goToEmployeeDetail()
  {
    this.router.navigate(['/employeeDetail']);
  }
  public goToForm()
  {
    this.router.navigate(['/form']);
  }
  public goToHome()
  {
    this.router.navigate(['/home'])
  }
}
