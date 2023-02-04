import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeModule } from './home/home.module';
import { AboutModule } from './about/about.module';
import { ErrorComponent } from './shared/page/error/error.component';
import { NotFoundComponent } from './shared/page/not-found/not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    ErrorComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,

    HomeModule,
    AboutModule,
  ], 
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
