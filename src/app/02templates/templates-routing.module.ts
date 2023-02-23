import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { BuiltInComponent } from './pipes/built-in/built-in.component';
import { CustomComponent } from './pipes/custom/custom.component';

const routes : Routes =
[
  { 
    path: 'pipes', 
    children: 
    [
      { path: 'built-in', component: BuiltInComponent },
      { path: 'custom', component: CustomComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TemplatesRoutingModule { }
