import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'; 

import { BaseRoutingModule } from './base-routing.module';
import { CounterComponent } from './counter/counter.component';
import { BaseDirectivesComponent } from './base-directives/base-directives.component';
import { StructuralDirectivesComponent } from './structural-directives/structural-directives.component';
import { HeroeDetailComponent } from './heroes/heroe-detail/heroe-detail.component';
import { HeroeListComponent } from './heroes/heroe-list/heroe-list.component';
import { HeroeMainComponent } from './heroes/heroe-main/heroe-main.component';
import { HeroeService } from './heroes/services/heroes.service';
import { SizerComponent } from './binding/sizer.component';
import { BindingComponent } from './binding/binding.component';


@NgModule({
  declarations: [
    CounterComponent,
    BaseDirectivesComponent,
    StructuralDirectivesComponent,
    HeroeDetailComponent,
    HeroeListComponent,
    HeroeMainComponent,
    SizerComponent,
    BindingComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    BaseRoutingModule
  ],
  providers: [
    HeroeService
  ]
})
export class BaseModule { }
