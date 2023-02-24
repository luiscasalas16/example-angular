import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { BindingsComponent } from './bindings/bindings.component';
import { LifecycleComponent } from './lifecycle/lifecycle.component';
import { MasterComponent } from '../shared/components/master/master.component';

const routes: Routes = 
[
  { 
    path: '',
    component: MasterComponent,
    children: 
    [
      { path: 'bindings', component: BindingsComponent },
      { path: 'lifecycle', component: LifecycleComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ComponentsRoutingModule { }
