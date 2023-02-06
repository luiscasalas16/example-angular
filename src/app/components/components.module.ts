import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { ComponentsRoutingModule } from './components-routing.module';

import { BindingComponent } from './binding/binding.component';
import { SizerComponent } from './binding/sizer.component';

@NgModule({
  declarations: [
    SizerComponent,
    BindingComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ComponentsRoutingModule
  ]
})
export class ComponentsModule { }
