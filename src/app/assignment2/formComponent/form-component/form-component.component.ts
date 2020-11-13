import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Employee } from '../../class/employee';
import { IAssigment2 } from '../../Iassigment2';

@Component({
  selector: 'app-form-component',
  templateUrl: './form-component.component.html',
  styleUrls: ['./form-component.component.scss']
})
export class FormComponentComponent implements OnInit {

  employeeForm: FormGroup;
  tempEmployee: IAssigment2;
  @Input('editarOadd') editarOadd: string = "Add";
  @Input('editEmployee') editEmployee: IAssigment2;
  @Output() employee: EventEmitter<IAssigment2> = new EventEmitter<IAssigment2>();
  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.employeeForm = this.formBuilder.group({
      idForm: [''],
      nameForm: [''],
      salaryForm: [''],
      depForm: ['']

    });

  }

  // seve() {

  //   let employee2: IAssigment2 = new Employee(this.employeeForm.get("idForm").value,
  //                                             this.employeeForm.get("nameForm").value,
  //                                             this.employeeForm.get("salaryForm").value,
  //                                             this.employeeForm.get("depForm").value
  //                                           );

  //   this.employee.emit(employee2);
  // }
  resetForm() {
    this.employeeForm.reset();
  }

  agregarEmployee(){
    console.log("en el metodo agregarEmployee");
    let employee2: IAssigment2 = new Employee(this.employeeForm.get("idForm").value,
                                              this.employeeForm.get("nameForm").value,
                                              this.employeeForm.get("salaryForm").value,
                                              this.employeeForm.get("depForm").value
                                            );
    
    this.employee.emit(employee2);
    this.resetForm();
  }

  editarEmployee(employee: IAssigment2){
    console.log("en el metodo editarEmployee", employee);
    this.tempEmployee = employee;
    this.employeeForm.get("depForm").setValue(employee.empDep);
    this.employeeForm.get("idForm").setValue(employee.empId);
    this.employeeForm.get("nameForm").setValue(employee.empName);
    this.employeeForm.get("salaryForm").setValue(employee.empSal);
  }

  submitEmployee(employee: IAssigment2){
    console.log("en el metodo submitEmployee", employee);
    this.tempEmployee.empDep = this.employeeForm.get("depForm").value;
    this.tempEmployee.empId = this.employeeForm.get("idForm").value;
    this.tempEmployee.empName = this.employeeForm.get("nameForm").value;
    this.tempEmployee.empSal = this.employeeForm.get("salaryForm").value;
    this.resetForm()
  }

  

}
