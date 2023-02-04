import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'; 

import { BaseRoutingModule } from './base-routing.module';
import { CounterComponent } from './counter/counter.component';
import { BaseDirectivesComponent } from './base-directives/base-directives.component';
import { StructuralDirectivesComponent } from './structural-directives/structural-directives.component';


@NgModule({
  declarations: [
    CounterComponent,
    BaseDirectivesComponent,
    StructuralDirectivesComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    BaseRoutingModule
  ]
})
export class BaseModule { }
