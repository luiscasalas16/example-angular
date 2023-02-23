import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ImportsRoutingModule } from './imports-routing.module';
import { BasicComponent } from './basic/basic.component';


@NgModule({
  declarations: [
    BasicComponent
  ],
  imports: [
    CommonModule,
    ImportsRoutingModule
  ]
})
export class ImportsModule { }
