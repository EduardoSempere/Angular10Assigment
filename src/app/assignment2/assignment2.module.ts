import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Assignment2Component } from './assignment2.component'; 
import { Assignment2RoutingModule } from './assignment2-routing.module';



@NgModule({
  declarations: [
    Assignment2Component
  ],
  imports: [
    CommonModule,
    Assignment2RoutingModule
  ]
})
export class Assignment2Module { }
