import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'; ; 

import { FrmsRoutingModule } from './frms-routing.module';
import { BaseComponent } from './base/base.component';


@NgModule({
  declarations: [
    BaseComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    FrmsRoutingModule
  ]
})
export class FrmsModule { }
