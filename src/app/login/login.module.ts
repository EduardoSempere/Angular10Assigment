import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login.component';
import { ReactiveFormsModule } from '@angular/forms';
import { LoginRoutingModule } from './login-routing.module'; 
import { ShareModule } from '../share/share.module';
import { DialogModule } from 'primeng/dialog';


@NgModule({
  declarations: [
    SignupComponent,
    LoginComponent
  ],
  imports: [
    CommonModule,
    ShareModule,
    ReactiveFormsModule,
    DialogModule,
    LoginRoutingModule
  ]
})
export class LoginModule { }
