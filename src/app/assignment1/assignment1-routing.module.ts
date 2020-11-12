import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router'; 
import { Assignment1Component } from './assignment1.component';

const routes: Routes = [  
  {path: 'assignment1', component: Assignment1Component}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class Assignment1RoutingModule { }
