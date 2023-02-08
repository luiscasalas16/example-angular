import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'; ; 

import { FrmsRoutingModule } from './frms-routing.module';
import { BasicComponent } from './basic/basic.component';


@NgModule({
  declarations: [
    BasicComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    FrmsRoutingModule
  ]
})
export class FrmsModule { }
