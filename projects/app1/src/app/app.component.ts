import { Component } from '@angular/core';

@Component({
  selector: 'nested-app-root',
  template: `
  <div class="pure-g">
    <h1 class="pure-u-1 center">Child application</h1>
    <p class="pure-u-1 center">The test you are reading is already a nested application. It's route was defined in host application's app-routing.module, but content is another application. As you can see below, there are 2 buttons - they will change your route as well. They are a bit different than the ones in the sidenav though - they are in 100% part of the nested application. Try to change your current route using them.</p>
    <p class="pure-u-1 center">Hopefully, your route will change, but you will not see it in the address bar in your browser.</p>
  </div>
  <a class="pure-button pink" routerLink="/page-with-nested-app/first-page-from-nested-app">First page from nested app</a>
  <a class="pure-button pink" routerLink="/page-with-nested-app/second-page-from-nested-app">Second page from nested app</a>
  <div class="pure-u-1 nested-app-space">
    <router-outlet></router-outlet>
  </div>
  `,
  styles: [`
    .center{
      text-align: center;
    }

    .nested-app-space {
      background: yellow;
      height: 400px;
    }

    .pink {
      background-color: #ED1C5B;
    }
  `]
})
export class AppComponent {}
