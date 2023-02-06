import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { ExamplesRoutingModule } from './examples-routing.module';

import { CounterComponent } from './01counter/counter.component';
import { HeroeService } from './02heroes/services/heroes.service';
import { HeroeDetailComponent } from './02heroes/heroe-detail/heroe-detail.component';
import { HeroeListComponent } from './02heroes/heroe-list/heroe-list.component';
import { HeroeMainComponent } from './02heroes/heroe-main/heroe-main.component';

@NgModule({
  declarations: [
    CounterComponent,
    HeroeDetailComponent,
    HeroeListComponent,
    HeroeMainComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ExamplesRoutingModule
  ],
  providers: [
    HeroeService
  ]
})
export class ExamplesModule { }
