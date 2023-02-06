import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CounterComponent } from './01counter/counter.component';
import { HeroeMainComponent } from './02heroes/heroe-main/heroe-main.component';

const routes: Routes = 
[
  { 
    path: '', 
    children: 
    [
      { path: 'counter', component: CounterComponent },
      { path: 'heroes', component: HeroeMainComponent },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ExamplesRoutingModule { }
