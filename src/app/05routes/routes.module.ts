import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RoutesRoutingModule } from './routes-routing.module';
import { FirstComponent } from './first/first.component';
import { SecondComponent } from './second/second.component';
import { MainComponent } from './main/main.component';
import { RouteParamsComponent } from './route-params/route-params.component';
import { QueryParamsComponent } from './query-params/query-params.component';
import { MenuComponent } from './menu/menu.component';;

@NgModule({
  declarations: [
    FirstComponent,
    SecondComponent,
    MainComponent,
    RouteParamsComponent,
    QueryParamsComponent,
    MenuComponent
  ],
  imports: [
    CommonModule,
    RoutesRoutingModule
  ]
})
export class RoutesModule { }
