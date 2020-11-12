import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';  
import { Assignment2Component } from './assignment2.component';

const routes: Routes = [  
  {path: 'assignment2', component: Assignment2Component}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class Assignment2RoutingModule { }
