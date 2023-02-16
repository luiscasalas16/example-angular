import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ApiRoutingModule } from './api-routing.module';
import { ViewChildComponent } from './view-child/view-child.component';


@NgModule({
  declarations: [
    ViewChildComponent
  ],
  imports: [
    CommonModule,
    ApiRoutingModule
  ]
})
export class ApiModule { }
