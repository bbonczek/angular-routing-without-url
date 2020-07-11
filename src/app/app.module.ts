import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { App1SharedModule } from "../../projects/app1/src/app/app.module";
import { HostAppPageComponent } from './page-from-host-app.component';

@NgModule({
  declarations: [
    AppComponent,
    HostAppPageComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    // App1SharedModule.forRoot(),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
