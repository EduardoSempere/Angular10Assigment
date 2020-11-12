import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Assignment3Component } from './assignment3.component';
import { Assignment3RoutingModule } from './assignment3-routing.module';



@NgModule({
  declarations: [
    Assignment3Component
  ],
  imports: [
    CommonModule,
    Assignment3RoutingModule
  ]
})
export class Assignment3Module { }
