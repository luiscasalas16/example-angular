import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AttributeDirectivesComponent } from './attribute-directives/attribute-directives.component';
import { StructuralDirectivesComponent } from './structural-directives/structural-directives.component';
import { MasterComponent } from '../shared/components/master/master.component';

const routes: Routes = [
  {
    path: '',
    component: MasterComponent,
    children: [
      { path: 'attribute-directives', component: AttributeDirectivesComponent },
      {
        path: 'structural-directives',
        component: StructuralDirectivesComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DirectivesRoutingModule {}
