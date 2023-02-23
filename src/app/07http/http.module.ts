import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HttpRoutingModule } from './http-routing.module';
import { BasicComponent } from './basic/basic.component';


@NgModule({
  declarations: [
    BasicComponent
  ],
  imports: [
    CommonModule,
    HttpRoutingModule
  ]
})
export class HttpModule { }
