import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styles:[
    
  ]
})
export class TestComponent implements OnInit {
public greeting ="";
 public name="";

  constructor() { }

  ngOnInit() {
  }

  onClick(name)
  {
   console.log( this.greeting='hi');
    console.log(this.name=name);
    
  }

}
