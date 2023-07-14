import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ApiRoutingModule } from './api-routing.module';
import { NgTemplateComponent } from './ng-template/ng-template.component';
import { NgContainerComponent } from './ng-container/ng-container.component';
import { ViewChildComponent } from './view-child/view-child.component';

import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [ViewChildComponent, NgTemplateComponent, NgContainerComponent],
  imports: [CommonModule, ApiRoutingModule, SharedModule],
})
export class ApiModule {}
