import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Assignment1RoutingModule } from './assignment1-routing.module';
import { Assignment1Component } from './assignment1.component';
import { FormsModule } from '@angular/forms';
import { ShowEmployeePipe } from './show-employee.pipe';



@NgModule({
  declarations: [
    Assignment1Component,
    ShowEmployeePipe
  ],
  imports: [
    CommonModule,
    Assignment1RoutingModule,
    
    FormsModule
  ]
})
export class Assignment1Module { }
