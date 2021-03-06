import { BrowserModule } from '@angular/platform-browser';
import { ModuleWithProviders, NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NestedAppFirstPageComponent } from './first-page.component';
import { NestedAppSecondPageComponent } from './second-page.component';
import { PlatformLocation } from '@angular/common';
import { ServerPlatformLocation } from '../mock-platform-location';

const providers = [];
@NgModule({
  declarations: [
    AppComponent,
    NestedAppFirstPageComponent,
    NestedAppSecondPageComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  // providers: [{provide: PlatformLocation, useClass: ServerPlatformLocation}],
  bootstrap: [AppComponent]
})
export class AppModule { }


@NgModule({})
export class App1SharedModule{
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: AppModule,
      providers: providers
    }
  }
}
