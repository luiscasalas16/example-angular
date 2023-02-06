import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { StructuralDirectivesComponent } from './structural-directives/structural-directives.component';
import { BaseDirectivesComponent } from './base-directives/base-directives.component';

const routes: Routes = 
[
  { 
    path: '', 
    children: 
    [
      { path: 'base-directives', component: BaseDirectivesComponent },
      { path: 'structural-directives', component: StructuralDirectivesComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DirectivesRoutingModule { }
