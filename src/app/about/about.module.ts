import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { AboutComponent } from './about.component';
import { DeveloperComponent } from './pages/developer/developer.component';
import { ApplicationComponent } from './pages/application/application.component';

@NgModule({
  declarations: [
    AboutComponent,
    DeveloperComponent,
    ApplicationComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports	: [
    DeveloperComponent,
    ApplicationComponent
  ],
})
export class AboutModule { }
