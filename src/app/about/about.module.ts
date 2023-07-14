import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { AboutComponent } from './about.component';
import { DeveloperComponent } from './pages/developer/developer.component';
import { ApplicationComponent } from './pages/application/application.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    //components that the module contains
    AboutComponent,
    DeveloperComponent,
    ApplicationComponent,
  ],
  imports: [
    //modules that are imported into the module
    CommonModule,
    RouterModule,
    SharedModule,
  ],
  exports: [
    //components that are exported from the module
    DeveloperComponent,
    ApplicationComponent,
  ],
})
export class AboutModule {}
