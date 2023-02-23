import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TemplatesRoutingModule } from './templates-routing.module';

import { BuiltInComponent } from './pipes/built-in/built-in.component';
import { CustomComponent } from './pipes/custom/custom.component';
import { SortPipe } from './pipes/custom/sort.pipe';

@NgModule({
  declarations: [
    BuiltInComponent,
    CustomComponent,
    SortPipe
  ],
  imports: [
    CommonModule,
    TemplatesRoutingModule
  ]
})
export class TemplatesModule { }
