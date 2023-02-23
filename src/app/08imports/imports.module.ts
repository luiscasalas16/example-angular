import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ImportsRoutingModule } from './imports-routing.module';
import { BasicComponent } from './basic/basic.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    BasicComponent
  ],
  imports: [
    CommonModule,
    ImportsRoutingModule,
    SharedModule
  ]
})
export class ImportsModule { }
