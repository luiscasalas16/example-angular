import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HomeModule } from './home/home.module';
import { AboutModule } from './about/about.module';
import { SharedModule } from './shared/shared.module';

//locate
import localeEsCr from '@angular/common/locales/es-CR';
import localeEs from '@angular/common/locales/es';
import localeFr from '@angular/common/locales/fr';
import { registerLocaleData } from '@angular/common';
registerLocaleData(localeEsCr);
registerLocaleData(localeEs);
registerLocaleData(localeFr);
//locate

@NgModule({ declarations: [AppComponent],
    //locate
    bootstrap: [AppComponent], imports: [BrowserModule,
        AppRoutingModule,
        HomeModule,
        AboutModule,
        SharedModule], providers: [{ provide: LOCALE_ID, useValue: 'es-CR' }, provideHttpClient(withInterceptorsFromDi())] })
export class AppModule {}
