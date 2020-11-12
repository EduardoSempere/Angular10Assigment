import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';  
import { Assignment3Component } from './assignment3.component';

const routes: Routes = [  
  {path: 'assignment3', component: Assignment3Component}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class Assignment3RoutingModule { }
