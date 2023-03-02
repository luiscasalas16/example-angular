import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NgContainerComponent } from './ng-container/ng-container.component';
import { NgTemplateComponent } from './ng-template/ng-template.component';
import { ViewChildComponent } from './view-child/view-child.component';

import { MasterComponent } from '../shared/components/master/master.component';

const routes: Routes =
[
  { 
    path: '', 
    component: MasterComponent,
    children: 
    [
      { path: 'ng-container', component: NgContainerComponent },
      { path: 'ng-template', component: NgTemplateComponent },
      { path: 'view-child', component: ViewChildComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ApiRoutingModule { }
