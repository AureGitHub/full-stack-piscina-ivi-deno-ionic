import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DecimalPipe } from '@angular/common';

import es from '@angular/common/locales/es';
import { registerLocaleData } from '@angular/common';
import { SharedCommomBaseModule } from 'app-base-lib';


import { environment } from '../environments/environment';
import { settings } from './settings/settings';

registerLocaleData(es);

@NgModule({

  declarations: [AppComponent],

  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    SharedCommomBaseModule.forRoot(environment, settings),
  ],
  providers: [
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },


    DecimalPipe,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
