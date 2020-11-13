import { Component, OnInit } from '@angular/core';
import { IAssigment3 } from './model/Iassigment3';
import { Assignment3Service } from './services/assignment3.service';

@Component({
  selector: 'app-assignment3',
  templateUrl: './assignment3.component.html',
  styleUrls: ['./assignment3.component.scss']
})
export class Assignment3Component implements OnInit {

  employees: IAssigment3[];
  constructor(private assignment3Service: Assignment3Service) { }

  ngOnInit(): void {

    this.assignment3Service.getEmployees().subscribe({
      next: data => this.employees = data,
      error: err => console.log(err)
    });
    
  }
 clickcol: number[] = [0,0,0,0];
 
  
  sort(col: number, propertyName: string, type: number){
    console.log(col);
    
    this.clickNumber(col);
    this.employees.sort( (e1, e2) => {
      if (this.clickcol[col] == 1) {
        return this.customSort(e2,e1, col, propertyName, type);
      }else {
        return this.customSort(e1,e2, col, propertyName, type);
      }
    });
    console.log(this.employees)
  }

 
  clickNumber(col: number){

      if (this.clickcol[col] == 1) {
        this.clickcol[col] = 0;
      }else {
        this.clickcol[col] = this.clickcol[col] + 1;
      }
      
    
  }
  customSort(e1: IAssigment3, e2: IAssigment3, col: number, propertyName: string, type: number): number {

    let val1 = type == 0 ? e1[propertyName] : e1[propertyName].toUpperCase();
    let val2 = type == 0 ? e2[propertyName] : e2[propertyName].toUpperCase();
    
    if (val1 > val2) {
      return 1;
    } 
    if (val1< val2){
      return -1
    }

    return 0;
  }
 
}
