import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BasicComponent } from './basic/basic.component';
import { TemplateBasicComponent } from './template/template-basic/template-basic.component';
import { TemplateDynamicComponent } from './template/template-dynamic/template-dynamic.component';
import { TemplateValidationsComponent } from './template/template-validations/template-validations.component';
import { ReactiveBasicComponent } from './reactive/reactive-basic/reactive-basic.component';
import { ReactiveDynamicComponent } from './reactive/reactive-dynamic/reactive-dynamic.component';
import { ReactiveValidationsComponent } from './reactive/reactive-validations/reactive-validations.component';

const routes: Routes =
[
  { 
    path: '', 
    children: 
    [
      { path: 'basic', component: BasicComponent },
      { 
        path: 'template', 
        children: 
        [
          { path: 'basic', component: TemplateBasicComponent },
          { path: 'dynamic', component: TemplateDynamicComponent },
          { path: 'validations', component: TemplateValidationsComponent }
        ]
      },
      { 
        path: 'reactive', 
        children: 
        [
          { path: 'basic', component: ReactiveBasicComponent },
          { path: 'dynamic', component: ReactiveDynamicComponent },
          { path: 'validations', component: ReactiveValidationsComponent }
        ]
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FrmsRoutingModule { }
