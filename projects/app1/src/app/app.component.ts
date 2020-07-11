import { Component } from '@angular/core';

@Component({
  selector: 'nested-app-root',
  template: `
  <div class="pure-g">
    <h1 class="pure-u-1 center">Nested App</h1>
    <h3 class="pure-u-1 center">It is a nested app as well. It has its own routing as well - click different buttons to verify that</h3>
  </div>
  <a class="pure-button pure-button-primary" href="/page-with-nested-app/first-page-from-nested-app">First page from nested app</a>
  <a class="pure-button pure-button-primary" href="/page-with-nested-app/second-page-from-nested-app">Second page from nested app</a>
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
  `]
})
export class AppComponent {}
