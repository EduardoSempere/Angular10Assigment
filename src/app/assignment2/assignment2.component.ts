import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Employee } from './class/employee';
import { FormComponentComponent } from './formComponent/form-component/form-component.component';
import { IAssigment2 } from './Iassigment2';
import { Assignment2Service } from './service/assignment2.service';

@Component({
  selector: 'app-assignment2',
  templateUrl: './assignment2.component.html',
  styleUrls: ['./assignment2.component.scss']
})
export class Assignment2Component implements OnInit {


  // @ViewChild(FormComponentComponent) formComponentComponent: FormComponentComponent ; 
  employee: IAssigment2;
  editEmployee: IAssigment2;
  employees: IAssigment2[];
  constructor(private assignment2Service: Assignment2Service) { }

  ngOnInit(): void {
    this.assignment2Service.getEmployees().subscribe({
      next: data => this.employees = data,
      error: err => console.log(err)
    });

  }



  save() {
    console.log("assig---save");

    // this.employees.push(employee2);

  }
  agregarEmployee(employee: IAssigment2) {
    console.log("======en el metodo agregar", employee);
    this.employees.push(employee);
  }

  editarEmployee(employee: IAssigment2) {
    console.log("ed")
    // this.formComponentComponent.editarEmployee(employee);
  }

  borrarEmployee(id: number) {
    this.employees = this.employees.filter( o => o.empId != id );
  }
  

}
