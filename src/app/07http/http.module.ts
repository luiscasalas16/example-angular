import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HttpRoutingModule } from './http-routing.module';
import { BasicComponent } from './basic/basic.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    BasicComponent
  ],
  imports: [
    CommonModule,
    HttpRoutingModule,
    SharedModule
  ]
})
export class HttpModule { }
