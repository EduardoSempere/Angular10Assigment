import { Component, OnInit } from '@angular/core';
import { IAssigment1 } from './Iassigment1';

@Component({
  selector: 'app-assignment1',
  templateUrl: './assignment1.component.html',
  styleUrls: ['./assignment1.component.scss']
})
export class Assignment1Component implements OnInit {

  employee: IAssigment1;
  text: string = "";
  constructor() { }

  ngOnInit(): void {
    this.employee =   {id: null,name: null, salary: null, department:null};
  }

  addEmployee(){
    this.text = this.employee.id + " " + this.employee.name + " " + this.employee.salary + " " + this.employee.department; 
  }

  resetText(){
    this.text ="";
  }
}
