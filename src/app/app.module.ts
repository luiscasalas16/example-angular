import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeModule } from './home/home.module';
import { AboutModule } from './about/about.module';
import { ErrorComponent } from './shared/page/error/error.component';
import { NotFoundComponent } from './shared/page/not-found/not-found.component';

//locate
import localeEsCr from '@angular/common/locales/es-CR';
import localeEs from '@angular/common/locales/es';
import localeFr from '@angular/common/locales/fr';
import { registerLocaleData } from '@angular/common';
registerLocaleData( localeEsCr );
registerLocaleData( localeEs );
registerLocaleData( localeFr );
//locate

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
  //locate
  providers: [
    { provide: LOCALE_ID, useValue: 'es-CR' }
  ],
  //locate
  bootstrap: [AppComponent]
})
export class AppModule { }
