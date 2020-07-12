import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HostAppPageComponent } from './page-from-host-app.component';
import { LocationStrategy, PlatformLocation } from '@angular/common';

@NgModule({
  declarations: [
    AppComponent,
    HostAppPageComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
