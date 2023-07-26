import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { BindingComponent } from './bindings/binding.component';
import { LifecycleComponent } from './lifecycle/lifecycle.component';
import { MasterComponent } from '../shared/components/master/master.component';

const routes: Routes = [
  {
    path: '',
    component: MasterComponent,
    children: [
      { path: 'binding', component: BindingComponent },
      { path: 'lifecycle', component: LifecycleComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ComponentsRoutingModule {}
