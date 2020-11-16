import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StarComponent } from './star/star.component';
import { FormsModule } from '@angular/forms';
import { EqualValidateDirective } from './directive/validate/equal-validate.directive';



@NgModule({
  declarations: [
    StarComponent,
    EqualValidateDirective
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    StarComponent,
    CommonModule,
    FormsModule,
    EqualValidateDirective
  ]
})
export class ShareModule { }
