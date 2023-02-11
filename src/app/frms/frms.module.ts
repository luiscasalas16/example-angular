import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'; ; 

import { FrmsRoutingModule } from './frms-routing.module';
import { TemplateBasicComponent } from './template/template-basic/template-basic.component';
import { TemplateDynamicComponent } from './template/template-dynamic/template-dynamic.component';
import { TemplateValidationsComponent } from './template/template-validations/template-validations.component';
import { ReactiveBasicComponent } from './reactive/reactive-basic/reactive-basic.component';
import { ReactiveDynamicComponent } from './reactive/reactive-dynamic/reactive-dynamic.component';
import { ReactiveValidationsComponent } from './reactive/reactive-validations/reactive-validations.component';

@NgModule({
  declarations: [
    TemplateBasicComponent,
    TemplateDynamicComponent,
    TemplateValidationsComponent,
    ReactiveBasicComponent,
    ReactiveDynamicComponent,
    ReactiveValidationsComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    FrmsRoutingModule
  ]
})
export class FrmsModule { }
