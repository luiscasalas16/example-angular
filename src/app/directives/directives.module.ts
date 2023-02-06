import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { DirectivesRoutingModule } from './directives-routing.module';

import { BaseDirectivesComponent } from './base-directives/base-directives.component';
import { StructuralDirectivesComponent } from './structural-directives/structural-directives.component';

@NgModule({
  declarations: [
    BaseDirectivesComponent,
    StructuralDirectivesComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    DirectivesRoutingModule
  ]
})
export class DirectivesModule { }
