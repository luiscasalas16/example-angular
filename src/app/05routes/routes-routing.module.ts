import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustomMasterComponent } from './custom-master/custom-master.component';
import { MainComponent } from './main/main.component';
import { FirstComponent } from './first/first.component';
import { SecondComponent } from './second/second.component';
import { QueryParamsComponent } from './query-params/query-params.component';
import { RouteParamsComponent } from './route-params/route-params.component';

const routes: Routes =
[
  { 
    path: '', 
    component: CustomMasterComponent,
    children: 
    [
      { path: '',   redirectTo: '/routes/main', pathMatch: 'full' },
      { path: 'main', component: MainComponent },
      { path: 'first', component: FirstComponent },
      { path: 'second', component: SecondComponent },
      { path: 'query-params', component: QueryParamsComponent },
      { path: 'route-params/:id', component: RouteParamsComponent },
      { path: '**', redirectTo: '/routes/main' }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RoutesRoutingModule { }
