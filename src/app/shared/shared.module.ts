import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { ErrorComponent } from './page/error/error.component';
import { NotFoundComponent } from './page/not-found/not-found.component';
import { MenuComponent } from './components/menu/menu.component';
import { MasterComponent } from './components/master/master.component';

@NgModule({
  declarations: [
    ErrorComponent,
    NotFoundComponent,
    MenuComponent,
    MasterComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    ErrorComponent,
    NotFoundComponent,
    MenuComponent
  ]
})
export class SharedModule { }
