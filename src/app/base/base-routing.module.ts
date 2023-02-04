import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CounterComponent } from './counter/counter.component';
import { BaseDirectivesComponent } from './base-directives/base-directives.component';
import { StructuralDirectivesComponent } from './structural-directives/structural-directives.component';
import { BindingComponent } from './binding/binding.component';
import { HeroeMainComponent } from './heroes/heroe-main/heroe-main.component';

const routes: Routes = 
[
  { 
    path: '', 
    children: 
    [
      { path: 'counter', component: CounterComponent },
      { path: 'base-directives', component: BaseDirectivesComponent },
      { path: 'structural-directives', component: StructuralDirectivesComponent },
      { path: 'binding', component: BindingComponent },
      { path: 'heroes', component: HeroeMainComponent },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BaseRoutingModule { }
