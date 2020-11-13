import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Assignment2Component } from './assignment2.component'; 
import { Assignment2RoutingModule } from './assignment2-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormComponentComponent } from './formComponent/form-component/form-component.component';



@NgModule({
  declarations: [
    Assignment2Component,
    FormComponentComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    Assignment2RoutingModule
  ]
})
export class Assignment2Module { }
