import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  <div class="pure-g">
    <h1 class="pure-u-1 center">Host App</h1>
    <h3 class="pure-u-1 center">This is a hosting application. It can be a shell for an application that is using it's own routing.</h3>
    <h3 class="pure-u-1 center">It would be better if 'children' applications didn't interfere with this page routing</h3>
  </div>
  <div class="pure-g">
    <div class="pure-u-1 main-div">
    <a class="pure-button" href="/page-from-host">Open page from Host</a>
    <a class="pure-button" href="/page-with-nested-app">Open page from Host</a>
    <div class="pure-u-1-3 nested-app-space">
        <router-outlet></router-outlet>
    </div>
    </div>
  </div>
  `,
  styles: [`
    .center{
      text-align: center;
    }

    .main-div {
      background: pink;
      justify-content: center;
    }

    .nested-app-space {
      min-height: 700px;
      background: green;
    }

    .nested-app-space *{
      margin: 30px;
    }
  `]
})
export class AppComponent {}
