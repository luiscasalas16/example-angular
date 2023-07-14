import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RoutesRoutingModule } from './routes-routing.module';
import { FirstComponent } from './first/first.component';
import { SecondComponent } from './second/second.component';
import { MainComponent } from './main/main.component';
import { RouteParamsComponent } from './route-params/route-params.component';
import { QueryParamsComponent } from './query-params/query-params.component';
import { CustomMasterComponent } from './custom-master/custom-master.component';
import { SharedModule } from '../shared/shared.module';
import { ExternalComponent } from './external/external.component';
import { InternalComponent } from './internal/internal.component';

@NgModule({
  declarations: [
    FirstComponent,
    SecondComponent,
    MainComponent,
    RouteParamsComponent,
    QueryParamsComponent,
    CustomMasterComponent,
    ExternalComponent,
    InternalComponent,
  ],
  imports: [CommonModule, RoutesRoutingModule, SharedModule],
})
export class RoutesModule {}
